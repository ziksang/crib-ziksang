<template>
        <div class="crib-search-bar" :class='[fixed?"crib-search-bar_fixed" : ""]'>
            <div class="crib-search-bar__form">
                <div class="crib-search-bar__box">
                    <i class="crib-icon-search"></i>
                    <input type="search" class="crib-search-bar__input" :placeholder="placeholder" v-model="value" ref="input" />
                    <a href="javascript:" class="crib-icon-clear" @click='clear' v-show='value.length>0 && isClear'></a>
                </div>
            </div>
            <a href="javascript:" class="crib-search-bar__cancel-btn" @click='submit' :style='[submitStyle]'>{{text}}</a>
        </div>
</template>

<script>
export default {
    props: {
        isClear : {
            type : Boolean,
            default : true 
        },
        fixed : {
          type : Boolean,
          default : false
        },
        submitStyle : Object,
        inputValue: {
            type: String,
            default: ""
        },
        text: {
            type: String,
            default: '搜索'
        },
        autoFocus: {
            type: Boolean,
            deafult: false
        },
        placeholder: {
            type: String,
            default: '请写入你的文字'
        }

    },
    data() {
        return {
            value: this.inputValue
        }

    },
    methods: {
        clear() {
            this.value = ''
        },
        submit() {
            this.$emit('on-submit')
        }
    },
    watch: {
        inputValue (val) {
           if(val == ''){
               this.value = ""
           }
        },
        value: {
            handler(val, oldvalue) {
                //当值改变的时候，触发事件
                this.$emit('update:inputValue', val)
                this.$emit('change-val')

            },
            immediate: true

        }
    },
    mounted() {
        this.autoFocus && this.$refs.input.focus()
    }
}
</script>

<style lang ='less'>
@import '../../styles/crib_ui/base/common.less';
@import '../../styles/crib_ui/mixin/setBorderLine.less';
@import '../../styles/crib_ui/icon/crib_icon_font.less';


input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
    display: none;
}

.crib-search-bar {
    position: relative;
    padding: 8px 10px;
    display: flex;
    box-sizing: border-box;
    background-color: @SearchBgColor;
    &:before {
        .setTopLine(#D7D6DC);
    }
    &:after {
        .setBottomLine(#D7D6DC);
    }
    &.crib-search-bar_focusing {
        .crib-search-bar__cancel-btn {
            display: block;
        }
        .crib-search-bar__label {
            display: none;
        }
    }
}
.crib-search-bar_fixed {
    width:100%;
    position:fixed;
    top:0;
    left:0;
}
.crib-search-bar__form {
    position: relative;
    flex: auto;
    background-color: #EFEFF4;
    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 200%;
        height: 200%;
        transform: scale(.5);
        transform-origin: 0 0;
        border-radius: 10px;
        border: 1px solid #E6E6EA;
        box-sizing: border-box;
        background: #FFFFFF;
    }
}

.crib-search-bar__box {
    position: relative;
    padding-left: 30px;
    padding-right: 30px;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    z-index: 1;
    .crib-search-bar__input {
        padding: 4px 0;
        width: 100%;
        height: 20/14em;
        border: 0;
        font-size: 14px;
        line-height: 20/14em;
        box-sizing: content-box;
        background: transparent;
        &:focus {
            outline: none;
        }
    }
    .crib-icon-search {
        position: absolute;
        left: 10px;
        top: 0;
        line-height: 28px;
    }
    .crib-icon-clear {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 10px;
        line-height: 28px;
    }
}
.crib-search-bar__cancel-btn {
    margin-left: 10px;
    line-height: 28px;
    color: #6e6e77;
    white-space: nowrap;
    text-decoration: none;
    -webkit-tap-highlight-color:rgba(255,0,0,0);
}
</style>


