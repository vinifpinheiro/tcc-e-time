import { create } from "zustand";

type User = {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  password: string | null;
  isAdmin: boolean;
  startTime: Date;
  endTime: Date;
  timezone: string;
  teamId: string | null;
  createdAt: Date;
  updatedAt: Date;
} | null;

type UserState = {
  user: User;
  setUser: (user: User) => void;
};

const useUserZustand = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useUserZustand;
