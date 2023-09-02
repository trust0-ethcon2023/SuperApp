const module = (() => {
    const polygon = require("web3/polygon"),
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
        balance_of: (params) => {
            const { token, owner } = params;

            polygon.erc721.balance_of(token, owner)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },

        owner_of: (params) => {
            const { token, token_id } = params;

            polygon.erc721.owner_of(token, token_id)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },

        safe_transfer_from: (params) => {
            const { from, token, to, amount } = params;

            polygon.erc721.safe_transfer_from(from, token, to, amount)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },

        transfer_from: (params) => {
            const { from, token, to, amount } = params;

            polygon.erc721.transfer_from(from, token, to, amount)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },

        approve: (params) => {
            const { from, token, to, token_id } = params;

            polygon.erc721.approve(from, token, to, token_id)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },

        get_approved: (params) => {
            const { token, token_id } = params;

            polygon.erc721.get_approved(token, token_id)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },

        set_approval_for_all: (params) => {
            const { from, token, operator, approved } = params;

            polygon.erc721.set_approval_for_all(from, token, operator, approved)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },

        is_approved_for_all: (params) => {
            const { token, owner, operator } = params;

            polygon.erc721.is_approved_for_all(token, owner, operator)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },

        name: (params) => {
            const { token } = params;

            polygon.erc721.name(token)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },

        symbol: (params) => {
            var { token } = params;

            polygon.erc721.symbol(token)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },

        token_uri: (params) => {
            const { token, token_id } = params;

            polygon.erc721.token_uri(token, token_id)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },

        total_supply: (params) => {
            const { token } = params;

            polygon.erc721.total_supply(token)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },

        token_of_owner_by_index: (params) => {
            const { token, owner, index } = params;

            polygon.erc721.token_of_owner_by_index(token, owner, index)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },

        token_by_index: (params) => {
            const { token, index } = params;

            polygon.erc721.token_by_index(token, index)
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        }
    }
})();

__MODULE__ = module;
