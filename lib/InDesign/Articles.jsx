/*
 * A collection of articles.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var Articles = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Creates a new Article
     *
     * @param {string} [name] The article name (Optional)
     * @param {boolean} [articleExportStatus] The article's export status (Optional)
     * @param {LocationOptions} [at] The location relative to the reference object or within the containing object. (Optional) (default: LocationOptions.AT_END)
     * @param {Article} [reference] The reference object. Note: Required when the to value specifies before or after. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new Article (Optional)
     * @return Article
     */
    add: function (name, articleExportStatus, at, reference, withProperties) {
        
    },


    /**
     * Displays the number of elements in the Article.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Returns the Article with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return Article
     */
    item: function (index) {
        
    },


    /**
     * Returns the Article with the specified name.
     *
     * @param {string} [name] The name.
     * @return Article
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the Article with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return Article
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the Articles within the specified range.
     *
     * @param {varies=any} [from] The Article, index, or name at the beginning of the range. Can accept: Article, Long Integer or String.
     * @param {varies=any} [to] The Article, index, or name at the end of the range. Can accept: Article, Long Integer or String.
     * @return Article
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first Article in the collection.
     *
     * @return Article
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last Article in the collection.
     *
     * @return Article
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle Article in the collection.
     *
     * @return Article
     */
    middleItem: function () {
        
    },


    /**
     * Returns the Article with the index previous to the specified index.
     *
     * @param {Article} [obj] The index of the Article that follows the desired Article.
     * @return Article
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the Article whose index follows the specified Article in the collection.
     *
     * @param {Article} [obj] The Article whose index comes before the desired Article.
     * @return Article
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any Article in the collection.
     *
     * @return Article
     */
    anyItem: function () {
        
    },


    /**
     * Returns every Article in the collection.
     *
     * @return Article
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the Article.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the Article with the specified index.
     *
     * @param {number} [index] The index.
     * @return Article
     */
    []: function (index) {
        
    },


};

