function showForm() {
  $("fanTable").fadeOut();
  $("myform").fadeIn();
}

function showList(){
  $("fanTable").fadeIn();
  $("myform").fadeOut();
}

function toggle(){
  $("#myform")[0].reset();
  $("#sapcing").hide()
  $("table").hide();
  $("#myform").show();
}

function perge(){
  fans = []
  loadList()
}

function hideShow(showE1, hideArray){
  let el = document.getElementById(showE1);
  el.style.display = "block";
  for (let hideEl of hideArray){
      document.getElementById(hideEl).style.display= "none";
  }
}

function renderTable(containerSel, fans){
  $container = $(containerSel)
  $container.empty()
  var tbody = $("<tbody/>");

  let header = `
      <tr>
        <th style = 'display:none'id</th>
        <th>Name</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
      `;
  let table = header
      for (fan of fans){
        let row = `<tr><td>${fan.firstName + " " + fan.lastName}</td><td>${fan.address + " " + fan.city + ", " + fan.state + " " + fan.zip}</td><td>${fan.phone}</td><td>${fan.email}</td><td><button id= deleteFan onclick=deleteFan(id)>🗑</button></td></tr>`
        table += row
      }
    $container.html(table)
}