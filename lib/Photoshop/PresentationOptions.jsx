/*
 * Options for the PDF presentation command.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var PresentationOptions = {


    /**
     * If true, the file type is presentation. If false, the file type is Multi-Page document.
     * @type {boolean}
     */
    presentation: false,


    /**
     * If true, the presentation auto advances.
     * @type {boolean}
     */
    autoAdvance: true,


    /**
     * The amount of time (in seconds) before auto advancing the view. Valid only when 'auto advance' is true. Range: 1 to 60.
     * @type {int}
     */
    interval: 5,


    /**
     * If true, the presentation loops after the last page.
     * @type {boolean}
     */
    loop: false,


    /**
     * The image transition type.
     * @type {TransitionType}
     */
    transition: TransitionType.NONE,


    /**
     * The magnification type when viewing the image.
     * @type {MagnificationType}
     */
    magnification: MagnificationType.ACTUALSIZE,


    /**
     * If true, includes the file name for the image.
     * @type {boolean}
     */
    includeFilename: false,


    /**
     * Options for creating the PDF file.
     * @type {PDFSaveOptions}
     */
    PDFFileOptions: PDFSaveOptions,




};

