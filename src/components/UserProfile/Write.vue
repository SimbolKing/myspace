<template>
  <div class="card edit-field write-field">
    <div class="card-body">
      <label class="form-label" for="edit-post">发生什么事情了？</label>
      <textarea id="edit-post" v-model="postContent" class="form-control" name="" rows="3"></textarea>
      <button class="btn btn-primary btn-sm" type="button" @click="post_a_post">发帖</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(props, context) {
    let postContent = ref("");

    const post_a_post = () => {
      context.emit('post_a_post', postContent.value),
          postContent.value = ""
    }

    return { postContent, post_a_post }
  }
}
</script>

<style scoped>
.write-field {
  margin-top: 25px;
}
</style>