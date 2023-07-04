import NavigationBar from './components/NavigationBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddStudent from './components/AddStudent';
import { Container } from 'react-bootstrap';
import Home from './components/Home';


function App() {
  return (
      <Router>
      <div className="App">
          <NavigationBar/>
     <Container>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>    

            <Route path="/addStudent">
              <AddStudent/>
            </Route> 

            <Route path="/#">
              
            </Route>  

            <Route path="*">
              {/* <NotFound />  */}
            </Route>  
              
          </Switch>
      </Container>
      </div>
      </Router> 
   
  );
}

export default App;

