// Type definitions for cordova.plugins.screenshot

/// <reference types="cordova" />

interface screenshot {
    save(
        callback: (response: string | null, data: string) => void,
        format: string,
        quality: number,
        filename: string
    );
    URI(
        callback: (response: string | null, data: {URI: string}) => void,
        quality: number
    );
    URISync(
        callback: (response: string | null, data: {URI: string}) => void,
        quality: number
    );
}

interface CordovaPlugins {
    screenshot: screenshot
}
