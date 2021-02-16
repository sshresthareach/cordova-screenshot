// Type definitions for cordova.plugins.screenshot

/// <reference types="cordova" />

interface screenshot {
    save(
        callback: () => void,
        format: string,
        quality: number,
        filename: string
    );
    URI(
        callback: () => void,
        quality: number
    );
    URISync(
        callback: () => void,
        quality: number
    );
}

interface CordovaPlugins {
    screenshot: screenshot
}
