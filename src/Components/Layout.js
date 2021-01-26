import '../Styles/App.css'; 

import PersonalInfo from './PersonalInfo';
import PersonalInfoClass from './PersonalInfoClass';
const Layout = () => { 
  return (
    <div className="w3-container"> 
        <div className="w3-display-middle">
            <div className="login-wrapper" >
                <div className="box">
                    {/* <PersonalInfo/> */}
                    <PersonalInfoClass/>
                </div>
            </div>
        </div>
    </div>
             
  );
}

export default Layout;
