const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Baca data dari file
const penyakitData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'penyakit.json')));
const gejalaData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'gejala.json')));

// Endpoint untuk diagnosa
app.post('/api/diagnosa', (req, res) => {
    try {
        const { gejala } = req.body;
        
        if (!gejala || !Array.isArray(gejala)) {
            return res.status(400).json({ error: 'Gejala harus berupa array' });
        }

        // Proses pencocokan gejala dengan penyakit
        const hasilDiagnosa = cariKemungkinanPenyakit(gejala);
        
        res.json({
            success: true,
            data: hasilDiagnosa
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Terjadi kesalahan server' });
    }
});

// Endpoint untuk mendapatkan daftar gejala
app.get('/api/gejala', (req, res) => {
    try {
        res.json({
            success: true,
            data: gejalaData
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Terjadi kesalahan server' });
    }
});

// Fungsi untuk mencocokkan gejala dengan penyakit
function cariKemungkinanPenyakit(gejalaInput) {
    const hasil = [];
    
    penyakitData.forEach(penyakit => {
        const gejalaPenyakit = penyakit.gejala;
        const gejalaCocok = gejalaInput.filter(g => gejalaPenyakit.includes(g));
        const persentase = (gejalaCocok.length / gejalaPenyakit.length) * 100;
        
        if (gejalaCocok.length > 0) {
            hasil.push({
                penyakit: penyakit.nama,
                persentase: Math.round(persentase),
                gejalaCocok,
                gejalaPenyakit,
                deskripsi: penyakit.deskripsi,
                saran: penyakit.saran
            });
        }
    });
    
    // Urutkan berdasarkan persentase tertinggi
    return hasil.sort((a, b) => b.persentase - a.persentase);
}

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});