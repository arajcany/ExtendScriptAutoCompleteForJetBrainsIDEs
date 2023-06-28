/*
 * A cell style group.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var CellStyleGroup = {


    /**
     * All Cell styles
     * @type {CellStyle}
     * @readonly
     */
    allCellStyles: CellStyle,


    /**
     * The unique ID of the CellStyleGroup.
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
     * The parent of the CellStyleGroup (a Document, Application or CellStyleGroup).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the CellStyleGroup within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * A collection of cell styles.
     * @type {CellStyles}
     * @readonly
     */
    cellStyles: CellStyles,


    /**
     * A collection of cell style groups.
     * @type {CellStyleGroups}
     * @readonly
     */
    cellStyleGroups: CellStyleGroups,


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
     * The name of the CellStyleGroup.
     * @type {string}
     */
    name: undefined,


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
     * Duplicates the CellStyleGroup.
     *
     * @return CellStyleGroup
     */
    duplicate: function () {
        
    },


    /**
     * Moves the style to the specified location.
     *
     * @param {LocationOptions} [to] The location relative to the reference object or within the containing object.
     * @param {varies=any} [reference] The reference object. Note: Required when the to parameter specifies before or after. Can accept: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. (Optional)
     * @return CellStyleGroup
     */
    move: function (to, reference) {
        
    },


    /**
     * Deletes the style.
     *
     * @param {varies=any} [replacingWith] The style to apply in place of the deleted style. Can accept: ParagraphStyle or CharacterStyle. (Optional)
     * @return undefined
     */
    remove: function (replacingWith) {
        
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
     * Generates a string which, if executed, will return the CellStyleGroup.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return CellStyleGroup
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

