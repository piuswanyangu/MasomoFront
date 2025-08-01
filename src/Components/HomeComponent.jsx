import React from 'react'
import { Link } from 'react-router-dom'

const HomeComponent = () => {
  return (
    <div className='homepage'>
        {/* here is a navbar */}
        <nav className='navbar navbar-expand-lg navbar-dark bg-success'>
            <div className="container">
                <Link className='navbar-brand text-light' to={'/'}>Masomo School</Link>
                <button className='navbar-toggler'type='button'data-bs-toggle='collapse' data-bs-target='#navbarNav'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id='navbarNav'>
                    <ul className='navbar nav'>
                        <li className="nav-item"><a href="#about" className='nav-link text-light'>About</a></li>
                            <li className="nav-item"><a href="#cbc" className='nav-link text-light'>CBC Curriculumn</a></li>
                            <li className="nav-item"><a href="#why-us" className='nav-link text-light'>Why Masomo</a></li>
                            <li className="nav-item"><a href="#login" className='nav-link text-light'>Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* Hero section */}
        <section className="hero position-relative text-white">
            <img src="images/banner1.jpg" alt="welcome image" className='w-100 img-fluid' style={{maxHeight:500,objectFit:'cover'}} />
            <div className="hero-text position-absolute top-50 start-50 translate-middle text-center bg-dark bg-opacity-50 p-4 rounded">
                <h1>Empowering Minds Through Competence</h1>
                <p>Masomo School is a leading isntitution dedicated to providing quality educatio rooted in the competence based curriculumn(CBC)</p>
            </div>

        </section>
    </div>
  )
}

export default HomeComponent