import React, { useState } from 'react';
import { X, Trophy, CheckCircle2, Award, ArrowRight, RotateCcw } from 'lucide-react';

interface NTRPQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLevel?: (level: string) => void;
}

const QUESTIONS = [
  {
    question: "How long have you played tennis, and how is your rally consistency?",
    options: [
      { text: "Just starting out or played a few times casually. Still learning to make solid contact.", score: 1.5 },
      { text: "Can sustain a short rally at a slow pace. Developing consistency on forehand and backhand.", score: 2.5 },
      { text: "Can rally consistently (6+ balls) with moderate pace and directional control from baseline.", score: 3.5 },
      { text: "Dependable strokes with directional control, topspin/slice, depth, and ability to force errors.", score: 4.5 }
    ]
  },
  {
    question: "What best describes your serve and return?",
    options: [
      { text: "Incomplete service motion; double faults are frequent; tentative return.", score: 1.5 },
      { text: "Can get first serve in consistently at medium pace; return is steady on slower serves.", score: 2.5 },
      { text: "Good serve placement with spin control; rarely double fault; reliable aggressive return.", score: 3.5 },
      { text: "Weaponized serve (flat, kick, slice); aggressive return placed deep to neutralizer opponent.", score: 4.5 }
    ]
  },
  {
    question: "How comfortable are you at the net and with volleys?",
    options: [
      { text: "Uncomfortable at the net; prefer to stay back at the baseline.", score: 1.5 },
      { text: "Can hit routine forehand volleys, but struggle with low balls and backhand punch.", score: 2.5 },
      { text: "Comfortable approaching the net in singles and doubles; solid punch volleys and overheads.", score: 3.5 },
      { text: "Aggressive net play; quick reflexes, touch volleys, angles, and put-away overheads.", score: 4.5 }
    ]
  }
];

export const NTRPQuizModal: React.FC<NTRPQuizModalProps> = ({ isOpen, onClose, onSelectLevel }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [result, setResult] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSelectOption = (score: number) => {
    const updated = [...scores, score];
    setScores(updated);

    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      // Calculate average
      const avg = updated.reduce((a, b) => a + b, 0) / updated.length;
      let finalRating = '2.5';
      if (avg <= 1.8) finalRating = '1.0 - 2.0 (Beginner)';
      else if (avg <= 2.8) finalRating = '2.5 (Low Intermediate)';
      else if (avg <= 3.7) finalRating = '3.0 - 3.5 (Intermediate)';
      else finalRating = '4.0+ (Advanced)';
      setResult(finalRating);
    }
  };

  const handleReset = () => {
    setCurrentQ(0);
    setScores([]);
    setResult(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-100 flex flex-col">
        {/* Header */}
        <div className="p-6 bg-tennis-green text-white relative flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-tennis-forest text-tennis-volt mb-2">
              <Award className="w-3.5 h-3.5" />
              NTRP Rating Assistant
            </div>
            <h3 className="font-serif text-2xl font-bold tracking-tight">
              Find Your Tennis Rating
            </h3>
            <p className="text-xs text-gray-200 mt-1">
              Answer 3 quick questions to discover your USTA NTRP level for our adult clinics and point play.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!result ? (
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between text-xs text-gray-500 font-semibold border-b border-gray-100 pb-2">
              <span>Question {currentQ + 1} of {QUESTIONS.length}</span>
              <div className="flex gap-1.5">
                {QUESTIONS.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-6 h-1.5 rounded-full ${
                      idx === currentQ
                        ? 'bg-tennis-clay'
                        : idx < currentQ
                        ? 'bg-tennis-green'
                        : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            <h4 className="text-base font-bold text-gray-900 leading-snug">
              {QUESTIONS[currentQ].question}
            </h4>

            <div className="space-y-2.5">
              {QUESTIONS[currentQ].options.map((opt, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => handleSelectOption(opt.score)}
                  className="w-full p-3.5 rounded-xl border border-gray-200 text-left text-xs sm:text-sm text-gray-700 hover:border-tennis-green hover:bg-tennis-lightGreen/50 hover:text-tennis-green transition-all duration-150 flex items-start gap-3 group"
                >
                  <span className="w-5 h-5 rounded-full border border-gray-300 group-hover:border-tennis-green group-hover:bg-tennis-green group-hover:text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{opt.text}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-tennis-lightGreen text-tennis-green mx-auto flex items-center justify-center">
              <Trophy className="w-10 h-10 text-tennis-green" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-tennis-clay">
                Your Recommended Level
              </span>
              <h4 className="font-serif text-3xl font-bold text-tennis-green mt-1">
                {result}
              </h4>
            </div>
            <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
              Based on your answers, this is the optimal track for our weekly group clinics and Point Play match sessions.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  if (onSelectLevel) onSelectLevel(result);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-tennis-green text-white text-xs font-bold hover:bg-tennis-forest flex items-center justify-center gap-1.5 shadow"
              >
                <span>View Matching Clinics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
