/*
 * Options that can be specified for a Picture Package.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var PicturePackageOptions = {


    /**
     * The layout to use to generate the picture package.
     * @type {string}
     */
    layout: undefined,


    /**
     * The resolution of the document (in pixels per inch)
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
     * The content information.
     * @type {PicturePackageTextType}
     */
    content: PicturePackageTextType.NONE,


    /**
     * The picture package custom text.
     * @type {string}
     */
    text: undefined,


    /**
     * The font used for security text.
     * @type {GalleryFontType}
     */
    font: GalleryFontType.ARIAL,


    /**
     * The font size.
     * @type {int}
     */
    fontSize: 12,


    /**
     * The web page security text opacity (as a percentage) Range: 0 to 100.
     * @type {int}
     */
    opacity: 100,


    /**
     * The color of the security text.
     * @type {RGBColor}
     */
    textColor: RGBColor,


    /**
     * The position of the security text.
     * @type {GallerySecurityTextPositionType}
     */
    textPosition: GallerySecurityTextPositionType.CENTERED,


    /**
     * The orientation of the security text.
     * @type {GallerySecurityTextRotateType}
     */
    textRotate: GallerySecurityTextRotateType.ZERO,




};

