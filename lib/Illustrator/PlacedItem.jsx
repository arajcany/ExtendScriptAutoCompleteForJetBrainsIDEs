/*
 * Placed artwork item.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var PlacedItem = {


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
     * The file containing the placed artwork.
     * @type {File}
     */
    file: File,


    /**
     * The transformation matrix of the placed art object.
     * @type {Matrix}
     */
    matrix: Matrix,


    /**
     * Dimensions of placed art object, regardless of transformations.
     * @type {Rect}
     * @readonly
     */
    boundingBox: Rect,


    /**
     * The content variable bound to this placed art object.
     * @type {any}
     */
    contentVariable: undefined,



    /**
     * Move the object.
     *
     * @param {Object} [relativeObject] 
     * @param {ElementPlacement} [insertionLocation]
     * @return PlacedItem
     */
    move: function (relativeObject, insertionLocation) {
        
    },


    /**
     * Duplicate this object.
     *
     * @param {Object} [relativeObject] 
     * @param {ElementPlacement} [insertionLocation]
     * @return PlacedItem
     */
    duplicate: function (relativeObject, insertionLocation) {
        
    },


    /**
     * Deletes this object.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Deletes all elements.
     *
     * @return undefined
     */
    removeAll: function () {
        
    },


    /**
     * Embed the placed art within the illustration.
     *
     * @return undefined
     */
    embed: function () {
        
    },


    /**
     * Trace this raster object using default options. Reorders this placed to the source art.
     *
     * @return PluginItem
     */
    trace: function () {
        
    },


    /**
     * Relink the placed art with supplied art from file.
     *
     * @param {File} [fileSpec] File spec to relink from.
     * @return undefined
     */
    relink: function (fileSpec) {
        
    },


};

