/*
 * The resampling method.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var Sampling = {


    /**
     * Uses no resampling.
     * @type {number}
     * @readonly
     */
    NONE: 1852796517,


    /**
     * Averages the pixels in a sample area and replaces the entire area with the average pixel color.
     * @type {number}
     * @readonly
     */
    DOWNSAMPLE: 1684951917,


    /**
     * Chooses a pixel in the center of the sample area and replaces the entire area with that pixel color.
     * @type {number}
     * @readonly
     */
    SUBSAMPLE: 1935823725,


    /**
     * Uses a weighted average to determine pixel color.
     * @type {number}
     * @readonly
     */
    BICUBIC_DOWNSAMPLE: 1650742125,




};

