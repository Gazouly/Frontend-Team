import React from "react";
import "./notification.css"

const Notification = ({Message,username }) => {
  return (
    <div>
      <div className="notification">
        <div border>
          <ul className="conTainer">
            <li className="bulletPoint">
              <span className="text">
                <span>
                <p><h2
          style={{
            fontSize:'14px',
          }}
          ><i class="far fa-comments"
          
          style={{
            fontSize:'13px'
          }}
          ></i>
          >{username}</h2></p>
 

                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Notification;
