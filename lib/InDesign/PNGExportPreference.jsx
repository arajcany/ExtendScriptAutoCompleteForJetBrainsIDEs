/*
 * PNG export preferences.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var PNGExportPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the PNGExportPreference (a Application).
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
     * The page range to export.
     * @type {PNGExportRangeEnum}
     */
    pngExportRange: PNGExportRangeEnum,


    /**
     * The page(s) to export, specified as a page number or an array of page numbers. Note: Valid when PNG export range is not all.
     * @type {string}
     */
    pageString: undefined,


    /**
     * If true, exports each spread as a single PNG file. If false, exports facing pages as separate files and appends sequential numbers to each file name.
     * @type {boolean}
     */
    exportingSpread: undefined,


    /**
     * The compression quality.
     * @type {PNGQualityEnum}
     */
    pngQuality: PNGQualityEnum,


    /**
     * The export resolution expressed as a real number instead of an integer. (Range: 1.0 to 2400.0)
     * @type {number}
     */
    exportResolution: undefined,


    /**
     * RGB or Gray
     * @type {PNGColorSpaceEnum}
     */
    pngColorSpace: PNGColorSpaceEnum,


    /**
     * If true, use a transparent background for the exported PNG.
     * @type {boolean}
     */
    transparentBackground: undefined,


    /**
     * If true, use anti-aliasing for text and vectors during export.
     * @type {boolean}
     */
    antiAlias: undefined,


    /**
     * If true, uses the document's bleed settings in the exported PNG.
     * @type {boolean}
     */
    useDocumentBleeds: undefined,


    /**
     * If true, simulates the effects of overprinting spot and process colors in the same way they would occur when printing.
     * @type {boolean}
     */
    simulateOverprint: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the PNGExportPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return PNGExportPreference
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

