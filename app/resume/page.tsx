export default function ResumePage() {
  return (
    <div 
      style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100vw", 
        height: "100vh", 
        backgroundColor: "#323639",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div 
        style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          padding: "12px 20px",
          backgroundColor: "#202124",
          borderBottom: "1px solid #45474a"
        }}
      >
        <div style={{ color: "#fff", fontFamily: "'Helvetica', sans-serif", fontSize: "14px", fontWeight: "bold" }}>
          Resume - Aliya Raihana
        </div>
        <a 
          // JANGAN LUPA GANTI NAMA FILE DI BAWAH INI
          href="/Aliya_resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            backgroundColor: "#e8eaed", 
            color: "#202124", 
            padding: "8px 16px", 
            borderRadius: "4px", 
            textDecoration: "none", 
            fontFamily: "'Helvetica', sans-serif", 
            fontSize: "13px", 
            fontWeight: "bold" 
          }}
        >
          Buka Full PDF
        </a>
      </div>

      <div style={{ flex: 1, width: "100%", position: "relative", WebkitOverflowScrolling: "touch" }}>
        <iframe
          // JANGAN LUPA GANTI NAMA FILE DI BAWAH INI
          src="/Aliya_resume.pdf" 
          style={{ 
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%", 
            height: "100%", 
            border: "none"
          }}
          title="Resume"
        />
      </div>
    </div>
  );
}