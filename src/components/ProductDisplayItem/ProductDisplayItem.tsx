import { useState } from "react";
import { images } from "../../assets/assets";
import "./ProductDisplayItem.css";
import { TYPE_UPDATE_ITEM_CART, updateItemCart } from "@/redux/carts";
import { useAppDispatch } from "@/redux/store";

export interface ProductDisplayItemProps {
  productID: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export type OnChangeCartProps<T> = { type: string } & T;

const ProductDisplayItem = ({
  productID,
  name,
  price,
  image,
  description,
}: ProductDisplayItemProps) => {
  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = useState(0);

  const onChangeCart = ({
    type,
    productID,
    image,
    name,
    price,
  }: OnChangeCartProps<ProductDisplayItemProps>) => {
    const itemCart = {
      productID,
      quantity: 1,
      image,
      name,
      price,
    };

    if (type === TYPE_UPDATE_ITEM_CART.ADD) {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => prev - 1);
    }

    dispatch(
      updateItemCart({
        productID: productID,
        quantity: 1,
        itemCart: itemCart,
        typeUpdateCart: type,
      })
    );
  };

  return (
    <div className="product-display-item">
      <div className="product-display-item-img-container">
        <img src={image} alt="" className="product-display-item-img" />
        {!quantity ? (
          <img
            onClick={() => {
              onChangeCart({ 
                type: TYPE_UPDATE_ITEM_CART.ADD,
                productID,
                image,
                name,
                price,
              });
            }}
            src={images.ic_plus}
            alt=""
            className="ic_plus"
          />
        ) : (
          <div className="group-ic-change-quantity">
            <img
              onClick={() => {
                onChangeCart({ 
                  type: TYPE_UPDATE_ITEM_CART.MINUS,
                  productID,
                  image,
                  name,
                  price,
                });
              }}
              src={images.ic_minus_color}
              alt=""
              className="ic_minus_color"
            />
            <p className="quantity">{quantity}</p>
            <img
              onClick={() => {
                onChangeCart({ 
                  type: TYPE_UPDATE_ITEM_CART.ADD,
                  productID,
                  image,
                  name,
                  price,
                });
              }}
              src={images.ic_plus_color}
              alt=""
              className="ic_plus_color"
            />
          </div>
        )}
      </div>

      <div className="product-display-item-info">
        <div className="product-display-item-info-name">
          <p className="product-display-name">{name}</p>
          <img src={images.ic_rating} alt="" className="ic_rating" />
        </div>

        <div className="product-display-description">
          <p className="content-description">{description}</p>
        </div>

        <p className="product-display-price">{price}đ</p>
      </div>
    </div>
  );
};

export default ProductDisplayItem;
