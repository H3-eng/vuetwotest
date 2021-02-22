<template>
  <div class="hello">
    <div>
      <h2>优雅命名</h2>
      <ul>
        <li>
          <router-link to="/name">优雅命名</router-link>
          <router-view></router-view>
        </li>
      </ul>
    </div>
    <div>
      <h2>JavaScript相关</h2>
      <ul>
        <li>
          <router-link to="/arrayDataPro">数组数据处理</router-link>
          <router-view></router-view>
        </li>
        <li>
          <router-link to="/stringDataPro">字符串数据处理</router-link>
          <router-view></router-view>
        </li>
        <li>
          <router-link to="/objDataPro">对象数据处理</router-link>
          <router-view></router-view>
        </li>
        <li>
          <router-link to="/conditionalJudgement">条件判断</router-link>
          <router-view></router-view>
        </li>
      </ul>
    </div>
    <div>
      <h2>组件库相关</h2>
      <ul>
        <li>
          <router-link to="/sgui">sgui组件库</router-link>
          <router-view></router-view>
        </li>
      </ul>
    </div>
    <div>
      <h2>淘宝相关</h2>
      <ul>
        <li>
          <router-link to="/taobaoImage">淘宝代码图片</router-link>
          <router-view></router-view>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
