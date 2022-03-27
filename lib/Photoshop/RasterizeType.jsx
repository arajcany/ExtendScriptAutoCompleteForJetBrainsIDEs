/*
 * The type of the layer content to rasterize.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var RasterizeType = {


    /**
     * Rasterizes the type on a type layer. Doesn't rasterize any other vector data on the layer.
     * @type {int}
     * @readonly
     */
    TEXTCONTENTS: 1,


    /**
     * Rasterizes a shape layer.
     * @type {int}
     * @readonly
     */
    SHAPE: 2,


    /**
     * Rasterizes the fill of a shape layer, leaving the vector mask.
     * @type {int}
     * @readonly
     */
    FILLCONTENT: 3,


    /**
     * Rasterizes the vector mask of a shape layer, turning it into a layer mask.
     * @type {int}
     * @readonly
     */
    LAYERCLIPPINGPATH: 4,


    /**
     * Rasterizes all vector data on the layer.
     * @type {int}
     * @readonly
     */
    ENTIRELAYER: 5,


    /**
     * Rasterizes the selected layers.
     * @type {int}
     * @readonly
     */
    LINKEDLAYERS: 6,




};

