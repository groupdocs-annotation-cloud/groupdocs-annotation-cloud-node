![](https://img.shields.io/badge/api-v2.0-lightgrey) ![npm](https://img.shields.io/npm/v/groupdocs-annotation-cloud) ![npm bundle size](https://img.shields.io/bundlephobia/min/groupdocs-annotation-cloud) ![node-current](https://img.shields.io/node/v/groupdocs-annotation-cloud) ![npm type definitions](https://img.shields.io/npm/types/groupdocs-annotation-cloud) ![npm](https://img.shields.io/npm/dt/groupdocs-annotation-cloud) [![GitHub license](https://img.shields.io/github/license/groupdocs-annotation-cloud/groupdocs-annotation-cloud-node)](https://github.com/groupdocs-annotation-cloud/groupdocs-annotation-cloud-node/blob/master/LICENSE) 

# Node.js SDK for Document Annotation

[GroupDocs.Annotation Cloud SDK for Node.js](https://products.groupdocs.cloud/annotation/nodejs) wraps GroupDocs.Annotation RESTful APIs so you may integrate Document Annotation features in your own apps with zero initial cost.

The solution helps in applying annotations, sticky notes, watermark overlays, redactions, text replacements and markups to documents, presentations, emails, spreadsheets, PDF, images, and other file formats.

## Annotate Documents & Images in the Cloud

- Import document annotations.
- Add or remove annotations.
- Export annotated document back to its original format.
- Preview document pages as images.
- Fetch document information, such as, page count & file size.

Check out the [Developer's Guide](https://docs.groupdocs.cloud/annotation/developer-guide/) to know more about GroupDocs.Annotation REST API.

## Microsoft Office Formats

**Microsoft Word:** DOC, DOCM, DOCX, DOT, DOTM, DOTX, RTF\
**Microsoft Excel:** XLS, XLSX\
**Microsoft PowerPoint:** PPT, PPTX, PPSX\
**Microsoft Visio:** VSSX, VSS, VSSM, VDX, VSD, VSDX, VSDM, VSTM, VSX, VTX\
**Microsoft Outlook:** EML, EMLX, MSG

## Other Document Formats

**Portable:** PDF\
**OpenDocument:** ODT, OTT, ODP, OTP\
**Images:** BMP, PNG, JPG, JPEG, TIFF, TIF, GIF\
**Web:** MHTML\
**Others:** TXT

## Get Started with GroupDocs.Annotation Cloud SDK for Ruby

First create an account at [GroupDocs for Cloud](https://dashboard.groupdocs.cloud/) and get your application information. Next, follow the installation steps to get started.

## Installation

GroupDocs.Annotation Cloud SDK for Node.js is available at [npmjs.com](https://www.npmjs.com/package/groupdocs-annotation-cloud). You can install it as follows.

```shell
npm install groupdocs-annotation-cloud
```

## Get All Supported Formats for Annotation

```js
// load the module
var GroupDocs = require('groupdocs-annotation-cloud');

// get your appSid and appKey at https://dashboard.groupdocs.cloud (free registration is required).
var appSid = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
var appKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

// construct AnnotationApi
var infoApi = GroupDocs.InfoApi.fromKeys(appSid, appKey);

// retrieve supported file-formats
infoApi.getSupportedFileFormats()
    .then(function (response) {
        console.log("Supported file-formats:")
        response.formats.forEach(function (format) {
            console.log(format.fileFormat + " (" + format.extension + ")");
        });
    })
    .catch(function (error) {
        console.log("Error: " + error.message)
    });
```

Or compile and run the same written in TypeScript:

```ts
// load the module
import { InfoApi } from "groupdocs-annotation-cloud";

// get your appSid and appKey at https://dashboard.groupdocs.cloud (free registration is required).
const appSid: string = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const appKey: string = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

// construct AnnotationApi
const infoApi: InfoApi = InfoApi.fromKeys(appSid, appKey);

// retrieve supported file-formats
infoApi.getSupportedFileFormats()
    .then((result) => {
        console.log("Supported file-formats:");
        result.formats.forEach((format) => {
            console.log(format.fileFormat + " (" + format.extension + ")");
        });
    })
    .catch((error) => {
        console.log("Error: " + error.message);
    });
```

## GroupDocs.Annotation Cloud SDKs in Popular Languages

| .NET | Java | PHP | Python | Ruby | Node.js |
|---|---|---|---|---|---|
| [GitHub](https://github.com/groupdocs-annotation-cloud/groupdocs-annotation-cloud-dotnet) | [GitHub](https://github.com/groupdocs-annotation-cloud/groupdocs-annotation-cloud-java) | [GitHub](https://github.com/groupdocs-annotation-cloud/groupdocs-annotation-cloud-php) | [GitHub](https://github.com/groupdocs-annotation-cloud/groupdocs-annotation-cloud-python) | [GitHub](https://github.com/groupdocs-annotation-cloud/groupdocs-annotation-cloud-ruby)  | [GitHub](https://github.com/groupdocs-annotation-cloud/groupdocs-annotation-cloud-node) |
| [NuGet](https://www.nuget.org/packages/GroupDocs.Annotation-Cloud/) | [Maven](https://repository.groupdocs.cloud/webapp/#/artifacts/browse/tree/General/repo/com/groupdocs/groupdocs-annotation-cloud) | [Composer](https://packagist.org/packages/groupdocscloud/groupdocs-annotation-cloud) | [PIP](https://pypi.org/project/groupdocs-annotation-cloud/) | [GEM](https://rubygems.org/gems/groupdocs_annotation_cloud)  | [NPM](https://www.npmjs.com/package/groupdocs-annotation-cloud) | 

[Home](https://www.groupdocs.cloud/) | [Product Page](https://products.groupdocs.cloud/annotation/nodejs) | [Documentation](https://docs.groupdocs.cloud/annotation/) | [Live Demo](https://products.groupdocs.app/annotation/total) | [API Reference](https://apireference.groupdocs.cloud/annotation/) | [Code Samples](https://github.com/groupdocs-annotation-cloud/groupdocs-annotation-cloud-node-samples) | [Blog](https://blog.groupdocs.cloud/category/annotation/) | [Free Support](https://forum.groupdocs.cloud/c/annotation) | [Free Trial](https://dashboard.groupdocs.cloud)

