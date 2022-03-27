/*
 * The method to use to fill the empty space left by offsetting a an image or selection.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var OffsetUndefinedAreas = {


    /**
     * For background layers, sets pixels to the background layer color. For nonbackground layers, sets the pixels to transparent.
     * @type {int}
     * @readonly
     */
    SETTOBACKGROUND: 1,


    /**
     * Fills the undefined space with content from the opposite edge of the image.
     * @type {int}
     * @readonly
     */
    WRAPAROUND: 2,


    /**
     * Extends the colors of pixels along the edge of the image in the direction specified. Banding may result if the edge pixels are different colors.
     * @type {int}
     * @readonly
     */
    REPEATEDGEPIXELS: 3,




};

