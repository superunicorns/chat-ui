import ChatContent from "../chatContent/ChatContent";
import ChatList from "../chatList/ChatList";
import UserProfile from "../userProfile/UserProfile";
import "./ChatBody.css";

const ChatBody = () => {
  return (
    <div className="main__chatbody">
      <ChatList />
      <ChatContent />
      <UserProfile />
    </div>
  )
}

export default ChatBody;