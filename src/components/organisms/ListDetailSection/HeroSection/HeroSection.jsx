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
        <SliderThumbnail />
      </div>
      <div className='ContentHero Content-2'>
        <H2 content={data.category + " " + data.name} />
        <P className='Description' content={"섬세하게 더해진 클래식한 크루넥 디자인 T"} />
        <List className='HeroList' listStyle="disc" />
        <P className='ListDescription' content={"이 티셔츠는 높은 품질의 원단과 섬세한 디자인으로 제작되어 탁월한 착용 경험과 편안한 스타일을 선사합니다."} />

        <div className="SizeWrapper">
          <P content='SIZE' />
          <ButtonTooltipImage content="XS" image="https://cdn.shopify.com/s/files/1/0403/1093/files/UniT-Size_480x480.png?v=1620117304"/>
          <ButtonTooltipImage content="S" image="https://cdn.shopify.com/s/files/1/0403/1093/files/UniT-Size_480x480.png?v=1620117304"/>
          <ButtonTooltipImage content="M" image="https://cdn.shopify.com/s/files/1/0403/1093/files/UniT-Size_480x480.png?v=1620117304"/>
          <ButtonTooltipImage content="L" image="https://cdn.shopify.com/s/files/1/0403/1093/files/UniT-Size_480x480.png?v=1620117304"/>
          <ButtonTooltipImage content="XL" image="https://cdn.shopify.com/s/files/1/0403/1093/files/UniT-Size_480x480.png?v=1620117304"/>
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