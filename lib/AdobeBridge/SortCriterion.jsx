/*
 * Provides a way for Adobe Bridge extensions to specify how handled nodes can be sorted.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Adobe Bridge 2022\omv.xml
 * OMV Time: 
 * OMV Title: Adobe Bridge 2022 Object Model
 */
var SortCriterion = {


    /**
     * A localized display name for this sorting criterion.
     * @type {String}
     */
    displayName: String,


    /**
     * The name of an Infoset property by which to sort.
     * @type {String}
     */
    infosetMember: String,


    /**
     * The unique identifying name of this sort criterion.
     * @type {String}
     */
    name: String,


    /**
     * The data type of the criterion property.
     * @type {String}
     */
    type: String,


    /**
     * The namespace portion of an XMP property by which to sort.
     * @type {String}
     */
    xmpNamespace: String,


    /**
     * The URI key portion of an XMP property by which to sort.
     * @type {String}
     */
    xmpUri: String,




};

