<template>
  <div>
    <div>
      <h2>判断类型</h2>
      <div>
        <h3>场景一：是否为数组Array</h3>
        <p>
          原始数据: {{ arrayData }} &nbsp;&nbsp;
          得出结果：是 {{Array.isArray(arrayData)}} &nbsp;&nbsp;
        </p>
      </div>
    </div>
    <div>
      <h2>数组数据转换</h2>
      <div>
        <h3>场景一：对象转数组</h3>
        <p>
          原数据：{{this.realObj}}} &nbsp;&nbsp;
          得出结果：{{ Array.prototype.slice.call(this.realObj) }} &nbsp;&nbsp;
          <span>arguments应用:{{args}}</span>
        </p>
      </div>
    </div>
    <div>
      <h2>数组增删查改</h2>
      <div>
        <h3>场景一：增加项</h3>
        <ul>
          <li>
            <h4>数据头部增加项</h4>
            <p>
              原始数据: {{ arrayData }} &nbsp;&nbsp;
              得出结果：{{ addArray(arrayData,'taobaoCopy','unshift') }}
            </p>
          </li>
          <li>
            <h4>数据尾部增加项</h4>
            <p>
              原始数据: {{ arrayData }} &nbsp;&nbsp;
              得出结果：{{ addArray(arrayData,'taobaoCopy','push') }}
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h3>场景二：删除项</h3>
        <ul>
          <li>
            <h4>数据头部删除项</h4>
            <p>
              原始数据: {{ arrayData }} &nbsp;&nbsp;
              得出结果：{{ removeArray(arrayData,'taobao','shift') }}
            </p>
          </li>
          <li>
            <h4>数据尾部删除项</h4>
            <p>
              原始数据: {{ arrayData }} &nbsp;&nbsp;
              得出结果：{{ removeArray(arrayData,'taobao','pop') }}
            </p>
          </li>
        </ul>
      </div>
      <div>
          <h3>场景三：查找项</h3>
          <ul>
            <li>
              <h4>判断是否存在某个值(includes)，返回true/false</h4>
              <p>
                原始数据：{{ arrayData }} &nbsp;&nbsp;
                得出结果：存在 {{ arrayData.includes('runoob') }} &nbsp;&nbsp;
              </p>
            </li>
            <li>
              <h4>判断存在某个值的索引值(indexOf)，返回索引值</h4>
              <p>
                原始数据：{{ arrayData }} &nbsp;&nbsp;
                得出结果：存在 {{ arrayData.indexOf('runoob') }} &nbsp;&nbsp;
              </p>
            </li>
          </ul>
      </div>
      <div>
        <h3>场景四：修改项</h3>
        <ul>
          <li>
            <h4>头部增加项</h4>
            <p>
              原始数据：{{ arrayData }} &nbsp;&nbsp;
              得出结果： {{ updateArray(arrayData, 'aaa', 'add', 0) }}
            </p>
          </li>
          <li>
            <h4>头部删除项</h4>
            <p>
              原始数据：{{ arrayData }} &nbsp;&nbsp;
              得出结果： {{ updateArray(arrayData, 'aaa', 'delete', 1) }}
            </p>
          </li>
          <li>
            <h4>头部替换项</h4>
            <p>
              原始数据：{{ arrayData }} &nbsp;&nbsp;
              得出结果： {{ updateArray(arrayData, 'aaa', 'update', 1) }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { cloneDeep } from 'lodash'
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
    addArray () {
      return (arr, item, type) => {
        let arrCopy = cloneDeep(arr)
        if (arrCopy.length) {
          if (!arrCopy.includes(item)) {
            arrCopy[type](item)
          }
        }
        return arrCopy
      }
    },
    removeArray () {
      return (arr, item, type) => {
        let arrCopy = cloneDeep(arr)
        if (arrCopy.length) {
          const index = arrCopy.indexOf(item)
          if (index > -1) {
            arrCopy[type](index, 1)
          }
        }
        return arrCopy
      }
    },
    updateArray () {
      return (arr, item, type, index) => {
        let arrCopy = cloneDeep(arr)
        if (arrCopy.length) {
          if (type === 'add') {
            arrCopy.splice(0, index, item)
          } else if (type === 'delete') {
            arrCopy.splice(0, index)
          } else if (type === 'update') {
            arrCopy.splice(0, index, item)
          }
        }
        return arrCopy
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
