export enum EToastAction {
  SUCCESS,
  WARNING,
  ERROR,
  INFO,
}

export interface IToast {
  type: EToastAction;
  color: {
    bg: string;
    text: string;
  };
  icon: any;
  message: string;
  duration: number; // in Seconds
}
