/*
 * A collection of index cross references. (For cross references in text, use the 'cross reference source' and 'hyperlink' objects.)
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var CrossReferences = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Creates a new cross reference.
     *
     * @param {Topic} [referencedTopic] The topic that the cross reference points to.
     * @param {CrossReferenceType} [crossReferenceType] The cross reference type.
     * @param {string} [customTypeString] The custom string to use in the cross reference. Valid only for custom cross reference types. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new CrossReference (Optional)
     * @return CrossReference
     */
    add: function (referencedTopic, crossReferenceType, customTypeString, withProperties) {
        
    },


    /**
     * Displays the number of elements in the CrossReference.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Returns the CrossReference with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return CrossReference
     */
    item: function (index) {
        
    },


    /**
     * Returns the CrossReference with the specified name.
     *
     * @param {string} [name] The name.
     * @return CrossReference
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the CrossReference with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return CrossReference
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the CrossReferences within the specified range.
     *
     * @param {varies=any} [from] The CrossReference, index, or name at the beginning of the range. Can accept: CrossReference, Long Integer or String.
     * @param {varies=any} [to] The CrossReference, index, or name at the end of the range. Can accept: CrossReference, Long Integer or String.
     * @return CrossReference
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first CrossReference in the collection.
     *
     * @return CrossReference
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last CrossReference in the collection.
     *
     * @return CrossReference
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle CrossReference in the collection.
     *
     * @return CrossReference
     */
    middleItem: function () {
        
    },


    /**
     * Returns the CrossReference with the index previous to the specified index.
     *
     * @param {CrossReference} [obj] The index of the CrossReference that follows the desired CrossReference.
     * @return CrossReference
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the CrossReference whose index follows the specified CrossReference in the collection.
     *
     * @param {CrossReference} [obj] The CrossReference whose index comes before the desired CrossReference.
     * @return CrossReference
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any CrossReference in the collection.
     *
     * @return CrossReference
     */
    anyItem: function () {
        
    },


    /**
     * Returns every CrossReference in the collection.
     *
     * @return CrossReference
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the CrossReference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the CrossReference with the specified index.
     *
     * @param {number} [index] The index.
     * @return CrossReference
     */
    []: function (index) {
        
    },


};

