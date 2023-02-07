function run(domObj, speed, destination,attr,callback=function(){console.log('动画执行完毕')}) {
    var oldValue = parseInt(getStyle(domObj,attr))
    clearInterval(domObj.timer)
    if(destination < oldValue) speed = -speed;
    domObj.timer = setInterval(function () {
        oldValue = parseInt(getStyle(domObj,attr))
        var newValue = oldValue + speed;
        if (speed < 0 && newValue <= destination || speed > 0 && newValue >= destination) newValue = destination
        domObj.style[attr] = newValue + 'px';
        if (newValue === destination) {clearInterval(domObj.timer); callback()}
    }, 30)
}

function getStyle(obj,attr) {
    return getComputedStyle(obj,null)[attr]
}

function addClass(domObj,addClassName){
    var className = domObj.className
    var reg = new RegExp('\\b'+addClassName+'\\b')
    if(reg.test(className)) return console.log('该属性已经存在了')
    domObj.className += ' '+addClassName
}
function removeClass(domObj,removeClassName){
    var reg = new RegExp('\\b '+removeClassName+'\\b')
    domObj.className = domObj.className.replace(reg,'')
}
// 切换样式
function toggleClass(domObj,toggleClassName){
    var className = domObj.className
    var reg = new RegExp('\\b'+toggleClassName+'\\b')
    var res = reg.test(className)
    if(res){
        domObj.className = domObj.className.replace(reg,'')
    } else{
        domObj.className += ' '+toggleClassName
    }
}
function hasClass(domObj,toggleClassName){
    var reg = new RegExp('\\b'+toggleClassName+'\\b');
    return reg.test(domObj.className)
}