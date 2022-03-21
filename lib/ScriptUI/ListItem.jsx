/*
 * An item in a list box, drop-down list, or tree view.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\scriptui.xml
 * OMV Time: 
 * OMV Title: ScriptUI Classes
 */
var ListItem = {


    /**
     * The checked state of an item in a list.
     * @type {Boolean}
     */
    checked: Boolean,


    /**
     * The expansion state of an item of type node that is a child of a ;TreeView ;list control.
     * @type {Boolean}
     */
    expanded: Boolean,


    /**
     * The 0-based index of this item in the items collection of its parent list control.
     * @type {Number}
     * @readonly
     */
    index: Number,


    /**
     * The selection state of this item.
     * @type {Boolean}
     */
    selected: Boolean,


    /**
     * An image object for an icon to display in the item.
     * @type {ScriptUIImage}
     */
    image: ScriptUIImage,


    /**
     * The label text to display for the item, a localizable string.
     * @type {String}
     */
    text: String,


    /**
     * When the parent is a multi-column ;ListBox, this describes the labels for this selectable row in additional columns.
     * @type {Array}
     * @readonly
     */
    subItems: Array,


    /**
     * An object that contains one or more creation properties of the item (properties used only when the element is created).
     * @type {Object}
     */
    properties: Object,


    /**
     * The parent element, a list control.
     * @type {Object}
     * @readonly
     */
    parent: Object,


    /**
     * The element type.
     * @type {String}
     * @readonly
     */
    type: String,




};

