/*
 * A submenu.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var Submenu = {


    /**
     * Dispatched before the Submenu is displayed. This event does not bubble. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_DISPLAY: beforeDisplay,


    /**
     * The name of the Submenu.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The name of the Submenu for display in the user interface. The title includes any ampersand characters (&), which are used to tell the Windows OS to underline the following character in the name for use with the Alt key to navigate to a menu item. Double ampersands are used to display an actual ampersand character in the name. The Mac OS ignores and removes the extra ampersand characters.
     * @type {string}
     * @readonly
     */
    title: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the Submenu (a Menu or Submenu).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the Submenu within its containing object.
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
     * A collection of menu elements.
     * @type {MenuElements}
     * @readonly
     */
    menuElements: MenuElements,


    /**
     * A collection of submenus.
     * @type {Submenus}
     * @readonly
     */
    submenus: Submenus,


    /**
     * A collection of menu items.
     * @type {MenuItems}
     * @readonly
     */
    menuItems: MenuItems,


    /**
     * A collection of menu separators.
     * @type {MenuSeparators}
     * @readonly
     */
    menuSeparators: MenuSeparators,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Deletes the Submenu.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the Submenu.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Submenu
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

