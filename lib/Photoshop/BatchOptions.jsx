/*
 * Options to specify when running a Batch command.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var BatchOptions = {


    /**
     * If true, overrides action open commands.
     * @type {boolean}
     */
    overrideOpen: false,


    /**
     * If true, suppresses file open options dialogs.
     * @type {boolean}
     */
    suppressOpen: false,


    /**
     * If true, suppresses color profile warnings.
     * @type {boolean}
     */
    suppressProfile: false,


    /**
     * The type of destination for the processed files.
     * @type {BatchDestinationType}
     */
    destination: BatchDestinationType.NODESTINATION,


    /**
     * The folder location for the processed files. Valid only when 'destination' = folder.
     * @type {File}
     */
    destinationFolder: File,


    /**
     * If true, overrides save as action steps with the specified destination.
     * @type {boolean}
     */
    overrideSave: false,


    /**
     * A list of file naming options. Maximum: 6.
     * @type {FileNamingType}
     */
    fileNaming: FileNamingType,


    /**
     * The starting serial number to use in naming files.
     * @type {int}
     */
    startingSerial: 1,


    /**
     * If true, the final file names are Windows compatible.
     * @type {boolean}
     */
    windowsCompatible: true,


    /**
     * If true, the final file names are Macintosh compatible.
     * @type {boolean}
     */
    macintoshCompatible: true,


    /**
     * If true, the final file names are Unix compatible.
     * @type {boolean}
     */
    unixCompatible: true,


    /**
     * The file in which to log errors encountered. To display errors on the screen and stop batch processing when errors occur, leave blank.
     * @type {File}
     */
    errorFile: File,




};

