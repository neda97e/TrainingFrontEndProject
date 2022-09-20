class ButtonSt {
  id: string;
  type: string;
  text: string;
  // onClick: () => any;

  constructor(id: string, text: string, type: string) {
    this.id = id;
    this.text = text;
    this.type = type;
  }
}

export default ButtonSt;
