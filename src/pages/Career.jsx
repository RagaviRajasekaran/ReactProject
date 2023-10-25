import React from 'react'
import UI from '../assets/Ui.jpg'
import guvi from '../assets/guvi.jpg'
import deve from '../assets/deve.jpg'

function Career() {
  return (
    <div className="container">
    <div className="row">
    <div className="container pt-4">
        <div className="row">
          <div className="col" >
             <div className="card">
                      <div className="card-body">
                        <img src={UI} height={200} />
                        <h3>Cloud Computing vs Edge Computing: Which One is Better in 2023?</h3>
                        <p>Motion graphic designers are the unsung heroes of any company as their designs, and animations</p>
                      </div>
                    </div>
                  
                </div>
                <div className="col" >
             <div className="card">
                      <div className="card-body">
                        <img src={guvi} height={200} />
                        <h3>Top Product-Based Companies for Digital Marketers</h3>
                        <p>Selecting the right launchpad for a successful career in digital marketing isn’t just about joining</p>
                      </div>
                    </div>
                  
                </div>
                <div className="col" >
             <div className="card">
                      <div className="card-body">
                      <img className="card-img-top" src={deve} height={200} />
                        <h3 class="card-title">The Ultimate Guide to Real-World Full-Stack Development Applications</h3>
                        <p class="card-text">Full-stack development has become increasingly popular in recent years</p>
                        </div>
                    </div>
                  
                </div>
            
        </div>
      </div>
    </div>
</div>
  )
}

export default Career