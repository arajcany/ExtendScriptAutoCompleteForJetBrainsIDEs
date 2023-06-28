/*
 * A tracing object.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var TracingObject = {


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
     * The source art used when creating a new tracing object.
     * @type {PageItem}
     * @readonly
     */
    sourceArt: PageItem,


    /**
     * The options used when tracing the artwork.
     * @type {TracingOptions}
     * @readonly
     */
    tracingOptions: TracingOptions,


    /**
     * The number of paths in the tracing result.
     * @type {Int32}
     * @readonly
     */
    pathCount: Int32,


    /**
     * The number of anchors in the tracing result.
     * @type {Int32}
     * @readonly
     */
    anchorCount: Int32,


    /**
     * The number of colors used in the tracing result.
     * @type {Int32}
     * @readonly
     */
    usedColorCount: Int32,



    /**
     * Release the source artwork for the tracing object. Deletes this tracing object.
     *
     * @return PageItem
     */
    releaseTracing: function () {
        
    },


    /**
     * Expand the tracing to paths. Deletes this tracing object.
     *
     * @param {boolean} [viewed] Expand as viewed with the raster and vector view modes. (default: false)
     * @return GroupItem
     */
    expandTracing: function (viewed) {
        
    },


};

