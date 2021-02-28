<template>
  <div class="sgui-buttton">
    <div class="sgui-blue">
      <h2>蓝色系列</h2>
      <sg-button type="primary">基础按钮</sg-button>
      <sg-button type="primary" disabled>基础按钮</sg-button>
      <sg-button type="primary">
        <sg-icon type="icondui" class="dy-font" size="16" />基础按钮
      </sg-button>
      <sg-button type="primary">
        <span class="circle-blue">1</span>基础按钮
      </sg-button>
    </div>
    <div class="sgui-gray">
      <h2>灰色系列</h2>
      <sg-button type="info">提示按钮</sg-button>
      <sg-button type="info" disabled>提示按钮</sg-button>
      <sg-button type="info">
        <sg-icon type="icondui" class="dy-font" size="16" />提示按钮
      </sg-button>
      <sg-button type="info">
        <span class="circle-blue">1</span>提示按钮
      </sg-button>
    </div>
    <div>
      <h2>红色系列</h2>
      <sg-button type="error">错误按钮</sg-button>
      <sg-button type="error" disabled>基础按钮</sg-button>
      <sg-button type="error">
        <sg-icon type="icondui" class="dy-font" size="16" />基础按钮
      </sg-button>
      <sg-button type="error">
        <span class="circle-blue">1</span>基础按钮
      </sg-button>
    </div>
  </div>
</template>
<style scoped>
.sg-btn {
  padding: 0 20px;
  height: 35px;
}
.circle-blue {
  display: inline-block;
  line-height: 15px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  color: #3b86e0;
  background: #fff;
  text-align: center;
}
.btn-gray {
  background-color: #dfdfdf;
  color: #999;
  border-color: #dfdfdf;
}
</style>
