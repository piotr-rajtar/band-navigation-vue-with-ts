<template>
    <li>
        <router-link :to="url">
            <span @click="setActive">{{name}}</span>
        </router-link>
        <ul v-show="isActive" v-if="childrens && childrens.length">
            <menu-item v-for="children in childrens" :key="children.id" v-bind="children" />
        </ul>
    </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class MenuItem extends Vue {
    @Prop() readonly name!: string
    @Prop() readonly childrens!: Array<object>
    @Prop() readonly url!: string

    private isActive: boolean = false;

    setActive() {
        this.isActive = !this.isActive;
    }
}
</script>