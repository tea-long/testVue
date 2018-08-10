<template>
  <div>
    <span>
      &times;
    </span>
    <el-switch
  v-model="value2"
  active-color="blue"
  inactive-color="#ff4949"
  width='30'
  height='20'
  name='huangl'>
</el-switch>
  </div>
</template>
<script>
export default {
  name:'',
  data () {
    return {
   value1: true,
        value2: true
    }
  }
  
}
</script>
<style scoped>

</style>

