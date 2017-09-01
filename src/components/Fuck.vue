<template>
  <div class="fuck">
    <h1>This is {{ name }} Component</h1>
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180" align="left">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180" align="left">
      </el-table-column>
      <el-table-column prop="msg" label="消息" align="left">
      </el-table-column>
    </el-table>
    <div @keyup.enter="submit" class="input">
      <el-input placeholder="请输入内容，回车确认"
                v-model="textarea">
      </el-input>
    </div>
  </div>
</template>

<script>
  import Emitter from 'element-ui/lib/mixins/emitter'
  import event from '../mixins/event'

  export default {
    name: 'fuck',
    componentName: 'Fuck',
    mixins: [Emitter, event],
    data () {
      return {
        name: 'Fuck',
        textarea: '',
        tableData: []
      }
    },
    methods: {
      submit () {
        this.communicate('message', {
          componentName: 'Hello',
          text: this.textarea
        })
        this.textarea = ''
      }
    },
    created () {
      this.$on('message', text => {
        this.tableData.push(this.getMessage(text))
      })
    }
  }
</script>

<style scoped>
  .input {
    position: fixed;
    width: 45%;
    bottom: 50px;
  }
</style>
