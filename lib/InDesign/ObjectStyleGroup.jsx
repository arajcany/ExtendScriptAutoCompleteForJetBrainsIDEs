/*
 * An object style group.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var ObjectStyleGroup = {


    /**
     * All object styles contained by the ObjectStyleGroup.
     * @type {ObjectStyle}
     * @readonly
     */
    allObjectStyles: ObjectStyle,


    /**
     * The unique ID of the ObjectStyleGroup.
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
     * The parent of the ObjectStyleGroup (a Document, Application or ObjectStyleGroup).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the ObjectStyleGroup within its containing object.
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
     * A collection of object styles.
     * @type {ObjectStyles}
     * @readonly
     */
    objectStyles: ObjectStyles,


    /**
     * A collection of object style groups.
     * @type {ObjectStyleGroups}
     * @readonly
     */
    objectStyleGroups: ObjectStyleGroups,


    /**
     * The name of the ObjectStyleGroup.
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
     * Duplicates the ObjectStyleGroup.
     *
     * @return ObjectStyleGroup
     */
    duplicate: function () {
        
    },


    /**
     * Moves the ObjectStyleGroup to the specified location.
     *
     * @param {LocationOptions} [to] The new location relative to the reference object or within the container object.
     * @param {varies=any} [reference] The reference object. Note: Required when the to parameter is before or after. Can accept: ObjectStyle, ObjectStyleGroup, Document or Application. (Optional)
     * @return ObjectStyleGroup
     */
    move: function (to, reference) {
        
    },


    /**
     * Deletes the ObjectStyleGroup.
     *
     * @param {ObjectStyle} [replacingWith] The ObjectStyleGroup to apply in place of the deleted ObjectStyleGroup. (Optional)
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
     * Generates a string which, if executed, will return the ObjectStyleGroup.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return ObjectStyleGroup
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

