/*
 * The new document preset to use for creating a new document.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var DocumentPreset = {


    /**
     * The title for the new document.
     * @type {string}
     */
    title: Untitled,


    /**
     * The width for the new document.
     * @type {number}
     */
    width: 612.0,


    /**
     * The height for the new document.
     * @type {number}
     */
    height: 792.0,


    /**
     * Number of artboards for new document.Range (1:100).
     * @type {Int32}
     */
    numArtboards: 1,


    /**
     * Layout for artboards.
     * @type {DocumentArtboardLayout}
     */
    artboardLayout: DocumentArtboardLayout.GridByRow,


    /**
     * Spacing between artboards.
     * @type {number}
     */
    artboardSpacing: 20.0,


    /**
     * Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.
     * @type {Int32}
     */
    artboardRowsOrCols: 1,


    /**
     * The color mode for the new document.
     * @type {DocumentColorSpace}
     */
    colorMode: DocumentColorSpace.CMYK,


    /**
     * The units for the new document.
     * @type {RulerUnits}
     */
    units: RulerUnits.Points,


    /**
     * The preview mode for the new document.
     * @type {DocumentPreviewMode}
     */
    previewMode: DocumentPreviewMode.DefaultPreview,


    /**
     * The raster resolution for the new document.
     * @type {DocumentRasterResolution}
     */
    rasterResolution: DocumentRasterResolution.ScreenResolution,


    /**
     * The transparency grid for the new document.
     * @type {DocumentTransparencyGrid}
     */
    transparencyGrid: DocumentTransparencyGrid.TransparencyGridNone,


    /**
     * Document bleed offset rect.
     * @type {Rect}
     */
    documentBleedOffset: Rect,


    /**
     * Document link for bleed values.
     * @type {boolean}
     */
    documentBleedLink: true,




};

