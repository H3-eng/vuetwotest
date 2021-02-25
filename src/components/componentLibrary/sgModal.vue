<template>
  <sg-modal title="提示" v-model="alert" modal-type="alert" ok-text="知道了" @on-ok="handleAlertOk">
    <sg-tab value="name1" style="width: 600px;height:350px">
        <sg-tab-pane label="标签一" name="name1">
          <sg-table width="600" :columns="columns" :data="data"></sg-table>
        </sg-tab-pane>
        <sg-tab-pane label="标签二" name="name2">
          <sg-form v-model="form" @submit.native.prevent :label-width="100">
            <sg-form-item prop="cascader" label="联级选择:">
              <sg-cascader v-model="form.cascader" :data="data1" placeholder="请选择"></sg-cascader>
            </sg-form-item>
            <sg-form-item prop="color" label="颜色选择:" style="text-align:left;">
              <sg-color-picker v-model="form.color"></sg-color-picker>
            </sg-form-item>
            <sg-form-item prop="date" label="日期选择:">
              <sg-date-picker v-model="form.date" format="yyyy年MM月dd日" value-format="yyyy/MM/dd" type="datetime"></sg-date-picker>
            </sg-form-item>
          </sg-form>
        </sg-tab-pane>
        <sg-tab-pane label="标签三" name="name3">
          <sg-select v-model="model1" style="width: 330px;margin-left: 30px;">
            <sg-option v-for="(item, index) in cityList" :value="item.value" :key="index">{{ item.label }}</sg-option>
          </sg-select>
        </sg-tab-pane>
    </sg-tab>
  </sg-modal>
</template>
<script>
export default {
  data () {
    return {
      form: {
        date: new Date(),
        color: '#f00',
        cascader: []
      },
      columns: [
        {
          title: '序号',
          type: 'index'
        },
        {
          title: '多选',
          type: 'selection'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park'
        }
      ],
      model1: '',
      confirm: false,
      alert: false,
      data1: [{
        'code': '4401',
        'label': '广州市',
        'children': [
          {
            'code': '440117',
            'label': '从化区',
            'children': [
              {
                'code': '440117001',
                'label': '街口街道'
              },
              {
                'code': '440117002',
                'label': '江埔街道'
              }
            ]
          },
          {
            'code': '440118',
            'label': '增城区',
            'children': [
              {
                'code': '440118001',
                'label': '荔城街道'
              },
              {
                'code': '440118002',
                'label': '增江街道'
              }
            ]
          }
        ]
      }],
      cityList: [
        {
          value: '南方数码0',
          label: 'UEDUEDUEDUEDUEDUEDUEDUEDUEDUED'
        },
        {
          value: '南方数码1',
          label: 'UED1'
        },
        {
          value: '南方数码2',
          label: 'UED2'
        },
        {
          value: '南方数码3',
          label: 'UED3'
        },
        {
          value: '南方数码4',
          label: 'UED4'
        },
        {
          value: '南方数码5',
          label: 'UED5'
        },
        {
          value: '南方数码6',
          label: 'UED6'
        },
        {
          value: '南方数码7',
          label: 'UED7'
        },
        {
          value: '南方数码8',
          label: 'UED8'
        },
        {
          value: '南方数码9',
          label: 'UED9'
        },
        {
          value: '南方数码10',
          label: 'UED10'
        }
      ]
    }
  },
  methods: {
    showConfirm () {
      this.confirm = true
    },
    showAlert () {
      this.alert = true
    },
    handleConfirmOk () {
      console.log('点击了确定')
      this.confirm = false
      this.$msg.info('点击了确定')
    },
    handleCancel () {
      console.log('点击了取消')
      this.$msg.warning('点击了取消')
    },
    handleAlertOk () {
      this.alert = false
    },
    handleHidden () {
      console.log('关闭结束')
    }
  }
}
</script>
