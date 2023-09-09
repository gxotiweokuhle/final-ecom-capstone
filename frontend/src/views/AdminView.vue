<template>
    <div>
        <h2>Admin</h2>
        <UserTable/>
        <ProdTable/>
    </div>
</template>
<script>
import ProdTable from '@/components/ProdTable.vue';
import UserTable from '@/components/UserTable.vue'
 export default{
    components:{ProdTable, UserTable}
 }
</script>
<style scoped>

</style>