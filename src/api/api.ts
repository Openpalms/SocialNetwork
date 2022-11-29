import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': '8013c354-fe13-4e5b-beb1-7f76557bbdfb' },
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 2) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  followUser(id: number) {
    return instance.post(`follow/${id}`);
  },
  unfollowUser(id: number) {
    return instance.delete(`follow/${id}`);
  },
};
export const SecurityAPI = {
  getCaptchaImage() {
    return instance.get('security/get-captcha-url');
  },
};
export const profileAPI = {
  getUserProfile(userID: number) {
    return instance.get(`profile/${userID}`);
  },
  getStatus(userID: number) {
    return instance.get(`profile/status/${userID}`);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status });
  },
  savePhoto(file: string) {
    let formData = new FormData();
    formData.append('image', file);
    return instance.put(`/profile/photo`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  updateInfo(info: string) {
    return instance.put(`profile`, info);
  },
};

type meType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: number;
  messages: Array<string>;
};

type loginType = {
  data: {
    id: number;
  };
  resultCode: number;
  messages: Array<string>;
};
export const authAPI = {
  me: () => {
    return instance.get<meType>(`auth/me`).then((response) => response.data);
  },
  login: (
    email: string,
    password: string,
    rememberMe = false,
    captcha: string | null = null
  ) => {
    return instance
      .post<loginType>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((response) => response.data);
  },
  logout: () => {
    return instance.delete(`auth/login`);
  },
};
