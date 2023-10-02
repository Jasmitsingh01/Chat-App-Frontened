import React, { useEffect, useState } from "react";
import Css from "../STYLE/Mainapp.module.css";
import Message from "./Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import socketIO from "socket.io-client";
import {user} from '../LOGIN&SINGUP/LOGIN';

let socket

function CHATAPP() {
  const [id, setid] = useState("");
  const [messagess, setMessages] = useState([]);
  const SendMsg = () => {
    const Mesaage = document.getElementById("messsage_box").value;
    socket.emit("message", { Mesaage, id });
    document.getElementById("messsage_box").value = "";
  };
  
;
  useEffect(() => {
    socket = socketIO("http://localhost:8000", { transports: ["websocket"] });

      socket.emit("joined", { user });
      
     
    return () => {
socket.disconnect();
      socket.off();
    };
  }, []);
  useEffect(() => {
    socket.on("welcome", (Data) => {
      setid(socket.id);
      setMessages([...messagess, Data]);

    });    
    return () => {
      socket.off();
    };
  }, [messagess,]);
  
  useEffect(() => {
    socket.on("UserJoined", (msg) => {
      setMessages([...messagess, msg]);
    });    
    return () => {
      socket.off();
    };
  }, [messagess,]);

  useEffect(() => {
    
    socket.on("Userleft", (data) => {
      setMessages([...messagess, data]);

    }); 
    return () => {
      socket.off();
    };
  }, [messagess,]);
  useEffect(() => {
    socket.on("SendMsg", ({ user, message, id }) => {
      if (id === socket.id) {
        const data = {
          user: "you",
          message,
        };
        setMessages([...messagess, data]);
      } else {
        const data = {
          user,
          message,
        };
        setMessages([...messagess, data]);
      }
    });

    return () => {
      socket.off();
    };
  }, [messagess]);
  return (
    <div className={Css.Main}>
      <div className={Css.Mainheader}>
        <div className={Css.header}>Js Chat</div>
        <div className={Css.Close}><a href="/">X</a></div>
      </div>
      <ReactScrollToBottom className={Css.MsgArea}>
        <div className={Css.MsgArea}>
          {messagess.map((item, index) => {
            return (
              <Message user={item.user} message={item.message} classs={""} />
            );
          })}

          <div id="info_area"></div>
        </div>
      </ReactScrollToBottom>
      <div className={Css.msgSend}>
        <input type="text" className={Css.input} id="messsage_box" onKeyPress={(e)=>e.code==='Enter'?SendMsg():""} />
        <button type="button" className={Css.button} onClick={SendMsg}>
          Send
        </button>
      </div>
    </div>
  );
}

export default CHATAPP;
