class Storage {
  data = JSON.parse(localStorage.getItem("data")) || [];

  constructor() {
    this.#init();
  }

  #init() {
    this.handleBeforeUnload = this.#handleBeforeUnload.bind(this);
    this.handleListReady = this.#handleListReady.bind(this);

    window.addEventListener("beforeunload", this.handleBeforeUnload);
    window.addEventListener("DOMContentLoaded", this.handleListReady);
  }

  // сохрание перед перезагрузкой
  #handleBeforeUnload() {
    const json = JSON.stringify(this.data);
    localStorage.setItem("data", json);
  }

  // забираем данные из localStorage
  #handleListReady() {
    if (this.data.length) {
      const event = new Event("render:need");
      window.dispatchEvent(event);
    }
  }
}

export { Storage };
