let ENV = 'production';

export class App {
  static setEnv(env) {
    if (!['production', 'development', 'test'].includes(env))
      throw 'Wrong environment';
    ENV = env; 
  }
  static getEnv(env) {
    return ENV;
  }

  static isTestEnv() {
    return ENV==='test';
  }
}
