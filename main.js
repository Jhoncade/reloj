

    

    function cuentaregresiva(cuenta){
    if(cuenta==0){
        document.getElementById("mostrar").innerText=("finish")
        return cuenta
    }
    else{
        document.getElementById("mostrar").innerText=cuenta
        
        return setTimeout(cuentaregresiva,1000,(cuenta-1))
    }
    }
    cuentaregresiva=document.getElementById("parametro").value