import axios from 'axios'

export default class AxiosService {

  public async post(name: string | null = null, email: string, password: string): Promise<any> {
    if (name !== null) {
      try {
        return await axios.post("http://localhost:8000/user/signup", {name, email, password})
      } catch (e) {
        console.log(e)
      }
    } else {
      try {
        return await axios.post("http://localhost:8000/user/signin", {email, password})
      } catch (e) {
        console.log(e)
      }
    }
  }

  public async getChatrooms(): Promise<any> {
    try {
      return await axios.get("http://localhost:8000/chatroom", {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("CC_Token")
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
}