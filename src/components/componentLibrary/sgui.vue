<template>
  <div class="sgui">
    <div>
      <ul>
        <li>
          <sg-button type="primary" outline @click="openModal">弹窗封装</sg-button>
          <sguiModal
            v-if="sgModalVisible"
            :sgModalVisible="sgModalVisible"
            @closeModal="closeModal"
          ></sguiModal>
        </li>
        <li>
          <router-link to="/sguiForm">表单</router-link>
          <router-view></router-view>
        </li>
        <li>
          <router-link to="/sguiTree">树结构</router-link>
          <router-view></router-view>
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
        <li>
          <router-link to="/sguiContainer">布局</router-link>
          <router-view></router-view>
        </li>
        <li>
          <router-link to="/sguiTimeline">时间线</router-link>
          <router-view></router-view>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import sguiModal from '@/components/componentLibrary/sgui/sguiModal'
export default {
  name: 'sgui',
  components: {
    sguiModal
  },
  data () {
    return {
      sgModalVisible: false
    }
  },
  methods: {
    openModal () {
      this.sgModalVisible = true
    },
    closeModal () {
      this.sgModalVisible = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sgui {
  padding: 20px;
}
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
