import React from 'react'
import { useState } from 'react';
import teamLogo from '../images/teamLogo.png'

function BeMember() {
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
          }, 3000)
        // alert('You have submitted the form.')
      }
  return (
    <div>
           <section className="h-100" style={{backgroundColor: "rgb(245, 197, 109)"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src={teamLogo}
                alt="Sample photo" className="img-fluid"
                style={{borderTopLeftRadius: ".25rem",borderBottomLeftRadius: ".25rem"}} />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">registration form</h3>
                <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1m">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1n">Last name</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example97" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example97">Email ID</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="number" id="form3Example99" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example99">Student ID</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="tel" placeholder="05xxxxxxxx" pattern="[05]{2}[0-9]{8}" requiredid="form3Example8" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example8">Phone Number</label>
                </div>

                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 className="mb-0 me-4">Gender: </h6>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" />
                    <label className="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label className="form-check-label" for="maleGender">Male</label>
                  </div>

                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">

                    <select className="select">
                      <option value="1">University</option>
                      <option value="2">King Abdualziz </option>
                      <option value="3">King Saud</option>
                      <option value="4">Princess Nourah bint Abdulrahman </option>
                    </select>

                  </div>
                  <div className="col-md-6 mb-4">

                    <select className="select">
                      <option value="1">City</option>
                      <option value="2">Jeddah</option>
                      <option value="3">Riyadh</option>
                      <option value="4">Dammam</option>
                    </select>

                  </div>
                </div>
                {submitting &&
       <div><h3 style={{color:"#3CBC3C"}}>Submtting Form...</h3></div>
     }
                <div className="d-flex justify-content-end pt-3">
                  <button type="reset" className="btn btn-light btn-lg">Reset all</button>
                  <button type="submit" className="btn btn-warning btn-lg ms-2">Submit form</button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default BeMember