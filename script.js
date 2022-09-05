    function verificar(){
        var n1 = Number(document.getElementsByTagName('input')[0].value);
        var n2 = Number(document.getElementsByTagName('input')[1].value);
        var n3 = Number(document.getElementsByTagName('input')[2].value);

        if (n1 > n2 && n1 > n3){
            document.querySelector('p').innerHTML = ` O seu número maior é` + n1;
        }else if (n2 > n1 && n2 > n3){
            document.querySelector('p').innerHTML = ` O seu número maior é` + n2;
        }else if (n3 > n1 && n3 > n2){
            document.querySelector('p').innerHTML = ` O seu número maior é` + n3;
        }

    }
