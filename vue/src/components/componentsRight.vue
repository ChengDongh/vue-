<template>
  <div>
    <div class="header">
      <div v-if="!itemList.name">事件</div>
      <div v-if="itemList.name">{{itemList.name}}</div>
      <!--<div>{{CLICK_ITEM.name}}</div>-->
    </div>
    <!--事件tab-->
    <transition name="fade">
    <div v-show="!itemList.name" style="display: flex;justify-content: space-around;text-align: center">
      <div :class="{blue:selectTab_event=='emergency'}" @click="selectTab_events('emergency')">应急</div>
      <div :class="{blue:selectTab_event=='alarm'}" @click="selectTab_events('alarm')">告警</div>
      <div :class="{blue:selectTab_event=='other'}" @click="selectTab_events('other')">其他</div>
    </div>
      </transition>
    <div class="content">
      <contentRight ref="contents" :styles="style"></contentRight>
      <el-button type="primary" @click="clickContent">点击按钮(主)</el-button>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import contentRight from './contentRight.vue'
  export default {
    components: {
      contentRight
    },
    data () {
      return {
        itemList: [],
        selectTab_event: 'emergency',
        style: {
          width: '120px',
          height: '150px',
          backgroundColor: 'red'
        }
      }
    },
    computed: {
//      ...mapGetters([
//        'CLICK_ITEM'
//      ])
//or
      clickItem(){
        return this.$store.state.component.clickItem
      }
    },
    watch: {
      clickItem(val){
        console.log(val)
        this.itemList = val;
      }
    },
    methods: {
      selectTab_events(val){
        this.selectTab_event = val
      },
      clickContent(val){

          this.$refs.contents.setContent();
      }
    },
    mounted(){
        console.log(this.$route.matched)
//        this.$store.commit('component/SET_ITEM','dasdasf');
//        console.log(this.$store.state.component.clickItem)
    },
  }
</script>

<style scoped>
  .content {
    width: 200px;
    height: 300px;
    border: 1px solid black;
  }

  .blue {
    color: deepskyblue;
  }

  .fade-enter-active,.fade-leave-active {
    transition: all 1s ease;
  }

  .fade-enter-active {
    opacity: 1;
    transform: translateX(10px);
  }

  .fade-leave-active {
    opacity: 0;
    transform: translateX(100px);
  }
  /* .fade-enter需要放在.fade-enter-active的后面 */
  .fade-enter {
    opacity: 0;
    transform: translateX(100px);
  }
</style>
