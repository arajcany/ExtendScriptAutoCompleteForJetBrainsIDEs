/*
 * Defines a specific search among handled nodes.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Adobe Bridge 2022\omv.xml
 * OMV Time: 
 * OMV Title: Adobe Bridge 2022 Object Model
 */
var SearchSpecification = {


    /**
     * A collection of SearchCondition objects to use for this search.
     * @type {Array}
     */
    conditionList: Array,


    /**
     * The search conjunction, and or or, as selected in the Find dialog.
     * @type {String}
     */
    conjunction: String,


    /**
     * The maximum number of result nodes to return from the search.
     * @type {Number}
     */
    maximumResults: Number,


    /**
     * The name of a Rank object, as specified for a SearchDefinition object.
     * @type {String}
     */
    rankField: String,


    /**
     * The ordering style, one of ascending (the default) or descending.
     * @type {String}
     */
    rankOrdering: String,


    /**
     * One or more Scope object name strings, as specified for a SearchDefinition object.
     * @type {Array}
     */
    scopeSpecifiers: Array,


    /**
     * 
     * @type {String}
     */
    quickSearchItem: String,


    /**
     * 
     * @type {String}
     */
    quickSearchValue: String,




};

