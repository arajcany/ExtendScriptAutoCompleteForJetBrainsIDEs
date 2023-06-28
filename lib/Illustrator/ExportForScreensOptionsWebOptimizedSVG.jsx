/*
 * Options which may be provided when exporting a document as a web optimized SVG file.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var ExportForScreensOptionsWebOptimizedSVG = {


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




};

