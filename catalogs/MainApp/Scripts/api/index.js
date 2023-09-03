const module = (() => {
    const modules = [ "accounts", "wallet", "web3", "telegram" ];

    return modules.reduce((exports, name) => {
        const module = include("./" + name + "/index.js");

        Object.keys(module).forEach((key) => {
            exports[name + "_" + key] = module[key];
        });

        return exports;
    }, include("./global.js"));
})();

__MODULE__ = module;
