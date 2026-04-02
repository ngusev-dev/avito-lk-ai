import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui";

interface PaginatorAdapteerProps {
  total: number;
  skip?: number;
  limit?: number;
  onPageChange: (page: number) => void;
}

export const PaginatorAdapteer = ({
  total,
  skip,
  limit = 10,
  onPageChange,
}: PaginatorAdapteerProps) => {
  const totalPages = Math.ceil(total / limit);

  const activePage = skip ? Math.floor(skip / limit) + 1 : 1;

  const paginationArrowClick = (value: number) => {
    if (
      (activePage === 1 && value < 0) ||
      (activePage === totalPages && value > 0)
    )
      return;

    onPageChange(activePage + value);
  };

  return (
    <Pagination className="justify-start">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            size={60}
            text=""
            onClick={() => paginationArrowClick(-1)}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              size={60}
              isActive={index + 1 === activePage}
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            size={60}
            text=""
            onClick={() => paginationArrowClick(1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
