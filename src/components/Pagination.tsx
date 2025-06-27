import Link from "next/link";

interface Props {
  currentPage: number;
  totalPages?: number;
}

export default function Pagination({ currentPage, totalPages = 10 }: Props) {
  return (
    <nav
      className="flex justify-center mt-10"
      aria-label="Pagination Navigation"
    >
      <ul className="flex gap-2 flex-wrap list-none">
        {Array.from({ length: totalPages }).map((_, i) => {
          const pageNum = i + 1;
          const isCurrent = currentPage === pageNum;

          return (
            <li key={pageNum}>
              <Link
                href={`/volunteers/${pageNum}`}
                aria-current={isCurrent ? "page" : undefined}
                className={`px-4 py-2 rounded font-medium transition-colors duration-150 ${
                  isCurrent
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {pageNum}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
