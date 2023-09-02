const module = (() => {
    const actions = require("actions-helper");

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
        get_current_account: (params) => {
            actions.invoke("__MAIN__", "get_current_account", {
                "routes-to-topmost": "no"
            })
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },

        change_account: (params) => {
            actions.invoke("__MAIN__", "change_account", {
                "routes-to-topmost": "no"
            })
                .then((result) => {
                    _resolve(params, result);
                })
                .catch((error) => {
                    _reject(params, error);
                });
        },

        add_token: (params) => {
            actions.invoke("__MAIN__", "add_token", {
                "token": params["token"],
                "routes-to-topmost": "no"
            })
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
