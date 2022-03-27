/*
 * Options which may be supplied when saving a document as an Illustrator file.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var IllustratorSaveOptions = {


    /**
     * What Illustrator file format version to create.
     * @type {Compatibility}
     */
    compatibility: Compatibility.ILLUSTRATOR24,


    /**
     * Include a subset of fonts when less than this percentage of characters are used (version 9 or later)
     * @type {number}
     */
    fontSubsetThreshold: 100,


    /**
     * Embed the document's ICC profile in the saved file (version 9 or later)
     * @type {boolean}
     */
    embedICCProfile: false,


    /**
     * Are linked image files to be included in the saved document (versions 7 or later)
     * @type {boolean}
     */
    embedLinkedFiles: false,


    /**
     * How should transparency be flattened for older file format versions (pre-version 9)
     * @type {OutputFlattening}
     */
    flattenOutput: OutputFlattening.PRESERVEAPPEARANCE,


    /**
     * Save as a PDF compatible file (version 10 or later)
     * @type {boolean}
     */
    pdfCompatible: true,


    /**
     * Should the saved file be compressed (version 10 or later)
     * @type {boolean}
     */
    compressed: true,


    /**
     * All the artboards or range of the artboards will be saved.
     * @type {boolean}
     */
    saveMultipleArtboards: false,


    /**
     * If SaveMultipleArtboards is true ,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
     * @type {string}
     */
    artboardRange: undefined,




};

