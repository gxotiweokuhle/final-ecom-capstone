<template>
    <div class="container">
        <h2>Admin</h2>
        <UserTable/>
        <ProdTable/>
    </div>
    <div class="mt-5">
        <Footer/>
    </div>
</template>
<script>
import ProdTable from '@/components/ProdTable.vue';
import UserTable from '@/components/UserTable.vue';
import Footer from '@/components/Footer.vue';
 export default{
    components:{ProdTable, UserTable, Footer}
 }
</script>
<style scoped>
   .container{
    font-family: 'REM', sans-serif;
   }
</style>