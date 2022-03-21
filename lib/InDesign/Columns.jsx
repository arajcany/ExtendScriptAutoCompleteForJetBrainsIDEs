/*
 * A collection of table columns.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var Columns = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Creates a new Column.
     *
     * @param {LocationOptions} [at] The Column's location relative to the reference object or within the table.  (Optional) (default: LocationOptions.UNKNOWN)
     * @param {varies=any} [reference] The reference object. Note: The reference object must be within the table. Required only when the at value contains before or after. Can accept: Row, Column, Cell or Table. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new Column (Optional)
     * @return varies=any
     */
    add: function (at, reference, withProperties) {
        
    },


    /**
     * Displays the number of elements in the Column.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Returns the Column with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return Column
     */
    item: function (index) {
        
    },


    /**
     * Returns the Column with the specified name.
     *
     * @param {string} [name] The name.
     * @return Column
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the Columns within the specified range.
     *
     * @param {varies=any} [from] The Column, index, or name at the beginning of the range. Can accept: Column, Long Integer or String.
     * @param {varies=any} [to] The Column, index, or name at the end of the range. Can accept: Column, Long Integer or String.
     * @return Column
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first Column in the collection.
     *
     * @return Column
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last Column in the collection.
     *
     * @return Column
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle Column in the collection.
     *
     * @return Column
     */
    middleItem: function () {
        
    },


    /**
     * Returns the Column with the index previous to the specified index.
     *
     * @param {Column} [obj] The index of the Column that follows the desired Column.
     * @return Column
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the Column whose index follows the specified Column in the collection.
     *
     * @param {Column} [obj] The Column whose index comes before the desired Column.
     * @return Column
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any Column in the collection.
     *
     * @return Column
     */
    anyItem: function () {
        
    },


    /**
     * Returns every Column in the collection.
     *
     * @return Column
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the Column.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the Column with the specified index.
     *
     * @param {number} [index] The index.
     * @return Column
     */
    []: function (index) {
        
    },


};

