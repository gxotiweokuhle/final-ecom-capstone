<template>
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <img src="https://i.postimg.cc/Dy8VZ383/art-logo.png" alt="logo" class="rounded-5">
    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/" v-show="isLogged">Home</a>
        </li>
        <li class="nav-items dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul class="dropdown-menu bg-black">
            <li><a class="dropdown-item text-white" v-show="!isLogged" href="/user/register">Sign Up!</a></li>
            <li><a class="dropdown-item text-white" v-show="!isLogged" href="/user/login">Login</a></li>
            <li><a class="dropdown-item text-white" v-show="isLogged" href="/user/:id">Profile</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white btn-logout" @click="logout" v-show="isLogged">Logout</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white " href="/products" v-show="isLogged">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white " href="/items/:userID" v-show="isLogged">Cart</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/blog">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page"  v-show="sAdmin " href="/admin">Admin</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
</template>
<script>
export default{
    computed:{
      user(){
        return this.$store.state.user || JSON.parse(localStorage.getItem("userData"))
      },
      sAdmin() {
        // console.log(this.user.result?.Role?.toLowerCase() == "admin");
        // return this.user.result?.Role?.toLowerCase() == "admin";
                return (
              this.user &&
              this.user.result &&
              this.user.result.Role &&
              this.user.result.Role.toLowerCase() === "admin"
            );
          },

      isUser() {
        // console.log(this.result?.Role?.toLowerCase() == "user");
        // return this.user.result?.Role?.toLowerCase() == "user";
              return (
            this.user &&
            this.user.result &&
            this.user.result.Role &&
            this.user.result.Role.toLowerCase() === "user"
          );
      },
      isLogged(){
        // console.log(!this.user.result == " ");
        // return !this.user.result == " ";
        // return !!this.user && !!this.user.result && this.user.result.Role?.toLowerCase() === "user";

        return !!this.user && !!this.user.result && ["admin", "user"].includes(this.user.result.Role);
      }
    },
    mounted(){
      console.log(this.user.result);
          if (this.user && this.user.result) {
        console.log(this.user.result);
      } else {
        console.log("User data is not available.");
      }
  
    },
 
    methods:{
      logout() {
    this.$store.dispatch('logout');
    this.$router.push('/user/login'); 
    // Optionally, navigate the user to a different route or perform other actions after logout.
  }
    }
}
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=REM:wght@200&display=swap');
nav{
  background-color: #030202;
  
}
img{
  max-width: 80px;
  max-height: 100px;
}
.navbar-nav{
  padding: 30px;
  font-family: 'REM', sans-serif;
}


.nav-item :hover{
  border-bottom: 2px solid  white;
}

</style>