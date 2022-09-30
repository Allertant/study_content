import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './snake'


class GameControl{
    food:Food
    snake:Snake
    scorePanel:ScorePanel

    isaLive = true
    direction:string = ''
    
    constructor(){
        this.food = new Food()
        this.snake = new Snake()
        this.scorePanel = new ScorePanel()

        this.init()
    }

    init(){
        document.addEventListener('keydown',this.keyDownHandler.bind(this))
        this.run()
        
    }

    keyDownHandler(event: KeyboardEvent){
        this.direction = event.key

    }

    run(){
        let x = this.snake.X
        let y = this.snake.Y

        switch(this.direction){
            case "ArrowUp":
                y -= 10
                break;
            case 'ArrowDown':
                y += 10
                break;
            case 'ArrowLeft':
                x -= 10
                break;
            case 'ArrowRight':
                x += 10
                break;
        }

        // 检测蛇是否吃到东西
        this.checkEat(x,y)

        try{
            this.snake.X = x
            this.snake.Y = y
        }catch(e:any){
            alert(e.message + ',Game Over!')
            this.isaLive = false
        }


        this.isaLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level - 1) * 30)
    }

    checkEat(X:number,Y:number){
        if(X === this.food.X && Y === this.food.Y){
            this.scorePanel.addScore()
            this.snake.addBody()
            this.food.change()
        }
    }
}

export default GameControl