import React from 'react';
// import logo from './assets/images/logo.png';
// import './App.css';

function Recyclerdetaildashboard() {
    return (       
        <div className="main-wrapper">
        <div className="content-o">
          <div className="container">
            <div
              className="col-md-12"
              style={{
                backgroundColor: '#FFEECD',
                paddingLeft: '50px',
                paddingRight: '50px',
                borderRadius: '30px',
                padding: '10px 20px 20px 20px',
                alignContent: 'middle',
              }}
            >
              <h3 className="text-center">
                <b>Add Recycler Details</b>
              </h3>
              <div className="row">
                <div className="col">
                  <img src="assets/images/fone-bucks.png" alt="" />
                </div>
              </div>
            </div>
            <div>&nbsp;</div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="inner-box-left"
                    style={{
                      backgroundColor: '#FFEECD',
                      paddingLeft: '50px',
                      paddingRight: '50px',
                      borderRadius: '30px',
                      padding: '10px 20px 20px 20px',
                      alignContent: 'middle',
                    }}
                  >
                    <h2 className="text-center">
                      <b>Recycler Details</b>
                    </h2>
                    <span>
                      <b>Name : </b>John
                    </span>
                    <br />
                    <span>
                      <b>House No : </b>05
                    </span>
                    <br />
                    <span>
                      <b>Road Name : </b>123, HN
                    </span>
                    <br />
                    <span>
                      <b>City/Town : </b>London
                    </span>
                    <br />
                    <span>
                      <b>Country : </b>Berkshires
                    </span>
                    <br />
                    <span>
                      <b>Postcode : </b>SW111WW
                    </span>
                    <br />
                    <span>
                      <b>Email : </b>zys@gmail.com
                    </span>
                    <br />
                    <span>
                      <b>Phone No : </b>73243876827
                    </span>
                    <br />
                    <span>
                      <b>Website : </b>www.xyz.com
                    </span>
                    <br />
                    <span>
                      <b>
                        <u>Add terms & Conditions</u>
                      </b>
                    </span>
                    <br />
                  </div>
                  <div>&nbsp;</div>
                  <div
                    className="inner-box-left"
                    style={{
                      backgroundColor: '#FFEECD',
                      paddingLeft: '50px',
                      paddingRight: '50px',
                      borderRadius: '30px',
                      padding: '10px 20px 20px 20px',
                      alignContent: 'middle',
                    }}
                  >
                    <h2 className="text-center">
                      <b>Validate live URL</b>
                    </h2>
                    <span>
                      <b>URL : </b>www.xyz.com
                    </span>
                    <br />
                    <div className="file-btn" style={{ textAlign: 'right' }}>
                      <a href="">
                        <button style={{ background: 'rgba(255, 176, 95, 1)', borderRadius: '10px', border: '0px' }}>
                          <b>Upload a file</b>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="box1"
                    style={{
                      backgroundColor: '#FFEECD',
                      paddingLeft: '50px',
                      paddingRight: '50px',
                      borderRadius: '30px',
                      padding: '10px 20px 20px 20px',
                      alignContent: 'middle',
                    }}
                  >
                    <h2 className="text-center">
                      <b>Create Test Order</b>
                    </h2>
                    <span>
                      <b>Product Name : </b>2124
                    </span>
                    <br />
                    <span>
                      <b>Network : </b>2124
                    </span>
                    <br />
                    <span>
                      <b>Condition : </b>Confirm
                    </span>
                    <br />
                    <span>
                      <b>Capacity : </b>256 GB
                    </span>
                    <br />
                    <span>
                      <b>Date Created : </b>12/12/23
                    </span>
                    <br />
                    <span>
                      <b>Order Status : </b>Successful/Fail
                    </span>
                  </div>
                  <div>&nbsp;</div>
                  <div
                    className="box1"
                    style={{
                      backgroundColor: '#FFEECD',
                      paddingLeft: '50px',
                      paddingRight: '50px',
                      borderRadius: '30px',
                      padding: '10px 20px 20px 20px',
                      alignContent: 'middle',
                    }}
                  >
                    <h2 className="text-center">
                      <b>Bank Details</b>
                    </h2>
                    <span>
                      <b>Company Name : </b>FoneBucks
                    </span>
                    <br />
                    <span>
                      <b>Account Name : </b>John Smith
                    </span>
                    <br />
                    <span>
                      <b>Account Number : </b>1233344
                    </span>
                    <br />
                    <span>
                      <b>Sort Code : </b>10-10-10
                    </span>
                  </div>
                  <div>&nbsp;</div>
                  <div
                    className="box1"
                    style={{
                      backgroundColor: '#FFEECD',
                      paddingLeft: '50px',
                      paddingRight: '50px',
                      borderRadius: '30px',
                      padding: '10px 20px 20px 20px',
                      alignContent: 'middle',
                    }}
                  >
                    <h2 className="text-center">
                      <b>Check PostBack Status</b>
                    </h2>
                    <span>
                      <b>API Status : </b>Successful/Fail
                    </span>
                    <br />
                    <span>
                      <b>Issue : </b>Found/Not Found
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
}

export default Recyclerdetaildashboard;