export interface User {
  id: string;
  email: string;
  full_name: string;
  skills_offered: string[];
  skills_wanted: string[];
  location: string;
  availability: {
    weekly_hours: number;
    preferred_times: string[];
  };
  points: number;
  badges: Badge[];
  created_at: string;
  latitude?: number;
  longitude?: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  image_url: string;
  points_required: number;
}

export interface Match {
  id: string;
  user1_id: string;
  user2_id: string;
  match_score: number;
  distance: number;
  status: 'pending' | 'accepted' | 'rejected';
  created_at: string;
  feedback?: {
    rating: number;
    comment: string;
  };
}

export interface Message {
  id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  created_at: string;
  read_at?: string;
}

export interface ChatSession {
  id: string;
  participants: string[];
  last_message?: Message;
  is_typing?: {
    user_id: string;
    timestamp: number;
  };
}

export interface SkillExchange {
  id: string;
  teacher_id: string;
  student_id: string;
  skill: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  scheduled_at: string;
  zoom_link?: string;
  calendar_event_id?: string;
  points_awarded: number;
}