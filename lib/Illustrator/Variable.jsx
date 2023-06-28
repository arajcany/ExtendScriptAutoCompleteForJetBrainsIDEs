/*
 * Dynamic object used to create data-driven graphics.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var Variable = {


    /**
     * The object's container.
     * @type {Object}
     * @readonly
     */
    parent: Object,


    /**
     * The class name of the object.
     * @type {string}
     * @readonly
     */
    typename: undefined,


    /**
     * The variable's type.
     * @type {VariableKind}
     */
    kind: VariableKind,


    /**
     * The name of this variable.
     * @type {string}
     */
    name: undefined,


    /**
     * All the artwork in this document.
     * @type {PageItems}
     * @readonly
     */
    pageItems: PageItems,



    /**
     * Deletes this object.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Deletes all elements.
     *
     * @return undefined
     */
    removeAll: function () {
        
    },


};

