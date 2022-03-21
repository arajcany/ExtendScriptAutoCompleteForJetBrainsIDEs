/*
 * A collection of spreads.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var Spreads = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Displays the number of elements in the Spread.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Creates a new spread.
     *
     * @param {LocationOptions} [at] The location of the spread relative to the reference object or within the document.  (Optional) (default: LocationOptions.UNKNOWN)
     * @param {varies=any} [reference] The reference object. Note: Required when the at parameter specifies before or after. Can accept: Spread or Document. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new Spread (Optional)
     * @return Spread
     */
    add: function (at, reference, withProperties) {
        
    },


    /**
     * Returns the Spread with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return Spread
     */
    item: function (index) {
        
    },


    /**
     * Returns the Spread with the specified name.
     *
     * @param {string} [name] The name.
     * @return Spread
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the Spread with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return Spread
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the Spreads within the specified range.
     *
     * @param {varies=any} [from] The Spread, index, or name at the beginning of the range. Can accept: Spread, Long Integer or String.
     * @param {varies=any} [to] The Spread, index, or name at the end of the range. Can accept: Spread, Long Integer or String.
     * @return Spread
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first Spread in the collection.
     *
     * @return Spread
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last Spread in the collection.
     *
     * @return Spread
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle Spread in the collection.
     *
     * @return Spread
     */
    middleItem: function () {
        
    },


    /**
     * Returns the Spread with the index previous to the specified index.
     *
     * @param {Spread} [obj] The index of the Spread that follows the desired Spread.
     * @return Spread
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the Spread whose index follows the specified Spread in the collection.
     *
     * @param {Spread} [obj] The Spread whose index comes before the desired Spread.
     * @return Spread
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any Spread in the collection.
     *
     * @return Spread
     */
    anyItem: function () {
        
    },


    /**
     * Returns every Spread in the collection.
     *
     * @return Spread
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the Spread.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the Spread with the specified index.
     *
     * @param {number} [index] The index.
     * @return Spread
     */
    []: function (index) {
        
    },


};

