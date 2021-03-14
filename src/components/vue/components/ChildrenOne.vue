<template>
  <div>
    <h3>子组件1</h3>
    <children-third></children-third>
  </div>
</template>
<script>
import ChildrenThird from '@/components/vue/components/ChildrenThird'
export default {
  name: 'ChildrenOne',
  props: {
    ChildrenOneText: {
      type: String,
      default: '子组件1'
    }
  },
  components: {
    ChildrenThird
  },
  created () {
    console.log('子组件1---created')
  },
  mounted () {
    console.log('子组件1---mounted')
  }
}
</script>
