let value1 = '';
function setDisplay(val){
    value1 += val;
    document.getElementById('display').value = value1;
}
function clearDisplay(){
    value1='';
    document.getElementById('display').value = value1;
}
function result(){
    try{
        document.getElementById('display').value = eval(value1);
    }
    catch(error){
        document.getElementById('display').value = 'Error';
    }
}