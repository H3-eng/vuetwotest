<template>
  <div class="sgui-container">
    <div class="header">
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
    <div class="container">
      <div class="main">main</div>
      <div class="aside">aside</div>
    </div>
  </div>
</template>
<style scoped>
.sgui-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
}
.header {
  height: 30px;
  display: flex;
}
.left {
  flex: 1;
  overflow: auto;
  background-color: green;
}
.right {
  width: 100px;
  background-color: pink;
}
.container {
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: row;
  height: 100%;
}
.main {
  flex: 1;
  background-color: red;
}
.aside {
  width: 300px;
  background-color: blue;
}
</style>
