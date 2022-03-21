/*
 * A collection of polygons.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var Polygons = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Displays the number of elements in the Polygon.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Creates a new Polygon.
     *
     * @param {Layer} [layer] The layer on which to create the Polygon. (Optional)
     * @param {number} [numberOfSides] The number of sides to give the Polygon. (Range: 3 to 100) (Optional)
     * @param {number} [insetPercentage] The star inset percentage applied to the Polygon. (Optional)
     * @param {LocationOptions} [at] The location at which to insert the Polygon relative to the reference object or within the container object. (Optional) (default: LocationOptions.UNKNOWN)
     * @param {varies=any} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new Polygon (Optional)
     * @return Polygon
     */
    add: function (layer, numberOfSides, insetPercentage, at, reference, withProperties) {
        
    },


    /**
     * Returns the Polygon with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return Polygon
     */
    item: function (index) {
        
    },


    /**
     * Returns the Polygon with the specified name.
     *
     * @param {string} [name] The name.
     * @return Polygon
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the Polygon with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return Polygon
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the Polygons within the specified range.
     *
     * @param {varies=any} [from] The Polygon, index, or name at the beginning of the range. Can accept: Polygon, Long Integer or String.
     * @param {varies=any} [to] The Polygon, index, or name at the end of the range. Can accept: Polygon, Long Integer or String.
     * @return Polygon
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first Polygon in the collection.
     *
     * @return Polygon
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last Polygon in the collection.
     *
     * @return Polygon
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle Polygon in the collection.
     *
     * @return Polygon
     */
    middleItem: function () {
        
    },


    /**
     * Returns the Polygon with the index previous to the specified index.
     *
     * @param {Polygon} [obj] The index of the Polygon that follows the desired Polygon.
     * @return Polygon
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the Polygon whose index follows the specified Polygon in the collection.
     *
     * @param {Polygon} [obj] The Polygon whose index comes before the desired Polygon.
     * @return Polygon
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any Polygon in the collection.
     *
     * @return Polygon
     */
    anyItem: function () {
        
    },


    /**
     * Returns every Polygon in the collection.
     *
     * @return Polygon
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the Polygon.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the Polygon with the specified index.
     *
     * @param {number} [index] The index.
     * @return Polygon
     */
    []: function (index) {
        
    },


};

