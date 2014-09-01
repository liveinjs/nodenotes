var vm = require('vm'),
    code = 'var square = n * n;',
    fn = new Function('n', code),
    script = vm.createScript(code),
    sandbox;
n = 5;
sandbox = { n: n };
benchmark = function(title, funk) {
    var end, i, start;
    start = new Date;
    for (i = 0; i < 5000; i++) {
        funk();
    }
    end = new Date;
    console.log(title + ': ' + (end - start) + 'ms');
}
var ctx = vm.createContext(sandbox);
benchmark('vm.runInThisContext', function() { vm.runInThisContext(code); });
benchmark('vm.runInNewContext', function() { vm.runInNewContext(code, sandbox); });
benchmark('vm.runInContext', function() { vm.runInContext(code, ctx); });
benchmark('script.runInThisContext', function() { script.runInThisContext(); });
benchmark('script.runInNewContext', function() { script.runInNewContext(sandbox); });
benchmark('script.runInContext', function() { script.runInContext(ctx); });
benchmark('fn', function() { fn(n); });
