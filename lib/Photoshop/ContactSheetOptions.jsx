/*
 * Options that can be specified for a contact sheet.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var ContactSheetOptions = {


    /**
     * The width (in pixels) of the resulting document. Range: 100 to 2900.
     * @type {int}
     */
    width: 576,


    /**
     * The height (in pixels) of the resulting document. Range: 100 to 2900.
     * @type {int}
     */
    height: 720,


    /**
     * The resolution of the document (in pixels per inch). Range: 35 to 1200.
     * @type {number}
     */
    resolution: 72.0,


    /**
     * The document color mode.
     * @type {NewDocumentMode}
     */
    mode: NewDocumentMode.RGB,


    /**
     * If true, flattens all layers in the final document.
     * @type {boolean}
     */
    flatten: true,


    /**
     * If true, places the images horizontally first.
     * @type {boolean}
     */
    acrossFirst: true,


    /**
     * If true, auto spaces the images in the contact sheet.
     * @type {boolean}
     */
    useAutoSpacing: true,


    /**
     * The number of contact sheet columns.
     * @type {int}
     */
    columnCount: 5,


    /**
     * The number of contact sheet rows.
     * @type {int}
     */
    rowCount: 6,


    /**
     * The vertical spacing (in pixels) between images. Range: 0 to 29000.
     * @type {int}
     */
    vertical: 1,


    /**
     * The horizontal spacing (in pixels) between images. Range: 0 to 29000.
     * @type {int}
     */
    horizontal: 1,


    /**
     * If true, rotates images for best fit.
     * @type {boolean}
     */
    bestFit: false,


    /**
     * If true, uses the filename as a caption for the image.
     * @type {boolean}
     */
    caption: true,


    /**
     * The font used for the caption.
     * @type {GalleryFontType}
     */
    font: GalleryFontType.ARIAL,


    /**
     * The caption font size.
     * @type {int}
     */
    fontSize: 12,




};

