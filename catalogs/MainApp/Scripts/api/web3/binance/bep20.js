var module = (function() {
    const binance = require("web3/binance"),
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
        name: function(params) {
            var { token } = params;

            binance.bep20.name(token)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        decimals: function(params) {
            var { token } = params;

            binance.bep20.decimals(token)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        total_supply: function(params) {
            var { token } = params;

            binance.bep20.total_supply(token)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        balance_of: function(params) {
            var { token, account } = params;

            binance.bep20.balance_of(token, account)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        transfer: function(params) {
            var { from, token, to, amount } = params;

            binance.bep20.transfer(from, token, to, amount)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        allowance: function(params) {
            var { token, owner, spender } = params;

            binance.bep20.allowance(token, owner, spender)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        }
    }
})();

__MODULE__ = module;
