/*
 * An XML comment.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var XMLComment = {


    /**
     * The insertion point before the table in the story containing the table.
     * @type {InsertionPoint}
     * @readonly
     */
    storyOffset: InsertionPoint,


    /**
     * The unique ID of the XMLComment.
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
     * The parent of the XMLComment (a Document or XMLElement).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the XMLComment within its containing object.
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
     * The text of the XML comment.
     * @type {string}
     */
    value: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Moves the element to the specified location.
     *
     * @param {LocationOptions} [to] The location in relation to the reference object or within the containing object.
     * @param {varies=any} [reference] The reference object. Note: Required when the to parameter specifies before or after. . Can accept: XMLItem or Text. (Optional)
     * @return XMLComment
     */
    move: function (to, reference) {
        
    },


    /**
     * Duplicates the XMLComment.
     *
     * @return XMLComment
     */
    duplicate: function () {
        
    },


    /**
     * Deletes the XMLComment.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Selects the object.
     *
     * @param {SelectionOptions} [existingSelection] The selection status of the XMLComment in relation to previously selected objects. (Optional) (default: SelectionOptions.REPLACE_WITH)
     * @return undefined
     */
    select: function (existingSelection) {
        
    },


    /**
     * Generates a string which, if executed, will return the XMLComment.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return XMLComment
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

