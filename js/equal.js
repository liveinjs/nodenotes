// == 与 ===
var a = 1;
var b={};
b.valueOf = function(){return 1};

//如果两者都是对象，比较得是引用,引用指向的相同则相等。
//如果最少有一个是原始值，另一个的类型转化为原始值。再比较原始值得大小。
if(a == b) { // 如果是 === 不进行类型转换
    console.log('ok');
}
//字符串类型转为数字类型，首字符必须为数字 或者是 . + -

if('%1' > 0){
    console.log('NaN != NaN')
}

//字符串比较大小从索引为 0 的字符开始，比较 unicode 码值大小
//两字符串相等，则内存存储的内容相同。
