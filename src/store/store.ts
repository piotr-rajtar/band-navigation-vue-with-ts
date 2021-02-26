import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './typings/types';

import Genre from './modules/genres';
import Band from './modules/bands';
import Musician from './modules/musicians';

import { StoreUnit } from './typings/types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    modules: {
        Genre,
        Band,
        Musician,
    },
    getters: {
        bandTree() {
            const treeData = Genre.state.genres.map((genre: StoreUnit) => {
                return {
                    id: genre.id,
                    name: genre.name,
                    url: `/${genre.name}`,
                    childrens: Band.state.bands.filter((band: StoreUnit) => genre.bands?.includes(band.id))
                    .map((band: StoreUnit) => {
                        return {
                            id: band.id,
                            name: band.name,
                            url: `/${genre.name}/${band.id}`,
                            childrens: Musician.state.musicians.filter((musician: StoreUnit) => band.musicians?.includes(musician.id))
                            .map((musician: StoreUnit) => {
                                return {
                                    id: musician.id,
                                    name: musician.name,
                                    url: `/${genre.name}/${band.id}/${musician.id}`,
                                };
                            }),
                        };
                    }),
                };
            });

            return treeData;
        }
    },
};

export default new Vuex.Store<RootState>(store);