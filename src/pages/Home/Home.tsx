import { useState } from 'react';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Header from '../../components/Header/Header'
import './Home.css'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';

const Home = () => {
  const [category, setCategory] = useState('all');

  return (
    <div>
      <Header />

      <ExploreMenu category={category} setCategory={setCategory} />

      <ProductDisplay />
    </div>
  )
}

export default Home