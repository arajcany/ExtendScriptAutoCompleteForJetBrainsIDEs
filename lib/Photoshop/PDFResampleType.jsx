/*
 * Downsampling options when saving as PDF.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var PDFResampleType = {


    /**
     * Does not downsample.
     * @type {int}
     * @readonly
     */
    NONE: 0,


    /**
     * Averages the pixels in a sample area and replaces the entire area with the average pixel color at the specified resolution.
     * @type {int}
     * @readonly
     */
    PDFAVERAGE: 1,


    /**
     * Chooses a pixel in the center of the sample area and replaces the entire area with that pixel color; significantly reduces conversion time but results in images that are less smooth and continuous.
     * @type {int}
     * @readonly
     */
    PDFSUBSAMPLE: 2,


    /**
     * Uses a weighted average to determine pixel color, which usually yields better results than the simple averaging method of downsampling. The slowest but most precise method, resulting in the smoothest gradations.
     * @type {int}
     * @readonly
     */
    PDFBICUBIC: 3,




};

