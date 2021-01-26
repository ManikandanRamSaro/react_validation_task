import '../Styles/App.css';

import '../Styles/w3.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';
 
import Header from './Header';
import Home from './Home'; 
import PersonalInfo from './PersonalInfo';
import PersonalInfoClass from './PersonalInfoClass';

const Routes = [
  {
    id:1,status:true,route:'/',displayName:'Home'
  },
  {
    id:2,status:true,route:'/PersonalInformation',displayName:'Personal Info'
  },
  {
    id:3,status:true,route:'/PersonalInfo',displayName:'Personal Info Class'
  }
]
const App = () => { 
  
   return (
        <div> 
            <BrowserRouter>
              <div >
                 <Header route={Routes}/>      
                  <Route path="/" component={Home} exact />
                  <Route path="/PersonalInformation" component={PersonalInfo} />
                  <Route path="/PersonalInfo" component={PersonalInfoClass} />
              </div>
            </BrowserRouter>            
        </div>
   );
}

export default App;
