/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2023 Aspose Pty Ltd
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
import { GetInfoRequest } from "../../src/annotation_api";

describe("info_api", () => {
    
    before(async () => {
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });
    
    it("test_get_supported_file_formats", async () => {            
        const infoApi = TestContext.getInfoApi();

        return infoApi.getSupportedFileFormats()
            .then((result) => {                   
                for (const format of result.formats) {
                    expect(format.fileFormat).to.not.equal("");
                    expect(format.extension).to.not.equal("");
                }
            });
    });
        
    it("test_get_info", async () => {            
        const infoApi = TestContext.getInfoApi();
        const testFiles = TestFile.GetTestFilesAnnotate();
        for(let i=0; i<testFiles.length; i++) {
            let file = testFiles[i];
            let fileInfo = new Model.FileInfo();
            fileInfo.filePath = file.GetPath();
            fileInfo.password = file.password;

            const response = await infoApi.getInfo(new GetInfoRequest(fileInfo));
            expect(response.path).equal(file.GetPath());            
        }
    });

    it("test_get_info_file_not_found", () => {  
        let fileInfo = new Model.FileInfo();
        fileInfo.filePath = "some-folder\\NotExist.docx";
        const request = new GetInfoRequest(fileInfo);
        return TestContext.getInfoApi().getInfo(request).catch((error) => {
            expect(error.message).equal("Specified file not found");
        });
    });            
});
