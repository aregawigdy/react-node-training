///import logo from './logo.svg';
import './App.css';
//import Topbar from './components/Topbar';
//import Sidebar from './components/Sidebar';
//import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import Dashboard from './components/Dashboard';
import Demand from './components/Demand';
import UsersRegistration from './components/UsersRegistration';
import UsersList from './components/UsersList';
import PlantRegistration from './components/PlantRegistration';
import PlantsList from './components/PlantsList';
import ContractForm from './components/ContractForm';
import ContractLists from './components/ContractLists';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div id="layout-wrapper">
        <Header />
        <Menu />
        {/* <Dashboard /> */}
        <Routes>
          <Route path="/" exact element={<Dashboard/>} />
          <Route path = "/demand" exact element={<Demand/>} />
          <Route path = "/user-registration" exact element={<UsersRegistration/>} />
          <Route path = "/users-list" exact element={<UsersList/>} />
          <Route path = "/plant-registration" exact element={<PlantRegistration/>} />
          <Route path = "/plants-list" exact element={<PlantsList/>} />
          <Route path = "/contract-form" exact element={<ContractForm/>} />
          <Route path = "/contracts-list" exact element={<ContractLists/>} />
        </Routes>
        {/* <Footer /> */}
        {/* <Topbar /> */}
        {/* <Sidebar /> */}

      </div>
    </Router>
  );
}

export default App;
