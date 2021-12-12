class Form {
  constructor (data, formElement, selectPriorityElement) {
    this.formElement = formElement
    this.data = data
    this.selectPriorityElement = selectPriorityElement

    this.init()
  }

  init () {
    this.handleSubmit = this.handleSubmit.bind(this)

    this.formElement.addEventListener('submit', this.handleSubmit)
  }

  handleSubmit (event) {
    event.preventDefault()

    const toDo = {
      id: new Date().getTime(),
      isChecked: false,
      index: this.selectPriorityElement.options.selectedIndex
    }

    const fromData = new FormData(this.formElement)
    for (const [name, value] of fromData.entries()) {
      toDo[name] = value
    }

    this.data.push(toDo)
    this.formElement.reset()

    const eventRenderNeed = new Event('render:need')
    window.dispatchEvent(eventRenderNeed)
  }
}

export { Form }
