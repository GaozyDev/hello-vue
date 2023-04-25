<template>
  <div class="container">
    <img class="background" src="https://api.cyrilstudio.top/bing/image.php" alt=""/>
    <div class="user_wrap">
      <div v-if="isLogin">
        <div class="user" @click="showUserDialog()">
          <div class="username">Gzy</div>
          <arrowIconIcon class="user_icon"/>
        </div>
        <div class="user_dialog" v-if="isShowUserDialog">
          <div class="btn">退出登录</div>
        </div>
      </div>
      <div v-else class="login" @click="goLoginPage()">
        登录
      </div>
    </div>
  </div>
</template>

<script>
import arrowIconIcon from '../../../image/svg/IconArrowWhite.vue'

export default {
  components: {
    arrowIconIcon,
  },
  data() {
    return {
      isLogin: false,
      isShowUserDialog: false
    }
  },
  methods: {
    showUserDialog() {
      this.isShowUserDialog = !this.isShowUserDialog;
    },
    goLoginPage() {
      this.$router.push('/login')
    },
  }
}
</script>

<style lang="less" scoped>

.container {
  width: 100%;
  height: 100%;
  position: absolute;

  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }

  .user_wrap {
    position: absolute;
    right: 0;
    margin: 10px 15px 0 0;
    display: flex;
    flex-direction: column;
    align-items: end;

    .user {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #FFFFFFCC;
      fill: #FFFFFFCC;
      font-size: 18px;

      .user_icon {
        width: 18px;
        height: 18px;
        margin-left: 4px;
      }
    }

    .user:hover {
      color: #FFFFFF;
      fill: #FFFFFF;
    }

    .user_dialog {
      border-radius: 30px;
      background: #0000007F;
      padding: 5px 10px;

      .btn {
        color: #FFFFFF;
      }
    }

    .login {
      color: #FFFFFFCC;
    }

    .login:hover {
      color: #FFFFFF;
    }
  }
}

</style>
