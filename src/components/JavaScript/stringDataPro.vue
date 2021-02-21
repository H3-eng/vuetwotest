<template>
  <div>
    <div>
      <h2>对象增删查改</h2>
      <div>
        <h3>场景一：字符串转为数字</h3>
        <p>
          原数据：'123'  &nbsp;&nbsp; '123abc123'  &nbsp;&nbsp; 'abc123' &nbsp;&nbsp;
          得出结果：{{ toNumber('123') }} &nbsp;&nbsp; {{ toNumber('123abc123') }} &nbsp;&nbsp; {{ toNumber('abc123') }} &nbsp;&nbsp;
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    toNumber () {
      return (val) => {
        var n = parseFloat(val)
        return isNaN(n) ? val : n
      }
    }
  }
}
</script>
