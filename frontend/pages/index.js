import React from "react"
import NavBar from "../components/Navbar"
import Banner from "../components/Banner"

export default (props)=>(   
   <> 
      <Banner {...props}/>
      <div className="container-fluid bg-white">
         <div className="container py-5">
            <h1>What is NSCC 360?</h1>
            <hr />
            <main className="row">
               <div className="col-md-7">
                  <p>The Institute of Technology Campus is located in the north end of Halifax and enjoys incredible views of the Bedford Basin. The campus has undergone a major transformation with a new library, learning commons and fresh, updated street presence. Students enjoy a full-service cafeteria, an exercise room and a vibrant Student Association. The campus is easily accessible by bus and is within walking distance of cafés, bakeries, restaurants, shops and banks.</p>
               </div>
               <div className="col-md-5">
                  <img class="w-100" src="/static/vr-headset.png" alt="vr-headset"/>
               </div>
            </main>
            <footer>
               <hr />
               <p className="text-center">NSCC 2019 &copy; All Rights Reserved</p>
            </footer>
         </div>
      </div>
   </>
)