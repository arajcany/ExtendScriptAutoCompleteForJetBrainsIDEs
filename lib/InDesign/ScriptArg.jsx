/*
 * Arguments to pass to a script.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var ScriptArg = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the ScriptArg (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


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
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Gets the value of a script argument.
     *
     * @param {string} [name] The name of the script argument.
     * @return string
     */
    get: function (name) {
        
    },


    /**
     * Gets the value of a script argument.
     *
     * @param {string} [name] The name of the script argument.
     * @return string
     */
    getValue: function (name) {
        
    },


    /**
     * Sets the value of a script argument.
     *
     * @param {string} [name] The name of the script argument.
     * @param {string} [value] The value.
     * @return undefined
     */
    set: function (name, value) {
        
    },


    /**
     * Sets the value of a script argument.
     *
     * @param {string} [name] The name of the script argument.
     * @param {string} [value] The value.
     * @return undefined
     */
    setValue: function (name, value) {
        
    },


    /**
     * Verifies whether the script argument is defined.
     *
     * @param {string} [name] The name of the script argument.
     * @return boolean
     */
    isDefined: function (name) {
        
    },


    /**
     * Clears all script arguments.
     *
     * @return undefined
     */
    clear: function () {
        
    },


    /**
     * Saves the script arguments.
     *
     * @return undefined
     */
    save: function () {
        
    },


    /**
     * Restores all script arguments.
     *
     * @return undefined
     */
    restore: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the ScriptArg.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return ScriptArg
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

