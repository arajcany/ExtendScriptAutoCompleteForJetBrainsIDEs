/*
 * Color output mode options for composites.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var ColorOutputModes = {


    /**
     * Sends a full-color version of the specified pages to the printer, preserving all color values in the original document. Note: Cannot simulate overprint when using this option.
     * @type {number}
     * @readonly
     */
    COMPOSITE_LEAVE_UNCHANGED: 1668107349,


    /**
     * Sends grayscale versions of the specified pages to the printer.
     * @type {number}
     * @readonly
     */
    COMPOSITE_GRAY: 1668116583,


    /**
     * Sends full-color versions of the specified pages to the printer.
     * @type {number}
     * @readonly
     */
    COMPOSITE_RGB: 1668108866,


    /**
     * Sends full-color versions of the specified pages to the printer. Note: Available only for PostScript printers.
     * @type {number}
     * @readonly
     */
    COMPOSITE_CMYK: 1668105035,


    /**
     * Sends PostScript information for each of the required separations to the printer. Note: Available only for PostScript printers.
     * @type {number}
     * @readonly
     */
    SEPARATIONS: 1936027745,


    /**
     * Allows the printer to create color separations. Note: Valid only with a PostScript raster image processing (RIP) device.
     * @type {number}
     * @readonly
     */
    INRIP_SEPARATIONS: 1919512691,




};

