<!-- 交易路径 -->
<template>
<div class='normalization'>
    <div class="data-import-title">
      <p>
        模板下载<span>（请先选择文件类型、业务领域）</span>
      </p>
    </div>
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100" inline class="v-form">
        <FormItem label="文件类型" prop="fileType">
            <Select v-model="formValidate.fileType" disabled>
                <Option value="1">交易路径</Option>
            </Select>
        </FormItem>
        <FormItem label="业务领域" prop="businessArea">
            <Select v-model="formValidate.businessArea" placeholder="请选择业务领域">
                <Option value="1">现金管理</Option>
                <Option value="2">贷记卡</Option>
                <Option value="3">收单</Option>
                <Option value="4">存款</Option>
                <Option value="5">借记卡</Option>
            </Select>
        </FormItem>
        <br/>
        <FormItem label="业务场景" prop="businessScenarios">
            <Select v-model="formValidate.businessScenarios" placeholder="请选择业务场景" filterable>
                <Option v-for="item in businessScenariosList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <FormItem label="业务功能" prop="businessFunctions">
            <Select v-model="formValidate.businessFunctions" placeholder="请选择业务功能" multiple filterable>
                <Option v-for="item in businessFunctionsList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <FormItem label="物理子系统" prop="physicalSubsystem">
            <Select v-model="formValidate.physicalSubsystem" placeholder="请选择物理子系统" filterable>
                <Option v-for="item in physicalSubsystemList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <br>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')" :disabled='btnDisabled'>生成模板</Button>
        </FormItem>
    </Form>
    <div class="data-import-title">
      <p>
        导入数据
      </p>
    </div>
     <Form :rules="ruleValidate" :label-width="100" inline class="v-form">
        <FormItem label="导入文件">
            <Upload
                multiple
                action="//jsonplaceholder.typicode.com/posts/">
                <Button icon="ios-cloud-upload-outline">导入数据</Button>
            </Upload>
            <Button disabled>预览</Button>
        </FormItem>
    </Form>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      formValidate: {
        fileType: '1',
        businessArea: '',
        businessFunctions: [],
        physicalSubsystem: '',
        businessScenarios: ''
      },
      businessFunctionsList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      physicalSubsystemList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      businessScenariosList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      ruleValidate: {
        fileType: [
          { required: true, message: '请选择文件类型', trigger: 'change' }
        ],
        businessArea: [
          { required: true, message: '请选择业务领域', trigger: 'change' }
        ],
        businessFunctions: [
          { required: false, message: '请选择业务功能', trigger: 'change', type: 'array' }
        ],
        physicalSubsystem: [
          { required: true, message: '请选择物理子系统', trigger: 'change' }
        ],
        businessScenarios: [
          { required: true, message: '请选择物理子系统', trigger: 'change' }
        ]
      }

    }
  },
  computed: {
    btnDisabled () {
      return this.formValidate.businessArea == '' || this.formValidate.businessFunctions.length == 0 || this.formValidate.physicalSubsystem == ''
    }
  },
  watch: {
    name: {
      handler (val, oldVal) { /* ... */ },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }

  },
  created () {

  },
  mounted () {

  },
  beforeDestroy () {}
}
</script>
<style scoped src='../common.css'>
</style>

<style scoped>
.normalization{
  text-align: left;
}

</style>
