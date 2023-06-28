/*
 * A section.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var Section = {


    /**
     * The number of pages in the section.
     * @type {number}
     * @readonly
     */
    length: undefined,


    /**
     * The number of pages in the alternate layout section.
     * @type {number}
     * @readonly
     */
    alternateLayoutLength: undefined,


    /**
     * The unique ID of the Section.
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
     * The parent of the Section (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


    /**
     * The index of the Section within its containing object.
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
     * The alternate layout name for a set of pages.
     * @type {string}
     */
    alternateLayout: undefined,


    /**
     * The name of the Section.
     * @type {string}
     */
    name: undefined,


    /**
     * The page number style. Can return: PageNumberStyle enumerator or String.
     * @type {varies=any}
     */
    pageNumberStyle: undefined,


    /**
     * If true, continues page numbers sequentially from the previous section.
     * @type {boolean}
     */
    continueNumbering: undefined,


    /**
     * If true, places the specified prefix before page numbers on all pages in the section.
     * @type {boolean}
     */
    includeSectionPrefix: undefined,


    /**
     * The page number assigned to the first page in the section. Note: Valid only when continue numbering is false.
     * @type {number}
     */
    pageNumberStart: undefined,


    /**
     * The section marker.
     * @type {string}
     */
    marker: undefined,


    /**
     * The start page for the section.
     * @type {Page}
     */
    pageStart: Page,


    /**
     * The prefix to place before page numbers on pages in the section. May include up to 8 characters. Note: Valid only when include section prefix is true.
     * @type {string}
     */
    sectionPrefix: undefined,


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
     * Deletes the Section.
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
     * Generates a string which, if executed, will return the Section.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Section
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

