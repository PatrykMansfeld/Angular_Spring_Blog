<template>
    <div class="welcomePage_Component">
        <h1>Welcome to The.Blog</h1>
        <div class="text-animation">
            <span class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quibusdam autem rerum velit repellat earum repellendus, modi perspiciatis! Tempora sint ad facilis debitis consequatur ab omnis aspernatur necessitatibus! At, possimus.</span>
        </div>
    </div>
</template>

<style scoped>
.welcomePage_Component {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.text-animation {
    position: relative;
    overflow: hidden;
}

.text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    white-space: nowrap;
    animation: typing 4s steps(20) infinite;
    color: white;
}

@keyframes typing {
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
}
</style>
