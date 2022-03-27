/*
 * Options which may be supplied when exporting a document as a Photoshop file.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var ExportOptionsPhotoshop = {


    /**
     * The color space of the exported file.
     * @type {ImageColorSpace}
     */
    imageColorSpace: ImageColorSpace.RGB,


    /**
     * The resolution of the exported file.
     * @type {number}
     */
    resolution: 150,


    /**
     * Should the resulting image be antialiased.
     * @type {boolean}
     */
    antiAliasing: true,


    /**
     * Preserve document layers when exporting.
     * @type {boolean}
     */
    writeLayers: true,


    /**
     * Export text objects as editable text layers.
     * @type {boolean}
     */
    editableText: true,


    /**
     * Embed an ICC profile when exporting.
     * @type {boolean}
     */
    embedICCProfile: false,


    /**
     * Should a warning dialog be displayed because of conflicts in the export settings.
     * @type {boolean}
     */
    warnings: true,


    /**
     * Preserve as much of the original document's structure as possible when exporting.
     * @type {boolean}
     */
    maximumEditability: true,


    /**
     * All the artboards or range of the artboards will be exported.
     * @type {boolean}
     */
    saveMultipleArtboards: false,


    /**
     * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
     * @type {string}
     */
    artboardRange: undefined,




};

