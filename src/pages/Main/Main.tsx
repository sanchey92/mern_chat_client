import React, {FC, useEffect} from "react";
import {useHistory} from 'react-router-dom'

const Main: FC = () => {

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("CC_Token");
    console.log(token);
    if(!token) {
      history.push("/login")
    } else {
      history.push("/dashboard")
    }
  }, [history])

  return <div/>
}

export default Main;