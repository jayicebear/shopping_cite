function ProductCard({ product }) {
  return (
    <div className="product-card">
      {/*  이미지 추가 */}
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <h3>{product.name}</h3>
      <p className="category">{product.category}</p>
      <p className="price">
        {product.price.toLocaleString()}원
      </p>
    </div>
  );
}

export default ProductCard;

