/*
 * Ink trapping type options.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var InkTypes = {


    /**
     * Uses traditional process inks and most spot inks.
     * @type {number}
     * @readonly
     */
    NORMAL: 1852797549,


    /**
     * Uses heavy, nontransparent inks to prevent trapping of underlying colors but allow for trapping along the edges of the ink. Best for metallic inks.
     * @type {number}
     * @readonly
     */
    OPAQUE: 1769230192,


    /**
     * Uses clear inks to ensure that underlying items trap. Best for varnishes and dieline inks.
     * @type {number}
     * @readonly
     */
    TRANSPARENT: 1769231474,


    /**
     * Uses heavy, nontransparent inks to prevent trapping of underlying colors but allow for trapping along the edges of the ink. Best for inks that have undesirable interactions with other inks.
     * @type {number}
     * @readonly
     */
    OPAQUE_IGNORE: 1769228647,




};

