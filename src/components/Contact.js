import React from "react";
import "./Contact.css";

const isOnline = true;

function Contact() {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src="https://p1.hiclipart.com/preview/105/810/464/classic-games-icons-pacman-3-png-icon.jpg"
        alt=""
      />
      <div>
        <h3 className="name"> Adam Deujour</h3>
        <div className="status">
          <div className={isOnline ? "status-online" : "status-offline"}></div>
          <p className="status-text"> {isOnline ? "Online" : "Offline"} </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
