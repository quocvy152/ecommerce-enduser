import { useAppSelector } from "../../../src/redux/store";
import ProductDisplayItem from "../ProductDisplayItem/ProductDisplayItem";
import "./ProductDisplay.css";

export type ProductDisplayProps = {
  category: string;
}

const ProductDisplay = ({category}: ProductDisplayProps) => {
  const listProduct = useAppSelector((state) => state.products);
  const listProductFilter = category === 'all' ? listProduct : listProduct.filter(product =>product.category === category);

  return (
    <div className="product-display">
      <h1>Top sản phẩm len handmade dành cho bạn</h1>

      <div className="product-display-list">
        {listProductFilter.map((product) => (
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
