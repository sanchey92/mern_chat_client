import React, {ChangeEvent, FC, useState} from "react";
import {useHistory} from 'react-router-dom';
import AxiosService from "../../axiosService";
import makeToast from "../../toaster";

export type initialStateType = {
  name?: string | null,
  email: string | null,
  password: string | null
}

const initialState: initialStateType = {
  name: '',
  email: '',
  password: '',
}

const Register: FC = () => {

  const [values, setValues] = useState<initialStateType>(initialState);
  const history = useHistory()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.currentTarget;
    setValues({...values, [name]: value});
  }

  const submitHandler = async (): Promise<any> => {
    const {name, email, password}  = values;
    const axiosService: AxiosService = new AxiosService();
    try {
      const response = await axiosService.post(name!, email!, password!);
      const data = await response.data;
      makeToast("success", data.message);
      history.push('/login');
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="card">
      <div className="cardHeader">Registration</div>
      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name!}
            placeholder="Enter your name"
            onChange={handleInputChange}
          />
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={values.email!}
          placeholder="Enter your email"
          onChange={handleInputChange}
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={values.password!}
          placeholder="Enter your password"
          onChange={handleInputChange}
        />
      </div>
      <button onClick={submitHandler}>Register</button>
    </div>
  )
}

export default Register;