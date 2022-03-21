/*
 * A font.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var Font = {


    /**
     * If true, the font can be embedded.
     * @type {boolean}
     * @readonly
     */
    allowEditableEmbedding: undefined,


    /**
     * If true, the font can be converted to outlines.
     * @type {boolean}
     * @readonly
     */
    allowOutlines: undefined,


    /**
     * If true, the font can be embedded in a PDF document.
     * @type {boolean}
     * @readonly
     */
    allowPDFEmbedding: undefined,


    /**
     * If true, the can font be printed.
     * @type {boolean}
     * @readonly
     */
    allowPrinting: undefined,


    /**
     * The name of the font family
     * @type {string}
     * @readonly
     */
    fontFamily: undefined,


    /**
     * The full path to the Font.
     * @type {string}
     * @readonly
     */
    location: undefined,


    /**
     * The name of the Font.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The PostScript name of the font.
     * @type {string}
     * @readonly
     */
    postscriptName: undefined,


    /**
     * If true, the font allows only restricted printing.
     * @type {boolean}
     * @readonly
     */
    restrictedPrinting: undefined,


    /**
     * The status of the font.
     * @type {FontStatus}
     * @readonly
     */
    status: FontStatus,


    /**
     * The name of the font style.
     * @type {string}
     * @readonly
     */
    fontStyleName: undefined,


    /**
     * The type of font.
     * @type {FontTypes}
     * @readonly
     */
    fontType: FontTypes,


    /**
     * Number of design axes in variable font.
     * @type {number}
     * @readonly
     */
    numDesignAxes: undefined,


    /**
     * The name of design axes in variable font.
     * @type {string}
     * @readonly
     */
    designAxesName: undefined,


    /**
     * Range of design axes in variable font. Can return: Array of Arrays of 2 Reals.
     * @type {varies=any}
     * @readonly
     */
    designAxesRange: undefined,


    /**
     * Value of design axes in variable font.
     * @type {number}
     * @readonly
     */
    designAxesValues: undefined,


    /**
     * The writing script.
     * @type {number}
     * @readonly
     */
    writingScript: undefined,


    /**
     * The full font name.
     * @type {string}
     * @readonly
     */
    fullName: undefined,


    /**
     * The full native name of the font.
     * @type {string}
     * @readonly
     */
    fullNameNative: undefined,


    /**
     * The native name of the font style.
     * @type {string}
     * @readonly
     */
    fontStyleNameNative: undefined,


    /**
     * The platform font name.
     * @type {string}
     * @readonly
     */
    platformName: undefined,


    /**
     * The font version.
     * @type {string}
     * @readonly
     */
    version: undefined,


    /**
     * The registry of a CID font.
     * @type {string}
     * @readonly
     */
    registry: undefined,


    /**
     * The ordering of a CID font.
     * @type {string}
     * @readonly
     */
    ordering: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the Font (a Document or Application).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the Font within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


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
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Checks whether the font supports the specified OpenType feature.
     *
     * @param {varies=any} [using] The OpenType feature to check for, specified either as an OpenType feature or a string. Can accept: OpenTypeFeature enumerator or String.
     * @return boolean
     */
    checkOpenTypeFeature: function (using) {
        
    },


    /**
     * Create a copy of the font with just enough information to render the list of characters given.
     *
     * @param {string} [charactersForSubset] String with all the characters used in the resulting font.
     * @param {File} [fontDestination] File location for the new font.
     * @return undefined
     */
    createSubsetFont: function (charactersForSubset, fontDestination) {
        
    },


    /**
     * Generates a string which, if executed, will return the Font.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Font
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

