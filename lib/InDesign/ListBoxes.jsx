/*
 * A collection of listboxes.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var ListBoxes = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Displays the number of elements in the ListBox.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Creates a new ListBox
     *
     * @param {Layer} [layer] The layer on which to create the ListBox. (Optional)
     * @param {LocationOptions} [at] The location at which to insert the ListBox relative to the reference object or within the container object. (Optional) (default: LocationOptions.UNKNOWN)
     * @param {varies=any} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new ListBox (Optional)
     * @return ListBox
     */
    add: function (layer, at, reference, withProperties) {
        
    },


    /**
     * Returns the ListBox with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return ListBox
     */
    item: function (index) {
        
    },


    /**
     * Returns the ListBox with the specified name.
     *
     * @param {string} [name] The name.
     * @return ListBox
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the ListBox with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return ListBox
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the ListBoxes within the specified range.
     *
     * @param {varies=any} [from] The ListBox, index, or name at the beginning of the range. Can accept: ListBox, Long Integer or String.
     * @param {varies=any} [to] The ListBox, index, or name at the end of the range. Can accept: ListBox, Long Integer or String.
     * @return ListBox
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first ListBox in the collection.
     *
     * @return ListBox
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last ListBox in the collection.
     *
     * @return ListBox
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle ListBox in the collection.
     *
     * @return ListBox
     */
    middleItem: function () {
        
    },


    /**
     * Returns the ListBox with the index previous to the specified index.
     *
     * @param {ListBox} [obj] The index of the ListBox that follows the desired ListBox.
     * @return ListBox
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the ListBox whose index follows the specified ListBox in the collection.
     *
     * @param {ListBox} [obj] The ListBox whose index comes before the desired ListBox.
     * @return ListBox
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any ListBox in the collection.
     *
     * @return ListBox
     */
    anyItem: function () {
        
    },


    /**
     * Returns every ListBox in the collection.
     *
     * @return ListBox
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the ListBox.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the ListBox with the specified index.
     *
     * @param {number} [index] The index.
     * @return ListBox
     */
    []: function (index) {
        
    },


};

