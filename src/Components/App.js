import '../Styles/App.css';

import {BrowserRouter,Route,Link} from 'react-router-dom';

import Demo from './Demo';
import Header from './Header';
import Home from './Home';

import Layout from './Layout';

const App = () => { 
   return (
        <div> 
            <Header/>
            <BrowserRouter>
              <div >
                  <Route path="/" component={Layout} exact />
              </div>
            </BrowserRouter>            
        </div>
   );
}

export default App;
