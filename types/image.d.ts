type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

declare module "*.svg" {
  import React = require("react");

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.png" {
  const content: StaticImageData;
  export default content;
}

declare module "*.jpg" {
  const content: StaticImageData;
  export default content;
}

declare module "*.jpeg" {
  const content: StaticImageData;
  export default content;
}

declare module "*.gif" {
  const content: StaticImageData;
  export default content;
}

declare module "*.webp" {
  const content: StaticImageData;
  export default content;
}

declare module "*.ico" {
  const content: StaticImageData;
  export default content;
}

declare module "*.bmp" {
  const content: StaticImageData;
  export default content;
}
