import {
  FileImage,
  Files,
  Minimize2,
  FileOutput,
  Scissors,
  RotateCw,
  Lock,
  Unlock,
} from "lucide-react";

import "./Tools.css";

function Tools() {
  const tools = [
    {
      title: "Image to PDF",
      description: "Convert your JPG, PNG and other images into PDF files.",
      icon: FileImage,
      path: "/image-to-pdf",
    },
    {
      title: "Merge PDF",
      description: "Combine multiple PDF files into one document.",
      icon: Files,
      path: "/merge-pdf",
    },
    {
      title: "Compress PDF",
      description: "Reduce the size of your PDF without losing quality.",
      icon: Minimize2,
      path: "/compress-pdf",
    },
    {
      title: "PDF to Image",
      description: "Convert PDF pages into high-quality images.",
      icon: FileOutput,
      path: "/pdf-to-image",
    },
    {
      title: "Split PDF",
      description: "Extract selected pages from your PDF document.",
      icon: Scissors,
      path: "/split-pdf",
    },
    {
      title: "Rotate PDF",
      description: "Rotate PDF pages and save them in the correct orientation.",
      icon: RotateCw,
      path: "/rotate-pdf",
    },
    {
      title: "Protect PDF",
      description: "Add a password to protect your PDF documents.",
      icon: Lock,
      path: "/protect-pdf",
    },
    {
      title: "Unlock PDF",
      description: "Remove password protection from your PDF files.",
      icon: Unlock,
      path: "/unlock-pdf",
    },
  ];

  return (
    <section className="tools-section">

      <div className="tools-heading">
        <h2>All PDF Tools</h2>

        <p>
          Everything you need to work with your PDF files
        </p>
      </div>

      <div className="tools-grid">

        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <a
              href={tool.path}
              className="tool-card"
              key={tool.title}
            >

              <div className="tool-icon">
                <Icon size={30} strokeWidth={1.8} />
              </div>

              <div className="tool-content">
                <h3>{tool.title}</h3>

                <p>{tool.description}</p>
              </div>

              <span className="tool-arrow">
                →
              </span>

            </a>
          );
        })}

      </div>

    </section>
  );
}

export default Tools;
