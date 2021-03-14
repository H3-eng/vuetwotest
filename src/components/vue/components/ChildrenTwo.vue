<template>
  <div>
    <h3>子组件2</h3>
  </div>
</template>
<script>
export default {
  name: 'ChildrenTwo',
  created () {
    console.log('子组件2---created')
  },
  mounted () {
    console.log('子组件2---mounted')
  }
}
</script>
