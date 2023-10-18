<template>
  <ContentField>
    <div v-for="user in users" :key="user.id" class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-1">
            <img :src="user.photo" alt="" class="img-fluid">
          </div>
          <div class="col-11">
            <div class="username">{{ user.username }}</div>
            <div class="follower-count">{{ user.followerCount }}</div>
          </div>
        </div>
      </div>
    </div>
  </ContentField>
</template>

<script>
import ContentField from '@/components/ContentField.vue';
import $ from 'jquery';
import { ref } from 'vue';

export default {
  name: "UserList",
  components: { ContentField },
  setup() {
    const users = ref([]);
    $.ajax({
      url: 'https://app165.acapp.acwing.com.cn/myspace/userlist/',
      type: 'get',
      success(resp) {
        users.value = resp;
      }
    })

    return { users }
  }
}
</script>

<style scoped>
img {
  border-radius: 50%;
}

.username {
  font-weight: bold;
  height: 50%;
}

.follower-count {
  font-size: 12px;
  color: gray;
  height: 50%;
}

.card {
  margin-bottom: 20px;
  cursor: pointer;
}

.card:hover {
  box-shadow: 2px 2px 10px lightgray;
  transition: 250ms;
}
</style>