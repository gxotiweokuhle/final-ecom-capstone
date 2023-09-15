<template>
    <div v-if="user.result" :key="user.result.userID"  class="pro">
      <div class="container mt-5">

        <div class="card-client bg-black p-3">
          <p class="fs-4">Welcome back to your <span>ArtStudio</span> profile!
          </p>
          <div class="p-2">
            <div class="user-picture">
              <img :src="user.result.profileUrl"  class="img-fluid rounded-circle">
            </div>
          </div>
              <p class="fs-4">Name: {{ user.result.firstName }}</p>
              <p class="fs-4 ">Date of Birth: {{ user.result.userDOB }}</p>
              <p class="fs-4">Gender: {{ user.result.gender }}</p>
              <p class="fs-4">Email: {{ user.result.emailAdd }}</p>
              <p class="fs-4">Role: {{ user.result.Role }}</p>
          </div>
        </div>
        <div class="text-center d-flex justify-content-center align-items-center flex-wrap">
          <button class="btn bg-black text-white m-2" @click="logout">Logout</button>
          <button class="btn bg-danger text-white" @click= deleteUser(user.result.userID)>Delete</button>
        </div>
    </div>
</template>
<script>
export default {
 
  computed: {
    user() {
      return this.$store.state.user || JSON.parse(localStorage.getItem("userData"));
      
    },
    id() {
      return this.$route.params.id
    }
  },
  mounted() {
    console.log(this.id);
    this.$store.dispatch("getUser", this.$route.params.id);
  },
  methods:{
    setId(x){
          this.userID =x
        },
    deleteUser(x){
          this.$store.dispatch("deleteUser",x)
        } 
  },
  logout(){
    this.$store.dispatch("logout");
    window.location.reload();
  }
  
};
</script>
<style scoped>
p{
  color: white;
}
span{
    font-family: 'Pacifico', cursive;
    color: #98b503;
  }
.container{
    display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'REM', sans-serif; 
}

.card-client {
  background: #2cb5a0;
  width: 85%;
  border: 4px solid #98b503;
  box-shadow: 0 6px 10px rgba(207, 212, 222, 1);
  border-radius: 10px;
  text-align: center;
  color: #fff;
  font-family: 'REM', sans-serif;
  transition: all 0.3s ease;
}
.user-picture {
  overflow: hidden;
  object-fit: cover;
  width: 5rem;
  height: 5rem;
  border: 4px solid #98b503;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
    .pro{
        font-family: 'REM', sans-serif;
        background: rgb(200, 160, 4);
    }
      img{
        max-width: 200px;
        margin-top: 15px;
    }
</style>