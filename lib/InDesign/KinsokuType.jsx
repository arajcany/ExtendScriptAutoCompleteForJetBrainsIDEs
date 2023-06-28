/*
 * Kinsoku processing options.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var KinsokuType = {


    /**
     * Attempts to move characters to the previous line; if the push-in is not possible, pushes characters to the next line.
     * @type {number}
     * @readonly
     */
    KINSOKU_PUSH_IN_FIRST: 1248553318,


    /**
     * Attempts to move characters to the next line; if the push-out is not possible, pushes characters to the previous line.
     * @type {number}
     * @readonly
     */
    KINSOKU_PUSH_OUT_FIRST: 1248554854,


    /**
     * Always moves characters to the next line. Does not attempt a push-in.
     * @type {number}
     * @readonly
     */
    KINSOKU_PUSH_OUT_ONLY: 1248554863,


    /**
     * The kinsoku prioritize adjustment amount.
     * @type {number}
     * @readonly
     */
    KINSOKU_PRIORITIZE_ADJUSTMENT_AMOUNT: 1248553313,




};

