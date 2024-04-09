<template>
    <div>
        <ul>
            <li v-for="blog in blogs" :key="blog.id">{{ blog.skillName }}</li>
            <li v-for="blog in blogs" :key="blog.id">{{ blog.expiriecneLevel }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogs: [],
            loading: false,
            error: null
        };
    },
    mounted() {
        this.fetchBlogs();
    },
    methods: {
        fetchBlogs() {
            this.loading = true;
            fetch('http://localhost:3000/api/skills')
                .then(response => response.json())
                .then(data => {
                    this.blogs = data;
                    this.loading = false;
                })
                .catch(error => {
                    this.error = error;
                    this.loading = false;
                });
        }
    }
};
</script>

<style>
/* Your component's styles here */
</style>