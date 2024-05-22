import { useState } from 'react';
import { images } from '../../assets/assets';
import './ProductDisplayItem.css'

export type ProductDisplayItemProps = {
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductDisplayItem = ({name, price, image, description}: ProductDisplayItemProps) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className='product-display-item'>
      <div className="product-display-item-img-container">
        <img src={image} alt='' className='product-display-item-img' />
        {
          !quantity ?
          <img onClick={() => setQuantity(prev => prev + 1)} src={images.ic_plus} alt="" className='ic_plus' /> :
          <div className="group-ic-change-quantity">
            <img onClick={() => setQuantity(prev => prev - 1)} src={images.ic_minus_color} alt="" className='ic_minus_color' />
            <p className='quantity'>{quantity}</p>
            <img onClick={() => setQuantity(prev => prev + 1)} src={images.ic_plus_color} alt="" className='ic_plus_color' />
          </div>
        }
      </div>

      <div className='product-display-item-info'>
        <div className='product-display-item-info-name'>
          <p className='product-display-name'>{name}</p>
          <img src={images.ic_rating} alt='' className='ic_rating' />
        </div>

        <div className="product-display-description">
          <p className='content-description'>{description}</p>
        </div>

        <p className="product-display-price">{price}đ</p>
      </div>
    </div>
  ) 
}

export default ProductDisplayItem