/*
 * A collection of text boxes.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var TextBoxes = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Displays the number of elements in the TextBox.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Creates a new TextBox
     *
     * @param {Layer} [layer] The layer on which to create the TextBox. (Optional)
     * @param {LocationOptions} [at] The location at which to insert the TextBox relative to the reference object or within the container object. (Optional) (default: LocationOptions.UNKNOWN)
     * @param {varies=any} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new TextBox (Optional)
     * @return TextBox
     */
    add: function (layer, at, reference, withProperties) {
        
    },


    /**
     * Returns the TextBox with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return TextBox
     */
    item: function (index) {
        
    },


    /**
     * Returns the TextBox with the specified name.
     *
     * @param {string} [name] The name.
     * @return TextBox
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the TextBox with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return TextBox
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the TextBoxes within the specified range.
     *
     * @param {varies=any} [from] The TextBox, index, or name at the beginning of the range. Can accept: TextBox, Long Integer or String.
     * @param {varies=any} [to] The TextBox, index, or name at the end of the range. Can accept: TextBox, Long Integer or String.
     * @return TextBox
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first TextBox in the collection.
     *
     * @return TextBox
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last TextBox in the collection.
     *
     * @return TextBox
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle TextBox in the collection.
     *
     * @return TextBox
     */
    middleItem: function () {
        
    },


    /**
     * Returns the TextBox with the index previous to the specified index.
     *
     * @param {TextBox} [obj] The index of the TextBox that follows the desired TextBox.
     * @return TextBox
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the TextBox whose index follows the specified TextBox in the collection.
     *
     * @param {TextBox} [obj] The TextBox whose index comes before the desired TextBox.
     * @return TextBox
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any TextBox in the collection.
     *
     * @return TextBox
     */
    anyItem: function () {
        
    },


    /**
     * Returns every TextBox in the collection.
     *
     * @return TextBox
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the TextBox.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the TextBox with the specified index.
     *
     * @param {number} [index] The index.
     * @return TextBox
     */
    []: function (index) {
        
    },


};

