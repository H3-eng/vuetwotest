<template>
    <div>
        <div>
          <h2>伪数组转真数组</h2>
          <p>原数据：{{this.realObj}}} 结果数据：{{Array.prototype.slice.call(this.realObj)}} <span>arguments应用:{{args}}</span></p>
        </div>
        <div>
          <h2>数据转换</h2>
          <div>
            <h3>场景一：数据转为数字</h3>
            <p>数据：
              '123'： {{ toNumber('123') }} &nbsp;&nbsp;
              '123abc123'： {{ toNumber('123abc123') }} &nbsp;&nbsp;
              'abc123'： {{ toNumber('abc123') }} &nbsp;&nbsp;
            </p>
          </div>
        </div>
        <div>
          <h2>数据增删查改</h2>
          <div>
            <h3>场景一：增加项</h3>
            <ul>
              <li>
                <h4>数据增加项</h4>
                <p></p>
              </li>
            </ul>
          </div>
          <div>
            <h3>场景二：删除项</h3>
            <ul>
              <li>
                <h4>数据删除项</h4>
                <p>原始数据: {{ arrayData }} &nbsp;&nbsp; 最终数据：{{ removeArray(arrayData,'taobao') }} </p>
              </li>
            </ul>
          </div>
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
      arrayData: ['runoob', 'google', 'taobao'],
      args: []
    }
  },
  computed: {
    toNumber () {
      return (val) => {
        var n = parseFloat(val)
        return isNaN(n) ? val : n
      }
    },
    removeArray () {
      return (arr, item) => {
        if (arr.length) {
          const index = arr.indexOf(item)
          if (index > -1) {
            arr.splice(index, 1)
          }
        }
        return arr
      }
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
