这个模块的函数有很多options 参数，例如

fs.createWriteStream(path, [options])
options 默认值
{ flags: 'w',
  encoding: null,
  mode: 0666 
  }  //也可以包含  start 值，表示写入的位置
  
这里的:
flags 表示打开文件的方式;
modes 表示文件的权限.
