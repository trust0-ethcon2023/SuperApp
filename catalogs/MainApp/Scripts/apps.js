const module = (() => {
    function _get_app_url(url) {
        const github = /github:\/\/([^/]+)\/([^/]+)/.exec(url);
    
        if (github) {
            return "https://github.com/" + github[1] + "/" + github[2] + "/archive/master.zip";
        }
    
        const ipfs = /ipfs:\/\/hash\/([^/]+)/.exec(url);
    
        if (ipfs) {
            return "https://ipfs.infura.io/ipfs/" + ipfs[1];
        }
    
        return url;
    }

    return {
        open_app: (app_id, url, params) => {
            controller.action("app", { 
                "app": app_id, 
                "version": params["version"] || "0.0",
                "url": _get_app_url(url),
                "storage-path": params["storage-path"] || "",
                "open-url": params["open-url"] || "",
                "app-params": params["app-params"] || ""
            });
        },
    }
})();

__MODULE__ = module;
