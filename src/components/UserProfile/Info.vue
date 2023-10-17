<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                <img class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/211757_lg_2d860efa13.jpg" alt="">
            </div>
            <div class="col-9">
                <div class="username">{{ user.username }}</div>
                <div class="fans">粉丝数: {{ user.followerCount }}</div>
                <button @click="follow" v-if="!user.isFollowed" type="button" class="btn btn-primary btn-sm">+关注</button>
                <button @click="unfollow" v-if="user.isFollowed" type="button" class="btn btn-secondary btn-sm">已关注</button>
            </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    props: ['user'],
    setup(props, context) {
        const follow = () => {
            context.emit('follow');
        }
        const unfollow = () => {
            context.emit('unfollow');
        }

        return { follow, unfollow }
    }
}
</script>

<style scoped>
img {
    border-radius: 50%;
}

.username {
    font-weight: bold;
}

.fans {
    font-size: 12px;
    color: gray;
}

button {
    padding: 2px 4px;
    font-size: 12px;
}
</style>