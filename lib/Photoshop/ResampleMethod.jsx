/*
 * The method to use to resample the image.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var ResampleMethod = {


    /**
     * Does not resample.
     * @type {int}
     * @readonly
     */
    NONE: 1,


    /**
     * Chooses a pixel in the center of the sample area and replaces the entire area with that pixel color. Same as subsampling.
     * @type {int}
     * @readonly
     */
    NEARESTNEIGHBOR: 2,


    /**
     * Averages the pixels in a sample area and replaces the entire area with the average pixel color at the specified resolution. Same as average downsampling.
     * @type {int}
     * @readonly
     */
    BILINEAR: 3,


    /**
     * Uses a weighted average to determine pixel color, which usually yields better results than the simple averageing method of downsampling.
     * @type {int}
     * @readonly
     */
    BICUBIC: 4,


    /**
     * A good method for reducing the size of an image based on Bicubic interpolation with enhanced sharpening. Maintains the detail in a resampled image.
     * @type {int}
     * @readonly
     */
    BICUBICSHARPER: 5,


    /**
     * A good method for enlarging images based on Bicubic interpolation but designed to produce smoother results.
     * @type {int}
     * @readonly
     */
    BICUBICSMOOTHER: 6,


    /**
     * 
     * @type {int}
     * @readonly
     */
    BICUBICAUTOMATIC: 7,


    /**
     * 
     * @type {int}
     * @readonly
     */
    AUTOMATIC: 8,


    /**
     * 
     * @type {int}
     * @readonly
     */
    PRESERVEDETAILS: 9,




};

