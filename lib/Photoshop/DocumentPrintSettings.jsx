/*
 * Print settings for a document.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var DocumentPrintSettings = {


    /**
     * The object's container.
     * @type {Object}
     * @readonly
     */
    parent: Object,


    /**
     * The class name of the object.
     * @type {string}
     * @readonly
     */
    typename: undefined,


    /**
     * Description field from File Info.
     * @type {boolean}
     */
    caption: undefined,


    /**
     * Prints the document title.
     * @type {boolean}
     */
    labels: undefined,


    /**
     * Print corner crop marks.
     * @type {boolean}
     */
    cornerCropMarks: undefined,


    /**
     * Print center crop marks.
     * @type {boolean}
     */
    centerCropMarks: undefined,


    /**
     * Print color calibration bars.
     * @type {boolean}
     */
    colorBars: undefined,


    /**
     * Print registration marks.
     * @type {boolean}
     */
    registrationMarks: undefined,


    /**
     * Invert the image colors.
     * @type {boolean}
     */
    negative: undefined,


    /**
     * Flip the image horizontally.
     * @type {boolean}
     */
    flip: undefined,


    /**
     * 
     * @type {boolean}
     */
    interpolate: undefined,


    /**
     * Include vector data.
     * @type {boolean}
     */
    vectorData: undefined,


    /**
     * Background color of page.
     * @type {SolidColor}
     */
    backgroundColor: SolidColor,


    /**
     * Color conversion intent when print space is different from the source space.
     * @type {Intent}
     */
    renderIntent: Intent,


    /**
     * Print a hard proof.
     * @type {boolean}
     */
    hardProof: undefined,


    /**
     * Color space for printer. Can be nothing (meaning same as source) or a string specifying a specific color profile.
     * @type {string}
     */
    printSpace: undefined,


    /**
     * Map blacks.
     * @type {boolean}
     */
    mapBlack: undefined,


    /**
     * Width of the print border.
     * @type {UnitValue}
     */
    printBorder: UnitValue,


    /**
     * Bleed width.
     * @type {UnitValue}
     */
    bleedWidth: UnitValue,


    /**
     * Color handling.
     * @type {PrintColorHandling}
     */
    colorHandling: PrintColorHandling,


    /**
     * Number of copies.
     * @type {int}
     */
    copies: int,


    /**
     * Position of image when printing.
     * @type {DocPositionStyle}
     * @readonly
     */
    docPosition: DocPositionStyle,


    /**
     * Y position of image on page.
     * @type {UnitValue}
     * @readonly
     */
    posY: UnitValue,


    /**
     * X position of image on page.
     * @type {UnitValue}
     * @readonly
     */
    posX: UnitValue,


    /**
     * Name of printer.
     * @type {string}
     */
    printerName: undefined,


    /**
     * Scale of image on page.
     * @type {number}
     * @readonly
     */
    scale: undefined,


    /**
     * Currently selected printer.
     * @type {string}
     */
    activePrinter: undefined,


    /**
     * List of available printers.
     * @type {string}
     * @readonly
     */
    printers: undefined,



    /**
     * Set the position of the image on the page.
     *
     * @param {DocPositionStyle} [docPosition] Position of the image on page when printing. Can be centered, scale to fit, or user defined.
     * @param {UnitValue} [posX] X position of image on page.
     * @param {UnitValue} [posY] Y position of image on page.
     * @param {number} [scale] Position of the image on page when printing. Can be centered, scale to fit, or user defined. (default: 100)
     * @return undefined
     */
    setPagePosition: function (docPosition, posX, posY, scale) {
        
    },


};

