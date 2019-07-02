/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2019 Aspose Pty Ltd
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

import { expect } from "chai";
import "mocha";
import * as TestContext from "../test_context";
import { TestFile } from "../test_file";
import * as Model from "../../src/model";
import { GetPdfRequest, PostAnnotationsRequest, GetImportRequest, GetExportRequest, DeleteAnnotationsRequest } from "../../src/annotation_api";

describe("annotate_api_many_pages", () => {
    
    before(async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0"
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    it("test_get_pdf", async () => {            
        const annotateApi = TestContext.getAnnotateApi();
        const testFiles = TestFile.GetTestFilesManyPages();
        for(let i=0; i<testFiles.length; i++) {
            let file = testFiles[i];
            const response = await annotateApi.getPdf(new GetPdfRequest(file.GetPath()));
            expect(response.length).greaterThan(0);            
        }
    });    

    it("test_annotate", async () => {            
        const annotateApi = TestContext.getAnnotateApi();
        const testFiles = TestFile.GetTestFilesManyPages();
        for(let i=0; i<testFiles.length; i++) {
            let file = testFiles[i];

            // Post annotation
            await annotateApi.postAnnotations(new PostAnnotationsRequest(file.GetPath(), get_annotations()));
            
            // Import annotations
            const responseImport = await annotateApi.getImport(new GetImportRequest(file.GetPath()));
            expect(responseImport.length).greaterThan(0);

            // Export annotations
            const responseExport = await annotateApi.getExport(new GetExportRequest(file.GetPath(), undefined, undefined, undefined, undefined, file.password));
            expect(responseExport.length).greaterThan(0);

            // Delete annotations
            await annotateApi.deleteAnnotations(new DeleteAnnotationsRequest(file.GetPath()));
        }
    });

    function get_annotations() {
        let a1 = new Model.AnnotationInfo();
        a1.annotationPosition = new Model.Point();
        a1.annotationPosition.x = 852;
        a1.annotationPosition.y = 59.388262910798119;
        a1.box = new Model.Rectangle();
        a1.box.x = 375.89276123046875;
        a1.box.y = 59.388263702392578;
        a1.box.width = 88.7330551147461;
        a1.box.height = 37.7290153503418;
        a1.pageNumber = 0;
        a1.penColor = 1201033;
        a1.penStyle = 0;
        a1.penWidth = 1;
        a1.type = Model.AnnotationInfo.TypeEnum.Distance;
        a1.creatorName = "Anonym A."

        let a2 = new Model.AnnotationInfo();
        a2.annotationPosition = new Model.Point();
        a2.annotationPosition.x = 852;
        a2.annotationPosition.y = 59.388262910798119;
        a2.box = new Model.Rectangle();
        a2.box.x = 375.89276123046875;
        a2.box.y = 59.388263702392578;
        a2.box.width = 88.7330551147461;
        a2.box.height = 37.7290153503418;
        a2.pageNumber = 2;
        a2.penColor = 1201033;
        a2.penStyle = 0;
        a2.penWidth = 1;
        a2.type = Model.AnnotationInfo.TypeEnum.Area;
        a2.creatorName = "Anonym A."

        let a3 = new Model.AnnotationInfo();
        a3.annotationPosition = new Model.Point();
        a3.annotationPosition.x = 852;
        a3.annotationPosition.y = 59.388262910798119;
        a3.box = new Model.Rectangle();
        a3.box.x = 375.89276123046875;
        a3.box.y = 59.388263702392578;
        a3.box.width = 88.7330551147461;
        a3.box.height = 37.7290153503418;
        a3.pageNumber = 4;
        a3.type = Model.AnnotationInfo.TypeEnum.Point;
        a3.creatorName = "Anonym A."
        
        let a4 = new Model.AnnotationInfo();
        a4.annotationPosition = new Model.Point();
        a4.annotationPosition.x = 852;
        a4.annotationPosition.y = 59.388262910798119;
        a4.box = new Model.Rectangle();
        a4.box.x = 375.89276123046875;
        a4.box.y = 59.388263702392578;
        a4.box.width = 88.7330551147461;
        a4.box.height = 37.7290153503418;
        a4.pageNumber = 5
        a4.penColor = 1201033;
        a4.penStyle = 0;
        a4.penWidth = 1;
        a4.type = Model.AnnotationInfo.TypeEnum.Arrow;
        a4.creatorName = "Anonym A."
        
        return [a1, a2, a3, a4]
    }
        
});
