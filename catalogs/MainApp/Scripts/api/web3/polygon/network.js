const module = (function() {
    const polygon = require("polygon"),
          actions = require("actions-helper");

    function _resolve(params, result) {
        actions.resolve(params, {
            "result": JSON.stringify(result)
        });
    }

    function _reject(params, error) {
        actions.reject(params, {
            "error": JSON.stringify(error)
        });
    }

    return {
        get_current_network: (params) => {
            _resolve(params, polygon.net.chain_id);
        },
    }
})();

__MODULE__ = module;
