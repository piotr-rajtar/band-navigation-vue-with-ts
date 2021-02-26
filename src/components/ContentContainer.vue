<template>
    <section class="content">
        <h1>Fixed Header</h1>
        <h2>Genre</h2>
        <p>{{ genreDisplay }}</p>
        <h2>Band</h2>
        <p>{{ bandDisplay }}</p>
        <h2>Musician</h2>
        <p>{{ musicianDisplay }}</p>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ContentContainer extends Vue {
    @Prop() readonly genre!: string
    @Prop() readonly band!: string
    @Prop() readonly musician!: string

    get genreDisplay(): string {
        return this.genre? this.genre : '';
    }

    get bandDisplay(): string {
        return this.band? this.band : '';
    }

    get musicianDisplay(): string {
        return this.musician? this.musician : '';
    }
}
</script>

<style scoped>
h1, h2, p {
    flex: 100%;
    text-align: center;
}
</style>