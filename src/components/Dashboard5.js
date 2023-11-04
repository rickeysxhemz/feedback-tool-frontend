import React from 'react';
// import logo from './assets/images/logo.png';
// import './App.css';

function Dashboard5() {
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
          <h3 className="text-center"><b>All Recyclers</b></h3>
          <div className="row">
            <div className="col-md-12" style={{ backgroundColor: '#FFEECD', paddingLeft: '50px', paddingRight: '50px', borderRadius: '30px', padding: '10px 20px 20px 20px', alignContent: 'middle' }}>
              <div className="account-content">
                <div className="align-items-center justify-content-center">
                  <div className="table" style={{overflow:'auto'}}>
                    <table>
                      <thead>
                        <tr>
                          <th>Select</th>
                          <th>Order Id</th>
                          <th>Customer</th>
                          <th>Order Details</th>
                          <th>Value</th>
                          <th>Commission</th>
                          <th>Status</th>
                          <th>Date</th>
                          <th>Search</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><b><input type="checkbox" /></b></td>
                          <td><b>1123</b></td>
                          <td><b>John</b></td>
                          <td><b>Iphone 14 pro max</b></td>
                          <td><b>$105.50</b></td>
                          <td><b>$105.50</b></td>
                          <td><b>Status</b></td>
                          <td><b>Date</b></td>
                          <td><b>Search</b></td>
                        </tr>
                        <tr>
                          <td><b><input type="checkbox" /></b></td>
                          <td><b>1123</b></td>
                          <td><b>John</b></td>
                          <td><b>Iphone 14 pro max</b></td>
                          <td><b>$105.50</b></td>
                          <td><b>$105.50</b></td>
                          <td><b>Status</b></td>
                          <td><b>Date</b></td>
                          <td><b>Search</b></td>
                        </tr>
                        <tr>
                          <td><b><input type="checkbox" /></b></td>
                          <td><b>1123</b></td>
                          <td><b>John</b></td>
                          <td><b>Iphone 14 pro max</b></td>
                          <td><b>$105.50</b></td>
                          <td><b>$105.50</b></td>
                          <td><b>Status</b></td>
                          <td><b>Date</b></td>
                          <td><b>Search</b></td>
                        </tr>
                        <tr>
                          <td><b><input type="checkbox" /></b></td>
                          <td><b>1123</b></td>
                          <td><b>John</b></td>
                          <td><b>Iphone 14 pro max</b></td>
                          <td><b>$105.50</b></td>
                          <td><b>$105.50</b></td>
                          <td><b>Status</b></td>
                          <td><b>Date</b></td>
                          <td><b>Search</b></td>
                        </tr>
                        <tr>
                          <td><b><input type="checkbox" /></b></td>
                          <td><b>1123</b></td>
                          <td><b>John</b></td>
                          <td><b>Iphone 14 pro max</b></td>
                          <td><b>$105.50</b></td>
                          <td><b>$105.50</b></td>
                          <td><b>Status</b></td>
                          <td><b>Date</b></td>
                          <td><b>Search</b></td>
                        </tr>
                        <tr>
                          <td><b><input type="checkbox" /></b></td>
                          <td><b>1123</b></td>
                          <td><b>John</b></td>
                          <td><b>Iphone 14 pro max</b></td>
                          <td><b>$105.50</b></td>
                          <td><b>$105.50</b></td>
                          <td><b>Status</b></td>
                          <td><b>Date</b></td>
                          <td><b>Search</b></td>
                        </tr>
                      </tbody>
                    </table>
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

export default Dashboard5;