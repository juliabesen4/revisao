cliques=0; // varialvel global

    function Mostrar(qual)
    {
        id_div="d" + qual

        if (document.getElementById(id_div).innerHTML == "" )
        { 
        cliques = cliques + 1

        if(qual==1)
        {
            if(cliques == 1)
            {
            d1.innerHTML = "x"
            }
            if(cliques == 2)
            {
            d1.innerHTML = "o"
            cliques = 0
            }
        }
        if(qual==2)
        {
            if(cliques == 1)
            {
            d2.innerHTML = "x"
            }
            if(cliques == 2)
            {
            d2.innerHTML = "o"
            cliques = 0
            }
        }
        if(qual==3)
        {
            if(cliques == 1)
            {
            d3.innerHTML = "x"
            }
            if(cliques == 2)
            {
            d3.innerHTML = "o"
            cliques = 0
            }
        }
        if(qual==4)
        {
            if(cliques == 1)
            {
            d4.innerHTML = "x"
            }
            if(cliques == 2)
            {
            d4.innerHTML = "o"
            cliques = 0
            }
        }
        if(qual==5)
        {
            if(cliques == 1)
            {
            d5.innerHTML = "x"
            }
            if(cliques == 2)
            {
            d5.innerHTML = "o"
            cliques = 0
            }
        }
        if(qual==6)
        {
            if(cliques == 1)
            {
            d6.innerHTML = "x"
            }
            if(cliques == 2)
            {
            d6.innerHTML = "o"
            cliques = 0
            }
        }
        if(qual==7)
        {
            if(cliques == 1)
            {
            d7.innerHTML = "x"
            }
            if(cliques == 2)
            {
            d7.innerHTML = "o"
            cliques = 0
            }
        }
        if(qual==8)
        {
            if(cliques == 1)
            {
            d8.innerHTML = "x"
            }
            if(cliques == 2)
            {
            d8.innerHTML = "o"
            cliques = 0
            }
        }
        if(qual==9)
        {
            if(cliques == 1)
            {
            d9.innerHTML = "x"
            }
            if(cliques == 2)
            {
            d9.innerHTML = "o"
            cliques = 0
            }
        }

        VerificarGanhador()

        }
    }

    function limpar()
    {
        cliques = 0;
        d1.innerHTML = "";
        d2.innerHTML = "";
        d3.innerHTML = "";
        d4.innerHTML = "";
        d5.innerHTML = "";
        d6.innerHTML = "";
        d7.innerHTML = "";
        d8.innerHTML = "";
        d9.innerHTML = "";
    }

    function VerificarGanhador()
    {
        if(d1.innerHTML == d2.innerHTML && d2.innerHTML == d3.innerHTML && d3.innerHTML!= "")
        {
            window.speechSynthesis.speak(new SpeechSynthesisUtterance("voce ganhou"));
            limpar()
        }
        if(d3.innerHTML == d4.innerHTML && d4.innerHTML == d5.innerHTML && d5.innerHTML!= "")
        {
            window.speechSynthesis.speak(new SpeechSynthesisUtterance("voce ganhou"));
            limpar()
        }
        if(d6.innerHTML == d4.innerHTML && d7.innerHTML == d7.innerHTML && d.innerHTML!= "")
        {
            window.speechSynthesis.speak(new SpeechSynthesisUtterance("voce ganhou"));
            limpar()
        }
        if(d1.innerHTML == d4.innerHTML && d4.innerHTML == d7.innerHTML && d7.innerHTML!= "")
        {
            window.speechSynthesis.speak(new SpeechSynthesisUtterance("voce ganhou"));
            limpar()
        }
        if(d2.innerHTML == d3.innerHTML && d3.innerHTML == d8.innerHTML && d8.innerHTML!= "")
        {
            window.speechSynthesis.speak(new SpeechSynthesisUtterance("voce ganhou"));
            limpar()
        }
        if(d3.innerHTML == d6.innerHTML && d6.innerHTML == d9.innerHTML && d9.innerHTML!= "")
        {
            window.speechSynthesis.speak(new SpeechSynthesisUtterance("voce ganhou"));
            limpar()
        }
        if(d3.innerHTML == d5.innerHTML && d5.innerHTML == d7.innerHTML && d7.innerHTML!= "")
        {
            window.speechSynthesis.speak(new SpeechSynthesisUtterance("voce ganhou"));
            limpar()
        }
        if(d1.innerHTML == d5.innerHTML && d5.innerHTML == d9.innerHTML && d9.innerHTML!= "")
        {
            window.speechSynthesis.speak(new SpeechSynthesisUtterance("voce ganhou"));
            limpar()
        }
    }
    

    
