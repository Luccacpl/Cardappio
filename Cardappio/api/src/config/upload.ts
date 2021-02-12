import multer from 'multer'
import path from 'path'

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'public', 'uploads'),
        filename: (req, res, cb) => {
            const extension = res.mimetype.split('/');
            const fileName = `${Date.now()}.${extension[1]}`
            cb(null, fileName)
        }
    }),
    limits: {
        fileSize: 3 * (1024 * 1024)
    },
    fileFilter: (req:any, file:Express.Multer.File, cb:multer.FileFilterCallback) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png'
        ]
        if (allowedMimes.includes(file.mimetype)) {
            cb(null,true)
        }else{
            cb(new Error("Invalid file type"))
        }
    }

}