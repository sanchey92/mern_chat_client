import axios from 'axios'

export default class AxiosService {

  public async post(name: string | null, email: string, password: string): Promise<any> {
    if (name !== null) {
      try {
        return await axios.post("http://localhost:8000/user/register", {name, email, password})
      } catch (e) {
        console.log(e)
      }
    } else {
      try {
        return await axios.post("http://localhost:8000/user/login", {email, password})
      } catch (e) {
        console.log(e)
      }
    }
  }
}