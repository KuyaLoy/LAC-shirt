import React from 'react'
import H2 from '../../../atoms/H2/H2'
import LinkImage from '../../../atoms/Link/LinkImage/LinkImage'
import List from '../../../atoms/List/List/List'
import P from '../../../atoms/P/P'
import ButtonTooltipImage from '../../../atoms/Button/ButtonTooltipImage/ButtonTooltipImage'
import SliderThumbnail from '../../../molecules/SliderThumbnail/SliderThumbnail'
import './HeroSection.scss'

const HeroSection = ({data}) => {
  return (
    <div className='HeroWrapper'>
      <div className='ContentHero Content-1'>
        <SliderThumbnail images={data.attributes.galery_image_path} alt={data.category + " " + data.name}/>
      </div>
      <div className='ContentHero Content-2'>
        <H2 content={data.category + " " + data.name} />
        <P className='Description' content={data.attributes.short_description} />
        <List className='HeroList' listStyle="disc" list={data.attributes.hero_list} />
        <P className='ListDescription' content={data.attributes.list_description} />

        <div className="SizeWrapper">
          <P content='SIZE' />
          {
            data.attributes.sizes.map((size, index) => (
<ButtonTooltipImage content={size} key={index} image="https://cdn.shopify.com/s/files/1/0403/1093/files/UniT-Size_480x480.png?v=1620117304"/>
            ))
          }
          
         
        </div>
        <hr />
        <P className="BuyTitle" content="BUY TO LINK" />
        <div className='BuyLink'>
          <LinkImage src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" link="#"/>
          <LinkImage src="https://seeklogo.com/images/1/11st-logo-E3BCE0DAE6-seeklogo.com.png" link="#"/>
          <LinkImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Gmarket_logo.svg/2560px-Gmarket_logo.svg.png" link="#"/>
          <LinkImage src="https://cdn.imweb.me/upload/S202110056023dfc5dde5d/be1d2d7daec88.png" link="#"/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection