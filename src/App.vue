<template>
  <div id="app">
    <hello></hello>
    <fuck></fuck>
  </div>
</template>

<script>
  import Hello from 'components/Hello'
  import Fuck from 'components/Fuck'
  import Emitter from 'element-ui/lib/mixins/emitter'

  export default {
    name: 'app',
    componentName: 'ROOT',
    mixins: [Emitter],
    components: {
      Hello,
      Fuck
    },
    created () {
      this.$on('message', params => {
        this.broadcast(params.componentName, params.eventName, params.text)
      })
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  h1 {
    line-height: 40px;
  }

  .hello, .fuck {
    width: 45%;
    float: left;
    padding: 10px 20px 150px 20px;
  }

  .fuck {
    float: right;
  }
</style>
