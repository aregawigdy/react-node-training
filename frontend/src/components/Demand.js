import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Header from './Header';
import Menu from './Menu';

function Demand(){
  useEffect( ()=>{
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);
  const fetchItems = async() => {
    const data = await fetch('/demand');
    const items = await data.json();
    setItems(items);
  };
    return (
      <div id="layout-wrapper">
        <Header />
        <Menu />
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {/* start page title */}
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="page-title-box">
                    <h4 className="font-size-18">Solar Grid Analysis Portal</h4>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item active">Demand Page</li>
                    </ol>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="float-right d-none d-md-block">
                    <div className="dropdown">
                      <button className="btn btn-primary dropdown-toggle waves-effect waves-light" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="mdi mdi-settings mr-2" /> Settings
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Separated link</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>     
              {/* end page title */}
              <div className="row">
                <div className="col-lg-12 col-lg-offset-0">
                    Display Demand Graphs here!
                    {
                      items.map(item =>(
                        <div>
                          <br/>
                          Below are contents from Server:
                          <p>Name: {item.name}</p>
                          <p>Message: {item.msg}</p>
                          <p>User Name: {item.username}</p>
                        </div>
                      ))
                    }
                </div>

              </div>
              {/* end row */}
            </div> {/* container-fluid */}
          </div>
          {/* End Page-content */}
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  ©  Copyright 
                  <a href = "https://altenergy.co.jp/" target="_blank"> Altenergy, Inc.</a> <span className="d-none d-sm-inline-block"> All Rights Reserved 2022.</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
}
export default Demand;