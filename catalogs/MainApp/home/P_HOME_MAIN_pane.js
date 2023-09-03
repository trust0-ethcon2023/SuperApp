function on_loaded() {
    _load_apps_section();
}

function go_profile() {
    controller.catalog().submit("showcase", "others", "S_PROFILE", {
    });
    controller.action("page", { "display-unit": "S_PROFILE" });   
}

function scan() {
    controller.catalog().submit("showcase", "others", "S_QRCODE_SCAN", {
        "script": "on_scan_qrcode"
    });
    controller.action("popup", { "display-unit": "S_QRCODE_SCAN" });
}

function on_scan_qrcode(data) {

}

function _load_apps_section() {
    const packages = controller.module("packages");

    view.object("sbmls.content").action("load", {
        "sbml-id": "apps",
        "filename": "home_main_apps.sbml"
    });
}
