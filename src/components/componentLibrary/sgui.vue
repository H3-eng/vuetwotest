<template>
  <div class="sgui">
    <div>
      <ul>
        <li>
          <sg-button type="primary" outline @click="openModal">弹窗封装</sg-button>
          <sgModal></sgModal>
        </li>
        <li>
          <router-link to="/sguiTab">标签页</router-link>
          <router-view></router-view>
        </li>
        <li>
          <router-link to="/sguiButton">按钮</router-link>
          <router-view></router-view>
        </li>
        <li>
          <router-link to="/sguiStep">步骤条</router-link>
          <router-view></router-view>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import sgModal from '@/components/componentLibrary/sgModal'
export default {
  name: 'sgui',
  components: {
    sgModal
  },
  data () {
    return {
      sgModalVisial: false
    }
  },
  methods: {
    openModal () {
      this.sgModalVisial = true
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
