/*
 * A range of characters from a text item.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var TextRange = {


    /**
     * The object's container.
     * @type {Object}
     * @readonly
     */
    parent: Object,


    /**
     * The class name of the object.
     * @type {string}
     * @readonly
     */
    typename: undefined,


    /**
     * Offset of the first character of the range from the beginning of the story, in characters.
     * @type {Int32}
     */
    characterOffset: Int32,


    /**
     * Length of text range.
     * @type {Int32}
     */
    length: Int32,


    /**
     * The text string.
     * @type {string}
     */
    contents: undefined,


    /**
     * Controls the spacing between two characters (in milli-ems)
     * @type {Int32}
     */
    kerning: Int32,


    /**
     * The story of the text range.
     * @type {Story}
     * @readonly
     */
    story: Story,


    /**
     * The selected text (ranges) in the text range.
     * @type {TextRange}
     * @readonly
     */
    textSelection: TextRange,


    /**
     * All the characters in this text range.
     * @type {Characters}
     * @readonly
     */
    characters: Characters,


    /**
     * All the words in this text range.
     * @type {Words}
     * @readonly
     */
    words: Words,


    /**
     * All the lines in this text range.
     * @type {Lines}
     * @readonly
     */
    lines: Lines,


    /**
     * All the paragraphs in this text range.
     * @type {Paragraphs}
     * @readonly
     */
    paragraphs: Paragraphs,


    /**
     * All the text in this text range.
     * @type {TextRanges}
     * @readonly
     */
    textRanges: TextRanges,


    /**
     * All the insertion points in this text range.
     * @type {InsertionPoints}
     * @readonly
     */
    insertionPoints: InsertionPoints,


    /**
     * List of referenced character styles in the text range.
     * @type {CharacterStyles}
     * @readonly
     */
    characterStyles: CharacterStyles,


    /**
     * List of referenced paragraph styles in the text range.
     * @type {ParagraphStyles}
     * @readonly
     */
    paragraphStyles: ParagraphStyles,


    /**
     * The character properties for the text range.
     * @type {CharacterAttributes}
     * @readonly
     */
    characterAttributes: CharacterAttributes,


    /**
     * The paragraph properties for the text range.
     * @type {ParagraphAttributes}
     * @readonly
     */
    paragraphAttributes: ParagraphAttributes,


    /**
     * Start index of the text range.
     * @type {Int32}
     */
    start: Int32,


    /**
     * End index of the text range.
     * @type {Int32}
     */
    end: Int32,



    /**
     * Move the object.
     *
     * @param {Object} [relativeObject] 
     * @param {ElementPlacement} [insertionLocation]
     * @return TextRange
     */
    move: function (relativeObject, insertionLocation) {
        
    },


    /**
     * Duplicate this object.
     *
     * @param {Object} [relativeObject] 
     * @param {ElementPlacement} [insertionLocation]
     * @return TextRange
     */
    duplicate: function (relativeObject, insertionLocation) {
        
    },


    /**
     * Deletes this object.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Deletes all elements.
     *
     * @return undefined
     */
    removeAll: function () {
        
    },


    /**
     * Select the text range.
     *
     * @param {boolean} [addToDocument] Whether to add the text range to the document text selection. (default: false)
     * @return undefined
     */
    select: function (addToDocument) {
        
    },


    /**
     * Deselect the text range.
     *
     * @return undefined
     */
    deSelect: function () {
        
    },


    /**
     * Get the length of the first text run.
     *
     * @return Int32
     */
    getTextRunLength: function () {
        
    },


    /**
     * Get the length of the first paragraph.
     *
     * @return Int32
     */
    getParagraphLength: function () {
        
    },


    /**
     * Change the capitalization of text.
     *
     * @param {CaseChangeType} [type] The type of case.
     * @return undefined
     */
    changeCaseTo: function (type) {
        
    },


};

