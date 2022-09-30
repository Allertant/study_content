// 表示食物的类
class Food{
    // 定义一个属性来表示对应的元素
    element:HTMLElement;

    constructor(){
        // 获取页面中 food 元素，并将其赋值给element
        this.element = document.getElementById('food')!;
    }

    // 定义一个获取食物x\y轴坐标的方法
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }

    // 修改食物的位置
    change(){
        // 生成随机的位置
        // 食物的位置:[0,29]*10

        let top = Math.round(Math.random()*29)*10
        let left = Math.round(Math.random()*29)*10
        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}

export default Food