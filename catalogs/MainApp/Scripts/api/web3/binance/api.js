var module = (function() {
    const binance      = require("web3/binance"),
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

            binance.api.get_balance(account, block)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },
        
        get_transaction_count: function(params) {
            var { account, block } = params;

            binance.api.get_transaction_count(account, block)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        get_transaction_receipt: function(params) {
            var { tx_hash } = params;

            binance.api.get_transaction_receipt(tx_hash)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        get_gas_price: function(params) {
            binance.api.get_gas_price()
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        call: function(params) {
            var { to, data, block } = params;

            binance.api.call(to, data, block)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },
        
        send_raw_transaction: function(params) {
            var { transaction } = params;

            binance.api.send_raw_transaction(transaction)
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

            binance.api.request(method, JSON.parse(rpc_params || "{}"))
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },
    }
})();

__MODULE__ = module;
