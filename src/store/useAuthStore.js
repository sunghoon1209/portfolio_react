import { create } from "zustand";

const useAuthStore = create((set)=>({
    use: null,
    setUser: (user) => set({user}),
    clearUser: ()=> set({user:null}),
    get isLoggedIn() {
        return !!this.user;
    },
}))

export default useAuthStore;