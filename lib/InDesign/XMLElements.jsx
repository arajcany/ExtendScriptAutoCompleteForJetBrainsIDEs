/*
 * A collection of XML elements.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var XMLElements = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Displays the number of elements in the XMLElement.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Creates a new XML element.
     *
     * @param {varies=any} [markupTag] The XML tag used to identify the element. Can accept: String or XMLTag.
     * @param {varies=any} [xmlContent] The content to be marked up. Can accept: Text, Story, PageItem, Movie, Sound, Graphic, Table or Cell. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new XMLElement (Optional)
     * @return XMLElement
     */
    add: function (markupTag, xmlContent, withProperties) {
        
    },


    /**
     * Returns the XMLElement with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return XMLElement
     */
    item: function (index) {
        
    },


    /**
     * Returns the XMLElement with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return XMLElement
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the XMLElements within the specified range.
     *
     * @param {varies=any} [from] The XMLElement, index, or name at the beginning of the range. Can accept: XMLElement, Long Integer or String.
     * @param {varies=any} [to] The XMLElement, index, or name at the end of the range. Can accept: XMLElement, Long Integer or String.
     * @return XMLElement
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first XMLElement in the collection.
     *
     * @return XMLElement
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last XMLElement in the collection.
     *
     * @return XMLElement
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle XMLElement in the collection.
     *
     * @return XMLElement
     */
    middleItem: function () {
        
    },


    /**
     * Returns the XMLElement with the index previous to the specified index.
     *
     * @param {XMLElement} [obj] The index of the XMLElement that follows the desired XMLElement.
     * @return XMLElement
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the XMLElement whose index follows the specified XMLElement in the collection.
     *
     * @param {XMLElement} [obj] The XMLElement whose index comes before the desired XMLElement.
     * @return XMLElement
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any XMLElement in the collection.
     *
     * @return XMLElement
     */
    anyItem: function () {
        
    },


    /**
     * Returns every XMLElement in the collection.
     *
     * @return XMLElement
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the XMLElement.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the XMLElement with the specified index.
     *
     * @param {number} [index] The index.
     * @return XMLElement
     */
    []: function (index) {
        
    },


};

