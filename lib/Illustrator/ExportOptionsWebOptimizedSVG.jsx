/*
 * Options which may be supplied when exporting a document as a Web optimized SVG file.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var ExportOptionsWebOptimizedSVG = {


    /**
     * The type of font that should be included in the exported file.
     * @type {SVGFontType}
     */
    fontType: SVGFontType.SVGFONT,


    /**
     * Decimal precision for element coordinate values.
     * @type {Int32}
     */
    coordinatePrecision: 3,


    /**
     * How should the CSS properties of the document be included in the document.
     * @type {SVGCSSPropertyLocation}
     */
    cssProperties: SVGCSSPropertyLocation.STYLEATTRIBUTES,


    /**
     * How object names (IDs) are generated in exported SVG.
     * @type {SVGIdType}
     */
    svgId: SVGIdType.SVGIDREGULAR,


    /**
     * Reduces the size of the svg.
     * @type {boolean}
     */
    svgMinify: false,


    /**
     * Makes the SVG Responsive.
     * @type {boolean}
     */
    svgResponsive: true,


    /**
     * Should the raster images in the exported file be included.
     * @type {RasterImageLocation}
     */
    rasterImageLocation: RasterImageLocation.PRESERVE,


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

