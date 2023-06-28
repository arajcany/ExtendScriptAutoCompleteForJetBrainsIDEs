/*
 * Word RTF import preferences.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var WordRTFImportPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the WordRTFImportPreference (a Application).
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
     * If true, imports endnotes as static text. Else live endnotes
     * @type {boolean}
     */
    importAsStaticEndnotes: undefined,


    /**
     * If true, maintains character formatting in text whose formatting has been removed. Note: Valid when remove formatting is true.
     * @type {boolean}
     */
    preserveLocalOverrides: undefined,


    /**
     * If true, imports unused styles.
     * @type {boolean}
     */
    importUnusedStyles: undefined,


    /**
     * The option for handling style name conflicts.
     * @type {ResolveStyleClash}
     */
    resolveCharacterStyleClash: ResolveStyleClash,


    /**
     * The option for resolving conflicts that arise when paragraph styles have matching names.
     * @type {ResolveStyleClash}
     */
    resolveParagraphStyleClash: ResolveStyleClash,


    /**
     * If true, preserves inline graphics.
     * @type {boolean}
     */
    preserveGraphics: undefined,


    /**
     * If true, preserves comments and edits in the imported file.
     * @type {boolean}
     */
    preserveTrackChanges: undefined,


    /**
     * If true, imports footnotes.
     * @type {boolean}
     */
    importFootnotes: undefined,


    /**
     * If true, imports endnotes.
     * @type {boolean}
     */
    importEndnotes: undefined,


    /**
     * If true, convert straight quotes and apostrophes in the imported text to typographic quotation marks and apostrophes.
     * @type {boolean}
     */
    useTypographersQuotes: undefined,


    /**
     * The option for handling manual page breaks.
     * @type {ConvertPageBreaks}
     */
    convertPageBreaks: ConvertPageBreaks,


    /**
     * If true, imports the index.
     * @type {boolean}
     */
    importIndex: undefined,


    /**
     * If true, imports the table of contents.
     * @type {boolean}
     */
    importTOC: undefined,


    /**
     * If true, removes text and table formatting.
     * @type {boolean}
     */
    removeFormatting: undefined,


    /**
     * The policy for converting tables whose formatting has been removed. Note: Valid when remove formatting is true.
     * @type {ConvertTablesOptions}
     */
    convertTablesTo: ConvertTablesOptions,


    /**
     * If true, bullets and numbers will be converted to embedded characters during import. If false, bullets and numbers will be rendered by InDesign.
     * @type {boolean}
     */
    convertBulletsAndNumbersToText: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the WordRTFImportPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return WordRTFImportPreference
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

