/*
 * Options which may be supplied when saving a document as an Illustrator EPS file.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var EPSSaveOptions = {


    /**
     * What Illustrator file format version to create.
     * @type {Compatibility}
     */
    compatibility: Compatibility.ILLUSTRATOR24,


    /**
     * EPS preview format.
     * @type {EPSPreview}
     */
    preview: EPSPreview,


    /**
     * Are linked image files to be included in the saved document.
     * @type {boolean}
     */
    embedLinkedFiles: false,


    /**
     * Include thumbnail image of the EPS artwork.
     * @type {boolean}
     */
    includeDocumentThumbnails: true,


    /**
     * Embed all fonts used by the document in the saved file (version 7 or later)
     * @type {boolean}
     */
    embedAllFonts: false,


    /**
     * Use CMYK PostScript.
     * @type {boolean}
     */
    cmykPostScript: true,


    /**
     * PostScript level to use (level 1 valid for file format version 8 or older)
     * @type {EPSPostScriptLevelEnum}
     */
    postScript: EPSPostScriptLevelEnum.LEVEL2,


    /**
     * How should transparency be flattened for older file format versions (pre-version 9)
     * @type {OutputFlattening}
     */
    flattenOutput: OutputFlattening.PRESERVEAPPEARANCE,


    /**
     * Create a raster item of the gradient or gradient mesh so that PostScript Level 2 printers can print the object.
     * @type {boolean}
     */
    compatibleGradientPrinting: false,


    /**
     * 
     * @type {PDFOverprint}
     */
    overprint: PDFOverprint.PRESERVEPDFOVERPRINT,


    /**
     * All the artboards or range of the artboards will be saved.
     * @type {boolean}
     */
    saveMultipleArtboards: false,


    /**
     * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
     * @type {string}
     */
    artboardRange: undefined,




};

