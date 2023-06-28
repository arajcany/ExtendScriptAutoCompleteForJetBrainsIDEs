/*
 * A note in a story.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var Note = {


    /**
     * The date and time the note was created.
     * @type {Date}
     * @readonly
     */
    creationDate: Date,


    /**
     * The date and time the note was last modified.
     * @type {Date}
     * @readonly
     */
    modificationDate: Date,


    /**
     * The user who made the note.
     * @type {string}
     * @readonly
     */
    userName: undefined,


    /**
     * The insertion point before the table in the story containing the table.
     * @type {InsertionPoint}
     * @readonly
     */
    storyOffset: InsertionPoint,


    /**
     * The unique ID of the Note.
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
     * The parent of the Note (a XmlStory, Story, TextFrame, EndnoteTextFrame, InsertionPoint or Cell).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the Note within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * A collection of text variable instances.
     * @type {TextVariableInstances}
     * @readonly
     */
    textVariableInstances: TextVariableInstances,


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
     * A collection of text objects.
     * @type {Texts}
     * @readonly
     */
    texts: Texts,


    /**
     * A collection of characters.
     * @type {Characters}
     * @readonly
     */
    characters: Characters,


    /**
     * A collection of words.
     * @type {Words}
     * @readonly
     */
    words: Words,


    /**
     * A collection of lines.
     * @type {Lines}
     * @readonly
     */
    lines: Lines,


    /**
     * A collection of text columns.
     * @type {TextColumns}
     * @readonly
     */
    textColumns: TextColumns,


    /**
     * A collection of paragraphs.
     * @type {Paragraphs}
     * @readonly
     */
    paragraphs: Paragraphs,


    /**
     * A collection of insertion points.
     * @type {InsertionPoints}
     * @readonly
     */
    insertionPoints: InsertionPoints,


    /**
     * A collection of text style ranges.
     * @type {TextStyleRanges}
     * @readonly
     */
    textStyleRanges: TextStyleRanges,


    /**
     * A collection of hidden text objects.
     * @type {HiddenTexts}
     * @readonly
     */
    hiddenTexts: HiddenTexts,


    /**
     * If true, the note is collapsed in galley view.
     * @type {boolean}
     */
    collapsed: undefined,


    /**
     * A property that can be set to any string.
     * @type {string}
     */
    label: undefined,


    /**
     * The name of the Note; this is an alias to the Note's label property.
     * @type {string}
     */
    name: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Deletes the Note.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Converts the note to story text.
     *
     * @return undefined
     */
    convertToText: function () {
        
    },


    /**
     * Moves the note to the specified location.
     *
     * @param {LocationOptions} [to] The new location relative to the reference object or within the containing object.
     * @param {varies=any} [reference] The reference object. Note: Required when the to parameter specifies before or after. Can accept: Text or Story. (Optional)
     * @return Note
     */
    move: function (to, reference) {
        
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
     * Generates a string which, if executed, will return the Note.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Note
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

