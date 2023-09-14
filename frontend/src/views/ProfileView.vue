<template>
    <div v-if="user.result" :key="user.result.userID"  class="pro">

      <div class="card bg-black mx-4 mt-5">
        <div class="card-body p-0">
          <div class="img">
            <img :src="user.result.profileUrl"  class="img-fluid rounded-circle">
          </div>
        </div>
            <p class="fs-4">Name: {{ user.result.firstName }}</p>
            <p class="fs-4 ">Date of Birth: {{ user.result.userDOB }}</p>
            <p class="fs-4">Gender: {{ user.result.gender }}</p>
            <p class="fs-4">Email: {{ user.result.emailAdd }}</p>
            <p class="fs-4">Role: {{ user.result.Role }}</p>
        </div>
        <button class="btn bg-danger" @click= deleteUser(user.result.userID)>Delete Account</button>
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
  // methods:{
  //   setId(x){
  //         this.userID =x
  //       },
  //   deleteUser(x){
  //         this.$store.dispatch("deleteUser",x)
  //       } 
  // }

  
};
</script>
<style scoped>
p{
  color: white;
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