import React from 'react'
import "./Resume.css"

import ReactLoading from 'react-loading';

import pdfFile from '../../Assets/Documents/Xuan_Hui_Khiu_resume.pdf'
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Resume = () => {
    return (
        <Document 
            file={pdfFile}
            className='pdf-container'
            loading={
                <ReactLoading 
                    type={'spin'} 
                    color={'var(--red)'} 
                    height={'50px'} 
                    width={'50px'} 
                />}
        >
            <a 
                href={pdfFile} 
                target='_blank'
                rel='noopener'
            >
                <Page
                    width= {1500} 
                    pageNumber={1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false} 
                    devicePixelRatio={Math.min(2, window.devicePixelRatio)}
                    className="pdf-page"
                />
            </a>

        </Document>
    );
}

export default Resume;
