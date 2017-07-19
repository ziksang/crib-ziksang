//此方法是用来把confirm上的prop属性合并到调用时的参数上
const mergeOptions = function($vm,options) {
    //声明一个默认的对象，就是comfirm上props属性的default的值
    const defaults = {}
    //循环confirm属性上的props值
    for (let i in $vm.$options.props){
       //不把value的值算上去，显示改变通过watch或者改变data代理的属性上去监听
       if(i !== 'value'){
          defaults[i] = $vm.$options.props[i].default
       }
    }
    //把confrim组件原本的值和插件传入的options合并
    const _options = Object.assign({},defaults,options)
    //把confirm组件生成的实列对象再次替换成合并的属性
    for(let i in _options) {
        $vm[i] = _options[i]
    }
}


export {
    mergeOptions
}