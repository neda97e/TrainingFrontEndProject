class ButtonSt {
  id: string;
  text: string;
  bgColor: string;
  textColor: string;
  // onClick: () => any;

  constructor(text: string, bgColor: string, textColor: string) {
    this.id = Math.floor(Math.random() * 100).toString();
    this.text = text;
    this.bgColor = bgColor;
    this.textColor = textColor;
  }
}

export default ButtonSt;
