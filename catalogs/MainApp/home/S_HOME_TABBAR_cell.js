function go_home() {
    owner.action("script", {
        "script": "go_home"
    });
}

function go_wallet() {
    owner.action("script", {
        "script": "go_wallet"
    });
}

function go_account() {
    owner.action("script", {
        "script": "go_account"
    });
}

function update(params) {
    [ "home", "wallet", "account" ].forEach((tab) => {
        if (params["tab"] === tab) {
            view.group("btn." + tab).forEach((button) => {
                button.property({ "selected": "yes" });
            });
            view.object("btn.label." + tab).action("show");
            view.object("blank.line." + tab).action("show");
        } else {
            view.group("btn." + tab).forEach((button) => {
                button.property({ "selected": "no" });
            });
            view.object("btn.label." + tab).action("hide");
            view.object("blank.line." + tab).action("hide");
        }
    });
}
