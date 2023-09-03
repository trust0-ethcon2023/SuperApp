const module = (() => {
    const apps  = require("apps"),
          books = require("books"),
          web   = require("web"),
          store = require("store");

    const _methods = {
        app: (params) => {
            if (!params["url"]) {
                store.get_app_info(params["app"])
                    .then((data) => {
                        return Object.assign(data, params);
                    })
                    .then((params) => {
                        apps.open_app(params["app"], params["url"], params);
                    })
            } else {
                apps.open_app(params["app"], params["url"], params);
            }
        },

        book: (params) => {
            books.open_book(params["book"], params["url"], params);
        },

        web: (params) => {
            web.open_url(params["url"], params);
        },
    }

    return {
        invoke: (method, params) => {
            if (_methods.hasOwnProperty(method)) {
                _methods[method](params);
            }
        },
    }
})();

__MODULE__ = module;
