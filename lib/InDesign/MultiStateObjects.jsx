/*
 * A collection of multi-state objects.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var MultiStateObjects = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Displays the number of elements in the MultiStateObject.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Creates a new MultiStateObject
     *
     * @param {Layer} [layer] The layer on which to create the MultiStateObject. (Optional)
     * @param {LocationOptions} [at] The location at which to insert the MultiStateObject relative to the reference object or within the container object. (Optional) (default: LocationOptions.UNKNOWN)
     * @param {varies=any} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new MultiStateObject (Optional)
     * @return MultiStateObject
     */
    add: function (layer, at, reference, withProperties) {
        
    },


    /**
     * Returns the MultiStateObject with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return MultiStateObject
     */
    item: function (index) {
        
    },


    /**
     * Returns the MultiStateObject with the specified name.
     *
     * @param {string} [name] The name.
     * @return MultiStateObject
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the MultiStateObject with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return MultiStateObject
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the MultiStateObjects within the specified range.
     *
     * @param {varies=any} [from] The MultiStateObject, index, or name at the beginning of the range. Can accept: MultiStateObject, Long Integer or String.
     * @param {varies=any} [to] The MultiStateObject, index, or name at the end of the range. Can accept: MultiStateObject, Long Integer or String.
     * @return MultiStateObject
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first MultiStateObject in the collection.
     *
     * @return MultiStateObject
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last MultiStateObject in the collection.
     *
     * @return MultiStateObject
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle MultiStateObject in the collection.
     *
     * @return MultiStateObject
     */
    middleItem: function () {
        
    },


    /**
     * Returns the MultiStateObject with the index previous to the specified index.
     *
     * @param {MultiStateObject} [obj] The index of the MultiStateObject that follows the desired MultiStateObject.
     * @return MultiStateObject
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the MultiStateObject whose index follows the specified MultiStateObject in the collection.
     *
     * @param {MultiStateObject} [obj] The MultiStateObject whose index comes before the desired MultiStateObject.
     * @return MultiStateObject
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any MultiStateObject in the collection.
     *
     * @return MultiStateObject
     */
    anyItem: function () {
        
    },


    /**
     * Returns every MultiStateObject in the collection.
     *
     * @return MultiStateObject
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the MultiStateObject.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the MultiStateObject with the specified index.
     *
     * @param {number} [index] The index.
     * @return MultiStateObject
     */
    []: function (index) {
        
    },


};

