/*
 * A collection of XML instructions.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var XMLInstructions = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Displays the number of elements in the XMLInstruction.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Creates a new XML processing instruction.
     *
     * @param {string} [target] A name that identifies the processing instruction to an application reading the exported XML file.
     * @param {string} [data] A value that tells the application what to do with the processing instruction identified in the target. (Optional) (default: )
     * @param {varies=any} [storyOffset] The location within the story, specified as an insertion point. Can accept: InsertionPoint or Long Integer. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new XMLInstruction (Optional)
     * @return XMLInstruction
     */
    add: function (target, data, storyOffset, withProperties) {
        
    },


    /**
     * Returns the XMLInstruction with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return XMLInstruction
     */
    item: function (index) {
        
    },


    /**
     * Returns the XMLInstruction with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return XMLInstruction
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the XMLInstructions within the specified range.
     *
     * @param {varies=any} [from] The XMLInstruction, index, or name at the beginning of the range. Can accept: XMLInstruction, Long Integer or String.
     * @param {varies=any} [to] The XMLInstruction, index, or name at the end of the range. Can accept: XMLInstruction, Long Integer or String.
     * @return XMLInstruction
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first XMLInstruction in the collection.
     *
     * @return XMLInstruction
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last XMLInstruction in the collection.
     *
     * @return XMLInstruction
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle XMLInstruction in the collection.
     *
     * @return XMLInstruction
     */
    middleItem: function () {
        
    },


    /**
     * Returns the XMLInstruction with the index previous to the specified index.
     *
     * @param {XMLInstruction} [obj] The index of the XMLInstruction that follows the desired XMLInstruction.
     * @return XMLInstruction
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the XMLInstruction whose index follows the specified XMLInstruction in the collection.
     *
     * @param {XMLInstruction} [obj] The XMLInstruction whose index comes before the desired XMLInstruction.
     * @return XMLInstruction
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any XMLInstruction in the collection.
     *
     * @return XMLInstruction
     */
    anyItem: function () {
        
    },


    /**
     * Returns every XMLInstruction in the collection.
     *
     * @return XMLInstruction
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the XMLInstruction.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the XMLInstruction with the specified index.
     *
     * @param {number} [index] The index.
     * @return XMLInstruction
     */
    []: function (index) {
        
    },


};

