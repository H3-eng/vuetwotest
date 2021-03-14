<template>
  <div>
    <h3>子组件1嵌套的子组件3</h3>
  </div>
</template>
<script>
export default {
  name: 'ChildrenThird',
  created () {
    console.log('子组件1嵌套的子组件3---created')
  },
  mounted () {
    console.log('子组件1嵌套的子组件3---mounted')
  }
}
</script>
