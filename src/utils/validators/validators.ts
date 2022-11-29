export type Validators = (value:string) => string| undefined

export const required:Validators = (value) => {
  if (value) {
    return undefined;
  }
  return 'Can not be empty';
};

export const maxLengthCreator = (maxLength: number):Validators => (value) => {
  if (value && value.length > maxLength) {
    return `max length not more then ${maxLength} symbols`;
  }
  return undefined;
};
