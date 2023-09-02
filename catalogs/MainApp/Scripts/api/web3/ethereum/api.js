var module = (function() {
    const ethereum     = require("web3/ethereum"),
          actions      = require("actions-helper"),
          transactions = require("transactions");

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
        get_balance: function(params) {
            var { account, block } = params;

            klaytn.api.get_balance(account, block)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },
        
        get_transaction_count: function(params) {
            var { account, block } = params;

            ethereum.api.get_transaction_count(account, block)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        get_transaction_receipt: function(params) {
            var { tx_hash } = params;

            ethereum.api.get_transaction_receipt(tx_hash)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        get_gas_price: function(params) {
            ethereum.api.get_gas_price()
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        call: function(params) {
            var { to, data, block } = params;

            ethereum.api.call(to, data, block)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },
        
        send_raw_transaction: function(params) {
            var { transaction } = params;

            ethereum.api.send_raw_transaction(transaction)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    transactions.notify_transaction_error(error);
                    
                    _reject(params, error);
                });
        },

        request: function(params) {
            var { method, params: rpc_params } = params;

            ethereum.api.request(method, JSON.parse(rpc_params || "{}"))
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    transactions.notify_transaction_error(error);

                    _reject(params, error);
                });
        }
    }
})();

__MODULE__ = module;
