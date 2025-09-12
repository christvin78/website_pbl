"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import "./globals.css" // Pastikan Anda mengimpor file CSS

const fadeSlide = {
  hiddenUp: { opacity: 0, y: 50 },
  hiddenDown: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const [status, setStatus] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengontrol menu

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Mengirim...");

    try {
      const res = await fetch("https://formspree.io/f/xqadzwdw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Pesan terkirim ✅");
        setFormData({ nama: "", email: "", pesan: "" });
      } else {
        const errorData = await res.json();
        throw new Error(errorData.error || "Gagal mengirim pesan ke Formspree.");
      }
    } catch (err) {
      console.error("Kesalahan pengiriman formulir:", err);
      setStatus("Gagal mengirim ❌");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <div><img src="/portfolio/logo.jpg" alt="WebCompany Logo" className="logo" /></div>
          <h1>PT.CONSTRE</h1>
        </div>
        
        {/* Tombol Hamburger */}
        <button className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* Menu Navigasi */}
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
          <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
          <a href="#team" onClick={closeMenu}>Team</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <motion.h1
          initial="hiddenDown"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlide}
          transition={{ duration: 0.8 }}
        >
          Kami Membangun Website Impian Anda
        </motion.h1>
        <motion.p
          initial="hiddenDown"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlide}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Perusahaan profesional pembuatan website modern dan responsif.
        </motion.p>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <motion.h2
          initial="hiddenUp"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlide}
          transition={{ duration: 0.8 }}
        >
          Tentang Kami
        </motion.h2>
        <motion.p
          initial="hiddenUp"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlide}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          UMKM sebagai pemain utama dalam perkembangan bisnis digital di Indonesia, sudah seharusnya mereka membangun dan meluaskan kehadiran online mereka. Salah satu cara membangun online presence adalah dengan website profesional.
          Constre hadir untuk membantu. Kami menyediakan layanan pengembangan web terjangkau yang fokus pada utilitas tanpa mengorbankan kualitas UI/UX. Constre hadir untuk menjadi partner digital terpercaya yang mendorong transformasi bisnis melalui teknologi web modern serta membantu pembangunan kehadiran online, khususnya lewat website profesional.
          Dengan membantu UMKM beralih ke ranah digital, kami secara langsung mendorong pertumbuhan ekonomi Indonesia.
        </motion.p>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <motion.h2
          initial="hiddenDown"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlide}
          transition={{ duration: 0.8 }}
        >
          Layanan Kami
        </motion.h2>

        <div className="service-grid">
          {[
            {
              title: "Website Company Profile",
              desc: "Website profesional untuk memperkenalkan bisnis atau perusahaan Anda di internet.",
              icon: "💼",
            },
            {
              title: "E-Commerce",
              desc: "Toko online modern lengkap dengan katalog produk, keranjang belanja, dan pembayaran online.",
              icon: "🛒",
            },
            {
              title: "Custom Web App",
              desc: "Aplikasi web sesuai kebutuhan bisnis Anda dengan fitur yang fleksibel.",
              icon: "⚙",
            },
            {
              title: "SEO Optimization",
              desc: "Meningkatkan peringkat website Anda di mesin pencari agar lebih mudah ditemukan.",
              icon: "📈",
            },
            {
              title: "Maintenance & Support",
              desc: "Layanan perawatan, update, serta dukungan teknis untuk website Anda.",
              icon: "🛠",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial="hiddenDown"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlide}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="service-card"
            >
              <div style={{ fontSize: "2rem" }}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href="#contact" className="cta-button">
                Pelajari Lebih Lanjut
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section pricing-section">
        <motion.h2
          initial="hiddenUp"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlide}
          transition={{ duration: 0.8 }}
        >
          Paket Harga
        </motion.h2>
        <div className="pricing-grid">
          {[
            {
              title: "Basic",
              price: "Rp 2.000.000",
              features: ["1 Halaman", "Desain Responsif", "SEO Dasar", "1x Revisi"],
            },
            {
              title: "Standard",
              price: "Rp 5.000.000",
              features: ["5 Halaman", "Desain Premium", "SEO Lengkap", "3x Revisi"],
            },
            {
              title: "Premium",
              price: "Rp 10.000.000",
              features: [
                "Halaman Unlimited",
                "Desain Kustom",
                "SEO + Optimasi Kecepatan",
                "Revisi Unlimited",
              ],
            },
          ].map((pkg, i) => (
            <motion.div
              key={i}
              initial="hiddenUp"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlide}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="pricing-card"
            >
              <h3>{pkg.title}</h3>
              <p className="price">{pkg.price}</p>
              <ul>
                {pkg.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className="cta-button">
                Pilih Paket
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section (Horizontal Scroll) */}
      <section id="portfolio" className="section portfolio-section">
        <motion.h2
          initial="hiddenUp"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlide}
          transition={{ duration: 0.8 }}
        >
          Portfolio
        </motion.h2>

        <div style={{ position: "relative" }}>
          {/* Tombol Scroll Kiri */}
          <button
            onClick={() => {
              document.getElementById("portfolio-scroll").scrollBy({ left: -300, behavior: "smooth" });
            }}
            style={{
              position: "absolute",
              left: 0,
              top: "40%",
              zIndex: 10,
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
            }}
          >
            ◀
          </button>

          {/* Container Scroll */}
          <div
            id="portfolio-scroll"
            className="portfolio-scroll"
            style={{
              display: "flex",
              gap: "1rem",
              overflowX: "auto",
              padding: "1rem",
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none", // Firefox
            }}
          >
            {[
              { title: "Project A", img: "/portfolio/PROJEK.jpg", link: "https://quiz-isa-charity.vercel.app/" },
              { title: "Project B", img: "/portfolio/PROJEK1.jpg", link:"https://osis-smk-triratna.vercel.app/" },
              { title: "Project C", img: "/portfolio/PROJEK2.jpg", link: ""},
              { title: "Project D", img: "/portfolio/PROJEK3.jpg", link: "" },
              { title: "Project E", img: "/portfolio/PROJEK4.jpg", link: "http://book-quest-chi.vercel.app" },
              { title: "Project F", img: "/portfolio/PROJEK5.jpg", link: "http://dessert-shop-v2.vercel.app" },
            ].map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="portfolio-card"
                style={{
                  minWidth: "250px",
                  flex: "0 0 auto",
                  position: "relative",
                  scrollSnapAlign: "center",
                }}
              >
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="portfolio-img"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                    <div
                      className="portfolio-overlay"
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        background: "rgba(0,0,0,0.6)",
                        color: "white",
                        padding: "0.5rem",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                      }}
                    >
                      <h3>{project.title}</h3>
                    </div>
                  </a>
                ) : (
                  <>
                    <img
                      src={project.img}
                      alt={project.title}
                      className="portfolio-img"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                    <div
                      className="portfolio-overlay"
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        background: "rgba(0,0,0,0.6)",
                        color: "white",
                        padding: "0.5rem",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                      }}
                    >
                      <h3>{project.title}</h3>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* Tombol Scroll Kanan */}
          <button
            onClick={() => {
              document.getElementById("portfolio-scroll").scrollBy({ left: 300, behavior: "smooth" });
            }}
            style={{
              position: "absolute",
              right: 0,
              top: "40%",
              zIndex: 10,
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
            }}
          >
            ▶
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section testimonials-section">
        <motion.h2
          initial="hiddenDown"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlide}
          transition={{ duration: 0.8 }}
        >
          Testimonials
        </motion.h2>
        <div className="service-grid">
          {[
            "Client A: Sangat puas!",
            "Client B: Profesional & cepat",
            "Client C: Sangat direkomendasikan",
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial="hiddenDown"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlide}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="service-card"
            >
              {testimonial}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section team-section">
        <motion.h2
          initial="hiddenUp"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlide}
          transition={{ duration: 0.8 }}
        >
          Our Team
        </motion.h2>
        <div className="service-grid">
          {["CEO", "Developer", "Designer", "Marketing"].map((member, i) => (
            <motion.div
              key={i}
              initial="hiddenDown"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlide}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="service-card"
            >
              {member}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <motion.h2
          initial="hiddenDown"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlide}
          transition={{ duration: 0.8 }}
        >
          Contact
        </motion.h2>
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial="hiddenDown"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlide}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <input
            type="text"
            name="nama"
            placeholder="Nama"
            value={formData.nama}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="pesan"
            placeholder="Pesan"
            rows="6"
            value={formData.pesan}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Kirim</button>
          {status && <p>{status}</p>}
        </motion.form>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <motion.h2
          initial="hiddenUp"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlide}
          transition={{ duration: 0.8 }}
        >
          Siap Memulai Proyek Anda?
        </motion.h2>
        <motion.a
          href="#contact"
          className="cta-button"
          initial="hiddenDown"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlide}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hubungi Kami Sekarang
        </motion.a>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="section consultation">
        <motion.h2
          initial="hiddenUp"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlide}
          transition={{ duration: 0.8 }}
        >
          Konsultasi Gratis
        </motion.h2>

        <motion.p
          initial="hiddenUp"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlide}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Punya ide website atau butuh solusi digital? 🚀
          Yuk konsultasi gratis dengan tim kami lewat WhatsApp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="consultation-box"
          style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
        >
          <h3>Diskusi Langsung Via WhatsApp</h3>
          <p>Klik tombol di bawah ini untuk ngobrol langsung dengan tim kami 👇</p>

          <a
            href="https://wa.me/6281317779538?text=Halo%20saya%20mau%20konsultasi%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <motion.div
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0, 255, 0, 0.7)" }}
              style={{
                backgroundColor: 'green',
                padding: "1rem 2rem",
                borderRadius: '1rem',
                color: 'white',
                width: "fit-content",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out"
              }}
            >
              Hubungi Whatsapp Kami
            </motion.div>
          </a>
        </motion.div>
      </section>

      {/* Footer Section */}
      
    </div>
  );
}