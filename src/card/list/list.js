import React from 'react'
import './list.css'

//img
import imgOne from '../../img/marriagecard/Change_the_Dates_Endcap_Optimized.jpg'
import imgTwo from '../../img/marriagecard/download.jpeg'
import imgThree from '../../img/marriagecard/download.png'
import imgFour from '../../img/marriagecard/elegant-script-foil-wedding-invitations-up-l.jpg'
import imgFive from '../../img/marriagecard/hexagon-botanicals-wedding-invitations-up-l.jpg'
import imgSix from '../../img/marriagecard/images.jpeg'
import imgSeven from '../../img/marriagecard/images (1).jpeg'
import imgEight from '../../img/marriagecard/india-ombre-wedding-invitations-up-l.jpg'
import imgNine from '../../img/marriagecard/modern-love-wedding-invitations-up-l.jpg'
import imgTen from '../../img/marriagecard/opulent-floweret-foil-wedding-invitations-up-l.jpg'
import imgEleven from '../../img/marriagecard/rose-outline-wedding-invitations-up-l.jpg'
import imgTwelve from '../../img/marriagecard/wedding-cards-500x500.jpg'


import imgThirteen from '../../img/birthdaycards/download.jpeg'
import imgFourteen from '../../img/birthdaycards/download(1).jpeg'
import imgFiveteen from '../../img/birthdaycards/download(2).jpeg'
import imgSixteen from '../../img/birthdaycards/download(3).jpeg'
import imgSeventeen from '../../img/birthdaycards/download(4).jpeg'
import imgEighteen from '../../img/birthdaycards/download(5).jpeg'
import imgNineteen from '../../img/birthdaycards/download(6).jpeg'
import imgTwenty from '../../img/birthdaycards/download(7).jpeg'
import imgTwentyOne from '../../img/birthdaycards/download(8).jpeg'
import imgTwentyTwo from '../../img/birthdaycards/download(9).jpeg'
import imgTwentyThree from '../../img/birthdaycards/download(10).jpeg'
import imgTwentyFour from '../../img/birthdaycards/download(11).jpeg'



export default function List() {
const Box = (props)=>{
    return<div className="box mt-4"> <img src={props.img} alt={props.img} />
    <p>Loram ipsom</p>
    </div>
}

    return (
        <div className="list container row justify-content-evenly mx-auto">
           <Box img={imgOne}/>
           <Box img={imgTwo}/>
           <Box img={imgThree}/>
           <Box img={imgFour}/>
           <Box img={imgFive}/>
           <Box img={imgSix}/>
           <Box img={imgSeven}/>
           <Box img={imgEight}/>
           <Box img={imgNine}/>
           <Box img={imgTen}/>
           <Box img={imgEleven}/>
           <Box img={imgTwelve}/>
           <Box img={imgThirteen}/>
           <Box img={imgFourteen}/>
           <Box img={imgFiveteen}/>
           <Box img={imgSixteen}/>
           <Box img={imgSeventeen}/>
           <Box img={imgEighteen}/>
           <Box img={imgNineteen}/>
           <Box img={imgTwenty}/>
           <Box img={imgTwentyOne}/>
           <Box img={imgTwentyTwo}/>
           <Box img={imgTwentyThree}/>
           <Box img={imgTwentyFour}/>
           {/* <Box img={}/> */}

        </div>
    )
}
