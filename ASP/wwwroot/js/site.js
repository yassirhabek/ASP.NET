﻿//const { Alert } = require("../lib/bootstrap/dist/js/bootstrap");
//const { data } = require("jquery");


$("#buttonwerknemertoevoegen").click(() => {

})

$("#buttonwerknemeraanpassen").click(() => {
    WerknemerAanpassen();
})

$('#buttonwerknemerverwijderen').click(() => {
    WerknemerVerwijderen();
})

$('#buttonroutetoevoegen').click(() => {
    RouteToevoegen();
})

function WerknemerToevoegen() {
    let target = window.location.protocol + "//" + window.location.host;

    Naam = $("#input-naam").val();
    WerknemerNum = $('#input-werknemernum').val();
    TelefoonNum = $('#input-telefoonnum').val();

    $.post(target + "/Werknemer/WerknemerToevoegen", { naam: Naam, werknemerNum: WerknemerNum, telefoonNum: TelefoonNum })
        .done(data => { alert(data), window.location.href = target })
        .fail(data => { alert(data.responseText) })
}

function WerknemerAanpassen() {
    let target = window.location.protocol + "//" + window.location.host;

    WerknemerID = $("#drop-aanpassen").val();
    Naam = $("#changed-naam").val(); 
    WerknemerNum = $("#changed-werknemernum").val();
    TelefoonNum = $("#changed-telefoonnummer").val();

    $.post(target + "/Werknemer/WerknemerAanpassen", { newNaam: Naam, newWerknemerNum: WerknemerNum, newTelefoonNum: TelefoonNum, oldWerknemerID: WerknemerID })
        .done(data => { alert(data), window.location.href = target })
        .fail(data => { alert(data.responseText) })
}

function WerknemerVerwijderen() {
    let target = window.location.protocol + "//" + window.location.host;

    WerknemerID = $("#drop-verwijderen").val();

    $.post(target + "/Werknemer/WerknemerVerwijderen/" + WerknemerID, null)
        .done(data => { alert(data), window.location.href = target })
        .fail(data => { alert(data.responseText) })
}

function RouteToevoegen() {
    let target = window.location.protocol + "//" + window.location.host;

    RouteNummer = $("#input-routenummer").val();
    Datum = $("#input-datum").val();
    Chauffeur = $("#drop-chauffeur").val();
    Bijrijder = $("#drop-bijrijder").val();
    Starttijd = $("#input-starttijd").val();
    Eindtijd = $("#input-eindtijd").val();

    $.post(target + "/Route/RouteToevoegen", { routeNummer: RouteNummer, rawDatum: Datum, chauffeurID: Chauffeur, bijrijderID: Bijrijder, rawStartTijd: Starttijd, rawEindTijd: Eindtijd })
        .done(data => { alert(data), window.location.href = target })
        .fail(data => { alert(data.responseText) })
}