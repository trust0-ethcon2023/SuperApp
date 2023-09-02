const module = (() => {
    const modules = [ "network", "api", "broadcast", "erc20", "erc721" ];

    return modules.reduce((exports, name) => {
        const module = include("./" + name + ".js");

        Object.keys(module).forEach((key) => {
            exports[name + "_" + key] = module[key];
        });

        return exports;
    }, {});
})();

__MODULE__ = module;
