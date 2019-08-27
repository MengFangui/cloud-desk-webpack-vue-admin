<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick">
      {{ userName }}
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'User',
  props: {
    userName: {
      type: String,
      default: ''
    },
    messageUnreadCount: {
      type: Number,
      default: 0
    }
  },
  methods: {
    ...mapActions([
      'handleLogOut'
    ]),
    logout () {
      this.handleLogOut().then(() => {
        this.$router.push({
          name: 'login'
        })
      })
    },
    message () {
      this.$router.push({
        name: 'message_page'
      })
    },
    handleClick (name) {
      // switch (name) {
      //   case 'logout': this.logout()
      //     break
      //   case 'message': this.message()
      //     break
      // }
    }
  }
}
</script>
<style scoped>
.user-avator-dropdown {
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  float: right;
  color: #fff;
}
.user-avator-dropdown .ivu-badge-dot {
  top: 16px;
}

</style>
