/*
 * A location between characters, used to insert new text objects.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var InsertionPoint = {


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
     * The story of the text range.
     * @type {Story}
     * @readonly
     */
    story: Story,


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




};

