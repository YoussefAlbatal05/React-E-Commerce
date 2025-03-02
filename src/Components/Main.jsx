
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Main = () => {

    return(
        <div className="card container-fluid mt-4 text-white border-0 min-vh-50 custom-main-height">

              <img src="/Assets/main.png.jpg" className="img-fluid card-img custom-main-height"/>

               <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start container">
                  <p class="h1 card-title fs-1 container">New Season Arrivals</p>
                  <p class="fs-4 d-sm-block d-none container">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, tempora modi ipsum fuga dolor nemo aspernatur fugiat accusamus.
                   </p>
               </div>

        </div>
    )
 
}

export default Main


// import React from "react";

// const Main = () => {
//     return (
//         <div className="hero container-fluid mt-3 card text-white">
//             {/* Background Image */}
//             <img src="./Assets/main.png.jpg" className="card-img img-fluid rounded" alt="Main" />

//             {/* Overlay Content */}
//             <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
//                 <p className="h5 card-title">h5 Bootstrap heading</p>
//                 <p className="h5">h5 Bootstrap heading</p>
//             </div>
//         </div>
//     );
// }

// export default Main;
