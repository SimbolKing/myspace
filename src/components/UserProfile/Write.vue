<template>
  <div class="card edit-field write-field">
    <div class="card-body">
      <label class="form-label" for="edit-post">发生什么事情了？</label>
      <textarea v-model="postContent" class="form-control" name="" id="edit-post" rows="3"></textarea>
      <button @click="post_a_post" type="button" class="btn btn-primary btn-sm">发帖</button>
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