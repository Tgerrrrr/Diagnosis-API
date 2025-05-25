export default function handler(req, res) {
  const data = {
    diagnoses: [
      {
        id: 1,
        disease: "Common Cold (Pilek Biasa)",
        symptoms: ["hidung tersumbat", "bersin-bersin", "tenggorokan gatal", "batuk ringan"],
        recommendation: "Istirahat cukup, minum air hangat, dan konsumsi vitamin C. Bisa menggunakan obat OTC seperti antihistamin.",
        severity: "ringan"
      },
      {
        id: 2,
        disease: "Influenza (Flu)",
        symptoms: ["demam", "batuk", "sakit tenggorokan", "nyeri otot", "lemas"],
        recommendation: "Periksa ke dokter umum, istirahat total, minum banyak cairan, dan konsumsi obat antivirus jika diresepkan.",
        severity: "sedang"
      },
      {
        id: 3,
        disease: "Gastritis (Radang Lambung)",
        symptoms: ["nyeri ulu hati", "mual", "perut kembung", "nafsu makan menurun"],
        recommendation: "Hindari makanan pedas/berminyak, makan teratur, dan konsultasi ke dokter jika gejala berlanjut lebih dari 3 hari.",
        severity: "sedang"
      },
      {
        id: 4,
        disease: "GERD (Asam Lambung)",
        symptoms: ["nyeri dada", "mulut pahit", "perut begah", "sering sendawa"],
        recommendation: "Makan porsi kecil tapi sering, hindari berbaring setelah makan, dan konsultasi ke dokter untuk obat PPI.",
        severity: "sedang"
      },
      {
        id: 5,
        disease: "Tonsillitis (Radang Amandel)",
        symptoms: ["sakit tenggorokan parah", "sulit menelan", "amandel bengkak", "demam"],
        recommendation: "Segera periksa ke dokter THT, mungkin diperlukan antibiotik.",
        severity: "sedang"
      },
      {
        id: 6,
        disease: "Otitis Media (Infeksi Telinga)",
        symptoms: ["sakit telinga", "demam", "pendengaran berkurang", "telinga berdenging"],
        recommendation: "Periksa ke dokter THT, mungkin diperlukan antibiotik tetes telinga.",
        severity: "sedang"
      },
      {
        id: 7,
        disease: "Konjungtivitis (Mata Merah)",
        symptoms: ["mata merah", "mata gatal", "keluar kotoran mata", "sensasi berpasir"],
        recommendation: "Kompres hangat, hindari mengucek mata, dan periksa ke dokter mata jika tidak membaik dalam 2 hari.",
        severity: "ringan"
      },
      {
        id: 8,
        disease: "Dermatitis Kontak",
        symptoms: ["kulit kemerahan", "gatal-gatal", "ruam", "kulit kering"],
        recommendation: "Hindari penyebab iritasi, gunakan pelembab, dan konsultasi ke dokter kulit untuk krim steroid jika perlu.",
        severity: "ringan"
      },
      {
        id: 9,
        disease: "Migrain",
        symptoms: ["sakit kepala sebelah", "mual", "sensitif terhadap cahaya", "pusing"],
        recommendation: "Istirahat di ruangan gelap, kompres dingin, dan konsultasi ke dokter untuk obat abortif jika sering kambuh.",
        severity: "sedang"
      },
      {
        id: 10,
        disease: "Vertigo",
        symptoms: ["pusing berputar", "mual", "kehilangan keseimbangan", "gerakan mata abnormal"],
        recommendation: "Segera duduk atau berbaring, hindari gerakan tiba-tiba, dan periksa ke dokter spesialis saraf.",
        severity: "sedang"
      },
      {
        id: 11,
        disease: "ISK (Infeksi Saluran Kemih)",
        symptoms: ["anyang-anyangan", "nyeri saat buang air kecil", "sering buang air kecil", "urine keruh"],
        recommendation: "Banyak minum air putih, hindari menahan kencing, dan segera periksa ke dokter untuk antibiotik.",
        severity: "sedang"
      },
      {
        id: 12,
        disease: "Alergi Rhinitis",
        symptoms: ["bersin-bersin pagi hari", "hidung gatal", "mata berair", "hidung tersumbat"],
        recommendation: "Hindari alergen, gunakan antihistamin, dan konsultasi ke dokter untuk tes alergi jika sering kambuh.",
        severity: "ringan"
      },
      {
        id: 13,
        disease: "Diare Akut",
        symptoms: ["buang air besar encer", "perut mulas", "kembung", "lemas"],
        recommendation: "Banyak minum oralit, hindari makanan berserat, dan periksa ke dokter jika diare lebih dari 3 hari.",
        severity: "sedang"
      },
      {
        id: 14,
        disease: "Hipertensi",
        symptoms: ["sakit kepala", "pusing", "pandangan kabur", "leher kaku"],
        recommendation: "Segera cek tekanan darah, kurangi garam, dan konsultasi rutin ke dokter untuk pengobatan jangka panjang.",
        severity: "berat"
      },
      {
        id: 15,
        disease: "Anemia",
        symptoms: ["lemas", "pucat", "sesak nafas", "jantung berdebar"],
        recommendation: "Perbanyak makanan kaya zat besi, konsumsi vitamin C, dan periksa darah lengkap ke dokter.",
        severity: "sedang"
      },
      {
        id: 16,
        disease: "Cacar Air",
        symptoms: ["demam", "bintil merah berisi cairan", "gatal seluruh tubuh", "lemas"],
        recommendation: "Isolasi diri, jangan digaruk, dan periksa ke dokter untuk obat antivirus dan penurun gatal.",
        severity: "sedang"
      },
      {
        id: 17,
        disease: "Dengue Fever (DBD)",
        symptoms: ["demam tinggi mendadak", "nyeri belakang mata", "sakit kepala parah", "muncul bintik merah"],
        recommendation: "Segera ke IGD untuk pemeriksaan trombosit, banyak minum, dan pantau tanda syok.",
        severity: "berat"
      },
      {
        id: 18,
        disease: "Typus",
        symptoms: ["demam naik turun", "sakit perut", "lidah kotor", "diare/sembelit"],
        recommendation: "Istirahat total, diet lunak, dan segera periksa ke dokter untuk antibiotik khusus.",
        severity: "berat"
      },
      {
        id: 19,
        disease: "Sinusitis",
        symptoms: ["nyeri wajah", "hidung tersumbat", "ingus kental kuning/hijau", "batuk malam"],
        recommendation: "Kompres hangat, inhalasi uap, dan periksa ke dokter THT jika tidak membaik dalam 10 hari.",
        severity: "sedang"
      },
      {
        id: 20,
        disease: "Covid-19",
        symptoms: ["demam", "batuk kering", "sesak nafas", "hilang indra penciuman"],
        recommendation: "Isolasi mandiri, pantau saturasi oksigen, dan segera ke rumah sakit jika sesak nafas memburuk.",
        severity: "berat"
      }
    ],
    metadata: {
      author: "HealthAPI Team",
      version: "1.0",
      disclaimer: "Ini bukan pengganti diagnosis dokter. Selalu konsultasikan dengan tenaga medis profesional untuk diagnosis yang akurat."
    }
  };

  res.status(200).json(data);
}
