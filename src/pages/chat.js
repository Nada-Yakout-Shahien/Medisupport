import { Helmet } from "react-helmet-async";
import "./Welcome.css";
import React, { useState, useRef, useEffect } from "react";
import chat from "../images/chatting.png";
import { Link } from "react-router-dom";
import "./chat.css";
import Layout from "../components/Layout";
import docchat1 from "../images/doc_chat1.jpeg";

const emojis = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "🤣",
  "😂",
  "🙂",
  "🙃",
  "😉",
  "😊",
  "😇",
  "🥰",
  "😍",
  "🤩",
  "😘",
  "😗",
  "☺",
  "😚",
  "😙",
  "😋",
  "😛",
  "😜",
  "🤪",
  "😝",
  "🤑",
  "🤗",
  "🤭",
  "🤫",
  "🤔",
  "🤐",
  "🤨",
  "😐",
  "😑",
  "😶",
  "😏",
  "😒",
  "🙄",
  "😬",
  "🤥",
  "😌",
  "😔",
  "😪",
  "🤤",
  "😴",
  "😷",
  "🤒",
  "🤕",
  "🤢",
  "🤮",
  "🤧",
  "😵",
  "🤯",
  "🤠",
  "😎",
  "🤓",
  "🧐",
  "😕",
  "😟",
  "🙁",
  "☹",
  "😮",
  "😯",
  "😲",
  "😳",
  "🥺",
  "😦",
  "😧",
  "😨",
  "😰",
  "😥",
  "😢",
  "😭",
  "😱",
  "😖",
  "😣",
  "😞",
  "😓",
  "😩",
  "😫",
  "🥱",
  "😤",
  "😡",
  "😠",
  "🤬",
  "😈",
  "👿",
  "💀",
  "☠",
  "💩",
  "🤡",
  "👹",
  "👺",
  "👻",
  "👽",
  "👾",
  "🤖",
  "😺",
  "😸",
  "😹",
  "😻",
  "😼",
  "😽",
  "🙀",
  "😿",
  "😾",
  "🙈",
  "🙉",
  "🙊",
  "💋",
  "💌",
  "💘",
  "💝",
  "💖",
  "💗",
  "💓",
  "💞",
  "💕",
  "💟",
  "❣️",
  "♥️",
  "💔",
  "❤️",
  "🧡",
  "💛",
  "💚",
  "💙",
  "💜",
  "🤎",
  "🖤",
  "🤍",
  "💯",
  "💢",
  "💥",
  "💫",
  "💦",
  "💨",
  "🕳",
  "💣",
  "💬",
  "👋",
  "🤚",
  "🖐",
  "✋",
  "🖖",
  "👌",
  "🤏",
  "✌",
  "🤞",
  "🤟",
  "🤘",
  "🤙",
  "👈",
  "👉",
  "👆",
  "👇",
  "☝",
  "👍",
  "👎",
  "✊",
  "👊",
  "🤛",
  "🤜",
  "👏",
  "🙌",
  "👐",
  "🤲",
  "🤝",
  "🙏",
  "✍",
  "💅",
  "🤳",
  "💪",
  "🦾",
  "🦵",
  "🦿",
  "🦶",
  "👣",
  "👂",
  "🦻",
  "👃",
  "🧠",
  "🦷",
  "🦴",
  "👀",
  "👁",
  "👅",
  "👄",
  "👶",
  "🧒",
  "👦",
  "👧",
  "🧑",
  "👱",
  "👨",
  "🧔",
  "👩",
  "🧓",
  "👴",
  "👵",
  "🙍",
  "🙎",
  "🙅",
  "🙆",
  "💁",
  "🙋",
  "🧏",
  "🙇",
  "🤦",
  "🤷",
  "👮",
  "🕵",
  "💂",
  "👷",
  "🤴",
  "👸",
  "👳",
  "👲",
  "🧕",
  "🤵",
  "👰",
  "🤰",
  "🤱",
  "👼",
  "🎅",
  "🌱",
  "🌲",
  "🌳",
  "🌴",
  "🌵",
  "🌾",
  "🌿",
  "☘️",
  "🍀",
  "🍁",
  "🍂",
  "🍃",
  "🌺",
  "🌻",
  "🌼",
  "🌷",
  "🌹",
  "🥀",
  "🌸",
  "💐",
  "🍄",
  "🌰",
  "🎍",
  "🎋",
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🥭",
  "🍎",
  "🍏",
  "🍐",
  "🍑",
  "🍒",
  "🍓",
  "🥝",
  "🍅",
  "🥑",
  "🍆",
  "🥔",
  "🥕",
  "🌽",
  "🌶️",
  "🥒",
  "🥬",
  "🥦",
  "🧄",
  "🧅",
  "🍄",
  "🥜",
  "🌰",
  "🍞",
  "🥐",
  "🥖",
  "🥨",
  "🥯",
  "🥞",
  "🧇",
  "🧀",
  "🍖",
  "🍗",
  "🥩",
  "🥓",
  "🍔",
  "🍟",
  "🍕",
  "🌭",
  "🥪",
  "🌮",
  "🌯",
  "🥙",
  "🧆",
  "🥚",
  "🍳",
  "🥘",
  "🍲",
  "🥣",
  "🥗",
  "🍿",
  "🧈",
  "🧂",
  "🥫",
  "🍱",
  "🍘",
  "🍙",
  "🍚",
  "🍛",
  "🍜",
  "🍝",
  "🍠",
  "🍢",
  "🍣",
  "🍤",
  "🍥",
  "🥮",
  "🍡",
  "🥟",
  "🥠",
  "🥡",
  "🦀",
  "🦞",
  "🦐",
  "🦑",
  "🦪",
  "🍦",
  "🍧",
  "🍨",
  "🍩",
  "🍪",
  "🎂",
  "🍰",
  "🧁",
  "🥧",
  "🍫",
  "🍬",
  "🍭",
  "🍮",
  "🍯",
  "🍼",
  "☕",
  "🍵",
  "🧃",
  "🥤",
  "🍶",
  "🍺",
  "🍻",
  "🥂",
  "🍷",
  "🥃",
  "🍸",
  "🍹",
  "🧉",
  "🍾",
  "🧊",
  "🥄",
  "🍴",
  "🍽️",
  "🥣",
  "🥡",
  "🥢",
  "🧂",
];

