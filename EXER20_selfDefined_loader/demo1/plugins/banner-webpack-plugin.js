class BannerWebpackPlugin{
    constructor(options={}){
        this.option = options
    }
    apply(compiler){
        const extension = ['js','css']
       
        compiler.hooks.emit.tap("BannerWebpackPlugin",(compilation,callback)=>{
            // 获取包含js css文件的asset对象
            const assets = Object.keys(compilation.assets).filter((assetPath)=>{
                const splitted = assetPath.split('.')
                // 获取后缀名
                const extision = splitted[splitted.length-1]
                // 进行筛选
                return extension.includes(extision)
            })
            // 定义注释字符串
            const prefix = `
/*
            author:${this.option.author}
*/
            `
            assets.forEach((asset)=>{
                // 获取对应目录下的文件
                const source = compilation.assets[asset].source()
                // 将文件拼接上注释
                const content = prefix + source
                // 将修改的内容链接到元素数组
                compilation.assets[asset] = {
                    source(){
                        return content
                    },
                    // 返回数组的大小
                    size(){
                        return asset.length
                    }
                }
            })

        })
        // callback()
    }
}

module.exports =  BannerWebpackPlugin