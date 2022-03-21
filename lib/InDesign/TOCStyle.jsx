/*
 * A TOC style definition.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var TOCStyle = {


    /**
     * The unique ID of the TOCStyle.
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
     * The parent of the TOCStyle (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


    /**
     * The index of the TOCStyle within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * A collection TOC style entries.
     * @type {TOCStyleEntries}
     * @readonly
     */
    tocStyleEntries: TOCStyleEntries,


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
     * The paragraph style applied to the TOC title.
     * @type {ParagraphStyle}
     */
    titleStyle: ParagraphStyle,


    /**
     * The TOC title.
     * @type {string}
     */
    title: undefined,


    /**
     * The name of the TOCStyle.
     * @type {string}
     */
    name: undefined,


    /**
     * If true, the lowest-level TOC entries are placed on the same line as the previous entry.
     * @type {boolean}
     */
    runIn: undefined,


    /**
     * If true, the TOC includes entries from text on hidden layers.
     * @type {boolean}
     */
    includeHidden: undefined,


    /**
     * If true, includes the entire book in the TOC. If false, includes only the TOC entries in the current document. Note: Valid when the current document is part of a book.
     * @type {boolean}
     */
    includeBookDocuments: undefined,


    /**
     * If true, creates bookmarks for TOC entries.
     * @type {boolean}
     */
    createBookmarks: undefined,


    /**
     * The table of contents story direction.
     * @type {HorizontalOrVertical}
     */
    setStoryDirection: HorizontalOrVertical,


    /**
     * The format for importing numbered paragraphs into the TOC.
     * @type {NumberedParagraphsOptions}
     */
    numberedParagraphs: NumberedParagraphsOptions,


    /**
     * If true, remove forced line breaks.
     * @type {boolean}
     */
    removeForcedLineBreak: undefined,


    /**
     * If true, make text anchor in source paragraph.
     * @type {boolean}
     */
    makeAnchor: undefined,


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
     * Duplicates the TOCStyle.
     *
     * @return TOCStyle
     */
    duplicate: function () {
        
    },


    /**
     * Deletes the TOCStyle.
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
     * Generates a string which, if executed, will return the TOCStyle.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return TOCStyle
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

