var obj = {
    name:'孙悟空',
    age:18,
    gender:'男',
    address:'花果山'
};
// 枚举对象中属性
for(var item in obj){
    console.log(item,obj[item])
}