let currentFan = null;
$(document).ready(function () {
    $("#cancelBtn").click(function(){
        if (window.confirm("Are you sure you want to cancel?")){
            loadList();
        }
    })
    loadList();
});

function loadList(){
    renderTable("#fanTable", fans)
    showList();
}

function deleteFan(id){
    deleteModelItem(id);
    loadList();
}