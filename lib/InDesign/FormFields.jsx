/*
 * A collection of form fields.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var FormFields = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Displays the number of elements in the FormField.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Creates a new FormField
     *
     * @param {Layer} [layer] The layer on which to create the FormField. (Optional)
     * @param {LocationOptions} [at] The location at which to insert the FormField relative to the reference object or within the container object. (Optional) (default: LocationOptions.UNKNOWN)
     * @param {varies=any} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new FormField (Optional)
     * @return FormField
     */
    add: function (layer, at, reference, withProperties) {
        
    },


    /**
     * Returns the FormField with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return FormField
     */
    item: function (index) {
        
    },


    /**
     * Returns the FormField with the specified name.
     *
     * @param {string} [name] The name.
     * @return FormField
     */
    itemByName: function (name) {
        
    },


    /**
     * Returns the FormField with the specified ID.
     *
     * @param {number} [id] The ID.
     * @return FormField
     */
    itemByID: function (id) {
        
    },


    /**
     * Returns the FormFields within the specified range.
     *
     * @param {varies=any} [from] The FormField, index, or name at the beginning of the range. Can accept: FormField, Long Integer or String.
     * @param {varies=any} [to] The FormField, index, or name at the end of the range. Can accept: FormField, Long Integer or String.
     * @return FormField
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first FormField in the collection.
     *
     * @return FormField
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last FormField in the collection.
     *
     * @return FormField
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle FormField in the collection.
     *
     * @return FormField
     */
    middleItem: function () {
        
    },


    /**
     * Returns the FormField with the index previous to the specified index.
     *
     * @param {FormField} [obj] The index of the FormField that follows the desired FormField.
     * @return FormField
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the FormField whose index follows the specified FormField in the collection.
     *
     * @param {FormField} [obj] The FormField whose index comes before the desired FormField.
     * @return FormField
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any FormField in the collection.
     *
     * @return FormField
     */
    anyItem: function () {
        
    },


    /**
     * Returns every FormField in the collection.
     *
     * @return FormField
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the FormField.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the FormField with the specified index.
     *
     * @param {number} [index] The index.
     * @return FormField
     */
    []: function (index) {
        
    },


};

