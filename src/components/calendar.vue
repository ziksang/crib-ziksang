<template>
    <div>
        <input type="text" v-model='chooseTime'>
        <button @click='calendarShow=true'>打开日历</button>
        <calendar :calendarShow.sync='calendarShow' :startTime = 'startTime' :minTime = 'minTime' :maxTime='maxTime' :chooseTime.sync = "chooseTime"></calendar>
    </div>
</template>

<script>
import Calendar from '@/crib-zk/components/calendar/index.vue'
export default {
    components: {
        Calendar
    },
    data() {
        return {
            calendarShow : false,
            startTime: '2017-07-13',
            minTime : '2017-04-04',
            maxTime : '2017-10-08',
            chooseTime : ""
        }
    }
}
</script>

