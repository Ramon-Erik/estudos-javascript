const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 3', function() {
    console.log('t1', new Date())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('cancelando tarefa 1')
}, 20000);

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 11
regra.dayOfWeek = 34

// ... ?