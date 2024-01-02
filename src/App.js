import "./App.css";
import cmsLogo from "./assets/CodeMonkey-removebg-preview.png";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={cmsLogo} alt="Logo" className="logo" />
            <span className="brand">CMS Chat</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="New Chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="" className="bubble" />
              What is Programming?
            </button>
            <button className="query">
              <img src={msgIcon} alt="" className="bubble" />
              How do you use an API?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listItemsImg" />
            Saved Chats
          </div>
          <div className="listItems">
            <img src={rocket} alt="Upgrade" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img src={userIcon} alt="" className="chatImg" />
            <p className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae omnis ad illum iure similique culpa commodi natus quae
              animi mollitia?
            </p>
          </div>
          <div className="chat bot">
            <img src={cmsLogo} alt="" className="chatImg" />
            <p className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae omnis ad illum iure similique culpa commodi natus quae
              animi mollitia?
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="input">
            <input type="text" placeholder="Send a request" />
            <button className="send">
              <img src={sendBtn} alt="send" />
            </button>
          </div>
          <p>
            CMS Chat may produce inaccurate information about people, places or
            facts. CMS Chat December 23 Version.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
