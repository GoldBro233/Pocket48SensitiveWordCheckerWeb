<!-- src/components/InputText.vue -->
<template>
    <el-row type="flex" justify="center" class="input-row">
      <el-col :span="12">
        <el-input v-model="localValue" type="textarea" placeholder="请输入文本" rows="4" />
      </el-col>
    </el-row>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: String
    },
    computed: {
      localValue: {
        get() {
          return this.modelValue;
        },
        set(value) {
          this.$emit('update:modelValue', value);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .input-row {
    margin-top: 50px;
  }
  .el-input {
    max-width: 600px;
  }
  </style>
  