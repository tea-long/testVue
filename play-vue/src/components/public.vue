
<template>
  <div id="appp" >
<el-container>
  <el-header>
     <div class="head">
                <div class="logo">
                    <img width="40px" src="./../assets/logo.png" alt="奇创网络" title="奇创网络">
                </div>
                    <el-menu :default-active="activeIndex"  text-color="#101010"  active-text-color="#1E9FFF" active-background-color="#000"  class="el-menu-demo menu" mode="horizontal">
                        <el-menu-item index="1">首页</el-menu-item>
                        <el-menu-item index="2" >小程序</el-menu-item>
                        <el-menu-item index="3" >大数据</el-menu-item>
                        <el-menu-item index="4">工具栏</el-menu-item>
                        <el-menu-item index="5">解决方案</el-menu-item>
                        <el-menu-item index="6">帮助中心</el-menu-item>
                        <el-menu-item index="7">关于我们</el-menu-item>
                        <el-menu-item index="8">招商加盟</el-menu-item>
                    </el-menu>
                    <div class="nav-login">
                        <a class="lc_login">登陆</a>
                        <a class="lc_zhuce">注册</a>
                    </div>
            </div>

  </el-header>
  <el-main>
      <!--轮播图-->
           <el-carousel :interval="2000" arrow="always" height="540px">
                <el-carousel-item v-for="(img,index) in imgList" :key="index">
                     <img class="carousel_img" v-bind:src="img.url">
                </el-carousel-item>
           </el-carousel>
            <!--轮播图-->

              <!--s品类介绍-->
            <div class="step">
                <div class="step-title">
                   <span class="step-title_01span">小程序+移动社交营销平台，助力企业布局社交生态链</span>
                   <span class="step-title_02span">各种场景核心功能&nbsp;，&nbsp;一键生成小程序</span>
                </div>
                <div class="step-group clearfix core-function">
                   <span>
                        <a href="" target="_blank">

                        <div class="shadow">
                            <div class="shade">
                            </div>
                            <div class="shadow-content">
                                <img src="./../assets/tongyong_03.png" alt="">

                            </div>
                            <div class="shadow-font">
                                <p class="core-function-title-one">美食外卖</p>
                                <p class="core-function-title-two">轻松管理外卖订单，提升餐厅营收</p>
                            </div>
                        </div>
                        </a>
                        <a href="/product/news.html" target="_blank">
                         <div class="shadow">
                            <div class="shade">
                            </div>
                            <div class="shadow-content">
                                <img src="./../assets/tongyong_15.png" alt="">

                            </div>
                            <div class="shadow-font">
                                <p class="core-function-title-one">营销工具</p>
                                <p class="core-function-title-two">秒杀、拼团、集集乐等多种玩法，助力营销</p>
                            </div>
                        </div>
                        </a>
                    </span>
                    <span>
                        <a href="/product/commerce.html" target="_blank">
                         <div class="shadow">
                            <div class="shade">
                            </div>
                            <div class="shadow-content">
                                <img src="./../assets/tongyong_05.png" alt="">

                            </div>
                            <div class="shadow-font">
                                <p class="core-function-title-one">O2O电商</p>
                                <p class="core-function-title-two">线上运营、线下消费，手机直接管理订单</p>
                            </div>
                        </div>
                        </a>
                        <a href="/product/news.html" target="_blank">
                         <div class="shadow">
                            <div class="shade">
                            </div>
                            <div class="shadow-content">
                                <img src="./../assets/tongyong_17.png" alt="">
                            </div>
                            <div class="shadow-font">
                                <p class="core-function-title-one">新闻资讯</p>
                                <p class="core-function-title-two">同步热点资讯，在线话题互动</p>
                            </div>
                        </div>
                        </a>
                    </span>
                    <span>
                        <a href="/product/commerce.html" target="_blank">
                         <div class="shadow">
                            <div class="shade">
                            </div>
                            <div class="shadow-content">
                                <img src="./../assets/tongyong_07.png" alt="">

                            </div>
                            <div class="shadow-font">
                                <p class="core-function-title-one">预约服务</p>
                                <p class="core-function-title-two">合理分配门店资源，弹性管理预约时间</p>
                            </div>
                        </div>
                        </a>
                        <a href="/product/news.html" target="_blank">
                         <div class="shadow">
                            <div class="shade">
                            </div>
                            <div class="shadow-content">
                                <img src="./../assets/tongyong_19.png" alt="">

                            </div>
                            <div class="shadow-font">
                                <p class="core-function-title-one">多店平台</p>
                                <p class="core-function-title-two">多门店统一管理运营</p>
                            </div>
                        </div>
                        </a>
                    </span>
                    <span>
                        <a href="/product/commerce.html" target="_blank">
                        <div class="shadow">
                            <div class="shade">
                            </div>
                            <div class="shadow-content">
                                <img src="./../assets/tongyong_09.png" alt="">

                            </div>
                            <div class="shadow-font">
                                <p class="core-function-title-one">到店系统</p>
                                <p class="core-function-title-two">线上提前预约，线下扫描点餐，提高执行效率</p>
                            </div>
                        </div>
                        </a>
                        <a href="/product/news.html" target="_blank">
                       <!-- <div class="core-function-hover core-function-hover_buttom">
                            <img src="./../assets/tongyong_20.png" alt="">
                            <img src="./../assets/tongyong_39.png" alt="" class="core-function-img-hover">
                            <p class="core-function-title-one">智慧门店</p>
                            <p class="core-function-title-two" style="margin-left: 23px">WiFi、当面付、会员卡等打造智慧门店</p>
                        </div>-->
                         <div class="shadow">
                            <div class="shade">
                            </div>
                            <div class="shadow-content">
                                <img src="./../assets/tongyong_20.png" alt="">

                            </div>
                            <div class="shadow-font">
                                <p class="core-function-title-one">智慧门店</p>
                                <p class="core-function-title-two">WiFi、当面付、会员卡等打造智慧门店</p>
                            </div>
                        </div>
                        </a>
                    </span>
                </div>
            </div>
            <!--e品类介绍-->
  </el-main>
  <el-footer>Footer</el-footer>
</el-container>

  </div>
</template>
<script>

export default {
      name: "",
      data() {
            return {
               activeIndex: '1',
               imgList: [
        { url: require("./../assets/carouse1.png") },
        { url: require("./../assets/carouse2.png") },
        { url: require("./../assets/1.jpg") },
 

      ]
            };
      }
};
</script>
<style src="./Public.css">

</style>
