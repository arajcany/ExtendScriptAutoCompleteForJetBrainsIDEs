/*
 * Printer information.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var PrinterInfo = {


    /**
     * The printer type.
     * @type {PrinterTypeEnum}
     */
    printerType: PrinterTypeEnum,


    /**
     * The PostScript level.
     * @type {PrinterPostScriptLevelEnum}
     */
    postScriptLevel: PrinterPostScriptLevelEnum,


    /**
     * The printer color capability.
     * @type {PrinterColorMode}
     */
    colorSupport: PrinterColorMode,


    /**
     * The printer default resolution.
     * @type {number}
     */
    deviceResolution: undefined,


    /**
     * The printer maximum device resolution.
     * @type {number}
     */
    maxDeviceResolution: undefined,


    /**
     * Does the printer support InRIP color separation?
     * @type {boolean}
     */
    inRIPSeparationSupport: undefined,


    /**
     * Does the printer support binary printing?
     * @type {boolean}
     */
    binaryPrintingSupport: undefined,


    /**
     * The list of supported paper sizes.
     * @type {Paper}
     */
    paperSizes: Paper,


    /**
     * Does the printer support custom paper size?
     * @type {boolean}
     */
    customPaperSupport: undefined,


    /**
     * Does the printer support custom paper transverse?
     * @type {boolean}
     */
    customPaperTransverseSupport: undefined,


    /**
     * Custom paper's minimum width.
     * @type {number}
     */
    minPaperWidth: undefined,


    /**
     * Custom paper's maximum width.
     * @type {number}
     */
    maxPaperWidth: undefined,


    /**
     * Custom paper's minimum height.
     * @type {number}
     */
    minPaperHeight: undefined,


    /**
     * Custom paper's maximum height.
     * @type {number}
     */
    maxPaperHeight: undefined,


    /**
     * Custom paper's minimum height offset.
     * @type {number}
     */
    minPaperHeightOffset: undefined,


    /**
     * Custom paper's maximum height offset.
     * @type {number}
     */
    maxPaperHeightOffset: undefined,


    /**
     * Custom paper's minimum width offset.
     * @type {number}
     */
    minPaperWidthOffset: undefined,


    /**
     * Custom paper's maximum width offset.
     * @type {number}
     */
    maxPaperWidthOffset: undefined,




};

