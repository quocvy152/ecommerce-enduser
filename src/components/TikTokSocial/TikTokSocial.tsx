import { TikTokEmbed } from 'react-social-media-embed';

import './TikTokSocial.css';

const TiktokSocialCopy = () => {
  return (
    <div>
      <h1>Khám phá những video của chúng tôi trên Tiktok</h1>
      <div className='tiktok-social-media-container'>
        <div className='tiktok-social-media-item'>
          <TikTokEmbed
            url='https://www.tiktok.com/@vivawoolshop/video/7389622495810243847?lang=vi-VN'
            width={325}
            height={725}
          />
        </div>
        <div className='tiktok-social-media-item'>
          <TikTokEmbed
            url='https://www.tiktok.com/@vivawoolshop/video/7386849591947267345?lang=vi-VN'
            width={325}
            height={725}
          />
        </div>
        <div className='tiktok-social-media-item'>
          <TikTokEmbed
            url='https://www.tiktok.com/@vivawoolshop/video/7386267599333575952?lang=vi-VN'
            width={325}
            height={725}
          />
        </div>
        <div className='tiktok-social-media-item'>
          <TikTokEmbed
            url='https://www.tiktok.com/@vivawoolshop/video/7385787964187495696?lang=vi-VN'
            width={325}
            height={725}
          />
        </div>
      </div>
    </div>
  );
};

export default TiktokSocialCopy;
