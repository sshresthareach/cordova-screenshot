// Type definitions for cordova.plugins.screenshot

/// <reference types="cordova" />

interface screenshot {
    save(
        callback: (response: error | null, data: string) => void,
        format: string,
        quality: number,
        filename: string
    );
    URI(
        callback: (response: error | null, data: string) => void,
        quality: number
    );
    URISync(
        callback: (response: error | null, data: string) => void,
        quality: number
    );
}

interface CordovaPlugins {
    screenshot: screenshot
}
