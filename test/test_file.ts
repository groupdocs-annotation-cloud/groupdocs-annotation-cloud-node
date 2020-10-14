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
 * Describes test file
 */
export class TestFile {

    /* Test file */
    public static OnePageCells: TestFile = new TestFile("one-page.xlsx", "cells\\");
    /* Test file */
    public static OnePagePasswordCells: TestFile = new TestFile("one-page-password.xlsx", "cells\\", "password");
    /* Test file */
    public static TenPagesCells: TestFile = new TestFile("ten-pages.xlsx", "cells\\");
    /* Test file */
    public static OnePageDiagram: TestFile = new TestFile("one-page.vsd", "diagram\\");
    /* Test file */
    public static TenPagesDiagram: TestFile = new TestFile("ten-pages.vsd", "diagram\\");
    /* Test file */
    public static OnePageEmail: TestFile = new TestFile("one-page.emlx", "email\\");
    /* Test file */
    public static OnePageHtml: TestFile = new TestFile("one-page.html", "html\\");
    /* Test file */
    public static OnePageBmp: TestFile = new TestFile("one-page.bmp", "images\\");
    /* Test file */
    public static OnePagePng: TestFile = new TestFile("one-page.png", "images\\");
    /* Test file */
    public static OnePagePdf: TestFile = new TestFile("one-page.pdf", "pdf\\");
    /* Test file */
    public static OnePagePasswordPdf: TestFile = new TestFile("one-page-password.pdf", "pdf\\", "password");
    /* Test file */
    public static TenPagesPdf: TestFile = new TestFile("ten-pages.pdf", "pdf\\");
    /* Test file */
    public static OnePageSlides: TestFile = new TestFile("one-page.pptx", "slides\\");
    /* Test file */
    public static OnePagePasswordSlides: TestFile = new TestFile("one-page-password.pptx", "slides\\", "password");
    /* Test file */
    public static TenPagesSlides: TestFile = new TestFile("ten-pages.pptx", "slides\\");
    /* Test file */
    public static OnePageWords: TestFile = new TestFile("one-page.docx", "words\\");
    /* Test file */
    public static OnePagePasswordWords: TestFile = new TestFile("one-page-password.docx", "words\\", "password");
    /* Test file */
    public static TenPagesWords: TestFile = new TestFile("ten-pages.docx", "words\\");

    /**
     * File name
     */
    public fileName: string;
    
    /**
     * Folder where file is located
     */
    public folder: string;

    /**
     * File password
     */
    public password: string;

    /**
     * Returns test file path
     */
    public GetPath() {
        return this.folder + this.fileName;
    }

    private constructor(fileName: string, folder: string, password?: string) {
        this.fileName = fileName;
        this.folder = folder;
        this.password = password;
    }

    public static GetTestFiles() {
        return [
            TestFile.OnePageCells,
            TestFile.OnePagePasswordCells,
            TestFile.TenPagesCells,
            TestFile.OnePageDiagram,
            TestFile.TenPagesDiagram,
            TestFile.OnePageEmail,
            TestFile.OnePageHtml,
            TestFile.OnePageBmp,
            TestFile.OnePagePng,
            TestFile.OnePagePdf,
            TestFile.OnePagePasswordPdf,
            TestFile.TenPagesPdf,
            TestFile.OnePageSlides,
            TestFile.OnePagePasswordSlides,
            TestFile.TenPagesSlides,
            TestFile.OnePageWords,
            TestFile.OnePagePasswordWords,
            TestFile.TenPagesWords
        ];
    }

    public static GetTestFilesPreview() {
        return [
            TestFile.OnePageCells,
            TestFile.TenPagesCells,
            TestFile.OnePageDiagram,
            TestFile.TenPagesDiagram,
            TestFile.OnePageEmail,
            TestFile.OnePageHtml,
            TestFile.OnePageBmp,
            TestFile.OnePagePng,
            TestFile.OnePagePdf,
            TestFile.OnePagePasswordPdf,
            TestFile.TenPagesPdf,
            TestFile.OnePageSlides,
            TestFile.TenPagesSlides,
            TestFile.OnePageWords
        ];
    }    

    public static GetTestFilesAnnotate() {
        return [
            TestFile.OnePageCells,
            TestFile.TenPagesCells,
            TestFile.OnePageDiagram,
            TestFile.TenPagesDiagram,
            TestFile.OnePageEmail,
            TestFile.OnePageHtml,
            TestFile.OnePageBmp,
            TestFile.OnePagePng,
            //TestFile.OnePagePdf,
            //TestFile.OnePagePasswordPdf,
            //TestFile.OnePageSlides,
            //TestFile.OnePagePasswordSlides,
            //TestFile.TenPagesSlides,
            TestFile.OnePageWords,
            TestFile.OnePagePasswordWords,
            TestFile.TenPagesWords
        ];
    }     

    public static GetTestFilesNoPassword() {
        return [
            TestFile.OnePageCells,
            TestFile.TenPagesCells,
            TestFile.OnePageDiagram,
            TestFile.TenPagesDiagram,
            TestFile.OnePageEmail,
            TestFile.OnePageHtml,
            TestFile.OnePageBmp,
            TestFile.OnePagePng,
            TestFile.OnePagePdf,
            TestFile.TenPagesPdf,
            TestFile.OnePageSlides,
            TestFile.TenPagesSlides,
            TestFile.OnePageWords,
            TestFile.TenPagesWords
        ];
    }    

    public static GetTestFilesManyPages() {
        return [
            TestFile.TenPagesCells,
            TestFile.TenPagesDiagram,
            TestFile.TenPagesWords
        ];
    }        
}
