var module = (function() {
    const modules = [ "network", "api", "broadcast", "bep20", "bep721" ];

    return modules.reduce(function(exports, name) {
        var module = include("./" + name + ".js");

        Object.keys(module).forEach(function(key) {
            exports[name + "_" + key] = module[key];
        });

        return exports;
    }, {});
})();

__MODULE__ = module;
