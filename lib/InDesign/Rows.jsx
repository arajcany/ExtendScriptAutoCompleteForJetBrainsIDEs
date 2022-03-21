/*
 * A collection of table rows.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var Rows = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Creates a new Row.
     *
     * @param {LocationOptions} [at] The Row's location relative to the reference object or within the table.  (Optional) (default: LocationOptions.UNKNOWN)
     * @param {varies=any} [reference] The reference object. Note: The reference object must be within the table. Required only when the at value contains before or after. Can accept: Row, Column, Cell or Table. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new Row (Optional)
     * @return varies=any
     */
    add: function (at, reference, withProperties) {
        
    },


    /**
     * Displays the number of elements in the Row.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Returns the Row with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return Row
     */
    item: function (index) {
        
    },


    /**
     * Returns the Row with the specified name.
     *
     * @param {string} [name] The name.
     * @return Row
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the Rows within the specified range.
     *
     * @param {varies=any} [from] The Row, index, or name at the beginning of the range. Can accept: Row, Long Integer or String.
     * @param {varies=any} [to] The Row, index, or name at the end of the range. Can accept: Row, Long Integer or String.
     * @return Row
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first Row in the collection.
     *
     * @return Row
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last Row in the collection.
     *
     * @return Row
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle Row in the collection.
     *
     * @return Row
     */
    middleItem: function () {
        
    },


    /**
     * Returns the Row with the index previous to the specified index.
     *
     * @param {Row} [obj] The index of the Row that follows the desired Row.
     * @return Row
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the Row whose index follows the specified Row in the collection.
     *
     * @param {Row} [obj] The Row whose index comes before the desired Row.
     * @return Row
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any Row in the collection.
     *
     * @return Row
     */
    anyItem: function () {
        
    },


    /**
     * Returns every Row in the collection.
     *
     * @return Row
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the Row.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the Row with the specified index.
     *
     * @param {number} [index] The index.
     * @return Row
     */
    []: function (index) {
        
    },


};

