function renderizar() {
    var html = ""
    data.results[0].members.forEach(p => {
        html += "<tr> <td><a href='" + p.url + "'>" + p.first_name + " " + (p.middle_name || "") + " " + p.last_name + "</a></td>" +
            "<td>" + p.party + "</td><td>" + p.state + "</td> <td>" + p.seniority + "</td> <td>" + p.votes_with_party_pct + " %" + "</td></tr>"
    });
    document.getElementById("information").innerHTML = html;
}

function renderizar_attendance() {
    var html = ""
    html = "<tr><td>Republican</td><td>" + statistics.republicans.length + "</td><td>" + statistics.avg_republicans.toFixed(2) + "%</td></tr>" +
        "<tr><td>Democrats</td><td>" + statistics.democrats.length + "</td><td>" + statistics.avg_democrats.toFixed(2) + "%</td></tr>" +
        "<tr><td>Independents</td><td>" + statistics.independents.length + "</td><td>" + statistics.avg_independents.toFixed(2) + "%</td></tr>" +
        "<tr><td>Total</td><td>" + statistics.total + "</td><td>" + statistics.total_avg.toFixed(2) + "%</td></tr>"

    document.getElementById("information2").innerHTML = html;

}

function table_2(array, id) {
    var html = ""
    array.forEach(memberLeast => {
        html += "<tr><td>" + memberLeast.first_name + " " + (memberLeast.middle_name || "") + " " + memberLeast.last_name + "</td><td>" + memberLeast.missed_votes + "</td><td>" + memberLeast.missed_votes_pct.toFixed(2) + "%</td></tr>"

    });
    document.getElementById(id).innerHTML = html;
}

function table_3(array, id) {
    var html = ""
    array.forEach(memberLeast => {
        html += "<tr><td>" + memberLeast.first_name + " " + (memberLeast.middle_name || "") + " " + memberLeast.last_name + "</td><td>" + memberLeast.total_votes + "</td><td>" + memberLeast.votes_with_party_pct.toFixed(2) + "%</td></tr>"

    });
    document.getElementById(id).innerHTML = html;
}

function renderizar_tablas() {
    renderizar_attendance()
    table_2(statistics.least_engaged, 'table2')
    table_2(statistics.most_engaged, 'table3')
}

function renderizar_tablas2() {
    renderizar_attendance()
    table_3(statistics.least_loyal, 'table2')
    table_3(statistics.most_loyal, 'table3')
}