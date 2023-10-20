<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import dayjs from 'dayjs'
const user = useUserStore()
import { useRouter } from 'vue-router'
const $router = useRouter()
const login = async () => {
  user.setToken('' + dayjs().format())
  $router.replace('/').catch(() => {})
}

import { reactive, ref, unref } from 'vue'

// do not use same name with ref
const form = reactive({
  userName: '',
  password: ''
})

import type { FormRules } from 'element-plus'

interface RuleForm {
  userName: string
  password: string
}

const rules = reactive<FormRules<RuleForm>>({
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 8, max: 20, message: '密码必须8-20位', trigger: 'blur' }
  ]
})

const loginformRef = ref()
const submitForm = async () => {
  const form = unref(loginformRef)
  if (!form) return
  await (form as any).validate((valid: any, fields: any) => {
    if (valid) {
      login()
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <div class="login">
    <div class="login_Wrap">
      <h1 class="yn-tc login_title yn-mb20">
        <strong>wzy-admin</strong>
      </h1>
      <div class="login_description">
        <p>科技是第一生产力！</p>
      </div>
      <div class="login_form">
        <div class="login_form_bottom">
          <el-form
            ref="loginformRef"
            :rules="rules"
            :model="form"
            label-width="0"
            label-position="left"
          >
            <el-form-item label="" prop="userName" class="yn-mb40">
              <el-input placeholder="用户名" size="large" v-model="form.userName" />
            </el-form-item>
            <el-form-item label="" prop="password" class="yn-mb40">
              <el-input placeholder="密码" type="password" size="large" v-model="form.password" />
            </el-form-item>
            <el-form-item>
              <el-button class="yn-w" size="large" type="primary" @click="submitForm()">
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  background: #f0f2f5;
  width: 100%;
  height: 100%;
}
.yn-mb20 {
  margin-bottom: 20px;
}
.yn-mb40 {
  margin-bottom: 40px;
}
.yn-tc {
  text-align: center;
}
.yn-w {
  width: 100%;
}

.login_Wrap {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 20%;
  color: #000;
  width: 100%;
  max-width: 500px;
}
.login_title {
  font-size: 35px;
  font-weight: 500;
}
.login_description {
  opacity: 0.8;
  margin-bottom: 30px;
  text-align: center;
  font-size: 16px;
}
.login_form {
  background: #fff;
  border-radius: 5px;
  .login_form_bottom {
    border-radius: 0 0 5px 5px;
    // background: #eee;
    padding: 10% 5%;
  }
}
</style>
