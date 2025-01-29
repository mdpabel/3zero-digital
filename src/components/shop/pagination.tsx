'use client';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const TemplatePagination = ({
  limit,
  total,
}: {
  limit: number;
  total: number;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const totalPages = Math.ceil(total / limit);
  const initialPage = parseInt(searchParams.get('page') || '1', 10);
  const [currentPage, setCurrentPage] = useState(initialPage);

  // Update URL with the current page
  useEffect(() => {
    if (!searchParams.get('page')) {
      return;
    }

    const params = new URLSearchParams(searchParams);
    params.set('page', currentPage.toString());
    router.replace(pathName + '?' + params.toString());
  }, [currentPage, pathName, router, searchParams]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const range = 2; // Number of pages before and after the current page to display

    for (
      let i = Math.max(1, currentPage - range);
      i <= Math.min(totalPages, currentPage + range);
      i++
    ) {
      pages.push(i);
    }

    return pages.map((page) => (
      <PaginationItem key={page}>
        <PaginationLink
          href='#'
          isActive={page === currentPage}
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(page);
          }}>
          {page}
        </PaginationLink>
      </PaginationItem>
    ));
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href='#'
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(currentPage - 1);
            }}
          />
        </PaginationItem>

        {renderPageNumbers()}

        {currentPage + 2 < totalPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            href='#'
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default TemplatePagination;
