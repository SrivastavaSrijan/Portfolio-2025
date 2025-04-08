export const AssetsMap = {
  SVG: {
    root: '/assets/svg/',
    get Logo() {
      return `${this.root}logo.svg`;
    },
  },
  Images: {
    root: '/assets/images/',
    get Face() {
      return `${this.root}face.png`;
    },
  },
  RemoteImages: {
    root: '/api/media/file/',
    get Face() {
      return `${this.root}face.png`;
    },
  },
};
