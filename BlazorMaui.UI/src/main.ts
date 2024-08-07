import { createApp, h } from "vue";
import App from "./App.vue";
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

/*
    Wait for the webview to load Blazor Framework and start it if needed
*/
if(window.hasOwnProperty("DotNet")) {
    try {
        await new Promise(r => setTimeout(r, 100));
        window.DotNet.invokeMethod("", "");
    }
    catch(error: any) {
        if(error.message.includes("No call dispatcher")){
            window.Blazor.start();
        }
    }
}

createApp({
    setup: () => {},
    render: () => h(App)
})
    .mount("#app");
