/*
 * The method to use to treat undistorted areas or areas left blank in an image to which a filter in the Distort category has been applied.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var UndefinedAreas = {


    /**
     * Fills the undefined space with content from the opposite edge of the image.
     * @type {int}
     * @readonly
     */
    WRAPAROUND: 1,


    /**
     * Extends the colors of pixels along the edge of the image in the direction specified. Banding may result if the edge pixels are different colors.
     * @type {int}
     * @readonly
     */
    REPEATEDGEPIXELS: 2,




};

