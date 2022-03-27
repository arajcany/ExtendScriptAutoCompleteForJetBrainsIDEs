/*
 * Provides programmatic control and customization of the Filter Panel, which allows the user to organize and filter the display of thumbnails in the Content pane.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Adobe Bridge 2022\omv.xml
 * OMV Time: 
 * OMV Title: Adobe Bridge 2022 Object Model
 */
var FilterDescription = {


    /**
     * The unique identifying name of the filter.
     * @type {String}
     */
    name: String,


    /**
     * A localized name for this filter, shown in the heading line for this filter in the Filter pane.
     * @type {String}
     */
    displayName: String,


    /**
     * The namespace of the XMP property used as a filter.
     * @type {String}
     */
    xmpNamespace: String,


    /**
     * The key name of the XMP property used as a filter.
     * @type {String}
     */
    xmpProperty: String,


    /**
     * The name of the node property to use as a filter, as defined in the InfosetMemberDescription object.
     * @type {String}
     */
    infosetMember: String,


    /**
     * When true, only one of the filter values can be set at a time.
     * @type {Boolean}
     */
    isExclusive: Boolean,


    /**
     * The set of allowed values for the XMP property, if it has a closed value list.
     * @type {Array}
     */
    closedValueList: Array,


    /**
     * The data type of filter-property value, used in sorting the list of values.
     * @type {String}
     */
    filterType: String,




};

