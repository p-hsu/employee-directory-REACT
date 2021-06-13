import axios from "axios";

const URL = "https://randomuser.me/api/?results=15";

export default {
  getEmployee: function() {
    return axios.get(URL);
  }
};