alert('All set!');
var markVar;
var modelVar;
var completeDescription;

function unify(){
    markVar = document.fieldConcat.markInput.value;
    modelVar = document.fieldConcat.modelInput.value;

    completeDescription = markVar + ' ' + modelVar;

    window.alert('Vehicle data = ' + completeDescription);
}