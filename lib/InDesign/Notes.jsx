/*
 * A collection of notes.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var Notes = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Displays the number of elements in the Note.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Creates a new note.
     *
     * @param {LocationOptions} [at] The location relative to the reference object or within the containing object. (Optional) (default: LocationOptions.UNKNOWN)
     * @param {varies=any} [reference] The reference object. Note: Required when the at parameter specifies before or after. Can accept: Note or InsertionPoint. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new Note (Optional)
     * @return Note
     */
    add: function (at, reference, withProperties) {
        
    },


    /**
     * Returns the Note with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return Note
     */
    item: function (index) {
        
    },


    /**
     * Returns the Note with the specified name.
     *
     * @param {string} [name] The name.
     * @return Note
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the Note with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return Note
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the Notes within the specified range.
     *
     * @param {varies=any} [from] The Note, index, or name at the beginning of the range. Can accept: Note, Long Integer or String.
     * @param {varies=any} [to] The Note, index, or name at the end of the range. Can accept: Note, Long Integer or String.
     * @return Note
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first Note in the collection.
     *
     * @return Note
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last Note in the collection.
     *
     * @return Note
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle Note in the collection.
     *
     * @return Note
     */
    middleItem: function () {
        
    },


    /**
     * Returns the Note with the index previous to the specified index.
     *
     * @param {Note} [obj] The index of the Note that follows the desired Note.
     * @return Note
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the Note whose index follows the specified Note in the collection.
     *
     * @param {Note} [obj] The Note whose index comes before the desired Note.
     * @return Note
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any Note in the collection.
     *
     * @return Note
     */
    anyItem: function () {
        
    },


    /**
     * Returns every Note in the collection.
     *
     * @return Note
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the Note.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the Note with the specified index.
     *
     * @param {number} [index] The index.
     * @return Note
     */
    []: function (index) {
        
    },


};

