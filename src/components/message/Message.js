import React, { useState } from "react";
import "./Message.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Message = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`message ${isOpen && `message-open`}`}>
      <div
        className="message-header"
        onClick={() => setIsOpen((show) => !show)}
      >
        <FontAwesomeIcon icon={faUserCircle} className="profile-pic" />
        <p>Pradyumna Tomar</p>
        <FontAwesomeIcon icon={faArrowUp} className="profile-pic" />
      </div>
      {isOpen && <p>Messages appear here</p>}
    </div>
  );
};

export default Message;
