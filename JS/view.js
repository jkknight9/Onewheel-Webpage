function hideShow(showE1, hideArray){
  let el = document.getElementById(showE1);
  el.style.display = "block";
  for (let hideEl of hideArray){
      document.getElementById(hideEl).style.display= "none";
  }
}

