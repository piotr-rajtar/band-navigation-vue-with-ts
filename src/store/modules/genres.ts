import { VuexModule, Module } from 'vuex-module-decorators';
import { StoreUnit } from '../typings/types';

@Module({ namespaced: true, name: 'genre' })
class Genre extends VuexModule {
    genres: Array<StoreUnit> = [
        {
            id: 1,
            name: 'rock',
            bands: [1,2]
        },
        {
            id: 2,
            name: 'pop',
            bands: [3,4]
        },
    ];
}

export default Genre;