<template>
  <div>
    <div>
      <h2>URLSearchParams</h2>
      <p>描述：
        <ul>
          <li> URLSearchParams 接口定义了一些实用的方法来处理 URL 的查询字符串。</li>
          <li>返回一个 URLSearchParams 对象。</li>
        </ul>
       </p>
      <p>功能如下：
        <ul>
          <li>
            <p>URLSearchParams.append():插入一个指定的键/值对作为新的搜索参数。</p>
            <p>插入name,age,sex:{{ params }}</p>
          </li>
          <li>
            <p>URLSearchParams.get(): 获取指定搜索参数的第一个值。</p>
            <p>获取name：{{ getUrlSearchParams }}</p>
          </li>
          <li>
            <p>

            </p>
          </li>
        </ul>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      params: {}
    }
  },
  computed: {
    getUrlSearchParams () {
      const params = new URLSearchParams(this.params)
      return params.get('name')
    }
  },
  methods: {
    setUrlSearchParams () {
      const params = new URLSearchParams()
      params.append('name', '张三')
      params.append('age', 18)
      params.append('sex', '男')
      this.params = params
      console.log('params:', params)
      for (let p of params) {
        console.log('p:', p)
      }
    }
  },
  mounted () {
    this.setUrlSearchParams()
  }
}
</script>
