/*
 * The encoding to use when saving to TIFF format.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var TiffEncodingType = {


    /**
     * No compression.
     * @type {int}
     * @readonly
     */
    NONE: 1,


    /**
     * LZW compression, which is lossless and most useful for images with large areas of single color.
     * @type {int}
     * @readonly
     */
    TIFFLZW: 2,


    /**
     * JPEG compression, which is lossy and recommended for continuous-tone images, such as photographs.
     * @type {int}
     * @readonly
     */
    JPEG: 3,


    /**
     * Zip compression, which is lossless and most effective for images that contain large areas of single color.
     * @type {int}
     * @readonly
     */
    TIFFZIP: 4,




};

