<template>
  <div class="block">
  <sg-timeline>
    <sg-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :icon="activity.icon"
      :iconSize="activity.iconSize"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
      >
      <div>
        <div>
          {{activity.title}}
        </div>
        <div>是大概多少合适</div>
        <div>
          {{activity.timestamp}}
        </div>
      </div>
      <div v-if="index == (activities.length - 1)" slot="dot"
        style="background-color: rgb(255, 255, 255);width: 12px;height: 12px;left: -1px;
        border-radius: 50%;border: 1px solid rgb(255, 64, 100);box-sizing: border-box;position: relative;"></div>
    </sg-timeline-item>
  </sg-timeline>
</div>
</template>
<script>
export default {
  data () {
    return {
      activities: [{
        title: '支持使用图标',
        user: '张三',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: 'iconcollectoff',
        iconSize: 10
      }, {
        title: '支持自定义颜色',
        user: '张三',
        timestamp: '2018-04-03 20:46',
        color: '#0bbd87'
      }, {
        title: '支持自定义尺寸',
        user: '张三',
        timestamp: '2018-04-03 20:46',
        size: 'large'
      }, {
        title: '默认样式的节点',
        user: '张三',
        timestamp: '2018-04-03 20:46'
      }, {
        title: '使用slot',
        user: '张三',
        timestamp: '2018-04-03 20:46'
      }]
    }
  }
}
</script>
