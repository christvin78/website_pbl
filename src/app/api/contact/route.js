import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// path ke file contacts.json
const filePath = path.join(process.cwd(), "data", "contacts.json");

// POST: untuk menyimpan data baru
export async function POST(req) {
  try {
    const body = await req.json(); // ambil data dari client

    // pastikan folder /data ada
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    // pastikan file contacts.json ada
    if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, "[]");

    // baca data lama
    const existingData = JSON.parse(fs.readFileSync(filePath, "utf-8") || "[]");

    // buat ID unik
    const newId = existingData.length > 0 ? existingData[existingData.length - 1].id + 1 : 1;

    // struktur data baru
    const newData = {
      id: newId,
      nama: body.nama,
      email: body.email,
      pesan: body.pesan,
      phone: body.phone || "",
      source: "website",
      status: "baru",
      date: new Date().toISOString(),
    };

    // tambahkan ke array
    existingData.push(newData);

    // simpan kembali ke file
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

    return NextResponse.json({ success: true, message: "Data berhasil disimpan", data: newData });
  } catch (err) {
    console.error("API POST Error:", err);
    return NextResponse.json(
      { success: false, message: err.message || "Gagal menyimpan data" },
      { status: 500 }
    );
  }
}

// GET: untuk membaca semua data (misal dashboard admin)
export async function GET() {
  try {
    if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, "[]"); // pastikan ada
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8") || "[]");
    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("API GET Error:", err);
    return NextResponse.json(
      { success: false, message: err.message || "Gagal membaca data" },
      { status: 500 }
    );
  }
}
