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
        name: function(params) {
            var { token } = params;

            klaytn.kip7.name(token)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        decimals: function(params) {
            var { token } = params;

            klaytn.kip7.decimals(token)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        total_supply: function(params) {
            var { token } = params;

            klaytn.kip7.total_supply(token)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        balance_of: function(params) {
            var { token, account } = params;

            klaytn.kip7.balance_of(token, account)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        transfer: function(params) {
            var { from, token, to, amount } = params;

            klaytn.kip7.transfer(from, token, to, amount)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        allowance: function(params) {
            var { token, owner, spender } = params;

            klaytn.kip7.allowance(token, owner, spender)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        approve: function(params) {
            var { account, token, spender, amount } = params;

            klaytn.kip7.approve(account, token, spender, amount)
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
