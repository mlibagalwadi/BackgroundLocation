cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.core.geolocation/www/Coordinates.js",
        "id": "org.apache.cordova.core.geolocation.Coordinates",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.geolocation/www/PositionError.js",
        "id": "org.apache.cordova.core.geolocation.PositionError",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.geolocation/www/Position.js",
        "id": "org.apache.cordova.core.geolocation.Position",
        "clobbers": [
            "Position"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.geolocation/www/geolocation.js",
        "id": "org.apache.cordova.core.geolocation.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.network-information/www/network.js",
        "id": "org.apache.cordova.core.network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.network-information/www/Connection.js",
        "id": "org.apache.cordova.core.network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.core.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.dialogs/www/notification.js",
        "id": "org.apache.cordova.core.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.dialogs/www/android/notification.js",
        "id": "org.apache.cordova.core.dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/android/notification.js",
        "id": "org.apache.cordova.dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/network.js",
        "id": "org.apache.cordova.network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/Connection.js",
        "id": "org.apache.cordova.network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.core.geolocation": "0.2.0",
    "org.apache.cordova.core.network-information": "0.2.0",
    "org.apache.cordova.core.splashscreen": "0.2.0",
    "org.apache.cordova.core.dialogs": "0.2.0",
    "org.apache.cordova.geolocation": "0.3.12-dev",
    "org.apache.cordova.dialogs": "0.2.12-dev",
    "org.apache.cordova.network-information": "0.2.15-dev",
    "org.apache.cordova.splashscreen": "0.3.6-dev"
}
// BOTTOM OF METADATA
});