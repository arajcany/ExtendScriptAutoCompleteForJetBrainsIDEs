/*
 * Wraps XML into an object.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\javascript.xml
 * OMV Time: 
 * OMV Title: Core JavaScript Classes
 */
var XML = {


    /**
     * Controls whether XML comments should be parsed (false) or ignored (true).
     * @type {boolean}
     */
    ignoreComments: true,


    /**
     * Controls whether XML preprocessing instructions should be parsed (false) or ignored (true).
     * @type {boolean}
     */
    ignoreProcessingInstructions: true,


    /**
     * Controls whether whitespace should be parsed (false) or ignored (true).
     * @type {boolean}
     */
    ignoreWhitespace: true,


    /**
     * When true, XML is pretty-printed when converting to a string.
     * @type {boolean}
     */
    prettyPrinting: true,


    /**
     * The number of spaces used to indent pretty-printed XML.
     * @type {number}
     */
    prettyIndent: 2,



    /**
     * Returns an object containing the current parsing and print settings for XML.
     *
     * @return Object
     */
    settings: function () {
        
    },


    /**
     * Sets the parsing and print setting for XML using an object returned by the settings() method.
     *
     * @param {Object} [obj] The object containing the settings to set.
     * @return undefined
     */
    setSettings: function (obj) {
        
    },


    /**
     * Returns an object containing the default parsing and print settings for XML.
     *
     * @return Object
     */
    defaultSettings: function () {
        
    },


    /**
     * Adds a namespace declaration to the node. Returns the XML object itself.
     *
     * @param {Namespace} [namespace] The namespace to add.
     * @return XML
     */
    addNamespace: function (namespace) {
        
    },


    /**
     * Appends the given XML to this XML as a child. Returns the XML object itself.
     *
     * @param {XML} [child] The child XML to add.
     * @return XML
     */
    appendChild: function (child) {
        
    },


    /**
     * Returns a list containing all attribute elements matching the given name.
     *
     * @param {string} [name] The attribute name to look for.
     * @return XML
     */
    attribute: function (name) {
        
    },


    /**
     * Returns a list containing all attribute elements.
     *
     * @return XML
     */
    attributes: function () {
        
    },


    /**
     * Returns a list containing all children of this XML matching the given element name.
     *
     * @param {string} [name] The name or the index of the child element.
     * @return XML
     */
    child: function (name) {
        
    },


    /**
     * Returns a number representing the ordinal position of this XML object within the context of its parent.
     *
     * @return number
     */
    childIndex: function () {
        
    },


    /**
     * Returns an XML object containing all the properties of this XML object in order.
     *
     * @return XML
     */
    children: function () {
        
    },


    /**
     * Returns an XML object containing the properties of this XML object that represent XML comments.
     *
     * @return XML
     */
    comments: function () {
        
    },


    /**
     * Checks if this XML object contains the given XML object.
     *
     * @param {XML} [xml] The XML to search for.
     * @return boolean
     */
    contains: function (xml) {
        
    },


    /**
     * Creates a copy of this XML object.
     *
     * @return XML
     */
    copy: function () {
        
    },


    /**
     * Returns all the XML-valued descendants of this XML object with the given name.
     *
     * @param {string} [name] The name of the descendant to find.
     * @return XML
     */
    descendants: function (name) {
        
    },


    /**
     * Returns a list of XML children that are elements with a given name, or all children that are XML elements.
     *
     * @param {string} [name] The element name. If not supplied, gets all children that are XML elements.
     * @return XML
     */
    elements: function (name) {
        
    },


    /**
     * Reports whether this XML object contains complex content.
     *
     * @return boolean
     */
    hasComplexContent: function () {
        
    },


    /**
     * Reports whether this XML object contains simple content.
     *
     * @return boolean
     */
    hasSimpleContent: function () {
        
    },


    /**
     * Returns an array of Namespace objects mirroring the current list of valid namespaces at this element.
     *
     * @return Array
     */
    inScopeNamespaces: function () {
        
    },


    /**
     * Inserts the given child2 after the given child1 in this XML object and returns this XML object.
     *
     * @param {XML} [child1] The child to insert the other child after.
     * @param {XML} [child2] The XML to insert.
     * @return undefined
     */
    insertChildAfter: function (child1, child2) {
        
    },


    /**
     * Inserts the given child2 before the given child1 in this XML object and returns this XML object.
     *
     * @param {XML} [child1] The child to search for.
     * @param {XML} [child2] The XML to insert.
     * @return undefined
     */
    insertChildBefore: function (child1, child2) {
        
    },


    /**
     * Returns the number of elements contained in an XML list. If this XML object is not a list, returns 1.
     *
     * @return number
     */
    length: function () {
        
    },


    /**
     * Returns the local name of this XML object.
     *
     * @return string
     */
    localName: function () {
        
    },


    /**
     * Returns a QName object containing the URI and the local name of the element.
     *
     * @return QName
     */
    name: function () {
        
    },


    /**
     * Returns a Namespace object containing the namespace URI of the current element.
     *
     * @return Namespace
     */
    namespace: function () {
        
    },


    /**
     * Returns an array containing all namespace declarations of this XML object.
     *
     * @return Array
     */
    namespaceDeclarations: function () {
        
    },


    /**
     * Returns the type of this XML object as one of the strings "element", "attribute", "comment", "processing-instruction", or "text".
     *
     * @return string
     */
    nodeKind: function () {
        
    },


    /**
     * Puts all text nodes in this and all descendant XML objects into a normal form by merging adjacent text nodes and eliminating empty text nodes. Returns this XML object.
     *
     * @return XML
     */
    normalize: function () {
        
    },


    /**
     * Returns the parent object of this XML object.
     *
     * @return XML
     */
    parent: function () {
        
    },


    /**
     * Returns a list of preprocessing instructions.
     *
     * @param {string} [name] The name of the preprocessing instruction to return.
     * @return XML
     */
    processingInstructions: function (name) {
        
    },


    /**
     * Inserts a given child into this object before its existing XML properties, and returns this XML object.
     *
     * @param {XML} [child] The XML to insert.
     * @return XML
     */
    prependChild: function (child) {
        
    },


    /**
     * Removes the given namespace from this XML, and returns this XML.
     *
     * @param {Namespace} [namespace] The namespace to remove.
     * @return XML
     */
    removeNamespace: function (namespace) {
        
    },


    /**
     * Replaces the value of specified XML properties of this XML object returns this XML object.
     *
     * @param {string} [name] The property name.
     * @param {XML} [value] The XML with which to replace the value of the matching property.
     * @return XML
     */
    replace: function (name, value) {
        
    },


    /**
     * Replaces all of the XML-valued properties in this object with a new value, and returns this XML object.
     *
     * @param {XML} [value] The new value, which can be a single XML object or an XML list.
     * @return XML
     */
    setChildren: function (value) {
        
    },


    /**
     * Replaces the local name of this XML object  with a string constructed from the given name
     *
     * @param {string} [name] The name to set.
     * @return undefined
     */
    setLocalName: function (name) {
        
    },


    /**
     * Replaces the name of this XML object with the given QName object.
     *
     * @param {QName} [name] The fully qualified name.
     * @return undefined
     */
    setName: function (name) {
        
    },


    /**
     * Sets the namespace for this XML element.
     *
     * @param {Namespace} [namespace] The namespace to set.
     * @return undefined
     */
    setNamespace: function (namespace) {
        
    },


    /**
     * Returns an XML list containing all XML properties of this XML object that represent XML text nodes.
     *
     * @return XML
     */
    text: function () {
        
    },


    /**
     * Returns the string representation of this object.
     *
     * @return string
     */
    toString: function () {
        
    },


    /**
     * Returns an XML-encoded string representation of this XML object.
     *
     * @return string
     */
    toXMLString: function () {
        
    },


    /**
     * Evaluates the given XPath expression in accordance with the W3C XPath recommendation, using this XML object as the context node.
     *
     * @param {string} [expr] The XPath expression to use.
     * @return XML
     */
    xpath: function (expr) {
        
    },


};

