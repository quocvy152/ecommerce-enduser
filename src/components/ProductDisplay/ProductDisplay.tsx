import { useAppSelector } from "../../redux";
import ProductDisplayItem from "../ProductDisplayItem/ProductDisplayItem";
import "./ProductDisplay.css";

const ProductDisplay = () => {
  const listProduct = useAppSelector((state) => state.products);

  return (
    <div className="product-display">
      <h1>Top sản phẩm len handmade dành cho bạn</h1>

      <div className="product-display-list">
        {listProduct.map((product) => (
          <ProductDisplayItem
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
