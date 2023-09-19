const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

const klasorYolu = process.cwd()
const fetchData = (filePath) => {
  // const markdownContent = fs.readFileSync(`${process.cwd()}${filePath}`, 'utf-8');

  fs.readdir(klasorYolu, (err, dosyaListesi) => {
    if (err) {
      console.error('Klasör okuma hatası:', err);
      return;
    }

    // Dosya listesini döngüye alarak her bir öğeyi işleyin
    dosyaListesi.forEach((dosyaAdi) => {
      const dosyaYolu = path.join(klasorYolu, dosyaAdi);

      // Dosya veya klasör mü kontrol edin
      fs.stat(dosyaYolu, (err, dosyaDurumu) => {
        if (err) {
          console.error('Dosya durumu kontrol hatası:', err);
          return;
        }

        if (dosyaDurumu.isFile()) {
          console.log('Dosya:', dosyaAdi);
        } else if (dosyaDurumu.isDirectory()) {
          console.log('Klasör:', dosyaAdi);
        }
      });
    });
  });
  // const yamlData = yaml.load(markdownContent);

  // return yamlData
}

export default async function handler(req, res) {
  try {
    const { file } = req.query;

    if (!file) {
      return res.status(400).json({ error: 'file parameter is missing.' });
    }

    const data = fetchData(file)

    res.status(200).json({
      data
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      errors: ["Error encountered while reading readme file"]
    })
  }
}
