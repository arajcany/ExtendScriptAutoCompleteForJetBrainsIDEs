/*
 * Excel import preferences.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var ExcelImportPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the ExcelImportPreference (a Application).
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
     * If true, convert straight quotes and apostrophes in the imported text to typographic quotation marks and apostrophes.
     * @type {boolean}
     */
    useTypographersQuotes: undefined,


    /**
     * If true, preserves inline graphics.
     * @type {boolean}
     */
    preserveGraphics: undefined,


    /**
     * The stored custom or personal view(s) to import with the file.
     * @type {string}
     */
    viewName: undefined,


    /**
     * The worksheet to import.
     * @type {string}
     */
    sheetName: undefined,


    /**
     * The worksheet's index. For information, see sheet name.
     * @type {number}
     */
    sheetIndex: undefined,


    /**
     * The range of cells to import. Note: Use a colon (:) to separate the start and end cell names in the range.
     * @type {string}
     */
    rangeName: undefined,


    /**
     * The cell alignment for the imported document.
     * @type {AlignmentStyleOptions}
     */
    alignmentStyle: AlignmentStyleOptions,


    /**
     * The number of decimal places to include. Note: Valid only when alignment style is decimal.
     * @type {number}
     */
    decimalPlaces: undefined,


    /**
     * If true, shows hidden cells.
     * @type {boolean}
     */
    showHiddenCells: undefined,


    /**
     * The import error code. (Key: 0=Success; 1=Empty Sheet; 2=Invalid sheet; 3=Invalid range; 4=Invalid View; 5=Misc. Error)
     * @type {number}
     */
    errorCode: undefined,


    /**
     * The format for imported spreadsheets.
     * @type {TableFormattingOptions}
     */
    tableFormatting: TableFormattingOptions,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the ExcelImportPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return ExcelImportPreference
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

