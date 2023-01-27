class CalcController {
    constructor() {
        // this._locale = 'pt-BR'
        // this._displayCalcEl = document.querySelector('#display')
        // this._DateEl = document.querySelector('#data')
        // this._timeEl = document.querySelector('#hora')
        this._displayCalc = '0'
        this._currentDate
        this.initialize()
    }

    initialize() {
        // setInterval(() => {
        //     this.displayDate = this.currentDate.toLocaleDateString(this.locale)
        //     this.displayTime = this.currentDate.toLocaleTimetring(this.locale)
        // }, 1000);
        let displayCalcEl = document.querySelector('#display')
        let dateEl = document.querySelector('#data')
        let timeEl = document.querySelector('#hora')

        displayCalcEl.innerHTML = 123
        timeEl.innerHTML = '12:43'
        dateEl.innerHTML = '12/03'
    }
    get displayCalc(){
        return this._displayCalc
    }
    set displayCalc(value){
        return this._displayCalc = value
    }
    // date
    get currentDate() {
        return new Date()
    }
    set currentDate(value) {
        this._currentDate = value
    }
}