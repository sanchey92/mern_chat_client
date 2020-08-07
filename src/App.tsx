import React, {FC, useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import io from "socket.io-client";
import makeToast from "./toaster";

const  App: FC = () => {
  const [socket, setSocket] = useState(null);

  const setupSocket = () => {
    const token = localStorage.getItem("CC_Token");
    if (token && !socket) {
      const newSocket = io("http://localhost:8000", {
        query: {
          token: localStorage.getItem("CC_Token"),
        },
      });

      newSocket.on("disconnect", () => {
        setSocket(null);
        setTimeout(setupSocket, 3000);
        makeToast("error", "Socket Disconnected!");
      });

      newSocket.on("connect", () => {
        makeToast("success", "Socket Connected!");
      });

      setSocket(newSocket);
    }
  };

  React.useEffect(() => {
    setupSocket();
    //eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route
          path="/login"
          render={() => <Login setupSocket={setupSocket} />}
          exact
        />
        <Route path="/register" component={Register} exact />
        <Route
          path="/dashboard"
          render={() => <Dashboard socket={socket} />}
          exact
        />
        <Route
          path="/chatroom/:id"
          render={() => <Chatroom socket={socket} />}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App