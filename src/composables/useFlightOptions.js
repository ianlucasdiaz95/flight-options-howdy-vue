
import { ref, computed, onMounted } from 'vue';
import { useFlightOptionsStore } from '../store/flightOptions';

const useFlightOptions = () => {
    const flightOptionsStore = useFlightOptionsStore();

    function getAirlineImage(airlineCode){
        switch (airlineCode) {
            case 'AA':
                return new URL('../assets/american.svg', import.meta.url).href
            case 'AC':
                return new URL('../assets/aircanada.svg', import.meta.url).href
            case 'AM':
                return new URL('../assets/aeromexico.svg', import.meta.url).href
            case 'AS':
                return new URL('../assets/allaska.svg', import.meta.url).href
            case 'DL':
                return new URL('../assets/delta.svg', import.meta.url).href
            case 'UA':
                return new URL('../assets/united.svg', import.meta.url).href
            default:
                return false;
        }
    }

    onMounted( async () => {
        if (!flightOptionsStore.loaded){
            await flightOptionsStore.getFlightOptions();
        }
    })

    return {

        //Computed
        options: computed(() => flightOptionsStore.options ),
        carriers: computed(() => flightOptionsStore.carriers ),
        isLoading: computed(() => flightOptionsStore.isLoading),
        hasError: computed(() => flightOptionsStore.hasError),

        // Functions
        getAirlineImage

    }
}

export default useFlightOptions;