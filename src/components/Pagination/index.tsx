import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}
const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(siblingsCount)].map((_, index) => {
    return from + index + 1;
  }).filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {

  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);
  const previousPage = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : [];
  const nextPage = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : [];

  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> of <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">

        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > (2 + siblingsCount) && <Text>...</Text>}
          </>
        )}

        {previousPage.length > 0 && previousPage.map(page => {
          return (
            <PaginationItem onPageChange={onPageChange}
              key={page}
              number={page}
            />
          );
        })}
        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />
        {nextPage.length > 0 && nextPage.map(page => {
          return (
            <PaginationItem onPageChange={onPageChange}
              key={page}
              number={page}
            />
          );
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && <Text>...</Text>}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  )
}