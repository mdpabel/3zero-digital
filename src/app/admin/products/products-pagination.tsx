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
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const ProductsPagination = ({
  totalProducts,
  currPage = 1,
  pageSize = 10, // Default page size
}: {
  totalProducts: number;
  currPage: number;
  pageSize?: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(totalProducts / pageSize);
  const [currentPage, setCurrentPage] = useState(currPage);

  // Use search params to set the initial page if available
  useEffect(() => {
    const pageFromUrl = searchParams.get('page');
    if (pageFromUrl) {
      const pageNumber = parseInt(pageFromUrl, 10);
      if (pageNumber >= 1 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
      }
    }
  }, [searchParams, totalPages]);

  // Update the query parameter in the URL when the page changes
  const updateUrl = (page: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set('page', page.toString());
    router.push(`?${params.toString()}`); // Update the URL without reloading the page
  };

  // Handle page changes when clicking on the Previous/Next buttons
  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      updateUrl(prevPage);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      updateUrl(nextPage);
    }
  };

  // Handle page number click
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    updateUrl(page);
  };

  // Create an array of page numbers to display
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className='flex justify-center py-5 w-full'>
      <Pagination>
        <PaginationContent>
          {/* Previous button */}
          <PaginationItem className='cursor-pointer'>
            <PaginationPrevious onClick={handlePrevPage} />
          </PaginationItem>

          {/* Dynamically render page numbers */}
          {pages.map((page) => (
            <PaginationItem className='cursor-pointer' key={page}>
              <PaginationLink
                onClick={() => handlePageClick(page)}
                isActive={page === currentPage}>
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* Ellipsis if there are more than 10 pages */}
          {totalPages > 10 && (
            <PaginationItem className='cursor-pointer'>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {/* Next button */}
          <PaginationItem className='cursor-pointer'>
            <PaginationNext onClick={handleNextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProductsPagination;
