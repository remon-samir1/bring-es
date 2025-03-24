import  axios  from "axios";
import Cookies from "cookie-universal";

const cookie = Cookies()
const token = cookie.get('token')
console.log(token);
export const Axios = axios.create({
  baseURL:'https://kivromart.com/api',
  headers: {
    Authorization: 'Bearer ' + token
  }
})
