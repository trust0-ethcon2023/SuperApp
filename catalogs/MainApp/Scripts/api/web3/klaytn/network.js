var module = (function() {
    const klaytn  = require("web3/klaytn"),
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
        get_current_network: function(params) {
            _resolve(params, klaytn.net.chain_id);
        },
    }
})();

__MODULE__ = module;
