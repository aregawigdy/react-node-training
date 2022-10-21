import React from 'react';
import {Link} from 'react-router-dom';
function Topbar(){
    return(
        <header id="page-topbar">
  <div className="navbar-header">
    <div className="d-flex">
      {/* LOGO */}
      <div className="navbar-brand-box">
        <a href="index.html" className="logo logo-dark">
          <span className="logo-sm">
            <img src="assets/images/logo.svg" alt height={22} />
          </span>
          <span className="logo-lg">
            <img src="assets/images/logo-dark.png" alt height={17} />
          </span>
        </a>
        <a href="index.html" className="logo logo-light">
          <span className="logo-sm">
            <img src="assets/images/logo-sm.png" alt height={22} />
          </span>
          <span className="logo-lg">
            <img src="assets/images/logo-light.png" alt height={18} />
          </span>
        </a>
      </div>
      <button type="button" className="btn btn-sm mr-2 font-size-24 d-lg-none header-item waves-effect waves-light" data-toggle="collapse" data-target="#topnav-menu-content">
        <i className="mdi mdi-menu" />
      </button>
    </div>
    <div className="d-flex">
      {/* App Search*/}
      <form className="app-search d-none d-lg-block">
        <div className="position-relative">
          <input type="text" className="form-control" placeholder="Search..." />
          <span className="fa fa-search" />
        </div>
      </form>
      <div className="dropdown d-none d-md-block ml-2">
        <button type="button" className="btn header-item waves-effect" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img className="mr-2" src="assets/images/flags/us_flag.jpg" alt="Header Language" height={16} /> English
          <span className="mdi mdi-chevron-down" />
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          {/* item*/}
          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <img src="assets/images/flags/germany_flag.jpg" alt="user-image" className="mr-1" height={12} /> <span className="align-middle"> German </span>
          </a>
          {/* item*/}
          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <img src="assets/images/flags/italy_flag.jpg" alt="user-image" className="mr-1" height={12} /> <span className="align-middle"> Italian </span>
          </a>
          {/* item*/}
          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <img src="assets/images/flags/french_flag.jpg" alt="user-image" className="mr-1" height={12} /> <span className="align-middle"> French </span>
          </a>
          {/* item*/}
          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <img src="assets/images/flags/spain_flag.jpg" alt="user-image" className="mr-1" height={12} /> <span className="align-middle"> Spanish </span>
          </a>
          {/* item*/}
          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <img src="assets/images/flags/russia_flag.jpg" alt="user-image" className="mr-1" height={12} /> <span className="align-middle"> Russian </span>
          </a>
        </div>
      </div>
      <div className="dropdown d-none d-lg-inline-block">
        <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
          <i className="mdi mdi-fullscreen" />
        </button>
      </div>
      <div className="dropdown d-inline-block">
        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="mdi mdi-bell-outline" />
          <span className="badge badge-danger badge-pill">3</span>
        </button>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-notifications-dropdown">
          <div className="p-3">
            <div className="row align-items-center">
              <div className="col">
                <h5 className="m-0 font-size-16"> Notifications (258) </h5>
              </div>
            </div>
          </div>
          <div data-simplebar style={{maxHeight: 230}}>
            <a href className="text-reset notification-item">
              <div className="media">
                <div className="avatar-xs mr-3">
                  <span className="avatar-title bg-success rounded-circle font-size-16">
                    <i className="mdi mdi-cart-outline" />
                  </span>
                </div>
                <div className="media-body">
                  <h6 className="mt-0 mb-1">Your order is placed</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">Dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
              </div>
            </a>
            <a href className="text-reset notification-item">
              <div className="media">
                <div className="avatar-xs mr-3">
                  <span className="avatar-title bg-warning rounded-circle font-size-16">
                    <i className="mdi mdi-message-text-outline" />
                  </span>
                </div>
                <div className="media-body">
                  <h6 className="mt-0 mb-1">New Message received</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">You have 87 unread messages</p>
                  </div>
                </div>
              </div>
            </a>
            <a href className="text-reset notification-item">
              <div className="media">
                <div className="avatar-xs mr-3">
                  <span className="avatar-title bg-info rounded-circle font-size-16">
                    <i className="mdi mdi-glass-cocktail" />
                  </span>
                </div>
                <div className="media-body">
                  <h6 className="mt-0 mb-1">Your item is shipped</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">It is a long established fact that a reader will</p>
                  </div>
                </div>
              </div>
            </a>
            <a href className="text-reset notification-item">
              <div className="media">
                <div className="avatar-xs mr-3">
                  <span className="avatar-title bg-primary rounded-circle font-size-16">
                    <i className="mdi mdi-cart-outline" />
                  </span>
                </div>
                <div className="media-body">
                  <h6 className="mt-0 mb-1">Your order is placed</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">Dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
              </div>
            </a>
            <a href className="text-reset notification-item">
              <div className="media">
                <div className="avatar-xs mr-3">
                  <span className="avatar-title bg-danger rounded-circle font-size-16">
                    <i className="mdi mdi-message-text-outline" />
                  </span>
                </div>
                <div className="media-body">
                  <h6 className="mt-0 mb-1">New Message received</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">You have 87 unread messages</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="p-2 border-top">
            <a className="btn btn-sm btn-link font-size-14 btn-block text-center" href="javascript:void(0)">
              View all
            </a>
          </div>
        </div>
      </div>
      <div className="dropdown d-inline-block">
        <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img className="rounded-circle header-profile-user" src="assets/images/users/user-4.jpg" alt="Header Avatar" />
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          {/* item*/}
          <a className="dropdown-item" href="#"><i className="mdi mdi-account-circle font-size-17 align-middle mr-1" /> Profile</a>
          <a className="dropdown-item" href="#"><i className="mdi mdi-wallet font-size-17 align-middle mr-1" /> My
            Wallet</a>
          <a className="dropdown-item d-block" href="#"><span className="badge badge-success float-right">11</span><i className="mdi mdi-settings font-size-17 align-middle mr-1" /> Settings</a>
          <a className="dropdown-item" href="#"><i className="mdi mdi-lock-open-outline font-size-17 align-middle mr-1" /> Lock screen</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item text-danger" href="#"><i className="bx bx-power-off font-size-17 align-middle mr-1 text-danger" /> Logout</a>
        </div>
      </div>
      <div className="dropdown d-inline-block">
        <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
          <i className="mdi mdi-settings-outline" />
        </button>
      </div>
    </div>
  </div>
</header>


    );
}
export default Topbar;