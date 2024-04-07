<template>
    <div>
        <!-- Fetch data from API -->
        <div v-if="data">
            <h2>Data from API:</h2>
            <p>{{ data }}</p>
        </div>

        <!-- Send data to API -->
        <input v-model="inputData" type="text" placeholder="Enter data">
        <button @click="sendData">Send Data</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: null,
            inputData: ''
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            fetch('http://localhost:3000/api/skills')
                .then(response => response.json())
                .then(data => {
                    this.data = data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        sendData() {
            fetch('http://localhost:3000/api/skills', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data: this.inputData })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
};
</script>