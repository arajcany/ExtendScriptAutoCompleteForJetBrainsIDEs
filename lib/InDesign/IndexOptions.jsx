/*
 * Index options.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var IndexOptions = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the IndexOptions (a Document or Application).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


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
     * The title of the generated index.
     * @type {string}
     */
    title: undefined,


    /**
     * The paragraph style applied to the title of the generated index. Can also accept: String.
     * @type {ParagraphStyle}
     */
    titleStyle: ParagraphStyle,


    /**
     * If true, replaces the content of the existing index. Note: Replaces only index content; does not update the index location or other index properties that may have been changed.
     * @type {boolean}
     */
    replaceExistingIndex: undefined,


    /**
     * If true, includes topics and page references from all the documents in a book.
     * @type {boolean}
     */
    includeBookDocuments: undefined,


    /**
     * If true, includes topics and page references on hidden layers.
     * @type {boolean}
     */
    includeHiddenEntries: undefined,


    /**
     * The format for level 2 and lower index topics.
     * @type {IndexFormat}
     */
    indexFormat: IndexFormat,


    /**
     * If true, displays the letters of the alphabet as index section headings.
     * @type {boolean}
     */
    includeSectionHeadings: undefined,


    /**
     * If true, displays headings for sections with no index topics. Note: Valid only when include section headings is true.
     * @type {boolean}
     */
    includeEmptyIndexSections: undefined,


    /**
     * The paragraph style applied to level 1 index topics.
     * @type {ParagraphStyle}
     */
    level1Style: ParagraphStyle,


    /**
     * The paragraph style applied to level 2 index topics.
     * @type {ParagraphStyle}
     */
    level2Style: ParagraphStyle,


    /**
     * The paragraph style applied to level 3 index topics.
     * @type {ParagraphStyle}
     */
    level3Style: ParagraphStyle,


    /**
     * The paragraph style applied to level 4 index topics.
     * @type {ParagraphStyle}
     */
    level4Style: ParagraphStyle,


    /**
     * The paragraph style applied to index section headings. Note: Valid when include section headings is true.
     * @type {ParagraphStyle}
     */
    sectionHeadingStyle: ParagraphStyle,


    /**
     * The character style applied to page numbers in the index.
     * @type {CharacterStyle}
     */
    pageNumberStyle: CharacterStyle,


    /**
     * The character style applied to cross references.
     * @type {CharacterStyle}
     */
    crossReferenceStyle: CharacterStyle,


    /**
     * The character style applied to cross reference topics.
     * @type {CharacterStyle}
     */
    crossReferenceTopicStyle: CharacterStyle,


    /**
     * The character(s) inserted after each index topic.
     * @type {string}
     */
    followingTopicSeparator: undefined,


    /**
     * The character(s) inserted between index entries when runin-style index format is used for nested topics.
     * @type {string}
     */
    betweenEntriesSeparator: undefined,


    /**
     * The character(s) inserted between page numbers to indicate a page range.
     * @type {string}
     */
    pageRangeSeparator: undefined,


    /**
     * The character(s) inserted between separate page numbers, page numbers and page ranges, and series of page ranges.
     * @type {string}
     */
    betweenPageNumbersSeparator: undefined,


    /**
     * The character(s) inserted at the start of cross references.
     * @type {string}
     */
    beforeCrossReferenceSeparator: undefined,


    /**
     * The character(s) inserted at the end of each index entry.
     * @type {string}
     */
    entryEndSeparator: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the IndexOptions.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return IndexOptions
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

