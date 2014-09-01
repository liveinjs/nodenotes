var  vm = require('vm');
var localVal = 1;
var g = global;


//vm.runThisContext (),不会访问、操作本地作用域,但可以访问全局全用域，也可以通过global 修改、创建全局对象
vm.runInThisContext('localVal = 1000;console.log(localVal)','n1.vm');//n1.vm 仅作追踪用

//当也不用访问全局变量时
//vm.runInNewContext('name = 100;g.console.log(g)','n2.vm');

//
initSandbox = {
    name : 'wl',
    count:2,
    console:{log:global.console.log}//sandbox 中要使用到全局属性时，只能通过全局变量的key去使用，
    //这里不能直接引用全局变量,只能用全局变量的属性 。像 {g:global }这样是错误的！！！
};
var context = vm.createContext(initSandbox);

vm.runInContext('console.log(name)',context,'n5.vm');
