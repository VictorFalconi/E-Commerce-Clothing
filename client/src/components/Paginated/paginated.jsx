
export default function Paginated({ clothesPerPage, clothes1, paginated, page }) {
  const pageNum = [];

  for (let i = 1; i <= Math.ceil(clothes1 / clothesPerPage); i++) {
    pageNum.push(i);
  }
  return (
    <div className="nav">
      {pageNum &&
        pageNum.map((num) => (
          <div key={num}>
            <button
              className={num === page ? "btnSel" : "btnNav"}
              onClick={() => paginated(num)}
            >
              {num}
            </button>
          </div>
        ))}
    </div>
  );
}