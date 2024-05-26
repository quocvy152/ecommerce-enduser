import "./Cart.css"
import { images } from "@/assets/assets"
import { useAppDispatch, useAppSelector } from "../../redux/store"
import { removeItemCart } from '../../redux/carts'

const Cart = () => {
  const dispatch = useAppDispatch();

  const listCart = useAppSelector((state) => state.carts);

  return (
    <div className="container-cart">
      <div className="cart">
        <div className="cart-header">
          <p>#</p>
          <p>Hình ảnh</p>
          <p>Tên sản phẩm</p>
          <p>Giá</p>
          <p>Số lượng</p>
          <p>Tổng tiền</p>
          <p>Tác vụ</p>
        </div>
        <br />
        <hr />
        <div className="cart-list-item">
          {listCart.map((cartItem, index) => {
            return (
              <div>
                <div key={cartItem.productID} className="cart-item cart-header">
                  <p>{index + 1}</p>
                  <img
                    src={cartItem.image}
                    alt=""
                    className="cart-item-image"
                  />
                  <p>{cartItem.name}</p>
                  <p>{cartItem.price}đ</p>
                  <p>{cartItem.quantity}</p>
                  <p>{cartItem.quantity * cartItem.price}đ</p>
                  <div className="remove-action">
                    <img
                      onClick={() => {
                        dispatch(removeItemCart({productID: cartItem.productID}))
                      }}
                      src={images.ic_remove}
                      alt=""
                      className="remove-icon"
                    />
                  </div>
                </div>
                <hr className="split-item-hr" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
