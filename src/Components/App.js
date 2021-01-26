import '../Styles/App.css';

import {BrowserRouter,Route,Link} from 'react-router-dom';

import Demo from './Demo';
import Header from './Header';
import Home from './Home';

import Layout from './Layout';
import PersonalInfo from './PersonalInfo';

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
                  <Route path="/PersonalInfo" component={Layout} />
              </div>
            </BrowserRouter>            
        </div>
   );
}

export default App;
