import {App, FlaperImage} from '../src/index.js'
let should = require('chai').should();

describe('main', () => {
  it('isTestEnv', () => {
     let envBefore = App.getEnv('test');
     App.setEnv('production');
     App.isTestEnv().should.eq(false);
     App.setEnv('test');
     App.isTestEnv().should.eq(true);
     App.setEnv(envBefore);
  });
  it('getBucketName depends on env', () => {
     let envBefore = App.getEnv('test');
     let bucket = FlaperImage.getBucketName();
     bucket.should.eq('flaper.production.images');
     App.setEnv('test');
     bucket = FlaperImage.getBucketName();
     bucket.should.eq('flaper.test.images');
     App.setEnv(envBefore);
  });
});
