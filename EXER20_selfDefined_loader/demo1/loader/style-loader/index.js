module.exports.pitch = function(remainingRequest){

    // 获取相对路径
    const relativePath = remainingRequest
        .split("!")
        .map((absolutePath)=>{
            return this.utils.contextify(this.context,absolutePath)
        })
        .join('!')
    // 引入css-loader处理好后的资源
    // 创建style标签，将资源引入
    // 这里！！表示中止后面的loader的执行，只会经过css-loader的处理
    const script = `
        import style from '!!${relativePath}'
        const styleEl = document.createElement('style')
        styleEl.innerHTML = style 
        document.head.appendChild(styleEl)
    `

    // 中止后面的loader执行
    return script
}