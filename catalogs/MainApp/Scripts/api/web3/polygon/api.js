const module = (() => {
    const polygon      = require("web3/polygon"),
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
        get_balance: (params) => {
            const { account, block } = params;

            polygon.api.get_balance(account, block)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },
        
        get_transaction_count: (params) => {
            const { account, block } = params;

            polygon.api.get_transaction_count(account, block)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },

        get_transaction_receipt: (params) => {
            const { tx_hash } = params;

            polygon.api.get_transaction_receipt(tx_hash)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },

        get_gas_price: (params) => {
            polygon.api.get_gas_price()
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },

        call: (params) => {
            const { to, data, block } = params;

            polygon.api.call(to, data, block)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },
        
        send_raw_transaction: (params) => {
            const { transaction } = params;

            polygon.api.send_raw_transaction(transaction)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    transactions.notify_transaction_error(error);

                    _reject(params, error);
                });
        },

        request: (params) => {
            const { method, params: rpc_params } = params;

            polygon.api.request(method, JSON.parse(rpc_params || "{}"))
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
