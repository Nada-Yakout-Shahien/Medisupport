import { Helmet } from "react-helmet-async";
import "./Welcome.css";
//import { NavLink } from "react-router-dom";
import Layout from '../components/Layout';

const Chat = () => {
  return (
    <Layout>
      <Helmet>
        <title>Chat Doctor ♥</title>
        <meta name="description" content="Chat" />
      </Helmet>
      <div className="chat"></div>
    </Layout>
  );
};

export default Chat;
