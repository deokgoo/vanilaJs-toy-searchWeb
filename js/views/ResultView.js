import CardComponent from '../components/Card.js';

export default class ResultView {
  setup(el) {
    this.el = el;

  }

  setResult(resData) {
    const cardComponent = CardComponent(resData);
    this.el.innerHTML = cardComponent;
  }

  resetResult() {
    this.el.innerHTML = "";
  }

  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data });
    this.el.dispatchEvent(evt);
  }

  on(event, handler) {
    this.el.addEventListener(event, handler);
    return this;
  }
};
