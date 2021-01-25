import '../Styles/App.css'; 

import PersonalInfo from './PersonalInfo';
const Layout = () => { 
  return (
    <div className="w3-container"> 
        <div className="w3-display-middle">
            <div className="login-wrapper" >
                <div className="box">
                    <PersonalInfo/>
                </div>
            </div>
        </div>
    </div>
             
  );
}

export default Layout;
