/*
 * A hyperlink.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var Hyperlink = {


    /**
     * If true, the hyperlink is hidden.
     * @type {boolean}
     * @readonly
     */
    hidden: undefined,


    /**
     * The unique ID of the Hyperlink.
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
     * The parent of the Hyperlink (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


    /**
     * The index of the Hyperlink within its containing object.
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
     * The name of the Hyperlink.
     * @type {string}
     */
    name: undefined,


    /**
     * The hyperlinked text or page item. Can return: HyperlinkPageItemSource, HyperlinkTextSource or CrossReferenceSource.
     * @type {varies=any}
     */
    source: undefined,


    /**
     * If true, the Hyperlink is visible.
     * @type {boolean}
     */
    visible: undefined,


    /**
     * The hyperlink highlight style.
     * @type {HyperlinkAppearanceHighlight}
     */
    highlight: HyperlinkAppearanceHighlight,


    /**
     * The stroke weight of the hyperlink border.
     * @type {HyperlinkAppearanceWidth}
     */
    width: HyperlinkAppearanceWidth,


    /**
     * The hyperlink border color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
     * @type {varies=any}
     */
    borderColor: undefined,


    /**
     * The hyperlink border style.
     * @type {HyperlinkAppearanceStyle}
     */
    borderStyle: HyperlinkAppearanceStyle,


    /**
     * The text, page, or URL that the hyperlink points to. Can return: HyperlinkTextDestination, HyperlinkPageDestination, HyperlinkExternalPageDestination, HyperlinkURLDestination or ParagraphDestination.
     * @type {varies=any}
     */
    destination: undefined,


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
     * Deletes the Hyperlink.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Jumps to the hyperlink source.
     *
     * @return undefined
     */
    showSource: function () {
        
    },


    /**
     * Jumps to the hyperlink destination.
     *
     * @return undefined
     */
    showDestination: function () {
        
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
     * Generates a string which, if executed, will return the Hyperlink.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Hyperlink
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

