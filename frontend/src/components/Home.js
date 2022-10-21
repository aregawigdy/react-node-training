///import logo from './logo.svg';
import '../App.css';
//import Topbar from './components/Topbar';
//import Sidebar from './components/Sidebar';
//import Footer from './components/Footer';
import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
// import Demand from './Demand';
// import UsersRegistration from './UsersRegistration';
// import UsersList from './UsersList';
// import PlantRegistration from './PlantRegistration';
// import PlantsList from './PlantsList';
// import ContractForm from './ContractForm';
// import ContractLists from './ContractLists';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const Home = () => {
  return (
      <div id="layout-wrapper">
        <Header />
        <Menu />
        <Dashboard />
        {/* <Routes>
          <Route path="/home" exact element={<Dashboard/>} />
          <Route path = "/demand" exact element={<Demand/>} />
          <Route path = "/user-registration" exact element={<UsersRegistration/>} />
          <Route path = "/users-list" exact element={<UsersList/>} />
          <Route path = "/plant-registration" exact element={<PlantRegistration/>} />
          <Route path = "/plants-list" exact element={<PlantsList/>} />
          <Route path = "/contract-form" exact element={<ContractForm/>} />
          <Route path = "/contracts-list" exact element={<ContractLists/>} />
        </Routes> */}
        {/* <Footer /> */}
        {/* <Topbar /> */}
        {/* <Sidebar /> */}

      </div>
  );
};

export default Home;
