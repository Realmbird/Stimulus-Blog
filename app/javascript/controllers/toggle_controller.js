import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["invis", "show", "highlight", "input"]
  static classes = ["hide", "switch", "highlight"]
  connect() {
    this.invisTarget.classList.add(this.hideClass)
    this.highlightTarget.classList.add(this.highlightClass)
    this.highlightTarget.classList.toggle(this.highlightClass)
  }
  clicked(){
    this.invisTarget.classList.toggle(this.hideClass)
  }
  transform(){
    this.showTarget.classList.add(this.hideClass)
    this.invisTarget.classList.toggle(this.hideClass)
  }
  highlight(){
    this.highlightTarget.classList.toggle(this.highlightClass)
  }
  changed(){
    var text = this.inputTarget.value
    if(text.length > 10){
      this.invisTarget.classList.toggle(this.hideClass)
    }
  }
}