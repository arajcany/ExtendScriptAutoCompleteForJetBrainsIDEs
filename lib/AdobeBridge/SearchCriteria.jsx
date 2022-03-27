/*
 * Defines one possible search criterion for a search among handled nodes.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Adobe Bridge 2022\omv.xml
 * OMV Time: 
 * OMV Title: Adobe Bridge 2022 Object Model
 */
var SearchCriteria = {


    /**
     * One or more Operand objects used to populate the drop-down list for the right-side field of this line in the Find dialog.
     * @type {Array}
     */
    operands: Array,


    /**
     * The data type of the operand values.
     * @type {String}
     */
    operandType: String,


    /**
     * A set of predefined operator strings that are not displayed for selection.
     * @type {Array}
     */
    operatorTypesToDisable: Array,


    /**
     * A search field, the name of some property associated with the search node.
     * @type {String}
     */
    searchField: String,


    /**
     * A localized display name for the search field, displayed in the Find dialog. .
     * @type {String}
     */
    searchFieldDisplay: String,


    /**
     * Whether searchfield display names are sorted alphabetically in the Find dialog.
     * @type {Boolean}
     */
    searchFieldSort: Boolean,




};

