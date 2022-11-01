function val(result){
    form.disp.value = form.disp.value + result;
}
function calculate(){
    if(form.disp.value == ""){
        alert("please enter number");
    }else{
        form.disp.value = eval(form.disp.value);
    }
}
