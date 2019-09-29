<template>
  <div>
    <div :style="{width:styles.width,height:styles.height,backgroundColor:styles.backgroundColor}">
      {{setDle}}
      <el-button type="primary" @click="clickContentT">点击按钮(副)</el-button>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    props: {
      styles: {
        type: Object,
        default: function () {
          return {
            width: '100px',
            height: '105px',
            backgroundColor: 'orange'
          }
        }
      }
    },
    watch: {
      style: {
        deep: true,
        handler(newVal, oldVal){
          if (newVal) {
            return newVal
          } else {
            return oldVal
          }
        }
      }
    },
//    data () {
//      return {
//        msg: '测试一'
//      }
//    },
    computed:{
      ...mapGetters([
          'setDle'
      ])
    },
    methods: {
      setContent(){
        this.$store.dispatch('component/setDle','测试二')
      },

      clickContentT(){
        this.$store.dispatch('component/setDle','测试三')
      }
    }
  }
</script>

<style scoped>


</style>
