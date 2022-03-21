/*
 * A menu item.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var MenuItem = {


    /**
     * The name of the MenuItem.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The name of the MenuItem for display in the user interface. The title includes any ampersand characters (&), which are used to tell the Windows OS to underline the following character in the name for use with the Alt key to navigate to a menu item. Double ampersands are used to display an actual ampersand character in the name. The Mac OS ignores and removes the extra ampersand characters.
     * @type {string}
     * @readonly
     */
    title: undefined,


    /**
     * The unique ID of the MenuItem.
     * @type {number}
     * @readonly
     */
    id: undefined,


    /**
     * If true, the MenuItem is enabled.
     * @type {boolean}
     * @readonly
     */
    enabled: undefined,


    /**
     * If true, the menu item associated with the menu action is checked.
     * @type {boolean}
     * @readonly
     */
    checked: undefined,


    /**
     * The menu action that implements the menu item.
     * @type {MenuAction}
     * @readonly
     */
    associatedMenuAction: MenuAction,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the MenuItem (a Menu or Submenu).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the MenuItem within its containing object.
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
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Selects the MenuItem.
     *
     * @return undefined
     */
    select: function () {
        
    },


    /**
     * Deletes the MenuItem.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the MenuItem.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return MenuItem
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

