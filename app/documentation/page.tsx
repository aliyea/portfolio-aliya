export default function DocumentationPage() {
  return (
    <div 
      style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100vw", 
        height: "100vh", 
        margin: 0, 
        padding: 0,
        overflow: "hidden",
        backgroundColor: "#323639" // Biar warnanya nyaru sama PDF viewer bawaan Chrome
      }}
    >
      <iframe
        src="/Taksu_Guide.pdf" 
        style={{ 
          width: "100%", 
          height: "100%", 
          border: "none", 
          display: "block" 
        }}
        title="Project Documentation"
      />
    </div>
  );
}