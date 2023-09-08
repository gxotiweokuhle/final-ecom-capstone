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
    LogStatus:null,
    RegStatus:null

   
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
    setRegStatus: (state, RegStatus) =>{
      state.RegStatus = RegStatus;
    },
    setLogStatus: (state, LogStatus) =>{
      state.LogStatus = LogStatus;
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
      async addItem(context, payload){
        try{

          const existingProduct = state.items.find((item) => item.productID === product.productID);

          if (existingProduct) {
            existingProduct.quantity++;
          } else {
            const response = await axios.post(`${cUrl}user/:id/cart`, payload); 
    
            if (response.ok) {
              context.commit("addItem", product);
            } else {
              console.error('Error adding to cart:', response.statusText);
            }
          }




        } catch{

        }
      }













    }
  
})
