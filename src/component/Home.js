import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect  } from 'react';
import naawlVideo from '../video/naawl.mp4'

function Home() {
    useEffect(()=>{
        toast("Welcome To Naawl");
      },[]);
  return (
    <div>
        <ToastContainer />
        <div className="overlay"></div>

        <header>
        <div className="opacity">
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src={naawlVideo} type="video/mp4"/>
  </video>
  </div>
  </header>
  <br/><br/>
  <div className="container">
    <div className="row">
        <div className="col-md-3 col-sm-6">
            <div className="counter">
                <div className="counter-content">
                    <span className="counter-value">34</span>
                    <h3>University</h3>
                </div>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="counter blue">
                <div className="counter-content">
                    <span className="counter-value">4538</span>
                    <h3>Student</h3>
                </div>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="counter green">
                <div className="counter-content">
                    <span className="counter-value">854</span>
                    <h3>Member</h3>
                </div>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="counter yellow">
                <div className="counter-content">
                    <span className="counter-value">847</span>
                    <h3>Service</h3>
                </div>
            </div>
        </div>
    </div>
</div>
<br/><br/>
        </div>
  )
}

export default Home