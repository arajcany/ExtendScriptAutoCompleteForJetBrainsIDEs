/*
 * Options for fitting content to a frame.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var Fitting = {


    /**
     * Resizes content to fit the frame while preserving content proportions. If the content and frame have different proportions, some empty space occurs in the frame.
     * @type {number}
     * @readonly
     */
    PROPORTIONAL: 1684885618,


    /**
     * Resizes content to fit the frame. Note: Content that is a different size than the frame appears stretched or squeezed.
     * @type {number}
     * @readonly
     */
    FIT_CONTENT_TO_FRAME: 1684883043,


    /**
     * Resizes the frame to fit the content.
     * @type {number}
     * @readonly
     */
    FIT_FRAME_TO_CONTENT: 1684883046,


    /**
     * Preserves the original sizes of the frame and the content. Note: Content that is larger than the frame is obscured around the edges.
     * @type {number}
     * @readonly
     */
    PRESERVE_SIZES: 1684885619,


    /**
     * Selects best crop region of the content for the frame based on Adobe Sensei. Note: Preserves frame size but might scale the content size. If this fitting is set, centerImage property is turned-off.
     * @type {number}
     * @readonly
     */
    CONTENT_AWARE_FITTING: 1684882241,


    /**
     * Apply the frame fitting based on existing setting applied on the orginal frame.
     * @type {number}
     * @readonly
     */
    HONOUR_EXISTING_STYLE: 1684883539,


    /**
     * Resizes content to fill the frame while preserving content proportions. If the content and frame have different proportions, some content is obscured by the bounding box of the frame.
     * @type {number}
     * @readonly
     */
    FILL_PROPORTIONAL: 1684883056,




};

