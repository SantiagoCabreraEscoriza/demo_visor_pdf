import "./App.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { useState } from "react";

function App() {
  const [isCompleted, setIsCompleted] = useState(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const filePluginInstance = getFilePlugin();

  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div
          style={{
            border: "1px solid black",
            height: "750px",
            width: "650px",
          }}
        >
          <Viewer
            fileUrl="/ejemplo.pdf"
            defaultScale={1}
            plugins={[defaultLayoutPluginInstance, filePluginInstance]}
            onPageChange={(e) => {
              if (e.currentPage === e.doc["_pdfInfo"].numPages - 1) {
                setIsCompleted(true);
              }
            }}
          />
        </div>
      </Worker>
      {isCompleted && <div>🎉 ¡Enhorabuena! Has completado el documento.</div>}
    </>
  );
}

export default App;
