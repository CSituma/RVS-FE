import { VolunteerProvider } from "@/context/VolunteersProvider";
import { getVolunteers } from "@/lib/api";
import VolunteerList from "@/components/VolunteerList";

interface VolunteerPageProps {
    // ⚠️ See: https://nextjs.org/docs/messages/sync-dynamic-apis
  params: Promise<{
    page: string;
  }>;
}

export default async function Page({params}: VolunteerPageProps) {
  const { page } = await params;
  const pageNum = parseInt(page, 10) || 1;

  const volunteers = await getVolunteers(pageNum);

  return (
    <VolunteerProvider initialVolunteers={volunteers}>
      <VolunteerList currentPage={pageNum} />
    </VolunteerProvider>
  );
}
