<template>
    <div v-if="user" :key="user.userID" >
        <img :src="user.profileUrl" >
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
    this.$store.dispatch("getUser", this.id);
  },
  
};
</script>
<style scoped>
      img{
        max-width: 300px;
        margin-top: 15px;
    }
</style>