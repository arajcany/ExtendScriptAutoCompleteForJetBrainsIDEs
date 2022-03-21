/*
 * The path on which to base the contour text wrap.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var ContourOptionsTypes = {


    /**
     * Sets the text wrap shape to the object's bounding box.
     * @type {number}
     * @readonly
     */
    BOUNDING_BOX: 1701732962,


    /**
     * Sets the text wrap shape to the specified Photoshop path. To specify the Photoshop path, see contour path name.
     * @type {number}
     * @readonly
     */
    PHOTOSHOP_PATH: 1886613620,


    /**
     * Sets the text wrap shape to the edges of the image.
     * @type {number}
     * @readonly
     */
    DETECT_EDGES: 1685349735,


    /**
     * Sets the text wrap shape to the edges of the specified alpha channel. To specify the alpha channel, see contour path name.
     * @type {number}
     * @readonly
     */
    ALPHA_CHANNEL: 1634756707,


    /**
     * Sets the text wrap shape to the wrapped object's graphics frame.
     * @type {number}
     * @readonly
     */
    GRAPHIC_FRAME: 1701734246,


    /**
     * Sets the text wrap shape to the clipping path (if any) defined in Photoshop. Note: A path cannot be specified using this enumeration. To set the text wrap shape to a specific path, use the photoshop path contour options type enumeration value.
     * @type {number}
     * @readonly
     */
    SAME_AS_CLIPPING: 1935762288,


    /**
     * The Smart Text Wrap selects the key Subject in the content based on Adobe Sensei.
     * @type {number}
     * @readonly
     */
    SELECT_SUBJECT: 1685087092,




};

