/*
 * A collection of movies.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var Movies = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Creates a new Movie
     *
     * @param {Layer} [layer] The layer on which to create the Movie. (Optional)
     * @param {LocationOptions} [at] The location at which to insert the Movie relative to the reference object or within the container object. (Optional) (default: LocationOptions.UNKNOWN)
     * @param {varies=any} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new Movie (Optional)
     * @return Movie
     */
    add: function (layer, at, reference, withProperties) {
        
    },


    /**
     * Displays the number of elements in the Movie.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Returns the Movie with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return Movie
     */
    item: function (index) {
        
    },


    /**
     * Returns the Movie with the specified name.
     *
     * @param {string} [name] The name.
     * @return Movie
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the Movie with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return Movie
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the Movies within the specified range.
     *
     * @param {varies=any} [from] The Movie, index, or name at the beginning of the range. Can accept: Movie, Long Integer or String.
     * @param {varies=any} [to] The Movie, index, or name at the end of the range. Can accept: Movie, Long Integer or String.
     * @return Movie
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first Movie in the collection.
     *
     * @return Movie
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last Movie in the collection.
     *
     * @return Movie
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle Movie in the collection.
     *
     * @return Movie
     */
    middleItem: function () {
        
    },


    /**
     * Returns the Movie with the index previous to the specified index.
     *
     * @param {Movie} [obj] The index of the Movie that follows the desired Movie.
     * @return Movie
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the Movie whose index follows the specified Movie in the collection.
     *
     * @param {Movie} [obj] The Movie whose index comes before the desired Movie.
     * @return Movie
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any Movie in the collection.
     *
     * @return Movie
     */
    anyItem: function () {
        
    },


    /**
     * Returns every Movie in the collection.
     *
     * @return Movie
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the Movie.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the Movie with the specified index.
     *
     * @param {number} [index] The index.
     * @return Movie
     */
    []: function (index) {
        
    },


};

