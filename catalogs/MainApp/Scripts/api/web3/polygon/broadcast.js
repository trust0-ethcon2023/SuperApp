var module = (function() {
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
        transfer: function(params) {
            var { from, to, value } = params;
            
            polygon.broadcast.transfer(from, to, value)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    transactions.notify_transaction_error(error);

                    _reject(params, error);
                });
        },

        call: function(params) {
            var { from, to, data, value } = params;

            polygon.broadcast.call(from, to, data, value)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    transactions.notify_transaction_error(error);

                    _reject(params, error);
                });
        },

        create: function(params) {
            var { from, to, data, value } = params;

            polygon.broadcast.create(from, to, data, value)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    transactions.notify_transaction_error(error);

                    _reject(params, error);
                });
        },
        
        send: function(params) {
            var transaction = JSON.parse(params["transaction"]);

            polygon.broadcast.send(transaction)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    transactions.notify_transaction_error(error);

                    _reject(params, error);
                });
        },

        sign: function(params) {
            var { message, account, password } = params;

            polygon.broadcast.sign(message, account, password)
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
