/*
 * A cross reference text source object.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var CrossReferenceSource = {


    /**
     * If true, the hyperlink is hidden.
     * @type {boolean}
     * @readonly
     */
    hidden: undefined,


    /**
     * The unique ID of the CrossReferenceSource.
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
     * The parent of the CrossReferenceSource (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


    /**
     * The index of the CrossReferenceSource within its containing object.
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
     * Format used for cross reference source.
     * @type {CrossReferenceFormat}
     */
    appliedFormat: CrossReferenceFormat,


    /**
     * The name of the CrossReferenceSource.
     * @type {string}
     */
    name: undefined,


    /**
     * The hyperlinked text or insertion point.
     * @type {Text}
     */
    sourceText: Text,


    /**
     * Character style of the hyperlink text source.
     * @type {CharacterStyle}
     */
    appliedCharacterStyle: CharacterStyle,


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
     * Updates cross reference text source content.
     *
     * @return undefined
     */
    update: function () {
        
    },


    /**
     * Deletes the CrossReferenceSource.
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
     * Generates a string which, if executed, will return the CrossReferenceSource.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return CrossReferenceSource
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

