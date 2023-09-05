import { createStore } from 'vuex'
import axios from 'axios'
import { useCookies } from 'vue3-cookies'

const cUrl = "https://capstone-artstudio.onrender.com/"
const {cookies} = useCookies();


export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    msg:null
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
      state.users = user;
    },
    setMessage:(state,msg)=>{
      state.msg = msg;
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
  }

  
})
