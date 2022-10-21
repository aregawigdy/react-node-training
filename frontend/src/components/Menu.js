import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Menu extends Component{
  render(){
    return (
      <div>
        <div className="topnav">
          <div className="container-fluid">
            <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
              <div className="collapse navbar-collapse" id="topnav-menu-content">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to ='/home' className="nav-link">
                    {/* <a className="nav-link" href="index.html"> */}
                      <i className="ti-home mr-2" />Dashboard
                    {/* </a> */}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to = '/demand' className="nav-link">
                      <i className="ti-vector mr-2" />Demand
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-users" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="ti-user mr-2" /> Users Info
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-users">
                      <Link to = '/user-registration' className="dropdown-item">Users Registration</Link>
                      <Link to = '/users-list' className="dropdown-item">Users List</Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-plants" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="ti-layout-grid4-alt mr-2" /> Plant Info
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-plants">
                      <Link to = '/plant-registration' className="dropdown-item">Plant Registration</Link>
                      <Link to = '/plants-list' className="dropdown-item">Power Plants List</Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-contract" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="ti-pencil-alt mr-2" /> Contract Info
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-contract">
                      <Link to = '/contract-form' className="dropdown-item">Contract Form</Link>
                      <Link to = '/contracts-list' className="dropdown-item">Contracts List</Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown mega-dropdown">
                    <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-uielement" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="ti-package mr-2" />UI Elements
                    </a>
                    <div className="dropdown-menu mega-dropdown-menu dropdown-menu-left dropdown-mega-menu-xl" aria-labelledby="topnav-uielement">
                      <div className="row">
                        <div className="col-lg-4">
                          <div>
                            <a href="ui-alerts.html" className="dropdown-item">Alerts</a>
                            <a href="ui-buttons.html" className="dropdown-item">Buttons</a>
                            <a href="ui-cards.html" className="dropdown-item">Cards</a>
                            <a href="ui-carousel.html" className="dropdown-item">Carousel</a>
                            <a href="ui-dropdowns.html" className="dropdown-item">Dropdowns</a>
                            <a href="ui-grid.html" className="dropdown-item">Grid</a>
                            <a href="ui-images.html" className="dropdown-item">Images</a>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div>
                            <a href="ui-lightbox.html" className="dropdown-item">Lightbox</a>
                            <a href="ui-modals.html" className="dropdown-item">Modals</a>
                            <a href="ui-rangeslider.html" className="dropdown-item">Range Slider</a>
                            <a href="ui-session-timeout.html" className="dropdown-item">Session Timeout</a>
                            <a href="ui-progressbars.html" className="dropdown-item">Progress Bars</a>
                            <a href="ui-sweet-alert.html" className="dropdown-item">Sweet-Alert</a>
                            <a href="ui-tabs-accordions.html" className="dropdown-item">Tabs &amp; Accordions</a>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div>
                            <a href="ui-typography.html" className="dropdown-item">Typography</a>
                            <a href="ui-video.html" className="dropdown-item">Video</a>
                            <a href="ui-general.html" className="dropdown-item">General</a>
                            <a href="ui-colors.html" className="dropdown-item">Colors</a>
                            <a href="ui-rating.html" className="dropdown-item">Rating</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="ti-harddrives mr-2" />Components
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-components">
                      <div className="dropdown">
                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-email" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Email <div className="arrow-down" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="topnav-email">
                          <a href="email-inbox.html" className="dropdown-item">Inbox</a>
                          <a href="email-read.html" className="dropdown-item">Email Read</a>
                          <a href="email-compose.html" className="dropdown-item">Email Compose</a>
                        </div>
                      </div>
                      <a href="calendar.html" className="dropdown-item">Calendar</a>
                      <div className="dropdown">
                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-form" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Forms <div className="arrow-down" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="topnav-form">
                          <a href="form-elements.html" className="dropdown-item">Form Elements</a>
                          <a href="form-validation.html" className="dropdown-item">Form Validation</a>
                          <a href="form-advanced.html" className="dropdown-item">Form Advanced</a>
                          <a href="form-editors.html" className="dropdown-item">Form Editors</a>
                          <a href="form-uploads.html" className="dropdown-item">Form File Upload</a>
                          <a href="form-xeditable.html" className="dropdown-item">Form Xeditable</a>
                          <a href="form-repeater.html" className="dropdown-item">Form Repeater</a>
                          <a href="form-wizard.html" className="dropdown-item">Form Wizard</a>
                          <a href="form-mask.html" className="dropdown-item">Form Mask</a>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-chart" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Charts <div className="arrow-down" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="topnav-chart">
                          <a href="charts-morris.html" className="dropdown-item">Morris Chart</a>
                          <a href="charts-chartist.html" className="dropdown-item">Chartist Chart</a>
                          <a href="charts-chartjs.html" className="dropdown-item">Chartjs Chart</a>
                          <a href="charts-flot.html" className="dropdown-item">Flot Chart</a>
                          <a href="charts-knob.html" className="dropdown-item">Jquery Knob Chart</a>
                          <a href="charts-sparkline.html" className="dropdown-item">Sparkline Chart</a>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-table" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Tables <div className="arrow-down" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="topnav-table">
                          <a href="tables-basic.html" className="dropdown-item">Basic Tables</a>
                          <a href="tables-datatable.html" className="dropdown-item">Data Table</a>
                          <a href="tables-responsive.html" className="dropdown-item">Responsive Table</a>
                          <a href="tables-editable.html" className="dropdown-item">Editable Table</a>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-icons" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Icons <div className="arrow-down" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="topnav-icons">
                          <a href="icons-material.html" className="dropdown-item">Material Design</a>
                          <a href="icons-fontawesome.html" className="dropdown-item">Font Awesome</a>
                          <a href="icons-ion.html" className="dropdown-item">Ion Icons</a>
                          <a href="icons-themify.html" className="dropdown-item">Themify Icons</a>
                          <a href="icons-dripicons.html" className="dropdown-item">Dripicons</a>
                          <a href="icons-typicons.html" className="dropdown-item">Typicons Icons</a>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-map" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Maps <div className="arrow-down" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="topnav-map">
                          <a href="maps-google.html" className="dropdown-item"> Google Map</a>
                          <a href="maps-vector.html" className="dropdown-item"> Vector Map</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown mega-dropdown">
                    <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-auth" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="ti-archive mr-2" /> Authentication
                    </a>
                    <div className="dropdown-menu mega-dropdown-menu dropdown-mega-menu-lg" aria-labelledby="topnav-auth">
                      <div className="row">
                        <div className="col-lg-6">
                          <div>
                            <a href="pages-login.html" className="dropdown-item">Login 1</a>
                            <a href="pages-register.html" className="dropdown-item">Register 1</a>
                            <a href="pages-recoverpw.html" className="dropdown-item">Recover Password 1</a>
                            <a href="pages-lock-screen.html" className="dropdown-item">Lock Screen 1</a>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <a href="pages-login-2.html" className="dropdown-item">Login 2</a>
                            <a href="pages-register-2.html" className="dropdown-item">Register 2</a>
                            <a href="pages-recoverpw-2.html" className="dropdown-item">Recover Password 2</a>
                            <a href="pages-lock-screen-2.html" className="dropdown-item">Lock Screen 2</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown mega-dropdown">
                    <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-extrapages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="ti-support mr-2" /> Extra Pages
                    </a>
                    <div className="dropdown-menu mega-dropdown-menu dropdown-mega-menu-lg" aria-labelledby="topnav-extrapages">
                      <div className="row">
                        <div className="col-lg-6">
                          <div>
                            <a href="pages-timeline.html" className="dropdown-item">Timeline</a>
                            <a href="pages-invoice.html" className="dropdown-item">Invoice</a>
                            <a href="pages-directory.html" className="dropdown-item">Directory</a>
                            <a href="pages-blank.html" className="dropdown-item">Blank Page</a>
                            <a href="pages-404.html" className="dropdown-item">Error 404</a>
                            <a href="pages-500.html" className="dropdown-item">Error 500</a>
                            <a href="pages-pricing.html" className="dropdown-item">Pricing</a>
                            <a href="pages-gallery.html" className="dropdown-item">Gallery</a>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <a href="pages-maintenance.html" className="dropdown-item">Maintenance</a>
                            <a href="pages-comingsoon.html" className="dropdown-item">Coming Soon</a>
                            <a href="pages-faq.html" className="dropdown-item">FAQs</a>
                            <a href="email-template-basic.html" className="dropdown-item">Basic Action Email</a>
                            <a href="email-template-Alert.html" className="dropdown-item">Alert Email</a>
                            <a href="email-template-Billing.html" className="dropdown-item">Billing Email</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}