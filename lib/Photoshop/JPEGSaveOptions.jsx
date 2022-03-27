/*
 * Options for saving a document in JPEG format.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var JPEGSaveOptions = {


    /**
     * If true, the color profile is embedded in the document.
     * @type {boolean}
     */
    embedColorProfile: undefined,


    /**
     * The download format to use.
     * @type {FormatOptionsType}
     */
    formatOptions: FormatOptionsType.STANDARDBASELINE,


    /**
     * The color to use to fill anti-aliased edges adjacent to transparent areas of the image. Default: white.
     * @type {MatteType}
     */
    matte: MatteType,


    /**
     * The number of scans. Valid only for progressive type JPEG files.
     * @type {int}
     */
    scans: int,


    /**
     * The quality of the produced image.
     * @type {int}
     */
    quality: 3,




};

