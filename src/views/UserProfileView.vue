<template>
  <ContentField>
    <div class="row">
      <div class="col-3">
        <Info :user="user" @follow="follow" @unfollow="unfollow"/>
        <Write v-if="is_me" @post_a_post="post_a_post"/>
      </div>
      <div class="col-9">
        <Posts :posts="posts"/>
      </div>
    </div>
  </ContentField>
</template>

<script>
import ContentField from '@/components/ContentField.vue';
import Info from '@/components/UserProfile/Info.vue';
import Posts from '@/components/UserProfile/Posts.vue';
import Write from '@/components/UserProfile/Write.vue'
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import $ from 'jquery';
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "UserProfile",
  components: { ContentField, Info, Posts, Write },
  setup() {
    const userId = parseInt(useRoute().params.userId);
    const route = useRoute();
    const user = reactive({});
    const posts = reactive({});
    const store = useStore();

    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
      type: "get",
      data: {
        user_id: userId,
      },
      headers: {
        'Authorization': 'Bearer ' + store.state.user.access,
      },
      success(resp) {
        user.id = resp.id;
        user.username = resp.username;
        user.photo = resp.photo;
        user.followerCount = resp.followerCount;
        user.isFollowed = resp.isFollowed;
      },
    });

    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/myspace/post/",
      type: "get",
      data: {
        user_id: userId,
      },
      headers: {
        'Authorization': 'Bearer ' + store.state.user.access,
      },
      success(resp) {
        posts.posts = resp;
      }
    });

    const follow = () => {
      if (user.isFollowed) return;
      user.isFollowed = true;
      user.followerCount ++;
    }

    const unfollow = () => {
      if (!user.isFollowed) return;
      user.isFollowed = false;
      user.followerCount --;
    }

    const post_a_post = (postContent) => {
      if (postContent !== "") {
        posts.count ++;
        posts.posts.unshift({
          id: posts.count,
          authorId: 1,
          content: postContent
        })
      }
    }

    const is_me = computed(() => userId === store.state.user.id);

    return { user, follow, unfollow, posts, post_a_post, is_me }
  }
}
</script>

<style></style>