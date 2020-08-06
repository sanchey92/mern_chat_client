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
}