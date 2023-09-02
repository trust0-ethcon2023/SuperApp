const actions = require("actions-helper"),
      dialog  = require("dialog");

function on_panes_paging(data) {
    update_tabbar(data["id"].replace("P_MAIN_", "").toLowerCase());
}

function go_home() {
    view.object("panes.main").action("pane", {
        "pane": "P_MAIN_HOME"
    });
}

function go_wallet() {
    view.object("panes.main").action("pane", {
        "pane": "P_MAIN_WALLET"
    });
}

function go_account() {
    view.object("panes.main").action("pane", {
        "pane": "P_MAIN_ACCOUNT"
    });
}

function update_tabbar(tab) {
    view.object("cell.tabbar").view().action("script", {
        "script": "update",
        "tab": tab || "home"
    });
}
