import { Dispatch, SetStateAction } from 'react'
import { PaginationContainer, PaginationList, PaginationButton } from './styles'

const MAX_ITEMS = 5
const MAX_LEFT = (MAX_ITEMS - 1) / 2

interface PaginationProps {
  limit: number
  total: number
  offset: number
  setOffset: Dispatch<SetStateAction<number>>
}

export function Pagination({
  limit,
  total,
  offset,
  setOffset,
}: PaginationProps) {
  // eslint-disable-next-line prettier/prettier
  const currentPage = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit)
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1)
  const first = Math.min(Math.max(currentPage - MAX_LEFT, 1), maxFirst)

  return (
    <PaginationContainer>
      <PaginationList>
        {Array.from({ length: Math.min(MAX_ITEMS, pages) })
          .map((_, index) => index + first)
          .map((page) => (
            <li key={page}>
              <PaginationButton
                onClick={() => setOffset((page - 1) * limit)}
                active={page === currentPage}
              >
                {page}
              </PaginationButton>
            </li>
          ))}
      </PaginationList>
    </PaginationContainer>
  )
}
