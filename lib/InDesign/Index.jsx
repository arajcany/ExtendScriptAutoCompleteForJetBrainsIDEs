/*
 * An index.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var Index = {


    /**
     * The topics in the specified index section.
     * @type {Topic}
     * @readonly
     */
    allTopics: Topic,


    /**
     * The unique ID of the Index.
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
     * The parent of the Index (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


    /**
     * The index of the Index within its containing object.
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
     * A collection of index sections.
     * @type {IndexSections}
     * @readonly
     */
    indexSections: IndexSections,


    /**
     * A collection of index topics.
     * @type {Topics}
     * @readonly
     */
    topics: Topics,


    /**
     * A property that can be set to any string.
     * @type {string}
     */
    label: undefined,


    /**
     * The name of the Index; this is an alias to the Index's label property.
     * @type {string}
     */
    name: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Imports a list of index topics.
     *
     * @param {File} [from] The file from which to import the topics.
     * @return undefined
     */
    importTopics: function (from) {
        
    },


    /**
     * Removes all index topics that do not have any index entries.
     *
     * @return undefined
     */
    removeUnusedTopics: function () {
        
    },


    /**
     * Makes the initial letter for the specified index topic or group of index topics upper case.
     *
     * @param {IndexCapitalizationOptions} [capitalizationOption] The entry or entries to capitalize. (Optional) (default: IndexCapitalizationOptions.ALL_ENTRIES)
     * @return undefined
     */
    capitalize: function (capitalizationOption) {
        
    },


    /**
     * Updates the index preview pane. Note: Does not update the index.
     *
     * @return undefined
     */
    update: function () {
        
    },


    /**
     * Generates a new index story.
     *
     * @param {varies=any} [on] The spread or page on which to place the story. Can accept: Page, Spread or MasterSpread. (Optional)
     * @param {Measurement Unit (Number or String)=any} [placePoint] The coordinates of the upper left corner of the story bounding box, in the format [x, y]. (Optional)
     * @param {Layer} [destinationLayer] The layer on which to place the story. (Optional)
     * @param {boolean} [autoflowing] If true, allows the story to flow onto subsequent pages if the story does not fit on the specified page. If no subsequent pages exist in the document, creates the necessary pages. (Optional) (default: false)
     * @param {boolean} [includeOverset] If true, includes topics in overset text in the story.  (Optional) (default: false)
     * @return Story
     */
    generate: function (on, placePoint, destinationLayer, autoflowing, includeOverset) {
        
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
     * Generates a string which, if executed, will return the Index.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Index
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

