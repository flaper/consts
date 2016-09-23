import {App} from './App.js';
const S3_DOMAIN = 's3.eu-central-1.amazonaws.com';
export const TEST_IMAGE_ID = '1abc0000fffffff';

export const IMAGE_FORMAT = {
  middle: 'middle',
  thumb: 'thumb',
  main: 'main'
};

export class FlaperImage {
  static idToPath(id) {
    //once a ~ 0.5 year
    let p1 = id.substr(0, 2);
    //once a ~ 0.75 day
    let p2 = id.substr(2, 2);
    let p3 = id.substr(4);
    return `${p1}/${p2}/${p3}`;
  }

  static getPathAfterBucketById(imageId, imageFormat) {
    let id = App.isTestEnv() ? TEST_IMAGE_ID : imageId.toString();
    if (!imageFormat || !IMAGE_FORMAT[imageFormat]) throw `Unknown Image Format '${imageFormat}'`;
    let prefix = FlaperImage.idToPath(id);

    return `${prefix}_${imageFormat}.jpg`
  }

  static getBucketPath() {
    return `https://${S3_DOMAIN}/${this.getBucketName()}/`;
  }

  static getUrlById(id, imageFormat) {
    let bucket = FlaperImage.getBucketPath();
    let path = FlaperImage.getPathAfterBucketById(id, imageFormat);
    return `${bucket}${path}`;
  }

  static getBucketName() {
    return `flaper.${App.getEnv()}.images`;
  }
}
