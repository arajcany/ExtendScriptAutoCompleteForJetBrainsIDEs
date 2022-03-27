/*
 * Represents the application menu bar, menus and submenus, and individual items or commands.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Adobe Bridge 2022\omv.xml
 * OMV Time: 
 * OMV Title: Adobe Bridge 2022 Object Model
 */
var MenuElement = {


    /**
     * A unique identifier for the element.
     * @type {String}
     * @readonly
     */
    id: String,


    /**
     * A string describing the location of the new menu element, with respect to existing menu elements.
     * @type {String}
     * @readonly
     */
    location: String,


    /**
     * Whether there is a separator after this item.
     * @type {Boolean}
     */
    separatorAfter: Boolean,


    /**
     * Whether there is a separator before this item.
     * @type {Boolean}
     */
    separatorBefore: Boolean,


    /**
     * Whether the menu item can be checked.
     * @type {Boolean}
     * @readonly
     */
    canBeChecked: Boolean,


    /**
     * Whether the item is checked.
     * @type {Boolean}
     */
    checked: Boolean,


    /**
     * Whether the menu or item is enabled.
     * @type {Boolean}
     */
    enabled: Boolean,


    /**
     * The type of menu element, a menu or command.
     * @type {String}
     * @readonly
     */
    type: String,


    /**
     * When true, the Alt modifier key was pressed when the item was selected.
     * @type {Boolean}
     * @readonly
     */
    altDown: Boolean,


    /**
     * When true, the Command modifier key was pressed when the item was selected.
     * @type {Boolean}
     * @readonly
     */
    cmdDown: Boolean,


    /**
     * When true, the Control modifier key was pressed when the item was selected.
     * @type {Boolean}
     * @readonly
     */
    ctrlDown: Boolean,


    /**
     * When true, the Option modifier key was pressed when the item was selected.
     * @type {Boolean}
     * @readonly
     */
    optionDown: Boolean,


    /**
     * When true, the Shift modifier key was pressed when the item was selected.
     * @type {Boolean}
     * @readonly
     */
    shiftDown: Boolean,


    /**
     * The displayed label text, a localizable string.
     * @type {String}
     */
    text: String,



    /**
     * Adds a new menu to the menu bar, a new submenu to an existing menu, or a new command to an existing menu or submenu.
     *
     * @param {String} [type] The type of menu element, a menu or command.
     * @param {String} [text] The localizable string that is displayed as the label text.
     * @param {String} [location] A string describing the location of the new menu element, with respect to existing menu elements.
     * @param {String} [id] The unique identifier for this element.
     * @return MenuElement
     */
    create: function (type, text, location, id) {
        
    },


    /**
     * Retrieves a menu element object using its unique identifier.
     *
     * @param {String} [id] The unique identifier for the menu element to find.
     * @return MenuElement
     */
    find: function (id) {
        
    },


    /**
     * Removes a script-defined menu or menu item.
     *
     * @param {String} [id] The unique identifier for the menu element to remove.
     * @return undefined
     */
    remove: function (id) {
        
    },


};

