"use client";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("/api/contact")
      .then(res => res.json())
      .then(data => {
        if (data.success) setContacts(data.contacts);
      });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📩 Daftar Pesan Masuk</h1>
      {contacts.length === 0 ? (
        <p>Belum ada data kontak</p>
      ) : (
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", marginTop: "1rem" }}>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Pesan</th>
              <th>Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c, i) => (
              <tr key={i}>
                <td>{c.nama}</td>
                <td>{c.email}</td>
                <td>{c.pesan}</td>
                <td>{new Date(c.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
