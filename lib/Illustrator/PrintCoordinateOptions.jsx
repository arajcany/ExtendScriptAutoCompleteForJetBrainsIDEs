/*
 * The print coordinate options.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var PrintCoordinateOptions = {


    /**
     * The artwork orientation.
     * @type {PrintOrientation}
     */
    orientation: PrintOrientation.PORTRAIT,


    /**
     * Whether to flip artwork horizontally.
     * @type {boolean}
     */
    emulsion: false,


    /**
     * The artwork position on media.
     * @type {PrintPosition}
     */
    position: PrintPosition.TRANSLATECENTER,


    /**
     * Whether to proportionally scale the artwork to fit on the page.
     * @type {boolean}
     */
    fitToPage: false,


    /**
     * The horizontal scaling factor expressed as a percentage (100 = 100%)
     * @type {number}
     */
    horizontalScale: 100,


    /**
     * The vertical scaling factor expressed as a percentage (100 = 100%)
     * @type {number}
     */
    verticalScale: 100,


    /**
     * The page tiling mode.
     * @type {PrintTiling}
     */
    tiling: PrintTiling.TILESINGLEFULLPAGE,




};

