/*
 * A collection of menu items.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var MenuItems = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Creates a new menu item.
     *
     * @param {MenuAction} [associatedMenuAction] The menu action that implements the  menu item.
     * @param {LocationOptions} [at] The location of the menu item relative to the reference object or within the containing object. (Optional) (default: LocationOptions.AT_END)
     * @param {MenuElement} [reference] The reference object. Note: Required when the at parameter specifies before or after. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new MenuItem (Optional)
     * @return MenuItem
     */
    add: function (associatedMenuAction, at, reference, withProperties) {
        
    },


    /**
     * Displays the number of elements in the MenuItem.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Returns the MenuItem with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return MenuItem
     */
    item: function (index) {
        
    },


    /**
     * Returns the MenuItem with the specified name.
     *
     * @param {string} [name] The name.
     * @return MenuItem
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the MenuItem with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return MenuItem
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the MenuItems within the specified range.
     *
     * @param {varies=any} [from] The MenuItem, index, or name at the beginning of the range. Can accept: MenuItem, Long Integer or String.
     * @param {varies=any} [to] The MenuItem, index, or name at the end of the range. Can accept: MenuItem, Long Integer or String.
     * @return MenuItem
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first MenuItem in the collection.
     *
     * @return MenuItem
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last MenuItem in the collection.
     *
     * @return MenuItem
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle MenuItem in the collection.
     *
     * @return MenuItem
     */
    middleItem: function () {
        
    },


    /**
     * Returns the MenuItem with the index previous to the specified index.
     *
     * @param {MenuItem} [obj] The index of the MenuItem that follows the desired MenuItem.
     * @return MenuItem
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the MenuItem whose index follows the specified MenuItem in the collection.
     *
     * @param {MenuItem} [obj] The MenuItem whose index comes before the desired MenuItem.
     * @return MenuItem
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any MenuItem in the collection.
     *
     * @return MenuItem
     */
    anyItem: function () {
        
    },


    /**
     * Returns every MenuItem in the collection.
     *
     * @return MenuItem
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the MenuItem.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the MenuItem with the specified index.
     *
     * @param {number} [index] The index.
     * @return MenuItem
     */
    []: function (index) {
        
    },


};

