import './ExploreMenu.css'
import { menuList } from '../../assets/assets'

export type ExploreMenuProps = { 
  category: string; 
  setCategory: (value: React.SetStateAction<string>) => void 
}

const ExploreMenu = ({ category, setCategory }: ExploreMenuProps) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Khám phá menu của chúng tôi</h1>
      <p className='explore-menu-text'>
        Những sản phẩm handmade từ len đáng yêu, tất cả đều được làm
        bằng tay với sự khéo léo và tâm huyết. Viva Wool - nơi mang đến cho bạn
        sự ấm áp và phong cách từ từng sợi len.
      </p>
      <div className='explore-menu-list'>
        {menuList.map((menu, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === menu.id ? 'all' : menu.id)} key={index} className={'explore-menu-list-item'}>
              <img
                src={menu.image}
                alt=''
                className={category === menu.id ? 'active' : ''}
              />
              <p className='menu-name'>{menu.name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
