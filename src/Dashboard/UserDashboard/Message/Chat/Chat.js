import React, { useEffect, useRef } from "react";
import "./Chat.css";
import SelectedUser from "./SelectedUser";
const Chat = () => {
  const scrollRef = useRef(null);
  useEffect(()=>{
    scrollRef.current.scrollIntoView({behavior:'smooth'})
  },[])
  return (
    <div className="Chat">
      <SelectedUser />
      <div className="chat-container">
        <p className="day">
          <h6>Augaust 22</h6>
        </p>
        <div className="chat-box">

           <div className="message">
            <img src={require('../../../../images/user-EX.png')} alt="" loading="lazy" />
            <div className="text">
              <div className="message-data">

              <h6 className="name">Alexander, support</h6>
              <p>Lorem, ipsum dolor siquos, eos sit optio voluptatem est id.</p>
              </div>
              <span>4 days ago</span>
            </div>
           </div>
           <div className="message own">
            <img src={require('../../../../images/user-EX.png')} alt="" loading="lazy" />
            <div className="text">
              <div className="message-data">

              <h6 className="name">Alexander, support</h6>
              <p>Lorem, ipsum dolor siquos, eos sit optio voluptatem est id.</p>
              </div>
              <span>4 days ago</span>
            </div>
           </div>
           <div className="message">
            <img src={require('../../../../images/user-EX.png')} alt="" loading="lazy" />
            <div className="text">
              <div className="message-data">

              <h6 className="name">Alexander, support</h6>
              <p>Lorem, ipsum dolor siquos, eos sit optio voluptatem est id.</p>
              </div>
              <span>4 days ago</span>
            </div>
           </div>
           <div className="message own">
            <img src={require('../../../../images/user-EX.png')} alt="" loading="lazy" />
            <div className="text">
              <div className="message-data">

              <h6 className="name">Alexander, support</h6>
              <p>Lorem, ipsum dolor siquos, eos sit optio voluptatem est id.</p>
              </div>
              <span>4 days ago</span>
            </div>
           </div>
           <div className="message">
            <img src={require('../../../../images/user-EX.png')} alt="" loading="lazy" />
            <div className="text">
              <div className="message-data">

              <h6 className="name">Alexander, support</h6>
              <p>Lorem, ipsum dolor siquos, eos sit optio voluptatem est id.</p>
              </div>
              <span>4 days ago</span>
            </div>
           </div>
           <div className="message own">
            <img src={require('../../../../images/user-EX.png')} alt="" loading="lazy" />
            <div className="text">
              <div className="message-data">

              <h6 className="name">Alexander, support</h6>
              <p>Lorem, ipsum dolor siquos, eos sit optio voluptatem est id.</p>
              </div>
              <span>4 days ago</span>
            </div>
           </div>
           <div className="message">
            <img src={require('../../../../images/user-EX.png')} alt="" loading="lazy" />
            <div className="text">
              <div className="message-data">

              <h6 className="name">Alexander, support</h6>
              <p>Lorem, ipsum dolor siquos, eos sit optio voluptatem est id.</p>
              </div>
              <span>4 days ago</span>
            </div>
           </div>
           <div className="message own">
            <img src={require('../../../../images/user-EX.png')} alt="" loading="lazy" />
            <div className="text">
              <div className="message-data">

              <h6 className="name">Alexander, support</h6>
              <p>Lorem, ipsum dolor siquos, eos sit optio voluptatem est id.</p>
              </div>
              <span>4 days ago</span>
            </div>
           </div>
           <div className="message">
            <img src={require('../../../../images/user-EX.png')} alt="" loading="lazy" />
            <div className="text">
              <div className="message-data">

              <h6 className="name">Alexander, support</h6>
              <p>Lorem, ipsum dolor siquos, eos sit optio voluptatem est id.</p>
              </div>
              <span>4 days ago</span>
            </div>
           </div>
           <div className="message own">
            <img src={require('../../../../images/user-EX.png')} alt="" loading="lazy" />
            <div className="text">
              <div className="message-data">

              <h6 className="name">Alexander, support</h6>
              <p>Lorem, ipsum dolor siquos, eos sit optio voluptatem est id.</p>
              </div>
              <span>4 days ago</span>
            </div>
           </div>
           <div className="message">
            <img src={require('../../../../images/user-EX.png')} alt="" loading="lazy" />
            <div className="text">
              <div className="message-data">

              <h6 className="name">Alexander, support</h6>
              <p>Lorem, ipsum dolor siquos, eos sit optio voluptatem est id.</p>
              </div>
              <span>4 days ago</span>
            </div>
           </div>





  <div ref={scrollRef}></div>
        </div>
        <div className="chat-input">
          <div>
            <img
              src={require("../../../../images/paperclip.png")}
              alt=""
              loading="lazy"
            />
            <input type="text" placeholder="Write a message..." />
          </div>
          <img
            src={require("../../../../images/send.png")}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
