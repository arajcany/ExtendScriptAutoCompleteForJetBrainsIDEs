/*
 * EPS export preferences.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var EPSExportPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the EPSExportPreference (a Application).
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
     * The height of the bleed area at the bottom of the page. Note: Valid only when use document bleed to print is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    bleedBottom: undefined,


    /**
     * The width of the bleed area at the inside of the page. Note: Valid only when use document bleed to print is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    bleedInside: undefined,


    /**
     * The width of the bleed area at the outside of the page. Note: Valid only when use document bleed to print is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    bleedOutside: undefined,


    /**
     * The height of the bleed area at the top of the page. Note: Valid only when use document bleed to print is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    bleedTop: undefined,


    /**
     * The color space for representing color in the exported EPS.
     * @type {EPSColorSpace}
     */
    epsColor: EPSColorSpace,


    /**
     * The format in which to send image data to the printer.
     * @type {DataFormat}
     */
    dataFormat: DataFormat,


    /**
     * The transparency flattener preset to use.
     * @type {FlattenerPreset}
     */
    appliedFlattenerPreset: FlattenerPreset,


    /**
     * Controls how fonts are embedded in the exported EPS.
     * @type {FontEmbedding}
     */
    fontEmbedding: FontEmbedding,


    /**
     * If true, ignores flattener spread overrides.
     * @type {boolean}
     */
    ignoreSpreadOverrides: undefined,


    /**
     * If true, replaces bitmap images with OPI links.
     * @type {boolean}
     */
    omitBitmaps: undefined,


    /**
     * If true, replaces EPS images with OPI links.
     * @type {boolean}
     */
    omitEPS: undefined,


    /**
     * If true, replaces PDF images with OPI links.
     * @type {boolean}
     */
    omitPDF: undefined,


    /**
     * If true, prints graphics that are either OPI comments stored in imported EPS files or linked using OPI comments. For information on linking files using OPI comments, see omit EPS, omit PDF, or omit bitmaps.
     * @type {boolean}
     */
    opiImageReplacement: undefined,


    /**
     * The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). Can return: PageRange enumerator or String.
     * @type {varies=any}
     */
    pageRange: undefined,


    /**
     * The file format of the preview image saved with the exported EPS file.
     * @type {PreviewTypes}
     */
    preview: PreviewTypes,


    /**
     * The PostScript level of the printer.
     * @type {PostScriptLevels}
     */
    postscriptLevel: PostScriptLevels,


    /**
     * If true, exports facing pages as a single page that has the width of the spread. If false, exports spread pages as separate pages.
     * @type {boolean}
     */
    epsSpreads: undefined,


    /**
     * The image data to export to the EPS document.
     * @type {EPSImageData}
     */
    imageData: EPSImageData,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the EPSExportPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return EPSExportPreference
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

