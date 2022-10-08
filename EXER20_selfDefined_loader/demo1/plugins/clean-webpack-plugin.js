class CleanWebpackPlugin{
    apply(compiler){
        const outputPath = compiler.options.output.path;
        const fs = compiler.outputFileSystem;
        compiler.hooks.emit.tap("CleanWebpackPlugin",(compilation)=>{
            this.removeFiles(fs,outputPath)
        })
        
    }
    removeFiles(fs,filepath){
        // 读取当前目录下所有的资源
        const files = fs.readdirSync(filepath)
        // 遍历资源
        files.forEach((file)=>{
            const path = `${filepath}/${file}`
            const fileStat = fs.statSync(path)
            if(fileStat.isDirectory()){
                // 是一个文件夹
                this.removeFiles(fs,path)
            }
            else{
                // 是一个文件
                fs.unlinkSync(path)
            }
        })
    }
}

module.exports = CleanWebpackPlugin