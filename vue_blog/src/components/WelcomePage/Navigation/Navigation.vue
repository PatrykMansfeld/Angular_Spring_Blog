<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/blog">Posts</router-link></li>
            <li><router-link to="/about">About</router-link></li>
        </ul>
    </nav>
    <router-view/>
</template>


<style scoped>
nav {
    background-color: #333;
    color: white;
}
li {
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: row;
}

</style>

<script>
export default {
    name: 'Navigation',
}
</script>
