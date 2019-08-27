<!--  -->
<template>
<div class='v-header'>
  <div class="v-header-title">
    <p>
      Architectural Visualization
    </p>
    <p>
      架构可视化工具
    </p>
  </div>
  <user :userName='userName'>
  </user>
</div>
</template>

<script>
import user from '../main/user/index.js'
export default {
  components: { user },
  data () {
    return {
      userName: 'mfg'
    }
  },
  computed: {
  },
  watch: {
    name: {
      handler (val, oldVal) { /* ... */ },
      deep: true,
      immediate: true
    }
  },
  methods: {

  },
  created () {

  },
  mounted () {

  },
  beforeDestroy () {}
}
</script>
<style scoped>
.v-header{
  padding: 0 16px;
  background-color: #0084F9;
  clear: both;
}
.v-header-title{
  color:#fff;
  font-size: 14px;
  font-weight: bold;
  float: left;
}
.v-header-title p{
  line-height: 31px;
}
</style>
