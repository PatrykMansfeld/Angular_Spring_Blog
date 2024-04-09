<template>
    <div>
        <form @submit.prevent="submitData">
            <label for="title">Title:</label>
            <input type="text" id="skillName" v-model="skillName" required>
            <br>
            <label for="content">Content:</label>
            <textarea id="content" v-model="expiriecneLevel" required></textarea>
            <br>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            skillName: '',
            expiriecneLevel: ''
        };
    },
    methods: {
        async submitData() {
            try {
                const response = await fetch('http://localhost:3000/api/skills', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        skillName: this.skillName,
                        expiriecneLevel: this.expiriecneLevel
                    })
                });

                if (response.ok) {
                    // Data successfully posted
                    console.log('Data posted successfully');
                } else {
                    // Error occurred while posting data
                    console.error('Failed to post data');
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        }
    }
};
</script>