import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/App.css'
const Home = () =>{
    return (
        <div className="w3-container w3-center"> 
        <div className="w3-display-middle">
            <div className="w3-container w3-half w3-red w3-hover-shadow">
               <Link to="/PersonalInformation"><h2>Personal Information using Function and Hooks</h2>  </Link>
              
            </div>
            <div className="w3-container w3-half w3-hover-shadow w3-light-blue">
            <Link to="/PersonalInfo"><h2>Personal Information using Class</h2>   </Link>
            </div>
            </div> 
        </div>
    );
}

export default Home;