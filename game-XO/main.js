let title = document.querySelector('.title');
let firstTurn = localStorage.getItem('firstTurn') || 'X';
let turn = firstTurn;
let scoreX= Number(localStorage.getItem('scoreX')) || 0;
let scoreO= Number(localStorage.getItem('scoreO')) || 0;
let rounds= Number(localStorage.getItem('rounds')) || 0;
let gameEnded=false;

document.getElementById('scoreX').textContent=scoreX;
document.getElementById('scoreO').textContent=scoreO;


let squares=[];

function end(num1, num2, num3) {
    if (gameEnded) return;

    gameEnded = true;
    rounds++;

    let winner = squares[num1];

    updateScore(winner);

    localStorage.setItem('rounds', rounds);

    title.innerHTML = winner + ' winner!';

    document.getElementById('item' + num1).style.background = '#000';
    document.getElementById('item' + num2).style.background = '#000';
    document.getElementById('item' + num3).style.background = '#000';

        if (rounds < 5) {
            setTimeout(function () {
                firstTurn = firstTurn === 'X' ? 'O' : 'X';

                    localStorage.setItem('firstTurn', firstTurn);

                location.reload();
                }, 3000);
                    }  else {
                    setTimeout(function () {
                    if (scoreX > scoreO) {
                    title.innerHTML = 'X wins the match!';
                    } else if (scoreO > scoreX) {
                        title.innerHTML = 'O wins the match!';
                    } else {
                        title.innerHTML = 'Match Draw!';
        }

        setTimeout(function () {
            localStorage.setItem('scoreX', 0);
            localStorage.setItem('scoreO', 0);
            localStorage.setItem('rounds', 0);

            let nextTurn = localStorage.getItem('firstTurn') || 'X';
            nextTurn = nextTurn === 'X' ? 'O' : 'X';
            localStorage.setItem('firstTurn', nextTurn);

            location.reload();
        }, 5000);

    }, 1000);
}
}
function winner()
{
  for(let i=1; i<10; i++)
  {
    squares[i] = document.getElementById('item' + i).innerHTML;
  }
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1]!='')
  {
     end(1,2,3);
   }
  else if(squares[4] == squares[5] && squares[5] == squares[6] &&squares[4]!='')
  {
     end(1,5,6);
  }
  else if(squares[7] == squares[8] && squares[8] == squares[9] &&squares[8]!='')
  {
    end(7,8,9);
  }


    if(squares[1] == squares[4] && squares[4] == squares[7] &&squares[4]!='')
  {
    end(1,4,7);
  }
  else if(squares[2] == squares[5] && squares[5] == squares[8] &&squares[5]!='')
  {
     end(2,5,8);
  }
  else if(squares[3] == squares[6] && squares[6] == squares[9] &&squares[6]!='')
  {
     end(3,6,9);
  }

    if(squares[1] == squares[5] && squares[5] == squares[9] &&squares[5]!='')
  {
    end(1,5,9);
  }
  else if(squares[3] == squares[5] && squares[5] == squares[7] &&squares[5]!='')
  {
     end(3,5,7);
  }
}


function updateScore(winner)
{
    if(winner==='X')
    {
        scoreX++;

        localStorage.setItem('scoreX',scoreX);

        document.getElementById('scoreX').textContent=scoreX;
    }
     else if(winner==='O')
    {
        scoreO++;

        localStorage.setItem('scoreO',scoreO);

        document.getElementById('scoreO').textContent=scoreO;
    }
}



function game(id)
{   
    let element =document.getElementById(id);
    if(turn==='X' && element.innerHTML=='')
    {
       element.innerHTML='X';
       turn= 'O';
       title.innerHTML='O';
    }
    else if(turn==='O' && element.innerHTML ==''){
        element.innerHTML='O';
        turn='X';
        title.innerHTML='X';
    }
    winner();
}