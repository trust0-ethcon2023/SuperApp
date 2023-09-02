var module = (function() {
    const telegram = require("telegram");

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
        send_message: function(params) {
            var { account, chat_id, message } = params;
            
            telegram.send_message(account, chat_id, message)
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
