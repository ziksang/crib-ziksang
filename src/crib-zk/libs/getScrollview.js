const getScrollview = function (el) {
    //拿到当前节点
    let currentNode = el;
    //如果有节点，并且节点不等于html ,body 并且节点类型是元素节点
    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
       //拿到节点的overflowy的属性
        let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
        //如果此时属性是scroll或者atuo 就返回此节点
        if (overflowY === 'scroll' || overflowY === 'auto') {
            return currentNode;
        }
        //否则就继续向父节点上找
        currentNode = currentNode.parentNode;
    }
    //一但while语句为false的时候就直接返回window对像
    return window;
};


export {getScrollview}