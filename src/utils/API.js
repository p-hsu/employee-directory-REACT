import axios from "axios";

const URL = "https://randomuser.me/api/?inc=picture,name,phone,email&results=20";

const apiCall = {
  getEmployees: function() {
    return axios.get(URL);
  }
}

  export default apiCall;