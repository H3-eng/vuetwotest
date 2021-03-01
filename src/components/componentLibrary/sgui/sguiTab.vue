<template>
  <div>
    <div class="fpa-tool-bar">
      <div class="fpa-tool-con">
        <sg-button class="fpa-tool-opt" @click="changeTab">显示/隐藏标签页二</sg-button>
      </div>
    </div>
    <sg-tab value="name1" @on-click="testTab">
      <template v-for="item in tabItem" >
        <sg-tab-pane
          v-if="item.visible"
          :key="item.id"
          :label="item.lebel"
          :name="item.name">
          {{item.content}}
        </sg-tab-pane>
      </template>
    </sg-tab>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabItem: [
        {
          id: '1',
          name: 'name1',
          lebel: '标签一',
          content: '标签一的内容',
          visible: true
        },
        {
          id: '2',
          name: 'name2',
          lebel: '标签二',
          content: '标签二的内容',
          visible: true
        },
        {
          id: '3',
          name: 'name3',
          lebel: '标签三',
          content: '标签三的内容',
          visible: true
        }
      ]
    }
  },
  watch: {
    tabItem: {
      handler (val) {
        console.log(val)
      }
    },
    deep: true
  },
  methods: {
    changeTab () {
      this.tabItem[1].visible = !this.tabItem[1].visible
    },
    testTab (name, index) {
      console.log(name, index)
    }
  }
}
</script>
