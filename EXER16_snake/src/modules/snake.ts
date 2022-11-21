class Snake{
    head:HTMLElement
    bodies:HTMLCollection
    element:HTMLElement

    constructor(){
        this.element = document.getElementById('snake')!
        this.bodies = this.element.getElementsByTagName('div')
        this.head = document.querySelector('#snake > div') as HTMLElement
    }

    get X(){
        return this.head.offsetLeft
    }

    get Y(){
        return this.head.offsetTop
    }

    set X(value:number){
        if(this.X == value){
            return
        }
        if(value < 0 || value > 290){
            throw new Error('蛇撞墙了')
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value)
            if(value > this.X){
                // value = this.X -10
                value -= 20
            }else{
                // value = this.X + 10
                value += 20
            }

        this.moveBody()

        this.head.style.left = value + 'px'

        this.checkBodyHead()
    }

    set Y(value:number){
        if(this.Y == value){
            return
        }
        if(value < 0 || value > 290){
            throw new Error('蛇撞墙了')
        }

        // 解决了掉头的问题
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value)
            if(value > this.Y){
                // value = this.Y - 10
                value -= 20
            }else{
                // value = this.Y + 10
                value += 20
            }


        this.moveBody()

        this.head.style.top = value + 'px'

        this.checkBodyHead()
    }

    addBody(){
        this.element.insertAdjacentHTML("beforeend",'<div></div>')
    }

    // // 除了头部外的身体的移动
    moveBody(){
        for(let i = this.bodies.length-1;i > 0 ;i-- ){
            let pre = this.bodies[i-1] as HTMLElement;
            (this.bodies[i] as HTMLElement).style.left = pre.offsetLeft + 'px';
            (this.bodies[i] as HTMLElement).style.top = pre.offsetTop + 'px';
        }
    }

    // 检查身体是否交叉
    checkBodyHead(){
        for(let i = 1 ; i < this.bodies.length ; i ++){
            let body = this.bodies[i] as HTMLElement;
            if(this.X === body.offsetLeft && this.Y === body.offsetTop){
                throw new Error('撞到自己了')
            }
        }
    }
}
export default Snake

