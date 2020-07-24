var members = data.results[0].members;

var statistics = {

    "democrats": [],
    "republicans": [],
    "independents": [],
    "total": 0,
    "avg_democrats": 0,
    "avg_republicans": 0,
    "avg_independents": 0,
    "total_avg": 0,
    "least_engaged": [],
    "most_engaged": [],
    "least_loyal": [],
    "most_loyal": []

};

function calculateAttendance() {
    statistics.democrats = members.filter(member => member.party == "D").map(member => member.votes_with_party_pct);
    statistics.republicans = members.filter(member => member.party == "R").map(member => member.votes_with_party_pct);
    statistics.independents = members.filter(member => member.party == "I").map(member => member.votes_with_party_pct);


    console.log("democratas")
    console.log(statistics.democrats)
    console.log("republicans")
    console.log(statistics.republicans)
    console.log("indepents")
    console.log(statistics.independents)
}

calculateAttendance()

statistics.total = (statistics.democrats.length + statistics.republicans.length + statistics.independents.length)

console.log(statistics.total)

function calculateAverage() {
    if (statistics.democrats != 0) {
        statistics.avg_democrats = statistics.democrats.reduce(function(total, currentValue) {
            return total + currentValue
        })
        statistics.total_avg = (statistics.total_avg + statistics.avg_democrats)
        statistics.avg_democrats = statistics.avg_democrats / statistics.democrats.length;
    }


    if (statistics.republicans != 0) {
        statistics.avg_republicans = statistics.republicans.reduce(function(total, currentValue) {
            return total + currentValue
        })
        statistics.total_avg = (statistics.total_avg + statistics.avg_republicans)
        statistics.avg_republicans = statistics.avg_republicans / statistics.republicans.length;
    }



    if (statistics.independents != 0) {
        statistics.avg_independents = statistics.independents.reduce(function(total, currentValue) {
            return total + currentValue
        })
        statistics.total_avg = (statistics.total_avg + statistics.avg_independents)
        statistics.avg_independents = statistics.avg_independents / statistics.independents.length;
    }

    statistics.total_avg = statistics.total_avg / statistics.total;

}
calculateAverage()

function Attendance(array, value, most, least) {

    var porcentaje = Math.round(statistics.total * 10 / 100);
    console.log(porcentaje)

    function order(array, value) {
        array.sort(function(a, b) {
            return a[value] - b[value];
        });

    }
    order(array, value);
    for (i = 0; i < porcentaje; i++) {
        most.push(array[i])
    }
    most.forEach(element => {
        console.log(element)

    });

    array.reverse(array, value)
    for (i = 0; i < porcentaje; i++) {
        least.push(array[i])
    }
    least.forEach(element => {
        console.log(element)

    });

}
Attendance(members, 'missed_votes', statistics.most_engaged, statistics.least_engaged)
console.log("--------------------------------------------------")
Attendance(members, 'total_votes', statistics.least_loyal, statistics.most_loyal)