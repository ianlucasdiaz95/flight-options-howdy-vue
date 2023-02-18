import { defineStore } from 'pinia'
import serverApi from '../api/server.api'

export const useFlightOptionsStore = defineStore('flightOptions', {
    state: () => ({ 
        options: [], 
        carriers: [],
        loaded: false,
        error: false
    }),
    getters: {
        isLoading: (state) => !state.loaded,
        hasError: (state) => state.error,
    },
    actions: {
        async getFlightOptions() {
            try {

                const { data } = await serverApi.get('/sprout/example');
                this.options = data.options;
                this.carriers = data.carriers;
                this.loaded = true;

            } catch (error) {

                this.loaded = false;
                this.error = true;

                console.log(error);

            }
        },
    },
})
