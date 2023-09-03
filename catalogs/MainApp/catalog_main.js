// const api = require("api");

/* API */

const exports = {}

// Object.keys(api).filter(function(name) {
//     return (typeof api[name] === 'function');
// }).forEach(function(name) {
//     exports["api__" + name] = api[name];
// });

/* event handlers */

function on_loaded() {
    // leaflet.on_foreground();
}

function on_foreground() {
    // leaflet.on_foreground();
}

function on_background() {
    // leaflet.on_background();
}

function on_register_notifications(params) {
    // device.update_device_token(params["device-token"]);
}

function on_first_open(params) {
    // device.process_install_referrer(params["referrer"]);
}

function on_link(params) {
    if (params["host"] === "connect" && params["path"]) {
        on_connect(Object.assign(params, {
            "method": /^\/([^/]+)/.exec(params["path"])[1]
        }));
    }
}

function on_notify(params) {
    if (params["sender"] === "worker") {
        controller.action("works");

        return;
    }
}

function on_connect(params) {
    if (params["target"] === "storage") {
        // params["storage-path"] = leaflet.get_storage_path();
    }

    if (wallet.is_account_selected()) {
        connect.invoke(params["method"], params);
    } else {
        storage.value("DEFERRED_CONNECT_PARAMS", _deferred_connect_params = params);
    }
}
