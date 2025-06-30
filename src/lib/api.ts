import { RandomUserAPIResponse, Volunteer } from "@/types/Volunteers";

export async function getVolunteers(pageNum: number): Promise<Volunteer[]> {
  try {
    const res = await fetch(
      `https://randomuser.me/api/?results=10&page=${pageNum}`,
      {
        next: { revalidate: 30 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch volunteers: ${res.status}`);
    }
    const data: RandomUserAPIResponse = await res.json();
    return data.results;
  } catch (err) {
    console.error("Error fetching volunteers:", err);
      throw err;
  }
}
