import './SocialMedia.css'

import { TikTokEmbed } from 'react-social-media-embed'

const SocialMedia = () => {
    return (
        <div className='social-media-container'>
            <hr />
            <h1>Khám phá những video của chúng tôi</h1>

            <div className="tiktok-social-media-container">
                <TikTokEmbed url="https://www.tiktok.com/@lennaydeplam/video/7345338199364914440" width={325} height={750} />
                <TikTokEmbed url="https://www.tiktok.com/@lennaydeplam/video/7377730891843472658" width={325} height={750} />
            </div>

            <hr />
        </div>
    )
}

export default SocialMedia
