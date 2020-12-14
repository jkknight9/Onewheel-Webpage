const stateAbbreviations = [
    'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY'
   ];
           
function initValidation(formName) {
let $form = $(formName);
$('.phone-us').mask('(000) 000-0000');
$(':input').change(function(ev){
    validateForm();
    if(!this.checkValidity())
    $(this).addClass("was-validated")
});

$form.submit(function(event){
    $form = $(this);
    formEl=this;

    event.preventDefault(); 
    event.stopPropagation(); 

    validateForm();

    if (!formEl.checkValidity()){
    $(":input").addClass("was-validated")
    }
    else{
        addFan(Math.floor((Math.random() * 100) + 1), $("#first-name").val(), $("#last-name").val(), $("#address").val(), $("#city").val(), $("#state").val(), $("#zip").val(), $("#email").val(), $("#phone").val(), $("input[type=checkbox][name=bar]:checked").val(), $("#comments").val());
        $("#myform").hide();
        loadList()
        $("table").show();
        $(".newFan").show();
        $(".clearData").show();

    }
});
}

function validateForm() {

$.each($("input[required]"), function(){
    setElementValidity("#" + this.id , $(this).val().length > 0, this.message)
})
validateState("#state", "You must enter a valid two character state code, e.g., UT");
validateCheckboxGroup("#socialMedia", "you must select at least one!");

}
function validateState(id, msg){
let $el = $(id);
let state = $el.val().toUpperCase()
for(var i =0; i<stateAbbreviations.length; i++){
    var name = stateAbbreviations[i];
    if(name==state){
        return state;
    } 
}
    setElementValidity("#state", false, "You must enter a valid two character state code, e.g., UT");

}

function validateCheckboxGroup(fieldName, message) {
let valid=false;
$.each($("input[name=find-page]"), function(){
    if (this.checked === true) {
        valid = true
    }
});

setElementValidity(fieldName, valid, message);
return valid;
}

function setElementValidity(fieldName, valid, message){
let $field=$(fieldName);
let el = $field.get(0);
if (valid) {  //it has a value
    el.setCustomValidity('');
    $(el).next().hide()  //sets to no error message and field is valid
} else {
    el.setCustomValidity(message);   //sets error message and field gets 'invalid' stat
    $(el).next().show()
}
}