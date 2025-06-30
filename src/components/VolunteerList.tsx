"use client";

import { useVolunteers } from "../context/VolunteersProvider";
import Pagination from "./Pagination";
import { VolunteerCard } from "./VolunteerCard";
import { Volunteer } from "@/types/Volunteers";

interface Props {
  currentPage: number;
}

export default function VolunteerList({ currentPage }: Props) {
  const { volunteers } = useVolunteers();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-cyan-200">
          RVS Volunteers List- Page {currentPage}
        </h2>
      </div>
      {volunteers.length === 0 ? (
        <p className="text-center text-gray-500">No volunteers found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {volunteers.map((volunteer: Volunteer) => (
            <VolunteerCard key={volunteer.login.uuid} volunteer={volunteer} />
          ))}
        </div>
      )}
      <Pagination currentPage={currentPage} />
    </div>
  );
}
