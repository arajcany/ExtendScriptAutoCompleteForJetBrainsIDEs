/*
 * A hidden text object.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var HiddenText = {


    /**
     * The insertion point before the table in the story containing the table.
     * @type {InsertionPoint}
     * @readonly
     */
    storyOffset: InsertionPoint,


    /**
     * The unique ID of the HiddenText.
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
     * The parent of the HiddenText (a Story, XmlStory, TextFrame, EndnoteTextFrame, InsertionPoint, Note, Cell or Footnote).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the HiddenText within its containing object.
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
     * A property that can be set to any string.
     * @type {string}
     */
    label: undefined,


    /**
     * The name of the HiddenText; this is an alias to the HiddenText's label property.
     * @type {string}
     */
    name: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



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
     * Generates a string which, if executed, will return the HiddenText.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return HiddenText
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

