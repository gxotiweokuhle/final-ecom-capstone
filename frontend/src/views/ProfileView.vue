<template>
    <div v-if="user" :key="user.userID"  class="pro">

      <div class="card bg-black mx-4 mt-5">
        <div class="card-body p-0">
          <div class="img">
            <img :src="user.profileUrl"  class="img-fluid rounded-circle">
          </div>
        </div>
            <p class="fs-4">Name: {{ user.Fullname }}</p>
            <p class="fs-4 ">Date of Birth: {{ user.userDOB }}</p>
            <p class="fs-4">Gender: {{ user.gender }}</p>
            <p class="fs-4">Email: {{ user.emailAdd }}</p>
            <p class="fs-4">Role: {{ user.Role }}</p>
        </div>
        <button class="btn bg-danger" @click= deleteUser(user.userID)>Delete Account</button>
    </div>
</template>
<script>
export default {
 
  computed: {
    user() {
      return this.$store.state.user;
      
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