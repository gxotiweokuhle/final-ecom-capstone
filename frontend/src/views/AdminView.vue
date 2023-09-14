<template>
    <div class="container">
            <h1 class="fs-4 fw-bold text-black">Admin</h1>
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