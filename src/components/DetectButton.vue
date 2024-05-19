<!-- src/components/DetectButton.vue -->
<template>
    <el-row type="flex" justify="center" class="button-row">
      <el-col :span="6">
        <el-button type="primary" @click="$emit('click')" class="detect-button">
          检测
        </el-button>
      </el-col>
    </el-row>
  </template>
  
  <style scoped>
  .button-row {
    margin-top: 20px;
  }
  .detect-button {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    max-width: 600px;
  }
  </style>
  