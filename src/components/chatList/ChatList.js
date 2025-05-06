import { Component } from "react";
import "./ChatList.css";
import ChatListItems from "./ChatListItems";

import user1 from "../../images/user-1.jpg"
import user2 from "../../images/user-2.jpg"
import user3 from "../../images/user-3.jpg"
import user4 from "../../images/user-4.jpg"
import user5 from "../../images/user-5.jpg"
import user6 from "../../images/user-6.jpg"
import user7 from "../../images/user-7.jpg"
import user8 from "../../images/user-8.jpg"

class ChatList extends Component {
  allChatUsers = [
    {
      image: user1,
      id: 1,
      name: "Tim Hover",
      active: true,
      isOnline: true,
    },
    {
      image: user2,
      id: 2,
      name: "Ayub Rossi",
      active: false,
      isOnline: false,
    },
    {
      image: user3,
      id: 3,
      name: "Hamaad Dejesus",
      active: false,
      isOnline: false,
    },
    {
      image: user4,
      id: 4,
      name: "Eleni Hobbs",
      active: false,
      isOnline: true,
    },
    {
      image: user5,
      id: 5,
      name: "Elsa Black",
      active: false,
      isOnline: false,
    },
    {
      image: user6,
      id: 6,
      name: "Kayley Mellor",
      active: false,
      isOnline: true,
    },
    {
      image: user7,
      id: 7,
      name: "Hasan Mcculloch",
      active: false,
      isOnline: true,
    },
    {
      image: user8,
      id: 8,
      name: "Autumn Mckee",
      active: false,
      isOnline: false,
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 9,
      name: "Allen Woodley",
      active: false,
      isOnline: true,
    },
    {
      image: "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
      id: 10,
      name: "Manpreet David",
      active: false,
      isOnline: true,
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }

  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus" />
          <span>New Conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h" />
          </button>
        </div>
        <div className="chatlist__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
        <div className="chatlist__items">
        {this.state.allChats.map((item, index) => {
              return (
                <ChatListItems
                  name={item.name}
                  key={item.id}
                  animationDelay={index + 1}
                  active={item.active ? "active" : ""}
                  isOnline={item.isOnline ? "active" : ""}
                  image={item.image}
                />
              );
            })}
        </div>
      </div>
    )
  }
}

export default ChatList;