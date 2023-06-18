import React from 'react'

const List = ({className, listStyle, list}) => {

    
  return (
    <>
        <ul className={className} style={listStyle === '' ? {border : '1px solid red'} : {listStyle : listStyle, paddingLeft: '15px'}} >
            <li>Tencel 70%와 면 30% 혼용 원단</li>
            <li>일본에서 세심한 솜씨로 만들어진 최고급 품질의 원단으로 감각적으로 얇고 가벼운 특성</li>
            <li>단독으로 착용하는 것은 물론이고 이너웨어로도 남녀노소 누구나 멋지게 어우러질 수 있는 다용성</li>
            <li>LAC Nft의 스페셜 작품으로 오로지 소수의 특별한 사람들을 위한 한정판 제품으로 특별함을 추구하는 분들에게 완벽한 선택</li>
        </ul>
    </>
  )
}

export default List