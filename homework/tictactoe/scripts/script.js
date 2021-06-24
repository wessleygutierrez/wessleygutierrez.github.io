var count = 0;
var winner;
$(function(){
    var tictacarray = [];
    var tictacarrayX = [];
    var tictacarrayO = [];
    // var tictacarray = [];
    var x = 'src="images/X.png" width="100" height="100"';
    var y = 'src="images/O.png" width="100" height="100"';
    function checkArray(num){
        for(i = 0; i < tictacarray.length;i++){
            if(tictacarray[i] == num){
                return false;
            }
        }
        return true;
    }
    function checkWinX(){
        var counter=0;
        const tictac0 = [1,2,3];
        const tictac1 = [4,5,6];
        const tictac2 = [7,8,9];
        const tictac3 = [1,4,7];
        const tictac4 = [2,5,8];
        const tictac5 = [3,6,9];
        const tictac6 = [1,5,9];
        const tictac7 = [3,5,7];

        for(i=0; i < tictacarrayX.length; i++){
            for(j=0; j < tictac0.length; j++){
                if(tictacarrayX[i] == tictac0[j]){
                    counter++;
                    console.log(counter)
                    if(counter == 3){
                        console.log(counter)
                        return true;
                    }
                }
            }
        }
        counter=0;
        for(i=0; i < tictacarrayX.length; i++){
            for(k=0; k < tictac1.length; k++){
                if(tictacarrayX[i] == tictac1[k]){
                    counter++;
                    if(counter == 3){
                        return true;
                    }
                }
            }
        }
        counter=0;
        for(i=0; i < tictacarrayX.length; i++){
            for(l=0; l < tictac2.length; l++){
                if(tictacarrayX[i] == tictac2[l]){
                    counter++;
                    if(counter == 3){
                        return true;
                    }
                }
            }
        }
        counter=0;
        for(i=0; i < tictacarrayX.length; i++){
            for(m=0; m < tictac3.length; m++){
                if(tictacarrayX[i] == tictac3[m]){
                    counter++;
                    if(counter == 3){
                        console.log(counter)
                        return true;
                    }
                }
            }
        }
        counter=0;
        for(i=0; i < tictacarrayX.length; i++){
            for(n=0; n < tictac4.length; n++){
                if(tictacarrayX[i] == tictac4[n]){
                    counter++;
                    if(counter == 3){
                        return true;
                    }
                }
            }
        }
        counter=0;
        for(i=0; i < tictacarrayX.length; i++){
            for(o=0; o < tictac5.length; o++){
                if(tictacarrayX[i] == tictac5[o]){
                    counter++;
                    if(counter == 3){
                        return true;
                    }
                }
            }
        }
        counter=0;
        for(i=0; i < tictacarrayX.length; i++){
            for(p=0; p < tictac6.length; p++){
                if(tictacarrayX[i] == tictac6[p]){
                    counter++;
                    if(counter == 3){
                        return true;
                    }
                }
            }
        }
        counter=0;
        for(i=0; i < tictacarrayX.length; i++){
            for(q=0; q < tictac7.length; q++){
                if(tictacarrayX[i] == tictac7[q]){
                    counter++;
                    if(counter == 3){
                        return true;
                    }
                }
            }
        }
        counter=0;
        return false;
    }
    function checkWinO(){
        var counter=0;
        const tictac0 = [1,2,3];
        const tictac1 = [4,5,6];
        const tictac2 = [7,8,9];
        const tictac3 = [1,4,7];
        const tictac4 = [2,5,8];
        const tictac5 = [3,6,9];
        const tictac6 = [1,5,9];
        const tictac7 = [3,5,7];

        for(i=0; i < tictacarrayO.length; i++){
            for(j=0; j < tictac0.length; j++){
                if(tictacarrayO[i] == tictac0[j]){
                    counter++;
                    console.log(counter)
                    if(counter == 3){
                        console.log(true)
                        return true;
                    }
                }
            }
        }
        counter=0;
        for(i=0; i < tictacarrayO.length; i++){
            for(k=0; k < tictac1.length; k++){
                if(tictacarrayO[i] == tictac1[k]){
                    counter++;
                    if(counter == 3){
                        return true;
                    }
                }
            }
        }
        counter=0;
        for(i=0; i < tictacarrayO.length; i++){
            for(l=0; l < tictac2.length; l++){
                if(tictacarrayO[i] == tictac2[l]){
                    counter++;
                    if(counter == 3){
                        return true;
                    }
                }
            }
        }
        counter=0;
        for(i=0; i < tictacarrayO.length; i++){
            for(m=0; m < tictac3.length; m++){
                if(tictacarrayO[i] == tictac3[m]){
                    counter++;
                    if(counter == 3){
                        return true;
                    }
                }
            }
        }
        counter=0;
        for(i=0; i < tictacarrayO.length; i++){
            for(n=0; n < tictac4.length; n++){
                if(tictacarrayO[i] == tictac4[n]){
                    counter++;
                    if(counter == 3){
                        return true;
                    }
                }
            }
        }
        counter=0;
        for(i=0; i < tictacarrayO.length; i++){
            for(o=0; o < tictac5.length; o++){
                if(tictacarrayO[i] == tictac5[o]){
                    counter++;
                    if(counter == 3){
                        return true;
                    }
                }
            }
        }
        counter=0;
        for(i=0; i < tictacarrayO.length; i++){
            for(p=0; p < tictac6.length; p++){
                if(tictacarrayO[i] == tictac6[p]){
                    counter++;
                    if(counter == 3){
                        return true;
                    }
                }
            }
        }
        counter=0;
        for(i=0; i < tictacarrayO.length; i++){
            for(q=0; q < tictac7.length; q++){
                if(tictacarrayO[i] == tictac7[q]){
                    counter++;
                    if(counter == 3){
                        return true;
                    }
                }
            }
        }
        counter=0;
        return false;
    }
    function clear(){
        // setTimeout(, 3000);
        $('.box').css('pointer-events', 'none');
        setTimeout(function(){
            $('.box').css('pointer-events', '');
            $( "img" ).remove()
            $( "p" ).remove()
            tictacarray = [];
            tictacarrayX = [];
            tictacarrayO = [];
        }, 3000);
    }
    $('#spot1').click(function(){
        if(checkArray(1)){
            if(count % 2 == 0){
                $('#spot1').html('<img ' + x + '>');
                tictacarrayX.push(1);
            }
            else{
                $('#spot1').html('<img ' + y + '>');
                tictacarrayO.push(1);
            }          
            count++;
            tictacarray.push(1);
            if(checkWinX()){
                $('#winner').html('<p>'+ 'X wins!' + '</p>');
                clear();
            }
            if(checkWinO()){
                $('#winner').html('<p>'+ 'O wins!' + '</p>');
                clear();
            }
            if(tictacarray.length == 9 && checkWinO()==false && checkWinX()==false){
                $('#winner').html('<p>'+ 'Tie!' + '</p>');
                clear();
            }
        }
    })
    $('#spot2').click(function(){
        if(checkArray(2)){
            if(count % 2 == 0){
                $('#spot2').html('<img ' + x + '>');
                tictacarrayX.push(2);
            }
            else{
                $('#spot2').html('<img ' + y + '>');
                tictacarrayO.push(2);
            }
            count++;
            tictacarray.push(2);
            if(checkWinX()){
                $('#winner').html('<p>'+ 'X wins!' + '</p>');
                clear();
            }
            if(checkWinO()){
                $('#winner').html('<p>'+ 'O wins!' + '</p>');
                clear();
            }
            if(tictacarray.length == 9 && checkWinO()==false && checkWinX()==false){
                $('#winner').html('<p>'+ 'Tie!' + '</p>');
                clear();
            }
        }
    })
    $('#spot3').click(function(){
        if(checkArray(3)){
            if(count % 2 == 0){
                $('#spot3').html('<img ' + x + '>');
                
                tictacarrayX.push(3);
            }
            else{
                $('#spot3').html('<img ' + y + '>');
                
                tictacarrayO.push(3);
            }
            count++;
            tictacarray.push(3);
            if(checkWinX()){
                $('#winner').html('<p>'+ 'X wins!' + '</p>');
                clear();
            }
            if(checkWinO()){
                $('#winner').html('<p>'+ 'O wins!' + '</p>');
                clear();
            }
            if(tictacarray.length == 9 && checkWinO()==false && checkWinX()==false){
                $('#winner').html('<p>'+ 'Tie!' + '</p>');
                clear();
            }
        }
    })
    $('#spot4').click(function(){
        if(checkArray(4)){
            if(count % 2 == 0){
                $('#spot4').html('<img ' + x + '>');
                
                tictacarrayX.push(4);
            }
            else{
                $('#spot4').html('<img ' + y + '>');
                
                tictacarrayO.push(4);
            }
            count++;
            tictacarray.push(4);
            if(checkWinX()){
                $('#winner').html('<p>'+ 'X wins!' + '</p>');
                clear();
            }
            if(checkWinO()){
                $('#winner').html('<p>'+ 'O wins!' + '</p>');
                clear();
            }
            if(tictacarray.length == 9 && checkWinO()==false && checkWinX()==false){
                $('#winner').html('<p>'+ 'Tie!' + '</p>');
                clear();
            }
        }
    })
    $('#spot5').click(function(){
        if(checkArray(5)){
            if(count % 2 == 0){
                $('#spot5').html('<img ' + x + '>');
                
                tictacarrayX.push(5);
            }
            else{
                $('#spot5').html('<img ' + y + '>');
                
                tictacarrayO.push(5);
            }
            count++;
            tictacarray.push(5);
            if(checkWinX()){
                $('#winner').html('<p>'+ 'X wins!' + '</p>');
                clear();
            }
            if(checkWinO()){
                $('#winner').html('<p>'+ 'O wins!' + '</p>');
                clear();
            }
            if(tictacarray.length == 9 && checkWinO()==false && checkWinX()==false){
                $('#winner').html('<p>'+ 'Tie!' + '</p>');
                clear();
            }
        }
    })
    $('#spot6').click(function(){
        if(checkArray(6)){
            if(count % 2 == 0){
                $('#spot6').html('<img ' + x + '>');
                
                tictacarrayX.push(6);
            }
            else{
                $('#spot6').html('<img ' + y + '>');
                
                tictacarrayO.push(6);
            }
            count++;
            tictacarray.push(6);
            if(checkWinX()){
                $('#winner').html('<p>'+ 'X wins!' + '</p>');
                clear();
            }
            if(checkWinO()){
                $('#winner').html('<p>'+ 'O wins!' + '</p>');
                clear();
            }
            if(tictacarray.length == 9 && checkWinO()==false && checkWinX()==false){
                $('#winner').html('<p>'+ 'Tie!' + '</p>');
                clear();
            }
        }
    })
    $('#spot7').click(function(){
        if(checkArray(7)){
            if(count % 2 == 0){
                $('#spot7').html('<img ' + x + '>');
                
                tictacarrayX.push(7);
            }
            else{
                $('#spot7').html('<img ' + y + '>');
                
                tictacarrayO.push(7);
            }
            count++;
            tictacarray.push(7);
            if(checkWinX()){
                $('#winner').html('<p>'+ 'X wins!' + '</p>');
                clear();
            }
            if(checkWinO()){
                $('#winner').html('<p>'+ 'O wins!' + '</p>');
                clear();
            }
            if(tictacarray.length == 9 && checkWinO()==false && checkWinX()==false){
                $('#winner').html('<p>'+ 'Tie!' + '</p>');
                clear();
            }
        }
    })
    $('#spot8').click(function(){
        if(checkArray(8)){
            if(count % 2 == 0){
                $('#spot8').html('<img ' + x + '>');
                
                tictacarrayX.push(8);
            }
            else{
                $('#spot8').html('<img ' + y + '>');
                
                tictacarrayO.push(8);
            }
            count++;
            tictacarray.push(8);
            if(checkWinX()){
                $('#winner').html('<p>'+ 'X wins!' + '</p>');
                clear();
            }
            if(checkWinO()){
                $('#winner').html('<p>'+ 'O wins!' + '</p>');
                clear();
            }
            if(tictacarray.length == 9 && checkWinO()==false && checkWinX()==false){
                $('#winner').html('<p>'+ 'Tie!' + '</p>');
                clear();
            }
        }
    })
    $('#spot9').click(function(){
        if(checkArray(9)){
            if(count % 2 == 0){
                $('#spot9').html('<img ' + x + '>');
                
                tictacarrayX.push(9);
            }
            else{
                $('#spot9').html('<img ' + y + '>');
                
                tictacarrayO.push(9);
            }
            count++;
            tictacarray.push(9);
            if(checkWinX()){
                $('#winner').html('<p>'+ 'X wins!' + '</p>');
                clear();
            }
            if(checkWinO()){
                $('#winner').html('<p>'+ 'O wins!' + '</p>');
                clear();
            }
            if(tictacarray.length == 9 && checkWinO()==false && checkWinX()==false){
                $('#winner').html('<p>'+ 'Tie!' + '</p>');
                clear();
            }
        }
    })

    
});