<template>
  <div class="warp">
    <div class="header">
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
    <div class="container">
      <div class="main">main</div>
      <div class="aside">aside</div>
    </div>
    <div class="footer">

    </div>
  </div>
</template>
<style scoped>
.warp {
  height: 100%;
  display: flex;
  min-width: 1200px;
  flex-direction: column;
}
.header {
  height: 30px;
  display: flex;
}
.footer {
  height: 30px;
  background-color: yellow;
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
