declare module 'CSSModule' {
  declare module.exports: any;
}

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void;
  };
};
