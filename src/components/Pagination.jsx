const Pagination = ({ page, totalResults, onPageChange }) => {
    const totalPages = Math.ceil(totalResults / 10);
    const maxDisplayedPages = 6;  // Maximum number of page buttons to display
  
    const calculatePageRange = () => {
      const midPoint = Math.ceil(maxDisplayedPages / 2);
      let start = page - midPoint + 1;
      let end = page + midPoint - 1;
  
      if (start < 1) {
        start = 1;
        end = maxDisplayedPages;
      }
  
      if (end > totalPages) {
        end = totalPages;
        start = totalPages - maxDisplayedPages + 1;
      }
  
      return { start, end };
    };
  
    const { start, end } = calculatePageRange();
    const pageNumbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);

    
  
    const handlePrevious = () => {
      if (page > 1) {
        onPageChange(page - 1);
      }
    };
  
    const handleNext = () => {
      if (page < totalPages) {
        onPageChange(page + 1);
        
      }
    };
  
    return (
      <nav aria-label="pagination" className="mt-12">
        <ul className="inline-flex -space-x-px text-base h-10">
          <li>
            <button
              onClick={handlePrevious}
              className={`flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 border border-gray-300 rounded-l-lg ${page === 1 ? 'pointer-events-none' : 'hover:bg-gray-100 hover:text-gray-700'} dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ${page === 1 ? 'dark:hover:bg-gray-700 dark:hover:text-white' : ''}`}
            >
              Previous
            </button>
          </li>
  
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <button
                onClick={() => onPageChange(pageNumber)}
                className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 ${page === pageNumber ? 'text-blue-600 border-blue-600 bg-blue-50' : 'hover:bg-gray-100 hover:text-gray-700'} dark:border-gray-700 dark:bg-gray-700 dark:text-white`}
              >
                {pageNumber}
              </button>
            </li>
          ))}
  
          <li>
            <button
              onClick={handleNext}
              className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 rounded-r-lg ${page === totalPages ? 'pointer-events-none' : 'hover:bg-gray-100 hover:text-gray-700'} dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ${page === totalPages ? 'dark:hover:bg-gray-700 dark:hover:text-white' : ''}`}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Pagination;
  