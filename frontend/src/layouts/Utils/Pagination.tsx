export const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}> = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];

  if (currentPage === 1) {
    pageNumbers.push(currentPage);
    if (totalPages > currentPage) {
      pageNumbers.push(currentPage + 1);
    }
    if (totalPages >= currentPage + 2) {
      pageNumbers.push(currentPage + 2);
    }
  } else if (currentPage > 1) {
    if (currentPage >= 3) {
      pageNumbers.push(currentPage - 2);
      pageNumbers.push(currentPage - 1);
    } else {
      pageNumbers.push(currentPage - 1);
    }
    pageNumbers.push(currentPage);
    if (totalPages >= currentPage + 1) {
      pageNumbers.push(currentPage + 1);
    }
    if (totalPages >= currentPage + 2) {
      pageNumbers.push(currentPage + 2);
    }
  }

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item">
          <button
            type="button"
            onClick={e => {
              e.preventDefault();
              paginate(1);
            }}
            className="page-link"
          >
            First Page
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button
              type="button"
              onClick={e => {
                e.preventDefault();
                paginate(number);
              }}
              className="page-link"
            >
              {number}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            type="button"
            onClick={e => {
              e.preventDefault();
              paginate(totalPages);
            }}
            className="page-link"
          >
            Last Page
          </button>
        </li>
      </ul>
    </nav>
  );
};
