function on_scan(params) {
    host.action("script", { 
        "script": $data["script"],
        "text": params["text"],
        "close-popup": "yes"
    });
}
