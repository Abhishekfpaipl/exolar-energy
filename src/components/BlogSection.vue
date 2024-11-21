<template>
    <div>
        <h1>My Blog Posts</h1>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <h2>{{ post.title }}</h2>
                <p v-html="post.content"></p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [],
        };
    },
    async created() {
        const apiKey = 'AIzaSyB9GyVaW4PVIwRGWunb7lSx5BgTx-hd2q4';
        const blogId = '6475577164886193723';
        const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.posts = data.items || [];
        } catch (error) {
            console.error('Error fetching blog posts:', error);
        }
    },
};
</script>