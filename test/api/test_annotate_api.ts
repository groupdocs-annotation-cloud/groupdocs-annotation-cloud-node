/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2021 Aspose Pty Ltd
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
import { ExtractRequest, AnnotateRequest, RemoveAnnotationsRequest } from "../../src/annotation_api";

describe("annotate_api", () => {
    
    before(async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0"
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    }); 

    it("test_annotate", async () => {            
        const annotateApi = TestContext.getAnnotateApi();
        const testFiles = TestFile.GetTestFilesAnnotate();
        for(let i=0; i<testFiles.length; i++) {
            let file = testFiles[i];
            let fileInfo = new Model.FileInfo();
            fileInfo.filePath = file.GetPath();
            fileInfo.password = file.password;
            let options = new Model.AnnotateOptions();
            options.fileInfo = fileInfo;
            options.annotations = get_annotations();
            options.outputPath = TestContext.getOutputPath(file.fileName);

            // Add annotation
            let result = await annotateApi.annotate(new AnnotateRequest(options));
            expect(result).instanceof(Model.AnnotationApiLink);
            expect(result.href.length).greaterThan(0);
        }
    });

    it("test_extract", async () => {            
        const annotateApi = TestContext.getAnnotateApi();
        const testFiles = TestFile.GetTestFilesWithAnnotations();
        for(let i=0; i<testFiles.length; i++) {
            let file = testFiles[i];
            let fileInfo = new Model.FileInfo();
            fileInfo.filePath = file.GetPath();
            fileInfo.password = file.password;

            // Get annotations
            let result = await annotateApi.extract(new ExtractRequest(fileInfo));            
            expect(result.length).greaterThan(0);
        }
    });    

    it("test_remove", async () => {            
        const annotateApi = TestContext.getAnnotateApi();
        const testFiles = TestFile.GetTestFilesWithAnnotations();
        for(let i=0; i<testFiles.length; i++) {
            let file = testFiles[i];
            let fileInfo = new Model.FileInfo();
            fileInfo.filePath = file.GetPath();
            fileInfo.password = file.password;
            let options = new Model.RemoveOptions();
            options.fileInfo = fileInfo;
            options.annotationIds = [1, 2, 3];
            options.outputPath = TestContext.getOutputPath(file.fileName);
            get_annotations();
            // Remove annotations
            let result = await annotateApi.removeAnnotations(new RemoveAnnotationsRequest(options));
            expect(result).instanceof(Model.AnnotationApiLink);
            expect(result.href.length).greaterThan(0);
        }
    });    

    function get_annotations() {
        let a = new Model.AnnotationInfo();
        a.annotationPosition = new Model.Point();
        a.annotationPosition.x = 852;
        a.annotationPosition.y = 59.388262910798119;
        a.box = new Model.Rectangle();
        a.box.x = 375.89276123046875;
        a.box.y = 59.388263702392578;
        a.box.width = 88.7330551147461;
        a.box.height = 37.7290153503418;
        a.pageNumber = 0
        a.penColor = 1201033
        a.penStyle = Model.AnnotationInfo.PenStyleEnum.Solid;
        a.penWidth = 1
        a.type = Model.AnnotationInfo.TypeEnum.Area;
        a.creatorName = "Anonym A."        
        return [a]
    }
        
});
