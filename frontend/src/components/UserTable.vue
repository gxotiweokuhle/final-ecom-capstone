<template>
    <div v-if="users">
      <div class="container">
        <div class="row table-container">
          <div class="col-12">
            <h1>Users</h1>
           <AddUser/>
          </div>
          <div class="col table table-responsive">
            <div class="userTable">
            <table
              class="table is-striped is-bordered mt-2 is-fullwidth array-lists"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>FullName</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Role</th>
                  <th>Image</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.userID" class="bord">
                  <td>{{ user.userID }}</td>
                  <td>{{ user.fullName }}</td>
                  <td>{{ user.emailAdd }}</td>
                  <td>{{ user.Gender }}</td>
                  <td>{{ user.userAge }}</td>
                  <td>{{ user.userRole }}</td>
                  <td><img class="tableImg" :src="user.userProfile" alt="" /></td>
                  <td>
                    <button type="button" class="btn btn-primary" @click="setId(user.userID)" data-bs-toggle="modal" data-bs-target="#Update" data-bs-whatever="@mdo">Update</button>
                    <button type="button" class="btn btton" @click="deleteUser" data-bs-toggle="modal" data-bs-target="#exampleModal" id="delete-row" >
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
              <button class="btn btn-success mt-3"  type="submit" @click="updateUser" data-bs-dismiss="modal">Update user </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </template>
<script>

    export default{
        
    }
</script>
<style scoped>

</style>