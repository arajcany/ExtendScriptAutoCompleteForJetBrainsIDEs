/*
 * A bookmark.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var Bookmark = {


    /**
     * The indent level of the bookmark.
     * @type {number}
     * @readonly
     */
    indent: undefined,


    /**
     * The destination that the hyperlink points to. Can return: HyperlinkTextDestination, HyperlinkPageDestination, HyperlinkExternalPageDestination or Page.
     * @type {varies=any}
     * @readonly
     */
    destination: undefined,


    /**
     * The unique ID of the Bookmark.
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
     * The parent of the Bookmark (a Document or Bookmark).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the Bookmark within its containing object.
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
     * A collection of bookmarks.
     * @type {Bookmarks}
     * @readonly
     */
    bookmarks: Bookmarks,


    /**
     * The name of the Bookmark.
     * @type {string}
     */
    name: undefined,


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
     * Deletes the Bookmark.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Moves the bookmark to the specified location.
     *
     * @param {LocationOptions} [to] The bookmark location relative to the reference object or within the containing object. (Optional) (default: LocationOptions.AT_END)
     * @param {varies=any} [reference] The reference object. Note: Required when the to parameter specifies before or after. Can accept: Bookmark, Document or Bookmark. (Optional)
     * @return Bookmark
     */
    move: function (to, reference) {
        
    },


    /**
     * Go to the bookmark.
     *
     * @return undefined
     */
    showBookmark: function () {
        
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
     * Generates a string which, if executed, will return the Bookmark.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Bookmark
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

