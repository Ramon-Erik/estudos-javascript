class CalcController {
    constructor() {
        this._operation = []
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector('#display')
        this._dateEl = document.querySelector('#data')
        this._timeEl = document.querySelector('#hora')
        this._currentDate
        this.initButtonsEvents()
        this.initialize()
    }

    initialize() {
        this.setDisplayTime()
        setInterval(() => {
            this.setDisplayTime()
        }, 1000);
    }
    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false)
        })
    }

    clearAll(){
        this._operation = []
    }
    clearEntry(){
        this._operation.pop()
    }
    addOperation(value){
        this._operation.push(value)
        console.log(this._operation)
    }
    setError(){
        this.displayCalc = 'error'
    }

    execBtn(value) {
        switch (value) {
            case 'ac':
                this.clearAll()
                break
            case 'ce':
                this.clearEntry()
                break
            case 'porcento':
                break
            case 'divisao':
                break
            case 'multiplicacao':
                break
            case 'subtracao':
                break
            case 'soma':
                break
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value))
                break
            default:
                console.log(value)
                this.setError()
                break
        }
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll('#buttons > g, #parts > g')
        buttons.forEach((btn, index)=>{
            this.addEventListenerAll(btn, 'click drag', event => {
                
                let textBtn = btn.className.baseVal.replace('btn-', '')
                this.execBtn(textBtn)

            })
            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style = 'cursor: pointer'
            })
        })
    }

    setDisplayTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this.locale, 
            {day:'2-digit',
            month:'short',
            year:'numeric'}
        )
        this.displayTime = this.currentDate.toLocaleTimeString(this.locale)
    }
    // time
    get displayTime(){
        return this._timeEl.innerHTML
    }
    set displayTime(value){
        return this._timeEl.innerHTML = value
    }

    // date (shown) 
    get displayDate(){
        this._dateEl.innerHTML
    }
    set displayDate(value){
        this._dateEl.innerHTML = value
    }
    // display
    get displayCalc(){
        return this._displayCalcEl.innerHTML
    }
    set displayCalc(value){
        return this._displayCalcEl.innerHTML = value
    }

    // date (valor)
    get currentDate() {
        return new Date()
    }
    set currentDate(value) {
        this._currentDate = value
    }
}