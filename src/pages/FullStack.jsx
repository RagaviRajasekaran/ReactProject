import React from 'react'
import deve from '../assets/deve.jpg'
import GuviFullstack from '../assets/GuviFullstack.jpg'
import fullstack from '../assets/fullstack.jpg'

function FullStack() {
  return (
    <div>
    <div className="container pt-4">
    <div className="row">
   
      
          <div className="col" >
             <div className="card">
                      <div className="card-body">
                        <img className="card-img-top" src={fullstack} height={200}  />
                        <h3 class="card-title">The Top 10 Tools Every Full-Stack Developer Should Master in 2023</h3>
                        <p class="card-text">‍As a full-stack developer, having the right set of tools is crucial for your success.</p>
                      </div>
                    </div>
                  
                </div>
                <div className="col" >
             <div className="card">
                      <div className="card-body">
                        <img className="card-img-top" src={GuviFullstack} height={200} />
                        <h3 class="card-title">7 Best Full-Stack Development Online Courses [2023]</h3>
                        <p class="card-text">Today’s world is rapidly evolving into a technological landscape.</p>
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
  )
}

export default FullStack;