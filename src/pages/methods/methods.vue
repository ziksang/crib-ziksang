<template>
    <div class="methods">
        <ul class='methods-box' v-if='methodsProps.length>0'>
            <li class="props-title">props</li>
            <ul class="props-desc-title">
                <li>名称</li>
                <li>参数类型</li>
                <li>默认参数</li>
                <li>参数描述</li>
            </ul>
            <ul class="props-desc" v-for='item in methodsProps'>
                <li>{{item.name}}</li>
                <li>{{item.type}}</li>
                <li>{{item.default}}</li>
                <li>{{item.description}}</li>
            </ul>
        </ul>
    
        <ul class='methods-box' v-if='methodsSolt.length>0'>
            <li class="props-title">solt</li>
            <ul class="props-desc-title">
                <li>名称</li>
                <li>参数类型</li>
                <li>默认参数</li>
                <li>参数描述</li>
            </ul>
            <ul class="props-desc" v-for='item in methodsSolt'>
                <li>{{item.name}}</li>
                <li>{{item.type}}</li>
                <li>{{item.default}}</li>
                <li>{{item.description}}</li>
            </ul>
        </ul>
    
        <ul class='methods-box' v-if='methodsEvents.length>0'>
            <li class="props-title">events</li>
            <ul class="props-desc-title">
                <li>名称</li>
                <li>参数类型</li>
                <li>默认参数</li>
                <li>参数描述</li>
            </ul>
            <ul class="props-desc" v-for='item in methodsEvents'>
                <li>{{item.name}}</li>
                <li>{{item.type}}</li>
                <li>{{item.default}}</li>
                <li>{{item.description}}</li>
            </ul>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        methodsProps: Array,
        methodsSolt: Array,
        methodsEvents: Array
    }
}
</script>

<style lang='less'>
.methods {
    color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    background: #000;
    z-index: 2000;
    .methods-box {
        margin-bottom: 20px;
    }
    .props-title {
        font-size: 19px;
        background: #000;
    }
    .props-desc,
    .props-desc-title {
        margin-top: 10px;
        overflow: hidden;
        background: #fff;
        li {
            background: #fff;
            float: left;
            padding: 10px 0;
            display: inline-block;
            width: 25%;
            word-break: break-all;
            color: #666666;
            text-align: center;
        }
    }
    .props-desc-title {
        >li {
            color: orangered;
        }
    }
}
</style>

