/*
 * Options for trap placement between vector objects and bitmap images.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var TrapImagePlacementTypes = {


    /**
     * Creates a trap that straddles the edge between vector objects and bitmap images.
     * @type {number}
     * @readonly
     */
    CENTER_EDGES: 1953522542,


    /**
     * Causes vector objects to overlap abutting images.
     * @type {number}
     * @readonly
     */
    CHOKE: 1953522536,


    /**
     * Applies the same trapping rules as used elsewhere in the document. Note: When used to trap an object to a photograph, can result in noticeably uneven edges as the trap moves from one side of the edge to another.
     * @type {number}
     * @readonly
     */
    IMAGE_NEUTRAL_DENSITY: 1953525348,


    /**
     * Causes bitmap images to overlap the abutting objects.
     * @type {number}
     * @readonly
     */
    IMAGES_OVER_SPREAD: 1953526640,




};

