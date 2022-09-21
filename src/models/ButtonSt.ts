class ButtonSt {
  key: string;
  type: string;
  text: string;

  constructor(text: string, type: string) {
    this.key = '_' + Math.random().toString(36).substr(2, 9);
    this.text = text;
    this.type = type;
  }
}

export default ButtonSt;
