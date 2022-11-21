const HtmlWebpackPlugin = require('safe-require')('html-webpack-plugin')

class InlineChunkWebpackPlugin {
    constructor(tests){
        this.tests = tests
    }
    apply(compiler){
        compiler.hooks.compilation.tap("InlineChunkWebpackPlugin",compilation=>{
            const hooks = HtmlWebpackPlugin.getHooks(compilation)
            hooks.alterAssetTagGroups.tap("InlineChunkWebpackPlugin",(assets)=>{
                assets.headTags = this.getInlineChunk(assets.headTags,compilation.assets)
                assets.bodyTags = this.getInlineChunk(assets.bodyTags,compilation.assets)
            })  
            hooks.afterEmit.tap("InlineChunkWebpackPlugin",()=>{
                Object.keys(compilation.assets).forEach(filepath=>{
                    if(this.tests.some(test=>test.test(filepath))){
                        delete compilation.assets[filepath]
                    }
                })
            })    
        })
    }
    getInlineChunk(tags,assets){
        return tags.map(tag=>{
            if(tag.tagName != 'script') return tag
            const filepath = tag.attributes.src
            if(!filepath) return tag

            if(!this.tests.some(test => test.test(filepath))) return tag

            return {
                tagName:'script',
                innerHTML:assets[filepath].source(),
                closeTag:true
            }
        })
    }
}

module.exports = InlineChunkWebpackPlugin