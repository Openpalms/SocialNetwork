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
    return instance.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${id}`
    );
  },
  unfollowUser(id) {
    return instance.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${id}`
    );
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
};

export const authAPI = {
  login: () => {
    return instance.get(`auth/me`);
  },
};
