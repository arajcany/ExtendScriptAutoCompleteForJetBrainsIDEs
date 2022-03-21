/*
 * A menu.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var Menu = {


    /**
     * Dispatched before the Menu is displayed. This event does not bubble. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_DISPLAY: beforeDisplay,


    /**
     * The name of the Menu.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The name of the Menu for display in the user interface. The title includes any ampersand characters (&), which are used to tell the Windows OS to underline the following character in the name for use with the Alt key to navigate to a menu item. Double ampersands are used to display an actual ampersand character in the name. The Mac OS ignores and removes the extra ampersand characters.
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
     * The parent of the Menu (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


    /**
     * The index of the Menu within its containing object.
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
     * Generates a string which, if executed, will return the Menu.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Menu
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

