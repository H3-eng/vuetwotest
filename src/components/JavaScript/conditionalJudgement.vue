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
    <div>
      <h2>判断是否存在某个值/属性</h2>
      <div>
        <h3>场景一：字符串是否存在某个值:target.includes(string)</h3>
        <p>数据：
          存在 ({{ stringData.includes('world') }}) &nbsp;&nbsp;
          不存在 ({{ stringData.includes('google') }}) &nbsp;&nbsp;
        </p>
      </div>
      <div>
        <h3>场景二：数组是否存在某个值:target.includes(string)</h3>
        <p>数据：
          存在 ({{ arrayData.includes('runoob') }}) &nbsp;&nbsp;
          不存在 ({{ arrayData.includes('runoobbb') }}) &nbsp;&nbsp;
        </p>
      </div>
      <div>
        <h3>场景三：判断对象是否存在某属性</h3>
        <ul>
          <li>
            <h4>方法一：点(.)或者方括号([]),Obj.x !== undefined</h4>
            <p>局限性：不能用在x的属性值存在，但可能为 undefined的场景。</p>
            <p>数据：
              存在({{ objExit('name') }}) &nbsp;&nbsp;
              原型链({{ objExit('toString') }}) &nbsp;&nbsp;
              值为undefined({{ objExit('sex') }}) &nbsp;&nbsp;
              不存在({{ objExit('address') }}) &nbsp;&nbsp;
              另一种方式({{ typeof (this.objData.name) !== 'undefined' }}) &nbsp;&nbsp;
            </p>
          </li>
          <li>
            <h4>方法二：hasOwnProperty() <span class="recommend">(推荐：vue使用)</span></h4>
            <p>适用性：适用于只判断自身属性的场景</p>
            <p>数据：
              存在 ({{ objHasOwnProperty('name') }}) &nbsp;&nbsp;
              原型链 ({{ objHasOwnProperty('toString') }}) &nbsp;&nbsp;
              值为undefined ({{ objHasOwnProperty('sex') }}) &nbsp;&nbsp;
              不存在 ({{ objHasOwnProperty('address') }}) &nbsp;&nbsp;
              另一种方式 ({{ Object.prototype.hasOwnProperty.call(objData, 'name')}})
            </p>
          </li>
          <li>
            <h4>方法三：in 运算符</h4>
            <p>局限性：无法区分自身和原型链上的属性，不适用只需要判断自身属性是否存在时。</p>
            <p>数据：
              存在({{ objIn('name') }}) &nbsp;&nbsp;
              原型链({{ objIn('toString') }}) &nbsp;&nbsp;
              值为undefined({{ objIn('sex') }}) &nbsp;&nbsp;
              不存在({{ objIn('address') }}) &nbsp;&nbsp;
            </p>
          </li>
           <li>
            <h4>方法四：Reflect.has(objData, key) </h4>
            <p>特点：与in操作符相同</p>
            <p>优点(对比in操作)：从Reflect对象上可以拿到语言内部的方法；操作对象出现报错时返回false；让操作对象都变为函数式编程；保持和proxy对象的方法一一对象</p>
            <p>数据：
              存在 ({{ reflect('name') }})  &nbsp;&nbsp;
              原型链 ({{ reflect('toString') }})  &nbsp;&nbsp;
              值为undefined ({{ reflect('sex') }})  &nbsp;&nbsp;
              不存在 ({{ reflect('address') }})  &nbsp;&nbsp;
            </p>
          </li>
          <li>
            <h4>方法五：Object.keys(objData).includes('name') </h4>
            <p>数据：
              存在({{ ObjectKey('name') }}) &nbsp;&nbsp;
              原型链({{ ObjectKey('toString') }}) &nbsp;&nbsp;
              值为undefined({{ ObjectKey('sex') }}) &nbsp;&nbsp;
              不存在({{ ObjectKey('address') }}) &nbsp;&nbsp;
            </p>
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
      stringData: 'Hello world',
      arrayData: ['runoob', 'google', 'taobao'],
      objData: {
        name: 'objData1',
        age: 18,
        sex: undefined
      }
    }
  },
  computed: {
    objExit () {
      return (key) => {
        return typeof (this.objData[key]) !== 'undefined'
      }
    },
    objHasOwnProperty () {
      return (key) => {
        return this.objData.hasOwnProperty(key)
      }
    },
    objIn () {
      return (key) => {
        return key in this.objData
      }
    },
    reflect () {
      return (key) => {
        return Reflect.has(this.objData, key)
      }
    },
    ObjectKey () {
      return (key) => {
        return Object.keys(this.objData).includes(key)
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
