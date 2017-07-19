<template>
    <div>
        <z-switch :ff='ff' :value.sync='value'></z-switch>
        <z-switch :ff='ss'></z-switch>
        <z-switch :ff='dd'></z-switch>
    </div>
</template>

<script>
import { ZSwitch } from 'crib-zk/libs/z-switch'
export default {
    data() {
        return {
            value: false,
            dd: '#791414',
            ff: "#291314",
            ss: "#f52d36"
        }

    },
    components: {
        ZSwitch
    },
    watch: {
        value(val) {
            console.log(val)
        }
    }
}
</script>
