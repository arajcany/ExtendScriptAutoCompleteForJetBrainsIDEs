/*
 * The destination color mode. Note: Color images must be changed to Grayscale mode before you can change them to Bitmap mode.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var ChangeMode = {


    /**
     * Grayscale.
     * @type {int}
     * @readonly
     */
    GRAYSCALE: 1,


    /**
     * RGB.
     * @type {int}
     * @readonly
     */
    RGB: 2,


    /**
     * CMYK.
     * @type {int}
     * @readonly
     */
    CMYK: 3,


    /**
     * Lab.
     * @type {int}
     * @readonly
     */
    LAB: 4,


    /**
     * Bitmap. Note: Color images must be changed to Grayscale mode before you can change them to Bitmap mode.
     * @type {int}
     * @readonly
     */
    BITMAP: 5,


    /**
     * Indexed color, in which the number of colors in the image is reduced to at most 256, the standard number of colors supported by the GIF and PNG-8 formats and many multimedia applications.
     * @type {int}
     * @readonly
     */
    INDEXEDCOLOR: 6,


    /**
     * Image with multiple color channels.
     * @type {int}
     * @readonly
     */
    MULTICHANNEL: 7,




};

