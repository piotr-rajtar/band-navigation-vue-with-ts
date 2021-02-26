import { VuexModule, Module } from 'vuex-module-decorators';
import { StoreUnit } from '../typings/types';

@Module({ namespaced: true, name: 'band' })
class Band extends VuexModule {
    bands: Array<StoreUnit> = [
        {
            id: 1,
            name: 'rock band1',
            musicians: [1,2]
        },
        {
            id: 2,
            name: 'rock band2',
            musicians: [3,4]
        },
        {
            id: 3,
            name: 'pop band1',
            musicians: [5,6]
        },
        {
            id: 4,
            name: 'pop band2',
            musicians: [7,8]
        },
    ];
}

export default Band;