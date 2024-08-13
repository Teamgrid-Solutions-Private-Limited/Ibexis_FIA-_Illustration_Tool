import React from 'react';
import PDFMerger from './components/PDFMerger';
import './components/css/bootstrap.css';
import './components/css/style.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
function App() {
  const pdfList = [
    { PDFUrl: 'https://stagingwebsite.link/ibexis/pdf-file1.pdf' },
    { PDFUrl: 'https://stagingwebsite.link/ibexis/pdf-file2.pdf' },
    { PDFUrl: 'https://stagingwebsite.link/ibexis/pdf-file3.pdf' },
  ];
  
  const outputPageCounts = [2, 2, 2];
  
  
  return (
    <div>
      <Header />
    <section className="content-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-9 mx-auto">
              <div className="section-head">
                <h1>Ibexis FIA Illustration Tool</h1>
              </div>
              <div className="sqs-block"></div>
              <PDFMerger pdfList={pdfList} outputPageCounts={outputPageCounts} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    
    </div>
  );
}

export default App;
