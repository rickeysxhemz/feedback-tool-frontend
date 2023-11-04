import React from 'react';
import logo from './assets/images/logo.png';
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes,Switch, useLocation} from 'react-router-dom';
function Devices() {
  const location = useLocation(); // Use useLocation to access the current location

      return (
        <div className="main-wrapper">
        <section className="section home-banner row-middle">
          <div>&nbsp;</div>
          <div className="container">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4 mt-4">
                  <div className="search-right banner-content-o desktop-view">
                    <form className="form" name="store" id="store" method="post" action="#">
                      <div className="form-inner">
                        <div className="input-group">
                          <input type="email" className="form-controls" placeholder="Browse Other Devices" />
                          <button className="btn btn-primary sub-btn" type="submit">
                            Search &nbsp; &nbsp; &nbsp;<span><img src="assets/images/search.png" alt="" /></span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="search-right banner-content-m mobile-view">
                    <form className="form" name="store" id="store" method="post" action="#">
                      <div className="form-inner">
                        <div className="input-group">
                          <input type="email" className="form-controls" placeholder="Browse Other Devices" />
                          <button className="btn btn-primary sub-btn" type="submit">
                            Search &nbsp; &nbsp; &nbsp;<span><img src="assets/images/search.png" alt="" /></span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="browse-btnx" style={{ borderRadius: '20px !important', textAlign: 'right', fontSize: '11px' }}>
                    <a href="#">&nbsp; &nbsp;  Browse Other Brands</a>
                  </div>
                  <div className="inner-left" style={{ backgroundColor: '#FFEECD', borderRadius: '30px', padding: '40px' }}>
                    <h4 className="text-center">Apple iPhone 14 Pro Max </h4>
                    <div className="compare-itemx freelance-count aos mx-auto" style={{ textAlign: 'center', paddingLeft: '30px', paddingRight: '30px', background: 'none !important' }}>
                      <div className="feature-icon" style={{ backgroundColor: '#008ED6', borderRadius: '10px 10px 0px 0px' }}>
                        <img src="assets/images/iphone.png" className="img-fluid" alt="" />
                      </div>
                      <div style={{ backgroundColor: '#fff', height: 'auto !important' }}>
                        <div className="row">
                          <div className="col-md-6">
                            <h6><b>Condition</b></h6>
                            <div className="m-2"><a href="" className="p-2"><button className="specx-btn">Good</button></a></div>
                            <div className="m-2"><a href="" className="p-2"><button className="specx-btn">Poor</button></a></div>
                            <div className="m-2"><a href="" className="p-2"><button className="specx-btn">Broken</button></a></div>
                            <div className="m-2"><a href="" className="p-2"><button className="specx-btn">New</button></a></div>
                          </div>
                          <div className="col-md-6">
                            <h6><b>Capacity</b></h6>
                            <div className="m-2"><a href="" className="p-2"><button className="specx-btn">64GB</button></a></div>
                            <div className="m-2"><a href="" className="p-2"><button className="specx-btn">128GB</button></a></div>
                            <div className="m-2"><a href="" className="p-2"><button className="specx-btn">256GB</button></a></div>
                            <div className="m-2"><a href="" className="p-2"><button className="specx-btn">512GB</button></a></div>
                          </div>
                        </div>
                        <div className="selector-div">
                          <div className="form-group">
                            <label className=""><b>Network</b></label><br />
                            <select name="" id="" style={{ padding: '5px 40px', borderRadius: '15px', border: '1px solid rgba(249, 107, 7, 1)' }}>
                              <option value="">Unlocked</option>
                              <option value="">1</option>
                              <option value="">1</option>
                            </select>
                          </div>
                        </div>
                        <p className="inner_p" style={{ textAlign: 'left !important' }}>
                          <h6><b>What counts as good?</b></h6>
                          <span className="text-muted" style={{ fontSize: '12px' }}>To receive the full quoted price your device<br />
                            must power on, show only minor signs of<br />
                            use, and have both fully functional <br />
                            hardware and software. Check the <br />
                            recycler's terms for full details.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 mt-4">
                  <div className="col-md-12 col-sm-12 col-12">
                  <div className="inner-data" style={{ backgroundColor: '#FFEECD', paddingLeft: '50px', paddingRight: '50px', borderRadius: '10px', padding: '0px 20px 20px 20px', alignContent: 'middle' }}>
                    <div className="mb-2" style={{ backgroundImage: 'url(assets/images/bg-blue.png)', backgroundRepeat: 'no-repeat', width: '100%', height: '60px' }}>
                      <h3 className="pt-2"><b> &nbsp; &nbsp; &nbsp; &nbsp;Recommended Offer</b></h3>
                    </div>
                    <div className="row">
                      <div className="col-md-5 col-sm-5 col-5" style={{ padding: '10px' }}>
                        <img src="assets/images/fone-bucks.png" alt=""  style={{ width: '100px' }} />
                        <div className="rating-stars text-center">
                          <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                          <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                          <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                          <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                          <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                          <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-3 col-3" style={{ padding: '10px', textAlign: 'center', borderLeft: '2px solid rgba(249, 107, 7, 1)' }}>
                        <h1 className="mt-4">$100</h1>
                      </div>
                      <div className="col-md-4 col-sm-4 col-4" style={{ padding: '10px', textAlign: 'center', borderLeft: '2px solid rgba(249, 107, 7, 1)' }}>
                        <a href="/checkout" className="mt-4" style={{ background: '#008ED6', borderRadius: '5px', border: '0px', color: '#fff', padding: '7px 20px' }}><b>Sell Now</b></a>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div>&nbsp;</div>
                  <div className="table p-3" style={{overflow: 'auto', backgroundColor: '#FFEECD', paddingLeft: '50px', paddingRight: '50px', borderRadius: '10px', padding: '0px 20px 20px 20px', alignContent: 'middle' }}>
                    <table style={{ fontSize: '13px', textAlign: 'center' }}>
                      <tr style={{ background: 'rgba(255, 176, 95, 1)' }}>
                        <th>Recycler</th>
                        <th>Price</th>
                        <th>Freepost</th>
                        <th>Payment Method</th>
                        <th>Pay Period</th>
                        <th>Sell Now</th>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/fonbucks.png" alt="" />
                          <div className="rating-stars text-center mt-1">
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                          </div>
                        </td>
                        <td><b>$100</b></td>
                        <td><img src="assets/images/green-tick.png" alt="" /></td>
                        <td>
                          <b>
                            <span>Bank Transfer</span><br />
                            <span><img src="assets/images/paypal.png" alt="" /><br /></span>
                            <span>Cheque</span><br />
                           
                          </b>
                        </td>
                        <td><b>Sameday</b></td>
                        <td>
                          <button className="mt-4" style={{ background: '#008ED6', borderRadius: '5px', border: '0px', color: '#fff', padding: '7px 3px' }}><b>Sell Now</b></button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/envire.png" alt="" />
                          <div className="rating-stars text-center mt-1">
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                          </div>
                        </td>
                        <td><b>$100</b></td>
                        <td><img src="assets/images/green-tick.png" alt="" /></td>
                        <td>
                          <b>
                            <span>Bank Transfer</span><br />
                            <span><img src="assets/images/paypal.png" alt="" /><br /></span>
                            <span>Cheque</span><br />
                           
                          </b>
                        </td>
                        <td><b>Sameday</b></td>
                        <td>
                          <button className="mt-4" style={{ background: '#008ED6', borderRadius: '5px', border: '0px', color: '#fff', padding: '7px 3px' }}><b>Sell Now</b></button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/uber.png" alt="" />
                          <div className="rating-stars text-center mt-1">
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                          </div>
                        </td>
                        <td><b>$100</b></td>
                        <td><img src="assets/images/green-tick.png" alt="" /></td>
                        <td>
                          <b>
                            <span>Bank Transfer</span><br />
                            <span><img src="assets/images/paypal.png" alt="" /><br /></span>
                            <span>Cheque</span><br />
                           
                          </b>
                        </td>
                        <td><b>Sameday</b></td>
                        <td>
                          <button className="mt-4" style={{ background: '#008ED6', borderRadius: '5px', border: '0px', color: '#fff', padding: '7px 3px' }}><b>Sell Now</b></button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/music.png" alt="" />
                          <div className="rating-stars text-center mt-1">
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)' }}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)'}}><i className="fa fa-star"></i></span>
                            <span style={{ background: 'rgba(61, 205, 10, 1)', padding: '2px', color: 'rgba(255, 234, 127, 1)'}}><i className="fa fa-star"></i></span>
                          </div>
                        </td>
                        <td><b>$100</b></td>
                        <td><img src="assets/images/green-tick.png" alt="" /></td>
                        <td>
                          <b>
                            <span>Bank Transfer</span><br />
                            <span><img src="assets/images/paypal.png" alt="" /><br /></span>
                            <span>Cheque</span><br />
                          </b>
                        </td>
                        <td><b>Sameday</b></td>
                        <td>
                          <button className="mt-4" style={{background: '#008ED6', borderRadius: '5px', border: '0px', color: '#fff', padding: '7px 3px'}}><b>Sell Now</b></button>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="outer-section mt-4">
      <div className="container" style={{ backgroundColor: '#FFEECD', borderRadius: '30px' }}>
        <section className="section compare">
          <div className="container">
            <h3 className="text-center pt-3 pb-3 border-left">
              <span>&nbsp; About Us</span>
            </h3>
            <div
              className="inner-cont"
              style={{ backgroundColor: 'rgba(242, 141, 66, 0.4)', padding: '40px', borderRadius: '30px' }}
            >
              <div className="col-xl-12 col-md-12 mx-auto">
                <div className="row mx-auto">
                  <div className="col-xl-12 col-md-6">
                    <div className="inner-box-1">
                      <h6 className='desktop-view' style={{ paddingLeft: '150px' }}><b>Who we do?</b></h6>
                      <h6 className='mobile-view'><b>Who we do?</b></h6>
                      <p className="text-center">
                        Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit <br />
                        interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per <br /> conubia nostra, per inceptos himenaeos.<br />
                        ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,<br /> per inceptos himenaeos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section compare">
          <div className="container">
            <div
              className="inner-cont"
              style={{ backgroundColor: 'rgb(68, 165, 211, 0.4)', padding: '40px', borderRadius: '30px' }}
            >
              <div className="col-xl-12 col-md-12">
                <div className="row">
                  <div className="col-xl-12 col-md-6">
                    <div className="inner-box-1">
                      <h6 className='desktop-view' style={{ paddingLeft: '150px' }}><b>Who are we?</b></h6>
                      <h6 className='mobile-view'><b>Who are we?</b></h6>
                      <p className="text-center">
                        Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit <br />
                        interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per <br /> conubia nostra, per inceptos himenaeos.<br />
                        ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,<br /> per inceptos himenaeos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section compare">
          <div className="container">
            <div
              className="inner-cont"
              style={{ backgroundColor: 'rgba(242, 141, 66, 0.4)', padding: '40px', borderRadius: '30px' }}
            >
              <div className="col-xl-12 col-md-1">
                <div className="row">
                  <div className="col-xl-12 col-md-6">
                    <div className="inner-box-1">
                      <h6 className='desktop-view' style={{ paddingLeft: '150px' }}><b>Who are we?</b></h6>
                      <h6 className='mobile-view'><b>Who are we?</b></h6>
                      <p className="text-center">
                        Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit <br />
                        interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per <br /> conubia nostra, per inceptos himenaeos.<br />
                        ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,<br /> per inceptos himenaeos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section className="outer-section">
        <div className="container" style={{ backgroundColor: '#FFEECD', borderRadius: '30px' }}>
          <section className="section">
            <div className="container">
              <div className="inner-cont" style={{ backgroundColor: '#FFEECD', borderRadius: '30px', paddingBottom: '50px' }}>
                <h3 className="text-center pt-3 pb-3 border-left">
                  <span>&nbsp; Frequently Asked Questions</span>
                </h3>
                <div className="col-xl-12 col-md-12 mx-auto">
                  <div className="row mx-auto">
                    <div className="accordion" id="accordionExample" style={{ backgroundColor: 'inherit !important' }}>
                      <div className="accordion-item" style={{ backgroundColor: 'inherit !important' }}>
                        <h2 className="accordion-header" id="headingOne" style={{ backgroundColor: 'inherit !important' }}>
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: 'inherit !important', borderBottom: '3px solid #FFB05F' }}>
                            Why XYZ.com to trade in my phone?
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{ backgroundColor: 'inherit !important' }}>
                          <div className="accordion-body" style={{ backgroundColor: 'inherit !important' }}>
                            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                            interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos.
                            ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                            per inceptos himenaeos.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item" style={{ backgroundColor: 'inherit !important' }}>
                        <h2 className="accordion-header" id="headingTwo" style={{ backgroundColor: 'inherit !important' }}>
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: 'inherit !important', borderBottom: '3px solid #6ECEFF' }}>
                            Why XYZ.com to trade in my phone?
                          </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={{ backgroundColor: 'inherit !important' }}>
                          <div className="accordion-body" style={{ backgroundColor: 'inherit !important' }}>
                            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                            interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos.
                            ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                            per inceptos himenaeos.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item" style={{ backgroundColor: 'inherit !important' }}>
                        <h2 className="accordion-header" id="headingThree" style={{ backgroundColor: 'inherit !important' }}>
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: 'inherit !important', borderBottom: '3px solid #FFB05F' }}>
                            Why XYZ.com to trade in my phone?
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                            interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos.
                            ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                            per inceptos himenaeos.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>


      <section className="outer-section footer-top aos">
      <div className="container" style={{ backgroundColor: '#008ED6', borderRadius: '30px' }}>
        <footer className="footer">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="footer-widget footer-menu" style={{ marginTop: '80px' }}>
                <img src="assets/images/footer-logo.png" alt=""  style={{ width: '200px' }} />
              </div>
            </div>
            <div className="col-xl-2 col-md-6">
              <div className="footer-widget footer-menu">
                <h4 className="footer-titles"><b>Quick Links</b></h4>
                <ul>
                  <li><a href="#">About Our Company</a></li>
                  <li><a href="#">Services WE provide</a></li>
                  <li><a href="#">Career & Opportunity</a></li>
                  <li><a href="#">Privacy & policy</a></li>
                  <li><a href="#">Contact US</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-md-6">
              <div className="footer-widget footer-menu">
                <h4 className="footer-titles"><b>Company</b></h4>
                <ul>
                  <li><a href="javascript:;">About Company </a></li>
                  <li><a href="javascript:;">Our Testimonials </a></li>
                  <li><a href="javascript:;">Latest News </a></li>
                  <li><a href="javascript:;">Our mission </a></li>
                  <li><a href="javascript:;">Get a free Quote </a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-md-6">
              <div className="footer-widget footer-menu">
                <h4 className="footer-titles"><b>Contact Us</b></h4>
                <ul>
                  <li><a href="#">Sagrada Familia, Herba</a></li>
                  <li><a href="#">Street Front USA</a></li>
                  <li><a href="#">brandoxide@gmail.com</a></li>
                  <li><a href="#">002-568423591</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-md-6">
              <div className="footer-widget footer-menu">
                <h4 className="footer-titles"><b>Follow Us</b></h4>
                <div className="social-icon d-flex">
                  <ul>
                    <li>
                      <a href="#" className="icon" target="_blank">
                        <img src="assets/images/fb.png" alt="" width="30px" height="30px" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon" target="_blank">
                        <img src="assets/images/twitter.png" alt="" width="30px" height="30px" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon" target="_blank">
                        <img src="assets/images/insta.png" alt="" width="30px" height="30px" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon" target="_blank">
                        <img src="assets/images/linkedin.png" alt="" width="30px" height="30px" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className="mb-0 text-center text-dark pt-10" style={{ color: '#646464' }}>
            Copyright @ 2020 Brandoxide. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
        
        </div>
      );
  
}

export default Devices;