"use client";

import { createContext, useContext, useState } from "react";
import { Volunteer, VolunteerContextType } from "@/types/Volunteers";

const VolunteerContext = createContext<VolunteerContextType | undefined>(undefined);

export function useVolunteers() {
  const context = useContext(VolunteerContext);
  if (!context) {
    throw new Error("useVolunteers must be used within a VolunteerProvider");
  }
  return context;
}

interface VolunteerProviderProps {
  children: React.ReactNode;
  initialVolunteers: Volunteer[];
}

export function VolunteerProvider({ children, initialVolunteers }: VolunteerProviderProps) {
  const [volunteers, setVolunteers] = useState(initialVolunteers);

  return (
    <VolunteerContext.Provider value={{ volunteers, setVolunteers }}>
      {children}
    </VolunteerContext.Provider>
  );
}
