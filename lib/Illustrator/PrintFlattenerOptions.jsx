/*
 * The transparency flattening options.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var PrintFlattenerOptions = {


    /**
     * The flattening balance.
     * @type {Int32}
     */
    flatteningBalance: 100,


    /**
     * The rasterization resolution.
     * @type {number}
     */
    rasterizationResolution: 300,


    /**
     * The gradient resolution.
     * @type {number}
     */
    gradientResolution: 300,


    /**
     * Whether to convert all text to outlines.
     * @type {boolean}
     */
    convertTextToOutlines: false,


    /**
     * Whether to convert all strokes to outlines.
     * @type {boolean}
     */
    convertStrokesToOutlines: false,


    /**
     * Whether to clip complex regions.
     * @type {boolean}
     */
    clipComplexRegions: false,


    /**
     * Overprint.
     * @type {PDFOverprint}
     */
    overprint: PDFOverprint.PRESERVEPDFOVERPRINT,




};

