// 引入第三方库jQuery 
// import jQuery from 'jQuery';

// 使用jQuery
// jQuery('选择器')

/**
 * 当使用第三方库时，我们许哟啊引用它的声明文件，才能获得对应的代码补全、接口提示等功能
 * 声明语句：如果需要ts对新的语法进行检查，需要要加载了对饮高度类型说明代码
 * declare var jQuery : (select:string) => any 
 * 声明文件：把声明语句放到一个单独的文件（jQuery.d.ts）中，ts会自动解析到项目中所有声明文件
 * 下载声明文件：npm i @types/jquery --save-dev
 * 
 */

import jQuery from 'jquery'
jQuery('#af')
