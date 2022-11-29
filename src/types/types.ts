export type PhotosType = {
  small: string;
  large: string;
};
export type userType = {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
  followed?: boolean;
};
export enum ResultCodes {
  success = 0,
  error = 1,
  captchaIsRequired = 10,
}
