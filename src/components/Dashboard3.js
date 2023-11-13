import {React,useEffect} from 'react';
// import logo from './assets/images/logo.png';
// import './App.css';
import { useLocation,useParams } from 'react-router-dom';
import axios from 'axios';
import ReactQuill,{Quill} from 'react-quill';
import quillEmoji from 'quill-emoji';
import 'react-quill/dist/quill.snow.css';
import { baseUrl } from '../BaseUrl'
import AlertMessage from '../components/alerts';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import QuillMention from 'quill-mention';
import 'quill-mention/dist/quill.mention.css';
import moment from 'moment';


function Dashboard3(props) {
  const { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji } = quillEmoji;

Quill.register({
  'formats/emoji': EmojiBlot,
  'modules/emoji-shortname': ShortNameEmoji,
  'modules/emoji-toolbar': ToolbarEmoji,
  'modules/emoji-textarea': TextAreaEmoji
}, true);

const mentionModule = {
  allowedChars: /^[A-Za-z\s]*$/,
  mentionDenotationChars: ["@", "#"],
  source: function (searchTerm, renderList, mentionChar) {
    let values;

    if (mentionChar === "@") {
      values = atValues;
    } else {
      values = hashValues;
    }

    if (searchTerm.length === 0) {
      renderList(values, searchTerm);
    } else {
      const matches = values.filter(user => user.value.toLowerCase().includes(searchTerm.toLowerCase()));
      renderList(matches, searchTerm);
    }
  },
};
if (!Quill.imports['modules/mention']) {
  Quill.register('modules/mention', QuillMention);
}
  const modules = {
    toolbar: [
      [{ 'font': [] }, { 'header': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['emoji'],
      ['link', 'image'],
      ['clean']
    ],
    'emoji-toolbar': true,
    "emoji-textarea": true,
    "emoji-shortname": true,
    // mention: mentionModule,
  }

  const formats = ['font', 'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'color', 'background', 'list', 'indent', 'align', 'link', 'image', 'clean', 'emoji','mention']




  const { id } = useParams();
  const [showFeedback, setShowFeedback] = useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setNewComment] = useState('');
  function SetHeader() {
    const token = localStorage.getItem('token')
    axios.defaults.headers.common["Authorization"] = 'Bearer ' + token;
  }
  useEffect(() => {
    SetHeader();
      axios.get(`${baseUrl}/api/feedback/view/${id}`)
        .then(res => {
          if (res.errors?.length) {
            AlertMessage("error", 'Unable to fetch data')
          } else {
            setShowFeedback(res.data.records);
            setComments(res.data.records.comments);
            console.log(res.data.records.comments)
          }
        });
    
  }, [id]);
  const handleAddComment = () => {
    // Add new comment
    console.log('in the handle funciton',comment)
    axios.post(`${baseUrl}/api/feedback/comment`, {
      feedback_id: id,
      comment: comment,
    })
    .then(res => {
      if (res.errors?.length) {
        AlertMessage("error", 'Unable to add comment')
      } else {
        // Refresh comments after adding a new comment
        axios.get(`${baseUrl}/api/feedback/comments/${id}`)
          .then(res => {
            if (res.errors?.length) {
              AlertMessage("error", 'Unable to fetch comments')
            } else {
              setComments(res.data.records);
              setNewComment('');
            }
          });
      }
    });
  };
  const [atValues, setAtValues] = useState([]);
  const [hashValues, setHashValues] = useState([]);

useEffect(() => {
      SetHeader();
    // Fetch user data from the API
    axios.get(`${baseUrl}/api/user/mention`)
      .then(response => {
        const users = response.data.records;
        // Update atValues and hashValues with the retrieved user data
        const newAtValues = users.map(user => ({ id: user.id, value: user.name }));
        const newHashValues = users.map(user => ({ id: user.id + 1000, value: user.name + ' 2' }));

        setAtValues(newAtValues);
        setHashValues(newHashValues);
        console.log(response.data.records)
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs once, equivalent to componentDidMount


    return (       
        <div className="main-wrapper">
        <div className="content-o">
          <div className="container">
            <div className="col-md-12" style={{ backgroundColor: '#FFEECD', paddingLeft: '50px', paddingRight: '50px', borderRadius: '30px', padding: '10px 20px 20px 20px', alignContent: 'middle' }}>
              <h3 className="text-center"><b>Feedback Details</b></h3>
              <div className="row">
                <div className="col">
                  <span><b>UserName</b></span><br />
                  <span><b>{showFeedback?.user?.username}</b></span>
                </div>
                <div className="col">
                  <span ><b>Feedback Name</b></span><br />
                  <span ><b>{showFeedback?.title}</b></span>
                </div>
                <div className="col">
                  <span><b>Feedback Category</b></span><br />
                  <span><b>{showFeedback?.category}</b></span>
                </div>
                <div className="col">
                  <span><b>Feedback Description</b></span><br />
                  <span><b>{showFeedback?.description}</b></span>
                  </div>
                <div className="col">
                  <span><b>Feedback Date</b></span><br />
                  <span><b>{showFeedback ? moment(showFeedback.created_at).format('MMMM Do YYYY, h:mm:ss a') : 'N/A'}</b></span>
                  </div>
                  <div className="col">
                  <span><b>Total Votes</b></span><br />
                  <span><b>{showFeedback?.vote_count}</b></span>
                  </div>
                
              </div>
            </div>
            <div>&nbsp;</div>
            <div className="col-md-12 mt-4">
              <div className="box1" style={{ backgroundColor: '#FFEECD', paddingLeft: '50px', paddingRight: '50px', borderRadius: '30px', padding: '10px 20px 20px 20px', alignContent: 'middle' }}>
                <h2 className="text-center"><b>Comments</b></h2>
                {comments.map(comment => (
                  <div key={comment.id} style={{marginLeft:'3rem'}}>
                    {/* Display the commenting user's name */}
                    <p><strong>{comment?.user?.name}</strong></p>

                    {/* Render the styled text from ReactQuill */}
                    <p dangerouslySetInnerHTML={{ __html: comment.comment }}></p>

                    {/* Display the timestamp */}
                    <p>{moment(comment.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
                  </div>
                ))}
              </div>
            </div>
          {/* Comment Box */}
          <div className="col-md-12 mt-4">
                {showFeedback?.comment_status === 'enable' && (
                  <div className="box1" style={{ backgroundColor: '#FFEECD', paddingLeft: '50px', paddingRight: '50px', borderRadius: '30px', padding: '10px 20px 20px 20px', alignContent: 'middle' }}>
                    <h2 className="text-center"><b>Add Comment</b></h2>
                    <ReactQuill
                      theme="snow"
                      modules={modules}
                      formats={formats}
                      value={comment}
                      onChange={(value) => setNewComment(value)}
                    />
                    <br />
                    <button
                      style={{
                        border: '0px',
                        backgroundColor: 'green',
                        color: '#fff',
                        borderRadius: '10px',
                        padding: '10px',
                        textAlign: 'center',
                        lineHeight: '1.5',
                        margin: '5px',
                        display: 'inline-block'
                      }}
                      onClick={handleAddComment}
                    >
                      Add Comment
                    </button>
                  </div>
                )}
              </div>
          </div>
        </div>
      </div>

    );
}

export default Dashboard3;