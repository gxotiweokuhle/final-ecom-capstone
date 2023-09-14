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
    setItems: (state, items) =>{
      // state.items.push(item);
      state.items = items;
      localStorage.setItem("cart", JSON.stringify(state.items))
    },

    setToCart: (state, {prodID, quantity}) =>{
      const itemIndex = state.items.findIndex(item => item.prodID === prodID);
      if(itemIndex !== -1){
         // Item with the specified prodID exists in the cart
         state.items[itemIndex].quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(state.items));

      } else{
        console.error(`Item with prodID ${prodID} not found in the cart.`);
      }
    },
    removeFromCart(state, cartID) {
      state.items = state.items.filter(item => item.cartID !== cartID);
    },
    
   
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
          if(payload.data.userDOB){
            payload.data.userData = new Date(payload.data.userDOB)
            .toISOString()
            .slice(0, 19)
            .replace('T', ' ');
          }
          const response =await axios.patch(`${cUrl}user/${payload.userID}`,payload.data)
          if(response.data.msg){
            context.dispatch("getUsers")
            swal({
              title:"Update",
              text:data.msg,
              icon:"success",
              timer:2000
            })
          }
          return response; // Return the response object
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

      async getItems(context) {

        const userDataJSON = localStorage.getItem('userData');
        const userData = JSON.parse(userDataJSON);

        const userID = userData.result.userID;
        console.log("User ID:", userID);
        if(userID){
          try{
            const {data} = await axios.get(`${cUrl}cart/${userID}`);
            console.log(data.results);
            if (data.results) {
              context.commit("setItems", data.results);
            } else {
              throw Error("Failed to retrieve cart items")
            }
           // if (!response.ok) {
              // context.commit("setItems", data.results)
              
           // } 
            // const data = await response.json();
            // console.log(data);
            // const items = ;
            
            // console.log(items);
          } catch(e){
          context.commit("setMessage", "An error occured")
          console.log(e);
        }
        } else{
          console.error('User data or userID not found in state');
        }

        },

      async addItem(context, { prodID, quantity }) {
        try {
          const userData = localStorage.getItem('userData');
      
          if (userData) {
            const userDataObject = JSON.parse(userData);
            const userID = userDataObject.result.userID;
      
            // Use userID within this function
            console.log(userID);
      
            const response = await axios.post(`${cUrl}items/${userID}`, {
              prodID,
              quantity,
            }, {
              headers: {
                "Content-Type": "application/json",
              },
            });
      
            if (response.status === 200) {
              const data = response.data; 
              context.commit('setToCart', data.result);
            } else {
              throw Error(`Failed to add item to cart. Status: ${response.status}`);
            }
            
          
          } else {
            console.error('User data not found in local storage');
          }
        } catch (error) {
          console.error(error);
        }
      },
      

      async UpdateQuantity(context, {cartID, quantity}){
        try{
          const response = await axios.put(`${cUrl}user/${userID}/cart`, {quantity}, {
            headers:{
              "Content-Type": "application/json",
            }
          })

          if (!response.ok) {
            throw Error("Failed to update item quantity in cart");
          }

          context.commit("updateQuantity", { cartID, quantity });
        }
        catch(error){
          console.error(error);
        }
      },

      async removeItem(context, cartID){
        const userID = context.state.userData.result.userID;
        console.log("User ID:", userID, "Cart ID:", cartID);


        try{
          const response = await axios.delete(`${cUrl}cart/${userID}/${cartID}`);
          if(response.status !== 204){
            throw Error("Failed to remove item from cart");
          }
          context.commit("removeFromCart", cartID);
        }catch(error){
          context.commit("setMessage", msg);
        }
      }













    }
  
})
