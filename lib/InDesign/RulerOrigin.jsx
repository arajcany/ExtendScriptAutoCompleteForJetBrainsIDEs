/*
 * Zero point placement options.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var RulerOrigin = {


    /**
     * The zero point is at the top-left corner of the spread and the ruler increments continuously across all pages of the spread.
     * @type {number}
     * @readonly
     */
    SPREAD_ORIGIN: 1380143983,


    /**
     * The top-left corner of each page is a new zero point on the horizontal ruler.
     * @type {number}
     * @readonly
     */
    PAGE_ORIGIN: 1380143215,


    /**
     * The zero point is at the top-left corner of the left-most page and at the top of the binding spine. The horizontal ruler measures from the leftmost page to the binding edge, and from the binding spine through the right edge of the right-most page. Also locks the zero point and prevents manual overrides.
     * @type {number}
     * @readonly
     */
    SPINE_ORIGIN: 1380143984,




};

