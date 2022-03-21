/*
 * A text object that is on a path.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var TextPath = {


    /**
     * Dispatched before a TextPath is placed. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_PLACE: beforePlace,


    /**
     * Dispatched after a TextPath is placed. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_PLACE: afterPlace,


    /**
     * The halfway point between the start bracket and the end bracket.
     * @type {number}
     * @readonly
     */
    centerBracket: undefined,


    /**
     * The story that contains the text.
     * @type {Story}
     * @readonly
     */
    parentStory: Story,


    /**
     * The first text frame in the thread. Can return: TextFrame or TextPath.
     * @type {varies=any}
     * @readonly
     */
    startTextFrame: undefined,


    /**
     * The last text frame in the thread. Can return: TextFrame or TextPath.
     * @type {varies=any}
     * @readonly
     */
    endTextFrame: undefined,


    /**
     * The index of the text frame within the story.
     * @type {number}
     * @readonly
     */
    textFrameIndex: undefined,


    /**
     * If true, the story has overset text.
     * @type {boolean}
     * @readonly
     */
    overflows: undefined,


    /**
     * The unique ID of the TextPath.
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
     * The parent of the TextPath (a SplineItem, Polygon, GraphicLine, Rectangle, Oval, TextFrame, EndnoteTextFrame or EPSText).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the TextPath within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


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
     * The alignment of the type on a path.
     * @type {PathTypeAlignments}
     */
    pathAlignment: PathTypeAlignments,


    /**
     * The alignment applied to the type on a path.
     * @type {TextTypeAlignments}
     */
    textAlignment: TextTypeAlignments,


    /**
     * The effect applied to the type on a path.
     * @type {TextPathEffects}
     */
    pathEffect: TextPathEffects,


    /**
     * The flip effect applied to the type on a path.
     * @type {FlipValues}
     */
    flipPathEffect: FlipValues,


    /**
     * The spacing applied to the type on a path.
     * @type {number}
     */
    pathSpacing: undefined,


    /**
     * The location of the start of the type on the path, expressed in points. Note: 0 is the first point on the path.
     * @type {number}
     */
    startBracket: undefined,


    /**
     * The end of the type on a path. Note: Additional text becomes overset text unless the text is linked to another path or text frame.
     * @type {number}
     */
    endBracket: undefined,


    /**
     * The previous text frame in the thread. Can return: TextFrame or TextPath. Can also accept: NothingEnum enumerator.
     * @type {varies=any}
     */
    previousTextFrame: undefined,


    /**
     * The next text frame in the thread. Can return: TextFrame or TextPath. Can also accept: NothingEnum enumerator.
     * @type {varies=any}
     */
    nextTextFrame: undefined,


    /**
     * The contents of the text frame. Can return: String, TextFrameContents enumerator or SpecialCharacters enumerator.
     * @type {varies=any}
     */
    contents: undefined,


    /**
     * A property that can be set to any string.
     * @type {string}
     */
    label: undefined,


    /**
     * The name of the TextPath; this is an alias to the TextPath's label property.
     * @type {string}
     */
    name: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Finds text that matches the find what value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    findText: function (reverseOrder) {
        
    },


    /**
     * Finds text that matches the find what value and replaces the text with the change to value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    changeText: function (reverseOrder) {
        
    },


    /**
     * Finds text that matches the find what value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    findGrep: function (reverseOrder) {
        
    },


    /**
     * Finds text that matches the find what value and replaces the text with the change to value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    changeGrep: function (reverseOrder) {
        
    },


    /**
     * Finds glyphs that match the find what value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    findGlyph: function (reverseOrder) {
        
    },


    /**
     * Finds glyphs that match the find what value and replaces the glyphs with the change to value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    changeGlyph: function (reverseOrder) {
        
    },


    /**
     * Finds text that matches the find character type value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    findTransliterate: function (reverseOrder) {
        
    },


    /**
     * Finds text that matches the find character type value and replaces the text with the change character type value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    changeTransliterate: function (reverseOrder) {
        
    },


    /**
     * Deletes the TextPath.
     *
     * @return undefined
     */
    remove: function () {
        
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
     * Generates a string which, if executed, will return the TextPath.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return TextPath
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

