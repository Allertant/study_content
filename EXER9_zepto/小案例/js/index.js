$(function(){
    // 初始化数据
    let direction = {up:1,right:2,down:3,left:4}

    // 初始化两个坐标
    let now = {col:1,row:1}
    let last = {col:0,row:0}

    // 初始化变量,表示页面没有在滑动,防止用户在动画执行过程中多次滑动页面
    let isMoving = false;

    // 向上滑动
    $('.page').swipeUp(function(){
        if(isMoving){return}
        // 计算滑动之后last-page的页面坐标
        last.col = now.col
        last.row = now.row
        // 计算滑动之后now-page的页面坐标
        if(last.col < 5){
            now.col = last.col + 1
            now.row = last.row
            movePage(direction.up)
        }
    })

    // 向下滑动
    $('.page').swipeDown(function(){
        if(isMoving){return}
        // 计算滑动之后last-page的页面坐标
        last.col = now.col
        last.row = now.row
        // 计算滑动之后now-page的页面坐标
        if(last.col > 1){
            now.col = last.col - 1
            now.row = last.row
            movePage(direction.down)
        }
    })

    // 向左滑动
    $('.page').swipeLeft(function(){
        if(isMoving){return}
        // 计算滑动之后last-page的页面坐标
        last.col = now.col
        last.row = now.row
        // 计算滑动之后now-page的页面坐标
        if(last.col>1 && last.col<5 && last.row == 1){
            now.col = last.col 
            now.row = last.row + 1
            movePage(direction.left)
        }
    })

    // 向右滑动
    $('.page').swipeRight(function(){
        if(isMoving){return}
        // 计算滑动之后last-page的页面坐标
        last.col = now.col
        last.row = now.row
        // 计算滑动之后now-page的页面坐标
        if(last.col>1 && last.col<5 && last.row == 2){
            now.col = last.col 
            now.row = last.row - 1
            movePage(direction.right)
        }
    })


    // 定义一个滑动的功能函数
    function movePage(dir){
        // 初始化参与动画的页面
        let lastPage = '.page-'+last.col+'-'+last.row
        let nowPage = '.page-'+now.col+'-'+now.row
        // 初始化两个动画类
        let inClass = ''; //进场的动画
        let outClass = ''; //出场的动画
        switch(dir){
            case direction.up:
                outClass = 'pt-page-moveToTop';
                inClass = 'pt-page-moveFromBottom';
                break;
            case direction.down:
                outClass = 'pt-page-moveToBottom';
                inClass = 'pt-page-moveFromTop';
                break;
            case direction.left:
                outClass = 'pt-page-moveToLeft';
                inClass = 'pt-page-moveFromRight';
                break;
            case direction.right:
                outClass = 'pt-page-moveToRight';
                inClass = 'pt-page-moveFromLeft';
                break;
        }

        // 将动画类加到参与动画的页面上
        $(lastPage).addClass(outClass)
        $(nowPage).removeClass('hide')
        $(nowPage).addClass(inClass);
        isMoving = true;

        // 转场动画执行完毕后,清除转场动画类
        setTimeout(function(){
            $(lastPage).removeClass(outClass);
            $(lastPage).addClass('hide')
            $(lastPage).removeClass('page-current')
            $(nowPage).find('img').removeClass('hide') //这是为了防止在转场动画执行时,文案动画也开始执行,导致最终效果不好

            $(nowPage).find('img').removeClass('hide')
            $(nowPage).removeClass(inClass)
            $(nowPage).addClass('page-current')

            isMoving = false //转场动画结束后,将表示动画正在执行中的isMoving变量改为false
        },600)
    }
})