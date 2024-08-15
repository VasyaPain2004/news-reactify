import styles from "./styles.module.css";

export default function Pagination({
  totalPages,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  currentPage,
}) {
  return (
    <div className={styles.pagination}>
      <button onClick={handlePreviousPage} disabled={currentPage <= 1} className={styles.arrow}>
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              disabled={index + 1 === currentPage}
              className={styles.pageNumber}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <button onClick={handleNextPage} disabled={currentPage >= totalPages} className={styles.arrow}>
        {">"}
      </button>
    </div>
  );
}
