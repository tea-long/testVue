 <template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      active-text-color="#ffd04b">
        <router-link to="/internet">
          <el-menu-item index="1">
            <i class="el-icon-location"></i>
            <span> IT 行业</span>
          </el-menu-item>
        </router-link>
        <router-link to="/students">
          <el-menu-item index="2">
            <i class="el-icon-location"></i>
            <span>中小学生</span>
          </el-menu-item>
        </router-link>
        <router-link to="/film">
          <el-menu-item index="3">
            <i class="el-icon-location"></i>
            <span>电影电视</span>
          </el-menu-item>
        </router-link>
        <router-link to="/music">
          <el-menu-item index="4">
            <i class="el-icon-location"></i>
            <span>音乐</span>
          </el-menu-item>
        </router-link>
        <router-link to="/public">
          <el-menu-item index="5">
            <i class="el-icon-location"></i>
            <span>通用</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>
<style scoped>
.el-col {
      width: 100%;
}
a {
      color: #fff;
      text-decoration: none;
}
span{
  color: #fff;
}
</style>
