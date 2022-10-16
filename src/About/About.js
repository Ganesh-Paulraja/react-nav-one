import React from 'react'
import './About.css'

//img
import imgOne from '../img/about/Frame2.png'
import imgTwo from '../img/about/Group2.jpg'
import imgThree from '../img/about/Group9.jpg'

export default function About() {
    return (
        <div className="About container">
           <h1 className="cardHeading">Demo-Cards</h1>
           <div className="marriageOne">
           <h1 className="marriageHeading">For Marriage</h1>
           <img className={imgOne} src={imgOne} alt={imgOne} />
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
           </div>
           <div className="marriageTwo">
               <img src={imgTwo} alt={imgTwo} className={imgTwo} />
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
           </div>
           <div className="birthDay">
           <h1 className="marriageHeading">For Birthday</h1>
               <img src={imgThree} alt={imgThree} className={imgThree} />
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
           </div>
        </div>
    )
}
