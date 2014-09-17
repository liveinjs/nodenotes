var t = setTimeout(function(){
    console.log('t');
},1);

var t2 = setTimeout(function(){
    console.log('t2');
},10);

//10ms 时间太短了,进程序还没有完全退出，在进程序退出过程中， t2 运行了。
t2.unref();
