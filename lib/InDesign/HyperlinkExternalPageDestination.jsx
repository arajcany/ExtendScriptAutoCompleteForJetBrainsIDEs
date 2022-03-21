/*
 * A hyperlink destination that is a page in a document other than the document that contains the hyperlink source. For information on hyperlink sources, hyperlink page item source or hyperlink text source.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var HyperlinkExternalPageDestination = {


    /**
     * The name of the HyperlinkExternalPageDestination.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * If true, the hyperlink is hidden.
     * @type {boolean}
     * @readonly
     */
    hidden: undefined,


    /**
     * The unique ID of the HyperlinkExternalPageDestination.
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
     * The parent of the HyperlinkExternalPageDestination (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


    /**
     * The index of the HyperlinkExternalPageDestination within its containing object.
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
     * The path to the document that the hyperlink destination points to.
     * @type {File}
     */
    documentPath: File,


    /**
     * The index of the page that the hyperlink destination points to. Note: Valid only when hyperlink destination is an external page.
     * @type {number}
     */
    destinationPageIndex: undefined,


    /**
     * The destination page size when the page is reached by clicking the hyperlink.
     * @type {HyperlinkDestinationPageSetting}
     */
    viewSetting: HyperlinkDestinationPageSetting,


    /**
     * The view rectangle, specified in the format [y1, x1, y2, x2]. Note: Valid only when view setting is fixed. Can return: Ordered array containing top:Unit, left:Unit, bottom:Unit, right:Unit.
     * @type {varies=any}
     */
    viewBounds: undefined,


    /**
     * The zoom percentage. (Range: 5 to 4000) Note: Valid only when view setting is fixed.
     * @type {number}
     */
    viewPercentage: undefined,


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
     * Deletes the HyperlinkExternalPageDestination.
     *
     * @return undefined
     */
    remove: function () {
        
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
     * Generates a string which, if executed, will return the HyperlinkExternalPageDestination.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return HyperlinkExternalPageDestination
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

