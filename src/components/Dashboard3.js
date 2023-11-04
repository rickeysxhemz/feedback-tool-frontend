import React from 'react';
// import logo from './assets/images/logo.png';
// import './App.css';

function Dashboard3() {
    return (       
        <div className="main-wrapper">
        <div className="content-o">
          <div className="container">
            <div className="col-md-12" style={{ backgroundColor: '#FFEECD', paddingLeft: '50px', paddingRight: '50px', borderRadius: '30px', padding: '10px 20px 20px 20px', alignContent: 'middle' }}>
              <h3 className="text-center"><b>Order Details</b></h3>
              <div className="row">
                <div className="col">
                  <span><b>Make</b></span><br />
                  <span><b>Apple</b></span>
                </div>
                <div className="col">
                  <span><b>Model</b></span><br />
                  <span><b>iphone13</b></span>
                </div>
                <div className="col">
                  <span><b>Capacity</b></span><br />
                  <span><b>256 GB</b></span>
                </div>
                <div className="col">
                  <span><b>Network</b></span><br />
                  <span><b>Unlocked</b></span>
                </div>
                <div className="col">
                  <span><b>Condition</b></span><br />
                  <span><b>Good</b></span>
                </div>
                <div className="col">
                  <span><b>Value</b></span><br />
                  <span><b>100</b></span>
                </div>
                <div className="col">
                  <span><b>Comission</b></span><br />
                  <span><b>100</b></span>
                </div>
              </div>
            </div>
            <div>&nbsp;</div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 mt-4">
                  <div className="inner-box-left" style={{ backgroundColor: '#FFEECD', paddingLeft: '50px', paddingRight: '50px', borderRadius: '30px', padding: '10px 20px 20px 20px', alignContent: 'middle' }}>
                    <h2 className="text-center"><b>Customer Details</b></h2>
                    <span><b>Name : </b>John</span><br />
                    <span><b>House No : </b>05</span><br />
                    <span><b>Road Name : </b>123, HN</span><br />
                    <span><b>City/Town : </b>London</span><br />
                    <span><b>Country : </b>Berkshires</span><br />
                    <span><b>Postcode : </b>SW111WW</span><br />
                    <span><b>Email : </b>zys@gmail.com</span><br />
                    <span><b>Phone No : </b>73243876827</span><br />
                  </div>
                </div>
                <div className="col-md-6 mt-4">
                  <div className="box1" style={{ backgroundColor: '#FFEECD', paddingLeft: '50px', paddingRight: '50px', borderRadius: '30px', padding: '10px 20px 20px 20px', alignContent: 'middle' }}>
                    <h2 className="text-center"><b>Order Details</b></h2>
                    <span><b>Order Id : </b>2124</span><br />
                    <span><b>Transaction Token Id : </b>2124</span><br />
                    <span><b>Order Status : </b>Confirm</span><br />
                    <span><b>Date : </b>04/11/2022</span><br />
                  </div>
                  <div>&nbsp;</div>
                  <div className="box1" style={{ backgroundColor: '#FFEECD', paddingLeft: '50px', paddingRight: '50px', borderRadius: '30px', padding: '10px 20px 20px 20px', alignContent: 'middle' }}>
                    <h2 className="text-center"><b>Payment Methods</b></h2>
                    <span><b>Bank Transfer : </b>Yes</span><br />
                    <span><b>Account Name : </b>John smith</span><br />
                    <span><b>Account Number : </b>1233344</span><br />
                    <span><b>Sort Code : </b>10-10-10</span><br />
                  </div>
                  <div>&nbsp;</div>
                  <div className="box1" style={{ backgroundColor: '#FFEECD', paddingLeft: '50px', paddingRight: '50px', borderRadius: '30px', padding: '10px 20px 20px 20px', alignContent: 'middle' }}>
                    <h2 className="text-center"><b>Postage Details</b></h2>
                    <span><b>Postage Method : </b>Free Sales Pack</span><br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
}

export default Dashboard3;