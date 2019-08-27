<!-- 模板审核 -->
<template>
<div class='normalization'>
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100" inline class="v-form">
        <FormItem label="文件类型" prop="fileType">
            <Select v-model="formValidate.fileType">
                <Option value="1">业务场景</Option>
                <Option value="2">业务场景</Option>
                <Option value="3">发起端信息</Option>
                <Option value="4">交易路径</Option>
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
        <FormItem label="业务场景" prop="businessScene">
            <Select v-model="formValidate.businessScene" placeholder="请选择业务场景" multiple filterable :disabled='fileTypeDisabled'>
                <Option v-for="item in businessSceneList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <br>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">查询</Button>
             <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
    <div class="v-template-audit-table">
      <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">下载</Button>
            <Button type="success" size="small" style="margin-right: 5px" @click="show(index)">查看视图</Button>
            <Button type="success" size="small" style="margin-right: 5px" @click="show(index)">审核通过</Button>
            <Button type="error" size="small" @click="remove(index)">确认发布</Button>
        </template>
    </Table>
    <Page :total="pageTotal" show-total on-change='pageChange' class="v-page"/>
    </div>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      formValidate: {
        fileType: '',
        businessArea: '',
        businessScene: ''
      },
      businessSceneList: [
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
      ruleValidate: {
        fileType: [
          { required: true, message: '请选择文件类型', trigger: 'change' }
        ],
        businessArea: [
          { required: true, message: '请选择业务领域', trigger: 'change' }
        ],
        businessScene: [
          { required: true, message: '请选择业务场景', trigger: 'change' }
        ]
      },
      columns12: [
        {
          title: '文件名',
          key: 'filename'
        },
        {
          title: '提交日期',
          key: 'dateSubmission'
        },
        {
          title: '提交人',
          key: 'submitter'
        },
        {
          title: 'Action',
          slot: 'action',
          width: 300,
          align: 'center'
        }
      ],
      data6: [
        {
          filename: 'John Brown',
          dateSubmission: 18,
          submitter: 'New'
        },
        {
          filename: 'Jim Green',
          dateSubmission: 24,
          submitter: 'London'
        },
        {
          filename: 'Joe Black',
          dateSubmission: 30,
          submitter: 'Sydne'
        },
        {
          filename: 'Jon Snow',
          dateSubmission: 26,
          addrsubmitteress: 'Ottawa'
        },
        {
          filename: 'John Brown',
          dateSubmission: 18,
          submitter: 'New'
        },
        {
          filename: 'Jim Green',
          dateSubmission: 24,
          submitter: 'London'
        },
        {
          filename: 'Joe Black',
          dateSubmission: 30,
          submitter: 'Sydne'
        },
        {
          filename: 'Jon Snow',
          dateSubmission: 26,
          addrsubmitteress: 'Ottawa'
        }
      ],
      pageTotal: 8
    }
  },
  computed: {
    fileTypeDisabled () {
      return this.formValidate.fileType == '1' || this.formValidate.fileType == '2' || this.formValidate.fileType == '3'
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
    },
    pageChange (page) {
      console.log(page, '88')
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
.v-template-audit-table{
  margin: 16px 0;
  clear: both;
}
.v-page{
  margin-top: 16px;
  float: right;
}
</style>
