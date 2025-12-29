function SortSelect({ sort, setSort }) {
  return (
    <select value={sort} onChange={(e) => setSort(e.target.value)}>
      <option value="none">정렬 없음</option>
      <option value="priceAsc">가격 낮은순</option>
      <option value="priceDesc">가격 높은순</option>
    </select>
  );
}

export default SortSelect;
