<script>
</script>

<template>
    <div class="welcomePage_Component">
        <h1>Welcome to The.Blog</h1>
        <div class="wave"></div>
    </div>
</template>

<style scoped>
.welcomePage_Component {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

@keyframes wave-animation {
    0% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(30deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

.wave {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: blue;
    animation: wave-animation 2s infinite;
}
</style>