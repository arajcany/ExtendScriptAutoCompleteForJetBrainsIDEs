/*
 * A script menu action.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var ScriptMenuAction = {


    /**
     * Dispatched when the ScriptMenuAction is invoked. This event does not bubble. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    ON_INVOKE: onInvoke,


    /**
     * Dispatched before the ScriptMenuAction is displayed. This event does not bubble. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_DISPLAY: beforeDisplay,


    /**
     * Dispatched before the ScriptMenuAction is invoked. This event does not bubble. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_INVOKE: beforeInvoke,


    /**
     * Dispatched after the ScriptMenuAction is invoked. This event does not bubble. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_INVOKE: afterInvoke,


    /**
     * The unique ID of the ScriptMenuAction.
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
     * The parent of the ScriptMenuAction (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


    /**
     * The index of the ScriptMenuAction within its containing object.
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
     * The name of the ScriptMenuAction.
     * @type {string}
     */
    name: undefined,


    /**
     * The name of the ScriptMenuAction for display in the user interface. The title includes any ampersand characters (&), which are used to tell the Windows OS to underline the following character in the name for use with the Alt key to navigate to a menu item. Double ampersands are used to display an actual ampersand character in the name. The Mac OS ignores and removes the extra ampersand characters.
     * @type {string}
     */
    title: undefined,


    /**
     * The menu action area.
     * @type {string}
     */
    area: undefined,


    /**
     * If true, the ScriptMenuAction is enabled.
     * @type {boolean}
     */
    enabled: undefined,


    /**
     * If true, the menu item associated with the menu action is checked.
     * @type {boolean}
     */
    checked: undefined,


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
     * Deletes the ScriptMenuAction.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Invoke the action.
     *
     * @return undefined
     */
    invoke: function () {
        
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
     * Generates a string which, if executed, will return the ScriptMenuAction.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return ScriptMenuAction
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

