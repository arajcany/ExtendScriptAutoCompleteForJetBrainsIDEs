/*
 * Allows you to access the Extensible Metadata Platform (XMP) metadata associated with the file node of a Thumbnail object.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Adobe Bridge 2022\omv.xml
 * OMV Time: 
 * OMV Title: Adobe Bridge 2022 Object Model
 */
var Metadata = {


    /**
     * The current XMP namespace, used to search for XMP properties.
     * @type {String}
     */
    namespace: String,



    /**
     * Adds metadata properties to this object that were saved to an XMP template from the FileInfo dialog.
     *
     * @param {String} [templateName] The name of the XMP template.
     * @param {String} [modType] The modification type.
     * @return undefined
     */
    applyMetadataTemplate: function (templateName, modType) {
        
    },


    /**
     * Retrieves and returns the string value of a metadata property in the specified namespace.
     *
     * @param {String} [namespace] The XMP namespace.
     * @param {String} [property] The property name.
     * @return String
     */
    read: function (namespace, property) {
        
    },


    /**
     * Serializes the XMP packet into a string.
     *
     * @return String
     */
    serialize: function () {
        
    },


};

