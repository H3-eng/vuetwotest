<template>
  <div class="step-box">
    <div v-for="step in stepArr" :key="step.id" class="step-item">
      <div class="step-item-tail"></div>
      <div class="step-item-icon step-item-vertical"></div>
      <div>
        <div>{{step.name}}</div>
        <div>{{step.name}}</div>
      </div>
    </div>
    <sg-step :step-arr="stepArr" :active-step="5" ></sg-step>
  </div>
</template>
<script>
export default {
  name: 'nav1',
  data () {
    return {
      stepArr: [
        {
          id: 1,
          name: '完善单位信息',
          description: 'sgduauyr',
          number: 1,
          icon: {
            type: 'icondui'
          }
        },
        {
          id: 2,
          name: '录入土地房屋信息',
          number: 2,
          icon: {
            type: 'icondui'
          }
        },
        {
          id: 3,
          name: '录入房屋使用情况',
          number: 3,
          icon: {
            type: 'icondui'
          }
        },
        {
          id: 4,
          name: '录入房地产出租',
          number: 4,
          icon: {
            type: 'icondui'
          }
        },
        {
          id: 5,
          name: '录入房地产出借',
          number: 5,
          icon: {
            type: 'icondui'
          }
        },
        {
          id: 6,
          name: '上报',
          number: 6,
          icon: {
            type: 'icondui'
          }
        }
      ]
    }
  }
}
</script>
<style scoped>
.step-item {
  display: flex;
  position: relative;
  padding-bottom: 40px;
}
.step-item-tail {
  position: absolute;
  background-color: #3b86e0;
  padding: 20px 0 4px;
  width: 4px;
  left: 13px;
  height: 100%;
  top: 0;
}
.step-item-vertical {
  background-color: #fff;
}
.step-item-icon {
  position: relative;
  width: 20px;
  height: 20px;
}
</style>
