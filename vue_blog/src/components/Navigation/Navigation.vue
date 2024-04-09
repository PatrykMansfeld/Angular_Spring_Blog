<template>
    <nav>
        <ul class="nav-list">
            <li class="nav-list-element"><router-link to="/">Home</router-link></li>
            <li class="nav-list-element"><router-link to="/blog">Posts</router-link></li>
            <li class="nav-list-element"><router-link to="/about">About</router-link></li>
        </ul>
    </nav>
    <router-view />
</template>


<style lang="css" scoped>
nav {
    background-color: #333;
    color: white;
    padding: 10px;
    -webkit-box-shadow: 0px 10px 25px 5px rgb(255, 255, 255);
    -moz-box-shadow: 0px 10px 25px 5px rgb(255, 255, 255);
    box-shadow: 0px 10px 25px 5px rgb(255, 255, 255);
}

.nav-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

}

.nav-list-element {
    list-style-type: none;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

.nav-list-element a {
    text-decoration: none;
}

.nav-list-element a:visited {
    color: inherit;
}
</style>

<script>
export default {
    name: 'Navigation',
}
</script>
