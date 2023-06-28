/*
 * An index topic.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var Topic = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the Topic (a IndexSection, Topic or Index).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the Topic within its containing object.
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
     * A collection of index topics.
     * @type {Topics}
     * @readonly
     */
    topics: Topics,


    /**
     * A collection of index cross references. (For cross references in text, use the 'cross reference source' and 'hyperlink' objects.)
     * @type {CrossReferences}
     * @readonly
     */
    crossReferences: CrossReferences,


    /**
     * A collection of index page references.
     * @type {PageReferences}
     * @readonly
     */
    pageReferences: PageReferences,


    /**
     * The string by which the topic is sorted instead of the topic name is not used. Note: The actual topic text, rather than the sort order text, appears in the index.
     * @type {string}
     */
    sortOrder: undefined,


    /**
     * The name of the Topic.
     * @type {string}
     */
    name: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Deletes the Topic.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Makes the initial letter for the specified index topic or group of index topics upper case.
     *
     * @param {IndexCapitalizationOptions} [capitalizationOption] The entry or entries to capitalize. (Optional) (default: IndexCapitalizationOptions.ALL_ENTRIES)
     * @return undefined
     */
    capitalize: function (capitalizationOption) {
        
    },


    /**
     * Generates a string which, if executed, will return the Topic.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Topic
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

