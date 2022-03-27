/*
 * Options which may be supplied when exporting a document as an SVG file.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var ExportOptionsSVG = {


    /**
     * The version of DTD that the exported file should be conforming to.
     * @type {SVGDTDVersion}
     */
    DTD: SVGDTDVersion.SVG1_1,


    /**
     * The type of font that should be included in the exported file.
     * @type {SVGFontType}
     */
    fontType: SVGFontType.SVGFONT,


    /**
     * What font glyphs should be included in the exported file.
     * @type {SVGFontSubsetting}
     */
    fontSubsetting: SVGFontSubsetting.ALLGLYPHS,


    /**
     * Should the raster images in the exported file be included.
     * @type {boolean}
     */
    embedRasterImages: false,


    /**
     * Decimal precision for element coordinate values.
     * @type {Int32}
     */
    coordinatePrecision: 3,


    /**
     * How should the text in the document be encoded.
     * @type {SVGDocumentEncoding}
     */
    documentEncoding: SVGDocumentEncoding.ASCII,


    /**
     * How should the CSS properties of the document be included in the document.
     * @type {SVGCSSPropertyLocation}
     */
    cssProperties: SVGCSSPropertyLocation.STYLEATTRIBUTES,


    /**
     * Should the exported file be compressed.
     * @type {boolean}
     */
    compressed: false,


    /**
     * 
     * @type {boolean}
     */
    optimizeForSVGViewer: false,


    /**
     * 
     * @type {boolean}
     */
    includeVariablesAndDatasets: false,


    /**
     * 
     * @type {boolean}
     */
    includeFileInfo: false,


    /**
     * 
     * @type {boolean}
     */
    includeUnusedStyles: false,


    /**
     * Preserve slice data in exported document.
     * @type {boolean}
     */
    slices: false,


    /**
     * Preserve Illustrator editing capabilities when exporting the document.
     * @type {boolean}
     */
    preserveEditability: false,


    /**
     * Is SVG auto kerning allowed?
     * @type {boolean}
     */
    sVGAutoKerning: false,


    /**
     * Is SVG text-on-path construct allowed?
     * @type {boolean}
     */
    sVGTextOnPath: false,


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

