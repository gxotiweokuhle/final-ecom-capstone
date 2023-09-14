<template>
    <div v-if="users">
      <div class="container">
        <div class="row table-container">
          <div class="col-12">
            <h1 class="fs-4 fw-bold text-black">Users</h1>
           <AddUser/>
          </div>
          <div class="col">
            <div class="userTable">
            <table
              class="table is-striped is-bordered mt-2 is-fullwidth array-lists"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>firstName</th>
                  <th>lastName</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Email</th>
                  <!-- <th>Password</th> -->
                  <th>Role</th>
                  <th>Image</th>
                  <!-- <th>Profile</th> -->
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody  v-if="outputData.length>0">
                <tr v-for="user in outputData" :key="user.userID" class="bord">
                  <td>{{ user.userID }}</td>
                  <td>{{ user.Fullname.split(" ")[0] }}</td>
                  <td>{{ user.Fullname.split(" ")[1]}}</td>
                  <td>{{ user.gender }}</td>
                  <td>{{ user.userDOB }}</td>
                  <td>{{ user.emailAdd}}</td>
                  <!-- <td>{{ user.userPass}}</td> -->
                  <td>{{ user.Role}}</td>
                  <!-- <td><img class="tableImg" :src="user.profileUrl" alt="" /></td> -->
                  <td>
                    <button type="button" class="btn btn-primary" @click="setId(user.userID)" data-bs-toggle="modal" data-bs-target="#Update" data-bs-whatever="@mdo">Update</button>
                    <button type="button" class="btn btton" @click="deleteUser(user.userID)" data-bs-toggle="modal" data-bs-target="#exampleModal" id="delete-row" >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
              
              <tbody v-else>
                    <tr v-for="user in users" :key="user.userID" class="bord">
                      <td>{{ user.userID }}</td>
                      <td>{{ user.Fullname.split(" ")[0] }}</td>
                      <td>{{ user.Fullname.split(" ")[1]}}</td>
                      <td>{{ user.gender }}</td>
                      <td>{{ user.userDOB }}</td>
                      <td>{{ user.emailAdd}}</td>
                      <!-- <td>{{ user.userPass}}</td> -->
                      <td>{{ user.Role}}</td>    
                      <td><img class="tableImg" :src="user.profileUrl" alt="" /></td>
                     
                      <!-- <router-link class="btn " :to="{ name:'user', params: {id: user.userID}}">View Profile</router-link> -->
                      <td>
                        <button type="button" class="btn " data-bs-toggle="modal" @click="setId(user.userID)" data-bs-target="#Update" data-bs-whatever="@mdo">Update</button>
                        <button
                          type="button"
                          class="btn btton"
                          @click= deleteUser(user.userID)
                          id="delete-row"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>

            </table>
            </div>
          </div>
        </div>
        <div class="modal fade" id="Update" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add user</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" @submit.prevent="updateUser">
              <form>
                <div class="mb-3">
                  <label for="Firstname" class="col-form-label">First name:</label>
                  <input type="text"  v-model="data.firstName" class="form-control" id="Firstname"  placeholder="FirstName" required>
                </div>
                <div class="mb-3">
                  <label for="Surname" class="col-form-label">Last name:</label>
                  <input type="text"  v-model="data.lastName" class="form-control" id="Surname"  placeholder="Surname" required>
                </div>
                <div class="mb-3">
                  <label for="Email" class="col-form-label">Email:</label>
                  <input type="email"  v-model="data.emailAdd" class="form-control" id="Email"  placeholder="Email" required>
                </div>
                <div class="mb-3">
                  <label for="gender" class="col-form-label">Gender:</label>
                  <input type="text"  v-model="data.gender" class="form-control" id="gender"  placeholder="Gender" required>
                </div>
                <div class="mb-3">
                  <label for="age" class="col-form-label">Age:</label>
                  <input type="text"  v-model="data.userDOB" class="form-control" id="age"  placeholder="Age" required>
                </div>
                <div class="mb-3">
                  <label for="Role" class="col-form-label">Role:</label>
                  <input type="text"  v-model="data.Role" class="form-control" id="Role"  placeholder="Role" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="col-form-label">Password:</label>
                  <input type="password"  v-model="data.userPass" class="form-control" id="password"  placeholder="Password" required>
                </div>
                <div class="mb-3">
                  <label for="image" class="col-form-label">Your image:</label>
                  <input type="text"  v-model="data.profileUrl" class="form-control" id="image"  placeholder="Image url" required>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button class="btn btn-success mt-3"  type="submit" @click="updateUser" data-bs-dismiss="modal">Update user </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </template>
<script>
import AddUser from '@/components/AddUser.vue'

    export default{
      components:{
        AddUser
      },

      data(){
            return{
              payload:{},
                outputData:[],
                userID:null,
              data:{
                firstName:"",
                lastName:"",
                userDOB:null,
                gender:"",
                Role:"",
                emailAdd:"",
                userPass:"",
                profileUrl:""
              }
              
            }
      },
 
      computed: {
          users() {
              return this.$store.state.users
          },
          updateData(){
        return this.users.find(item => item.userID == this.userID) || {}
      }
      
      },
      watch:{
        userID(){
          this.data.firstName= this.updateData.Fullname.split(" ")[0],
          this.data.lastName = this.updateData.Fullname.split(" ")[1],
          this.data.userDOB = this.updateData.userDOB,
          this.data.gender= this.updateData.gender,
          this.data.Role = this.updateData.Role,
          this.data.emailAdd= this.updateData.emailAdd,
          this.data.profileUrl = this.updateData.profileUrl
          
        }
      },

      mounted() {
          this.$store.dispatch("getUsers")
      },
      methods:{

        newdataDisplay(data){
             this.outputData=data;
            
          },

        setId(x){
          this.userID =x
        },
        // updateUser(){
        //   // this.$store.dispatch("updateUser",this.data)
        //   // this.payload.userID = this.userID;
        //   //   this.payload.data = this.data;
        //   //   console.log("Payload to update:", this.payload);
        //   //   this.$store.dispatch("updateUser",this.payload).then(response =>{
        //   //     console.log("Update response:", response);
        //   //   })
        //   //   .catch(error => {
        //   //     console.error("Update error:", error);
        //   //   });
        //   //   console.log(this.data.userID)

          
            
        // },
        async updateUser() {
          try {
            // Create the payload object
            const payload = {
              userID: this.userID, // Assuming this.userID is correctly defined in your component
              data: this.data,     // Assuming this.data is correctly defined in your component
            };

            // Dispatch the updateUser action with the payload
            const response = await this.$store.dispatch('updateUser', payload);
            console.log('Update response:', response);
          } catch (error) {
            console.error('Update error:', error);
          }
        },






        deleteUser(x){
          this.$store.dispatch("deleteUser",x)
        } 
      }
    }
</script>
<style scoped>
.container{
  font-family: 'REM', sans-serif;
}
   button{
    margin: 0.5rem;
    padding: 0.5rem;
    background:#2c3e50;
    color:white;
    border-radius: 1rem;
    font-family: 'REM', sans-serif;
}
button:hover{
  background: rgb(200,160,4);
  color:#2c3e50
}
  .tableImg {
      width: 120px;
      height: auto;
      
  }
  .table{
    width: 90%;
 
  }
  .userTable{
  overflow-x: scroll;
  padding: 2rem;
  max-width: 100%;
}

</style>
