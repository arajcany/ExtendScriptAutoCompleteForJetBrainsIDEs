/*
 * Print booklet options.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var PrintBookletOption = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the PrintBookletOption (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


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
     * The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). Can return: PageRange enumerator or String.
     * @type {varies=any}
     */
    pageRange: undefined,


    /**
     * The type of booklet.
     * @type {BookletTypeOptions}
     */
    bookletType: BookletTypeOptions,


    /**
     * The amount of space between pages.
     * @type {Measurement Unit (Number or String)=any}
     */
    spaceBetweenPages: undefined,


    /**
     * The amount of bleed between pages.
     * @type {Measurement Unit (Number or String)=any}
     */
    bleedBetweenPages: undefined,


    /**
     * The amount of creep (binding adjustment based on paper thickness) to add.
     * @type {Measurement Unit (Number or String)=any}
     */
    creep: undefined,


    /**
     * The signature size of booklet (for perfect binding).
     * @type {SignatureSizeOptions}
     */
    signatureSize: SignatureSizeOptions,


    /**
     * Top margin of the printed booklet.
     * @type {Measurement Unit (Number or String)=any}
     */
    topMargin: undefined,


    /**
     * Bottom margin of the printed booklet.
     * @type {Measurement Unit (Number or String)=any}
     */
    bottomMargin: undefined,


    /**
     * Left margin of the printed booklet.
     * @type {Measurement Unit (Number or String)=any}
     */
    leftMargin: undefined,


    /**
     * Right margin of the printed booklet.
     * @type {Measurement Unit (Number or String)=any}
     */
    rightMargin: undefined,


    /**
     * If true, automatically adjust margins to fit the specified printer's marks and bleed area.
     * @type {boolean}
     */
    autoAdjustMargins: true,


    /**
     * If true, make all margins equal to the top margin.
     * @type {boolean}
     */
    marginsUniformSize: false,


    /**
     * If true, print blank spreads.
     * @type {boolean}
     */
    printBlankPrinterSpreads: true,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the PrintBookletOption.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return PrintBookletOption
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

