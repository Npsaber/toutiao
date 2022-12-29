<template>
  <div class="login-container">
<!--  导航栏-->
  <van-nav-bar class="page-nav-bar"  title="登录"  @click-left="onClickLeft"/>
<!--  导航栏-->
<!--  表单-->
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="user.mobile"
        name="手机号"
        placeholder="请输入手机号"
      >
        <template #left-icon>
          <i slots="left-icon" class="toutiao toutiao-shouji" placeholder="请输入手机号"></i>
        </template>
      </van-field>

      <van-field
        v-model="user.code"
        name="验证码"
        placeholder="请输入短信验证码"
      >
        <template #left-icon>
          <i slots="left-icon" class="toutiao toutiao-yanzhengma" placeholder="请输入短信验证码"></i>
        </template>
        <template #button>
          <van-button class="send-sms-btn" size="small" round type="default">发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div class="login-btn-wrap">
      <van-button class="login-btn" block type="primary" native-type="submit">
        登录
      </van-button>
    </div>
  </van-form>
</div>
<!--  表单-->
</template>

<script>
import { NavBar, Form, Field, CellGroup, Button } from 'vant'
// import { login } from '@/api/user'

export default {
  name: 'LoginIndex',
  components: {
    [NavBar.name]: NavBar,
    [Form.name]: Form,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button
  },
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onSubmit () {
      console.log('asdasd')
      // // 1.获取表单数据
      // const user = this.user
      // const res = await login(user)
      // // TODO：2.表单验证
      // try {
      //   console.log('登录成功', res)
      // } catch (err) {
      //   if (err.response.status === 502) {
      //     console.log('登录失败', res)
      //   } else {
      //     console.log('登录失败', res)
      //   }
      // }
    }
  }

}
</script>
<style scoped lang="less">
.login-container {
  .toutiao {
    font-size: 17px;
  }

  .send-sms-btn {
    background-color: #ededed;
    width: 80px;
    font-size:10px;
    color:#666;
  }

  .login-btn-wrap{
    padding: 53px 33px;
    border: none;
    .login-btn{
      background-color: #6db4fb;
    }
  }
}
</style>
