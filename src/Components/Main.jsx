
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Main = () => {

    return(
        <div className="hero container-fluid mt-3 text-white card border-0">

              <img src="/Assets/main.png.jpg" className="img-fluid card-img"/>

               <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start container">
                  <p class="h1 card-title fs-1">New Season Arrivals</p>
                  <p class="fs-4 d-sm-block d-none">
                   This is a wider card with supporting text below as a natural
                   lead-in to additional content. This content is a little bit
                   longer.
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
