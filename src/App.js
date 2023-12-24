import "./App.css";
import cmsLogo from "./assets/CodeMonkey-removebg-preview.png";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";

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
              What is Programming?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src="" alt="" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src="" alt="" className="listItemsImg" />
            Saved Chats
          </div>
          <div className="listItems">
            <img src="" alt="" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default App;
