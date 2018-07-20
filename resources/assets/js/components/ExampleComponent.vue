<template>
    <div class="container">
        <div class="notification">
            <i class="fa fa-plane" aria-hidden="true"></i>Welcome to Laravel project with Vue + Bulma<br>
            <router-link to="/profile">
                <a>プロフィールページへ</a>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
