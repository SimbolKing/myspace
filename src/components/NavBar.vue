<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <router-link :to="{name: 'Home'}" class="navbar-brand">MySpace</router-link>
      <button aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"
              data-bs-target="#navbarText" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarText" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{name: 'Home'}" class="nav-link">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'UserProfile', params: {userId: 3}}" class="nav-link">用户动态</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'UserList'}" class="nav-link">好友列表</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{name: 'Login'}" class="nav-link">登录</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Register'}" class="nav-link">注册</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style>

</style>