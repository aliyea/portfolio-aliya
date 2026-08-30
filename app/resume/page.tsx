export default function ResumePage() {
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
        backgroundColor: "#323639" 
      }}
    >
      <iframe
        src="/Aliya_resume.pdf" 
        style={{ 
          width: "100%", 
          height: "100%", 
          border: "none", 
          display: "block" 
        }}
        title="Aliya Raihana - Resume"
      />
    </div>
  );
}