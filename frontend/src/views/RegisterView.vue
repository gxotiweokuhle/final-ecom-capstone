<template>
    <div>
        <div class="main m-5">  	
		<input type="checkbox" id="chk" aria-hidden="true">

			<div class="login">
				<form class="form">
					<label for="chk" aria-hidden="true">Log in</label>
					<input class="input" type="email" name="email" placeholder="Email" required="">
					<input class="input" type="password" name="pswd" placeholder="Password" required="">
					<button>Log in</button>
				</form>
			</div>

      <div class="register">
				<form class="form">
					<label for="chk" aria-hidden="true">Register</label>
					<input class="input" type="text" name="txt" placeholder="Username" required="" v-model="user.firstName">
                    <input class="input" type="text" name="txt" placeholder="lastname" required="" v-model="user.lastName">
                    <input class="input" type="text" name="txt" placeholder="gender" required="" v-model="user.gender">
                    <input class="input" type="text" name="txt" placeholder="dd-mm-yy" required="" v-model="user.userDOB">
                    <input class="input" type="text" name="txt" placeholder="Role" required="" v-model="user.Role">
					<input class="input" type="email" name="email" placeholder="Email" required="" v-model="user.emailAdd">
					<input class="input" type="password" name="pswd" placeholder="Password" required="" v-model="user.userPass">
					<button>Register</button>
				</form>
			</div>
	</div>
    </div>
</template>
<script>
export default{

          data() {
        return {
          user: {
            firstName: "",
            lastName: "",
            gender: "",
            userDOB: "",
            Role: "",
            emailAdd: "",
            userPass: "",
            profileUrl: "",
          },
          registrationError: null,
        };
      },
//       methods: {
//     async registerUser() {
//       this.registrationError = null;
//       try {
//         const response = await this.$store.dispatch("registerUser", this.form);
//         this.$router.push("/login");
//       } catch (error) {
//         this.registrationError =
//           "Registration failed. Please check your inputs and try again.";
//       }
//     },
//   },
}
</script>
<style scoped>
    .main {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #240046;
  max-height: 420px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 7px 7px 10px 3px #24004628;

}

.form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
  align-items: center;
}

/*checkbox to switch from sign up to login*/
#chk {
  display: none;
}

/*Login*/
.login {
  position: relative;
  width: 100%;
  height: 100%;
}

.login label {
  margin: 25% 0 5%;
}

label {
  color: #fff;
  font-size: 2rem;
  justify-content: center;
  display: flex;
  font-weight: bold;
  cursor: pointer;
  transition: .5s ease-in-out;
}

.input {
  width: 100%;
  height: 40px;
  background: #e0dede;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 4px;
}

/*Register*/
.register {
  background: #eee;
  border-radius: 60% / 10%;
  transform: translateY(5%);
  transition: .8s ease-in-out;
}

.register label {
  color: #573b8a;
  transform: scale(.6);
}

#chk:checked ~ .register {
  transform: translateY(-60%);
}

#chk:checked ~ .register label {
  transform: scale(1);
  margin: 10% 0 5%;
}

#chk:checked ~ .login label {
  transform: scale(.6);
  margin: 5% 0 5%;
}   
/*Button*/
.form button {
  width: 85%;
  height: 40px;
  margin: 12px auto 10%;
  color: #fff;
  background: #573b8a;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: .2s ease-in;
}

.form button:hover {
  background-color: #6d44b8;
}
</style>