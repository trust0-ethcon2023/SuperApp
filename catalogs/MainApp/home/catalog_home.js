const actions = require("actions-helper"),
      dialog  = require("dialog");

function on_panes_paging(data) {
    update_tabbar(data["id"].replace("P_HOME_", "").toLowerCase());
}

function go_home() {
    view.object("panes.home").action("pane", {
        "pane": "P_HOME_MAIN"
    });
}

function go_wallet() {
    view.object("panes.home").action("pane", {
        "pane": "P_HOME_WALLET"
    });
}

function go_account() {
    view.object("panes.home").action("pane", {
        "pane": "P_HOME_ACCOUNT"
    });
}

function update_tabbar(tab) {
    view.object("cell.tabbar").view().action("script", {
        "script": "update",
        "tab": tab || "main"
    });
}
