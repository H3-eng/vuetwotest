<template>
  <div>
    <h2>父组件，打开控制台验证生命周期</h2>
    <children-one></children-one>
    <children-two></children-two>
    <div>
      <h3>结果：</h3>
      <ul>
        <li>父组件---created</li>
        <li>子组件1---created</li>
        <li>子组件1嵌套的子组件3---created</li>
        <li>子组件2---created</li>
        <li>子组件1嵌套的子组件3---mounted</li>
        <li>子组件1---mounted</li>
        <li>子组件2---mounted</li>
        <li>父组件---mounted</li>
      </ul>
      <h3>结论：</h3>
      <ul>
        <li>不论子组件有多少，父组件的生命周期created总是先执行，父组件的生命周期mounted总是最后一个执行的</li>
        <li>各子组件的生命周期先按顺序(挂载在父组件中的位置)执行created，再按顺序(挂载在父组件中的位置)执行mounted</li>
        <li>总之created生命周期又外到内一层层先执行，而mounted生命周期则由内到外接着一层层执行</li>
      </ul>
    </div>
  </div>
</template>
<script>
import ChildrenOne from '@/components/vue/components/ChildrenOne'
import ChildrenTwo from '@/components/vue/components/ChildrenTwo'
export default {
  name: 'LiftCycle',
  components: {
    ChildrenOne,
    ChildrenTwo
  },
  created () {
    console.log('父组件---created')
  },
  mounted () {
    console.log('父组件---mounted')
  }
}
</script>
