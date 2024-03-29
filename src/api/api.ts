import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "11bb238a-8008-47a1-8d42-4ac8f3398ed4",
  },
});

export const UsersAPI = {
  getUsers: (currentPage: number, pageSize: number) => {
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(
      (response) => response.data,
      (e) => console.log(e)
    );
  },
};

export const ProfileAPI = {
  getProfile: (id: number) => {
    return instance.get(`/profile/${id}`).then(
      (res) => res.data,
      (e) => console.log(e)
    );
  },

  getStatus: (userId: number) => {
    return instance.get(`/profile/status/${userId}`).then(
      (res) => res.data,
      (e) => console.error(e)
    );
  },

  updateStatus: (status: String) => {
    return instance.put(`/profile/status`, {
      status: status,
    });
  },
};

export const FollowAPI = {
  deleteFollow: (userId: number) => {
    return instance.delete(`/follow/${userId}`).then(
      (res) => res.data,
      (e) => console.log(e)
    );
  },

  postFollow: (userId: number) => {
    return instance.post(`/follow/${userId}`).then(
      (res) => {
        return res.data;
      },
      (e) => console.log(e)
    );
  },
};

export const AuthAPI = {
  authMe: () => {
    return instance.get("/auth/me").then(
      (res) => res.data,
      (e) => console.log(e)
    );
  },

  logIn: (email: string, password: string, rememberMe: boolean) => {
    return instance
      .post("/auth/login", {
        email,
        password,
        rememberMe,
      })
      .then(
        (res) => res.data,
        (e) => console.log(e)
      );
  },

  logOut: () => {
    return instance.delete("/auth/login").then(
      (res) => res.data,
      (e) => console.log(e)
    );
  },
};
