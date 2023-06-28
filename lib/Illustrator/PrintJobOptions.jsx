/*
 * The print job options.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var PrintJobOptions = {


    /**
     * The layers/objects to be printed.
     * @type {PrintArtworkDesignation}
     */
    designation: PrintArtworkDesignation.VISIBLEPRINTABLELAYERS,


    /**
     * The printing bounds.
     * @type {PrintingBounds}
     */
    printArea: PrintingBounds.ARTBOARDBOUNDS,


    /**
     * The number of copies to print.
     * @type {Int32}
     */
    copies: 1,


    /**
     * Print pages in reverse order.
     * @type {boolean}
     */
    reversePages: false,


    /**
     * Whether to collate print pages.
     * @type {boolean}
     */
    collate: false,


    /**
     * The file to be printed to.
     * @type {File}
     */
    file: File,


    /**
     * Whether to print as bitmap.
     * @type {boolean}
     */
    printAsBitmap: false,


    /**
     * The bitmap resolution.
     * @type {number}
     */
    bitmapResolution: 0,


    /**
     * The print job name.
     * @type {string}
     */
    name: undefined,


    /**
     * Whether to print all artboards.
     * @type {boolean}
     */
    printAllArtboards: true,


    /**
     * Artboard Range to be printed if PrintAllArtboards is false.
     * @type {string}
     */
    artboardRange: 1-,




};

