function Filters({ category, setCategory, search, setSearch }) {
  const categories = ["전체", "전자", "의류", "식품"];

  return (
    <div>
      <input
        placeholder="상품 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {categories.map((c) => (
        <button
          key={c}
          onClick={() => setCategory(c)}
          style={{
            fontWeight: category === c ? "bold" : "normal"
          }}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

export default Filters;
