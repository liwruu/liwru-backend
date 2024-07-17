import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/bibliographic-material', upload.single('image'), createBibliographicMaterial);
