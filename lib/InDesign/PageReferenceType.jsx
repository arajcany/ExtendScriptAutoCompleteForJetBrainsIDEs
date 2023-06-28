/*
 * Options for index page references.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var PageReferenceType = {


    /**
     * The page on which the index entry is located.
     * @type {number}
     * @readonly
     */
    CURRENT_PAGE: 1668444263,


    /**
     * The range of pages from the page containing the index entry to the page containing the next paragraph style change.
     * @type {number}
     * @readonly
     */
    TO_NEXT_STYLE_CHANGE: 1953395555,


    /**
     * The range of pages from the page containing the index entry to the page that contains the next occurrance of the specified paragraph style. If no paragraph style is specified, the paragraph style of the index entry paragraph is used.
     * @type {number}
     * @readonly
     */
    TO_NEXT_USE_OF_STYLE: 1953396083,


    /**
     * The last page in the story containing the index entry.
     * @type {number}
     * @readonly
     */
    TO_END_OF_STORY: 1701802868,


    /**
     * The last page in the document.
     * @type {number}
     * @readonly
     */
    TO_END_OF_DOCUMENT: 1701799011,


    /**
     * The last page in the numbered section containing the index entry.
     * @type {number}
     * @readonly
     */
    TO_END_OF_SECTION: 1701802851,


    /**
     * The range of pages from the page containing the index entry to the page containing the nth full paragraph from the paragraph containing the index entry (where n is the number of paragraphs to include).
     * @type {number}
     * @readonly
     */
    FOR_NEXT_N_PARAGRAPHS: 1718513778,


    /**
     * The range of pages from the page containing the inedex entry to the nth page after that page (where n is the number of pages to include).
     * @type {number}
     * @readonly
     */
    FOR_NEXT_N_PAGES: 1718513767,


    /**
     * Turns off page numbers for the index topic.
     * @type {number}
     * @readonly
     */
    SUPPRESS_PAGE_NUMBERS: 1852863079,




};

