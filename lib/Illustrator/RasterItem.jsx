/*
 * Raster artwork item.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var RasterItem = {


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
     * The file containing the raster artwork.
     * @type {File}
     * @readonly
     */
    file: File,


    /**
     * The transformation matrix of the raster art object.
     * @type {Matrix}
     */
    matrix: Matrix,


    /**
     * Dimensions of raster art object regardless of transformations.
     * @type {Rect}
     */
    boundingBox: Rect,


    /**
     * The color space of the raster image.
     * @type {ImageColorSpace}
     * @readonly
     */
    imageColorSpace: ImageColorSpace,


    /**
     * Is the raster art embedded within the illustration?
     * @type {boolean}
     */
    embedded: undefined,


    /**
     * Is the raster art overprinting?
     * @type {boolean}
     */
    overprint: undefined,


    /**
     * Is the raster art a colorized grayscale image?
     * @type {boolean}
     * @readonly
     */
    colorizedGrayscale: undefined,


    /**
     * Is the raster art transparent?
     * @type {boolean}
     * @readonly
     */
    transparent: undefined,


    /**
     * The number of image channels.
     * @type {Int32}
     * @readonly
     */
    channels: Int32,


    /**
     * The number of bits per channel.
     * @type {Int32}
     * @readonly
     */
    bitsPerChannel: Int32,


    /**
     * List of colorant names.
     * @type {string}
     * @readonly
     */
    colorants: undefined,


    /**
     * Status of the linked image.
     * @type {RasterLinkState}
     * @readonly
     */
    status: RasterLinkState,


    /**
     * The content variable bound to this raster art object.
     * @type {any}
     */
    contentVariable: undefined,



    /**
     * Move the object.
     *
     * @param {Object} [relativeObject] 
     * @param {ElementPlacement} [insertionLocation]
     * @return RasterItem
     */
    move: function (relativeObject, insertionLocation) {
        
    },


    /**
     * Duplicate this object.
     *
     * @param {Object} [relativeObject] 
     * @param {ElementPlacement} [insertionLocation]
     * @return RasterItem
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
     * Colorize the RasterItem with a CMYK or RGB Color.
     *
     * @param {Color} [rasterColor] The color to use for coloring the TIFF image.
     * @return undefined
     */
    colorize: function (rasterColor) {
        
    },


    /**
     * Trace this raster object using default options. Reorders this raster to the source art.
     *
     * @return PluginItem
     */
    trace: function () {
        
    },


};

