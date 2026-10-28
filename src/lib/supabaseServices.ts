import { supabase } from './supabase';

export interface ClinicRegistrationSubmission {
  studentName: string;
  programType: 'Junior' | 'Adult';
  clinicName: string;
  sessionDayTime: string;
  parentName?: string;
  email: string;
  phone: string;
  baseAmount?: number;
  finalAmount?: number;
  siblingsEnrolled?: number;
}

export interface PointPlayBookingSubmission {
  sessionId: string;
  playerName: string;
  phone: string;
  ntrp: string;
}

export const submitClinicRegistration = async (submission: ClinicRegistrationSubmission) => {
  return await supabase.from('clinic_registrations').insert([
    {
      student_name: submission.studentName,
      program_type: submission.programType,
      clinic_name: submission.clinicName,
      session_day_time: submission.sessionDayTime,
      parent_name: submission.parentName || null,
      email: submission.email,
      phone: submission.phone,
      base_amount: submission.baseAmount || 0,
      final_amount: submission.finalAmount || 0,
      siblings_enrolled: submission.siblingsEnrolled || 0,
      stage: 'New Submission',
    },
  ]);
};

export const submitPointPlayBooking = async (submission: PointPlayBookingSubmission) => {
  // 1. Fetch current session roster
  const { data: sessionData, error: fetchError } = await supabase
    .from('point_play_sessions')
    .select('*')
    .eq('id', submission.sessionId)
    .single();

  if (fetchError || !sessionData) {
    throw new Error('Point Play session not found');
  }

  const currentRoster = Array.isArray(sessionData.roster) ? sessionData.roster : [];
  const newPlayer = {
    id: `R-${Date.now()}`,
    playerName: submission.playerName,
    phone: submission.phone,
    ntrp: submission.ntrp,
    checkedIn: false,
    paid: false,
    amount: 60,
    registeredAt: new Date().toISOString().split('T')[0],
  };

  const updatedRoster = [...currentRoster, newPlayer];

  // 2. Update session in Supabase
  return await supabase
    .from('point_play_sessions')
    .update({ roster: updatedRoster })
    .eq('id', submission.sessionId);
};

export const submitCourtBooking = async (booking: {
  courtNumber: number;
  title: string;
  bookedBy: string;
  playerCount?: number;
  type: string;
  startTime: string;
  endTime: string;
  date: string;
  price: number;
}) => {
  return await supabase.from('court_bookings').insert([
    {
      court_number: booking.courtNumber,
      title: booking.title,
      booked_by: booking.bookedBy,
      player_count: booking.playerCount || 2,
      type: booking.type,
      start_time: booking.startTime,
      end_time: booking.endTime,
      date: booking.date,
      price: booking.price,
      status: 'Confirmed',
    },
  ]);
};

export const submitAssessmentRequest = async (assessment: {
  name: string;
  email: string;
  phone: string;
  playerType: 'Junior' | 'Adult';
  age?: string;
  notes?: string;
}) => {
  return await supabase.from('clinic_registrations').insert([
    {
      student_name: assessment.name,
      program_type: assessment.playerType,
      clinic_name: 'Free Level Assessment',
      session_day_time: assessment.notes || 'Pending Scheduling',
      email: assessment.email,
      phone: assessment.phone,
      base_amount: 0,
      final_amount: 0,
      stage: 'New Submission',
    },
  ]);
};
