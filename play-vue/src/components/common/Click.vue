<template>
  <div class="click">
    <el-button circle @click="show3 = !show3"></el-button>
    <div class="click-box">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">
            <v-Sidebar></v-Sidebar>
          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
import vSidebar from './Sidebar.vue'
    export default {
      components:{
        vSidebar,
      },
    data: () => ({
      show3: true
    })
  }
</script>

<style scoped>
  .click{
    /* position: absolute; */
    top: 8px;
}
  .click-box{
    margin-top: 6px;

  }
  .transition-box {
    border-radius: 4px;
    background-color: #409EFF;
    color: #fff;
    box-sizing: border-box;
  }
</style>
