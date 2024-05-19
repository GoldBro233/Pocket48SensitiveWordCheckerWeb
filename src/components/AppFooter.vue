<!-- src/components/AppFooter.vue -->
<template>
  <footer class="footer">
    Copyright © 2024 <a href="https://github.com/GoldBro233" target="_blank">Goldbro布罗</a><br>
    All Rights Reserved.
  </footer>
</template>

<script>
export default {
  name: 'AppFooter', // 使用多词名称
  // 你可以在这里添加其他组件逻辑
}
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 20px;
  margin-top: 40px;
  font-size: 14px;
  color: #333;
}
.footer a {
  color: #007bff;
  text-decoration: none;
}
.footer a:hover {
  text-decoration: underline;
}
</style>

