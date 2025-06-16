//Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
//formarem uma data real (dias de 28–31 dias, ano bissexto para
//fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano){
    let arr = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
        arr[1] = 29;
    }    

    if(mes > 0 && mes <= 12){
        if(dia > 0 && dia <= arr[mes -1]){
            return true;
        }
    }

    return false;
   
}
