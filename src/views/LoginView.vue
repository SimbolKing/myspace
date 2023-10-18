<template>
  <ContentField>
    <div class="row justify-content-center">
      <div class="col-3">
        <form @submit.prevent="login">
          <div class="mb-3">
            <label class="form-label" for="username">用户名</label>
            <input v-model="username" id="username" class="form-control" type="text">
          </div>
          <div class="mb-3">
            <label class="form-label" for="password">密码</label>
            <input v-model="password" id="password" class="form-control" type="password">
          </div>
          <div class="error_message">{{error_message}}</div>
          <button class="btn btn-primary" type="submit">登录</button>
        </form>
      </div>
    </div>
  </ContentField>
</template>

<script>
import ContentField from '@/components/ContentField.vue';
import {ref} from "vue";

export default {
  name: "UserList",
  components: {ContentField},
  setup() {
    let username = ref('');
    let password = ref('');
    let error_message = ref('');

    const login = () => {
      console.log(username.value, password.value);
    }

    return {username, password, error_message, login}
  }
}
</script>

<style scoped>
  button {
    width: 100%;
  }
  .error_message {
    color: red;
  }
</style>