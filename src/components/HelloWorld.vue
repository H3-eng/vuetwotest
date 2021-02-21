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
      <a href="https://img.alicdn.com/imgextra/i2/2067550949/O1CN01OYIkCW1IsgTjwbis2_!!2067550949.jpg">店招</a>
    </div>
    <div>
      <img
        src="https://img.alicdn.com/imgextra/i4/2067550949/O1CN01H87p9G1IsgWbVYL6U_!!2067550949.jpg"
        border="0" usemap="#planetmap"
        alt="Planets" />
        <map name="planetmap" id="planetmap">
          <area
          shape="rect"
          coords="0,120,110,150"
          href ="https://shop347056278.taobao.com/?spm=a2oq0.12575281.sellercard.15.50111debHf4qPU"
          target ="_blank"
          alt="首页"
          title="首页"
          onfocus= "this.blur()"
          />
          <area
          shape="rect"
          coords="110,120,255,150"
          href ="https://shop347056278.taobao.com/search.htm?spm=a1z10.1-c-s.w5002-17803770555.1.2eda68fa3nm4cF&search=y"
          target ="_blank"
          alt="所有宝贝"
          title="所有宝贝"
          onfocus= "this.blur()"
          />
          <area
          shape="rect"
          coords="255,120,410,150"
          href ="https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-17803770582.9.358773b3t6kaLV&id=636517231181"
          target ="_blank"
          alt="推荐产品"
          title="推荐产品"
          onfocus= "this.blur()"
          />
        </map>
    </div>
    <div style="height:1218px;">
      <div class="footer-more-trigger" style="left:50%;top:auto;border:none;padding:0">
        <div class="footer-more-trigger" style="left:-960px;top:auto;border:none;padding:0">
        <img
        src="https://img.alicdn.com/imgextra/i3/2067550949/O1CN014Hysjm1IsgWfsfBlJ_!!2067550949.jpg"
        border="0" usemap="#planetmap"
        alt="Planets" />
        </div>
      </div>
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
