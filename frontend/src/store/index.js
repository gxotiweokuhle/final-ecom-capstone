import { createStore } from 'vuex'
import axios from 'axios'
import { useCookies } from 'vue3-cookies'
import router from '../router/index'
import Swal from 'sweetalert2';


const cUrl = "https://capstone-artstudio.onrender.com/"
const {cookies} = useCookies();


export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    msg:null, 
    err: null,
    token: null,
    items: [],

   
  },

  mutations: {
    setProducts: (state, products) =>{
      state.products = products;
    },
     setProduct: (state, product) => {
      state.product = product;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    setMessage:(state,msg)=>{
      state.msg = msg;
    },
    setError: (state, err) =>{
      state.err = err;
    }, 
    setToken: (state, token) =>{
      state.token = token;
    },
    setItems: (state, item) =>{
      state.items.push(item);
    }
   
  },
  actions: {
    async getProducts(context) {
      try{
        const {data} = await axios.get(`${cUrl}products`)
        if (data.results) {
          context.commit("setProducts", data.results)
        }else{
          sweetAlert({
            title:"Error",
            text:data.msg,
            icon:"error",
            timer:2000
          })
        }  
      }catch(e){
        context.commit("setMessage", "An error occured")
        console.log(e);
      }
    },
    async getProduct(context, id) {
      try{
        const {data} = await axios.get(`${cUrl}product/` + id)
        context.commit("setProduct", data.results[0])
      }catch(e){
        context.commit("setMessage", "An error occured")
      }
      },
      async addProduct(context,payload){
        try {
          let {data} =await axios.post(`${cUrl}product`,payload)
          if(data.msg){
            context.dispatch("getProducts")
            Swal({
              title:"Product adding",
              text:data.msg,
              icon:"success",
              timer:2000
            })
          }
          
        } catch (e) {
          context.commit("setMessage","An error occured")
        }
      },
      async updateProduct(context,payload){
        try {
          let {data} =await axios.patch(`${cUrl}product/${payload.prodID}`,payload.data)
          if(data.msg){
            context.dispatch("getProducts")
            swal({
              title:"Update",
              text:data.msg,
              icon:"success",
              timer:2000
            })
          }
        } catch (e) {
          context.commit("setMessage","An error occured")
        }
      },
      async deleteProduct(context,id){
        try {
          let {data}= await axios.delete(`${cUrl}product/${id}`)
          if (data.msg) {
            context.dispatch("getProducts")
            Swal({
              title:"Product removal",
              text: data.msg,
              icon:"success",
              timer:2000
            })
          }
          
        } catch (e) {
          context.commit("setMessage","An error occured")
        }
      },
      async getUsers(context) { 
        try{  
          const {data} = await  axios.get(`${cUrl}users`)
          if (data.results) { 
            context.commit("setUsers", data.results)
          }else{  
            sweetAlert({  
              title:"Error",  
              text:data.msg,  
              icon:"error", 
              timer:2000  
            })  
          }   
  
        }catch(e){  
          context.commit("setMessage", "An error occured")
          console.log(e); 
        } 
      },  
      async getUser(context, id ) {
        try{  
          const {data} = await  axios.get(`${cUrl}user/` + id )
          context.commit("setUser", data.results[0])
        }catch(e){  
          context.commit("setMessage", "An error occured")
          console.log(e); 
        } 
      }, 
      async addUser(context,payload){
        try {
          let {data} =await axios.post(`${cUrl}user/register`,payload)
          const {msg} = await data
          if(msg){
            context.dispatch("getUsers")
            swal({
              title:"User Registration",
              text:data.msg,
              icon:"success",
              timer:2000
            })
          }
          
        } catch (e) {
          context.commit("setMessage","An error occured")
        }
      },
      async updateUser(context,payload){
        try {
          let {data} =await axios.patch(`${cUrl}user/${payload.userID}`,payload.data)
          if(data.msg){
            context.dispatch("getUsers")
            swal({
              title:"Update",
              text:data.msg,
              icon:"success",
              timer:2000
            })
          }
        } catch (e) {
          context.commit("setMessage","An error occured")
        }
      },
      async deleteUser(context,id){
        try {
          let {data}= await axios.delete(`${cUrl}user/${id}`)
          if (data.msg) {
            context.dispatch("getUsers")
            swal({
              title:"User removal",
              text: data.msg,
              icon:"success",
              timer:2000
            })
          }
          
        } catch (e) {
          context.commit("setMessage","An error occured")
        }
      },

      async registerUser(context, payload) {
        console.log("Reached");
        try {
          const response = await axios.post(`${cUrl}user/register`, payload);
        //  console.log("Res: ", res)
          const user = response.data;
          context.commit("setUser", user);
          if (response.status === 200) {
            await Swal.fire({
              icon: "success",
              title: "Registration Successful",
              text: "You have successfully registered.",
            });
            router.push("/user/login");
          } else {
            await Swal.fire({
              icon: "error",
              title: "Registration Failed",
              text: "An error occurred during registration.",
            });
          }
        } catch (e) {
          await Swal.fire({
            icon: "error",
            title: "Error",
            text: e.message,
          });
        }
      },

      async loginUser(context, payload) {
        try {
          const response = await axios.post(`${cUrl}user/login`, payload);
          if (response.status === 200) {
            const { token, user } = response.data;
            console.log(response.data);
            
            context.commit("setToken", token);
            console.log(token);
            context.commit("setUser", user);
            // Store user data in local storage
            localStorage.setItem("userToken", token);
            localStorage.setItem("userData", JSON.stringify(response.data));
            // return response;
            // window.location.reload();
            Swal.fire({
              icon: "success",
              title: "Login Successful",
              text: "You have successfully logged in.",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "An error occurred during login.",
            });
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message,
          });
        }
      },
      // async addItem(context, {userID, prodID}){
      //   try{

      //     const payload = {
      //       userID,
      //       prodID,
      //     };

      //     const response = await axios.post(`${cUrl}user/${userID}/cart`, payload);
      //     if (response.status === 200) {
      //       context.commit('addItems', response.data); // Assuming the response contains the added product
      //     } 
      //     else{
            
      //     }

      //   } catch (error){
      //     console.error(error);
      //   }
      // },












      





    }
  
})
