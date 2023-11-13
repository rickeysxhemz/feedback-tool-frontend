import React from 'react';
// import './App.css';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { baseUrl } from '../BaseUrl'
import { useEffect, useState } from 'react';
import AlertMessage from '../components/alerts';
import  Pagination  from './pagination/Pagination';


function Dashboard1() {
  // if (!localStorage.getItem('token') || localStorage.getItem('role') !== '"admin"' ) {
  //   window.location.href = "/login";
  // }
  
  
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(10)
  const [loading, setLoading] = useState(false)
  const [feedbacks, setFeedbacks] = useState([])
  
  function SetHeader() {
    const token = localStorage.getItem('token')
    axios.defaults.headers.common["Authorization"] = 'Bearer ' + token;
  }
  const fetchData = (page) => {
    SetHeader();
    setLoading(true);
    axios.get(`${baseUrl}/api/feedbacks/list?page=${page}`)
      .then(res => {
        if (res.errors?.length) {
          AlertMessage("error", 'Unable to fetch data')
        } else {
          setFeedbacks(res.data.records.data);
          setCurrentPage(res.data.records.current_page);
          setLastPage(res.data.records.last_page);
          setLoading(false);
        }
      });
  };

  const handleEnable = (feedbackId) => {
    axios.get(`${baseUrl}/api/feedbacks/status/${feedbackId}`)
      .then(res => {
        if (res.errors?.length) {
          AlertMessage("error", 'Unable to fetch data')
        } else {
          AlertMessage("success", res.data._metadata.message);
          fetchData(currentPage); // Fetch updated data after enabling
        }
      });
  };

  const handleDelete = (feedbackId) => {
    axios.get(`${baseUrl}/api/feedbacks/delete/${feedbackId}`)
      .then(res => {
        if (res.errors?.length) {
          AlertMessage("error", 'Unable to fetch data')
        } else {
          AlertMessage("success", res.data._metadata.message);
          fetchData(currentPage); // Fetch updated data after deleting
        }
      });
  };
  
  const calculateContinuousCount = (index) => {
    return (currentPage - 1) * 10 + index + 1;
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);
  
  
  const location = useLocation();
  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    navigate('/login')

  }


    return (       
    <div className="main-wrapper">
    <div className="content-o">
      <div className="container">
        <div className="dashboard-header text-center">
          <a href="index.html"><img src="assets/images/logo-trans.png" alt="logo" className="img-fluid" /></a>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-5 mt-2">
              <div style={{ border: '0px', backgroundColor: '#FFEECD', color: '#000', borderRadius: '20px', paddingTop: '8px', paddingBottom: '1px' }}>
                <div className="list">
                  <ul>
                  <li><NavLink to="/dashboard1">Feedbacks</NavLink></li>
                    <li><NavLink to="/user">User</NavLink></li>
                    <li  onClick={() => { LogOut() }}><NavLink to="#">Logout</NavLink></li>
                    
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        <div style={{marginTop:'1rem'}}className="row">
          <div className="col-md-12" style={{ backgroundColor: '#FFEECD', paddingLeft: '50px', paddingRight: '50px', borderRadius: '30px', padding: '10px 20px 20px 20px', alignContent: 'middle' }}>
            <div className="account-content">
              <div className="align-items-center justify-content-center">
                <div className="table" style={{overflow:'auto'}}>
                  <table>
                    <tr>
                      <th>id</th>
                      <th>User Name</th>
                      <th>Feedback Title</th>
                      <th>Description</th>
                      <th>Category</th>
                      <th>Vote Count</th>
                      <th>Comment</th>
                      <th>Delete</th>
                    </tr>
                    {loading ? (
                    <div>Loading...</div>
                  ) : (
                    feedbacks.map((feedback, index) => (
                      <tr key={index}>
                        <td><b>{calculateContinuousCount(index)}</b></td>
                        <td><b>1123</b></td>
                        <td><b>{feedback.title}</b></td>
                        <td><b>{feedback.description}</b></td>
                        <td><b>{feedback.category}</b></td>
                        <td><b>{feedback.vote_count}</b></td>
                        <td>
                          <button
                            style={{
                              border: '0px',
                              backgroundColor: '#b8868f',
                              color: '#fff',
                              borderRadius: '10px',
                              padding: '10px',
                              textAlign: 'center',
                              lineHeight: '1.5',
                              margin: '5px',
                              display: 'inline-block'
                            }}
                            onClick={() => handleEnable(feedback.id)}
                          >
                            {feedback?.comment_status}
                          </button>
                        </td>
                        <td>
                        <button
                            style={{
                              border: '0px',
                              backgroundColor: 'red',
                              color: '#fff',
                              borderRadius: '10px',
                              padding: '10px',
                              textAlign: 'center',
                              lineHeight: '1.5',
                              margin: '5px',
                              display: 'inline-block'
                            }}
                            onClick={() => handleDelete(feedback.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                  
                  </table>
                </div>
                <div style={{marginTop:'1rem',textAlign:'center'}}>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} lastPage={lastPage} />
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

export default Dashboard1;