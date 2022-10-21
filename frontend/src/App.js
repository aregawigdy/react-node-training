import './App.css';
// import UserContext from './components/AccountContext';
import Views from './components/Views';
import {BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div id="layout-wrapper">
        {/* <UserContext> */}
          <Views />
        {/* </UserContext> */}
      </div>
    </Router>
  );
}

export default App;
