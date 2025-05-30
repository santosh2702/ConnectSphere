import { create } from 'zustand';
import { User, SkillExchange } from '../types';
import { supabase } from '../lib/supabase';

interface AuthState {
  user: User | null;
  loading: boolean;
  exchanges: SkillExchange[];
  points: number;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
  addExchange: (exchange: SkillExchange) => void;
  updatePoints: (points: number) => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  loading: true,
  exchanges: [],
  points: 0,
  signIn: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    set({ user: data.user as User });
  },
  signUp: async (email, password, fullName) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          points: 0,
          availability: {
            weekly_hours: 0,
            preferred_times: [],
          },
        },
      },
    });
    if (error) throw error;
    set({ user: data.user as User });
  },
  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null, exchanges: [], points: 0 });
  },
  updateProfile: async (data) => {
    const { error } = await supabase
      .from('profiles')
      .update(data)
      .eq('id', get().user?.id);
    if (error) throw error;
    set((state) => ({
      user: state.user ? { ...state.user, ...data } : null,
    }));
  },
  addExchange: (exchange) => {
    set((state) => ({
      exchanges: [...state.exchanges, exchange],
      points: state.points + exchange.points_awarded,
    }));
  },
  updatePoints: (points) => {
    set((state) => ({
      points: state.points + points,
    }));
  },
}));