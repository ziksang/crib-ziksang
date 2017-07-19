<template>
    <div class="weui-cell__ft">
        <input class="weui-switch" :class='[ff?className:""]' type="checkbox" :disabled="disabled" v-model="currentValue" />
    </div>
</template>


<script>
export default {
    created() {
        var style = document.createElement("style");
        if (this.ff) {
            if (this.ff.indexOf('#') >= 0) {
                this.className = "a" + this.ff.substr(1)
            }
        }
        var text = document.createTextNode(`.${this.className}:checked{background-color:${this.ff};border-color:${this.ff}}`);

        style.appendChild(text);

        document.body.appendChild(style);
    },
    props: {
            ff: {
                type: String,
                default: ''
            },
            value: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
    },
    data () {
        return {
           currentValue : this.value
        }
    },
    watch : {
        currentValue (val) {
            console.log(1)
            this.$emit('update:value',val)
        }
    }
}
</script>

<style lang='less'>
.weui-cell__ft {
    text-align: right;
    color: #999;
}

.weui-switch:checked {
    border-color: #ffe26d;
    background-color: #ffe26d;
}

.weui-switch {
    -webkit-appearance: none;
    appearance: none;
}

.weui-switch {
    position: relative;
    width: 52px;
    height: 32px;
    border: 1px solid #DFDFDF;
    outline: 0;
    border-radius: 16px;
    box-sizing: border-box;
    background-color: #DFDFDF;
    -webkit-transition: background-color 0.1s, border 0.1s;
    transition: background-color 0.1s, border 0.1s;
}

.weui-switch:checked:before {
    -webkit-transform: scale(0);
    transform: scale(0);
}

.weui-switch:before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 30px;
    border-radius: 15px;
    background-color: #FDFDFD;
    -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
}

.weui-switch:checked:after {
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
}

.weui-switch:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #FFFFFF;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
}
</style>

