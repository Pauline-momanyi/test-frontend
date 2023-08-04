import axios from "../customAxiosConfig/CustomAxiosConfig";

const SignUpAppClientService = (user) => {
  try {
    return axios.post(`${process.env.REACT_APP_BASE_URL}/signup`, user);
  } catch (err) {
    let error = "";
    if (err.response) {
      error += err.response;
    }
    return error;
  }
};

export default SignUpAppClientService;
