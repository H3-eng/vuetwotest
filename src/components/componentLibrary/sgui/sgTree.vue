<template>
  <div>
    <div>
      <h2>组合树</h2>
      <ul>
        <li>
          <h3>基础树</h3>
          <sg-button @click="setValue">赋值</sg-button> {{model1}}
          <sg-combo-tree
            v-model='model1'
            :data="data1"
            @on-check-change='test1'
            :props="{value: 'id'}"
            multiple
            get-parent-node
            ></sg-combo-tree>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      model1: [],
      data1: [
        {
          label: '南方数码',
          id: 'nfsm',
          children: [
            {
              label: '研发中心',
              id: 'yfzx',
              children: [
                {
                  label: '质保团队',
                  id: 'zbtd'

                },
                {
                  label: 'UI团队',
                  id: 'uitd'
                }
              ]
            },
            {
              label: '智慧城市',
              id: 'zhcs',
              children: [
                {
                  label: '智慧实施',
                  id: 'zhss'
                },
                {
                  label: '智慧开发',
                  id: 'zhkf'
                },
                {
                  label: 'UI团队',
                  id: 'uitd'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    setValue () {
      this.model1 = ['uitd']
    },
    test1 (data, node) {
      console.log(data, node)
    }
  },
  watch: {
    model2 (val) {
      console.log(val)
    },
    model3 (val) {
      console.log(val)
    }
  },
  created () {
    this.data0 = JSON.parse(JSON.stringify(this.data1))
    this.data2 = JSON.parse(JSON.stringify(this.data1))
    this.data3 = JSON.parse(JSON.stringify(this.data1))
    this.data4 = JSON.parse(JSON.stringify(this.data1))
    this.data5 = JSON.parse(JSON.stringify(this.data1))
  }
}
</script>
