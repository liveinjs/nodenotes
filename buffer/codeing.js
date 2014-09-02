var buf1 = new Buffer('a','ascii'); // 字符'a' -> ascii编码 -> 61 存在计算机中
console.log(buf1);

var b = buf1.toString('base64'); // 61  -> 用base64解码 -> 得到字符串  'YQ=='
console.log(b);

var buf2 = new Buffer(b,'base64');// 'YQ==' -> base64编码 -> 61 存储于计算机中
console.log(buf1);
console.log(buf2.toString('ascii'));// 61 -> 用 ascii 解码 得到字符 'a'
