import { Helmet } from "react-helmet-async";
import "./Welcome.css";
//import { NavLink } from "react-router-dom";
import "./chat.css";
import Layout from "../components/Layout";
import docchat1 from "../images/doc_chat1.jpeg";

const Chat = () => {
  return (
    <Layout>
      <Helmet>
        <title>Chat Doctor ♥</title>
        <meta name="description" content="Chat" />
      </Helmet>
      <div className="chat">
        <div className="sidebarchat">
          <h3>Messages</h3>
          <div className="sidebar">
            <div className="doctorschat">
              <div className="slide">
                <div className="doctorAvatar">
                  <img
                    src={docchat1}
                    alt="contact-img"
                    className="zoomedImage"
                  />
                  <div className="onlineIndicator"></div>
                </div>
                <div className="doctorInfo">
                  <div className="doctortext">
                    <div className="doctorName">Dr. Floyd Miles</div>
                    <div className="doctorSpeciality">Pediatrics</div>
                    <div className="lastMessage">
                      Vivamus varius odio non dui gravida, qui...
                    </div>
                  </div>
                  <div className="mess">
                    <div className="messageTime">9:12</div>
                    <div className="unreadMessages">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="chatm">
          <div className="messages">{/* هنا هتعرض الرسائل */}</div>
          <div className="input-area">
            <input type="text" placeholder="اكتب رسالتك هنا..." />
            <button>إرسال</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;
