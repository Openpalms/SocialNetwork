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
  followUser(id) {
    return instance.post(`follow/${id}`);
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`);
  },
};
export const SecurityAPI = {
  getCaptchaImage() {
    return instance.get('security/get-captcha-url');
  },
};
export const profileAPI = {
  getUserProfile(userID) {
    return instance.get(`profile/${userID}`);
  },
  getStatus(userID) {
    return instance.get(`profile/status/${userID}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  },
  savePhoto(file) {
    let formData = new FormData();
    formData.append('image', file);
    return instance.put(`/profile/photo`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  updateInfo(info) {
    return instance.put(`profile`, info);
  },
};

export const authAPI = {
  me: () => {
    return instance.get(`auth/me`);
  },
  login: (email, password, rememberMe = false, captcha = null) => {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout: () => {
    return instance.delete(`auth/login`);
  },
};
