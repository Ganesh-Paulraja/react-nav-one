import React from 'react'
import './nav.css'
import { Outlet, Link } from "react-router-dom";

export default function nav() {
    return (
        <div id="nav">
            <nav class="navbar navbar-expand-lg navbar-dark sticky-top m-sm-3 bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto me-5">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="/">Home</a> */}
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="#">About</a> */}
          <Link className="nav-link" to="/About">About</Link>
        </li>
      
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Collections
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/">Marriage</a></li>
            <li><a class="dropdown-item" href="/">Birthday</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Location</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Outlet/>
        </div>
    )
}
