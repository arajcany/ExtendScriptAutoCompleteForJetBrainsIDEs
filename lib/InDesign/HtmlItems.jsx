/*
 * A collection of embedded HTML page items.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var HtmlItems = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Creates a new HtmlItem
     *
     * @param {Layer} [layer] The layer on which to create the HtmlItem. (Optional)
     * @param {LocationOptions} [at] The location at which to insert the HtmlItem relative to the reference object or within the container object. (Optional) (default: LocationOptions.UNKNOWN)
     * @param {varies=any} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new HtmlItem (Optional)
     * @return HtmlItem
     */
    add: function (layer, at, reference, withProperties) {
        
    },


    /**
     * Displays the number of elements in the HtmlItem.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Returns the HtmlItem with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return HtmlItem
     */
    item: function (index) {
        
    },


    /**
     * Returns the HtmlItem with the specified name.
     *
     * @param {string} [name] The name.
     * @return HtmlItem
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the HtmlItem with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return HtmlItem
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the HtmlItems within the specified range.
     *
     * @param {varies=any} [from] The HtmlItem, index, or name at the beginning of the range. Can accept: HtmlItem, Long Integer or String.
     * @param {varies=any} [to] The HtmlItem, index, or name at the end of the range. Can accept: HtmlItem, Long Integer or String.
     * @return HtmlItem
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first HtmlItem in the collection.
     *
     * @return HtmlItem
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last HtmlItem in the collection.
     *
     * @return HtmlItem
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle HtmlItem in the collection.
     *
     * @return HtmlItem
     */
    middleItem: function () {
        
    },


    /**
     * Returns the HtmlItem with the index previous to the specified index.
     *
     * @param {HtmlItem} [obj] The index of the HtmlItem that follows the desired HtmlItem.
     * @return HtmlItem
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the HtmlItem whose index follows the specified HtmlItem in the collection.
     *
     * @param {HtmlItem} [obj] The HtmlItem whose index comes before the desired HtmlItem.
     * @return HtmlItem
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any HtmlItem in the collection.
     *
     * @return HtmlItem
     */
    anyItem: function () {
        
    },


    /**
     * Returns every HtmlItem in the collection.
     *
     * @return HtmlItem
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the HtmlItem.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the HtmlItem with the specified index.
     *
     * @param {number} [index] The index.
     * @return HtmlItem
     */
    []: function (index) {
        
    },


};

