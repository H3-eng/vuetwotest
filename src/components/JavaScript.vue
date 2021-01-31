<template>
    <div>
        <div>
          <h2>伪数组转真数组</h2>
          <p>原数据：{{this.realObj}}} 结果数据：{{Array.prototype.slice.call(this.realObj)}} <span>arguments应用:{{args}}</span></p>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      realObj: {
        0: 0,
        1: 1,
        2: 2,
        length: 3
      },
      resultArr: [],
      args: []
    }
  },
  methods: {
    add () {
      this.args = Array.prototype.slice.call(arguments)
    }
  },
  mounted () {
    this.add(1, 8)
  }
}
</script>
