function ToAdd()
    {
        var Text=document.getElementById("TextTitle").value;
        var Textarea=document.getElementById("TextArea").value;
        var Text1=document.getElementById("AddImage").value;

        if(Text == "" && Textarea == "" && Text1 == "")
        {
            alert('Enter your Details')
            //document.getElementById("data").innerHTML='Enter your Details'
        }
        else
        {
            document.getElementById("1").innerHTML=Text;
            document.getElementById("2").innerHTML=Textarea;
            document.getElementById("3").innerHTML=Text1;
        }

    }

    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('Submitbtn').onclick=ToAdd;
    })
