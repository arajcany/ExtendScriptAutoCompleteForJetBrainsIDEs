/*
 * A collection of groups.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var Groups = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Displays the number of elements in the Group.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Creates a new Group.
     *
     * @param {PageItem} [groupItems] The objects to group.
     * @param {Layer} [layer] The layer on which to create the Group. (Optional)
     * @param {LocationOptions} [at] The location at which to insert the Group relative to the reference object or within the container object. (Optional) (default: LocationOptions.UNKNOWN)
     * @param {varies=any} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new Group (Optional)
     * @return Group
     */
    add: function (groupItems, layer, at, reference, withProperties) {
        
    },


    /**
     * Returns the Group with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return Group
     */
    item: function (index) {
        
    },


    /**
     * Returns the Group with the specified name.
     *
     * @param {string} [name] The name.
     * @return Group
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the Group with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return Group
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the Groups within the specified range.
     *
     * @param {varies=any} [from] The Group, index, or name at the beginning of the range. Can accept: Group, Long Integer or String.
     * @param {varies=any} [to] The Group, index, or name at the end of the range. Can accept: Group, Long Integer or String.
     * @return Group
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first Group in the collection.
     *
     * @return Group
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last Group in the collection.
     *
     * @return Group
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle Group in the collection.
     *
     * @return Group
     */
    middleItem: function () {
        
    },


    /**
     * Returns the Group with the index previous to the specified index.
     *
     * @param {Group} [obj] The index of the Group that follows the desired Group.
     * @return Group
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the Group whose index follows the specified Group in the collection.
     *
     * @param {Group} [obj] The Group whose index comes before the desired Group.
     * @return Group
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any Group in the collection.
     *
     * @return Group
     */
    anyItem: function () {
        
    },


    /**
     * Returns every Group in the collection.
     *
     * @return Group
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the Group.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the Group with the specified index.
     *
     * @param {number} [index] The index.
     * @return Group
     */
    []: function (index) {
        
    },


};

