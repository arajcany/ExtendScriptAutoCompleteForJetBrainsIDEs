/*
 * A preset that contains all of the new document settings.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var DocumentPreset = {


    /**
     * The unique ID of the DocumentPreset.
     * @type {number}
     * @readonly
     */
    id: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the DocumentPreset (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


    /**
     * The index of the DocumentPreset within its containing object.
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
     * The name of the DocumentPreset.
     * @type {string}
     */
    name: undefined,


    /**
     * The number of pages in the document. (Range: 1 to 9999)
     * @type {number}
     */
    pagesPerDocument: undefined,


    /**
     * If true, the document has facing pages.
     * @type {boolean}
     */
    facingPages: undefined,


    /**
     * The height of the page.
     * @type {Measurement Unit (Number or String)=any}
     */
    pageHeight: undefined,


    /**
     * The width of the page.
     * @type {Measurement Unit (Number or String)=any}
     */
    pageWidth: undefined,


    /**
     * The page orientation.
     * @type {PageOrientation}
     */
    pageOrientation: PageOrientation,


    /**
     * The number of columns to place on the page.
     * @type {number}
     */
    columnCount: undefined,


    /**
     * The distance between columns.
     * @type {Measurement Unit (Number or String)=any}
     */
    columnGutter: undefined,


    /**
     * The top edge of the DocumentPreset.
     * @type {Measurement Unit (Number or String)=any}
     */
    top: undefined,


    /**
     * The bottom edge of the DocumentPreset.
     * @type {Measurement Unit (Number or String)=any}
     */
    bottom: undefined,


    /**
     * The left edge of the DocumentPreset.
     * @type {Measurement Unit (Number or String)=any}
     */
    left: undefined,


    /**
     * The right edge of the DocumentPreset.
     * @type {Measurement Unit (Number or String)=any}
     */
    right: undefined,


    /**
     * The amount to offset the inside or left document bleed. Note: To set the bleed inside or left offset, document bleed uniform size must be false.
     * @type {Measurement Unit (Number or String)=any}
     */
    documentBleedInsideOrLeftOffset: undefined,


    /**
     * The amount to offset the top document bleed.
     * @type {Measurement Unit (Number or String)=any}
     */
    documentBleedTopOffset: undefined,


    /**
     * The amount to offset the outside or right document bleed. Note: To set the bleed outside or right offset, document bleed uniform size must be false.
     * @type {Measurement Unit (Number or String)=any}
     */
    documentBleedOutsideOrRightOffset: undefined,


    /**
     * The amount to offset the bottom document bleed. Note: To set the bleed bottom offset, document bleed uniform size must be false.
     * @type {Measurement Unit (Number or String)=any}
     */
    documentBleedBottomOffset: undefined,


    /**
     * The amount to offset the inside or left slug. Note: To set the slug inside or left offset, document slug uniform size must be false.
     * @type {Measurement Unit (Number or String)=any}
     */
    slugInsideOrLeftOffset: undefined,


    /**
     * The amount to offset the top slug.
     * @type {Measurement Unit (Number or String)=any}
     */
    slugTopOffset: undefined,


    /**
     * The amount to offset the outside or right slug. Note: To set the slug right or outside offset, document slug uniform size must be false.
     * @type {Measurement Unit (Number or String)=any}
     */
    slugRightOrOutsideOffset: undefined,


    /**
     * The amount to offset the bottom slug. Note: To set the slug bottom offset, document slug uniform size must be false.
     * @type {Measurement Unit (Number or String)=any}
     */
    slugBottomOffset: undefined,


    /**
     * If true, the document A-master has primary text frames when a new document is created.
     * @type {boolean}
     */
    createPrimaryTextFrame: undefined,


    /**
     * The starting page number for a document. This is the same as the starting page number for the first section of a document. Default value is 1.
     * @type {number}
     */
    startPageNumber: undefined,


    /**
     * The intent for a document.
     * @type {DocumentIntentOptions}
     */
    intent: DocumentIntentOptions,


    /**
     * If true, uses the document bleed top offset value for bleed offset measurements on all sides of the document. The default setting is true.
     * @type {boolean}
     */
    documentBleedUniformSize: undefined,


    /**
     * If true, uses the slug top offset value for slug measurements on all sides of the document. The default value is false.
     * @type {boolean}
     */
    documentSlugUniformSize: undefined,


    /**
     * The size of the page.
     * @type {string}
     */
    pageSize: undefined,


    /**
     * A property that can be set to any string.
     * @type {string}
     */
    label: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Deletes the DocumentPreset.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Duplicates the DocumentPreset.
     *
     * @return DocumentPreset
     */
    duplicate: function () {
        
    },


    /**
     * Sets the label to the value associated with the specified key.
     *
     * @param {string} [key] The key.
     * @param {string} [value] The value.
     * @return undefined
     */
    insertLabel: function (key, value) {
        
    },


    /**
     * Gets the label value associated with the specified key.
     *
     * @param {string} [key] The key.
     * @return string
     */
    extractLabel: function (key) {
        
    },


    /**
     * Generates a string which, if executed, will return the DocumentPreset.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return DocumentPreset
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

