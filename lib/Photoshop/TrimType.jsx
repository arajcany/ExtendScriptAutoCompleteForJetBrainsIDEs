/*
 * The type of pixels to trim around an image.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var TrimType = {


    /**
     * Trims away transparency at the edges of the image, leaving the smallest image containing nontransparent pixels.
     * @type {int}
     * @readonly
     */
    TRANSPARENT: 0,


    /**
     * Removes from the image an area the color of the upper left pixel.
     * @type {int}
     * @readonly
     */
    TOPLEFT: 1,


    /**
     * Removes from the image an area the color of the lower right pixel.
     * @type {int}
     * @readonly
     */
    BOTTOMRIGHT: 9,




};

