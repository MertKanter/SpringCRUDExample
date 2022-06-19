var baseURL = "http://localhost:9090";

function employeeYukle() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", baseURL + "/employee/all", true);
    xmlHttp.onreadystatechange = function () {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var employee = JSON.parse(xmlHttp.responseText);
            var tableStart = "<table><tr><th>ID</th><th>Ad</th><th>Soyad</th><th>Doğum Tarihi</th><th>Telefon</th></tr>";
            var tableMiddle = "";
            for (var i = 0; i < employee.length; i++) {
                tableMiddle += "<tr>" +
                    "<td>" + " " + employee[i].id + " " + "</td>" +
                    "<td>" + " " + employee[i].ad + " " + "</td>" +
                    "<td>" + " " + employee[i].soyad + " " + "</td>" +
                    "<td>" + " " + employee[i].dtarih + " " + "</td>" +
                    "<td>" + " " + employee[i].telefon + " " + "</td>" +
                    "</tr>";
            }
            var tableEnd = "</table>";
            document.getElementById("employeeList").style.display = "block";
            document.getElementById("employeeList").innerHTML = tableStart + tableMiddle + tableEnd;
        }
    }
    xmlHttp.send();
}

function kisiEkle() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", baseURL + "/employee/add", true);
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            alert("Kişi eklendi!");
        }
    };
    const params = {
        ad: document.getElementById("ad").value,
        soyad: document.getElementById("soyad").value,
        dtarih: document.getElementById("dtarih").value,
        telefon: document.getElementById("telefon").value
    }
    xmlHttp.send(JSON.stringify(params));
    alert("Kişi eklendi!");
    employeeYukle();
}

function kisiGuncelle() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("PUT", baseURL + "/employee/update/{id}", true);
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            alert("Kişi güncellendi!");
            employeeYukle();
        }
    }
    const params = {
        id: document.getElementById("guncelleme_id").value,
        ad: document.getElementById("guncelleme_ad").value,
        soyad: document.getElementById("guncelleme_soyad").value,
        dtarih: document.getElementById("guncelleme_dtarih").value,
        telefon: document.getElementById("guncelleme_telefon").value
    };
    xmlHttp.send(JSON.stringify(params));
}

function kisiSil() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("DELETE", baseURL + "/employee/delete/" + document.getElementById("silme_id").value, true);
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            alert("Kişi Silindi!");
            employeeYukle();
        }
    };
    xmlHttp.send();
    alert("Kişi Silindi!");
    employeeYukle();
}

function kisiBul() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", baseURL + "/employee/" + document.getElementById("bul_id").value, true);
    xmlHttp.onreadystatechange = function () {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var employee = JSON.parse(xmlHttp.responseText);
            var tableStart = "<table class='mb-3'><tr><th>ID</th><th>Ad</th><th>Soyad</th><th>Doğum Tarihi</th><th>Telefon</th></tr>";
            var tableMiddle = "";
            if (document.getElementById("bul_id").value == employee.id) {
                tableMiddle += "<tr>" +
                    "<td>" + " " + employee.id + " " + "</td>" +
                    "<td>" + " " + employee.ad + " " + "</td>" +
                    "<td>" + " " + employee.soyad + " " + "</td>" +
                    "<td>" + " " + employee.dtarih + " " + "</td>" +
                    "<td>" + " " + employee.telefon + " " + "</td>" +
                    "</tr>";
            }
            ;
            var tableEnd = "</table>";
            document.getElementById("employeeListId").style.display = "block";
            document.getElementById("employeeListId").innerHTML = tableStart + tableMiddle + tableEnd;
        }
    }
    xmlHttp.send();
}