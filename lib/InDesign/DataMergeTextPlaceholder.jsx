/*
 * An object that can contain a data merge text field.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var DataMergeTextPlaceholder = {


    /**
     * The data merge field to insert in the placeholder. For information, see data merge text placeholder and data merge image placeholder.
     * @type {DataMergeField}
     * @readonly
     */
    field: DataMergeField,


    /**
     * The insertion point before the table in the story containing the table.
     * @type {InsertionPoint}
     * @readonly
     */
    storyOffset: InsertionPoint,


    /**
     * The story that contains the text.
     * @type {Story}
     * @readonly
     */
    parentStory: Story,


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the DataMergeTextPlaceholder (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


    /**
     * The index of the DataMergeTextPlaceholder within its containing object.
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
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the DataMergeTextPlaceholder.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return DataMergeTextPlaceholder
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

