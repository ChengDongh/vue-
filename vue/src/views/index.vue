<template>
  <div class="content">
    <Left></Left>
    <Right></Right>
  </div>
</template>

<script>
  import Left from '@/components/componentLeft'
  import Right from '@/components/componentsRight'
  export default {
    name: 'index',
    components: {
      Left,
      Right
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .content {
    display: flex;
    justify-content: space-between;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
