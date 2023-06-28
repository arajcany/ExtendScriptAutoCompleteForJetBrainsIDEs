/*
 * A collection of graphic lines.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var GraphicLines = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Displays the number of elements in the GraphicLine.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Creates a new GraphicLine
     *
     * @param {Layer} [layer] The layer on which to create the GraphicLine. (Optional)
     * @param {LocationOptions} [at] The location at which to insert the GraphicLine relative to the reference object or within the container object. (Optional) (default: LocationOptions.UNKNOWN)
     * @param {varies=any} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new GraphicLine (Optional)
     * @return GraphicLine
     */
    add: function (layer, at, reference, withProperties) {
        
    },


    /**
     * Returns the GraphicLine with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return GraphicLine
     */
    item: function (index) {
        
    },


    /**
     * Returns the GraphicLine with the specified name.
     *
     * @param {string} [name] The name.
     * @return GraphicLine
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the GraphicLine with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return GraphicLine
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the GraphicLines within the specified range.
     *
     * @param {varies=any} [from] The GraphicLine, index, or name at the beginning of the range. Can accept: GraphicLine, Long Integer or String.
     * @param {varies=any} [to] The GraphicLine, index, or name at the end of the range. Can accept: GraphicLine, Long Integer or String.
     * @return GraphicLine
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first GraphicLine in the collection.
     *
     * @return GraphicLine
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last GraphicLine in the collection.
     *
     * @return GraphicLine
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle GraphicLine in the collection.
     *
     * @return GraphicLine
     */
    middleItem: function () {
        
    },


    /**
     * Returns the GraphicLine with the index previous to the specified index.
     *
     * @param {GraphicLine} [obj] The index of the GraphicLine that follows the desired GraphicLine.
     * @return GraphicLine
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the GraphicLine whose index follows the specified GraphicLine in the collection.
     *
     * @param {GraphicLine} [obj] The GraphicLine whose index comes before the desired GraphicLine.
     * @return GraphicLine
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any GraphicLine in the collection.
     *
     * @return GraphicLine
     */
    anyItem: function () {
        
    },


    /**
     * Returns every GraphicLine in the collection.
     *
     * @return GraphicLine
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the GraphicLine.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the GraphicLine with the specified index.
     *
     * @param {number} [index] The index.
     * @return GraphicLine
     */
    []: function (index) {
        
    },


};

