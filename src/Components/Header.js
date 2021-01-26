import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const Header = ({route}) =>{
    const [currentPath,setCurrentPath] = useState(window.location.pathname);

    const paths = route.map( link =>{ 
            return <Link to={link.route} key={link.id} className={link.route===currentPath ? 'w3-bar-item w3-button w3-pale-blue' : 'w3-bar-item w3-button' } onClick={e=>{setCurrentPath(link.route)}} >{link.displayName}</Link>
     });
    return (
        <div className="w3-bar w3-blue"> 
            {paths}
        </div>
    );
}

export default Header;