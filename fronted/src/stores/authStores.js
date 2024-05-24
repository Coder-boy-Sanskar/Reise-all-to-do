import {create} from "zustand";
import axios from "axios";

const authStore = create((set) => ({
  loggedIn: null,

  loginForm: {
    email: "",
    password: "",
  },

  SignupForm: {
    email: "",
    password: "",
  },

  updateLoginForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },

  updateSignupForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: value,
        },
      };
    });
  },

  login: async (e) => {
    console.log(e)
    e.preventDefault();

    

    const { loginForm } = authStore.getState();

    const res = await axios.post("http://localhost:8081/login", loginForm);
    console.log(res);

    set({
      loggedIn: true,
      loginForm: {
        email: "",
        password: "",
      },
    });
  },

  checkAuth: async () => {
    try {
      // Retrieve token from local storage (example)
      const token = localStorage.getItem('authToken');
  
      const response = await axios.get('http://localhost:8081/check-auth', {
        headers: { Authorization: `Bearer ${token}` }, // Include token if needed
      });
  
      // Check response status and data (adapt based on your backend logic)
      if (response.status === 200 && response.data.isAuthenticated) {
        set({ loggedIn: true, userData: response.data.user }); // Use user data if available
      } else {
        set({ loggedIn: false });
      }
    } catch (err) {
      console.error(err);
      set({ loggedIn: false });  // Indicate failure
      // Optionally: Display error message to user
    }
  },

  signup: async (e) => {
    const { signupForm } = authStore().getState();

    const res = await axios.post("http://localhost:8081/signup", signupForm, {
      withCredentials: true,
    });
    set({
      signupForm: {
        email: "",
        password: "",
      },
    });
    console.log(res);
  },

  logout : async (e) =>{
    await  axios.get("http://localhost:8081/logout" );

    set({loggedIn : false});

  },
}));

export default authStore;
