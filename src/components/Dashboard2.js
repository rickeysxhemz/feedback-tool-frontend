import React from 'react';
// import logo from './assets/images/logo.png';
// import './App.css';

function Dashboard2() {
    return (       
        <div className="main-wrapper">
        <div className="content-o">
          <div className="container">
            <div className="dashboard-header text-center">
              <a href="index.html"><img src="assets/images/logo-trans.png" alt="logo" className="img-fluid" /></a>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-7 mt-2">
                  <div style={{ border: '0px', backgroundColor: '#FFEECD', color: '#000', borderRadius: '20px', paddingTop: '8px', paddingBottom: '1px' }}>
                    <div className="list">
                      <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Dashboard</a></li>
                        <li><a href="">Order Details</a></li>
                        <li><a href="">Order Status</a></li>
                        <li><a href="">Recyclers</a></li>
                        <li><a href="">Issues</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4 banner-content-o mt-2 desktop-view">
                  <div className="search-right">
                    <form className="form" name="store" id="store" method="post" action="#">
                      <div className="form-inner">
                        <div className="input-group">
                          <input type="email" className="form-controls" placeholder="" />
                          <button className="btn btn-primary sub-btn" type="submit">Search &nbsp; &nbsp; &nbsp;<span><img src="assets/images/search.png" alt="" /></span></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-md-4 banner-content-m mt-2 mobile-view">
                  <div className="search-right">
                    <form className="form" name="store" id="store" method="post" action="#">
                      <div className="form-inner">
                        <div className="input-group">
                          <input type="email" className="form-controls" placeholder="" />
                          <button className="btn btn-primary sub-btn" type="submit">Search &nbsp; &nbsp; &nbsp;<span><img src="assets/images/search.png" alt="" /></span></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-10">
                  <div className="left-content mt-2">
                    <button style={{ border: '0px', backgroundColor: '#FFEECD', color: '#000', borderRadius: '20px', padding: '7px 30px 7px 10px' }}>
                      <i className="fa fa-calendar"></i> Start Date
                    </button>
                    <button style={{ border: '0px', backgroundColor: '#FFEECD', color: '#000', borderRadius: '20px', padding: '7px 30px 7px 10px' }}>
                      <i className="fa fa-calendar"></i> End Date
                    </button>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="image-right">
                      <img src="assets/images/fone-bucks.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12" style={{ paddingLeft: '50px', paddingRight: '50px', borderRadius: '30px', padding: '10px 20px 20px 20px', alignContent: 'middle' }}>
                <div className="account-content">
                  <div className="align-items-center justify-content-center">
                    <div className="inner-content">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-4 text-center pb-2 pt-2">
                            <div className="inner-box1 p-3" style={{ backgroundColor: '#FFEECD', borderRadius: '20px' }}>
                              <h5><b>Total Orders</b></h5>
                              <h1><b>100</b></h1>
                              <p><b><a href=""><u>order details</u></a></b></p>
                            </div>
                          </div>
                          <div className="col-md-4 text-center pb-2 pt-2">
                            <div className="inner-box1 p-3" style={{ backgroundColor: '#FFEECD', borderRadius: '20px' }}>
                              <h5><b>Commission</b></h5>
                              <h1><b>100</b></h1>
                              <p><b><a href=""><u>view details</u></a></b></p>
                            </div>
                          </div>
                          <div className="col-md-4 text-center pb-2 pt-2">
                            <div className="inner-box1 p-3" style={{ backgroundColor: '#FFEECD', borderRadius: '20px' }}>
                              <h5><b>Total Order Value</b></h5>
                              <h1><b>100</b></h1>
                              <p><b><a href=""><u>view details</u></a></b></p>
                            </div>
                          </div>
                          <div className="col-md-4 text-center pb-2 pt-2">
                            <div className="inner-box1 p-3" style={{ backgroundColor: '#FFEECD', borderRadius: '20px' }}>
                              <h5><b>Status</b></h5>
                              <h1><b>Received</b></h1>
                              <p><b>50</b></p>
                              <p><b><a href=""><u>Status Detail</u></a></b></p>
                            </div>
                          </div>
                          <div className="col-md-4 text-center pb-2 pt-2">
                            <div className="inner-box1 p-3" style={{ backgroundColor: '#FFEECD', borderRadius: '20px' }}>
                              <h5><b>Status</b></h5>
                              <h1><b>Pending</b></h1>
                              <p><b>25</b></p>
                              <p><b><a href=""><u>Status Detail</u></a></b></p>
                            </div>
                          </div>
                          <div className="col-md-4 text-center pb-2 pt-2">
                            <div className="inner-box1 p-3" style={{ backgroundColor: '#FFEECD', borderRadius: '20px' }}>
                              <h5><b>Status</b></h5>
                              <h1><b>Not Received</b></h1>
                              <p><b>25</b></p>
                              <p><b><a href=""><u>Status Detail</u></a></b></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
}

export default Dashboard2;