/*
 * A collection of cross reference building blocks.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var BuildingBlocks = {


    /**
     * The number of objects in the collection.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Creates a new cross reference building block.
     *
     * @param {BuildingBlockTypes} [blockType] Type of the building block.
     * @param {CharacterStyle} [appliedCharacterStyle] Character style to be applied to the building block. (Optional)
     * @param {string} [customText] Building block custom text. Currently this is only useful in custom string building block. It is ignored for other types of building blocks. (Optional)
     * @param {Object} [withProperties] Initial values for properties of the new BuildingBlock (Optional)
     * @return BuildingBlock
     */
    add: function (blockType, appliedCharacterStyle, customText, withProperties) {
        
    },


    /**
     * Displays the number of elements in the BuildingBlock.
     *
     * @return number
     */
    count: function () {
        
    },


    /**
     * Returns the BuildingBlock with the specified index or name.
     *
     * @param {varies=any} [index] The index or name. Can accept: Long Integer or String.
     * @return BuildingBlock
     */
    item: function (index) {
        
    },


    /**
     * Returns the BuildingBlocks within the specified range.
     *
     * @param {varies=any} [from] The BuildingBlock, index, or name at the beginning of the range. Can accept: BuildingBlock, Long Integer or String.
     * @param {varies=any} [to] The BuildingBlock, index, or name at the end of the range. Can accept: BuildingBlock, Long Integer or String.
     * @return BuildingBlock
     */
    itemByRange: function (from, to) {
        
    },


    /**
     * Returns the first BuildingBlock in the collection.
     *
     * @return BuildingBlock
     */
    firstItem: function () {
        
    },


    /**
     * Returns the last BuildingBlock in the collection.
     *
     * @return BuildingBlock
     */
    lastItem: function () {
        
    },


    /**
     * Returns the middle BuildingBlock in the collection.
     *
     * @return BuildingBlock
     */
    middleItem: function () {
        
    },


    /**
     * Returns the BuildingBlock with the index previous to the specified index.
     *
     * @param {BuildingBlock} [obj] The index of the BuildingBlock that follows the desired BuildingBlock.
     * @return BuildingBlock
     */
    previousItem: function (obj) {
        
    },


    /**
     * Returns the BuildingBlock whose index follows the specified BuildingBlock in the collection.
     *
     * @param {BuildingBlock} [obj] The BuildingBlock whose index comes before the desired BuildingBlock.
     * @return BuildingBlock
     */
    nextItem: function (obj) {
        
    },


    /**
     * Returns any BuildingBlock in the collection.
     *
     * @return BuildingBlock
     */
    anyItem: function () {
        
    },


    /**
     * Returns every BuildingBlock in the collection.
     *
     * @return BuildingBlock
     */
    everyItem: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the BuildingBlock.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the BuildingBlock with the specified index.
     *
     * @param {number} [index] The index.
     * @return BuildingBlock
     */
    []: function (index) {
        
    },


};

