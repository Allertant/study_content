class AnalyzeWebpackPlugin{
    apply(compiler){
        compiler.hooks.emit.tap("AnalyzeWebpackPlugin",compilation=>{
            const assets = Object.entries(compilation.assets)

            // md原字符串
            let content =`| 资源名称 | 资源大小 | 
| --- | --- |`;

            assets.forEach(([filename,file])=>{
                content += `\n| ${filename} | ${Math.ceil(file.size() / 1024)}kb |`
            })

            compilation.assets['analyze.md'] = {
                source(){
                    return content
                },
                size(){
                    return content.size()
                }
            }
        })
    }
}

module.exports = AnalyzeWebpackPlugin