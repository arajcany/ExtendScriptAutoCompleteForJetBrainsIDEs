/*
 * A collection of rectangles.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var Rectangles = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Displays the number of elements in the Rectangle.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Creates a new Rectangle
     *
     * @param {Layer} [layer] The layer on which to create the Rectangle. (Optional)
     * @param {LocationOptions} [at] The location at which to insert the Rectangle relative to the reference object or within the container object. (Optional) (default: LocationOptions.UNKNOWN)
     * @param {varies=any} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new Rectangle (Optional)
     * @return Rectangle
     */
    add: function (layer, at, reference, withProperties) {
        
    },


    /**
     * Returns the Rectangle with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return Rectangle
     */
    item: function (index) {
        
    },


    /**
     * Returns the Rectangle with the specified name.
     *
     * @param {string} [name] The name.
     * @return Rectangle
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the Rectangle with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return Rectangle
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the Rectangles within the specified range.
     *
     * @param {varies=any} [from] The Rectangle, index, or name at the beginning of the range. Can accept: Rectangle, Long Integer or String.
     * @param {varies=any} [to] The Rectangle, index, or name at the end of the range. Can accept: Rectangle, Long Integer or String.
     * @return Rectangle
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first Rectangle in the collection.
     *
     * @return Rectangle
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last Rectangle in the collection.
     *
     * @return Rectangle
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle Rectangle in the collection.
     *
     * @return Rectangle
     */
    middleItem: function () {
        
    },


    /**
     * Returns the Rectangle with the index previous to the specified index.
     *
     * @param {Rectangle} [obj] The index of the Rectangle that follows the desired Rectangle.
     * @return Rectangle
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the Rectangle whose index follows the specified Rectangle in the collection.
     *
     * @param {Rectangle} [obj] The Rectangle whose index comes before the desired Rectangle.
     * @return Rectangle
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any Rectangle in the collection.
     *
     * @return Rectangle
     */
    anyItem: function () {
        
    },


    /**
     * Returns every Rectangle in the collection.
     *
     * @return Rectangle
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the Rectangle.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the Rectangle with the specified index.
     *
     * @param {number} [index] The index.
     * @return Rectangle
     */
    []: function (index) {
        
    },


};

