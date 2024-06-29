import { TikTokEmbed } from 'react-social-media-embed';

import './TikTokSocial.css';

const TiktokSocialCopy = () => {
  return (
    <div>
      <h1>Khám phá những video của chúng tôi trên Tiktok</h1>
      <div className='tiktok-social-media-container'>
        <div className='tiktok-social-media-item'>
          <TikTokEmbed
            url='https://www.tiktok.com/@vivawoolshop/video/7385787964187495696?lang=vi-VN'
            width={325}
            height={725}
          />
        </div>
        <div className='tiktok-social-media-item'>
          <TikTokEmbed
            url='https://www.tiktok.com/@vananh99915/video/7372567362106559760?lang=vi-VN'
            width={325}
            height={725}
          />
        </div>
        <div className='tiktok-social-media-item'>
          <TikTokEmbed
            url='https://www.tiktok.com/@vananh99915/video/7362872595408096528?lang=vi-VN'
            width={325}
            height={725}
          />
        </div>
        <div className='tiktok-social-media-item'>
          <TikTokEmbed
            url='https://www.tiktok.com/@vananh99915/video/7204065965015846170?lang=vi-VN'
            width={325}
            height={725}
          />
        </div>
      </div>
    </div>
  );
};

export default TiktokSocialCopy;
