export const unescoProject = {
  id: "unesco",
  title: "UNESCO E-Book",
  role: "Creative Direction",
  period: "University Project", // Silakan disesuaikan tahun/waktunya
  
  // Paragraf 1
  context: "An educational digital e-book project developed for UNESCO as part of a university project with a real-world client. As Creative Director, the project involved leading a cross-functional team throughout the process, from initial research and content development to final execution.",
  
  // Paragraf 2 & Daftar Tim
  process: [
    "The role covered content research and copywriting, ensuring the messaging aligned with the communication objectives and target audience. It also involved coordinating with stakeholders throughout the revision process to translate feedback into a final outcome aligned with the brief.\n\nTeam:\nCreative Director: Aliya Raihana\nArt Director: M. Rafi Fadhillah, Nova Sukmawati, Raihan Alief\nCopywriter: Khaera Ummah, Daffala Viro"
    ],
  
  tech: ["Creative Direction", "Copywriting"], // Akan muncul 2 ini di thumbnail homepage
  
  links: [
    {
      url: "https://heyzine.com/flip-book/f27c569d41", // Ganti dengan link aslinya
      label: "Click to read the full e-book"
    }
  ],

  thumbnail: "/projects/thumbnail/e-book.png", // Gambar 16:9 untuk homepage

  images: [
    { url: "/projects/ebook/1.png", span: "half" }, // Contoh format banner (1 baris full)
    { url: "/projects/ebook/2.png", span: "half" },  // Contoh format poster/page (setengah baris)
    { url: "/projects/ebook/3.png", span: "half" },
    { url: "/projects/ebook/4.png", span: "half" }
  ],
  
  category: "Creative",
};