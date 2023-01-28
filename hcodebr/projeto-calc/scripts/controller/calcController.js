class CalcController {
    constructor() {
        this._lastOperator = ''
        this._lastNumber = ''
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
        this.setLastNumberToDisplay()
    }

    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false)
        })
    }

    clearAll() {
        this._operation = []
        this.setLastNumberToDisplay()
    }
    clearEntry() {
        this._operation.pop()
        this.setLastNumberToDisplay()
    }

    getLastOperation() {
        console.log(`Returning last operation: ${this._operation[this._operation.length - 1]} array: ${this._operation}`)
        return this._operation[this._operation.length - 1]
    }

    isOperator(value) {
        console.log(`verifiyng if ${value} is an opeator... ${['%', '-', '*', '/', '+'].indexOf(value) > -1}`)
        return ['%', '-', '*', '/', '+'].indexOf(value) > -1
    }

    setLastOperation(value) {
        this._operation[this._operation.length - 1] = value
    }

    getResult() {
        return eval(this._operation.join(''))
    }

    calc() {
        let last = ''
        this._lastNumber = this.getResult()

        if (this._operation.length > 3) {
            last = this._operation.pop()
            this._lastOperator = this.getLastItem()
        }

        if (this._operation.length == 3) {
            this._lastNumber = this.getLastItem(false)
        }
        console.log('>>>lastOperator' +this._lastOperator)
        console.log('>>>lastNumber' +this._lastNumber)

        if (last == '%') {
            result /= 100
            this._operation = [result]
        } else {
            this._operation = [result]
            if (last) this._operation.push(last)
        }
        this.setLastNumberToDisplay()
    }

    pushUpoeration(value) {
        console.log(`Adding the operator ${value}`)
        this._operation.push(value)
        if (this._operation.length > 3) {
            this.calc()
            this.setLastNumberToDisplay()
        }
    }

    getLastItem(isOperator = true) {
        let lastItem
        for (let i = this._operation.length - 1; i >= 0; i--) {
                if (this.isOperator(this._operation[i]) == isOperator) {
                    lastItem = this._operation[i]
                    break
            }
        }
        return lastItem
    }

    setLastNumberToDisplay() {
        let lastNumber = this.getLastItem(false)
        if (!lastNumber) lastNumber = 0
        this.displayCalc = lastNumber
    }

    addOperation(value) {
        console.log(`-------Adding a value: ${value}`)
        console.log(`Verifyng if is a string... ${isNaN(this.getLastOperation())}`)
        if (isNaN(this.getLastOperation())) {
            // here comes the things that arent number
            if (this.isOperator(value)) {
                // adding operators
                console.log(`Adding the operator ${value}`)
                this.setLastOperation(value)
            } else if (isNaN(value)) {
                // adding ?
                console.log(value)
            } else {
                // adding a number, because isNaN([]) == undefined
                this.pushUpoeration(value)
            }
        } else {
            if (this.isOperator(value)) {
                // adding operators
                this.pushUpoeration(value)
            } else {
                let newValue = this.getLastOperation().toString() + value.toString()
                this.setLastOperation(parseInt(newValue))

            }
        }
        console.log(`Finished process... ${this._operation}`)
        console.log('--------' + this._operation + '--------')
        this.setLastNumberToDisplay()
    }
    setError() {
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
                this.addOperation('%')
                break
            case 'divisao':
                this.addOperation('/')
                break
            case 'multiplicacao':
                this.addOperation('*')
                break
            case 'subtracao':
                this.addOperation('-')
                break
            case 'soma':
                this.addOperation('+')
                break
            case 'ponto':
                this.addOperation('.')
                break
            case 'igual':
                this.calc()
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
                this.setError()
                break
        }
    }

    initButtonsEvents() {
        let buttons = document.querySelectorAll('#buttons > g, #parts > g')
        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, 'click drag', event => {

                let textBtn = btn.className.baseVal.replace('btn-', '')
                this.execBtn(textBtn)

            })
            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style = 'cursor: pointer'
            })
        })
    }

    setDisplayTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this.locale,
            {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            }
        )
        this.displayTime = this.currentDate.toLocaleTimeString(this.locale)
    }
    // time
    get displayTime() {
        return this._timeEl.innerHTML
    }
    set displayTime(value) {
        return this._timeEl.innerHTML = value
    }

    // date (shown) 
    get displayDate() {
        this._dateEl.innerHTML
    }
    set displayDate(value) {
        this._dateEl.innerHTML = value
    }
    // display
    get displayCalc() {
        return this._displayCalcEl.innerHTML
    }
    set displayCalc(value) {
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