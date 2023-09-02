var module = (function() {
    const ethereum = require("web3/ethereum"),
          actions  = require("actions-helper");

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
        get_current_network: function(params) {
            _resolve(params, ethereum.net.chain_id);
        },
    }
})();

__MODULE__ = module;
