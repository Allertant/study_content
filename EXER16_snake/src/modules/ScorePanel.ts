// 表示记分牌的类
class ScorePanel{
    // 用来记录分数和等级
    score = 0
    level = 1

    scoreEle:HTMLElement
    levelEle:HTMLElement

    // 设置一个变量限制等级
    maxLevel:number
    // 设置一个变量，表示多少分时升级
    upScore:number

    // 在构造函数中进行赋值
    constructor(maxLevel:number = 10,upScore:number = 10){
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 设置一个加分的方法
    addScore(){
        // 使分数自增
        this.scoreEle.innerHTML = ++this.score+''
        // 判断分数是多少
        if(this.score % this.upScore === 0){
            this.levelUp()
        }
        return this
    }

    // 提升等级的方法
    levelUp(){
        if(this.level < this.maxLevel)
            this.levelEle.innerHTML = ++this.level+''
        return this
    }

}

export default ScorePanel