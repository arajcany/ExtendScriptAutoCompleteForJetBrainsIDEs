/*
 * JPEG export preferences.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var JPEGExportPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the JPEGExportPreference (a Application).
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
     * If true, exports each spread as a single JPEG file. If false, exports facing pages as separate files and appends sequential numbers to each file name.
     * @type {boolean}
     */
    exportingSpread: undefined,


    /**
     * The compression quality.
     * @type {JPEGOptionsQuality}
     */
    jpegQuality: JPEGOptionsQuality,


    /**
     * The page(s) to export, specified as a page number or an array of page numbers. Note: Valid when JPEG export range is not all.
     * @type {string}
     */
    pageString: undefined,


    /**
     * The rendering style.
     * @type {JPEGOptionsFormat}
     */
    jpegRenderingStyle: JPEGOptionsFormat,


    /**
     * The page range to export.
     * @type {ExportRangeOrAllPages}
     */
    jpegExportRange: ExportRangeOrAllPages,


    /**
     * True to embed the color profile, false otherwise.
     * @type {boolean}
     */
    embedColorProfile: undefined,


    /**
     * One of RGB, CMYK or Gray
     * @type {JpegColorSpaceEnum}
     */
    jpegColorSpace: JpegColorSpaceEnum,


    /**
     * If true, uses the document's bleed settings in the exported JPEG.
     * @type {boolean}
     */
    useDocumentBleeds: undefined,


    /**
     * If true, use anti-aliasing for text and vectors during export.
     * @type {boolean}
     */
    antiAlias: undefined,


    /**
     * If true, simulates the effects of overprinting spot and process colors in the same way they would occur when printing.
     * @type {boolean}
     */
    simulateOverprint: undefined,


    /**
     * The export	resolution expressed as a real number instead of an integer. (Range: 1.0 to 2400.0)
     * @type {number}
     */
    exportResolution: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the JPEGExportPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return JPEGExportPreference
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