const Chat = () => {
  //store messages
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  // emogi
  const [showPicker, setShowPicker] = useState(false);
  //send files
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  //chat
  const [showChat, setShowChat] = useState(false);
  //doc
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctorMessageIndex, setDoctorMessageIndex] = useState(0);
  // doc
  const doctorsData = [
    {
      id: 1,
      name: "Dr. Floyd Miles",
      speciality: "Pediatrics",
      lastMessage: "Vivamus varius odio non dui gravida, qui...",
      messageTime: "9:12",
      unreadMessages: 3,
      avatar: docchat1,
      isOnline: true,
      status: "Active now",
      doctorMessages: [
        "Hi, How are you today? I hope you are ok.",
        "The purpose of lorem ipsum is to create a natural looking block of text (sentence,...",
        "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.",
        "Good day! How can I assist you right now?",
        "Greetings! Hope you're feeling well today.",
      ],
    },
    {
      id: 2,
      name: "Dr. mazen noah",
      speciality: "Dermatology",
      lastMessage: "Curabitur eget leo at velit imperdiet vi...",
      messageTime: "2 Mar",
      unreadMessages: 4,
      avatar: docchat1,
      isOnline: false,
      status: "Not Active now",
      doctorMessages: [
        "Hi, How are you today? I hope you are ok.",
        "How is your day going so far?",
        "Is there anything specific I can assist you with today?",
        "Do you have any concerns or questions you'd like to discuss?",
        "Greetings! How can I be of service to you today?",
      ],
    },
    {
      id: 3,
      name: "Dr. noah moaz",
      speciality: "Pediatrics",
      lastMessage: "Vivamus varius odio non dui gravida, qui...",
      messageTime: "3 Fep",
      unreadMessages: 5,
      avatar: docchat1,
      isOnline: true,
      status: "Active now",
      doctorMessages: [
        "Hello, how are you feeling today?",
        "What brings you here today?",
        "How can I assist you with your dermatological needs?",
        "Do you have any specific concerns you'd like to address?",
        "Greetings! How can I help you with your skin health?",
      ],
    },
    {
      id: 4,
      name: "Dr. nor Doe",
      speciality: "Dermatology",
      lastMessage: "Curabitur eget leo at velit imperdiet vi...",
      messageTime: "8:10",
      unreadMessages: 7,
      avatar: docchat1,
      isOnline: true,
      status: "Active now",
      doctorMessages: [
        "Hello, how are you feeling today?",
        "What brings you here today?",
        "How can I assist you with your dermatological needs?",
        "Do you have any specific concerns you'd like to address?",
        "Greetings! How can I help you with your skin health?",
      ],
    },
    {
      id: 5,
      name: "Dr. Amr Miles",
      speciality: "Pediatrics",
      lastMessage: "Vivamus varius odio non dui gravida, qui...",
      messageTime: "9:12",
      unreadMessages: 8,
      avatar: docchat1,
      isOnline: false,
      status: "Not Active now",
      doctorMessages: [
        "Hi, How are you today? I hope you are ok.",
        "Is there anything I can assist you with today?",
        "How can I help you?",
        "Do you have any questions or concerns?",
        "Greetings! How can I assist you today?",
      ],
    },
    {
      id: 6,
      name: "Dr. Ali Doe",
      speciality: "Dermatology",
      lastMessage: "Curabitur eget leo at velit imperdiet vi...",
      messageTime: "5:15",
      unreadMessages: 4,
      avatar: docchat1,
      isOnline: false,
      status: "Not Active now",
      doctorMessages: [
        "Hi, How are you today? I hope you are ok.",
        "Is there anything I can assist you with today?",
        "How can I help you?",
        "Do you have any questions or concerns?",
        "Greetings! How can I assist you today?",
      ],
    },
    {
      id: 7,
      name: "Dr. saad Miles",
      speciality: "Pediatrics",
      lastMessage: "Vivamus varius odio non dui gravida, qui...",
      messageTime: "1:20",
      unreadMessages: 1,
      avatar: docchat1,
      isOnline: true,
      status: "Not Active now",
      doctorMessages: [
        "Hi, How are you today? I hope you are ok.",
        "Is there anything I can assist you with today?",
        "How can I help you?",
        "Do you have any questions or concerns?",
        "Greetings! How can I assist you today?",
      ],
    },
    {
      id: 8,
      name: "Dr. kazem nabil",
      speciality: "Dermatology",
      lastMessage: "Curabitur eget leo at velit imperdiet vi...",
      messageTime: "20 Sat",
      unreadMessages: 2,
      avatar: docchat1,
      isOnline: false,
      status: "Not Active now",
      doctorMessages: [
        "Hi, How are you today? I hope you are ok.",
        "Is there anything I can assist you with today?",
        "How can I help you?",
        "Do you have any questions or concerns?",
        "Greetings! How can I assist you today?",
      ],
    },
  ];
  //mess
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const sendMessage = (event) => {
    event.preventDefault();
    if (currentMessage.trim() !== "" || selectedFile) {
      if (currentMessage.trim() !== "") {
        const newMessage = {
          id: Date.now(),
          text: currentMessage,
          sender: "user",
        };
        setMessages([newMessage, ...messages]);
        setCurrentMessage("");
      }

      if (selectedFile) {
        const fileMessage = {
          id: Date.now(),
          text: `File sent: ${selectedFile.name}`,
          sender: "user",
        };
        setMessages([fileMessage, ...messages]);
        console.log("File sent:", selectedFile.name);
        setSelectedFile(null);
      }
      setTimeout(() => {
        const doctorMessage = {
          id: Date.now(),
          text: selectedDoctor.doctorMessages[doctorMessageIndex],
          sender: "doctor",
        };
        setMessages((messages) => [doctorMessage, ...messages]);

        setDoctorMessageIndex(
          (prevIndex) => (prevIndex + 1) % selectedDoctor.doctorMessages.length
        );
      }, 2000);
    }
  };
  // edit
  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value);
  };
  const selectEmoji = (emoji) => {
    setCurrentMessage(currentMessage + emoji);
  };
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Chat Doctor ♥</title>
        <meta name="description" content="Chat" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />{" "}
      </Helmet>
      <div className="chatting">
        <div className="sidebarchat">
          <h3>Messages</h3>
          <div className="sidebar">
            {doctorsData.map((doctor) => (
              <div
                key={doctor.id}
                className="doctorschat"
                onClick={() => {
                  setSelectedDoctor(doctor);
                  setShowChat(true);
                }}
              >
                <div className="slide">
                  <div className="doctorAvatarContainer">
                    <div className="doctorAvatar">
                      <img
                        src={doctor.avatar}
                        alt="contact-img"
                        className="zoomedImage"
                      />
                    </div>
                    {doctor.isOnline && <div className="onlineIndicator"></div>}
                  </div>
                  <div className="doctorInfo">
                    <div className="doctortext">
                      <div className="doctorName">{doctor.name}</div>
                      <div className="doctorSpeciality">
                        {doctor.speciality}
                      </div>
                      <div className="lastMessage">{doctor.lastMessage}</div>
                    </div>
                    <div className="mess">
                      <div className="messageTime">{doctor.messageTime}</div>
                      <div className="unreadMessages">
                        {doctor.unreadMessages}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedDoctor && showChat && (
          <div className="chatm">
            <i className="fa-solid fa-arrow-left"></i>
            <div className="doctorinfor">
              <div className="contactimgchat">
                <div className="imgd">
                  <img
                    src={selectedDoctor.avatar}
                    alt="contact-img"
                    className="zoomedImagechat"
                  />
                </div>
                {selectedDoctor.isOnline && (
                  <div className="onlineIndicator"></div>
                )}
              </div>
              <div className="infor">
                <h3>{selectedDoctor.name}</h3>
                <p>{selectedDoctor.status}</p>
              </div>
            </div>
            <div
              className={`chat-container ${selectedDoctor.speciality.toLowerCase()}-chat`}
            >
              <div className="chat-messages">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`message ${
                      message.sender === "doctor" ? "doctor" : "user"
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
            <div className="input-area">
              <div className="emoji-picker-position">
                <button onClick={() => setShowPicker(!showPicker)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="51"
                    viewBox="0 0 50 51"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1294_3087)">
                      <path
                        d="M25 47.375C19.1984 47.375 13.6344 45.0703 9.53204 40.968C5.42968 36.8656 3.125 31.3016 3.125 25.5C3.125 19.6984 5.42968 14.1344 9.53204 10.032C13.6344 5.92968 19.1984 3.625 25 3.625C30.8016 3.625 36.3656 5.92968 40.468 10.032C44.5703 14.1344 46.875 19.6984 46.875 25.5C46.875 31.3016 44.5703 36.8656 40.468 40.968C36.3656 45.0703 30.8016 47.375 25 47.375ZM25 50.5C31.6304 50.5 37.9893 47.8661 42.6777 43.1777C47.3661 38.4893 50 32.1304 50 25.5C50 18.8696 47.3661 12.5107 42.6777 7.82233C37.9893 3.13392 31.6304 0.5 25 0.5C18.3696 0.5 12.0107 3.13392 7.32233 7.82233C2.63392 12.5107 0 18.8696 0 25.5C0 32.1304 2.63392 38.4893 7.32233 43.1777C12.0107 47.8661 18.3696 50.5 25 50.5Z"
                        fill="#BE0202"
                      />
                      <path
                        d="M38.5351 30.1875C38.8094 30.6626 38.9537 31.2014 38.9537 31.75C38.9537 32.2986 38.8094 32.8374 38.5351 33.3125C37.164 35.6886 35.1912 37.6617 32.8152 39.0332C30.4393 40.4046 27.7441 41.1261 25.0007 41.125C22.2579 41.1256 19.5633 40.4038 17.1879 39.0324C14.8126 37.6609 12.8403 35.6882 11.4695 33.3125C11.1953 32.8377 11.0509 32.2991 11.0508 31.7508C11.0506 31.2025 11.1948 30.6639 11.4687 30.1889C11.7425 29.7139 12.1366 29.3194 12.6112 29.0449C13.0858 28.7704 13.6243 28.6256 14.1726 28.625H35.8288C36.3774 28.625 36.9162 28.7694 37.3913 29.0437C37.8663 29.318 38.2608 29.7125 38.5351 30.1875ZM21.8757 20.8125C21.8757 23.4 20.4757 20.8125 18.7507 20.8125C17.0257 20.8125 15.6257 23.4 15.6257 20.8125C15.6257 18.225 17.0257 16.125 18.7507 16.125C20.4757 16.125 21.8757 18.225 21.8757 20.8125ZM34.3757 20.8125C34.3757 23.4 32.9757 20.8125 31.2507 20.8125C29.5257 20.8125 28.1257 23.4 28.1257 20.8125C28.1257 18.225 29.5257 16.125 31.2507 16.125C32.9757 16.125 34.3757 18.225 34.3757 20.8125Z"
                        fill="#BE0202"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1294_3087">
                        <rect
                          width="50"
                          height="50"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                {showPicker && (
                  <div
                    className={`emoji-picker-container ${
                      showPicker ? "show" : ""
                    }`}
                  >
                    {emojis.map((emoji) => (
                      <button key={emoji} onClick={() => selectEmoji(emoji)}>
                        {emoji}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="input-container">
                <div className="textarea-custom">
                  <textarea
                    className="textarea"
                    placeholder="Type a message..."
                    value={currentMessage}
                    onChange={handleMessageChange}
                  />
                </div>
                <div
                  className="input-icon"
                  onClick={() => fileInputRef.current.click()}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="40"
                    viewBox="0 0 22 40"
                    fill="none"
                  >
                    <path
                      d="M12.619 13.9585L7.75719 23.1018C7.02517 24.4785 7.02517 26.7118 7.75719 28.0885V28.0885C8.48921 29.4651 9.67674 29.4651 10.4088 28.0885L16.8179 16.0351C18.1605 13.5101 18.1605 9.4168 16.8179 6.8918V6.8918C15.4753 4.3668 13.2987 4.3668 11.9561 6.8918L5.54695 18.9451C3.59372 22.6185 3.59372 28.5718 5.54695 32.2451V32.2451C7.50018 35.9185 10.6658 35.9185 12.619 32.2451L16.5086 24.9301"
                      stroke="#BE0202"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                >
                  <path
                    d="M31.6673 18.8335V20.5002C31.6673 26.9435 26.444 32.1668 20.0007 32.1668M8.33398 18.8335V20.5002C8.33398 26.9435 13.5573 32.1668 20.0007 32.1668M20.0007 32.1668V37.1668M20.0007 37.1668H25.0007M20.0007 37.1668H15.0007M20.0007 27.1668C16.3188 27.1668 13.334 24.1821 13.334 20.5002V10.5002C13.334 6.81826 16.3188 3.8335 20.0007 3.8335C23.6825 3.8335 26.6673 6.81826 26.6673 10.5002V20.5002C26.6673 24.1821 23.6825 27.1668 20.0007 27.1668Z"
                    stroke="#BE0202"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button onClick={(e) => sendMessage(e)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="45"
                  viewBox="0 0 41 45"
                  fill="none"
                >
                  <path
                    d="M0 24.5832H12.5V20.4165H0V1.34569C3.09906e-05 1.16468 0.0472299 0.986798 0.136945 0.829583C0.226659 0.672369 0.355793 0.541247 0.511618 0.44914C0.667443 0.357033 0.844579 0.307121 1.02557 0.304324C1.20656 0.301526 1.38515 0.34594 1.54375 0.433188L40.0062 21.5874C40.1696 21.6773 40.3058 21.8094 40.4006 21.9699C40.4955 22.1304 40.5455 22.3134 40.5455 22.4999C40.5455 22.6863 40.4955 22.8693 40.4006 23.0298C40.3058 23.1903 40.1696 23.3224 40.0062 23.4124L1.54375 44.5665C1.38515 44.6538 1.20656 44.6982 1.02557 44.6954C0.844579 44.6926 0.667443 44.6427 0.511618 44.5506C0.355793 44.4585 0.226659 44.3273 0.136945 44.1701C0.0472299 44.0129 3.09906e-05 43.835 0 43.654V24.5832Z"
                    fill="#BE0202"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {!selectedDoctor && !showChat && (
          <div className="conversation conversation-default active">
            <i className="ri-chat-3-line"></i>
            <p>Select chat and view conversation!</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Chat;
