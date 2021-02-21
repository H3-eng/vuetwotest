<template>
  <div>
    <div>
      <h2>对象增删查改</h2>
      <div>
        <h3>场景一：增加项</h3>
        <ul>
          <li>
            <h4>对象的定义与赋值</h4>
            <p>
              原始数据：{{ objData }} &nbsp;&nbsp;
              得出结果：{{ addObj (objData, 'add1')}}
            </p>
          </li>
          <li>
            <h4>defineProperty语法</h4>
            <p>
              原始数据：{{ objData }} &nbsp;&nbsp;
              得出结果：{{ addObj (objData, 'add2')}}
            </p>
          </li>
        </ul>
      </div>
       <div>
        <h3>场景二：删除项</h3>
        <ul>
          <li>
            <h4>delete语法</h4>
            <p>
              原始数据：{{ objData }} &nbsp;&nbsp;
              得出结果：{{ removeObj(objData) }}
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h3>场景三：查找项</h3>
        <ul>
          <li>
            <h4>判断对象是否存在某属性</h4>
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
      objData: {
        name: 'objData1',
        age: 18,
        sex: undefined
      }
    }
  },
  computed: {
    toNumber () {
      return (val) => {
        var n = parseFloat(val)
        return isNaN(n) ? val : n
      }
    },
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
    },
    addObj () {
      return (obj, type) => {
        let objCopy = cloneDeep(obj)
        if (type === 'add1') {
          objCopy.sex = '女'
        } else if (type === 'add2') {
          Object.defineProperty(objCopy, 'sex', {
            value: '女',
            writable: true, // 是否可以改变
            enumerable: true,
            configurable: true // 不能删除属性
          })
        }
        return objCopy
      }
    },
    removeObj () {
      return (obj) => {
        let objCopy = cloneDeep(obj)
        delete objCopy.age
        return objCopy
      }
    }
  },
  methods: {
  }
}
</script>
