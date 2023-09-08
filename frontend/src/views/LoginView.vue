<template>
    <!-- login -->
    <div class="container">
        <div class="form-container">
                <p class="title">Login</p>
                <form class="form" @submit.prevent="userLogin">
                    <div class="input-group">
                        <label for="email">Email</label>
			            <input type="email" name="email" id="email" placeholder="" v-model="emailAdd" required>
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
			            <input type="password" name="password" id="password" placeholder=""  v-model="userPass" required>
                       
                    </div>
                    <button class="sign mt-4" type="submit">Log in</button>
                    <p class="signin mt-4">Don't have an account ? <a href="/user/register">Register</a> </p>
                </form>
            </div>
    </div>
</template>
<script>
import router from '../router/index'
import Swal from "sweetalert2";
    export default{
      data() {
    return {
      emailAdd: "",
      userPass: "",
    };
  },
 
  methods: {
    async userLogin() {
  console.log("Reached");
  try {
    const payload = {
      emailAdd: this.emailAdd,
      userPass: this.userPass,
    };
    const respond = await this.$store.dispatch("loginUser", payload);
    router.push("/");
    if (respond.token && respond.result) {
      await Swal.fire({
        icon: "success",
        title: "Logged in Successfully",
        text: "You are now logged in!",
      });
    } else {
      const errMsg = "Unexpected error";
      await Swal.fire({
        icon: "error",
        title: "Login failed",
        text: errMsg,
      });
    }
  } catch (err) {
    console.error("Error while logging in: ", err);
  }
},











    }
  }
</script>
<style scoped>

           .form-container {
  width: 320px;
  border-radius: 0.75rem;
  background-color: black;
  padding: 2rem;
  color: rgba(243, 244, 246, 1);

}
.container{
    display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'REM', sans-serif; 
}

.title {
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}

.form {
  margin-top: 1.5rem;
}

.input-group {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.input-group label {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
}

.input-group input {
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid rgba(55, 65, 81, 1);
  outline: 0;
  background-color: white;
  padding: 0.75rem 1rem;
  color: black;
}

.input-group input:focus {
  border-color: rgb(211, 211, 211);
}


.sign {
  display: block;
  width: 100%;
  /* background-color: rgba(200, 160, 4,); */
  padding: 0.75rem;
  text-align: center;
  color: rgba(17, 24, 39, 1);
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
}

</style>