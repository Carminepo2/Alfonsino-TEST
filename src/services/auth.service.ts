import axios from 'axios';

const API_URL = 'https://playground.alfonsino.delivery/api/auth/';

const AuthService = {
  async login(email: string, password: string) {
    const response = await axios.post<LoginResponse>(API_URL + 'login', {
      email,
      password,
    });

    return response.data.access_token;
  },
};

export default AuthService;
