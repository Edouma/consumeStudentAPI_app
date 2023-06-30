import NavigationBar from './components/NavigationBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddStudent from './components/AddStudent';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
       <NavigationBar/>
      <Container>
          <AddStudent/>
      </Container>
    </div>

   
  );
}

export default App;
