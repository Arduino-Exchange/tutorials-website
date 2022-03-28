function httptohttps() {
    if (location.protocol === "http:") {
        location.replace(`https://${window.location.href}`);
    }
}
