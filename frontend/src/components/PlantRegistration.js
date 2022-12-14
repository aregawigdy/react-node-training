import React from "react";
import Header from './Header';
import Menu from './Menu'; 
function PlantRegistration(){
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
                      <li className="breadcrumb-item active">Power Plant Registration</li>
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
                  <div className="panel panel-success">
                        <div className="bg-primary">
                            <div className="text-primary text-center p-4">
                                <h5 className="text-white font-size-20">Solar Grid</h5>
                                {/* <a href="index.html" className="logo logo-admin">
                                <img src="assets/images/alt_logo.png" height={40} alt="logo" />
                                </a> */}
                            </div>
                        </div>
                        <br/>
                        <div className="panel-body">
                          <form className="form-horizontal" encType="multipart/form-data" role="form" method="POST" name="form_validation">
                            {/*<b>??????:</b>
                                    <div class="panel" style="background-color: #ebfcfa; border-color: silver;">
                                        <div class="panel-body">*/}
                            <div className="form-group d-flex">
                              <div className="col-md-6 flex-fill">
                                <input id="name" type="text" className="form-control" placeholder="?????????ID" name="plant_id"  required autofocus />
                              </div>
                              <div className="col-md-6 flex-fill">
                                <input id="name" type="text" className="form-control" placeholder="?????????????????????" name="user_id"  required autofocus />
                              </div>
                            </div>
                            {/*</div>
                                    </div>*/}
                            <b>???????????????:</b>
                            <div className="panel">
                              <div className="panel-body">
                                <div className="form-group d-flex">
                                  <div className="col-md-6 flex-fill">
                                    <input type="text" className="form-control" name="zip_code" placeholder="????????????"  required autofocus />
                                    <small className="form-text text-muted">(xxx-xxxx format)</small>
                                  </div>
                                  <div className="col-md-6 flex-fill">
                                    <select required="required" name="prefecture" className="form-select form-select-lg placeholder_select">
                                      <option value hidden>????????????</option>
                                      <option>?????????</option>
                                      <option value disabled="disabled">???????????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option value disabled="disabled">???????????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>????????????</option>
                                      <option value disabled="disabled">???????????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option value disabled="disabled">???????????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>????????????</option>
                                      <option value disabled="disabled">???????????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option value disabled="disabled">???????????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option value disabled="disabled">???????????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>?????????</option>
                                      <option>????????????</option>
                                      <option>?????????</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-group d-flex">
                                  <div className="col-md-6 flex-fill">
                                    <input id="name" type="text" className="form-control" placeholder="????????????" name="city" required autofocus />
                                  </div>
                                  <div className="col-md-6 flex-fill">
                                    <input type="text" className="form-control" placeholder="???????????????" name="address1" required autofocus />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <b>?????????:</b>
                            <div className="panel">
                              <div className="panel-body">
                                <div className="form-group d-flex">
                                  <div className="col-md-4 flex-fill">
                                    <input type="text" className="form-control" name="panel_maker_name" placeholder="???????????????" required autofocus />
                                  </div>
                                  <div className="col-md-4 flex-fill">
                                    <input id="name" type="text" className="form-control" placeholder="??????" name="panel_model" required autofocus />
                                  </div>
                                  <div className="col-md-4 flex-fill">
                                    <input type="text" className="form-control" placeholder="??????" name="panel_num_sheets" required autofocus />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <b>PCS:</b>
                            <div className="panel">
                              <div className="panel-body">
                                <div className="form-group d-flex">
                                  <div className="col-md-4 flex-fill">
                                    <input type="text" className="form-control" name="pcs_maker_name" placeholder="???????????????" required autofocus />
                                  </div>
                                  <div className="col-md-4 flex-fill">
                                    <input id="name" type="text" className="form-control" placeholder="??????" name="pcs_model" required autofocus />
                                  </div>
                                  <div className="col-md-4 flex-fill">
                                    <input type="text" className="form-control" placeholder="??????" name="pcs_num_units" required autofocus />
                                  </div>
                                </div>
                              </div>
                            </div>  
                            <hr />
                            <div className="form-group">
                              <div className="col-md-6 col-md-offset-4">
                                <button type="submit" name="registerPlant" className="btn btn-success">
                                  ??????
                                </button>
                              </div>
                            </div>
                          </form>

                    </div>
                    </div>
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
                  ??  Copyright 
                  <a href = "https://altenergy.co.jp/" target="_blank"> Altenergy, Inc.</a> <span className="d-none d-sm-inline-block"> All Rights Reserved 2022.</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
}
export default PlantRegistration;