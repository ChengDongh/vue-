<template>
  <div class="content">

    <div style="display: flex;flex-wrap: wrap;text-align: center">
      <div style="width: 100px;height: 30px;padding-top: 10px;cursor: default" v-for="(item,index) in dataList" :key="index" @click="click(item)">
        <div :class="[param == item?'colorBlue':'']">
          {{item.name}}
        </div>
      </div>
    </div>
      </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        param:'',
        dataList: [
          {
            id: 1,
            name: '测试一'
          },
          {
            id: 2,
            name: '测试二'
          },
          {
            id: 3,
            name: '测试三'
          },
          {
              id:4,
            name:'测试四'
          },
          {
              id:5,
            name:'测试五'
          }
        ]
      }
    },
    watch:{
      param(newParam){
         let Param = newParam?newParam:'';
         this.$store.dispatch('component/setItem',Param);
      },
      deep: true,
      immediate: true
    },
    methods: {
      click(item){
          this.param = this.param==item?'':item;
      }
    }
  }
</script>

<style scoped>
  .content {
    width: 200px;
    height: 300px;
    border: 1px solid black;
  }
  .colorBlue{
    color: deepskyblue;
  }



</style>
