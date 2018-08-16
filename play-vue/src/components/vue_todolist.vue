<template>
  <div>
<!-- <p v-html="hello"></p> -->
<!-- <p v-text="hello"></p> -->
<!-- {{num+1}}<br> -->
<!-- {{ status ? 'sucess' : 'fail'}}<br> -->
<!-- <componentFirst v-for="(value,key) in objList " :key="key"></componentFirst> -->
<!-- <componentPublic></componentPublic> -->
<ul>
<!-- <li v-for="(it,index) in list" :key="index" :class="{ood:index % 2}">{{index}}***..{{it.name}}-{{it.price}}</li> -->
<!-- <li v-for="(value,key) in objList" :key="key" >{{key}}:{{value}}{{key}}</li> -->
<li v-for="(item,index) in list " :key="index">{{index}} - {{item.name}}-{{item.price}}</li>
<el-button @click="toggol">toggol</el-button>
</ul>
<a :href="link"  :title="togo">togo</a>
<a class="link-red" :class="classStr">baidu</a>
<a v-if="partA">partA</a>
<a v-else>no data</a>
<!-- <a v-show="!partA">partB</a> -->
  </div>
</template>
<script>
// import componentFirst from '../components/first'
// import componentPublic from './Public'
import Vue from 'vue'
export default {
      name: "",
      // components:{componentFirst},
      // components:{componentPublic},
      data() {
            return {
              // hello: '<p>woen</p>',
              // num: 1,
              // status: false,
               link:'http://www.baidu.com',
               togo:'togo',
               classStr:'green',
               partA:false,
            
              list:[
                {
                  price: 34,
                },
                  
                {
                  name: 'pear',
                  price: 34,
                },
                {
                  name: 'bananna',
                  price: 34,
                }
              ],
            objList:{
                  name: 'apple',
                  price: 34,
                  num: 100,
                  color:'red'

                },
          

            };
   
      },
      methods:{
        add (){
          Vue.set( this.list,0,{
              name: 'water',
                  price: 38888,
          })
          // this.list.push({
          //     name: 'water',
          //         price: 38,
          // })
          // console.log(this.list)
        
        },
        toggol () {
          this.partA = !this.partA
        }
      }
};
</script>
<style scoped>
.ood{
  color: red;
}
</style>
