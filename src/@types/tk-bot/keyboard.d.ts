interface Button {
  label: string;
  command: string;
  color: ButtonColor | ButtonColorUnion | undefined;
}
interface Fn {
  args: string;
  body: string;
}
interface cmd_info {
  name: string;
  alias: Array<string>;
  doc: string;
  area: string;
  access: number;
  fn: Fn; //bru i can do that????
  usage: string;
  func: Function;
  children: Array<cmd_info>;
}

namespace ENUMS3D {
  enum type {
    user,
    str,
  }
  enum status {
    sent,
    production,
    finished,
  }
  enum material {
    PLA,
    ABS,
    PETG,
    TPU,
    wood,
  }
  enum color {
    white,
    clack,
    red,
    blue,
    green,
    yellow,
    transparent,
  }
}
interface Product3D {
  material: ENUMS3D.material;
  color: ENUMS3D.color;
  printtime: number;
}
interface Order3D {
  id: number;

  name: string;
  product: Product3D;

  status: ENUMS3D.status;
  timestamp: Date;
}
interface User3D {
  id: number;
  username: string;
  online: boolean;
}

interface UserLogin {
  login: string;
  password: string;
}

// This is required to make the file a module
export { Button, cmd_info, Fn, jnode };
