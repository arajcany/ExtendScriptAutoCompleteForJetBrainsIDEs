/*
 * Document preferences.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var DocumentPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the DocumentPreference (a Application or Document).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


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
     * The color of the column guides, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values,, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
     * @type {varies=any}
     */
    columnGuideColor: undefined,


    /**
     * The color of the margin guides, specified either as an array of three doubles, each in the range 0 to 255, representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
     * @type {varies=any}
     */
    marginGuideColor: undefined,


    /**
     * If true, the document A-master has primary text frames when a new document is created.
     * @type {boolean}
     */
    createPrimaryTextFrame: undefined,


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
     * The amount to offset the top document bleed.
     * @type {Measurement Unit (Number or String)=any}
     */
    documentBleedTopOffset: undefined,


    /**
     * The amount to offset the bottom document bleed. Note: To set the bleed bottom offset, document bleed uniform size must be false.
     * @type {Measurement Unit (Number or String)=any}
     */
    documentBleedBottomOffset: undefined,


    /**
     * The amount to offset the inside or left document bleed. Note: To set the bleed inside or left offset, document bleed uniform size must be false.
     * @type {Measurement Unit (Number or String)=any}
     */
    documentBleedInsideOrLeftOffset: undefined,


    /**
     * The amount to offset the outside or right document bleed. Note: To set the bleed outside or right offset, document bleed uniform size must be false.
     * @type {Measurement Unit (Number or String)=any}
     */
    documentBleedOutsideOrRightOffset: undefined,


    /**
     * If true, uses the document bleed top offset value for bleed offset measurements on all sides of the document. The default setting is true.
     * @type {boolean}
     */
    documentBleedUniformSize: undefined,


    /**
     * The amount to offset the top slug.
     * @type {Measurement Unit (Number or String)=any}
     */
    slugTopOffset: undefined,


    /**
     * The amount to offset the bottom slug. Note: To set the slug bottom offset, document slug uniform size must be false.
     * @type {Measurement Unit (Number or String)=any}
     */
    slugBottomOffset: undefined,


    /**
     * The amount to offset the inside or left slug. Note: To set the slug inside or left offset, document slug uniform size must be false.
     * @type {Measurement Unit (Number or String)=any}
     */
    slugInsideOrLeftOffset: undefined,


    /**
     * The amount to offset the outside or right slug. Note: To set the slug right or outside offset, document slug uniform size must be false.
     * @type {Measurement Unit (Number or String)=any}
     */
    slugRightOrOutsideOffset: undefined,


    /**
     * If true, uses the slug top offset value for slug measurements on all sides of the document. The default value is false.
     * @type {boolean}
     */
    documentSlugUniformSize: undefined,


    /**
     * If true, preserves the layout of spreads that contained more than two pages when allow page shuffle was turned on. If false, changes multi-page spreads to two-page spreads if the spreads were created or changed since allow page shuffle was turned on.
     * @type {boolean}
     */
    preserveLayoutWhenShuffling: undefined,


    /**
     * If true, guarantees that when pages are added to a spread it will contain a maximum of two pages. If false, allows pages to be added or moved into existing spreads. For override information, see preserve layout when shuffling.
     * @type {boolean}
     */
    allowPageShuffle: undefined,


    /**
     * If true, overprints black when saving the document.
     * @type {boolean}
     */
    overprintBlack: undefined,


    /**
     * If true, locks column guides.
     * @type {boolean}
     */
    columnGuideLocked: undefined,


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
     * The placement of the page binding.
     * @type {PageBindingOptions}
     */
    pageBinding: PageBindingOptions,


    /**
     * The direction of text in the column.
     * @type {HorizontalOrVertical}
     */
    columnDirection: HorizontalOrVertical,


    /**
     * The size of the page.
     * @type {string}
     */
    pageSize: undefined,


    /**
     * If true, causes UI-based snippet import to use original location for page items.
     * @type {boolean}
     */
    snippetImportUsesOriginalLocation: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the DocumentPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return DocumentPreference
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

