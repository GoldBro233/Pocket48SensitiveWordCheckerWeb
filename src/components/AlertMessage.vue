<!-- src/components/AlertMessage.vue -->
<template>
    <el-row type="flex" justify="center" class="alert-row">
      <el-col :span="12">
        <div v-if="containsSensitiveWord">
          <el-alert type="error" title="输入的文本包含敏感词。" show-icon />
          <el-alert type="info" :title="'修改后的文本：' + modifiedText" show-icon />
        </div>
        <div v-else>
          <el-alert type="success" title="输入的文本不包含敏感词。" show-icon />
        </div>
      </el-col>
    </el-row>
  </template>
  
  <script>
  export default {
    props: {
      containsSensitiveWord: Boolean,
      modifiedText: String
    }
  };
  </script>
  
  <style scoped>
  .alert-row {
    margin-top: 20px;
  }
  .el-alert {
    font-size: 16px;
    max-width: 600px;
  }
  </style>
  