import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes,Switch, useLocation} from 'react-router-dom';
function Landing() {
  const location = useLocation(); // Use useLocation to access the current location

  return (
    <div class="main-wrapper">
      <section className="section home-banner row-middle">
        <div className="container">
          <div className="row align-items-center">

          <div className="col-md-8 col-lg-7 desktop-view">
          <div className="banner-content">
          <h1>Compare and get the best<br />prices for your mobile <span class="blue-text">devices</span></h1>
          <form className="form" name="store" id="store" method="post" action="#">
          <div className="form-inner">
          <div className="input-group">
          <input type="email" class="form-control" placeholder="  Search your device.e.g iphone 14" />
          <a className="btn btn-primary sub-btn" href="/devices">Search &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span><img src="/assets/images/search.png" alt="" /></span></a>
          </div>
          </div>
          </form>
         <div>&nbsp;</div>
          <div className="browse-btn">
          <a href="#">Browse Other Brands</a>
          </div>
          <div className="play-btn">
          <img src="/assets/images/play-btn.png" alt=""/>
          </div>
          </div>
          </div>

          <div className="col-md-8 col-lg-7 mobile-view">
          <div className="banner-content-m">
          <h1>Compare and get the best<br/>prices for your mobile <span class="blue-text">devices</span></h1>
        <div className="search-right">
            <form className="form" name="store" id="store" method="post" action="#">
            <div class="form-inner">
            <div class="input-group">
            <input type="email" className="form-controls"  placeholder="  Search your device.e.g iphone 14"/>
            <a class="btn btn-primary sub-btn" href="/devices">Search &nbsp; &nbsp; &nbsp;<span><img src="assets/images/search.png" alt=""/></span></a>
            </div>
            </div>
            </form>
         </div>
          <div>&nbsp;</div>

          <div class="browse-btns text-center">
          <a href="#">Browse Other Brands</a>
          </div>
          <div class="play-btns text-center">
          <img src="/assets/images/play-btn.png" alt=""/>
          </div>
          </div>
          </div>



          <div class="col-md-4 col-lg-5">
          <div class="banner-img aos" >
          <img src="/assets/images/banner-image.svg" class="img-fluid" alt="banner" />
          </div>
          </div>

          </div>
        </div>
      </section>


      <section class="section feature">
        <div class="container">
          <div className="inner-cont" style={{ backgroundColor: '#FFEECD', paddingLeft: '50px', paddingRight: '50px', borderRadius: '30px' }}>
            <h3 className="text-center pt-3 pb-3"><b>How Does It Work?</b></h3>
            <div className="col-xl-12 col-md-12 mx-auto">
              <div className="row mx-auto">
                <div className="col-xl-4 col-md-6 text-center mx-auto desktop-view">
                  <div className="feature-item freelance-count">
                    <div className="feature-icon">
                      <img src="/assets/images/search-colored.png" className="img-fluid" alt="Search Icon" />
                    </div>
                    <div className="feature-content course-count">
                      <h3 className="text-center">Search</h3>
                      <p className="inner_p">Search for your device</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-md-6 text-center mx-auto mobile-view">
                  <div className="feature-item-mobile freelance-count">
                    <div className="feature-icon">
                      <img src="/assets/images/search-colored.png" className="img-fluid" alt="Search Icon" />
                    </div>
                    <div className="feature-content course-count">
                      <h3 className="text-center">Search</h3>
                      <p className="inner_p">Search for your device</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-md-6 text-center mx-auto desktop-view">
                  <div className="freelance-count aos mx-auto color-box">
                    <div className="feature-icon">
                      <img src="/assets/images/compare.png" className="img-fluid" alt="Compare Icon" />
                    </div>
                    <div className="feature-content course-count">
                      <h3 className="text-center">Compare</h3>
                      <p className="inner_p">Compare offers</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-md-6 text-center mx-auto mobile-view">
                  <div className="freelance-count aos mx-auto color-box-mobile">
                    <div className="feature-icon">
                      <img src="/assets/images/compare.png" className="img-fluid" alt="Compare Icon" />
                    </div>
                    <div className="feature-content course-count">
                      <h3 className="text-center">Compare</h3>
                      <p className="inner_p">Compare offers</p>
                      <div>&nbsp;</div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-md-6 text-center mx-auto desktop-view">
                  <div className="feature-item freelance-count aos mx-auto">
                    <div className="feature-icon">
                      <img src="/assets/images/pound.png" className="img-fluid" alt="Sell Icon" />
                    </div>
                    <div className="feature-content course-count">
                      <h3 className="text-center">Sell</h3>
                      <p className="inner_p">Sell Your Device</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-md-6 text-center mx-auto mobile-view">
                  <div className="feature-item-mobile freelance-count aos mx-auto">
                    <div className="feature-icon">
                      <img src="/assets/images/pound.png" className="img-fluid" alt="Sell Icon" />
                    </div>
                    <div className="feature-content course-count">
                      <h3 className="text-center">Sell</h3>
                      <p className="inner_p">Sell Your Device</p>
                    </div>
                  </div>
                </div>
                <div>&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section compare">
      <div className="container">
        <div className="inner-cont" style={{ backgroundColor: '#FFEECD', paddingLeft: '50px', paddingRight: '50px', borderRadius: '30px' }}>
          <h3 className="text-center pt-3 pb-3 border-left"><span> &nbsp; Top Most Compared Mobiles</span></h3>
          <div className="col-xl-12 col-md-12 mx-auto">
            <div className="row mx-auto">



              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="compare-item freelance-count aos mx-auto">
                  <div className="feature-icon" style={{ backgroundColor: '#008ED6' }}>
                    <img src="/assets/images/iphone.png" className="img-fluid" alt="Mobile Icon" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Galaxy S22 Ultra</b></h6>
                    <p className="inner_p">
                      <span>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>


              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="compare-item freelance-count aos mx-auto">
                  <div className="feature-icon" style={{ backgroundColor: '#008ED6' }}>
                    <img src="/assets/images/iphone.png" className="img-fluid" alt="Mobile Icon" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Galaxy S22 Ultra</b></h6>
                    <p className="inner_p">
                      <span>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>


              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="compare-item freelance-count aos mx-auto">
                  <div className="feature-icon" style={{ backgroundColor: '#008ED6' }}>
                    <img src="/assets/images/iphone.png" className="img-fluid" alt="Mobile Icon" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Galaxy S22 Ultra</b></h6>
                    <p className="inner_p">
                      <span>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>



              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="compare-item freelance-count aos mx-auto">
                  <div className="feature-icon" style={{ backgroundColor: '#008ED6' }}>
                    <img src="/assets/images/iphone.png" className="img-fluid" alt="Mobile Icon" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Galaxy S22 Ultra</b></h6>
                    <p className="inner_p">
                      <span>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>


              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="compare-item freelance-count aos mx-auto">
                  <div className="feature-icon" style={{ backgroundColor: '#008ED6' }}>
                    <img src="/assets/images/iphone.png" className="img-fluid" alt="Mobile Icon" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Galaxy S22 Ultra</b></h6>
                    <p className="inner_p">
                      <span>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>


              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="compare-item freelance-count aos mx-auto">
                  <div className="feature-icon" style={{ backgroundColor: '#008ED6' }}>
                    <img src="/assets/images/iphone.png" className="img-fluid" alt="Mobile Icon" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Galaxy S22 Ultra</b></h6>
                    <p className="inner_p">
                      <span>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>


              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="compare-item freelance-count aos mx-auto">
                  <div className="feature-icon" style={{ backgroundColor: '#008ED6' }}>
                    <img src="/assets/images/iphone.png" className="img-fluid" alt="Mobile Icon" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Galaxy S22 Ultra</b></h6>
                    <p className="inner_p">
                      <span>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>


              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="compare-item freelance-count aos mx-auto">
                  <div className="feature-icon" style={{ backgroundColor: '#008ED6' }}>
                    <img src="/assets/images/iphone.png" className="img-fluid" alt="Mobile Icon" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Galaxy S22 Ultra</b></h6>
                    <p className="inner_p">
                      <span>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>


              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="compare-item freelance-count aos mx-auto">
                  <div className="feature-icon" style={{ backgroundColor: '#008ED6' }}>
                    <img src="/assets/images/iphone.png" className="img-fluid" alt="Mobile Icon" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Galaxy S22 Ultra</b></h6>
                    <p className="inner_p">
                      <span>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>


              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="compare-item freelance-count aos mx-auto">
                  <div className="feature-icon" style={{ backgroundColor: '#008ED6' }}>
                    <img src="/assets/images/iphone.png" className="img-fluid" alt="Mobile Icon" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Galaxy S22 Ultra</b></h6>
                    <p className="inner_p">
                      <span>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>



              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="compare-item freelance-count aos mx-auto">
                  <div className="feature-icon" style={{ backgroundColor: '#008ED6' }}>
                    <img src="/assets/images/iphone.png" className="img-fluid" alt="Mobile Icon" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Galaxy S22 Ultra</b></h6>
                    <p className="inner_p">
                      <span>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>


              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="compare-item freelance-count aos mx-auto">
                  <div className="feature-icon" style={{ backgroundColor: '#008ED6' }}>
                    <img src="/assets/images/iphone.png" className="img-fluid" alt="Mobile Icon" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Galaxy S22 Ultra</b></h6>
                    <p className="inner_p">
                      <span>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                        <a href="#"><button className="spec-btn">64GB</button></a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              
             

             
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="section compare">
      <div className="container">
        <div className="inner-cont" style={{ backgroundColor: '#FFEECD', paddingLeft: '50px', paddingRight: '50px', borderRadius: '30px' }}>
          <h3 className="text-center pt-3 pb-3 border-left"><span> &nbsp; Compare Other Gadgets</span></h3>
          <div className="col-xl-12 col-md-12 mx-auto">
            <div className="row mx-auto">
              <div className="col-xl-3 col-md-6 text-center mx-auto">
                <div className="compare-gadgets freelance-count aos mx-auto" style={{ border: '20px solid rgba(242, 141, 66, 0.4)' }}>
                  <div className="feature-icon" style={{ backgroundColor: '#008ED6' }}>
                    <img src="/assets/images/tablets.png" className="img-fluid" style={{ height: '180px' }} alt="Tablets" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Tablets</b></h6>
                    <p className="inner_p">
                      <span>
                        <a href="#"><button className="spec-btn">View</button></a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 text-center mx-auto">
                <div className="compare-gadgets freelance-count aos mx-auto" style={{ border: '20px solid rgba(66, 154, 242, 0.4)' }}>
                  <div className="feature-icon" style={{ backgroundColor: '#008ED6' }}>
                    <img src="/assets/images/watches.png" className="img-fluid" style={{ height: '180px' }} alt="Watches" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Watches</b></h6>
                    <p className="inner_p">
                      <span>
                        <a href="#"><button className="spec-btn">View</button></a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 text-center mx-auto">
                <div className="compare-gadgets freelance-count aos mx-auto" style={{ border: '20px solid rgba(242, 141, 66, 0.4)' }}>
                  <div className="feature-icon" style={{ backgroundColor: '#008ED6' }}>
                    <img src="/assets/images/gaming-consoles.png" className="img-fluid" style={{ height: '180px' }} alt="Gaming Consoles" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Gaming Consoles</b></h6>
                    <p className="inner_p">
                      <span>
                        <a href="#"><button className="spec-btn">View</button></a>
                      </span>
                    </p>
                  </div>
                </div>
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
<div>&nbsp;</div>
      <section className="section compare">
      <div className="container">
        <div className="inner-cont" style={{ backgroundColor: '#FFEECD', paddingLeft: '50px', paddingRight: '50px', borderRadius: '30px' }}>
          <h3 className="text-center pt-3 pb-3 border-left"><span>&nbsp; Manufacturers</span></h3>
          <div className="col-xl-12 col-md-12 mx-auto">
            <div className="row mx-auto">

              {/* Manufacturer 1 */}
              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="brand-item freelance-count aos mx-auto">
                  <div className="feature-icon brands-icon">
                    <img src="/assets/images/apple.png" className="img-fluid" alt="Apple" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Apple</b></h6>
                  </div>
                </div>
              </div>

              {/* Manufacturer 2 */}
              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="brand-item freelance-count aos mx-auto">
                  <div className="feature-icon brands-icon">
                    <img src="/assets/images/samsung.png" className="img-fluid" alt="Samsung" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Samsung</b></h6>
                  </div>
                </div>
              </div>

              {/* Manufacturer 3 */}
              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="brand-item freelance-count aos mx-auto">
                  <div className="feature-icon brands-icon">
                    <img src="/assets/images/oneplus.png" className="img-fluid" alt="Oneplus" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Oneplus</b></h6>
                  </div>
                </div>
              </div>

              {/* Manufacturer 4 */}
              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="brand-item freelance-count aos mx-auto">
                  <div className="feature-icon brands-icon">
                    <img src="/assets/images/readmi.png" className="img-fluid" alt="Redmi" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Redmi</b></h6>
                  </div>
                </div>
              </div>

              {/* Manufacturer 5 */}
              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="brand-item freelance-count aos mx-auto">
                  <div className="feature-icon brands-icon">
                    <img src="/assets/images/techno.png" className="img-fluid" alt="Techno" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Techno</b></h6>
                  </div>
                </div>
              </div>

              {/* Manufacturer 6 */}
              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="brand-item freelance-count aos mx-auto">
                  <div className="feature-icon brands-icon">
                    <img src="/assets/images/asus.png" className="img-fluid" alt="Asus" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Asus</b></h6>
                  </div>
                </div>
              </div>




  {/* Manufacturer 1 */}
  <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="brand-item freelance-count aos mx-auto">
                  <div className="feature-icon brands-icon">
                    <img src="/assets/images/apple.png" className="img-fluid" alt="Apple" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Apple</b></h6>
                  </div>
                </div>
              </div>

              {/* Manufacturer 2 */}
              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="brand-item freelance-count aos mx-auto">
                  <div className="feature-icon brands-icon">
                    <img src="/assets/images/samsung.png" className="img-fluid" alt="Samsung" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Samsung</b></h6>
                  </div>
                </div>
              </div>

              {/* Manufacturer 3 */}
              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="brand-item freelance-count aos mx-auto">
                  <div className="feature-icon brands-icon">
                    <img src="/assets/images/oneplus.png" className="img-fluid" alt="Oneplus" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Oneplus</b></h6>
                  </div>
                </div>
              </div>

              {/* Manufacturer 4 */}
              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="brand-item freelance-count aos mx-auto">
                  <div className="feature-icon brands-icon">
                    <img src="/assets/images/readmi.png" className="img-fluid" alt="Redmi" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Redmi</b></h6>
                  </div>
                </div>
              </div>

              {/* Manufacturer 5 */}
              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="brand-item freelance-count aos mx-auto">
                  <div className="feature-icon brands-icon">
                    <img src="/assets/images/techno.png" className="img-fluid" alt="Techno" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Techno</b></h6>
                  </div>
                </div>
              </div>

              {/* Manufacturer 6 */}
              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="brand-item freelance-count aos mx-auto">
                  <div className="feature-icon brands-icon">
                    <img src="/assets/images/asus.png" className="img-fluid" alt="Asus" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Asus</b></h6>
                  </div>
                </div>
              </div>




                {/* Manufacturer 1 */}
                <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="brand-item freelance-count aos mx-auto">
                  <div className="feature-icon brands-icon">
                    <img src="/assets/images/apple.png" className="img-fluid" alt="Apple" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Apple</b></h6>
                  </div>
                </div>
              </div>

              {/* Manufacturer 2 */}
              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="brand-item freelance-count aos mx-auto">
                  <div className="feature-icon brands-icon">
                    <img src="/assets/images/samsung.png" className="img-fluid" alt="Samsung" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Samsung</b></h6>
                  </div>
                </div>
              </div>

              {/* Manufacturer 3 */}
              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="brand-item freelance-count aos mx-auto">
                  <div className="feature-icon brands-icon">
                    <img src="/assets/images/oneplus.png" className="img-fluid" alt="Oneplus" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Oneplus</b></h6>
                  </div>
                </div>
              </div>

              {/* Manufacturer 4 */}
              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="brand-item freelance-count aos mx-auto">
                  <div className="feature-icon brands-icon">
                    <img src="/assets/images/readmi.png" className="img-fluid" alt="Redmi" />
                  </div>

                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Redmi</b></h6>
                  </div>

                </div>
              </div>

              {/* Manufacturer 5 */}
              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="brand-item freelance-count aos mx-auto">
                  <div className="feature-icon brands-icon">
                    <img src="/assets/images/techno.png" className="img-fluid" alt="Techno" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Techno</b></h6>
                  </div>
                </div>
              </div>

              {/* Manufacturer 6 */}
              <div className="col-xl-2 col-md-6 text-center mx-auto">
                <div className="brand-item freelance-count aos mx-auto">
                  <div className="feature-icon brands-icon">
                    <img src="/assets/images/asus.png" className="img-fluid" alt="Asus" />
                  </div>
                  <div className="feature-content course-count">
                    <h6 className="text-center"><b>Asus</b></h6>
                  </div>
                </div>
              </div>



              
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="section">
      <div className="container">
        <div className="inner-cont" style={{ backgroundColor: '#FFEECD', borderRadius: '30px', paddingBottom: '50px' }}>
          <h3 className="text-center pt-3 pb-3 border-left"><span>&nbsp; Frequently Asked Questions</span></h3>
          <div className="col-xl-12 col-md-12 mx-auto">
            <div className="row mx-auto">
              <div className="accordion" id="accordionExample" style={{ backgroundColor: 'inherit' }}>
                {/* Accordion Item 1 */}
                <div className="accordion-item" style={{ backgroundColor: 'inherit' }}>
                  <h2 className="accordion-header" id="headingOne" style={{ backgroundColor: 'inherit' }}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: 'inherit', borderBottom: '3px solid #FFB05F' }}>
                      Accordion Item #1
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{ backgroundColor: 'inherit' }}>
                    <div className="accordion-body" style={{ backgroundColor: 'inherit' }}>
                      Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                      interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos.
                      ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                      per inceptos himenaeos.
                    </div>
                  </div>
                </div>

                {/* Accordion Item 2 */}
                <div className="accordion-item" style={{ backgroundColor: 'inherit' }}>
                  <h2 className="accordion-header" id="headingTwo" style={{ backgroundColor: 'inherit' }}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: 'inherit', borderBottom: '3px solid #6ECEFF' }}>
                      Accordion Item #2
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={{ backgroundColor: 'inherit' }}>
                    <div className="accordion-body" style={{ backgroundColor: 'inherit' }}>
                      Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                      interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos.
                      ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                      per inceptos himenaeos.
                    </div>
                  </div>
                </div>

                {/* Accordion Item 3 */}
                <div className="accordion-item" style={{ backgroundColor: 'inherit' }}>
                  <h2 className="accordion-header" id="headingThree" style={{ backgroundColor: 'inherit' }}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: 'inherit', borderBottom: '3px solid #FFB05F' }}>
                      Accordion Item #3
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
    </div>
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

export default Landing;
