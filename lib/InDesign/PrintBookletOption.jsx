/*
 * Print booklet options.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
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
    spaceBetweenPages: Measurement Unit (Number or String)=any,


    /**
     * The amount of bleed between pages.
     * @type {Measurement Unit (Number or String)=any}
     */
    bleedBetweenPages: Measurement Unit (Number or String)=any,


    /**
     * The amount of creep (binding adjustment based on paper thickness) to add.
     * @type {Measurement Unit (Number or String)=any}
     */
    creep: Measurement Unit (Number or String)=any,


    /**
     * The signature size of booklet (for perfect binding).
     * @type {SignatureSizeOptions}
     */
    signatureSize: SignatureSizeOptions,


    /**
     * Top margin of the printed booklet.
     * @type {Measurement Unit (Number or String)=any}
     */
    topMargin: Measurement Unit (Number or String)=any,


    /**
     * Bottom margin of the printed booklet.
     * @type {Measurement Unit (Number or String)=any}
     */
    bottomMargin: Measurement Unit (Number or String)=any,


    /**
     * Left margin of the printed booklet.
     * @type {Measurement Unit (Number or String)=any}
     */
    leftMargin: Measurement Unit (Number or String)=any,


    /**
     * Right margin of the printed booklet.
     * @type {Measurement Unit (Number or String)=any}
     */
    rightMargin: Measurement Unit (Number or String)=any,


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

