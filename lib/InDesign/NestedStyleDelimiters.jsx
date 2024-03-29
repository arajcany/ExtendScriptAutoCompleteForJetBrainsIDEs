/*
 * Delimiter options for marking the end of the application of the nested style.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var NestedStyleDelimiters = {


    /**
     * Uses the first sentence or sentences in the paragraph as the nested style delimiter. The first sentence is considered all text preceding the first period, question mark, or exclamation mark in the paragraph.
     * @type {number}
     * @readonly
     */
    SENTENCE: 1380541555,


    /**
     * Uses the first word or words in the paragraph as the nested style delimiter. The first word is considered all characters preceding the first space or white space character in the paragraph.
     * @type {number}
     * @readonly
     */
    ANY_WORD: 1380541559,


    /**
     * Uses the first character or characters other than zero-width markers as the nested style delimiter. Zero-width markers include anchors, index markers, XML tags, and so on.
     * @type {number}
     * @readonly
     */
    ANY_CHARACTER: 1380541539,


    /**
     * Uses the first alpha character or characters as the nested style delimiter. Note: To specify the number of letters, see repetition.
     * @type {number}
     * @readonly
     */
    LETTERS: 1380541548,


    /**
     * Uses the first numeric character or characters as the nested style delimiter. Note: To specify the number of digits, see repetition.
     * @type {number}
     * @readonly
     */
    DIGITS: 1380541540,


    /**
     * Uses the first tab character as the nested style delimiter. Note: Does not use the first tab stop. If no actual tab character has been inserted in the paragraph, the nested style is applied through the end of the paragraph.
     * @type {number}
     * @readonly
     */
    TABS: 1380541556,


    /**
     * Uses the first inline graphic as the nested style delimiter.
     * @type {number}
     * @readonly
     */
    INLINE_GRAPHIC: 1380541545,


    /**
     * Uses the dropcap as the nested style delimiter.
     * @type {number}
     * @readonly
     */
    DROPCAP: 1380541507,


    /**
     * Uses the first forced line break as the nested style delimiter.
     * @type {number}
     * @readonly
     */
    FORCED_LINE_BREAK: 1397124194,


    /**
     * Uses the inserted end nested style here character as the nested style delimiter.
     * @type {number}
     * @readonly
     */
    END_NESTED_STYLE: 1396855379,


    /**
     * Uses the first indent-to-here tab character as the nested style delimiter. Note: Does not use the first indent-to-here tab stop. If no actual indent-to-here tab character has been inserted in the paragraph, the nested style is applied through the end of the paragraph.
     * @type {number}
     * @readonly
     */
    INDENT_HERE_TAB: 1397319796,


    /**
     * Uses the first em space as the nested style delimiter.
     * @type {number}
     * @readonly
     */
    EM_SPACE: 1397058899,


    /**
     * Uses the first en space as the nested style delimiter.
     * @type {number}
     * @readonly
     */
    EN_SPACE: 1397059155,


    /**
     * Uses the first nonbreaking space as the nested style delimiter.
     * @type {number}
     * @readonly
     */
    NONBREAKING_SPACE: 1397645907,


    /**
     * Uses the first automatic page number as the nested style delimiter.
     * @type {number}
     * @readonly
     */
    AUTO_PAGE_NUMBER: 1396797550,


    /**
     * Uses the first section name marker as the nested style delimiter.
     * @type {number}
     * @readonly
     */
    SECTION_MARKER: 1400073805,


    /**
     * Repeat
     * @type {number}
     * @readonly
     */
    REPEAT: 1380545132,




};

