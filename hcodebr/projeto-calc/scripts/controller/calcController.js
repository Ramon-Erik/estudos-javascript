class CalcController {
    constructor() {
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
    initButtonsEvents(){
        let buttons = document.querySelectorAll('#buttons > g, #parts > g')
        buttons.forEach((btn, index)=>{
            btn.addEventListener('click', event => {
                console.log(btn.className.baseVal.replace('btn-', ''))
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