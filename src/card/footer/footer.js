import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <div className="footer text-center m-5">
            <h4 className="m-3">Contact Us:</h4>
            <p className="m-3">Phone and Wattsapp: 1234567890</p>
            <p>email: email@email.com</p>
            <div className="socialIcons">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-instagram"></i>
            </div>
        </div>
    )
}
