<!-- 常态化 -->
<template>
<div class='normalization'>
    <div class="data-import-title">
      <p>
        模板下载 <span>（请先选择文件类型、业务领域）</span>
      </p>
    </div>
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100" inline class="v-form">
        <FormItem label="文件类型" prop="fileType">
            <Select v-model="formValidate.fileType" placeholder="请选择文件类型">
                <Option value="1">业务场景</Option>
                <Option value="2">业务功能</Option>
                <Option value="3">发起端信息</Option>
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
        fileType: '',
        businessArea: ''
      },
      ruleValidate: {
        fileType: [
          { required: true, message: '请选择文件类型', trigger: 'change' }
        ],
        businessArea: [
          { required: true, message: '请选择业务领域', trigger: 'change' }
        ]
      }

    }
  },
  computed: {
    btnDisabled () {
      return this.formValidate.fileType == '' || this.formValidate.businessArea == ''
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
