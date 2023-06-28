/*
 * A collection of index page references.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var PageReferences = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Creates a new page reference.
     *
     * @param {Text} [source] The text or insertion point to which the page reference points.
     * @param {PageReferenceType} [pageReferenceType] The page number for an index page reference or the last page in an index page reference page range. (Optional) (default: PageReferenceType.CURRENT_PAGE)
     * @param {varies=any} [pageReferenceLimit] The paragraph style or number of paragraphs or pages that defines the last page in a page range. Valid only when page reference type specifies the next use of a paragraph style or a number of paragraphs or pages. . Can accept: ParagraphStyle or Long Integer. (Optional)
     * @param {CharacterStyle} [pageNumberStyleOverride] The style override for the page number.  (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new PageReference (Optional)
     * @return PageReference
     */
    add: function (source, pageReferenceType, pageReferenceLimit, pageNumberStyleOverride, withProperties) {
        
    },


    /**
     * Displays the number of elements in the PageReference.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Returns the PageReference with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return PageReference
     */
    item: function (index) {
        
    },


    /**
     * Returns the PageReference with the specified name.
     *
     * @param {string} [name] The name.
     * @return PageReference
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the PageReference with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return PageReference
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the PageReferences within the specified range.
     *
     * @param {varies=any} [from] The PageReference, index, or name at the beginning of the range. Can accept: PageReference, Long Integer or String.
     * @param {varies=any} [to] The PageReference, index, or name at the end of the range. Can accept: PageReference, Long Integer or String.
     * @return PageReference
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first PageReference in the collection.
     *
     * @return PageReference
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last PageReference in the collection.
     *
     * @return PageReference
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle PageReference in the collection.
     *
     * @return PageReference
     */
    middleItem: function () {
        
    },


    /**
     * Returns the PageReference with the index previous to the specified index.
     *
     * @param {PageReference} [obj] The index of the PageReference that follows the desired PageReference.
     * @return PageReference
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the PageReference whose index follows the specified PageReference in the collection.
     *
     * @param {PageReference} [obj] The PageReference whose index comes before the desired PageReference.
     * @return PageReference
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any PageReference in the collection.
     *
     * @return PageReference
     */
    anyItem: function () {
        
    },


    /**
     * Returns every PageReference in the collection.
     *
     * @return PageReference
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the PageReference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the PageReference with the specified index.
     *
     * @param {number} [index] The index.
     * @return PageReference
     */
    []: function (index) {
        
    },


};

