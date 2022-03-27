/*
 * A contiguous block of text.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var Story = {


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
     * The text range of the story.
     * @type {TextRange}
     * @readonly
     */
    textRange: TextRange,


    /**
     * The text frame items in this story.
     * @type {TextFrameItems}
     * @readonly
     */
    textFrames: TextFrameItems,


    /**
     * The selected text (ranges) in the story.
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
     * The number of characters in the story.
     * @type {Int32}
     * @readonly
     */
    length: Int32,




};

