module.exports = {
    // 只能预设
    presets:[
        ['@babel/preset-env',{
            useBuiltIns:'usage',
            corejs:3
        }]
    ]
}