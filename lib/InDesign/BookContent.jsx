/*
 * A document added to a book.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var BookContent = {


    /**
     * The full path to the BookContent, including the name of the BookContent.
     * @type {File}
     * @readonly
     */
    fullName: File,


    /**
     * The status of the book content object file.
     * @type {BookContentStatus}
     * @readonly
     */
    status: BookContentStatus,


    /**
     * The size of the BookContent file.
     * @type {number}
     * @readonly
     */
    size: undefined,


    /**
     * The date and time the BookContent was created.
     * @type {Date}
     * @readonly
     */
    date: Date,


    /**
     * The page range of the book content object within the book.
     * @type {string}
     * @readonly
     */
    documentPageRange: undefined,


    /**
     * The full path to the file.
     * @type {File}
     * @readonly
     */
    filePath: File,


    /**
     * The name of the BookContent.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The unique ID of the BookContent.
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
     * The parent of the BookContent (a Book).
     * @type {Book}
     * @readonly
     */
    parent: Book,


    /**
     * The index of the BookContent within its containing object.
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
     * Preflight a book content object and optionally save the resulting report.
     *
     * @param {File} [to] The preflight report to save to. (Optional)
     * @param {boolean} [autoOpen] If true, automatically open the report after creation. (Optional) (default: false)
     * @return undefined
     */
    preflight: function (to, autoOpen) {
        
    },


    /**
     * Moves the book content object.
     *
     * @param {LocationOptions} [to] The location relative to the reference object or within the book. (Optional) (default: LocationOptions.AT_END)
     * @param {BookContent} [reference] The reference object. Note: Required when the to parameter specifies before or after. (Optional)
     * @return BookContent
     */
    move: function (to, reference) {
        
    },


    /**
     * Deletes the BookContent.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Replaces a book content object with a new file. Note: If the new file replaces the current style source document, the new file becomes the style source document.
     *
     * @param {File} [using] The full path name of the new book content object.
     * @return BookContent
     */
    replace: function (using) {
        
    },


    /**
     * Matches the formatting of the book content object to the style source document.
     *
     * @return undefined
     */
    synchronize: function () {
        
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
     * Generates a string which, if executed, will return the BookContent.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return BookContent
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

