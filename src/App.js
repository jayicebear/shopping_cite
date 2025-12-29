import { useState } from "react";
import productsData from "./product_list/data";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";
import SortSelect from "./components/SortSelect";
import "./App.css";


function App() {
  const [category, setCategory] = useState("전체");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("none");

  const filteredProducts = productsData
    .filter((p) =>
      category === "전체" ? true : p.category === category
    )
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "priceAsc") return a.price - b.price;
      if (sort === "priceDesc") return b.price - a.price;
      return 0;
    });

return (
  <div className="App">
    <h1>🛒 상품 리스트</h1>

    {/* 👇 이 div만 추가 */}
    <div className="controls">
      <Filters
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />

      <SortSelect sort={sort} setSort={setSort} />
    </div>

    <ProductList products={filteredProducts} />
  </div>
);
}

export default App;
