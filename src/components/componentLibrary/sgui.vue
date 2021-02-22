<template>
  <div>
    <sg-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
      <sg-row>
        <sg-col :column="6">
          <sg-form-item label="Input" prop="input">
            <sg-input v-model="formValidate.input"></sg-input>
          </sg-form-item>
        </sg-col>
        <sg-col :column="6">
          <sg-form-item label="Number" prop="number">
            <sg-input-number v-model="formValidate.number" :controls="false"></sg-input-number>
          </sg-form-item>
        </sg-col>
        <sg-col :column="6">
          <sg-form-item label="Checkbox" prop="checkbox">
            <sg-checkbox-group v-model="formValidate.checkbox">
              <sg-checkbox label="1">选项1</sg-checkbox>
              <sg-checkbox label="2">选项1</sg-checkbox>
              <sg-checkbox label="3">选项3</sg-checkbox>
            </sg-checkbox-group>
          </sg-form-item>
        </sg-col>
        <sg-col :column="6">
          <sg-form-item label="Radio" prop="radio">
            <sg-radio-group v-model="formValidate.radio">
              <sg-radio label="1">选项1</sg-radio>
              <sg-radio label="2">选项2</sg-radio>
              <sg-radio label="3">选项3</sg-radio>
            </sg-radio-group>
          </sg-form-item>
        </sg-col>
        <sg-col :column="6">
          <sg-form-item label="Date1" prop="date1">
            <sg-date-picker v-model="formValidate.date1"></sg-date-picker>
          </sg-form-item>
        </sg-col>
        <sg-col :column="6">
          <sg-form-item label="Date2" prop="date2">
            <sg-date-picker multiple value-format="yyyy-MM-dd" v-model="formValidate.date2"></sg-date-picker>
          </sg-form-item>
        </sg-col>
        <sg-col :column="6">
          <sg-form-item label="Select" prop="select">
            <sg-select multiple allowCreate v-model="formValidate.select">
              <sg-option value="1">选项1</sg-option>
              <sg-option value="2">选项2</sg-option>
              <sg-option value="3">选项3</sg-option>
            </sg-select>
          </sg-form-item>
        </sg-col>
        <sg-col :column="6">
          <sg-form-item label="ComboTree" prop="combotree">
            <sg-combo-tree v-model='formValidate.combotree' :data="comboTreeData"></sg-combo-tree>
          </sg-form-item>
        </sg-col>
        <sg-col :column="12">
          <sg-form-item label="Transfer" prop="transfer">
            <sg-transfer :data="transferData" :list-height="200" :right-values="formValidate.transfer" @on-change="handleChange"></sg-transfer>
          </sg-form-item>
        </sg-col>
      </sg-row>
    </sg-form>
    <sg-row main-center>
      <sg-col :column="2" style="text-align:center">
        <sg-button type="primary" @click="submit">Submit</sg-button>
      </sg-col>
    </sg-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      action: '/filemgr/comm/uploadFile',
      name: 'mFile',
      formValidate: {
        input: '',
        number: 1,
        checkbox: [],
        radio: '1',
        select: [],
        date1: '',
        date2: [],
        combotree: '',
        transfer: []
      },
      comboTreeData: [{
        label: '所有分类',
        value: '000',
        children: [{
          label: '分类项1',
          value: '001',
          children: []
        }, {
          label: '分类项2',
          value: '002',
          children: [{
            label: '分类项2-1',
            value: '021'
          }]
        }]
      }],
      transferData: [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3' },
        { value: '4', label: '选项4' },
        { value: '5', label: '选项5' },
        { value: '6', label: '选项6' }
      ],
      ruleValidate: {
        input: [
          {required: true, message: 'Input 请输入', trigger: 'blur'},
          {pattern: /^[A-Za-z0-9\u4e00-\u9fa5]*$/, message: 'Input 仅可输入字母、汉字以及数字', trigger: ['blur', 'change']}
        ],
        number: [
          {required: true, type: 'number', message: 'Number 请输入', trigger: 'change'}
        ],
        checkbox: [
          {required: true, type: 'array', message: 'Checkbox 请选择', trigger: 'change'}
        ],
        radio: [
          {required: true, message: 'Radio 请选择', trigger: 'change'},
          {validator: (rule, value, callback) => {
            if (value == '3') {
              callback(new Error('Radio 不能为该值'))
            } else {
              callback()
            }
          }}
        ],
        select: [
          {required: true, type: 'array', message: 'Select 请选择', trigger: 'change'}
        ],
        date1: [
          {required: true, type: 'date', message: 'Date1 不能为空', trigger: 'change'}
        ], // 日期-绑定值的日期格式默认返回Date对象，需设置type: 'date'
        date2: [
          {required: true, type: 'array', message: 'Date2 不能为空', trigger: 'change'}
        ], // 日期-设置value-format（非Date对象）, 则无需设置type: 'date'
        combotree: [
          {required: true, message: 'Combotree 请选择', trigger: 'change'}
        ],
        transfer: [
          {required: true, type: 'array', message: 'Transfer 不能为空', trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.formValidate.validate((valid) => {
        if (valid) {
          this.$msg.success('通过验证')
        } else {
          this.$msg.error('未通过验证')
        }
      })
    },
    handleChange (right, path, move) {
      this.formValidate.transfer = right
    }
  }
}
</script>
