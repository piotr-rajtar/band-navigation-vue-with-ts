<template>
    <nav>
        <ul>
            <menu-item v-for="dataItem in data" :key="dataItem.id" v-bind="dataItem" />
        </ul>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuItem from './MenuItem.vue';
import { Getter } from 'vuex-class';

@Component({
    components: {
        MenuItem,
    }
})
export default class SideMenu extends Vue {
    @Getter('bandTree') data!: Array<object>
    
}
</script>