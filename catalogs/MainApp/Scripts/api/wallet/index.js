const module = (() => {
    const wallet = require("wallet"),
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
        get_account_name: (params) => {
            var name = wallet.get_account_name();

            if (address) {
                _resolve(params, name);
            } else {
                _reject(params);
            }
        },

        get_account_address: (params) => {
            var { chain } = params;
            var address = wallet.get_account_address(chain);

            if (address) {
                _resolve(params, address);
            } else {
                _reject(params);
            }
        },
        
        get_network_id: (params) => {
            var { chain } = params;
            var network_id = wallet.get_network_id(chain);

            if (network_id) {
                _resolve(params, network_id);
            } else {
                _reject(params);
            }
        },

        add_listener: (params) => {
            var { chain } = params;
            var { event, listener } = params;

            wallet.add_listener(chain, event, null)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },

        remove_listener: (params) => {
            var { chain } = params;
            var { event, listener } = params;

            wallet.remove_listener(chain, event, null)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },
    }
})();

__MODULE__ = module;
