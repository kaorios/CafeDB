export interface Cafe {
  id: number;
  name: string;
  namejp: string;
  thumb: string;
  street: string;
  hours: Array<Hours>;
  address: string;
}

export interface CafeDetail {
  id: number;
  name: string;
  namejp: string;
  thumb: string;
  street: string;
  hours: Hours[];
  address: string;
  contents: string;
}

export interface Hours {
  day: string;
  open: string;
  close: string;
}
