import React from 'react'
import './header.css'

//img
import HeaderImg from '../../img/Frame 7.png'
import HeaderImgMob from '../../img/Frame 7-mobile.png'

export default function Header() {
    return (
        <div className="header container">
            <h1>Demo-Cards</h1>
            <img className="HeaderImg" src={HeaderImg} alt="HeaderImg" />
            <img className="HeaderImgMob" src={HeaderImgMob} alt="HeaderImg" />
        </div>
    )
}
