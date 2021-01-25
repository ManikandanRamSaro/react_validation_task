import '../Styles/App.css';

import {BrowserRouter,Route,Link} from 'react-router-dom';

import Demo from './Demo';
import Header from './Header';
import Home from './Home';


const App = () => { 
   return (
        <div> 
            <Header/>
            <BrowserRouter>
              <div>
                  <Route path="/" component={Home} exact />
              </div>
            </BrowserRouter>            
        </div>
   );
}

export default App;
