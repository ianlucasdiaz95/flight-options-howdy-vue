<template>
   <div class="journey">
        <div class="journey__airline">
            
            <template v-if="getAirlineImage(airlineCode)">
                <div class="journey__airlineImage">
                    <img :src="getAirlineImage(airlineCode)" :alt="`${airlineCode} - ${airlineName}`">
                </div>
            </template>
            <template v-else>
                {{airlineCode}}
            </template>
            
        </div>
        <div class="journey__from">
            <span class="journey__fromPlace">
                {{originPlace}}
            </span>
            <span class="journey__fromTime">
                {{departureTime}}
            </span>
        </div>
        <div class="journey__duration">
            {{airlineName}}
            <hr>
            <div class="journey__durationInfo">
                <span class="duration">{{duration}}</span>
                -
                <span class="stops">{{stops}}</span>
            </div>
        </div>
        <div class="journey__to">
            <span class="journey__toPlace">
                {{destinationPlace}}
            </span>
            <span class="journey__toTime">
                {{arrivalTime}}
            </span>
        </div>
    </div><!-- journey -->
</template>

<script setup>
import { computed } from 'vue';
import useFlightOptions from '../composables/useFlightOptions'
import moment from 'moment';

const props = defineProps({
    journey: Object
})

const {
    carriers,
    getAirlineImage
} = useFlightOptions();

const airlineCode = computed(() => {
    return props.journey.segments[0].marketingAirline
});

const originPlace = computed(() => {
    return props.journey.originPlace.cityCode;
});

const departureTime = computed(() => {
    return moment(props.journey.departureDateTime).format('MMM D h:mm A');
});

const destinationPlace = computed(() => {
    return props.journey.destinationPlace.cityCode;
});

const arrivalTime = computed(() => {
    return moment(props.journey.arrivalDateTime).format('MMM D h:mm A');
});

const duration = computed(() => {
    const duration = moment(props.journey.arrivalDateTime).diff(props.journey.departureDateTime,'');
    return moment.utc(duration).format('h[h]m[min]');
});

const stops = computed(() => {
    
    return props.journey.segments.length == 1 ? 'nonstop' : props.journey.segments.length == 2 ? `${props.journey.segments.length - 1} stop` : `${props.journey.segments.length - 1} stops`;
});

const airlineName = computed(() => {
    return carriers.value?.[airlineCode.value];
});

</script>

<style lang="scss" scoped>

.journey{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 20px 35px;
    border-radius: 15px;
    background: #fdfdfd;
    margin-bottom: 6px;

    &:last-child{
        margin-bottom: 0;
    }

    &__airline{
        width: 100%;
        max-width: 60px;
        &Image{
            overflow: hidden;
            border-radius: 5px;
            box-shadow: 0px 1px 7px rgba(0,0,0,0.09);
            img{
                vertical-align: top;
                width: 100%;
            }
        }
        
    }


    &__from, &__to{

        &Place{
            display: block;
            font-weight: bold;
        }

        &Time{
            font-size: 0.8em;
        }
    }

    &__to{
        text-align: right;
    }

    &__duration{
        text-align: center;
        min-width: 160px;
        font-size: 14px;
        opacity: 0.7;

        hr{
            border-radius: 5px;
            height: 4px;
            border: 0;
            background: #D2D5DB;
            margin: 5px 0;
        }
    }
}

</style>