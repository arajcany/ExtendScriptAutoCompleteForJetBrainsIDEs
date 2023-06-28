/*
 * Color management settings.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var ColorSetting = {


    /**
     * The available color engines.
     * @type {string}
     * @readonly
     */
    engineList: undefined,


    /**
     * A list of valid color management system settings configurations.
     * @type {string}
     * @readonly
     */
    cmsSettingsList: undefined,


    /**
     * A list of valid CMYK color profiles.
     * @type {string}
     * @readonly
     */
    workingSpaceCMYKList: undefined,


    /**
     * A list of valid RGB color profiles.
     * @type {string}
     * @readonly
     */
    workingSpaceRGBList: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the ColorSetting (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


    /**
     * A collection of events.
     * @type {Events}
     * @readonly
     */
    events: Events,


    /**
     * A collection of event listeners.
     * @type {EventListeners}
     * @readonly
     */
    eventListeners: EventListeners,


    /**
     * The policy for handling colors in a CMYK color model, including reading and embedding color profiles, resolving mismatches between embedded color profiles and the working space, and moving colors between documents.
     * @type {ColorSettingsPolicy}
     */
    cmykPolicy: ColorSettingsPolicy,


    /**
     * If true, enables color management.
     * @type {boolean}
     */
    enableColorManagement: undefined,


    /**
     * The color management module (CMM) for mapping color space gamuts between documents.
     * @type {string}
     */
    engine: undefined,


    /**
     * If true, displays a prompt when opening a file whose embedded color profile does not match the current working space. The prompt provides the option to override the default mismatch behavior.
     * @type {boolean}
     */
    mismatchAskWhenOpening: undefined,


    /**
     * If true, displays a prompt when importing an object (via pasting, drag-and-drop, or other similar methods) whose colors do not match the current working space. The prompt provides the option to override the default mismatch behavior.
     * @type {boolean}
     */
    mismatchAskWhenPasting: undefined,


    /**
     * If true, displays a prompt when opening a file that does not have an embedded color profile. The prompt provides the option to assign a color profile.
     * @type {boolean}
     */
    missingAskWhenOpening: undefined,


    /**
     * The policy for handling colors in an RGB color model, including reading and embedding color profiles, handling mismatches between embedded color profiles and the working space, and moving colors from one document to another.
     * @type {ColorSettingsPolicy}
     */
    rgbPolicy: ColorSettingsPolicy,


    /**
     * The current color management system settings configuration. Note: For information on possible values, see CMS settings list.
     * @type {string}
     */
    cmsSettings: undefined,


    /**
     * The file path of the CSF file to use.
     * @type {File}
     */
    cmsSettingsPath: File,


    /**
     * If true, uses black point compensation to ensure that shadow detail is preserved by simulating the full dynamic range of the output device.
     * @type {boolean}
     */
    useBPC: undefined,


    /**
     * The current CMYK profile.
     * @type {string}
     */
    workingSpaceCMYK: undefined,


    /**
     * The current RGB profile.
     * @type {string}
     */
    workingSpaceRGB: undefined,


    /**
     * The default rendering intent.
     * @type {DefaultRenderingIntent}
     */
    intent: DefaultRenderingIntent,


    /**
     * If true, uses LAB alternates for spot colors when available.
     * @type {boolean}
     */
    accurateLABSpots: undefined,


    /**
     * If true, uses idealized black for CMYK-to-RGB or CMYK-to-Gray conversions to the screen.
     * @type {boolean}
     */
    idealizedBlackToScreen: undefined,


    /**
     * If true, uses idealized black for CMYK-to-RGB or CMYK-to-Gray conversions to print or export.
     * @type {boolean}
     */
    idealizedBlackToExport: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the ColorSetting.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return ColorSetting
     */
    getElements: function () {
        
    },


    /**
     * Retrieves the object specifier.
     *
     * @return string
     */
    toSpecifier: function () {
        
    },


    /**
     * Adds an event listener.
     *
     * @param {string} [eventType] The event type.
     * @param {varies=any} [handler] The event handler. Can accept: File or JavaScript Function.
     * @param {boolean} [captures] This parameter is obsolete. (Optional) (default: false)
     * @return EventListener
     */
    addEventListener: function (eventType, handler, captures) {
        
    },


    /**
     * Removes the event listener.
     *
     * @param {string} [eventType] The registered event type.
     * @param {varies=any} [handler] The registered event handler. Can accept: File or JavaScript Function.
     * @param {boolean} [captures] This parameter is obsolete. (Optional) (default: false)
     * @return boolean
     */
    removeEventListener: function (eventType, handler, captures) {
        
    },


};

