/*
 * A collection of submenus.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var Submenus = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Creates a new submenu.
     *
     * @param {string} [title] The name of the Submenu for display in the user interface. The title includes any ampersand characters (&), which are used to tell the Windows OS to underline the following character in the name for use with the Alt key to navigate to a menu item. Double ampersands are used to display an actual ampersand character in the name. The Mac OS ignores and removes the extra ampersand characters.
     * @param {LocationOptions} [at] The location of the submenu relative to the reference object or within the containing object. (Optional) (default: LocationOptions.AT_END)
     * @param {MenuElement} [reference] The reference object. Note: Required when the at parameter specifies before or after. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new Submenu (Optional)
     * @return Submenu
     */
    add: function (title, at, reference, withProperties) {
        
    },


    /**
     * Displays the number of elements in the Submenu.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Returns the Submenu with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return Submenu
     */
    item: function (index) {
        
    },


    /**
     * Returns the Submenu with the specified name.
     *
     * @param {string} [name] The name.
     * @return Submenu
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the Submenus within the specified range.
     *
     * @param {varies=any} [from] The Submenu, index, or name at the beginning of the range. Can accept: Submenu, Long Integer or String.
     * @param {varies=any} [to] The Submenu, index, or name at the end of the range. Can accept: Submenu, Long Integer or String.
     * @return Submenu
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first Submenu in the collection.
     *
     * @return Submenu
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last Submenu in the collection.
     *
     * @return Submenu
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle Submenu in the collection.
     *
     * @return Submenu
     */
    middleItem: function () {
        
    },


    /**
     * Returns the Submenu with the index previous to the specified index.
     *
     * @param {Submenu} [obj] The index of the Submenu that follows the desired Submenu.
     * @return Submenu
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the Submenu whose index follows the specified Submenu in the collection.
     *
     * @param {Submenu} [obj] The Submenu whose index comes before the desired Submenu.
     * @return Submenu
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any Submenu in the collection.
     *
     * @return Submenu
     */
    anyItem: function () {
        
    },


    /**
     * Returns every Submenu in the collection.
     *
     * @return Submenu
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the Submenu.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the Submenu with the specified index.
     *
     * @param {number} [index] The index.
     * @return Submenu
     */
    []: function (index) {
        
    },


};

