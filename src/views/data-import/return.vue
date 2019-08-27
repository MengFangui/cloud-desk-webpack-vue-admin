<!--  -->
<template>
    <div :style="{background: '#fff'}">
        <Button icon="md-return-left" class='v-return-left'>返回</Button>
    </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {
    name: {
      handler (val, oldVal) {
        /* ... */
      },
      deep: true,
      immediate: true
    }
  },
  methods: {},
  created () {},
  mounted () {},
  beforeDestroy () {}
}
</script>
<style>
.v-return-left {
  float: right;
  margin: 10px 10px 10px 0;
}
</style>
