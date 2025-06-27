"use client";

import { Volunteer } from "@/types/Volunteers";
import PhoneIcon from "@/components/icons/phoneIcon";
import EmailIcon from "@/components/icons/emailIcon";
import Image from "next/image";

interface Props {
  volunteer: Volunteer;
}

export function VolunteerCard({ volunteer }: Props) {
  const fullName = `${volunteer.name.first} ${volunteer.name.last}`;

  return (
    <article
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200"
      aria-label={`Volunteer card details of ${fullName}`}
    >
      <header className="flex items-start justify-between mb-4">
        <h3
          className="text-lg font-semibold text-gray-800 mb-1"
          aria-label="Volunteer's Name"
        >
          {fullName}
        </h3>
        <Image
          src={volunteer.picture.thumbnail}
          alt={`Profile picture of ${fullName}`}
          height={48}
          width={48}
          className="w-12 h-12 rounded-full object-cover"
        />
      </header>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2" aria-label={`Email of ${fullName}`}>
          <EmailIcon />
          <a
            href={`mailto:${volunteer.email}`}
            className="hover:underline text-sm"
            aria-label={`Email link to ${volunteer.email}`}
          >
            {volunteer.email}
          </a>
        </div>

        <div className="flex items-center gap-2" aria-label={`Phone number of ${fullName}`}>
          <PhoneIcon />
          <a
            href={`tel:${volunteer.phone}`}
            className="hover:underline text-sm"
            aria-label={`Phone call link to ${volunteer.phone}`}
          >
            {volunteer.phone ?? "Not available"}
          </a>
        </div>
      </div>
    </article>
  );
}
