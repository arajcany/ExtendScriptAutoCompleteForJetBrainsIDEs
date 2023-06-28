/*
 * A collection of text frame items.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var TextFrameItems = {


    /**
     * The object's container.
     * @type {Object}
     * @readonly
     */
    parent: Object,


    /**
     * The class name of the object.
     * @type {string}
     * @readonly
     */
    typename: undefined,


    /**
     * Number of elements in the collection.
     * @type {int}
     * @readonly
     */
    length: int,



    /**
     * Create a point text frame item.
     *
     * @return TextFrameItem
     */
    add: function () {
        
    },


    /**
     * Create a point text frame item.
     *
     * @param {Point} [anchor] The position (coordinates) of the anchor point.
     * @param {TextOrientation} [orientation] The orientation of the text. (default: TextOrientation.HORIZONTAL)
     * @return TextFrameItem
     */
    pointText: function (anchor, orientation) {
        
    },


    /**
     * Create an area text frame item.
     *
     * @param {PathItem} [textPath] The path item associated with the text frame.
     * @param {TextOrientation} [orientation] The orientation of the text. (default: TextOrientation.HORIZONTAL)
     * @param {TextFrameItem} [baseFrame] The base text frame if it has one.
     * @param {boolean} [postFix] Whether to postfix/prefix the new text frame to the specified base text frame. (default: true)
     * @return TextFrameItem
     */
    areaText: function (textPath, orientation, baseFrame, postFix) {
        
    },


    /**
     * Create an on-path text frame item.
     *
     * @param {PathItem} [textPath] The path item associated with the text frame.
     * @param {number} [startTValue] The start position of text along a path, as a value relative to the path's segments (path text only) (default: 0.0)
     * @param {number} [endTValue] The end position of text along a path, as a value relative to the path's segments (path text only) (default: 0.0)
     * @param {TextOrientation} [orientation] The orientation of the text. (default: TextOrientation.HORIZONTAL)
     * @param {TextFrameItem} [baseFrame] The base text frame if it has one.
     * @param {boolean} [postFix] Whether to postfix/prefix the new text frame to the specified base text frame. (default: true)
     * @return TextFrameItem
     */
    pathText: function (textPath, startTValue, endTValue, orientation, baseFrame, postFix) {
        
    },


    /**
     * Deletes all elements.
     *
     * @return undefined
     */
    removeAll: function () {
        
    },


    /**
     * Get the first element in the collection with the provided name.
     *
     * @param {string} [name]
     * @return TextFrameItem
     */
    getByName: function (name) {
        
    },


};

