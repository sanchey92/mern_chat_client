import React, {FC, useEffect, useState} from "react";
import AxiosService from "../../axiosService";
import { Link } from "react-router-dom";

const Dashboard: FC = () => {

  const [chatrooms, setChatrooms] = useState<[]>([]);
  const axiosService = new AxiosService();

  const fetchChatrooms = async () => {
    try {
      const response = await axiosService.getChatrooms();
      const data = await response.data;
      setChatrooms(data);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchChatrooms()
  }, [])

  return (
    <div className="card">
      <div className="cardHeader">Chatrooms</div>
      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="chatroomName">Chatroom Name</label>
          <input
            type="text"
            name="chatroomName"
            id="chatroomName"
            placeholder="ChatterBox Nepal"
          />
        </div>
      </div>
      <button>Create Chatroom</button>
      <div className="chatrooms">
        {chatrooms.map((chatroom: any) => (
          <div key={chatroom._id} className="chatroom">
            <div>{chatroom.name}</div>
            <Link to={"/chatroom/" + chatroom._id}>
              <div className="join">Join</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard;