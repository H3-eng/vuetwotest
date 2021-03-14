<template>
  <div>
    <table border="1">
      <tr>
        <td>--</td>
        <td>和原数据是否指向同一对象</td>
        <td>第一场数据为基本数据类型</td>
        <td>原数据中包含子对象</td>
      </tr>
      <tr>
        <td>赋值</td>
        <td>是</td>
        <td>改变会使原数据一同改变</td>
        <td>改变会使原数据一同改变</td>
      </tr>
      <tr>
        <td>浅拷贝</td>
        <td>否</td>
        <td>改变不会使原数据一同改变</td>
        <td>改变会使原数据一同改变</td>
      </tr>
       <tr>
        <td>深拷贝</td>
        <td>否</td>
        <td>改变不会使原数据一同改变</td>
        <td>改变不会使原数据一同改变</td>
      </tr>
    </table>
    <div>
      <h2>深拷贝</h2>
      <h3>方法一：JSON转换</h3>
      <p>缺点：</p>
      <ul>
        <li>如果对象里有函数,函数无法被拷贝下来</li>
        <li>无法拷贝copyObj对象原型链上的属性和方法</li>
        <li>当数据的层次很深，会栈溢出</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      obj: {
        name: '张三',
        age: 15,
        fun: function say () {
          console.log('test')
        }
      },
      arr: [
        {
          name: '张三',
          age: 15
        }
      ]
    }
  },
  computed: {
    objCopy () {
      return JSON.parse(JSON.stringify(this.obj))
    },
    arrCopy () {
      return JSON.parse(JSON.stringify(this.arr))
    }
  }
}
</script>
