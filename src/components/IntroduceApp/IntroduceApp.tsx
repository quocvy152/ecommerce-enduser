import { Helmet } from 'react-helmet';

const IntroduceApp = () => {
  return (
    <div>
      <Helmet>
        <title>Viva Wool</title>
        <meta name='description' content='Chào mừng bạn đến với Viva Wool, nơi bạn có thể khám phá và mua những sản phẩm handmade từ len độc đáo, từ áo len đến phụ kiện thời trang. Hãy thưởng thức sự tinh tế và sáng tạo trong từng sản phẩm!' />
        <meta property='og:title' content='My React App' />
        <meta property='og:description' content='Chào mừng bạn đến với Viva Wool, nơi bạn có thể khám phá và mua những sản phẩm handmade từ len độc đáo, từ áo len đến phụ kiện thời trang. Hãy thưởng thức sự tinh tế và sáng tạo trong từng sản phẩm!' />
        <meta property='og:image' content='https://www.example.com/path/to/your/image.jpg' />
        <meta property='og:url' content='https://www.example.com' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='My React App' />
        <meta name='twitter:description' content='Chào mừng bạn đến với Viva Wool, nơi bạn có thể khám phá và mua những sản phẩm handmade từ len độc đáo, từ áo len đến phụ kiện thời trang. Hãy thưởng thức sự tinh tế và sáng tạo trong từng sản phẩm!' />
        <meta name='twitter:image' content='https://www.example.com/path/to/your/image.jpg' />
      </Helmet>
    </div>
  )
}

export default IntroduceApp