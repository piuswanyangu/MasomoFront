import React from 'react'
import { Link } from 'react-router-dom'

const HomeComponent = () => {
  return (
    <div className="homepage">
      {/* here is a navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <Link className="navbar-brand text-light" to={"/"}>
            Masomo School
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar nav">
              <li className="nav-item">
                <a href="#about" className="nav-link text-light">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#cbc" className="nav-link text-light">
                  CBC Curriculumn
                </a>
              </li>
              <li className="nav-item">
                <a href="#why-us" className="nav-link text-light">
                  Why Masomo
                </a>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-light">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Hero section
      <section className="hero position-relative ">
        <img
          src="images/banner1.jpg"
          alt="welcome image"
          className="w-100 img-fluid"
          style={{ maxHeight: 500, objectFit: "cover" }}
        />
        <div className="hero-text position-absolute top-50 start-50 translate-middle text-center bg-dark bg-opacity-50 p-4 rounded">
          <h1>Empowering Minds Through Competence</h1>
          <p>Masomo School is a leading isntitution dedicated to providing
            quality education rooted in the competence based curriculumn(CBC)</p>
        </div>
      </section> */}
      {/* Hero Section */}
      <section className="hero position-relative text-white">
        <img
          src="images/banner1.jpg"
          alt="Welcome image"
          className="w-100 img-fluid"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />

        <div className="hero-text position-absolute top-50 start-50 translate-middle text-center bg-dark bg-opacity-50 p-4 rounded">
          <h1>Empering Minds Through Competence</h1>
          <p>
            Masomo School is a leading institution dedicated to providing
            quality Education rooted in the competency-Based curriculum (CBC) as
            set by the Kenyan Ministry of Education.
          </p>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <h1 className="text-success text-center">About Masomo School</h1>
          <p>
            Masomo school is a leading institution dedicated to providing
            quality education .We focus on holistic development, creativity and
            real-world skills for tomorrows leaders
          </p>
        </div>
      </section>
      {/* CBC SECTION */}
      <section className="py-5 ">
        <div className="container">
          <h2 className="text-success text-center">
            Understanding CBC in Kenya
          </h2>
          <p>
            The competence based curriculumn(CBC) was introduced to replace the
            8-4-4 system . It focuses on naturing learners talents and abilities
            through practical skill oriented learning experiences CBC emphasizes
            learner-centered teaching and aims at develeping competences that
            align with national development goals.
          </p>

          <ul className="list-group list-group-flush mt-3">
            <li className="list-group-item">✔ Focus on talent and skills</li>
            <li className="list-group-item">✔ Continous assessment</li>
            <li className="list-group-item">✔ Real life problem solving</li>
            <li className="list-group-item">✔ Learner centered approach</li>
          </ul>
        </div>
      </section>
      {/* Why us */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center  text-success">
            Why Choose Masomo School?
          </h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow p-2 h-100">
                <div className="card-header txt-center">
                  <h3>Experienced Teacher</h3>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Our trainers are trained in CBC and are committed to student
                    growth
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow h-100 p-2">
                <div className="card-header text-center ">
                  <h3>Modern Facilities</h3>
                </div>
                <div className="coard-body">
                  <p className="card-text">
                    We provide state of art labs,library,learning spaces
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow h-100 p-2">
                <div className="card-header text-center">
                  <h3>Co-curriculumn Activities</h3>
                </div>
                <div className="card-body">
                  <p>
                    Students explore sports art,tech and leadership beyond books
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact section */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="text-success">Join Masomo School Today</h2>
          <p>
            Enroll your child in a school that builds future leading citizen
          </p>
          <a href="#">Apply Now</a>
        </div>
      </section>
      {/* footer section */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">
          &copy;{new Date().getFullYear()}Masomo School. All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default HomeComponent