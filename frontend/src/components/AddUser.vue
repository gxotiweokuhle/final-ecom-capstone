<template>
    <div class="container">
         <!-- Modal -->
         <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add</button>
   
   
         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div class="modal-dialog">
             <div class="modal-content">
               <div class="modal-header">
                 <h1 class="modal-title fs-5" id="exampleModalLabel">Add user</h1>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body" @submit.prevent="registerUser">
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
                     <input type="text"  v-model="data.Gender" class="form-control" id="gender"  placeholder="Gender" required>
                   </div>
                   <div class="mb-3">
                     <label for="age" class="col-form-label">Age:</label>
                     <input type="text"  v-model="data.userAge" class="form-control" id="age"  placeholder="Age" required>
                   </div>
                   <div class="mb-3">
                     <label for="Role" class="col-form-label">Role:</label>
                     <input type="text"  v-model="data.userRole" class="form-control" id="Role"  placeholder="Role" required>
                   </div>
                   <div class="mb-3">
                     <label for="password" class="col-form-label">Password:</label>
                     <input type="password"  v-model="data.userPass" class="form-control" id="password"  placeholder="Password" required>
                   </div>
                   <div class="mb-3">
                     <label for="image" class="col-form-label">Your image:</label>
                     <input type="text"  v-model="data.userProfile" class="form-control" id="image"  placeholder="Image url" required>
                   </div>
                 </form>
               </div>
               <div class="modal-footer">
                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                 <button class="btn btn-success mt-3"  type="submit" @click="registerUser" data-bs-dismiss="modal"> Add user </button>
               </div>
             </div>
           </div>
         </div>
       </div>
     </template>
     <script>
       export default {  
         data(){
           return{
             data:{
               firstName:"",
               lastName:"",
               userAge:null,
               Gender:"",
               userRole:"",
               emailAdd:"",
               userPass:"",
               userProfile:""
             }
           }
         },
         
         methods: {
           registerUser(){
             this.$store.dispatch("addUser",this.data)
           } 
         },
       };
     </script>
     <style scoped>
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
     .modal-body {
       display: flex;
       flex-direction: column;
     }
     </style>