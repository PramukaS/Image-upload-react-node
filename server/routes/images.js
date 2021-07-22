const express = require('express');
const router = express.Router();
const { ImageUpload } = require('../models');
const path = require('path');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public')
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const isImage = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true)
    } else {
        cb(new Error('only Image is allowed..'));
    }
}

const upload = multer({ storage: storage, fileFilter: isImage, });

router.post("/upload", upload.single('photo'), (req, res) => {
    console.log(req.file);
    //const { imageName } = req.body;
    const imagePath = req.file.destination + '/' + req.file.filename;
    ImageUpload.create({
        imageName: 'imageName',
        image: imagePath
    })

    res.status(200).json({
        success: "Success"
    })
})

module.exports = router;