<template>
  <el-container>
  <el-header style="height: 40px;">
 
  </el-header>
  <el-container>
    <el-aside style="width: auto;" >
      <v-click></v-click>
    </el-aside>
    <el-container>
      <el-main>
         <transition name="move" mode="in-out">
            <keep-alive >
                <router-view></router-view>
            </keep-alive>
         </transition>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</el-container>
</template>
<script>
import vClick from './Click.vue'
export default {
  name:'Home',
  components:{
    vClick,
    },

  data() {
    return {
    
    }
  }
}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    
  }

</style>