<template>
  <div>
    <div>
      <h2>判断类型</h2>
      <div>
        <h3>场景一：是否为数组Array</h3>
        <p>数据：
          是 (Array.isArray(data)) &nbsp;&nbsp;
          否 (!Array.isArray(data)) &nbsp;&nbsp;
        </p>
      </div>
      <div>
        <h3>场景二：是否为undefined</h3>
        <p>数据：
          是 (data === undefined) &nbsp;&nbsp;(typeof(data) === "undefined") &nbsp;&nbsp;
          否 (data !== undefined) &nbsp;&nbsp;
        </p>
      </div>
      <div>
        <h3>场景三：是否为null</h3>
        <p>数据：
          是 ({{ null === null }} {{ !null && typeof(null)!= 'undefined' && null!=0 }}) &nbsp;&nbsp;
          否 ({{ undefined  === null }} {{ !0 }}) &nbsp;&nbsp;
        </p>
      </div>
      <div>
        <h3>场景四：是否为true/false</h3>
        <p>数据：
          是 (data === true) &nbsp;&nbsp;(data === false) &nbsp;&nbsp;
          否 (data !== true) &nbsp;&nbsp;(data !== false) &nbsp;&nbsp;
        </p>
      </div>
      <div>
        <h3>场景五：是否为数字Number</h3>
        <p>数据：
          是 (data === true) &nbsp;&nbsp;(data === false) &nbsp;&nbsp;
          否 (data !== true) &nbsp;&nbsp;(data !== false) &nbsp;&nbsp;
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      stringData: 'Hello world',
      arrayData: ['runoob', 'google', 'taobao'],
      objData: {
        name: 'objData1',
        age: 18,
        sex: undefined
      }
    }
  }
}
</script>
<style scoped>
.recommend {
  color: #ff0000;
}
</style>
