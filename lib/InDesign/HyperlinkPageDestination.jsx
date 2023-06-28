/*
 * A hyperlink destination that is a document page.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var HyperlinkPageDestination = {


    /**
     * If true, the hyperlink is hidden.
     * @type {boolean}
     * @readonly
     */
    hidden: undefined,


    /**
     * The unique ID of the HyperlinkPageDestination.
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
     * The parent of the HyperlinkPageDestination (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


    /**
     * The index of the HyperlinkPageDestination within its containing object.
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
     * The name of the HyperlinkPageDestination.
     * @type {string}
     */
    name: undefined,


    /**
     * If true or unspecified, allows a custom destination name; also does not update the name when the destination is moved to a different page. If false, uses the page number as the page destination name and makes the name property read-only for the destination object; also updates the name when the destination is moved to a different page.
     * @type {boolean}
     */
    nameManually: undefined,


    /**
     * The page that the hyperlink points to.
     * @type {Page}
     */
    destinationPage: Page,


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
     * Deletes the HyperlinkPageDestination.
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
     * Generates a string which, if executed, will return the HyperlinkPageDestination.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return HyperlinkPageDestination
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

