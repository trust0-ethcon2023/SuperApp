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
        balance_of: function(params) {
            var { token, owner } = params;

            klaytn.kip17.balance_of(token, owner)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        owner_of: function(params) {
            var { token, token_id } = params;

            klaytn.kip17.owner_of(token, token_id)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        safe_transfer_from: function(params) {
            var { from, token, to, token_id } = params;

            klaytn.kip17.safe_transfer_from(from, token, to, token_id)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        transfer_from: function(params) {
            var { from, token, to, token_id } = params;

            klaytn.kip17.transfer_from(from, token, to, token_id)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        approve: function(params) {
            var { from, token, approved, token_id } = params;

            klaytn.kip17.approve(from, token, approved, token_id)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        set_approval_for_all: function(params) {
            var { from, token, operator, approved } = params;

            klaytn.kip17.set_approval_for_all(from, token, operator, approved)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        get_approved: function(params) {
            var { token, token_id } = params;

            klaytn.kip17.get_approved(token, token_id)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        is_approved_for_all: function(params) {
            var { token, owner, operator } = params;

            klaytn.kip17.is_approved_for_all(token, owner, operator)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        name: function(params) {
            var { token } = params;

            klaytn.kip17.name(token)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        symbol: function(params) {
            var { token } = params;

            klaytn.kip17.symbol(token)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        token_uri: function(params) {
            var { token, token_id } = params;

            klaytn.kip17.token_uri(token, token_id)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        total_supply: function(params) {
            var { token } = params;

            klaytn.kip17.total_supply(token)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        token_by_index: function(params) {
            var { token, index } = params;

            klaytn.kip17.token_by_index(token, index)
                .then(function(result) {
                    _resolve(params, result);
                })
                .catch(function(error) {
                    _reject(params, error);
                });
        },

        token_of_owner_by_index: function(params) {
            var { token, owner, index } = params;

            klaytn.kip17.token_of_owner_by_index(token, owner, index)
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
