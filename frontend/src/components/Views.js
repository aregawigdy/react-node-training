///import logo from './logo.svg';
import '../App.css';
// import { useContext } from "react";
// import { AccountContext } from "./AccountContext";
import { Routes, Route} from 'react-router-dom';
// import {Text} from "@chakra-ui/layout" 
import Login from './Login';
import Home from './Home';
import Demand from './Demand';
import UsersRegistration from './UsersRegistration';
import UsersList from './UsersList';
import PlantRegistration from './PlantRegistration';
import PlantsList from './PlantsList';
import ContractForm from './ContractForm';
import ContractLists from './ContractLists';
//import PrivateRoutes from "./PrivateRoutes";
const Views = () => {
    // const { user } = useContext(AccountContext);
    /*return user.loggedIn === null ? (
        <Text>Loading...</Text>
    ): (*/
    return (
        <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/home" exact element={<Home />} />
            <Route path = "/demand" exact element={<Demand/>} />
            <Route path = "/user-registration" exact element={<UsersRegistration/>} />
            <Route path = "/users-list" exact element={<UsersList/>} />
            <Route path = "/plant-registration" exact element={<PlantRegistration/>} />
            <Route path = "/plants-list" exact element={<PlantsList/>} />
            <Route path = "/contract-form" exact element={<ContractForm/>} />
            <Route path = "/contracts-list" exact element={<ContractLists/>} />
            {/* <Route element={<PrivateRoutes />}>
                <Route path="/home" element={<Home />} />
            </Route>
            <Route path="*" element={<Login />} /> */}
        </Routes>
    );
};

export default Views;
