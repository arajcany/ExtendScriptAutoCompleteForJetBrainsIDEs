/*
 * Options for specifying how tranparencies are displayed.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var TagTransparency = {


    /**
     * Turns off the on-screen display of transparency. Note: Does not turn off transparency when printing or exporting the file.
     * @type {number}
     * @readonly
     */
    OFF: 1330005536,


    /**
     * Displays basic transparency (opacity and blend modes) and shows transparency effects such as drop shadow and feathering in a low-resolution approximation. Note: Does not isolate page content from the background. Objects with blend modes other than Normal might appear different in other applications and output.
     * @type {number}
     * @readonly
     */
    LOW_QUALITY: 1481666146,


    /**
     * Displays drop shadows and feathering in low resolution.
     * @type {number}
     * @readonly
     */
    MEDIUM_QUALITY: 1481663597,


    /**
     * Displays higher-resolution (144 dpi) drop shadows and feathers, CMYK mattes, and spread isolation.
     * @type {number}
     * @readonly
     */
    HIGH_QUALITY: 1346922866,


    /**
     * Uses the default setting. For information, see display performance preferences.
     * @type {number}
     * @readonly
     */
    DEFAULT_VALUE: 1147563124,




};

