/*
 * Options which may be supplied when exporting a document to AutoCAD formats (.dwg or .dxf)
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var ExportOptionsAutoCAD = {


    /**
     * Which format to export the file as.
     * @type {AutoCADExportFileFormat}
     */
    exportFileFormat: AutoCADExportFileFormat.DWG,


    /**
     * Release of AutoCAD to export to.
     * @type {AutoCADCompatibility}
     */
    version: AutoCADCompatibility.AutoCADRelease24,


    /**
     * Ratio by which to scale the output.
     * @type {number}
     */
    unitScaleRatio: 1.0,


    /**
     * Units from which to map.
     * @type {AutoCADUnit}
     */
    unit: AutoCADUnit.Millimeters,


    /**
     * Number of colors to export into the AutoCAD file.
     * @type {AutoCADColors}
     */
    colors: AutoCADColors.TrueColors,


    /**
     * Raster format in which to export raster art.
     * @type {AutoCADRasterFormat}
     */
    rasterFormat: AutoCADRasterFormat.PNG,


    /**
     * Whether to preserve appearance or editability during export.
     * @type {AutoCADExportOption}
     */
    exportOption: AutoCADExportOption.MaximumEditability,


    /**
     * Export selected art only.
     * @type {boolean}
     */
    exportSelectedArtOnly: false,


    /**
     * Alter paths for appearance.
     * @type {boolean}
     */
    alterPathsForAppearance: false,


    /**
     * Whether to convert text to outlines.
     * @type {boolean}
     */
    convertTextToOutlines: false,


    /**
     * Whether to scale lineweights by the same amount as rest of the drawing.
     * @type {boolean}
     */
    scaleLineweights: false,




};

