import { defineStore } from 'pinia';

const isAuth = Boolean(parseInt(localStorage.getItem('isAuth')));

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isAuth,
  }),
  getters: {},
  actions: {
    login() {
      this.isAuth = true;
      localStorage.setItem('isAuth', 1);
    },
    logout() {
      this.isAuth = false;
      localStorage.setItem('isAuth', 0);
    },
  },
});
