<template>
  <ContentField>
    <div class="row">
      <div class="col-3">
        <Info :user="user" @follow="follow" @unfollow="unfollow"/>
        <Write @post_a_post="post_a_post"/>
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

export default {
  name: "UserProfile",
  components: { ContentField, Info, Posts, Write },
  setup() {
    const userId = useRoute().params.userId;

    const user = reactive({
      id: 1,
      username: "jinshengbo",
      followerCount: 10,
      isFollowed: false,
    })

    const posts = reactive({
      count: 3,
      posts: [
        {
          id: 1,
          authorId: 1,
          content: "post1"
        },
        {
          id: 2,
          authorId: 1,
          content: "post2"
        },
        {
          id: 3,
          authorId: 1,
          content: "post3"
        }
      ]
    })

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

    return { user, follow, unfollow, posts, post_a_post }
  }
}
</script>

<style></style>