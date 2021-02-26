import {VuexModule, Module } from 'vuex-module-decorators';
import { StoreUnit } from '../typings/types';

@Module({ namespaced: true, name: 'musician' })
class Musician extends VuexModule {
    musicians: Array<StoreUnit> = [
        {
            id: 1,
            name: 'rock guy1',
        },
        {
            id: 2,
            name: 'rock guy2',
        },
        {
            id: 3,
            name: 'rock guy3',
        },
        {
            id: 4,
            name: 'rock guy4',
        },
        {
            id: 5,
            name: 'pop guy1',
        },
        {
            id: 6,
            name: 'pop guy2',
        },
        {
            id: 7,
            name: 'pop guy3',
        },
        {
            id: 8,
            name: 'pop guy4',
        },
    ];
}

export default Musician;