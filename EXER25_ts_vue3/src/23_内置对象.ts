(()=>{
    let b:Boolean = new Boolean(1)
    let n:Number = new Number(true)
    let s:String = new String('abc')
    let d:Date = new Date()
    let r:RegExp = /^1/
    let e:Error = new Error('error message')
    console.log(b,n,s,d,r,e)

    const div:HTMLElement = document.createElement('test')
    const divs:NodeList = document.querySelectorAll('div')
    document.addEventListener('click',(event:MouseEvent)=>{
        console.dir(event.target)
    })
    const fragment:DocumentFragment = document.createDocumentFragment()
})()