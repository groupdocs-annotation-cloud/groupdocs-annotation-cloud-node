/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2020 Aspose Pty Ltd
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

/**
 * Describes annotation properties
 */
export class AnnotationInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "id",
            baseName: "id",
            type: "number",
        },        
        {
            name: "text",
            baseName: "text",
            type: "string",
        },        
        {
            name: "textToReplace",
            baseName: "textToReplace",
            type: "string",
        },        
        {
            name: "horizontalAlignment",
            baseName: "horizontalAlignment",
            type: "AnnotationInfo.HorizontalAlignmentEnum",
        },        
        {
            name: "verticalAlignment",
            baseName: "verticalAlignment",
            type: "AnnotationInfo.VerticalAlignmentEnum",
        },        
        {
            name: "creatorId",
            baseName: "creatorId",
            type: "number",
        },        
        {
            name: "creatorName",
            baseName: "creatorName",
            type: "string",
        },        
        {
            name: "creatorEmail",
            baseName: "creatorEmail",
            type: "string",
        },        
        {
            name: "box",
            baseName: "box",
            type: "Rectangle",
        },        
        {
            name: "points",
            baseName: "points",
            type: "Array<Point>",
        },        
        {
            name: "pageNumber",
            baseName: "pageNumber",
            type: "number",
        },        
        {
            name: "annotationPosition",
            baseName: "annotationPosition",
            type: "Point",
        },        
        {
            name: "svgPath",
            baseName: "svgPath",
            type: "string",
        },        
        {
            name: "type",
            baseName: "type",
            type: "AnnotationInfo.TypeEnum",
        },        
        {
            name: "replies",
            baseName: "replies",
            type: "Array<AnnotationReplyInfo>",
        },        
        {
            name: "createdOn",
            baseName: "createdOn",
            type: "Date",
        },        
        {
            name: "fontColor",
            baseName: "fontColor",
            type: "number",
        },        
        {
            name: "penColor",
            baseName: "penColor",
            type: "number",
        },        
        {
            name: "penWidth",
            baseName: "penWidth",
            type: "number",
        },        
        {
            name: "penStyle",
            baseName: "penStyle",
            type: "AnnotationInfo.PenStyleEnum",
        },        
        {
            name: "backgroundColor",
            baseName: "backgroundColor",
            type: "number",
        },        
        {
            name: "fontFamily",
            baseName: "fontFamily",
            type: "string",
        },        
        {
            name: "fontSize",
            baseName: "fontSize",
            type: "number",
        },        
        {
            name: "opacity",
            baseName: "opacity",
            type: "number",
        },        
        {
            name: "angle",
            baseName: "angle",
            type: "number",
        },        
        {
            name: "url",
            baseName: "url",
            type: "string",
        },        
        {
            name: "imagePath",
            baseName: "imagePath",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AnnotationInfo.attributeTypeMap;
    }

    /**
     * Gets or sets the unique identifier
     */
    public id: number;
    
    /**
     * Gets or sets the annotation text
     */
    public text: string;
    
    /**
     * GGets or sets text to be replaced
     */
    public textToReplace: string;
    
    /**
     * Gets or sets text horizontal alignment
     */
    public horizontalAlignment: AnnotationInfo.HorizontalAlignmentEnum;
    
    /**
     * Gets or sets text vertical alignment
     */
    public verticalAlignment: AnnotationInfo.VerticalAlignmentEnum;
    
    /**
     * Gets or sets the creator unique identifier
     */
    public creatorId: number;
    
    /**
     * Gets or sets the name of the creator
     */
    public creatorName: string;
    
    /**
     * Gets or sets the creator's email
     */
    public creatorEmail: string;
    
    /**
     * Gets or sets the box where annotation will be placed
     */
    public box: Rectangle;
    
    /**
     * Gets or sets collection of points that describe rectangles with text
     */
    public points: Array<Point>;
    
    /**
     * Gets or sets the number of page where annotation will be placed
     */
    public pageNumber: number;
    
    /**
     * Gets or sets the annotation position
     */
    public annotationPosition: Point;
    
    /**
     * Gets or sets the annotation SVG path
     */
    public svgPath: string;
    
    /**
     * Gets or sets the annotation type
     */
    public type: AnnotationInfo.TypeEnum;
    
    /**
     * Gets or sets the array of annotation replies
     */
    public replies: Array<AnnotationReplyInfo>;
    
    /**
     * Gets or sets the annotation created on date
     */
    public createdOn: Date;
    
    /**
     * Gets or sets the annotation's font color
     */
    public fontColor: number;
    
    /**
     * Gets or sets the annotation's pen color
     */
    public penColor: number;
    
    /**
     * Gets or sets the annotation's pen width
     */
    public penWidth: number;
    
    /**
     * Gets or sets the annotation's pen style
     */
    public penStyle: AnnotationInfo.PenStyleEnum;
    
    /**
     * Gets or sets the annotation's background color 
     */
    public backgroundColor: number;
    
    /**
     * Gets or sets the annotation's font family
     */
    public fontFamily: string;
    
    /**
     * Gets or sets the annotation's font size 
     */
    public fontSize: number;
    
    /**
     * Gets or sets the annotation's opacity
     */
    public opacity: number;
    
    /**
     * Gets or sets the watermark annotation's rotation angle
     */
    public angle: number;
    
    /**
     * Gets or sets annotation link url
     */
    public url: string;
    
    /**
     * Gets or sets image file path in cloud storage, for Image annotations
     */
    public imagePath: string;
    
    public constructor(init?: Partial<AnnotationInfo>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace AnnotationInfo {
    export enum HorizontalAlignmentEnum {
        None = 'None' as any,
        Left = 'Left' as any,
        Center = 'Center' as any,
        Right = 'Right' as any,
    }
    export enum VerticalAlignmentEnum {
        None = 'None' as any,
        Top = 'Top' as any,
        Center = 'Center' as any,
        Bottom = 'Bottom' as any,
    }
    export enum TypeEnum {
        None = 'None' as any,
        Area = 'Area' as any,
        Arrow = 'Arrow' as any,
        Distance = 'Distance' as any,
        Ellipse = 'Ellipse' as any,
        Link = 'Link' as any,
        Point = 'Point' as any,
        Polyline = 'Polyline' as any,
        ResourcesRedaction = 'ResourcesRedaction' as any,
        TextField = 'TextField' as any,
        TextHighlight = 'TextHighlight' as any,
        TextRedaction = 'TextRedaction' as any,
        TextReplacement = 'TextReplacement' as any,
        TextStrikeout = 'TextStrikeout' as any,
        TextUnderline = 'TextUnderline' as any,
        Watermark = 'Watermark' as any,
        Image = 'Image' as any,
    }
    export enum PenStyleEnum {
        Solid = 'Solid' as any,
        Dash = 'Dash' as any,
        DashDot = 'DashDot' as any,
        Dot = 'Dot' as any,
        LongDash = 'LongDash' as any,
        DashDotDot = 'DashDotDot' as any,
    }
}
// tslint:enable:quotemark
/**
 * Describes annotation reply properties
 */
export class AnnotationReplyInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "id",
            baseName: "id",
            type: "number",
        },        
        {
            name: "userId",
            baseName: "userId",
            type: "number",
        },        
        {
            name: "userName",
            baseName: "userName",
            type: "string",
        },        
        {
            name: "userEmail",
            baseName: "userEmail",
            type: "string",
        },        
        {
            name: "comment",
            baseName: "comment",
            type: "string",
        },        
        {
            name: "repliedOn",
            baseName: "repliedOn",
            type: "Date",
        },        
        {
            name: "parentReplyId",
            baseName: "parentReplyId",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AnnotationReplyInfo.attributeTypeMap;
    }

    /**
     * Gets or sets the unique identifier
     */
    public id: number;
    
    /**
     * Gets or sets the user's unique identifier
     */
    public userId: number;
    
    /**
     * Gets or sets the user's name
     */
    public userName: string;
    
    /**
     * Gets or sets the user email
     */
    public userEmail: string;
    
    /**
     * Gets or sets the message
     */
    public comment: string;
    
    /**
     * Gets or sets the reply time
     */
    public repliedOn: Date;
    
    /**
     * Gets or sets the parent reply unique identifier
     */
    public parentReplyId: number;
    
    public constructor(init?: Partial<AnnotationReplyInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Class for disc space information.
 */
export class DiscUsage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "usedSize",
            baseName: "usedSize",
            type: "number",
        },        
        {
            name: "totalSize",
            baseName: "totalSize",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DiscUsage.attributeTypeMap;
    }

    /**
     * Application used disc space.
     */
    public usedSize: number;
    
    /**
     * Total disc space.
     */
    public totalSize: number;
    
    public constructor(init?: Partial<DiscUsage>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes document basic info
 */
export class DocumentInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "path",
            baseName: "path",
            type: "string",
        },        
        {
            name: "extension",
            baseName: "extension",
            type: "string",
        },        
        {
            name: "fileFormat",
            baseName: "fileFormat",
            type: "string",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "dateModified",
            baseName: "dateModified",
            type: "Date",
        },        
        {
            name: "pages",
            baseName: "pages",
            type: "Array<PageInfo>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DocumentInfo.attributeTypeMap;
    }

    /**
     * Gets or sets the document name
     */
    public name: string;
    
    /**
     * Gets or sets the document path
     */
    public path: string;
    
    /**
     * Gets or sets the document extension
     */
    public extension: string;
    
    /**
     * Gets or sets the file format
     */
    public fileFormat: string;
    
    /**
     * Gets or sets the document size
     */
    public size: number;
    
    /**
     * Gets or sets the document date modified
     */
    public dateModified: Date;
    
    /**
     * Gets or sets the pages
     */
    public pages: Array<PageInfo>;
    
    public constructor(init?: Partial<DocumentInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The error details
 */
export class ErrorDetails {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "requestId",
            baseName: "requestId",
            type: "string",
        },        
        {
            name: "date",
            baseName: "date",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ErrorDetails.attributeTypeMap;
    }

    /**
     * The request id
     */
    public requestId: string;
    
    /**
     * Date
     */
    public date: Date;
    
    public constructor(init?: Partial<ErrorDetails>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File versions FileVersion.
 */
export class FileVersions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<FileVersion>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileVersions.attributeTypeMap;
    }

    /**
     * File versions FileVersion.
     */
    public value: Array<FileVersion>;
    
    public constructor(init?: Partial<FileVersions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Files list
 */
export class FilesList {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<StorageFile>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesList.attributeTypeMap;
    }

    /**
     * Files and folders contained by folder StorageFile.
     */
    public value: Array<StorageFile>;
    
    public constructor(init?: Partial<FilesList>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File upload result
 */
export class FilesUploadResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "uploaded",
            baseName: "uploaded",
            type: "Array<string>",
        },        
        {
            name: "errors",
            baseName: "errors",
            type: "Array<Error>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesUploadResult.attributeTypeMap;
    }

    /**
     * List of uploaded file names
     */
    public uploaded: Array<string>;
    
    /**
     * List of errors.
     */
    public errors: Array<Error>;
    
    public constructor(init?: Partial<FilesUploadResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File format
 */
export class Format {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "extension",
            baseName: "extension",
            type: "string",
        },        
        {
            name: "fileFormat",
            baseName: "fileFormat",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Format.attributeTypeMap;
    }

    /**
     * File format extension
     */
    public extension: string;
    
    /**
     * File format name
     */
    public fileFormat: string;
    
    public constructor(init?: Partial<Format>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes object which contains list of supported file formats
 */
export class FormatsResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "formats",
            baseName: "formats",
            type: "Array<Format>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FormatsResult.attributeTypeMap;
    }

    /**
     * Supported file formats
     */
    public formats: Array<Format>;
    
    public constructor(init?: Partial<FormatsResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Provides information for the object link This is supposed to be an atom:link, therefore it should have all attributes specified here http://tools.ietf.org/html/rfc4287#section-4.2.7
 */
export class Link {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "href",
            baseName: "href",
            type: "string",
        },        
        {
            name: "rel",
            baseName: "rel",
            type: "string",
        },        
        {
            name: "type",
            baseName: "type",
            type: "string",
        },        
        {
            name: "title",
            baseName: "title",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Link.attributeTypeMap;
    }

    /**
     * The \"href\" attribute contains the link's IRI. atom:link elements MUST have an href attribute, whose value MUST be a IRI reference
     */
    public href: string;
    
    /**
     * atom:link elements MAY have a \"rel\" attribute that indicates the link relation type. If the \"rel\" attribute is not present, the link element MUST be interpreted as if the link relation type is \"alternate\"
     */
    public rel: string;
    
    /**
     * On the link element, the \"type\" attribute's value is an advisory media type: it is a hint about the type of the representation that is expected to be returned when the value of the href attribute is dereferenced. Note that the type attribute does not override the actual media type returned with the representation
     */
    public type: string;
    
    /**
     * The \"title\" attribute conveys human-readable information about the link. The content of the \"title\" attribute is Language-Sensitive
     */
    public title: string;
    
    public constructor(init?: Partial<Link>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Reference to document
 */
export class LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "AnnotationApiLink",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return LinkElement.attributeTypeMap;
    }

    /**
     * Link to the document
     */
    public link: AnnotationApiLink;
    
    public constructor(init?: Partial<LinkElement>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Error
 */
export class ModelError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "code",
            baseName: "code",
            type: "string",
        },        
        {
            name: "message",
            baseName: "message",
            type: "string",
        },        
        {
            name: "description",
            baseName: "description",
            type: "string",
        },        
        {
            name: "innerError",
            baseName: "innerError",
            type: "ErrorDetails",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }

    /**
     * Code             
     */
    public code: string;
    
    /**
     * Message             
     */
    public message: string;
    
    /**
     * Description             
     */
    public description: string;
    
    /**
     * Inner Error             
     */
    public innerError: ErrorDetails;
    
    public constructor(init?: Partial<ModelError>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Object exists
 */
export class ObjectExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        },        
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ObjectExist.attributeTypeMap;
    }

    /**
     * Indicates that the file or folder exists.
     */
    public exists: boolean;
    
    /**
     * True if it is a folder, false if it is a file.
     */
    public isFolder: boolean;
    
    public constructor(init?: Partial<ObjectExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents collection of document pages image representations
 */
export class PageImages {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "totalCount",
            baseName: "totalCount",
            type: "number",
        },        
        {
            name: "entries",
            baseName: "entries",
            type: "Array<PageImage>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageImages.attributeTypeMap;
    }

    /**
     * The total count of page image entries in collection
     */
    public totalCount: number;
    
    /**
     * The collection of pages image representations
     */
    public entries: Array<PageImage>;
    
    public constructor(init?: Partial<PageImages>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes page information
 */
export class PageInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "number",
            baseName: "number",
            type: "number",
        },        
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageInfo.attributeTypeMap;
    }

    /**
     * Gets or sets the page number
     */
    public number: number;
    
    /**
     * Gets or sets the page width
     */
    public width: number;
    
    /**
     * Gets or sets the page height
     */
    public height: number;
    
    public constructor(init?: Partial<PageInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes point where annotation will be placed
 */
export class Point {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "x",
            baseName: "x",
            type: "number",
        },        
        {
            name: "y",
            baseName: "y",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Point.attributeTypeMap;
    }

    /**
     * Gets or sets the x coordinate
     */
    public x: number;
    
    /**
     * Gets or sets the y coordinate
     */
    public y: number;
    
    public constructor(init?: Partial<Point>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes rectangle where annotation will be placed
 */
export class Rectangle {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "x",
            baseName: "x",
            type: "number",
        },        
        {
            name: "y",
            baseName: "y",
            type: "number",
        },        
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Rectangle.attributeTypeMap;
    }

    /**
     * Gets or sets the x coordinate of the rectangle upper left corner
     */
    public x: number;
    
    /**
     * Gets or sets the y coordinate of the rectangle upper left corner
     */
    public y: number;
    
    /**
     * Gets or sets the rectangle width
     */
    public width: number;
    
    /**
     * Gets or sets the rectangle height
     */
    public height: number;
    
    public constructor(init?: Partial<Rectangle>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Storage exists
 */
export class StorageExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageExist.attributeTypeMap;
    }

    /**
     * Shows that the storage exists.             
     */
    public exists: boolean;
    
    public constructor(init?: Partial<StorageExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File or folder information
 */
export class StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        },        
        {
            name: "modifiedDate",
            baseName: "modifiedDate",
            type: "Date",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "path",
            baseName: "path",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFile.attributeTypeMap;
    }

    /**
     * File or folder name.
     */
    public name: string;
    
    /**
     * True if it is a folder.
     */
    public isFolder: boolean;
    
    /**
     * File or folder last modified DateTime.
     */
    public modifiedDate: Date;
    
    /**
     * File or folder size.
     */
    public size: number;
    
    /**
     * File or folder path.
     */
    public path: string;
    
    public constructor(init?: Partial<StorageFile>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Provides information for the words api resource link
 */
export class AnnotationApiLink extends Link {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AnnotationApiLink.attributeTypeMap);
    }

    public constructor(init?: Partial<AnnotationApiLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * File Version
 */
export class FileVersion extends StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "versionId",
            baseName: "versionId",
            type: "string",
        },        
        {
            name: "isLatest",
            baseName: "isLatest",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FileVersion.attributeTypeMap);
    }

    /**
     * File Version ID.
     */
    public versionId: string;
    
    /**
     * Specifies whether the file is (true) or is not (false) the latest version of an file.
     */
    public isLatest: boolean;
    
    public constructor(init?: Partial<FileVersion>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * The document page image representation
 */
export class PageImage extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "number",
            baseName: "number",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PageImage.attributeTypeMap);
    }

    /**
     * Gets or sets the page number
     */
    public number: number;
    
    public constructor(init?: Partial<PageImage>) {
        super(init);
        Object.assign(this, init);
    }        
}

const enumsMap = {
    "AnnotationInfo.HorizontalAlignmentEnum": AnnotationInfo.HorizontalAlignmentEnum,
    "AnnotationInfo.VerticalAlignmentEnum": AnnotationInfo.VerticalAlignmentEnum,
    "AnnotationInfo.TypeEnum": AnnotationInfo.TypeEnum,
    "AnnotationInfo.PenStyleEnum": AnnotationInfo.PenStyleEnum,
};

const typeMap = {
            AnnotationInfo,
            AnnotationReplyInfo,
            DiscUsage,
            DocumentInfo,
            ErrorDetails,
            FileVersions,
            FilesList,
            FilesUploadResult,
            Format,
            FormatsResult,
            Link,
            LinkElement,
            ModelError,
            ObjectExist,
            PageImages,
            PageInfo,
            Point,
            Rectangle,
            StorageExist,
            StorageFile,
            AnnotationApiLink,
            FileVersion,
            PageImage,
};

export {enumsMap, typeMap};

/**
 * Request model for DeleteAnnotations operation.
 */
export class DeleteAnnotationsRequest {
    /**
     * Document path in storage
     */
    public filePath: string;
    
    public constructor(filePath: string) {        
        this.filePath = filePath;
    }
}

/**
 * Request model for GetExport operation.
 */
export class GetExportRequest {
    /**
     * Document path in storage
     */
    public filePath: string;

    /**
     * Annotation types that will be exported. All annotation types will be exported if not specified
     */
    public annotationTypes: string;

    /**
     * Indicates whether to export only annotated pages
     */
    public annotatedPages: boolean;

    /**
     * Determines number of first exported page
     */
    public firstPage: number;

    /**
     * Determines number of last exported page
     */
    public lastPage: number;

    /**
     * Source document password
     */
    public password: string;
    
    public constructor(filePath: string, annotationTypes?: string, annotatedPages?: boolean, firstPage?: number, lastPage?: number, password?: string) {        
        this.filePath = filePath;
        this.annotationTypes = annotationTypes;
        this.annotatedPages = annotatedPages;
        this.firstPage = firstPage;
        this.lastPage = lastPage;
        this.password = password;
    }
}

/**
 * Request model for GetImport operation.
 */
export class GetImportRequest {
    /**
     * Document path in storage
     */
    public filePath: string;
    
    public constructor(filePath: string) {        
        this.filePath = filePath;
    }
}

/**
 * Request model for PostAnnotations operation.
 */
export class PostAnnotationsRequest {
    /**
     * Document path in storage
     */
    public filePath: string;

    /**
     * Array of annotation descriptions
     */
    public annotations: Array<AnnotationInfo>;
    
    public constructor(filePath: string, annotations: Array<AnnotationInfo>) {        
        this.filePath = filePath;
        this.annotations = annotations;
    }
}

/**
 * Request model for CopyFile operation.
 */
export class CopyFileRequest {
    /**
     * Source file path e.g. '/folder/file.ext'
     */
    public srcPath: string;

    /**
     * Destination file path
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to copy
     */
    public versionId: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string, versionId?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for DeleteFile operation.
 */
export class DeleteFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to delete
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for DownloadFile operation.
 */
export class DownloadFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to download
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for MoveFile operation.
 */
export class MoveFileRequest {
    /**
     * Source file path e.g. '/src.ext'
     */
    public srcPath: string;

    /**
     * Destination file path e.g. '/dest.ext'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to move
     */
    public versionId: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string, versionId?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for UploadFile operation.
 */
export class UploadFileRequest {
    /**
     * Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.             
     */
    public path: string;

    /**
     * File to upload
     */
    public file: Buffer;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, file: Buffer, storageName?: string) {        
        this.path = path;
        this.file = file;
        this.storageName = storageName;
    }
}

/**
 * Request model for CopyFolder operation.
 */
export class CopyFolderRequest {
    /**
     * Source folder path e.g. '/src'
     */
    public srcPath: string;

    /**
     * Destination folder path e.g. '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for CreateFolder operation.
 */
export class CreateFolderRequest {
    /**
     * Folder path to create e.g. 'folder_1/folder_2/'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for DeleteFolder operation.
 */
export class DeleteFolderRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Enable to delete folders, subfolders and files
     */
    public recursive: boolean;
    
    public constructor(path: string, storageName?: string, recursive?: boolean) {        
        this.path = path;
        this.storageName = storageName;
        this.recursive = recursive;
    }
}

/**
 * Request model for GetFilesList operation.
 */
export class GetFilesListRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for MoveFolder operation.
 */
export class MoveFolderRequest {
    /**
     * Folder path to move e.g. '/folder'
     */
    public srcPath: string;

    /**
     * Destination folder path to move to e.g '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for GetInfo operation.
 */
export class GetInfoRequest {
    /**
     * Document path in storage
     */
    public filePath: string;

    /**
     * Source document password
     */
    public password: string;
    
    public constructor(filePath: string, password?: string) {        
        this.filePath = filePath;
        this.password = password;
    }
}

/**
 * Request model for DeletePages operation.
 */
export class DeletePagesRequest {
    /**
     * Document path in storage
     */
    public filePath: string;
    
    public constructor(filePath: string) {        
        this.filePath = filePath;
    }
}

/**
 * Request model for GetPages operation.
 */
export class GetPagesRequest {
    /**
     * Document path in storage
     */
    public filePath: string;

    /**
     * The list of page numbers to convert
     */
    public pageNumbersToConvert: Array<number>;

    /**
     * Preview format: \"PNG\" (default), \"JPEG\", or \"BMP\"
     */
    public format: string;

    /**
     * Preview image width
     */
    public width: number;

    /**
     * Preview image height
     */
    public height: number;

    /**
     * If true returns specific pages without annotations
     */
    public withoutAnnotations: boolean;

    /**
     * Render comments (false by default)
     */
    public renderComments: boolean;

    /**
     * Source document opening password
     */
    public password: string;
    
    public constructor(filePath: string, pageNumbersToConvert?: Array<number>, format?: string, width?: number, height?: number, withoutAnnotations?: boolean, renderComments?: boolean, password?: string) {        
        this.filePath = filePath;
        this.pageNumbersToConvert = pageNumbersToConvert;
        this.format = format;
        this.width = width;
        this.height = height;
        this.withoutAnnotations = withoutAnnotations;
        this.renderComments = renderComments;
        this.password = password;
    }
}

/**
 * Request model for GetDiscUsage operation.
 */
export class GetDiscUsageRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(storageName?: string) {        
        this.storageName = storageName;
    }
}

/**
 * Request model for GetFileVersions operation.
 */
export class GetFileVersionsRequest {
    /**
     * File path e.g. '/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for ObjectExists operation.
 */
export class ObjectExistsRequest {
    /**
     * File or folder path e.g. '/file.ext' or '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for StorageExists operation.
 */
export class StorageExistsRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(storageName: string) {        
        this.storageName = storageName;
    }
}
