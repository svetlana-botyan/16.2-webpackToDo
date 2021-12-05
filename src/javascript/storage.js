class Storage {
  data = JSON.parse(localStorage.getItem("data")) || [];

  constructor(listParentElement) {
    this.listParentElement = listParentElement;

    this.init();
  }

  init() {
    this.handleClickButtonRemove = this.handleClickButtonRemove.bind(this);
    this.handleBeforeUnload = this.handleBeforeUnload.bind(this);
    this.handleListReady = this.handleListReady.bind(this);

    this.listParentElement.addEventListener(
      "click",
      this.handleClickButtonRemove
    );
    window.addEventListener("beforeunload", this.handleBeforeUnload);
    window.addEventListener("list:ready", this.handleListReady);
  }

  //удаление задачи
  handleClickButtonRemove(event) {
    const { role, id } = event.target.dataset;

    if (role == "remove") {
      this.data = this.data.filter((item) => item.id != id);
      const json = JSON.stringify(this.data);
      localStorage.setItem("data", json);
      this.data = JSON.parse(localStorage.getItem("data"));

      window.location.reload()
    }
  }


  // сохрание перед перезагрузкой
  handleBeforeUnload() {
    const json = JSON.stringify(this.data);
    localStorage.setItem("data", json);
    this.data = JSON.parse(localStorage.getItem("data"));
  }

  // забираем данные из localStorage
  handleListReady() {
    if (this.data.length) {
      const event = new Event("render:need");
      window.dispatchEvent(event);
    }
  }
}

export { Storage };
