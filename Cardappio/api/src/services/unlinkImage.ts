import fs from 'fs';

export default {
    async deleteImage(imagename:string){
        fs.unlinkSync(imagename);
    }
}