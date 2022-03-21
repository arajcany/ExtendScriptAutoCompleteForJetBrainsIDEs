/*
 * A collection of text frames.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var TextFrames = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Displays the number of elements in the TextFrame.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Creates a new TextFrame
     *
     * @param {Layer} [layer] The layer on which to create the TextFrame. (Optional)
     * @param {LocationOptions} [at] The location at which to insert the TextFrame relative to the reference object or within the container object. (Optional) (default: LocationOptions.UNKNOWN)
     * @param {varies=any} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new TextFrame (Optional)
     * @return TextFrame
     */
    add: function (layer, at, reference, withProperties) {
        
    },


    /**
     * Returns the TextFrame with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return TextFrame
     */
    item: function (index) {
        
    },


    /**
     * Returns the TextFrame with the specified name.
     *
     * @param {string} [name] The name.
     * @return TextFrame
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the TextFrame with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return TextFrame
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the TextFrames within the specified range.
     *
     * @param {varies=any} [from] The TextFrame, index, or name at the beginning of the range. Can accept: TextFrame, Long Integer or String.
     * @param {varies=any} [to] The TextFrame, index, or name at the end of the range. Can accept: TextFrame, Long Integer or String.
     * @return TextFrame
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first TextFrame in the collection.
     *
     * @return TextFrame
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last TextFrame in the collection.
     *
     * @return TextFrame
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle TextFrame in the collection.
     *
     * @return TextFrame
     */
    middleItem: function () {
        
    },


    /**
     * Returns the TextFrame with the index previous to the specified index.
     *
     * @param {TextFrame} [obj] The index of the TextFrame that follows the desired TextFrame.
     * @return TextFrame
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the TextFrame whose index follows the specified TextFrame in the collection.
     *
     * @param {TextFrame} [obj] The TextFrame whose index comes before the desired TextFrame.
     * @return TextFrame
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any TextFrame in the collection.
     *
     * @return TextFrame
     */
    anyItem: function () {
        
    },


    /**
     * Returns every TextFrame in the collection.
     *
     * @return TextFrame
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the TextFrame.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the TextFrame with the specified index.
     *
     * @param {number} [index] The index.
     * @return TextFrame
     */
    []: function (index) {
        
    },


};

