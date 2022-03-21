/*
 * A collection of pages.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var Pages = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Displays the number of elements in the Page.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Creates a new page.
     *
     * @param {LocationOptions} [at] The location of the new page relative to the reference object or within the document or spread.  (Optional) (default: LocationOptions.UNKNOWN)
     * @param {varies=any} [reference] The reference object. Note: Required when the at parameter value specifies before or after. Can accept: Page, Spread, MasterSpread or Document. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new Page (Optional)
     * @return Page
     */
    add: function (at, reference, withProperties) {
        
    },


    /**
     * Returns the Page with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return Page
     */
    item: function (index) {
        
    },


    /**
     * Returns the Page with the specified name.
     *
     * @param {string} [name] The name.
     * @return Page
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the Page with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return Page
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the Pages within the specified range.
     *
     * @param {varies=any} [from] The Page, index, or name at the beginning of the range. Can accept: Page, Long Integer or String.
     * @param {varies=any} [to] The Page, index, or name at the end of the range. Can accept: Page, Long Integer or String.
     * @return Page
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first Page in the collection.
     *
     * @return Page
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last Page in the collection.
     *
     * @return Page
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle Page in the collection.
     *
     * @return Page
     */
    middleItem: function () {
        
    },


    /**
     * Returns the Page with the index previous to the specified index.
     *
     * @param {Page} [obj] The index of the Page that follows the desired Page.
     * @return Page
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the Page whose index follows the specified Page in the collection.
     *
     * @param {Page} [obj] The Page whose index comes before the desired Page.
     * @return Page
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any Page in the collection.
     *
     * @return Page
     */
    anyItem: function () {
        
    },


    /**
     * Returns every Page in the collection.
     *
     * @return Page
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the Page.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the Page with the specified index.
     *
     * @param {number} [index] The index.
     * @return Page
     */
    []: function (index) {
        
    },


};

