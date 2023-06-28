/*
 * Options which may be supplied when opening a PDF file.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var OpenOptionsPDF = {


    /**
     * The object's container.
     * @type {Object}
     * @readonly
     */
    parent: Object,


    /**
     * The class name of the object.
     * @type {string}
     * @readonly
     */
    typename: undefined,


    /**
     * What page should be used when opening a multipage document (default: 1)
     * @type {Int32}
     */
    pageToOpen: Int32,


    /**
     * What box should be used when placing a multipage document (default: PDF media box)
     * @type {PDFBoxType}
     */
    pDFCropToBox: PDFBoxType,


    /**
     * Range of pages when opening a multipage document [possible values: 'all', range(for example: '1,2,3-5,8')]
     * @type {string}
     */
    pageRangeToOpen: undefined,


    /**
     * Import PDF pages as links for optimal performance (default: true for PageRangeToOpen=all; false otherwise)
     * @type {boolean}
     */
    placeAsLinks: undefined,




};

