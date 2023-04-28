<template>
  <div class="container">
    <img class="background" src="https://api.cyrilstudio.top/bing/image.php" alt=""/>
    <div class="login_bg">
      <div class="login_wrap">
        <el-input class="username" v-model="username" size="large" placeholder="请输入账号" clearable/>
        <el-input class="password" v-model="password" size="large" placeholder="请输入密码" clearable/>
        <el-button class="login_btn" type="primary" size="large" color="#0000007F" @click="login">登录</el-button>
      </div>
    </div>

  </div>

</template>
<script>
import {ElMessage} from 'element-plus'

export default {
  data() {
    return {
      username: 'gzy',
      password: '123456',
    }
  },
  methods: {
    login() {
      if (this.username === '' || this.password === '') {
        ElMessage({
          message: '请输入账号和密码',
          type: 'warning',
        })
        return;
      }
      this.axios
          .post('http://127.0.0.1:8080/user/login', {
            "username": this.username,
            "password": this.password
          })
          .then(response => {
            ElMessage({
              message: '登录成功',
              type: 'success',
            })
            console.log(response.headers)
            // document.cookie = response.data['data']['token'];
          })
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

  .login_bg {
    width: 50%;
    height: 100%;
    background: #00000066;
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .login_wrap {
      display: flex;
      flex-direction: column;
      width: 200px;

      .password {
        margin: 10px 0 10px 0;
      }
    }
  }
}

</style>
