var wordhome;
var wordprac;
var selectwordwork=[];
var clickR;

function color(v){
    var x = localStorage.getItem('color');
    v.style.border="3px solid #111";
    if(x=="white"){v.style.color="#111";
    }else{v.style.color="#fff";}
    switch(x){
        case "dark":v.style.backgroundColor="rgb(76 76 76)";break;
        case "blue":v.style.backgroundColor="rgb(43 83 167)";break;
        case "green":v.style.backgroundColor="rgb(33 165 59)";break;
        case "white":v.style.backgroundColor="rgb(197 197 197)";break;
        case "red":v.style.backgroundColor="rgb(151 103 0)";break;
    };
};

function alerts(a,b){
    let warn=document.createElement('div');
    if(b==2){warn.className="alert alert-danger";
    }else if(b==1){warn.className="alert alert-success";
    }else if(b==0){warn.className="alert alert-primary";};
    warn.id="warn";
    warn.innerHTML=a;
    document.body.appendChild(warn);
    setTimeout(ot,1500);
    function ot(){document.getElementById('warn').remove();};
    a="";
    b="";
};

function lo(){
    if(localStorage.getItem('color')===null){localStorage.setItem('color','white');colorLoading();
    }else{colorLoading();}

    if(localStorage.getItem('speedspeeck')===null){
        localStorage.setItem('speedspeeck',JSON.stringify(1))
        document.getElementById('speedspeecks').innerHTML="سرعت تلفظ: "+1+" برابر";
    }

    if(localStorage.getItem('speekword')===null){localStorage.setItem('speekword','0');}

    if(localStorage.getItem('font')===null){
        var botff=document.getElementsByTagName('button');
        for(let i=0; i<botff.length; ++i){botff[i].style.fontFamily="mikh";};
        localStorage.setItem('font','2');
        document.body.style.fontFamily="mikh";
    }else{
        var botff=document.getElementsByTagName('button');
        switch(eval(localStorage.getItem('font'))){
            case 1:document.body.style.fontFamily="iran";
            for(let i=0; i<botff.length; ++i){ botff[i].style.fontFamily="iran";};
            break;
            case 2:document.body.style.fontFamily="mikh";
            for(let i=0; i<botff.length; ++i){ botff[i].style.fontFamily="mikh";};
            break;
        };
    };
    home();
    number();
};

function home(){
    var light=JSON.parse(localStorage.getItem('lightner'));
    function home1(){
        localStorage.setItem('choosEtfAndFte','etf');
        if(localStorage.getItem('storage')===null){wordhome=["All"];localStorage.setItem('storage', JSON.stringify(wordhome));};

        if(localStorage.getItem('lightner')===null){
            document.getElementById('calame').innerHTML="خالی";
            localStorage.setItem('speekword','0');
        }else if(localStorage.getItem('lightner')==="[]"){
            document.getElementById('calame').innerHTML="خالی";
        }else{
            var storage=JSON.parse(localStorage.getItem('storage'));
            function xy(){
                if(storage[0]=="All"){
                    wordhome=[];
                    var light=JSON.parse(localStorage.getItem('lightner'));
                    var w=0;
                    for(var i=0; i<light.length; ++i){
                        var child=light[i];
                        if(child.length==1){continue;}else{w+=1;};
                    };
                    if(w==0){document.getElementById('calame').innerHTML="خالی";
                    }else{
                        for(var i=0; i<light.length; ++i){
                            var e = light[i];
                            for(var u=1; u<e.length; ++u){var f=e[u];wordhome.push(f);};
                        };
                        var num=wordhome.length;
                        var ran=Math.floor(Math.random()*num);
                        document.getElementById('calame').innerHTML=wordhome[ran][1];
                        if(localStorage.getItem('speekword')=="1"){speed();};
                        
                        var light=JSON.parse(localStorage.getItem('lightner'));
                        let word= document.getElementById('calame').textContent;
                        var num;
                        for(let i=0; i<light.length; ++i){
                            var child=light[i];
                            for(let u=1; u<light[i].length; ++u){if(word==child[u][1]){num=i;};};
                        };
                        let ctg=light[num];
                        var wordnumber;
                        for(let u=1; u<ctg.length; ++u){if(word==ctg[u][1]){wordnumber=u;};};
                        let main = ctg[wordnumber][4];
                        document.getElementById('information1').parentNode.style.opacity="30%";
                        document.getElementById('information2').parentNode.style.opacity="30%";
                        document.getElementById('information3').parentNode.style.opacity="30%";
                        switch(main){
                            case 0:document.getElementById('information1').parentNode.style.opacity="100%";break;
                            case 1:document.getElementById('information2').parentNode.style.opacity="100%";break;
                            case 2:document.getElementById('information3').parentNode.style.opacity="100%";break;
                        };
                    };
                }else{
                    var light=JSON.parse(localStorage.getItem('lightner'));
                    if(light[storage[0]]===undefined){
                        localStorage.setItem('storage',JSON.stringify(["All"]))
                        wordhome=[];
                        var w=0;
                        for(var i=0; i<light.length; ++i){
                            var child=light[i];
                            if(child.length==1){continue;}else{w+=1;};
                        };
                        if(w==0){document.getElementById('calame').innerHTML="خالی";
                        }else{
                            for(var i=0; i<light.length; ++i){
                                var e = light[i];
                                for(var u=1; u<e.length; ++u){var f=e[u];wordhome.push(f);};
                            };
                            var num=wordhome.length;
                            var ran=Math.floor(Math.random()*num);
                            document.getElementById('calame').innerHTML=wordhome[ran][1];
                            if(localStorage.getItem('speekword')=="1"){speed();};
                            
                            var light=JSON.parse(localStorage.getItem('lightner'));
                            let word= document.getElementById('calame').textContent;
                            var num;
                            for(let i=0; i<light.length; ++i){
                                var child=light[i];
                                for(let u=1; u<light[i].length; ++u){if(word==child[u][1]){num=i;};};
                            };
                            let ctg=light[num];
                            var wordnumber;
                            for(let u=1; u<ctg.length; ++u){if(word==ctg[u][1]){wordnumber=u;};};
                            let main = ctg[wordnumber][4];
                            document.getElementById('information1').parentNode.style.opacity="30%";
                            document.getElementById('information2').parentNode.style.opacity="30%";
                            document.getElementById('information3').parentNode.style.opacity="30%";
                            switch(main){
                                case 0:document.getElementById('information1').parentNode.style.opacity="100%";break;
                                case 1:document.getElementById('information2').parentNode.style.opacity="100%";break;
                                case 2:document.getElementById('information3').parentNode.style.opacity="100%";break;
                            };
                        };
                    }else{
                        wordhome=[];
                        var light=JSON.parse(localStorage.getItem('lightner'));
                        var e=light[storage[0]];
                        for(var u=1; u<e.length; ++u){var f=e[u];wordhome.push(f);};
                        if(wordhome.length==0){
                            document.getElementById('calame').innerHTML="خالی";
                            localStorage.setItem('speekword','0');
                        }else if(localStorage.getItem('lightner')==="[]"){document.getElementById('calame').innerHTML="خالی";
                        }else{
                            var num=wordhome.length;
                            var ran=Math.floor(Math.random()*num);
                            document.getElementById('calame').innerHTML=wordhome[ran][1];
                            if(localStorage.getItem('speekword')=="1"){speed();};
            
                            var light=JSON.parse(localStorage.getItem('lightner'));
                            let word= document.getElementById('calame').textContent;
                            var num;
                            for(let i=0; i<light.length; ++i){
                                var child=light[i];
                                for(let u=1; u<light[i].length; ++u){if(word==child[u][1]){num=i;};};
                            };
                            let ctg=light[num];
                            var wordnumber;
                            for(let u=1; u<ctg.length; ++u){if(word==ctg[u][1]){wordnumber=u;};};
                            let main = ctg[wordnumber][4];
                            document.getElementById('information1').parentNode.style.opacity="30%";
                            document.getElementById('information2').parentNode.style.opacity="30%";
                            document.getElementById('information3').parentNode.style.opacity="30%";
                            switch(main){
                                case 0:document.getElementById('information1').parentNode.style.opacity="100%";break;
                                case 1:document.getElementById('information2').parentNode.style.opacity="100%";break;
                                case 2:document.getElementById('information3').parentNode.style.opacity="100%";break;
                            };
                        };
                    }
                };
            };
            document.getElementById('qoestion').innerHTML="?";
            xy();
        };
        number();
    }
    if(localStorage.getItem('choosEtfAndFte')===null){home1()};
    if(localStorage.getItem('choosEtfAndFte')=='fte'){
        if(localStorage.getItem('storage')===null){
            wordhome=["All"];
            localStorage.setItem('storage', JSON.stringify(wordhome));
        };
        if(localStorage.getItem('lightner')===null){
            document.getElementById('calame').innerHTML="خالی";
            localStorage.setItem('speekword','0')
        }else if(localStorage.getItem('lightner')==="[]"){document.getElementById('calame').innerHTML="خالی";
        }else{
            var storage=JSON.parse(localStorage.getItem('storage'));
            function xy(){
                if(storage[0]=="All"){
                    wordhome=[];
                    var light=JSON.parse(localStorage.getItem('lightner'));
                    var w=0;
                    for(var i=0; i<light.length; ++i){
                        var child=light[i];
                        if(child.length==1){continue;
                        }else{w+=1;};
                    }
                    if(w==0){document.getElementById('calame').innerHTML="خالی";
                    }else{
                        for(var i=0; i<light.length; ++i){
                            var e = light[i];
                            for(var u=1; u<e.length; ++u){
                                var f=e[u];
                                wordhome.push(f);
                            };
                        };
                        var num=wordhome.length;
                        var ran=Math.floor(Math.random()*num);
                        document.getElementById('calame').innerHTML=wordhome[ran][2];
                        wordprac=wordhome[ran][1];
                        if(localStorage.getItem('speekword')=="1"){speed();};
                        
                        var light=JSON.parse(localStorage.getItem('lightner'));
                        var num;
                        for(let i=0; i<light.length; ++i){
                            var child=light[i];
                            for(let u=1; u<light[i].length; ++u){if(wordprac==child[u][1]){num=i;};};
                        };
                        let ctg=light[num];
                        var wordnumber;
                        for(let u=1; u<ctg.length; ++u){if(wordprac==ctg[u][1]){wordnumber=u;};};
                        let main = ctg[wordnumber][5];
                        document.getElementById('information1').parentNode.style.opacity="30%";
                        document.getElementById('information2').parentNode.style.opacity="30%";
                        document.getElementById('information3').parentNode.style.opacity="30%";
                        switch(main){
                            case 0:document.getElementById('information1').parentNode.style.opacity="100%";break;
                            case 1:document.getElementById('information2').parentNode.style.opacity="100%";break;
                            case 2:document.getElementById('information3').parentNode.style.opacity="100%";break;
                        };
                    };
                }else{
                    if(light[storage[0]]===undefined){
                        localStorage.setItem('storage',JSON.stringify(["All"]))
                        wordhome=[];
                        var light=JSON.parse(localStorage.getItem('lightner'));
                        var w=0;
                        for(var i=0; i<light.length; ++i){
                            var child=light[i];
                            if(child.length==1){continue;
                            }else{w+=1;};
                        }
                        if(w==0){document.getElementById('calame').innerHTML="خالی";
                        }else{
                            for(var i=0; i<light.length; ++i){
                                var e = light[i];
                                for(var u=1; u<e.length; ++u){
                                    var f=e[u];
                                    wordhome.push(f);
                                };
                            };
                            var num=wordhome.length;
                            var ran=Math.floor(Math.random()*num);
                            document.getElementById('calame').innerHTML=wordhome[ran][2];
                            wordprac=wordhome[ran][1];
                            if(localStorage.getItem('speekword')=="1"){speed();};
                            
                            var light=JSON.parse(localStorage.getItem('lightner'));
                            var num;
                            for(let i=0; i<light.length; ++i){
                                var child=light[i];
                                for(let u=1; u<light[i].length; ++u){if(wordprac==child[u][1]){num=i;};};
                            };
                            let ctg=light[num];
                            var wordnumber;
                            for(let u=1; u<ctg.length; ++u){if(wordprac==ctg[u][1]){wordnumber=u;};};
                            let main = ctg[wordnumber][5];
                            document.getElementById('information1').parentNode.style.opacity="30%";
                            document.getElementById('information2').parentNode.style.opacity="30%";
                            document.getElementById('information3').parentNode.style.opacity="30%";
                            switch(main){
                                case 0:document.getElementById('information1').parentNode.style.opacity="100%";break;
                                case 1:document.getElementById('information2').parentNode.style.opacity="100%";break;
                                case 2:document.getElementById('information3').parentNode.style.opacity="100%";break;
                            };
                        };
                    }else{
                        wordhome=[];
                        var light=JSON.parse(localStorage.getItem('lightner'));
                        var e=light[storage[0]];
                        for(var u=1; u<e.length; ++u){
                            var f=e[u];
                            wordhome.push(f);
                        };
                        if(wordhome.length==0){
                            document.getElementById('calame').innerHTML="خالی";
                            localStorage.setItem('speekword','0')
                        }else if(localStorage.getItem('lightner')==="[]"){document.getElementById('calame').innerHTML="خالی";
                        }else{
                            var num=wordhome.length;
                            var ran=Math.floor(Math.random()*num);
                            document.getElementById('calame').innerHTML=wordhome[ran][2];
                            wordprac=wordhome[ran][1];
                            if(localStorage.getItem('speekword')=="1"){speed();};
            
                            var light=JSON.parse(localStorage.getItem('lightner'));
                            var num;
                            for(let i=0; i<light.length; ++i){
                                var child=light[i];
                                for(let u=1; u<light[i].length; ++u){if(wordprac==child[u][1]){num=i;};};
                            };
                            let ctg=light[num];
                            var wordnumber;
                            for(let u=1; u<ctg.length; ++u){if(wordprac==ctg[u][0]){wordnumber=u;};};
                            let main = ctg[wordnumber][5];
                            document.getElementById('information1').parentNode.style.opacity="30%";
                            document.getElementById('information2').parentNode.style.opacity="30%";
                            document.getElementById('information3').parentNode.style.opacity="30%";
                            switch(main){
                                case 0:document.getElementById('information1').parentNode.style.opacity="100%";break;
                                case 1:document.getElementById('information2').parentNode.style.opacity="100%";break;
                                case 2:document.getElementById('information3').parentNode.style.opacity="100%";break;
                            };
                        };
                    };
                };
            };
            document.getElementById('qoestion').innerHTML="?";
            xy();
        };
        number();
    }else if(localStorage.getItem('choosEtfAndFte')=='etf'){home1()};
};

function number(){
    if(wordhome!=undefined){
        let in1=0;
        let in2=0;
        let in3=0;
        if(localStorage.getItem('choosEtfAndFte')=='fte'){
            for(var i=0; i<wordhome.length; ++i){
                if(wordhome[i][5]==0){
                    in1+=1;
                }else if(wordhome[i][5]==1){
                    in2+=1;
                }else if(wordhome[i][5]==2){
                    in3+=1;
                };
            };
        }else if(localStorage.getItem('choosEtfAndFte')=='etf'){
            for(var i=0; i<wordhome.length; ++i){
                if(wordhome[i][4]==0){
                    in1+=1;
                }else if(wordhome[i][4]==1){
                    in2+=1;
                }else if(wordhome[i][4]==2){
                    in3+=1;
                };
            };
        };
        document.getElementById('information1').innerHTML=in1;
        document.getElementById('information2').innerHTML=in2;
        document.getElementById('information3').innerHTML=in3;
    }else{
        document.getElementById('information1').innerHTML=0;
        document.getElementById('information2').innerHTML=0;
        document.getElementById('information3').innerHTML=0;
    };
};

function hidden(){
    document.body.removeChild(document.getElementById('blur'));
    document.body.removeChild(document.getElementById('addwindow'));
    document.getElementById('tit').style.display="none";
    home();
};

function hidden1(){
    document.body.removeChild(document.getElementById('blur'));
    document.body.removeChild(document.getElementById('addwindow1'));
    document.getElementById('tit').style.display="none";
    home();
};

function colorLoading(){
    var x = localStorage.getItem('color');
    document.getElementById('button01').childNodes[0].src="./img/ch-w.png";
    document.getElementById('button02').childNodes[0].src="./img/d-b.png";
    document.getElementById('button03').childNodes[0].src="./img/chct-w.png";
    document.getElementById('button04').childNodes[0].src="./img/chd.png";
    document.getElementById('button05').childNodes[0].src="./img/st.b.png";
    document.getElementById('Practice').style.backgroundColor="rgb(0 0 0 / 74%)";
    document.getElementById('Practice').style.borderRadius="20px";
    document.getElementById('Practice').style.color="#fff";
    if(x=="white"){
        document.body.style.color="#111";
        document.getElementById('btnI1').src="./img/close.b.png";
        document.getElementById('btnI2').src="./img/again.b.png";
        document.getElementById('btnI3').src="./img/true.b.png";
        document.getElementById('words').src="./img/w.b.png";
        document.getElementById('Settings').src="./img/m-b.png";
        document.getElementById('mororimg').src="./img/h.b.png";
        document.getElementById('addligthimg').src="./img/a.b.png";
        document.getElementById('dailyWorkoutimg').src="./img/dw.b.png";
        document.getElementById('dictunary').src="./img/icons8-language-exchange-66.png";
    }else{
        document.body.style.color="#fff";
        document.getElementById('btnI1').src="./img/close.w.png";
        document.getElementById('btnI2').src="./img/again.w.png";
        document.getElementById('btnI3').src="./img/true.w.png";
        document.getElementById('words').src="./img/w.w.png";
        document.getElementById('Settings').src="./img/m-w.png";
        document.getElementById('mororimg').src="./img/h.w.png";
        document.getElementById('addligthimg').src="./img/a.w.png";
        document.getElementById('dailyWorkoutimg').src="./img/dw.w.png";
        document.getElementById('dictunary').src="./img/icons8-language-exchange-66 (1).png";
    };

    var color = document.querySelectorAll('.color');
    var color1 = document.querySelectorAll('.color1');

    if(localStorage.getItem('background')===null){
        document.body.style.backgroundImage="url('./img/1.jpg')";
        localStorage.setItem('background',1)
    }else{
        if(localStorage.getItem('background')==1){
            document.body.style.backgroundImage="url('./img/1.jpg')";
        };
        if(localStorage.getItem('background')==2){
            document.body.style.backgroundImage="url('./img/2.jpg')";
        };
        if(localStorage.getItem('background')==3){
            document.body.style.backgroundImage="url('./img/3.jpg')";
        };
        if(localStorage.getItem('background')==4){
            document.body.style.backgroundImage="url('./img/4.jpg')";
        };
    };

    switch(x){
        case "dark":
            for(var i=0; i<color.length; ++i){color[i].style.backgroundColor="rgb(76 76 76)";color[i].style.color="#fff";};
            for(var i=0; i<color1.length; ++i){color1[i].style.backgroundColor="rgb(76 76 76)";color1[i].style.color="#fff";};
        break;

        case "blue":
            for(var i=0; i<color.length; ++i){color[i].style.backgroundColor="rgb(43 83 167)";color[i].style.color="#fff";};
            for(var i=0; i<color1.length; ++i){color1[i].style.backgroundColor="rgb(43 83 167)";color1[i].style.color="#fff";};
        break;

        case "green":
            for(var i=0; i<color.length; ++i){color[i].style.backgroundColor="rgb(33 165 59)";color[i].style.color="#fff";};
            for(var i=0; i<color1.length; ++i){color1[i].style.backgroundColor="rgb(33 165 59)";color1[i].style.color="#fff";};
        break;

        case "white":
            for(var i=0; i<color.length; ++i){color[i].style.backgroundColor="rgb(197 197 197)";color[i].style.color="#111";};
            for(var i=0; i<color1.length; ++i){color1[i].style.backgroundColor="rgb(197 197 197)";color1[i].style.color="#111";};
        break;

        case "red":
            for(var i=0; i<color.length; ++i){color[i].style.backgroundColor="rgb(151 103 0)";color[i].style.color="#fff";};
            for(var i=0; i<color1.length; ++i){color1[i].style.backgroundColor="rgb(151 103 0)";color1[i].style.color="#fff";};
        break;
    };
};

function widthElement(a,b){
    if (window.innerWidth<"560") {
        return(window.innerWidth-eval(a)-30+"px")
    }else{
        return(b+"px")
    }
}

//صفحه اصلی..........................................................................................

//منو
function generelmuno(){
    document.getElementById('generelmuno').style.display="inline-block";
    document.getElementById('bl').style.display="block";
    if(localStorage.getItem('speekword')===null){
        document.getElementById('speekato').checked="checked";
    }else{
        if(localStorage.getItem('speekword')=="0"){
            document.getElementById('speekato').checked="";
        }else{
            document.getElementById('speekato').checked="checked";
        };
    };
    document.getElementById('speedspeeck').value=eval(JSON.parse(localStorage.getItem('speedspeeck')));
    document.getElementById('speedspeecks').innerHTML="سرعت تلفظ: "+eval(JSON.parse(localStorage.getItem('speedspeeck')))+" برابر";
};

function backup(){
    document.getElementById('generelmuno').style.display="none";
    document.getElementById('bl').style.display="none";
    var light=JSON.parse(localStorage.getItem('lightner'));
    var blur = document.createElement('div');
    blur.id="blur";
    blur.onclick = function(){hidden1()};

    var addwindow = document.createElement('div');
    addwindow.className="color";
    addwindow.id="addwindow1";
    color(addwindow);
    addwindow.innerHTML="متن به صورت فایل txt دانلود میشود."+"<br>"+"می توانید در صورت لزوم از آن استفاده کنید."+"<br>";

    var bot = document.createElement('botton');
    bot.style.width="25%";
    bot.style.textAlign="center";
    bot.style.padding="2px 7px";
    bot.className="buttons";
    bot.innerHTML="دانلود";
    bot.onclick=function(){hidden1();
        if(light!==null){
            var bakligth=localStorage.getItem('lightner');
            var a = document.createElement("a");
            a.href = window.URL.createObjectURL(new Blob([bakligth], {type: "text/plain"}));
            a.download = "لایتنر.txt";
            a.click(); 
        }else{
            alerts("کلمه ای وجود ندارد.","2");
        };
    }
    color(bot);

    let div1=document.createElement('div');
    div1.style.width="100%";
    div1.style.justifyContent="left";
    div1.style.display="inline-flex";
    div1.appendChild(bot);
   
    document.body.appendChild(blur);
    document.body.appendChild(addwindow);
    document.getElementById('addwindow1').appendChild(div1);
};

function CLR(){
    document.getElementById('generelmuno').style.display="none";
    document.getElementById('bl').style.display="none";
    var blur = document.createElement('div');
    blur.id="blur";
    blur.onclick = function(){hidden1()};

    var addwindow = document.createElement('div');
    addwindow.className="color";
    addwindow.id="addwindow1";
    color(addwindow);
    addwindow.innerHTML="آیا مطمئن هستید که می‌خواهید برنامه را بازنشانی کنید؟";

    var Bottt = document.createElement('botton');
    Bottt.style.fontSize="20px";
    Bottt.style.padding="2px 7px";
    Bottt.style.textAlign="center";
    Bottt.style.cursor="pointer";
    Bottt.innerHTML="انصراف";
    Bottt.onclick=function(){hidden1()}
    color(Bottt)
    Bottt.className="br-r";


    var Bott = document.createElement('botton');
    Bott.style.fontSize="20px";
    Bott.style.textAlign="center";
    Bott.style.padding="2px 7px";
    Bott.style.cursor="pointer";
    Bott.innerHTML="بازنشانی";
    Bott.onclick=function(){
        localStorage.clear();hidden1();localStorage.setItem('color','dark');colorLoading();alerts("بازنشانی شد.","1");lo();
    };
    color(Bott);
    Bott.style.backgroundColor="red";
    Bott.className="br-l";
    
    let div1=document.createElement('div');
    div1.style.width="100%";
    div1.style.justifyContent="left";
    div1.style.display="inline-flex";
    div1.appendChild(Bottt);
    div1.appendChild(Bott);

    document.body.appendChild(blur);
    document.body.appendChild(addwindow);
    document.getElementById('addwindow1').appendChild(div1);
};

function dictunary(){
    window.open("./Dictionary/index.html", "", "width=500,height=600", "_blanck")
};

function sw(){
    document.getElementById('generelmuno').style.display="none"; 
    document.getElementById('bl').style.display="none";   
    var blur = document.createElement('div');
    blur.id="blur";
    blur.onclick = function(){hidden1()};

    var addwindow = document.createElement('div');
    addwindow.className="color";
    addwindow.id="addwindow1";
    color(addwindow);
    addwindow.innerHTML="فایل پشتیبانی شده را انتخاب کنید.";

    var tArea = document.createElement('label');
    tArea.style.fontSize="15px";
    tArea.className="color labels w-100";
    tArea.for="file";
    tArea.innerHTML=" آپلود فایل txt <input type='file' id='inputfiles' size='60' >";
    tArea.type="file";
    color(tArea);
    
    document.body.appendChild(blur);
    document.body.appendChild(addwindow);
    document.getElementById('addwindow1').appendChild(tArea);

    document.getElementById('inputfiles').addEventListener('change', function() {
        var fr=new FileReader();
        fr.onload=function(){localStorage.setItem("lightner",fr.result);};
        fr.readAsText(this.files[0]);
    })

    var Bott = document.createElement('botton');
    Bott.style.borderRadius="15px";
    Bott.style.fontSize="20px";
    Bott.style.textAlign="center";
    Bott.style.padding="2px 7px";
    Bott.style.cursor="pointer";
    Bott.innerHTML="اعمال کردن";
    Bott.onclick=function(){
        alerts("کلمه ها وارد لایتنر شد.","1");
        hidden1();
    };
    color(Bott);

    let div1=document.createElement('div');
    div1.style.width="100%";
    div1.style.justifyContent="left";
    div1.style.display="inline-flex";
    div1.appendChild(Bott);
    document.getElementById('addwindow1').appendChild(div1);
};

function category(){
    document.getElementById('generelmuno').style.display="none";
    document.getElementById('bl').style.display="none";
    var blur = document.createElement('div');
    blur.id="blur";
    blur.onclick = function(){hidden1()};
    
    var addwindow = document.createElement('div');
    addwindow.className="color";
    addwindow.id="addwindow1";
    addwindow.innerHTML="یک دسته را انتخاب کنید.(برای نمایش دادن آن دسته برای تمرین)";
    color(addwindow);
    
    var listgrop = document.createElement('select');
    listgrop.className=" w-100";
    listgrop.style.borderRadius="15px";
    listgrop.style.marginTop="10px";
    listgrop.id="listgrops";

    let Fte = document.createElement('button');
    Fte.innerHTML="فارسی به انگلیسی";
    Fte.style.marginTop="10px";
    color(Fte);
    Fte.onclick=function(){
        localStorage.setItem('choosEtfAndFte','fte');
        Fte.style.backgroundColor="rgb(125 125 125)";
        color(Etf);
    }
    Fte.className="buttons w-50 br-l";

    let Etf = document.createElement('button');
    Etf.innerHTML="انگلیسی به فارسی";
    color(Etf);
    Etf.onclick=function(){
        localStorage.setItem('choosEtfAndFte','etf');
        Etf.style.backgroundColor="rgb(125 125 125)";
        color(Fte);
    };
    Etf.className="buttons w-50 br-r";

    if(localStorage.getItem('choosEtfAndFte')=='fte'){
        Fte.style.backgroundColor="rgb(125 125 125)";
    }else if(localStorage.getItem('choosEtfAndFte')=='etf'){
        Etf.style.backgroundColor="rgb(125 125 125)";
    };

    
    if(localStorage.getItem('lightner')===null){
        listcat=[];
        var optLisst = document.createElement('option');
        optLisst.innerHTML="همه لغات";
        optLisst.selected="selected";
        optLisst.value="All";
        listgrop.appendChild(optLisst);
    }else{
        listgrop.innerHTML="<option selected value='All'>همه لغات</option>";
        let listcat=JSON.parse(localStorage.getItem('lightner'));
        let listLength=listcat.length;
        for(var i = 0; i<listLength; ++i){
            var child = listcat[i];
            var optLisst = document.createElement('option');
            optLisst.innerHTML=child[0];
            optLisst.value=i;
            optLisst.className="wordOption";
            listgrop.appendChild(optLisst);
        };
        if(localStorage.getItem('storage')!==null){
            var storage=JSON.parse(localStorage.getItem('storage'));
            let listcatt=JSON.parse(localStorage.getItem('lightner'));
            var j=storage[0];
            for(var i=0; i<=listcatt.length; ++i){
                if(listgrop.children[i].value==j){
                    listgrop.children[i].selected="selected";
                };
            };
        };
    };
    
    var enselaf = document.createElement('botton');
    enselaf.style.textAlign="center";
    enselaf.style.padding="2px 7px";
    enselaf.innerHTML="انصراف";
    enselaf.onclick=function(){hidden1()};
    color(enselaf);
    enselaf.className="buttons br-r";
    
    var addc = document.createElement('botton');
    addc.style.textAlign="center";
    addc.style.padding="2px 7px";
    addc.innerHTML="اعمال کردن";
    addc.onclick=function(){addw(this)};
    color(addc);
    addc.className="buttons br-l";
    
    let div1=document.createElement('div');
    div1.style.width="100%";
    div1.style.justifyContent="left";
    div1.style.display="inline-flex";
    div1.style.marginTop="10px";
    div1.appendChild(enselaf);
    div1.appendChild(addc);

    document.body.appendChild(blur);
    document.body.appendChild(addwindow);
    document.getElementById('addwindow1').appendChild(listgrop);
    document.getElementById('addwindow1').appendChild(Etf);
    document.getElementById('addwindow1').appendChild(Fte);
    document.getElementById('addwindow1').appendChild(div1);

    if(localStorage.getItem('font')===null){
        listgrop.style.fontFamily="iran";
        Fte.style.fontFamily="iran";
        Etf.style.fontFamily="iran";
        localStorage.setItem('font','1');
        document.body.style.fontFamily="iran";
    }else{
        switch(eval(localStorage.getItem('font'))){
            case 1:document.body.style.fontFamily="iran";
            Fte.style.fontFamily="iran";
            Etf.style.fontFamily="iran";
            listgrop.style.fontFamily="iran";
            break;
            case 2:document.body.style.fontFamily="mikh";
            Fte.style.fontFamily="mikh";
            Etf.style.fontFamily="mikh";
            listgrop.style.fontFamily="mikh";
            break;
        };
    };

    function addw(a){
        if(a.parentNode.parentNode.childNodes[1].value=="All"){
            if(localStorage.getItem('storage')===null){
                storage=[];
                storage.push("All");
            }else{
                storage=JSON.parse(localStorage.getItem('storage'));
                storage[0]="All";
            };
            localStorage.setItem('storage',JSON.stringify(storage));
            alerts("انجام شد.",'1');
            hidden1();
            document.getElementById('qoestion').innerHTML="?";
            xy();
        }else{
            var inputCategory=a.parentNode.parentNode.childNodes[1].value;
            var light = JSON.parse(localStorage.getItem('lightner'));
            var lengtho = document.getElementsByClassName('wordOption');
            var t =lengtho[inputCategory];
            var numberDaste;
            for(var i=0; i<light.length; ++i){
                var parent = light[i];
                if(parent[0]==t.textContent){
                    numberDaste=i;
                };
            };
            var storage;
            if(localStorage.getItem('storage')===null){
                storage=[];
                storage.push(numberDaste);
            }else{
                storage=JSON.parse(localStorage.getItem('storage'));
                storage[0]=numberDaste;
            };
            localStorage.setItem('storage',JSON.stringify(storage));
            alerts("انجام شد.",'1');
            hidden1();
            document.getElementById('qoestion').innerHTML="?";
            xy();
        };
    };
};

function learn(){
    document.getElementById('generelmuno').style.display="none";
    document.getElementById('bl').style.display="none";
    var blur = document.createElement('div');
    blur.id="blur";
    blur.onclick = function(){
        document.body.removeChild(document.getElementById('blur'));
        document.body.removeChild(document.getElementById('addwindow1'));
    };

    var addwindow = document.createElement('div');
    addwindow.id="addwindow1";
    addwindow.style.padding="0";
    addwindow.style.borderRadius="0";
    addwindow.innerHTML='<style>.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/iLT0g/vt/frame" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>';
    addwindow.style.border="0px solid #111 !important";
    if(window.innerWidth<800){
        addwindow.style.width="100%";
    }else{
        addwindow.style.width="800px";
    };

    document.body.appendChild(blur);
    document.body.appendChild(addwindow);
};
//منو

function addligth(){
    document.getElementById('tit').style.display="block";
    document.getElementById('tit').innerHTML="اضافه کردن";
    
    var blur = document.createElement('div');
    blur.id="blur";
    blur.onclick = function(){hidden()};
    
    var addwindow = document.createElement('div');
    addwindow.className="color scrollbar";
    addwindow.id="addwindow";
    addwindow.onkeydown=function(){onkey(event)};
    addwindow.style.height=window.innerHeight-60+"px";
    addwindow.innerHTML='<button id="addct" onclick="addct()" class="br-r buttons w-50" style="color:#fff;">اضافه کردن دسته</button><button id="addwr" class="br-l buttons w-50" style="color:#fff;">اضافه کردن لغت</button><div id="chosecatorword" style="text-align:right !important;"></div><div id="addwordtab" style="text-align:right !important;"></div>';
    color(addwindow);

    var close=document.createElement('img');
    close.src="./img/c.png";
    close.style.width="40px";
    close.style.height="40px";
    close.style.position="absolute";
    close.style.top="0";
    close.style.right="0";
    close.style.cursor="pointer";
    close.onclick=function(){hidden()};
    var blur = document.createElement('div');
    blur.id="blur";
    blur.onclick = function(){hidden()};

    document.body.appendChild(blur);
    document.body.appendChild(addwindow);
    document.getElementById('addwindow').appendChild(close);
    
    document.getElementById('addct').onclick=function(){addct()};
    document.getElementById('addwr').onclick=function(){addwr()};
    
    addct()

    function addCategory(){
        var text = document.createElement('p');
        text.innerHTML="نامی را برای دسته جدید وارد کنید:";
        text.style.fontSize="18px";
        text.style.padding="10px 0 0 0";
        
        var nameInputCategory= document.createElement('input');
        nameInputCategory.type="text";
        nameInputCategory.style.marginBottom="10px";
        nameInputCategory.id="inputs";
        nameInputCategory.className="inputs w-100";
        nameInputCategory.placeholder="نامی را برای دسته جدید وارد کنید";
        
        var imgplus = document.createElement('img');
        imgplus.style.width="30px";
        imgplus.style.cursor="pointer";
        imgplus.style.transform="translate(0px, 10px)";
        if(localStorage.getItem('color')=="white"){
            imgplus.src="./img/a.b.png";
        }else{
            imgplus.src="./img/a.w.png";
        };
        
        var addc = document.createElement('botton');
        addc.style.textAlign="center";
        addc.style.padding="1px 10px";
        addc.style.display="inline-block";
        addc.style.marginBottom="10px";
        addc.className="buttons w-100";
        addc.innerHTML="اضافه کردن دسته";
        addc.appendChild(imgplus);
        addc.onclick=function(){add(this)};
        color(addc);
        
        var numberword=0;
        var ligth = JSON.parse(localStorage.getItem('lightner'));
        if(localStorage.getItem('lightner')===null){
            numberword=0;
        }else{
            for(let i=0; i<ligth.length; ++i){
                let child=ligth[i];
                for(let u=1; u<child.length; ++u){
                    numberword+=1;
                };
            };
        };
    
        var list = document.createElement('div');
        list.style.height=window.innerHeight-360+"px";
        list.style.marginBottom="10px";
        list.style.overflow="auto";
        list.style.borderRadius="15px";
        list.style.padding="10px 20px";
        list.id="listgropp";
        list.className="scrollbar w-100";
        list.innerHTML="تعداد کل لغات: "+numberword;
        color(list);

        document.getElementById('chosecatorword').appendChild(text);
        document.getElementById('chosecatorword').appendChild(nameInputCategory);
        document.getElementById('chosecatorword').appendChild(addc);
        document.getElementById('chosecatorword').appendChild(list);
        
        if(localStorage.getItem('lightner')!==null){
            listcategorystorge();
        }
    
        if(localStorage.getItem('font')===null){
            nameInputCategory.style.fontFamily="iran";
            localStorage.setItem('font','1');
            document.body.style.fontFamily="iran";
        }else{
            var botff=document.getElementsByTagName('button');
            switch(eval(localStorage.getItem('font'))){
                case 1:document.body.style.fontFamily="iran";
                nameInputCategory.style.fontFamily="iran";
                break;
                case 2:document.body.style.fontFamily="mikh";
                nameInputCategory.style.fontFamily="mikh";
                break;
            };
        };
    };  
    function add(){
        let light;
        let lightLength;
        var input = document.getElementById('inputs').value;
        if(input==""){
            alerts("نامی را وارد نکردید!!",'2');
        }else{
            if(localStorage.getItem('lightner')===null){
                document.getElementById('listgropp').style.display="block";
                light=[];
                let chil = [];
                chil.push(input);
                light.push(chil);
                localStorage.setItem('lightner',JSON.stringify(light));
                var table=document.createElement('table');
                table.style.width="100%";
                var tr=document.createElement('tr');
                tr.style.borderBottom="1px solid #111";
                var tdname=document.createElement('td');
                tdname.innerHTML=input;

                var tdnumber=document.createElement('td');
                tdnumber.innerHTML=0;
                tdnumber.style.width="45px";

                var tdedit=document.createElement('td');
                tdedit.style.width="30px";
                var imge = document.createElement('img');
                imge.style.width="100%";
                imge.style.cursor="pointer";
                imge.style.transform="translate(0px, 5px)";
                if(localStorage.getItem('color')=="white"){
                    imge.src="./img/e-b.png";
                }else{
                    imge.src="./img/e-w.png";
                };
                imge.onclick=function(){editgrop(this)};
                tdedit.appendChild(imge);
                
                var tddelet=document.createElement('td');
                tddelet.style.width="30px";
                var imgd = document.createElement('img');
                imgd.style.width="100%";
                imgd.style.cursor="pointer";
                imgd.style.transform="translate(0px, 5px)";
                if(localStorage.getItem('color')=="white"){
                    imgd.src="./img/d-b.png";
                }else{
                    imgd.src="./img/d-w.png";
                };
                imgd.onclick=function(){deletgrop(this)};
                tddelet.appendChild(imgd);

                document.getElementById('listgropp').appendChild(table);
                table.appendChild(tr);
                tr.appendChild(tdname);
                tr.appendChild(tdnumber);
                tr.appendChild(tddelet);
                tr.appendChild(tdedit);
                alerts("دسته اضافه شد.","1");
                document.getElementById('inputs').value="";
            }else{
                light=JSON.parse(localStorage.getItem('lightner'));
                lightLength=light.length;
                var l = 0;
                for(var i=0; i<lightLength; ++i){
                    let x = light[i];
                    if(x[0]==input){
                        alerts("نام دسته تکراری است!!!","2");
                        break;
                    }else{
                        ++l;
                    };
                };
                if(l==lightLength){
                    document.getElementById('listgropp').style.display="block";
                    let chil = [];
                    chil.push(input);
                    light.push(chil);
                    localStorage.setItem('lightner',JSON.stringify(light));
                    var table=document.createElement('table');
                    table.style.width="100%";
                    var tr=document.createElement('tr');
                    tr.style.borderBottom="1px solid #111";
                    var tdname=document.createElement('td');
                    tdname.innerHTML=input;

                    var tdnumber=document.createElement('td');
                    tdnumber.innerHTML=0;
                    tdnumber.style.width="45px";

                    var tdedit=document.createElement('td');
                    tdedit.style.width="30px";
                    var imge = document.createElement('img');
                    imge.style.width="100%";
                    imge.style.cursor="pointer";
                    imge.style.transform="translate(0px, 5px)";
                    if(localStorage.getItem('color')=="white"){
                        imge.src="./img/e-b.png";
                    }else{
                        imge.src="./img/e-w.png";
                    };
                    imge.onclick=function(){editgrop(this)};
                    tdedit.appendChild(imge);
                    
                    var tddelet=document.createElement('td');
                    tddelet.style.width="30px";
                    var imgd = document.createElement('img');
                    imgd.style.width="100%";
                    imgd.style.cursor="pointer";
                    imgd.style.transform="translate(0px, 5px)";
                    if(localStorage.getItem('color')=="white"){
                        imgd.src="./img/d-b.png";
                    }else{
                        imgd.src="./img/d-w.png";
                    };
                    imgd.onclick=function(){deletgrop(this)};
                    tddelet.appendChild(imgd);

                    document.getElementById('listgropp').appendChild(table);
                    table.appendChild(tr);
                    tr.appendChild(tdname);
                    tr.appendChild(tdnumber);
                    tr.appendChild(tddelet);
                    tr.appendChild(tdedit);
                    alerts("دسته اضافه شد.","1");
                    document.getElementById('inputs').value="";
                };
            };
        };
    };
    function editgrop(a){
        var blur1 = document.createElement('div');
            blur1.id="blur1";
            blur1.onclick = function(){
                document.body.removeChild(document.getElementById('blur1'));
                document.body.removeChild(document.getElementById('addwindow10'));
            };
            
            var title = document.createElement('span');
            title.id="title";
            title.innerHTML="ویرایش";

            var addwindow1 = document.createElement('div');
            addwindow1.className="color";
            addwindow1.id="addwindow10";
            color(addwindow1);

            var input = document.createElement('input');
            input.style.marginBottom="10px";
            input.className="inputs";
            input.value=a.parentNode.parentNode.childNodes[0].textContent;

            var bot = document.createElement('botton');
            bot.style.textAlign="center";
            bot.style.padding="2px 7px";
            bot.innerHTML="انصراف";
            bot.onclick=function(){
                document.body.removeChild(document.getElementById('blur1'));
                document.body.removeChild(document.getElementById('addwindow10'));
            };
            color(bot);
            bot.className="buttons br-r";

            var bot2 = document.createElement('botton');
            bot2.style.textAlign="center";
            bot2.style.padding="2px 7px";
            bot2.innerHTML="ویرایش";
            bot2.onclick=function(){
                light=JSON.parse(localStorage.getItem('lightner'));
                lightLength=light.length;
                var l = 0;
                for(var i=0; i<lightLength; ++i){
                    let x = light[i];
                    if(x[0]==input.value){
                        if(a.parentNode.parentNode.childNodes[0].textContent!=input.value){
                            alerts("این نام وجود دارد.","2");
                        }else{
                            document.body.removeChild(document.getElementById('blur1'));
                            document.body.removeChild(document.getElementById('addwindow10'));
                        };
                    }else{
                        ++l;
                    };
                }
                if(l==lightLength){
                    var o;
                    for(var i=0; i<lightLength; ++i){
                        var child=light[i];
                        if(child[0]==a.parentNode.parentNode.childNodes[0].textContent){
                            o=i;
                        };
                    };
                    var child=light[o];
                    child[0]=input.value;
                    a.parentNode.parentNode.childNodes[0].innerHTML=input.value;
                    localStorage.setItem('lightner',JSON.stringify(light));
                    document.body.removeChild(document.getElementById('blur1'));
                    document.body.removeChild(document.getElementById('addwindow10'));
                    alerts("ویرایش شد.","1");
                };
            };
            color(bot2);
            bot2.className="buttons br-l";

            let div1=document.createElement('div');
            div1.style.width="100%";
            div1.style.display="inline-flex";
            div1.style.justifyContent="left";
            div1.appendChild(bot);
            div1.appendChild(bot2);

            document.body.appendChild(blur1);
            document.body.appendChild(addwindow1);
            document.getElementById('addwindow10').appendChild(title);
            document.getElementById('addwindow10').appendChild(input);
            document.getElementById('addwindow10').appendChild(div1);

            if(localStorage.getItem('font')===null){
                input.style.fontFamily="iran";
                localStorage.setItem('font','1');
                document.body.style.fontFamily="iran";
            }else{
                var botff=document.getElementsByTagName('button');
                switch(eval(localStorage.getItem('font'))){
                    case 1:document.body.style.fontFamily="iran";
                    input.style.fontFamily="iran";
                    break;
                    case 2:document.body.style.fontFamily="mikh";
                    input.style.fontFamily="mikh";
                    break;
                };
            };
            input.focus()
    };
    function deletgrop(a){
        var blur1 = document.createElement('div');
        blur1.id="blur1";
        blur1.onclick = function(){
            document.body.removeChild(document.getElementById('blur1'));
            document.body.removeChild(document.getElementById('addwindow1'));
        };
        
        var addwindow1 = document.createElement('div');
        addwindow1.className="color";
        addwindow1.id="addwindow1";
        color(addwindow1);

        var p = document.createElement('p');
        p.innerHTML="از اینکه می خواهید این دسته را پاک کنید مطمئن هستید؟";
        p.style.marginBottom="10px";

        var bot = document.createElement('botton');
        bot.style.padding="3px 15px";
        bot.style.textAlign="center";
        bot.innerHTML="بله";
        bot.onclick=function(){
            document.body.removeChild(document.getElementById('blur1'));
            document.body.removeChild(document.getElementById('addwindow1'));
            light=JSON.parse(localStorage.getItem('lightner'));
            lightLength=light.length;
            for(var i=0; i<lightLength; ++i){
                // console.log(i);
                // console.log(light[i]);
                var childx=light[i];
                if(childx[0]==a.parentNode.parentNode.childNodes[0].textContent){
                    light.splice(i,1);
                    a.parentNode.parentNode.style.display="none";
                    localStorage.setItem('lightner',JSON.stringify(light));
                    alerts("با موفقیت حذف شد","1");
                };
            };
        };
        color(bot);
        bot.style.backgroundColor="red";
        bot.className="buttons br-l";

        var bot1 = document.createElement('botton');
        bot1.style.padding="3px 15px";
        bot1.style.textAlign="center";
        bot1.innerHTML="خیر";
        bot1.onclick=function(){
            document.body.removeChild(document.getElementById('blur1'));
            document.body.removeChild(document.getElementById('addwindow1'));
        };
        color(bot1);
        bot1.className="buttons br-r";

        let div1=document.createElement('div');
        div1.style.width="100%";
        div1.style.display="inline-flex";
        div1.style.justifyContent="left";
        div1.appendChild(bot1);
        div1.appendChild(bot);

        document.body.appendChild(blur1);
        document.body.appendChild(addwindow1);
        document.getElementById('addwindow1').appendChild(p);
        document.getElementById('addwindow1').appendChild(div1);
    };
    function listcategorystorge(){
        light=JSON.parse(localStorage.getItem('lightner'));
        lightLength=light.length;
        for(var i=0; i<lightLength; ++i){
            var e=light[i];
            var table=document.createElement('table');
            table.style.width="100%";
            var tr=document.createElement('tr');
            tr.style.borderBottom="1px solid #111";
            var tdname=document.createElement('td');
            tdname.innerHTML=e[0];

            var tdnumber=document.createElement('td');
            tdnumber.innerHTML=e.length-1;
            tdnumber.style.width="45px";

            var tdedit=document.createElement('td');
            tdedit.style.width="30px";
            var imge = document.createElement('img');
            imge.style.width="100%";
            imge.style.cursor="pointer";
            imge.style.transform="translate(0px, 5px)";
            if(localStorage.getItem('color')=="white"){
                imge.src="./img/e-b.png";
            }else{
                imge.src="./img/e-w.png";
            };
            imge.onclick=function(){editgrop(this)};
            tdedit.appendChild(imge);
            
            var tddelet=document.createElement('td');
            tddelet.style.width="30px";
            var imgd = document.createElement('img');
            imgd.style.width="100%";
            imgd.style.cursor="pointer";
            imgd.style.transform="translate(0px, 5px)";
            if(localStorage.getItem('color')=="white"){
                imgd.src="./img/d-b.png";
            }else{
                imgd.src="./img/d-w.png";
            };
            imgd.onclick=function(){deletgrop(this)};
            tddelet.appendChild(imgd);

            document.getElementById('listgropp').appendChild(table);
            table.appendChild(tr);
            tr.appendChild(tdname);
            tr.appendChild(tdnumber);
            tr.appendChild(tddelet);
            tr.appendChild(tdedit);
        };
    };
    
    
    function addWord(){
        var text = document.createElement('p');
        text.style.fontSize="18px";
        text.style.display="inline-block";
        text.style.padding="5px 0 3px 0";
        text.innerHTML="یک دسته را انتخاب کنید:";
        text.htmlFor="listgrops";
        
        var listgrop = document.createElement('select');
        listgrop.className=" w-100";
        listgrop.id="listgrops";
    
        if(localStorage.getItem('lightner')===null){
            listcat=[];
            var optLisst = document.createElement('option');
            optLisst.innerHTML="اول یک دسته ایجاد کنید";
            optLisst.disabled="disabled";
            listgrop.disabled="disabled";
            optLisst.selected="selected";
            listgrop.appendChild(optLisst);
        }else{
            listgrop.innerHTML="<option disabled selected value='-1'>یک دسته را انتخاب کنید</option>";
            let listcat=JSON.parse(localStorage.getItem('lightner'));
            let listLength=listcat.length;
            for(var i = 0; i<listLength; ++i){
                var child = listcat[i];
                var optLisst = document.createElement('option');
                optLisst.innerHTML=child[0];
                optLisst.value=i;
                optLisst.className="wordOption";
                listgrop.appendChild(optLisst);
            };
        };
    
        var text2 = document.createElement('p');
        text2.style.fontSize="18px";
        text2.style.display="inline-block";
        text2.style.marginTop="5px";
        text2.style.padding="5px 0 3px 0";
        text2.innerHTML="کلمه را وارد کنید:";
        text2.htmlFor="calam";
    
        var nameInputCategory= document.createElement('input');
        nameInputCategory.type="text";
        nameInputCategory.style.textAlign="left";
        nameInputCategory.id="calam";
        nameInputCategory.dir="ltr";
        nameInputCategory.autocomplete="off";
        nameInputCategory.className="inputs w-100";
        nameInputCategory.placeholder="English";
    
        var text3 = document.createElement('p');
        text3.style.fontSize="18px";
        text3.style.display="inline-block";
        text3.style.padding="5px 0 3px 0";
        text3.style.marginTop="5px";
        text3.innerHTML="معنی را وارد کنید:";
        text3.htmlFor="inputcalam";
    
        var inputcalame= document.createElement('input');
        inputcalame.type="text";
        inputcalame.className="inputs w-100";
        inputcalame.id="inputcalam";
        inputcalame.autocomplete="off";
        inputcalame.placeholder="فارسی";
    
        var text4 = document.createElement('p');
        text4.style.fontSize="18px";
        text4.style.padding="5px 0 3px 0";
        text4.style.display="inline-block";
        text4.style.marginTop="5px";
        text4.innerHTML="توضیحات را وارد کنید. (اختیاری)";
        text4.htmlFor="inputtozih";
    
        var inputtozih= document.createElement('textarea');
        inputtozih.style.resize="none";
        inputtozih.style.height=window.innerHeight-570+"px";
        inputtozih.className="inputs w-100 scrollbar";
        inputtozih.id="inputtozih";
        inputtozih.autocomplete="off";
        inputtozih.placeholder="توضیحات (اختیاری)";
        
        var addc = document.createElement('botton');
        addc.style.textAlign="center";
        addc.style.padding="2px 6px";
        addc.innerHTML="اضافه‌کردن";
        addc.id="addword";
        addc.onclick=function(){addw()};
        color(addc);
        addc.className="buttons";
    
        let div1=document.createElement('div');
        div1.style.width="100%";
        div1.style.justifyContent="left";
        div1.style.display="inline-flex";
        div1.style.marginTop="10px";
        div1.appendChild(addc);

        document.getElementById('addwordtab').appendChild(text);
        document.getElementById('addwordtab').appendChild(listgrop);
        document.getElementById('addwordtab').appendChild(text2);
        document.getElementById('addwordtab').appendChild(nameInputCategory);
        document.getElementById('addwordtab').appendChild(text3);
        document.getElementById('addwordtab').appendChild(inputcalame);
        document.getElementById('addwordtab').appendChild(text4);
        document.getElementById('addwordtab').appendChild(inputtozih);
        document.getElementById('addwordtab').appendChild(div1);
        
        if(localStorage.getItem('font')===null){
            listgrop.style.fontFamily="iran";
            nameInputCategory.style.fontFamily="iran";
            inputcalame.style.fontFamily="iran";
            inputtozih.style.fontFamily="iran";
            localStorage.setItem('font','1');
            document.body.style.fontFamily="iran";
        }else{
            switch(eval(localStorage.getItem('font'))){
                case 1:document.body.style.fontFamily="iran";
                listgrop.style.fontFamily="iran";
                nameInputCategory.style.fontFamily="iran";
                inputcalame.style.fontFamily="iran";
                inputtozih.style.fontFamily="iran";
                break;
                case 2:document.body.style.fontFamily="mikh";
                listgrop.style.fontFamily="mikh";
                nameInputCategory.style.fontFamily="mikh";
                inputcalame.style.fontFamily="mikh";
                inputtozih.style.fontFamily="mikh";
                break;
            };
        };
        nameInputCategory.focus();
    };
    function addw(){
        let a=document.getElementById('addword');
        if(a.parentNode.parentNode.childNodes[1].value== -1){
            alerts("دسته‌ای را انتخاب کنید","2");
        }else{
            var inputCategory=a.parentNode.parentNode.childNodes[1].value;
            var inputWord=a.parentNode.parentNode.childNodes[3].value;
            var inputMain=a.parentNode.parentNode.childNodes[5].value;
            var inputtozih=a.parentNode.parentNode.childNodes[7].value;
            var light = JSON.parse(localStorage.getItem('lightner'));
            var lengtho = document.getElementsByClassName('wordOption');
            var t =lengtho[inputCategory];
            var numberDaste;
            for(var i=0; i<light.length; ++i){
                var parent = light[i];
                if(parent[0]==t.textContent){
                    numberDaste=i;
                };
            };
            var q=0;
            var qq=0;
            if(a.parentNode.parentNode.childNodes[3].value==""){
                alerts("کلمه‌ را وارد کنید","2");
                nameInputCategory.focus();
            }else if(a.parentNode.parentNode.childNodes[5].value==""){
                alerts("معنی کلمه‌ را وارد کنید","2");
                inputcalame.focus();
            }else{
                var idnumber=10000;
                light=JSON.parse(localStorage.getItem('lightner'));
                for(var i=0; i<light.length; ++i){
                    for(var f=1; f<light[i].length; ++f){
                        if(idnumber<light[i][f][0]){
                            idnumber=light[i][f][0]
                        };
                    };                    
                };
                var wordingroup=[idnumber+1 , inputWord , inputMain , inputtozih , 0 , 0 , (new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()+12600000)/86400000 , 1 , (new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()+12600000)/86400000 , 1 , false];
                light[numberDaste].push(wordingroup);
                localStorage.setItem('lightner',JSON.stringify(light));
                alerts("کلمه با موفقیت اضافه شد.","1");
                a.parentNode.parentNode.childNodes[3].value="";
                a.parentNode.parentNode.childNodes[5].value="";
                a.parentNode.parentNode.childNodes[7].value="";
                a.parentNode.parentNode.childNodes[3].focus();
            };
        };
    };

    function addct(){
        document.getElementById('chosecatorword').innerHTML="";
        document.getElementById('addct').style.backgroundColor="rgb(0,0,0,1)";
        document.getElementById('addwr').style.backgroundColor="rgb(0,0,0,0.4)";
        addCategory()
        document.getElementById('chosecatorword').style.display="block";
        document.getElementById('addwordtab').style.display="none";
    };

    function addwr(){
        document.getElementById('addwordtab').innerHTML="";
        document.getElementById('addwr').style.backgroundColor="rgb(0,0,0,1)";
        document.getElementById('addct').style.backgroundColor="rgb(0,0,0,0.4)";
        addWord()
        document.getElementById('chosecatorword').style.display="none";
        document.getElementById('addwordtab').style.display="block";
    };

    if(localStorage.getItem('font')===null){
        listgrop.style.fontFamily="iran";
        localStorage.setItem('font','1');
        document.getElementById('addct').style.fontFamily="iran";
        document.getElementById('addwr').style.fontFamily="iran";
    }else{
        switch(eval(localStorage.getItem('font'))){
            case 1:document.getElementById('addct').style.fontFamily="iran";
            case 1:document.getElementById('addwr').style.fontFamily="iran";
            break;
            case 2:document.getElementById('addct').style.fontFamily="mikh";
            case 2:document.getElementById('addwr').style.fontFamily="mikh";
            break;
        };
    };

    function onkey(e){
        if(document.getElementById('addwordtab').style.display=="block"){
            if(e.keyCode==13){
                let a=document.getElementById('addword');
                if(a.parentNode.parentNode.childNodes[3].value==""){
                    a.parentNode.parentNode.childNodes[3].focus();
                }else if(a.parentNode.parentNode.childNodes[5].value==""){
                    a.parentNode.parentNode.childNodes[5].focus();
                }else{
                    addw();
                    a.parentNode.parentNode.childNodes[3].focus();
                };
            };
        }else if(document.getElementById('chosecatorword').style.display=="block"){
            if(e.keyCode==13){
                add();
            };
        }
    };
};

function speed(){
    var word =document.getElementById('calame');
    var msg = new SpeechSynthesisUtterance();
    msg.text = word.textContent;
    msg.rate=eval(JSON.parse(localStorage.getItem('speedspeeck')));
    window.speechSynthesis.speak(msg);
};

function moroor(){
    if(localStorage.getItem('lightner')===null){
        alerts("کلمه‌ای وجود ندارد!","0");
    }else{
        var mororArray=[];
        var mororarray=[];
        document.getElementById('tit').style.display="block";
        document.getElementById('tit').innerHTML="مرور";
        
        var close=document.createElement('img');
        close.src="./img/c.png";
        close.style.width="40px";
        close.style.height="40px";
        close.style.position="absolute";
        close.style.top="0";
        close.style.right="0";
        close.style.cursor="pointer";
        close.onclick=function(){hidden()};
        var blur = document.createElement('div');
        blur.id="blur";
        blur.onclick = function(){hidden()};
        
        var addwindow = document.createElement('div');
        addwindow.className="color";
        addwindow.style.textAlign="center";
        addwindow.style.height=window.innerHeight-60+"px";
        addwindow.style.paddingTop=(window.innerHeight-500)/2+"px";
        addwindow.style.paddingBottom=(window.innerHeight-500)/2+"px";
        addwindow.id="addwindow";
        addwindow.innerHTML="با کلیک بر روی دکمه شروع، لغات به صورت خودکار از دسته‌بندی تعیین شده شروع به تلفظ می‌شوند و شما باید در فاصله زمانی وارد شده معنی آن را بیادآورید.";
        color(addwindow);

        var bot1 = document.createElement('button');
        bot1.style.width="180px";
        bot1.style.height="180px";
        bot1.style.borderRadius="50%";
        bot1.style.display="block";
        bot1.style.margin="auto";
        bot1.className="buttons";
        bot1.innerHTML="شروع";
        bot1.style.marginBottom="20px";
        bot1.style.marginTop="20px";
        bot1.onclick=function(){start()};
        color(bot1);
        
        var listgrop = document.createElement('select');
        listgrop.style.marginTop="10px";
        listgrop.style.marginBottom="10px";
        listgrop.style.display="inline-block";
        listgrop.id="listgrops";
        listgrop.className=" w-50 br-r";

        
        if(localStorage.getItem('lightner')===null){
            listcat=[];
            var optLisst = document.createElement('option');
            optLisst.innerHTML="همه لغات";
            optLisst.selected="selected";
            optLisst.value="All";
            listgrop.appendChild(optLisst);
        }else{
            listgrop.innerHTML="<option selected value='All'>همه لغات</option>";
            let listcat=JSON.parse(localStorage.getItem('lightner'));
            let listLength=listcat.length;
            for(var i = 0; i<listLength; ++i){
                var child = listcat[i];
                var optLisst = document.createElement('option');
                optLisst.innerHTML=child[0];
                optLisst.value=i;
                optLisst.className="wordOption";
                listgrop.appendChild(optLisst);
            };
        };

        var listdcr = document.createElement('select');
        listdcr.className=" w-50 br-l";
        listdcr.style.marginTop="10px";
        listdcr.style.display="inline-block";
        listdcr.style.marginBottom="10px";
        listdcr.id="listdcr";
        listdcr.innerHTML="<option selected value='0'>نمی‌دونم</option><option value='1'>تمرین بیشتر</option><option value='2'>یادگرفتم</option>";

        var timeawser = document.createElement('div');
        timeawser.style.widows="100%";
        timeawser.style.fontSize="15px";
        timeawser.innerHTML="مدت زمان انتظار برای پاسخ دهی:<input min=3 type='number' id='timeans' class='inputs' style='width:55px; padding:2px; text-align:center;' value='3'> ثانیه<br>حداقل زمان را 3 ثانیه در نظر بگیرید.";

        document.body.appendChild(blur);
        document.body.appendChild(addwindow);
        document.getElementById('addwindow').appendChild(close);
        document.getElementById('addwindow').appendChild(bot1);
        document.getElementById('addwindow').appendChild(listgrop);
        document.getElementById('addwindow').appendChild(listdcr);
        document.getElementById('addwindow').appendChild(timeawser);

        if(localStorage.getItem('font')===null){
            bot1.style.fontFamily="iran";
            listgrop.style.fontFamily="iran";
            listdcr.style.fontFamily="iran";
            document.getElementById('timeans').style.fontFamily="iran";
            localStorage.setItem('font','1');
            document.body.style.fontFamily="iran";
        }else{
            switch(eval(localStorage.getItem('font'))){
                case 1:document.body.style.fontFamily="iran";
                bot1.style.fontFamily="iran";
                listgrop.style.fontFamily="iran";
                listdcr.style.fontFamily="iran";
                document.getElementById('timeans').style.fontFamily="iran";
                break;
                case 2:document.body.style.fontFamily="mikh";
                bot1.style.fontFamily="mikh";
                listgrop.style.fontFamily="mikh";
                listdcr.style.fontFamily="mikh";
                document.getElementById('timeans').style.fontFamily="mikh";
                break;
            };
        };
    };
    
    function start(){
        var time=document.getElementById('timeans').value;
        startmoror();
        var xxx=setInterval(timer,time*1000);
        function startmoror(){
            mororArray=[];
            mororarray=[];
            light = JSON.parse(localStorage.getItem('lightner'))
            let filtergrouping=listgrop.value;
            let filterdicr=listdcr.value;
            if(filtergrouping=="All"){
                for(var u=0; u<light.length; ++u){
                    let child=light[u];
                    for(var i=1; i<child.length; ++i){
                        mororArray.push(child[i]);
                    };
                };
            }else{
                for(var i=1; i<light[filtergrouping].length; ++i){
                    var child=light[filtergrouping];
                    mororArray.push(child[i]);
                };
            };
            for(var i=0; i<mororArray.length; ++i){
                if(mororArray[i][4]==filterdicr){
                    mororarray.push(mororArray[i]);
                };
            };

            hidden();

            var blur1 = document.createElement('div');
            blur1.id="blur1";
            blur1.onclick = function(){
                document.body.removeChild(document.getElementById('blur1'));
                document.body.removeChild(document.getElementById('addwindow1'));
                clearInterval(xxx)
            };

            var addwindow1 = document.createElement('div');
            addwindow1.className="color";
            addwindow1.style.textAlign="center";
            addwindow1.id="addwindow1";
            color(addwindow1);

            var bot1 = document.createElement('button');
            bot1.style.width="180px";
            bot1.style.height="180px";
            bot1.style.borderRadius="50%";
            bot1.style.display="block";
            bot1.style.margin="auto";
            bot1.className="buttons";
            bot1.innerHTML="توقف";
            bot1.style.marginBottom="20px";
            bot1.style.marginTop="20px";
            bot1.onclick=function(){
                document.body.removeChild(document.getElementById('blur1'));
                document.body.removeChild(document.getElementById('addwindow1'));
                clearInterval(xxx)
            };
            color(bot1);
            
            var div1 = document.createElement('div');
            div1.style.minWidth="60%";
            div1.style.display="inline-block";
            div1.style.fontSize="18px";
            div1.classList="backgrandmror";
            div1.id="divmoror1";

            var div2 = document.createElement('div');
            div2.style.minWidth="60%";
            div2.style.display="inline-block";
            div2.style.fontSize="18px";
            div2.classList="backgrandmror";
            div2.id="divmoror2";

            document.body.appendChild(blur1);
            document.body.appendChild(addwindow1);
            document.getElementById('addwindow1').appendChild(bot1);
            document.getElementById('addwindow1').appendChild(div1);
            document.getElementById('addwindow1').appendChild(div2);

            if(mororarray.length==0){
                document.getElementById('divmoror1').innerHTML="کلمه‌ای با فیلتر های داده‌شده وجود ندارد!!";
            }else{
                var num=mororarray.length;
                var ran=Math.floor(Math.random()*num);
                document.getElementById('divmoror1').innerHTML=mororarray[ran][1];
                document.getElementById('divmoror2').innerHTML=mororarray[ran][2];
                var msg = new SpeechSynthesisUtterance();
                msg.text = mororarray[ran][1];
                msg.rate=eval(JSON.parse(localStorage.getItem('speedspeeck')));
                window.speechSynthesis.speak(msg);
            };
            if(localStorage.getItem('font')===null){
                bot1.style.fontFamily="iran";
                localStorage.setItem('font','1');
                document.body.style.fontFamily="iran";
            }else{
                switch(eval(localStorage.getItem('font'))){
                    case 1:document.body.style.fontFamily="iran";
                    bot1.style.fontFamily="iran";
                    break;
                    case 2:document.body.style.fontFamily="mikh";
                    bot1.style.fontFamily="mikh";
                    break;
                };
            };
        };
        function timer(){
            var num=mororarray.length;
            var ran=Math.floor(Math.random()*num);
            document.getElementById('divmoror1').innerHTML=mororarray[ran][1];
            document.getElementById('divmoror2').innerHTML=mororarray[ran][2];
            var msg = new SpeechSynthesisUtterance();
            msg.text = mororarray[ran][1];
            msg.rate=eval(JSON.parse(localStorage.getItem('speedspeeck')));
            window.speechSynthesis.speak(msg);
        };
    };
};

function main(){
    if(localStorage.getItem('choosEtfAndFte')=='fte'){
        let r=document.getElementById('qoestion');
        var light=JSON.parse(localStorage.getItem('lightner'));
        var num;
        for(let i=0; i<light.length; ++i){
            var child=light[i];
            for(let u=1; u<light[i].length; ++u){
                if(wordprac==child[u][1]){
                    num=i;
                };
            };
        };
        let ctg=light[num];
        var wordnumber;
        for(let u=1; u<ctg.length; ++u){
            if(wordprac==ctg[u][1]){
                wordnumber=u;
            };
        };
        let main = ctg[wordnumber][1];

        r.innerHTML=main;
        r.style.fontSize="25px";
    }else if(localStorage.getItem('choosEtfAndFte')=='etf'){
        let r=document.getElementById('qoestion');
        var light=JSON.parse(localStorage.getItem('lightner'));
        let word= document.getElementById('calame').textContent;
        var num;
        for(let i=0; i<light.length; ++i){
            var child=light[i];
            for(let u=1; u<light[i].length; ++u){
                if(word==child[u][1]){
                    num=i;
                };
            };
        };
        let ctg=light[num];
        var wordnumber;
        for(let u=1; u<ctg.length; ++u){
            if(word==ctg[u][1]){
                wordnumber=u;
            };
        };
        let main = ctg[wordnumber][2];

        r.innerHTML=main;
        r.style.fontSize="25px";
    }
}

function inform(){
    var light=JSON.parse(localStorage.getItem('lightner'));
    let word= document.getElementById('calame').textContent;
    var num;
    var wordnumber;

    if(localStorage.getItem('choosEtfAndFte')=='fte'){
        for(let i=0; i<light.length; ++i){
            var child=light[i];
            for(let u=1; u<light[i].length; ++u){
                if(wordprac==child[u][1]){
                    num=i;
                };
            };
        };
        var ctg=light[num];
        for(let u=1; u<ctg.length; ++u){
            if(wordprac==ctg[u][1]){
                wordnumber=u;
            };
        };
    }else if(localStorage.getItem('choosEtfAndFte')=='etf'){
        for(let i=0; i<light.length; ++i){
            var child=light[i];
            for(let u=1; u<light[i].length; ++u){
                if(word==child[u][1]){
                    num=i;
                };
            };
        };
        var ctg=light[num];
        for(let u=1; u<ctg.length; ++u){
            if(word==ctg[u][1]){
                wordnumber=u;
            };
        };
    };
    let main = ctg[wordnumber][3];
        
    if(main!=""){
        alerts(main,'0');
    }else{
        alerts("توضیحی برای این کلمه وجود ندارد!",'0');
    };
};

function condition0(){
    var light=JSON.parse(localStorage.getItem('lightner'));
    let word= document.getElementById('calame').textContent;
    var num;
    if(localStorage.getItem('choosEtfAndFte')=='fte'){
        for(let i=0; i<light.length; ++i){
            var child=light[i];
            for(let u=1; u<light[i].length; ++u){
                if(wordprac==child[u][1]){
                    num=i;
                };
            };
        };
        let ctg=light[num];
        var wordnumber;
        for(let u=1; u<ctg.length; ++u){
            if(wordprac==ctg[u][1]){
                wordnumber=u;
            };
        };
        let g =light[num];
        g[wordnumber][5]=0;
    }else if(localStorage.getItem('choosEtfAndFte')=='etf'){
        for(let i=0; i<light.length; ++i){
            var child=light[i];
            for(let u=1; u<light[i].length; ++u){
                if(word==child[u][1]){
                    num=i;
                };
            };
        };
        let ctg=light[num];
        var wordnumber;
        for(let u=1; u<ctg.length; ++u){
            if(word==ctg[u][1]){
                wordnumber=u;
            };
        };
        let g =light[num];
        g[wordnumber][4]=0;
    };
    localStorage.setItem('lightner',JSON.stringify(light));
    home();
    document.getElementById('qoestion').innerHTML="?";
};

function condition1(){
    var light=JSON.parse(localStorage.getItem('lightner'));
    let word= document.getElementById('calame').textContent;
    var num;
    if(localStorage.getItem('choosEtfAndFte')=='fte'){
        for(let i=0; i<light.length; ++i){
            var child=light[i];
            for(let u=1; u<light[i].length; ++u){
                if(wordprac==child[u][1]){
                    num=i;
                };
            };
        };
        let ctg=light[num];
        var wordnumber;
        for(let u=1; u<ctg.length; ++u){
            if(wordprac==ctg[u][1]){
                wordnumber=u;
            };
        };
        let g =light[num];
        g[wordnumber][5]=1;
    }else if(localStorage.getItem('choosEtfAndFte')=='etf'){
        for(let i=0; i<light.length; ++i){
            var child=light[i];
            for(let u=1; u<light[i].length; ++u){
                if(word==child[u][1]){
                    num=i;
                };
            };
        };
        let ctg=light[num];
        var wordnumber;
        for(let u=1; u<ctg.length; ++u){
            if(word==ctg[u][1]){
                wordnumber=u;
            };
        };
        let main = ctg[wordnumber][4];
        let g =light[num];
        g[wordnumber][4]=1;
    };
    localStorage.setItem('lightner',JSON.stringify(light));
    home();
    document.getElementById('qoestion').innerHTML="?";
};

function condition2(){
    var light=JSON.parse(localStorage.getItem('lightner'));
    let word= document.getElementById('calame').textContent;
    var num;
    if(localStorage.getItem('choosEtfAndFte')=='fte'){
        for(let i=0; i<light.length; ++i){
            var child=light[i];
            for(let u=1; u<light[i].length; ++u){
                if(wordprac==child[u][1]){
                    num=i;
                };
            };
        };
        let ctg=light[num];
        var wordnumber;
        for(let u=1; u<ctg.length; ++u){
            if(wordprac==ctg[u][1]){
                wordnumber=u;
            };
        };
        let g =light[num];
        g[wordnumber][5]=2;
    }else if(localStorage.getItem('choosEtfAndFte')=='etf'){
        for(let i=0; i<light.length; ++i){
            var child=light[i];
            for(let u=1; u<light[i].length; ++u){
                if(word==child[u][1]){
                    num=i;
                };
            };
        };
        let ctg=light[num];
        var wordnumber;
        for(let u=1; u<ctg.length; ++u){
            if(word==ctg[u][1]){
                wordnumber=u;
            };
        };
        let g =light[num];
        g[wordnumber][4]=2;
    };
    localStorage.setItem('lightner',JSON.stringify(light));
    home();
    document.getElementById('qoestion').innerHTML="?";
};

function timems(){
    var year= new Date().getFullYear();
    var month= new Date().getMonth();
    var date= new Date().getDate();
    var d = new Date(year, month, date);
};

function dailypract(){
    document.getElementById('tit').style.display="block";
    document.getElementById('tit').innerHTML="لایتنر(تمرین روزانه)";
    
    var blur = document.createElement('div');
    blur.id="blur";
    blur.onclick = function(){hidden()};
    
    var addwindow = document.createElement('div');
    addwindow.className="color scrollbar";
    addwindow.id="addwindow";
    addwindow.style.height=window.innerHeight-60+"px";
    addwindow.innerHTML='<button id="feedback" class="br-r buttons" style="width:33.33%; color:#fff;">گزارش</button><button id="addct" onclick="addct()" class="br-c buttons" style="width:33.33%; color:#fff;">fa to en</button><button id="addwr" class="br-l buttons" style="width:33.33%; color:#fff;">en to fa</button><div id="chosecatorword"></div><div id="addwordtab"></div><div id="feedbackdiv"></div>';
    color(addwindow);

    var close=document.createElement('img');
    close.src="./img/c.png";
    close.style.width="40px";
    close.style.height="40px";
    close.style.position="absolute";
    close.style.top="0";
    close.style.right="0";
    close.style.cursor="pointer";
    close.onclick=function(){hidden()};
    var blur = document.createElement('div');
    blur.id="blur";
    blur.onclick = function(){hidden()};

    document.body.appendChild(blur);
    document.body.appendChild(addwindow);
    document.getElementById('addwindow').appendChild(close);
    
    document.getElementById('addct').onclick=function(){addct()};
    document.getElementById('addwr').onclick=function(){addwr()};
    document.getElementById('feedback').onclick=function(){feedback()};
    
    document.getElementById('chosecatorword').style.marginTop=(window.innerHeight-450)/2+"px";
    document.getElementById('chosecatorword').style.marginBottom=(window.innerHeight-450)/2+"px";

    document.getElementById('feedbackdiv').style.marginTop=(window.innerHeight-420)/2+"px";
    document.getElementById('feedbackdiv').style.marginBottom=(window.innerHeight-420)/2+"px";

    document.getElementById('addwordtab').style.marginTop=(window.innerHeight-510)/2+"px";
    document.getElementById('addwordtab').style.marginBottom=(window.innerHeight-510)/2+"px";

    feedback()

    function dailyfeedback(){
        if(localStorage.getItem('lightner')===null){
            let table = document.createElement('table');
            table.style.width="100%";
            table.id="dailyfeedback";
        
            let tr0=document.createElement('tr');
            let title0=document.createElement('td');
            title0.innerHTML="خانه‌ی:";
            title0.className="tablecalm";
            let fa0=document.createElement('td');
            fa0.innerHTML="فارسی به انگلیسی";
            let en0=document.createElement('td');
            en0.innerHTML="انگلیسی به فارسی";
            tr0.appendChild(title0);
            tr0.appendChild(fa0);
            tr0.appendChild(en0);
        
            let tr1=document.createElement('tr');
            let title1=document.createElement('td');
            title1.innerHTML="یک روزه";
            title1.className="tablecalm";
            let fa1=document.createElement('td');
            let en1=document.createElement('td');
            tr1.appendChild(title1);
            tr1.appendChild(fa1);
            tr1.appendChild(en1);
        
            let tr2=document.createElement('tr');
            let title2=document.createElement('td');
            title2.innerHTML="دو روزه";
            title2.className="tablecalm";
            let fa2=document.createElement('td');
            let en2=document.createElement('td');
            tr2.appendChild(title2);
            tr2.appendChild(fa2);
            tr2.appendChild(en2);
        
            let tr4=document.createElement('tr');
            let title4=document.createElement('td');
            title4.innerHTML="چهار روزه";
            title4.className="tablecalm";
            let fa4=document.createElement('td');
            let en4=document.createElement('td');
            tr4.appendChild(title4);
            tr4.appendChild(fa4);
            tr4.appendChild(en4);
        
            let tr8=document.createElement('tr');
            let title8=document.createElement('td');
            title8.innerHTML="هشت روزه";
            title8.className="tablecalm";
            let fa8=document.createElement('td');
            let en8=document.createElement('td');
            tr8.appendChild(title8);
            tr8.appendChild(fa8);
            tr8.appendChild(en8);
        
            let tr15=document.createElement('tr');
            let title15=document.createElement('td');
            title15.innerHTML="پانزده روزه";
            title15.className="tablecalm";
            let fa15=document.createElement('td');
            let en15=document.createElement('td');
            tr15.appendChild(title15);
            tr15.appendChild(fa15);
            tr15.appendChild(en15);
        
            let tr30=document.createElement('tr');
            let title30=document.createElement('td');
            title30.innerHTML="تمام شده";
            title30.className="tablecalm";
            let fa30=document.createElement('td');
            let en30=document.createElement('td');
            tr30.appendChild(title30);
            tr30.appendChild(fa30);
            tr30.appendChild(en30);
        
            table.appendChild(tr0);
            table.appendChild(tr1);
            table.appendChild(tr2);
            table.appendChild(tr4);
            table.appendChild(tr8);
            table.appendChild(tr15);
            table.appendChild(tr30);
        
            fa1.innerHTML=0;
            fa2.innerHTML=0;
            fa4.innerHTML=0;
            fa8.innerHTML=0;
            fa15.innerHTML=0;
            fa30.innerHTML=0;
            
            en1.innerHTML=0;
            en2.innerHTML=0;
            en4.innerHTML=0;
            en8.innerHTML=0;
            en15.innerHTML=0;
            en30.innerHTML=0;
            document.getElementById('feedbackdiv').appendChild(table);
        }else{
            let table = document.createElement('table');
            table.style.width="100%";
            table.id="dailyfeedback";
        
            let tr0=document.createElement('tr');
            let title0=document.createElement('td');
            title0.innerHTML="خانه‌ی:";
            title0.className="tablecalm";
            let fa0=document.createElement('td');
            fa0.innerHTML="فارسی به انگلیسی";
            let en0=document.createElement('td');
            en0.innerHTML="انگلیسی به فارسی";
            tr0.appendChild(title0);
            tr0.appendChild(fa0);
            tr0.appendChild(en0);
        
            let tr1=document.createElement('tr');
            let title1=document.createElement('td');
            title1.innerHTML="یک روزه";
            title1.className="tablecalm";
            let fa1=document.createElement('td');
            let en1=document.createElement('td');
            tr1.appendChild(title1);
            tr1.appendChild(fa1);
            tr1.appendChild(en1);
        
            let tr2=document.createElement('tr');
            let title2=document.createElement('td');
            title2.innerHTML="دو روزه";
            title2.className="tablecalm";
            let fa2=document.createElement('td');
            let en2=document.createElement('td');
            tr2.appendChild(title2);
            tr2.appendChild(fa2);
            tr2.appendChild(en2);
        
            let tr4=document.createElement('tr');
            let title4=document.createElement('td');
            title4.innerHTML="چهار روزه";
            title4.className="tablecalm";
            let fa4=document.createElement('td');
            let en4=document.createElement('td');
            tr4.appendChild(title4);
            tr4.appendChild(fa4);
            tr4.appendChild(en4);
        
            let tr8=document.createElement('tr');
            let title8=document.createElement('td');
            title8.innerHTML="هشت روزه";
            title8.className="tablecalm";
            let fa8=document.createElement('td');
            let en8=document.createElement('td');
            tr8.appendChild(title8);
            tr8.appendChild(fa8);
            tr8.appendChild(en8);
        
            let tr15=document.createElement('tr');
            let title15=document.createElement('td');
            title15.innerHTML="پانزده روزه";
            title15.className="tablecalm";
            let fa15=document.createElement('td');
            let en15=document.createElement('td');
            tr15.appendChild(title15);
            tr15.appendChild(fa15);
            tr15.appendChild(en15);
        
            let tr30=document.createElement('tr');
            let title30=document.createElement('td');
            title30.innerHTML="تمام شده";
            title30.className="tablecalm";
            let fa30=document.createElement('td');
            let en30=document.createElement('td');
            tr30.appendChild(title30);
            tr30.appendChild(fa30);
            tr30.appendChild(en30);
        
            table.appendChild(tr0);
            table.appendChild(tr1);
            table.appendChild(tr2);
            table.appendChild(tr4);
            table.appendChild(tr8);
            table.appendChild(tr15);
            table.appendChild(tr30);
        
            let f1=0;
            let f2=0;
            let f4=0;
            let f8=0;
            let f15=0;
            let f30=0;
        
            let e1=0;
            let e2=0;
            let e4=0;
            let e8=0;
            let e15=0;
            let e30=0;
        
            var ligth = JSON.parse(localStorage.getItem('lightner'))
            for(let i=0; i<ligth.length; ++i){
                let child=ligth[i];
                for(let u=1; u<child.length; ++u){
                    switch(child[u][9]){
                        case 1:++f1;break;
                        case 2:++f2;break;
                        case 4:++f4;break;
                        case 8:++f8;break;
                        case 15:++f15;break;
                        case 30:++f30;break;
                    };
                    switch(child[u][7]){
                        case 1:++e1;break;
                        case 2:++e2;break;
                        case 4:++e4;break;
                        case 8:++e8;break;
                        case 15:++e15;break;
                        case 30:++e30;break;
                    };
                };
            };
        
            fa1.innerHTML=f1;
            fa2.innerHTML=f2;
            fa4.innerHTML=f4;
            fa8.innerHTML=f8;
            fa15.innerHTML=f15;
            fa30.innerHTML=f30;
            
            en1.innerHTML=e1;
            en2.innerHTML=e2;
            en4.innerHTML=e4;
            en8.innerHTML=e8;
            en15.innerHTML=e15;
            en30.innerHTML=e30;
            document.getElementById('feedbackdiv').appendChild(table);
        }
    };
    
    function dailyWorkouten(){
        var dailyWorkout=[];
    
        if(localStorage.getItem('lightner')===null){
            alerts("کلمه‌ای برای امروز وجود ندارد","0");
            document.getElementById('addwordtab').innerHTML="کلمه‌ای برای امروز وجود ندارد";
        }else{
            var ligth = JSON.parse(localStorage.getItem('lightner'))
            for(let i=0; i<ligth.length; ++i){
                let child=ligth[i];
                for(let u=1; u<child.length; ++u){
                    if((child[u][6])+(child[u][7])<=(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()+12600000)/86400000){
                        dailyWorkout.push(child[u]);
                    };
                };
            };
    
            if(dailyWorkout.length==0){
                alerts("کلمه‌ای برای امروز وجود ندارد","0");
                document.getElementById('addwordtab').innerHTML="کلمه‌ای برای امروز وجود ندارد";
            }else{
                document.getElementById('addwordtab').innerHTML="تعداد لغات باقی مانده: ";
                var numberspan=document.createElement('span');
                numberspan.innerHTML=dailyWorkout.length;
    
                var div = document.createElement('div');
                div.style.fontSize="40px";
                div.style.marginTop="20px";
    
                let speeck=document.createElement('button');
                speeck.innerHTML="تلفظ";
                speeck.style.padding="2px 7px";
                speeck.style.minWidth="60%";
                speeck.style.margin="0px 0 70px 0";
                speeck.className="buttons";
                speeck.onclick=function(){
                    var word =div
                    var msg = new SpeechSynthesisUtterance();
                    msg.text = word.textContent;
                    msg.rate=eval(JSON.parse(localStorage.getItem('speedspeeck')));
                    window.speechSynthesis.speak(msg);
                };
                color(speeck)

                var mainworddp = document.createElement('button');
                mainworddp.style.padding="2px 7px";
                mainworddp.style.minWidth="60%";
                mainworddp.style.margin="20px 0 10px 0";
                mainworddp.innerHTML="?";
                mainworddp.className="buttons";
                mainworddp.id="qoestion";
                mainworddp.onclick=function(){
                    var light=JSON.parse(localStorage.getItem('lightner'));
                    let word= div.textContent;
                    var num;
                    for(let i=0; i<light.length; ++i){
                        var child=light[i];
                        for(let u=1; u<light[i].length; ++u){
                            if(word==child[u][1]){
                                num=i;
                            };
                        };
                    };
                    let ctg=light[num];
                    var wordnumber;
                    for(let u=1; u<ctg.length; ++u){
                        if(word==ctg[u][1]){
                            wordnumber=u;
                        };
                    };
                    let main = ctg[wordnumber][2];
                    mainworddp.innerHTML=main;
                };
                color(mainworddp);
    
                let bot1=document.createElement('button');
                bot1.style.color="#fff";
                bot1.innerHTML="می‌دونم";
                bot1.className="buttons w-50 br-r";
                color(bot1)
                bot1.style.backgroundColor="green";
                bot1.onclick=function(){midanam()};
    
                let bot2=document.createElement('button');
                bot2.innerHTML="نمی‌دونم";
                bot2.className="buttons w-50 br-l";
                color(bot2);
                bot2.style.backgroundColor="red";
                bot2.onclick=function(){nemidanam()};
    
    
                if(localStorage.getItem('font')===null){
                    bot1.style.fontFamily="iran";
                    bot2.style.fontFamily="iran";
                    speeck.style.fontFamily="iran";
                    mainworddp.style.fontFamily="iran";
                }else{
                    switch(eval(localStorage.getItem('font'))){
                        case 1:document.body.style.fontFamily="iran";
                        bot1.style.fontFamily="iran";
                        mainworddp.style.fontFamily="iran";
                        speeck.style.fontFamily="iran";
                        bot2.style.fontFamily="iran";
                        break;
                        case 2:document.body.style.fontFamily="mikh";
                        bot1.style.fontFamily="mikh";
                        speeck.style.fontFamily="mikh";
                        mainworddp.style.fontFamily="mikh";
                        bot2.style.fontFamily="mikh";
                        break;
                    };
                };
                document.getElementById('addwordtab').appendChild(numberspan);
                document.getElementById('addwordtab').appendChild(div);
                document.getElementById('addwordtab').appendChild(mainworddp);
                document.getElementById('addwordtab').appendChild(speeck);
                document.getElementById('addwordtab').appendChild(bot1);
                document.getElementById('addwordtab').appendChild(bot2);
    
                var num=dailyWorkout.length;
                var ran=Math.floor(Math.random()*num);
                div.innerHTML=dailyWorkout[ran][1];
    
                if(localStorage.getItem('font')===null){
                    mainworddp.style.fontFamily="iran";
                    localStorage.setItem('font','1');
                    document.body.style.fontFamily="iran";
                }else{
                    switch(eval(localStorage.getItem('font'))){
                        case 1:document.body.style.fontFamily="iran";
                        mainworddp.style.fontFamily="iran";
                        break;
                        case 2:document.body.style.fontFamily="mikh";
                        mainworddp.style.fontFamily="mikh";
                        break;
                    };
                };
            };
        };
        function nemidanam(){
            var ligth = JSON.parse(localStorage.getItem('lightner'));
            let n;
            let m;
            let wrd=div.textContent;
            for(let i=0; i<ligth.length; ++i){
                var child=ligth[i];
                for(let u=1; u<child.length; ++u){
                    if(wrd==child[u][1]){
                        n=i;
                        m=u;
                    };
                };
            };
            child=ligth[n];
            child[m][6] = (new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()+12600000)/86400000;
            child[m][7]=1;
            localStorage.setItem('lightner',JSON.stringify(ligth));
            mainworddp.innerHTML="?";
    
            var dailyWorkout=[];
            var ligth = JSON.parse(localStorage.getItem('lightner'));
            for(let i=0; i<ligth.length; ++i){
                let child=ligth[i];
                for(let u=1; u<child.length; ++u){
                    if((child[u][6])+(child[u][7])<=(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()+12600000)/86400000){
                        dailyWorkout.push(child[u]);
                    };
                };
            };
            if(dailyWorkout.length==0){
                hidden();
                alerts("کلمه‌ای برای امروز وجود ندارد","0");
            }else{
                numberspan.innerHTML=dailyWorkout.length;
                var num=dailyWorkout.length;
                var ran=Math.floor(Math.random()*num);
                div.innerHTML=dailyWorkout[ran][1];
            };
        };
        function midanam(){
            var ligth = JSON.parse(localStorage.getItem('lightner'));
            let n;
            let m;
            let wrd=div.textContent;
            for(let i=0; i<ligth.length; ++i){
                var child=ligth[i];
                for(let u=1; u<child.length; ++u){
                    if(wrd==child[u][1]){
                        n=i;
                        m=u;
                    };
                };
            };
            child=ligth[n];
            child[m][6] = (new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()+12600000)/86400000;
            switch(child[m][7]){
                case 1:child[m][7]=2;break;
                case 2:child[m][7]=4;break;
                case 4:child[m][7]=8;break;
                case 8:child[m][7]=15;break;
                case 15:child[m][7]=30;break;
            };
            localStorage.setItem('lightner',JSON.stringify(ligth));
            mainworddp.innerHTML="?";
    
    
            
            var dailyWorkout=[];
            var ligth = JSON.parse(localStorage.getItem('lightner'));
            for(let i=0; i<ligth.length; ++i){
                let child=ligth[i];
                for(let u=1; u<child.length; ++u){
                    if((child[u][6])+(child[u][7])<=(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()+12600000)/86400000){
                        dailyWorkout.push(child[u]);
                    };
                };
            };
            if(dailyWorkout.length==0){
                hidden();
                alerts("کلمه‌ای برای امروز وجود ندارد","0");
            }else{
                numberspan.innerHTML=dailyWorkout.length;
                var num=dailyWorkout.length;
                var ran=Math.floor(Math.random()*num);
                div.innerHTML=dailyWorkout[ran][1];
            };
        };
    };
    
    function dailyWorkoutfa(){
        var dailyWorkout=[];
        var wordbotton;
    
        if(localStorage.getItem('lightner')===null){
            alerts("کلمه‌ای برای امروز وجود ندارد","0");
            document.getElementById('chosecatorword').innerHTML="کلمه‌ای برای امروز وجود ندارد";
        }else{
            var ligth = JSON.parse(localStorage.getItem('lightner'));
            for(let i=0; i<ligth.length; ++i){
                let child=ligth[i];
                for(let u=1; u<child.length; ++u){
                    if((child[u][8])+(child[u][9])<=(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()+12600000)/86400000){
                        dailyWorkout.push(child[u]);
                    };
                };
            };
    
            if(dailyWorkout.length==0){
                alerts("کلمه‌ای برای امروز وجود ندارد","0");
                document.getElementById('chosecatorword').innerHTML="کلمه‌ای برای امروز وجود ندارد";
            }else{
                document.getElementById('chosecatorword').innerHTML="تعداد لغات باقی مانده: ";
                var numberspan=document.createElement('span');
                numberspan.innerHTML=dailyWorkout.length;
    
                var div = document.createElement('div');
                div.style.fontSize="40px";
                div.style.marginTop="20px";
    
                var mainworddp = document.createElement('button');
                mainworddp.style.padding="2px 7px";
                mainworddp.style.minWidth="60%";
                mainworddp.style.margin="20px 0 70px 0";
                mainworddp.innerHTML="?";
                mainworddp.className="buttons";
                mainworddp.id="qoestion";
                mainworddp.onclick=function(){
                    var light=JSON.parse(localStorage.getItem('lightner'));
                    let word= div.textContent;
                    var num;
                    for(let i=0; i<light.length; ++i){
                        var child=light[i];
                        for(let u=1; u<light[i].length; ++u){
                            if(wordbotton==child[u][1]){
                                mainworddp.innerHTML=light[i][u][1];
                            };
                        };
                    };
                };
                color(mainworddp);
    
                let bot1=document.createElement('button');
                bot1.innerHTML="می‌دونم";
                bot1.className="buttons br-r w-50";
                color(bot1);
                bot1.style.backgroundColor="green";
                bot1.onclick=function(){midanamfa()};
    
                let bot2=document.createElement('button');
                bot2.innerHTML="نمی‌دونم";
                bot2.className="buttons w-50 br-l";
                color(bot2);
                bot2.style.backgroundColor="red";
                bot2.onclick=function(){nemidanamfa()};
    
    
                if(localStorage.getItem('font')===null){
                    bot1.style.fontFamily="iran";
                    bot2.style.fontFamily="iran";
                    mainworddp.style.fontFamily="iran";
                }else{
                    switch(eval(localStorage.getItem('font'))){
                        case 1:document.body.style.fontFamily="iran";
                        bot1.style.fontFamily="iran";
                        mainworddp.style.fontFamily="iran";
                        bot2.style.fontFamily="iran";
                        break;
                        case 2:document.body.style.fontFamily="mikh";
                        bot1.style.fontFamily="mikh";
                        mainworddp.style.fontFamily="mikh";
                        bot2.style.fontFamily="mikh";
                        break;
                    };
                };
                document.getElementById('chosecatorword').appendChild(numberspan);
                document.getElementById('chosecatorword').appendChild(div);
                document.getElementById('chosecatorword').appendChild(mainworddp);
                document.getElementById('chosecatorword').appendChild(bot1);
                document.getElementById('chosecatorword').appendChild(bot2);
    
                var num=dailyWorkout.length;
                var ran=Math.floor(Math.random()*num);
                div.innerHTML=dailyWorkout[ran][2];
                wordbotton=dailyWorkout[ran][1];

                if(localStorage.getItem('font')===null){
                    mainworddp.style.fontFamily="iran";
                    localStorage.setItem('font','1')
                    document.body.style.fontFamily="iran"
                }else{
                    switch(eval(localStorage.getItem('font'))){
                        case 1:document.body.style.fontFamily="iran";
                        mainworddp.style.fontFamily="iran";
                        break;
                        case 2:document.body.style.fontFamily="mikh";
                        mainworddp.style.fontFamily="mikh";
                        break;
                    };
                };
            };
        };
        function nemidanamfa(){
            var ligth = JSON.parse(localStorage.getItem('lightner'));
            let n;
            let m;
            for(let i=0; i<ligth.length; ++i){
                var child=ligth[i];
                for(let u=1; u<child.length; ++u){
                    if(wordbotton==child[u][1]){
                        n=i;
                        m=u;
                    };
                };
            };
            child=ligth[n];
            child[m][8] = (new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()+12600000)/86400000;
            child[m][9]=1;
            localStorage.setItem('lightner',JSON.stringify(ligth));
            mainworddp.innerHTML="?";
    
    
            
            var dailyWorkout=[];
            var ligth = JSON.parse(localStorage.getItem('lightner'));
            for(let i=0; i<ligth.length; ++i){
                let child=ligth[i];
                for(let u=1; u<child.length; ++u){
                    if((child[u][8])+(child[u][9])<=(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()+12600000)/86400000){
                        dailyWorkout.push(child[u]);
                    };
                };
            };
            if(dailyWorkout.length==0){
                hidden();
                alerts("کلمه‌ای برای امروز وجود ندارد","0");
            }else{
                numberspan.innerHTML=dailyWorkout.length;
                var num=dailyWorkout.length;
                var ran=Math.floor(Math.random()*num);
                div.innerHTML=dailyWorkout[ran][2];
                wordbotton=dailyWorkout[ran][1];
            };
        };
        function midanamfa(){
            var ligth = JSON.parse(localStorage.getItem('lightner'));
            let n;
            let m;
            for(let i=0; i<ligth.length; ++i){
                var child=ligth[i];
                for(let u=1; u<child.length; ++u){
                    if(wordbotton==child[u][1]){
                        n=i;
                        m=u;
                    };
                };
            };
            child=ligth[n];
            child[m][8] = (new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()+12600000)/86400000;
            switch(child[m][9]){
                case 1:child[m][9]=2;break;
                case 2:child[m][9]=4;break;
                case 4:child[m][9]=8;break;
                case 8:child[m][9]=15;break;
                case 15:child[m][9]=30;break;
            };
            localStorage.setItem('lightner',JSON.stringify(ligth));
            mainworddp.innerHTML="?";
    
    
            
            var dailyWorkout=[];
            var ligth = JSON.parse(localStorage.getItem('lightner'));
            for(let i=0; i<ligth.length; ++i){
                let child=ligth[i];
                for(let u=1; u<child.length; ++u){
                    if((child[u][8])+(child[u][9])<=(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()+12600000)/86400000){
                        dailyWorkout.push(child[u]);
                    };
                };
            };
            if(dailyWorkout.length==0){
                hidden();
                alerts("کلمه‌ای برای امروز وجود ندارد","0");
            }else{
                numberspan.innerHTML=dailyWorkout.length;
                var num=dailyWorkout.length;
                var ran=Math.floor(Math.random()*num);
                div.innerHTML=dailyWorkout[ran][2];
                wordbotton=dailyWorkout[ran][1];
            };
        };
    };

    function addct(){
        document.getElementById('chosecatorword').innerHTML="";
        document.getElementById('addct').style.backgroundColor="rgb(0,0,0,1)";
        document.getElementById('addwr').style.backgroundColor="rgb(0,0,0,0.4)";
        document.getElementById('feedback').style.backgroundColor="rgb(0,0,0,0.4)";
        dailyWorkoutfa()
        document.getElementById('feedbackdiv').style.display="none";
        document.getElementById('addwordtab').style.display="none";
        document.getElementById('chosecatorword').style.display="block";
    };

    function addwr(){
        document.getElementById('addwordtab').innerHTML="";
        document.getElementById('addwr').style.backgroundColor="rgb(0,0,0,1)";
        document.getElementById('addct').style.backgroundColor="rgb(0,0,0,0.4)";
        document.getElementById('feedback').style.backgroundColor="rgb(0,0,0,0.4)";
        dailyWorkouten()
        document.getElementById('feedbackdiv').style.display="none";
        document.getElementById('chosecatorword').style.display="none";
        document.getElementById('addwordtab').style.display="block";
    };

    function feedback(){
        document.getElementById('feedbackdiv').innerHTML="";
        document.getElementById('feedback').style.backgroundColor="rgb(0,0,0,1)";
        document.getElementById('addwr').style.backgroundColor="rgb(0,0,0,0.4)";
        document.getElementById('addct').style.backgroundColor="rgb(0,0,0,0.4)";
        dailyfeedback()
        document.getElementById('addwordtab').style.display="none";
        document.getElementById('chosecatorword').style.display="none";
        document.getElementById('feedbackdiv').style.display="block";
    };

    if(localStorage.getItem('font')===null){
        listgrop.style.fontFamily="iran";
        localStorage.setItem('font','1');
        document.document.getElementById('addct').style.fontFamily="iran";
        document.document.getElementById('addwr').style.fontFamily="iran";
        document.document.getElementById('feedback').style.fontFamily="iran";
    }else{
        switch(eval(localStorage.getItem('font'))){
            case 1:document.document.getElementById('addct').style.fontFamily="iran";
            case 1:document.document.getElementById('addwr').style.fontFamily="iran";
            case 1:document.document.getElementById('feedback').style.fontFamily="iran";
            break;
            case 2:document.getElementById('addct').style.fontFamily="mikh";
            case 2:document.getElementById('addwr').style.fontFamily="mikh";
            case 2:document.getElementById('feedback').style.fontFamily="mikh";
            break;
        };
    };
};

function controlligthner(e){
    if(e.keyCode==38){
        main();
    }else if(e.keyCode==37){
        if(document.getElementById('addwindow')==null){
            condition2();
        };
    }else if(e.keyCode==40){
        if(document.getElementById('addwindow')==null){
            condition1();
        };
    }else if(e.keyCode==39){
        if(document.getElementById('addwindow')==null){
            condition0();
        };
    }else if(e.keyCode==96){
        if(document.getElementById('addwindow')==null){
            speed();
        };
    }else if(e.keyCode==97){
        if(document.getElementById('addwindow')==null){
            inform();
        };
    };
};

function speedspeeck(a){
    localStorage.setItem('speedspeeck',JSON.stringify(a.value))
    document.getElementById('speedspeecks').innerHTML="سرعت تلفظ: "+eval(JSON.parse(localStorage.getItem('speedspeeck')))+" برابر";
}

//مشاهده لغات
function word(){
    document.getElementById('loadbar').style.display="block";
    var light=JSON.parse(localStorage.getItem('lightner'));
    if(localStorage.getItem('lightner')===null){
        var blur = document.createElement('div');
        blur.id="blur";
        blur.onclick = function(){
            document.getElementById('bottonscontrollword').style.display="none";
            selectwordwork=[];
            hidden1();
        };
        
        var addwindow = document.createElement('div');
        addwindow.className="color";
        addwindow.id="addwindow1";
        addwindow.style.textAlign="center";
        addwindow.innerHTML="خالی";
        color(addwindow);

        document.body.appendChild(blur);
        document.body.appendChild(addwindow);
    }else{
        document.getElementById('tit').style.display="block";
        document.getElementById('tit').innerHTML="مشاهده لغات";
        
        var close=document.createElement('img');
        close.src="./img/c.png";
        close.style.width="40px";
        close.style.height="40px";
        close.style.position="absolute";
        close.style.top="0";
        close.style.right="0";
        close.style.cursor="pointer";
        close.onclick=function(){
            hidden();
            document.getElementById('bottonscontrollword').style.display="none";
            document.getElementById('tit').style.display="none";

            selectwordwork=[];
        };

        var blur = document.createElement('div');
        blur.id="blur";
        blur.onclick = function(){
            hidden();
            document.getElementById('bottonscontrollword').style.display="none";
            document.getElementById('tit').style.display="none";

            selectwordwork=[];
        };

        var numb=document.createElement('span')
        numb.style.display="inline-block";
        numb.style.width="130px";
        numb.style.marginTop="10px";
        if(window.innerWidth<560){numb.style.marginRight="30px";}else{numb.style.marginRight="0px";};
        
        var addwindow = document.createElement('div');
        addwindow.className="color";
        addwindow.id="addwindow";
        addwindow.style.height=window.innerHeight-60+"px";
        color(addwindow);

        var search = document.createElement('input');
        search.type="search";
        search.className="inputs w-100";
        search.style.float="left";
        if(window.innerWidth<560){search.style.width=window.innerWidth-186+"px"}else{search.style.width="304px"};
        search.id="searchsword";
        search.placeholder="جستجو در لغات";
        search.onkeyup=function(){searchword()};
        search.onkeydown=function(){if(event.keyCode==8){document.getElementById('searchsword').value="";document.getElementById('tableword').value="";applyword();numb.innerHTML="تعداد لغات: "+listword.childNodes.length;}};
            
        var listgrop = document.createElement('select');
        listgrop.className="br-r";
        listgrop.style.height="45px";
        listgrop.id="listgrops";

        var opAll=document.createElement('option');
        opAll.innerHTML="همه لغات";
        opAll.value="All";
        listgrop.appendChild(opAll);

        light=JSON.parse(localStorage.getItem('lightner'));
        for(let i=0; i<light.length; ++i){
            let child=light[i];
            var opnumber=document.createElement('option');
            opnumber.innerHTML=child[0];
            opnumber.value=i;
            listgrop.appendChild(opnumber);
        };
        
        let bot2 = document.createElement('button');
        bot2.style.width="42px";
        bot2.style.height="45px";
        bot2.style.padding="0px";
        bot2.style.lineHeight="18px";
        bot2.style.fontSize="13px";
        bot2.className="buttons br-l";
        bot2.innerHTML="fa to<br/>en";
        bot2.onclick=function(){document.getElementById('loadbar').style.display="block";setTimeout(filterCan,150);unselectall();setTimeout(ot,700);function ot(){document.getElementById('loadbar').style.display="none";};};
        color(bot2);
        colorfilterd()

        function colorfilterd(){
            if(localStorage.getItem("pFTE")===null){
                color(bot2);
            }else{
                if(localStorage.getItem("pFTE")==2){
                    bot2.style.backgroundColor="rgb(20 54 20)";
                }else if(localStorage.getItem("pFTE")==1){
                    bot2.style.backgroundColor="blue";
                }else if(localStorage.getItem("pFTE")==0){
                    bot2.style.backgroundColor="rgb(255 0 0)";
                }else if(localStorage.getItem("pFTE")=="All"){
                    color(bot2);
                };
            };
        };
        
        let bot5 = document.createElement('button');
        bot5.style.width="42px";
        bot5.style.height="45px";
        bot5.style.padding="0px";
        bot5.style.lineHeight="18px";
        bot5.style.fontSize="13px";
        bot5.className="buttons br-c";
        bot5.innerHTML="en to<br/>fa";
        bot5.onclick=function(){document.getElementById('loadbar').style.display="block";setTimeout(filterCanen,150);unselectall();setTimeout(ot,700);function ot(){document.getElementById('loadbar').style.display="none";};};
        color(bot5);
        colorfilterden()

        function colorfilterden(){
            if(localStorage.getItem("pETF")===null){
                color(bot5);
            }else{
                if(localStorage.getItem("pETF")==2){
                    bot5.style.backgroundColor="rgb(20 54 20)";
                }else if(localStorage.getItem("pETF")==1){
                    bot5.style.backgroundColor="blue";
                }else if(localStorage.getItem("pETF")==0){
                    bot5.style.backgroundColor="rgb(255 0 0)";
                }else if(localStorage.getItem("pETF")=="All"){
                    color(bot5);
                };
            };
        };
        
            let imgbot3=document.createElement('img');
            imgbot3.style.width="100%";
            if(localStorage.getItem('color')=="white"){
                imgbot3.src="./img/st.b.png";
            }else{
                imgbot3.src="./img/st.w.png";
            };

        let bot3 = document.createElement('button');
        bot3.style.width="42px";
        bot3.style.marginRight="8px";
        bot3.style.height="45px";
        bot3.style.padding="5px";
        bot3.className="buttons br-r";
        bot3.appendChild(imgbot3);
        bot3.onclick=function(){document.getElementById('loadbar').style.display="block";setTimeout(starword,150);unselectall();setTimeout(ot,700);function ot(){document.getElementById('loadbar').style.display="none";};};
        color(bot3);
        colorfilterstar()

        function colorfilterstar(){
            if(localStorage.getItem("star")===null){
                color(bot3);
            }else{
                if(localStorage.getItem("star")=="All"){
                    color(bot3);
                }else if(localStorage.getItem("star")=="true"){
                    bot3.style.backgroundColor="rgb(20 54 20)";
                }else if(localStorage.getItem("star")=="false"){
                    bot3.style.backgroundColor="rgb(255 0 0)";
                };
            };
        };

        let bot4 = document.createElement('button');
        bot4.style.width="100px";
        bot4.className="buttons br-l";
        bot4.innerHTML="اعمال کردن";
        bot4.onclick=function(){document.getElementById('loadbar').style.display="block";setTimeout(applyword,150);unselectall();setTimeout(ot,700);function ot(){document.getElementById('loadbar').style.display="none";};};
        color(bot4);

        let div1=document.createElement('div');
        div1.style.width="100%";
        div1.style.display="inline-flex";
        div1.style.marginTop="10px";
        div1.appendChild(listgrop);
        div1.appendChild(bot4);
        div1.appendChild(bot3);
        div1.appendChild(bot5);
        div1.appendChild(bot2);

        if (window.innerWidth<"560") {
            listgrop.style.width=(window.innerWidth-262)+"px";
            bot4.style.fontSize="15px";
        }else{
            listgrop.style.width="200px";
        };

        var listword=document.createElement('table');
        listword.style.height=window.innerHeight-250+"px";
        listword.style.marginTop="10px";
        listword.style.overflow="auto";
        listword.style.borderRadius="20px";
        listword.style.textAlign="center";
        listword.style.padding="10px";
        listword.style.display="none";
        listword.className="scrollbar w-100";
        listword.id="tableword";
        color(listword);

        document.body.appendChild(blur);
        document.body.appendChild(addwindow);
        addwindow.appendChild(close);
        addwindow.appendChild(numb);
        addwindow.appendChild(search);
        addwindow.appendChild(div1);
        addwindow.appendChild(listword);

        if(localStorage.getItem('font')===null){
            search.style.fontFamily="iran";
            listgrop.style.fontFamily="iran";
            bot1.style.fontFamily="iran";
            bot2.style.fontFamily="iran";
            bot3.style.fontFamily="iran";
            bot4.style.fontFamily="iran";
            bot5.style.fontFamily="iran";
            localStorage.setItem('font','1');
            document.body.style.fontFamily="iran";
        }else{
            switch(eval(localStorage.getItem('font'))){
                case 1:document.body.style.fontFamily="iran";
                search.style.fontFamily="iran";
                listgrop.style.fontFamily="iran";
                bot2.style.fontFamily="iran";
                bot3.style.fontFamily="iran";
                bot4.style.fontFamily="iran";
                bot5.style.fontFamily="iran";
                break;
                case 2:document.body.style.fontFamily="mikh";
                search.style.fontFamily="mikh";
                listgrop.style.fontFamily="mikh";
                bot2.style.fontFamily="mikh";
                bot3.style.fontFamily="mikh";
                bot4.style.fontFamily="mikh";
                bot5.style.fontFamily="mikh";
                break;
            };
        };

        function applyword(){
            localStorage.setItem('filtergrouplistword',listgrop.value);
            listword.innerHTML="";
            listwordaplly();
        };

        if(localStorage.getItem('filtergrouplistword')===null){
            opAll.selected="selected";
        }else{
            for(let r=0; r<listgrop.length; ++r){
                if(listgrop.childNodes[r].value==localStorage.getItem('filtergrouplistword')){
                    listgrop.childNodes[r].selected="selected";
                };
            };
        };

        function searchword(){
            var light=JSON.parse(localStorage.getItem('lightner'));
            var x=[];
            var y=[];
            let searchsword=document.getElementById('searchsword');
            if(searchsword.value!=""){
                for(var r=0; r<document.getElementsByTagName('tr').length; ++r){
                    if(listword.childNodes[r].childNodes[3].textContent.indexOf(searchsword.value)!=-1){
                        for(let h=0; h<light.length; ++h){
                            let farzand = light[h];
                            for (let o=1; o<farzand.length; ++o){
                                if(farzand[o][0]==listword.childNodes[r].childNodes[2].textContent){
                                    x.push(farzand[o]);
                                };
                            };
                        };
                    };
                    if(listword.childNodes[r].childNodes[1].textContent.indexOf(searchsword.value)!=-1){
                        for(let h=0; h<light.length; ++h){
                            let farzand = light[h];
                            for (let o=1; o<farzand.length; ++o){
                                if(farzand[o][0]==listword.childNodes[r].childNodes[2].textContent){
                                    y.push(farzand[o]);
                                };
                            };
                        };
                    };
                };

                listword.innerHTML="";
                for(var c =0; c<x.length; ++c){
                    var wordadd=document.createElement('tr');
                    wordadd.style.width="100%";
                    var inputcheck=document.createElement('label');
                    inputcheck.className="container";
                    inputcheck.innerHTML='<input type="checkbox"><span class="checkmark"></span>';
                    inputcheck.onchange=function(){clickiocheckbox(this)};
                    var wordcheck=document.createElement('td');
                    wordcheck.style.width="20px";
                    wordcheck.style.display="inline-block";
                    wordcheck.className="paddingtd";
                    var wordstar=document.createElement('td');
                    wordstar.className="paddingtd";
                    wordstar.style.width="15px";
                    var imgstar=document.createElement('img');
                    imgstar.style.width="100%";
                    imgstar.style.transform="translate(0px,20%)";
                    if(localStorage.getItem('color')=="white"){
                        imgstar.src="./img/sr.b.png";
                    }else{
                        imgstar.src="./img/sr.w.png";
                    };
                    var botton3=document.createElement('button');
                    botton3.className="buttons";
                    botton3.style.width="35px";
                    botton3.style.margin="0";
                    botton3.style.padding="1px 6px";
                    color(botton3);
                    botton3.style.border="0";
                    botton3.onclick=function(){starbotton(this)};
                    var wordmain=document.createElement('td');
                    wordmain.className="paddingtd";
                    wordmain.onclick=function(){menu(event , this);};
                    wordmain.oncontextmenu=function(){wordspk3(this)};
                    wordmain.innerHTML=x[c][2];
                    wordmain.style.width="125px";
                    wordmain.style.textAlign="right";
                    wordmain.style.paddingRight="3px";
                    if (window.innerWidth<"560") {
                        wordmain.style.width=(window.innerWidth-45)/2+"px";
                        wordmain.style.fontSize="13px";
                    }else{
                        wordmain.style.width="175px";
                        wordmain.style.fontSize="15px";
                    };
                    var wordid=document.createElement('td');
                    wordid.style.display="none";
                    wordid.innerHTML=x[c][0];
                    var word=document.createElement('td');
                    word.className="paddingtd";
                    word.innerHTML=x[c][1];
                    word.onclick=function(){menu(event , this);};
                    word.oncontextmenu=function(){wordspk3(this)};
                    word.id="wordspk";
                    word.style.width="125px";
                    word.style.textAlign="left";
                    if (window.innerWidth<"560") {
                        word.style.width=(window.innerWidth-45)/2+"px";
                        word.style.fontSize="13px";
                        addwindow.style.padding="10px";
                    }else{
                        word.style.width="175px";
                        word.style.fontSize="15px";
                    };
                    
                    listword.appendChild(wordadd);
                    wordadd.appendChild(wordcheck);
                    wordadd.appendChild(wordmain);
                    wordadd.appendChild(wordid);
                    wordadd.appendChild(word);
                    wordcheck.appendChild(inputcheck);
                    wordadd.appendChild(wordstar);
                    wordstar.appendChild(botton3);
                    botton3.appendChild(imgstar);

                    if(x[c][10]==true){
                        imgstar.src="./img/sr.y.png";
                    };
                };
                for(var c =0; c<y.length; ++c){
                    var wordadd=document.createElement('tr');
                    wordadd.style.width="100%";
                    var inputcheck=document.createElement('label');
                    inputcheck.className="container";
                    inputcheck.innerHTML='<input type="checkbox"><span class="checkmark"></span>';
                    inputcheck.onchange=function(){clickiocheckbox(this)};
                    var wordcheck=document.createElement('td');
                    wordcheck.style.width="20px";
                    wordcheck.style.display="inline-block";
                    wordcheck.className="paddingtd";
                    var wordstar=document.createElement('td');
                    wordstar.className="paddingtd";
                    wordstar.style.width="15px";
                    var imgstar=document.createElement('img');
                    imgstar.style.width="100%";
                    imgstar.style.transform="translate(0px,20%)";
                    if(localStorage.getItem('color')=="white"){
                        imgstar.src="./img/sr.b.png";
                    }else{
                        imgstar.src="./img/sr.w.png";
                    };
                    var botton3=document.createElement('button');
                    botton3.className="buttons";
                    botton3.style.width="35px";
                    botton3.style.margin="0";
                    botton3.style.padding="1px 6px";
                    color(botton3);
                    botton3.style.border="0";
                    botton3.onclick=function(){starbotton(this)};
                    var wordmain=document.createElement('td');
                    wordmain.className="paddingtd";
                    wordmain.onclick=function(){menu(event , this);};
                    wordmain.oncontextmenu=function(){wordspk3(this)};
                    wordmain.innerHTML=y[c][2];
                    wordmain.style.width="125px";
                    wordmain.style.textAlign="right";
                    wordmain.style.paddingRight="3px";
                    if (window.innerWidth<"560") {
                        wordmain.style.width=(window.innerWidth-45)/2+"px";
                        wordmain.style.fontSize="13px";
                    }else{
                        wordmain.style.width="175px";
                        wordmain.style.fontSize="15px";
                    };
                    var wordid=document.createElement('td');
                    wordid.style.display="none";
                    wordid.innerHTML=y[c][0];
                    var word=document.createElement('td');
                    word.className="paddingtd";
                    word.innerHTML=y[c][1];
                    word.onclick=function(){menu(event , this);};
                    word.oncontextmenu=function(){wordspk3(this)};
                    word.id="wordspk";
                    word.style.width="125px";
                    word.style.textAlign="left";
                    if (window.innerWidth<"560") {
                        word.style.width=(window.innerWidth-45)/2+"px";
                        word.style.fontSize="13px";
                        addwindow.style.padding="10px";
                    }else{
                        word.style.width="175px";
                        word.style.fontSize="15px";
                    };
                    
                    listword.appendChild(wordadd);
                    wordadd.appendChild(wordcheck);
                    wordadd.appendChild(wordmain);
                    wordadd.appendChild(wordid);
                    wordadd.appendChild(word);
                    wordcheck.appendChild(inputcheck);
                    wordadd.appendChild(wordstar);
                    wordstar.appendChild(botton3);
                    botton3.appendChild(imgstar);

                    if(y[c][10]==true){
                        imgstar.src="./img/sr.y.png";
                    };
                };
                numb.innerHTML="تعداد لغات: "+listword.childNodes.length; 
            }else{
                applyword();
                numb.innerHTML="تعداد لغات: "+listword.childNodes.length; 
            };
        };

        function filterCanen(){
            if(localStorage.getItem("pETF")===null){
                localStorage.setItem("pETF","All");
                color(bot5);
                applyword();
            }else{
                if(localStorage.getItem("pETF")=="All"){
                    localStorage.setItem("pETF",0);
                    bot5.style.backgroundColor="rgb(255 0 0)";
                    applyword();
                }else if(localStorage.getItem("pETF")==0){
                    localStorage.setItem("pETF",1);
                    bot5.style.backgroundColor="blue";
                    applyword();
                }else if(localStorage.getItem("pETF")==1){
                    localStorage.setItem("pETF",2);
                    bot5.style.backgroundColor="rgb(20 54 20)";
                    applyword();
                }else if(localStorage.getItem("pETF")==2){
                    localStorage.setItem("pETF","All");
                    color(bot5);
                    applyword();
                };
            };
        };

        function filterCan(){
            if(localStorage.getItem("pFTE")===null){
                localStorage.setItem("pFTE","All");
                color(bot2);
                applyword();
            }else{
                if(localStorage.getItem("pFTE")=="All"){
                    localStorage.setItem("pFTE",0);
                    bot2.style.backgroundColor="rgb(255 0 0)";
                    applyword();
                }else if(localStorage.getItem("pFTE")==0){
                    localStorage.setItem("pFTE",1);
                    bot2.style.backgroundColor="blue";
                    applyword();
                }else if(localStorage.getItem("pFTE")==1){
                    localStorage.setItem("pFTE",2);
                    bot2.style.backgroundColor="rgb(20 54 20)";
                    applyword();
                }else if(localStorage.getItem("pFTE")==2){
                    localStorage.setItem("pFTE","All");
                    color(bot2);
                    applyword();
                };
            };
        };

        function starword(){
            if(localStorage.getItem("star")===null){
                localStorage.setItem("star","All");
                color(bot3);
                applyword();
            }else{
                if(localStorage.getItem("star")=="All"){
                    localStorage.setItem("star",true);
                    bot3.style.backgroundColor="rgb(20 54 20)";
                    applyword();
                }else if(localStorage.getItem("star")=="true"){
                    localStorage.setItem("star",false);
                    bot3.style.backgroundColor="rgb(255 0 0)";
                    applyword();
                }else if(localStorage.getItem("star")=="false"){
                    localStorage.setItem("star","All");
                    color(bot3);
                    applyword();
                };
            };          
        };
        
        function listwordaplly(){
            function word0(){
                var wordadd=document.createElement('tr');
                wordadd.style.width="100%";
                var inputcheck=document.createElement('label');
                inputcheck.className="container";
                inputcheck.innerHTML='<input type="checkbox"><span class="checkmark"></span>';
                inputcheck.onchange=function(){clickiocheckbox(this)};
                var wordcheck=document.createElement('td');
                wordcheck.style.width="20px";
                wordcheck.style.display="inline-block";
                wordcheck.className="paddingtd";
                var wordstar=document.createElement('td');
                wordstar.className="paddingtd";
                wordstar.style.width="15px";
                var imgstar=document.createElement('img');
                imgstar.style.width="100%";
                imgstar.style.transform="translate(0px,20%)";
                if(localStorage.getItem('color')=="white"){
                    imgstar.src="./img/sr.b.png";
                }else{
                    imgstar.src="./img/sr.w.png";
                };
                var botton3=document.createElement('button');
                botton3.className="buttons";
                botton3.style.width="35px";
                botton3.style.margin="0";
                botton3.style.padding="1px 6px";
                color(botton3);
                botton3.style.border="0";
                botton3.onclick=function(){starbotton(this)};
                var wordmain=document.createElement('td');
                wordmain.className="paddingtd";
                wordmain.onclick=function(){menu(event , this);};
                wordmain.oncontextmenu=function(){wordspk3(this)};
                wordmain.innerHTML=child[u][2];
                wordmain.style.width="125px";
                wordmain.style.textAlign="right";
                wordmain.style.paddingRight="3px";
                if (window.innerWidth<"560") {
                    wordmain.style.width=(window.innerWidth-45)/2+"px";
                    wordmain.style.fontSize="13px";
                }else{
                    wordmain.style.width="175px";
                    wordmain.style.fontSize="15px";
                };
                var wordid=document.createElement('td');
                wordid.style.display="none";
                wordid.innerHTML=child[u][0];
                var word=document.createElement('td');
                word.className="paddingtd";
                word.innerHTML=child[u][1];
                word.onclick=function(){menu(event , this);};
                word.oncontextmenu=function(){wordspk3(this)};
                word.id="wordspk";
                word.style.width="125px";
                word.style.textAlign="left";
                if (window.innerWidth<"560") {
                    word.style.width=(window.innerWidth-45)/2+"px";
                    word.style.fontSize="13px";
                    addwindow.style.padding="10px";
                }else{
                    word.style.width="175px";
                    word.style.fontSize="15px";
                };
                
                listword.appendChild(wordadd);
                wordadd.appendChild(wordcheck);
                wordadd.appendChild(wordmain);
                wordadd.appendChild(wordid);
                wordadd.appendChild(word);
                wordcheck.appendChild(inputcheck);
                wordadd.appendChild(wordstar);
                wordstar.appendChild(botton3);
                botton3.appendChild(imgstar);

                if(child[u][10]==true){
                    imgstar.src="./img/sr.y.png";
                };
            };
            if(localStorage.getItem('lightner')===null){
                listword.style.display="block";
                listword.innerHTML="خالی";
            }else{
                let x=0;
                for(let i=0; i<light.length; ++i){
                    let child=light[i];
                    for(let u=1; u<child.length; ++u){
                        x+=1;
                    };
                };
                if(x==0){
                    listword.style.display="block";
                    listword.innerHTML="خالی";
                    numb.innerHTML="تعداد لغات: "+0;
                }else{
                    if(localStorage.getItem('filtergrouplistword')===null){
                        listword.style.display="block";
                        localStorage.setItem('filtergrouplistword',"All");
                        opAll.selected="selected";
                    }
                    let light = JSON.parse(localStorage.getItem('lightner'));
                    listword.style.display="block";
                    let num=localStorage.getItem('filtergrouplistword');
                    if(num=="All"){
                        for(let i=0; i<light.length; ++i){
                            var child=light[i];
                            for(var u=1; u<child.length; ++u){
                                if(localStorage.getItem('pFTE')===null){
                                    localStorage.setItem("pFTE","All");
                                    if(localStorage.getItem('pETF')===null){
                                        localStorage.setItem("pETF","All");
                                        if(localStorage.getItem('star')===null){
                                            localStorage.setItem("star","All");
                                            word0();
                                        }else if(localStorage.getItem('star')=="All"){
                                            word0();
                                        }else if(String(child[u][10])==localStorage.getItem('star')){
                                            word0();
                                        };
                                    }else if(localStorage.getItem('pETF')=="All"){
                                        if(localStorage.getItem('star')===null){
                                            localStorage.setItem("star","All");
                                            word0();
                                        }else if(localStorage.getItem('star')=="All"){
                                            word0();
                                        }else if(String(child[u][10])==localStorage.getItem('star')){
                                            word0();
                                        };
                                    }else{
                                        let vetf=localStorage.getItem('pETF');
                                        if(child[u][4]==vetf){
                                            if(localStorage.getItem('star')===null){
                                                localStorage.setItem("star","All");
                                                word0();
                                            }else if(localStorage.getItem('star')=="All"){
                                                word0();
                                            }else if(String(child[u][10])==localStorage.getItem('star')){
                                                word0();
                                            };
                                        };
                                    }
                                }else if(localStorage.getItem('pFTE')=="All"){
                                    if(localStorage.getItem('pETF')===null){
                                        localStorage.setItem("pETF","All");
                                        if(localStorage.getItem('star')===null){
                                            localStorage.setItem("star","All");
                                            word0();
                                        }else if(localStorage.getItem('star')=="All"){
                                            word0();
                                        }else if(String(child[u][10])==localStorage.getItem('star')){
                                            word0();
                                        };
                                    }else if(localStorage.getItem('pETF')=="All"){
                                        if(localStorage.getItem('star')===null){
                                            localStorage.setItem("star","All");
                                            word0();
                                        }else if(localStorage.getItem('star')=="All"){
                                            word0();
                                        }else if(String(child[u][10])==localStorage.getItem('star')){
                                            word0();
                                        };
                                    }else{
                                        let vetf=localStorage.getItem('pETF');
                                        if(child[u][4]==vetf){
                                            if(localStorage.getItem('star')===null){
                                                localStorage.setItem("star","All");
                                                word0();
                                            }else if(localStorage.getItem('star')=="All"){
                                                word0();
                                            }else if(String(child[u][10])==localStorage.getItem('star')){
                                                word0();
                                            };
                                        };
                                    }
                                }else{
                                    let vfte=localStorage.getItem('pFTE');
                                    if(child[u][5]==vfte){
                                        if(localStorage.getItem('pETF')===null){
                                            localStorage.setItem("pETF","All");
                                            if(localStorage.getItem('star')===null){
                                                localStorage.setItem("star","All");
                                                word0();
                                            }else if(localStorage.getItem('star')=="All"){
                                                word0();
                                            }else if(String(child[u][10])==localStorage.getItem('star')){
                                                word0();
                                            };
                                        }else if(localStorage.getItem('pETF')=="All"){
                                            if(localStorage.getItem('star')===null){
                                                localStorage.setItem("star","All");
                                                word0();
                                            }else if(localStorage.getItem('star')=="All"){
                                                word0();
                                            }else if(String(child[u][10])==localStorage.getItem('star')){
                                                word0();
                                            };
                                        }else{
                                            let vetf=localStorage.getItem('pETF');
                                            if(child[u][4]==vetf){
                                                if(localStorage.getItem('star')===null){
                                                    localStorage.setItem("star","All");
                                                    word0();
                                                }else if(localStorage.getItem('star')=="All"){
                                                    word0();
                                                }else if(String(child[u][10])==localStorage.getItem('star')){
                                                    word0();
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    }else if(num>=light.length){
                        localStorage.setItem("filtergrouplistword","All");
                        for(let i=0; i<light.length; ++i){
                            var child=light[i];
                            for(var u=1; u<child.length; ++u){
                                if(localStorage.getItem('pFTE')===null){
                                    localStorage.setItem("pFTE","All");
                                    if(localStorage.getItem('pETF')===null){
                                        localStorage.setItem("pETF","All");
                                        if(localStorage.getItem('star')===null){
                                            localStorage.setItem("star","All");
                                            word0();
                                        }else if(localStorage.getItem('star')=="All"){
                                            word0();
                                        }else if(String(child[u][10])==localStorage.getItem('star')){
                                            word0();
                                        };
                                    }else if(localStorage.getItem('pETF')=="All"){
                                        if(localStorage.getItem('star')===null){
                                            localStorage.setItem("star","All");
                                            word0();
                                        }else if(localStorage.getItem('star')=="All"){
                                            word0();
                                        }else if(String(child[u][10])==localStorage.getItem('star')){
                                            word0();
                                        };
                                    }else{
                                        let vetf=localStorage.getItem('pETF');
                                        if(child[u][4]==vetf){
                                            if(localStorage.getItem('star')===null){
                                                localStorage.setItem("star","All");
                                                word0();
                                            }else if(localStorage.getItem('star')=="All"){
                                                word0();
                                            }else if(String(child[u][10])==localStorage.getItem('star')){
                                                word0();
                                            };
                                        };
                                    }
                                }else if(localStorage.getItem('pFTE')=="All"){
                                    if(localStorage.getItem('pETF')===null){
                                        localStorage.setItem("pETF","All");
                                        if(localStorage.getItem('star')===null){
                                            localStorage.setItem("star","All");
                                            word0();
                                        }else if(localStorage.getItem('star')=="All"){
                                            word0();
                                        }else if(String(child[u][10])==localStorage.getItem('star')){
                                            word0();
                                        };
                                    }else if(localStorage.getItem('pETF')=="All"){
                                        if(localStorage.getItem('star')===null){
                                            localStorage.setItem("star","All");
                                            word0();
                                        }else if(localStorage.getItem('star')=="All"){
                                            word0();
                                        }else if(String(child[u][10])==localStorage.getItem('star')){
                                            word0();
                                        };
                                    }else{
                                        let vetf=localStorage.getItem('pETF');
                                        if(child[u][4]==vetf){
                                            if(localStorage.getItem('star')===null){
                                                localStorage.setItem("star","All");
                                                word0();
                                            }else if(localStorage.getItem('star')=="All"){
                                                word0();
                                            }else if(String(child[u][10])==localStorage.getItem('star')){
                                                word0();
                                            };
                                        };
                                    }
                                }else{
                                    let vfte=localStorage.getItem('pFTE');
                                    if(child[u][5]==vfte){
                                        if(localStorage.getItem('pETF')===null){
                                            localStorage.setItem("pETF","All");
                                            if(localStorage.getItem('star')===null){
                                                localStorage.setItem("star","All");
                                                word0();
                                            }else if(localStorage.getItem('star')=="All"){
                                                word0();
                                            }else if(String(child[u][10])==localStorage.getItem('star')){
                                                word0();
                                            };
                                        }else if(localStorage.getItem('pETF')=="All"){
                                            if(localStorage.getItem('star')===null){
                                                localStorage.setItem("star","All");
                                                word0();
                                            }else if(localStorage.getItem('star')=="All"){
                                                word0();
                                            }else if(String(child[u][10])==localStorage.getItem('star')){
                                                word0();
                                            };
                                        }else{
                                            let vetf=localStorage.getItem('pETF');
                                            if(child[u][4]==vetf){
                                                if(localStorage.getItem('star')===null){
                                                    localStorage.setItem("star","All");
                                                    word0();
                                                }else if(localStorage.getItem('star')=="All"){
                                                    word0();
                                                }else if(String(child[u][10])==localStorage.getItem('star')){
                                                    word0();
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };                    
                    }else{
                            var child=light[num];
                            for(var u=1; u<child.length; ++u){
                                if(localStorage.getItem('pFTE')===null){
                                    localStorage.setItem("pFTE","All");
                                    if(localStorage.getItem('pETF')===null){
                                        localStorage.setItem("pETF","All");
                                        if(localStorage.getItem('star')===null){
                                            localStorage.setItem("star","All");
                                            word0();
                                        }else if(localStorage.getItem('star')=="All"){
                                            word0();
                                        }else if(String(child[u][10])==localStorage.getItem('star')){
                                            word0();
                                        };
                                    }else if(localStorage.getItem('pETF')=="All"){
                                        if(localStorage.getItem('star')===null){
                                            localStorage.setItem("star","All");
                                            word0();
                                        }else if(localStorage.getItem('star')=="All"){
                                            word0();
                                        }else if(String(child[u][10])==localStorage.getItem('star')){
                                            word0();
                                        };
                                    }else{
                                        let vetf=localStorage.getItem('pETF');
                                        if(child[u][4]==vetf){
                                            if(localStorage.getItem('star')===null){
                                                localStorage.setItem("star","All");
                                                word0();
                                            }else if(localStorage.getItem('star')=="All"){
                                                word0();
                                            }else if(String(child[u][10])==localStorage.getItem('star')){
                                                word0();
                                            };
                                        };
                                    }
                                }else if(localStorage.getItem('pFTE')=="All"){
                                    if(localStorage.getItem('pETF')===null){
                                        localStorage.setItem("pETF","All");
                                        if(localStorage.getItem('star')===null){
                                            localStorage.setItem("star","All");
                                            word0();
                                        }else if(localStorage.getItem('star')=="All"){
                                            word0();
                                        }else if(String(child[u][10])==localStorage.getItem('star')){
                                            word0();
                                        };
                                    }else if(localStorage.getItem('pETF')=="All"){
                                        if(localStorage.getItem('star')===null){
                                            localStorage.setItem("star","All");
                                            word0();
                                        }else if(localStorage.getItem('star')=="All"){
                                            word0();
                                        }else if(String(child[u][10])==localStorage.getItem('star')){
                                            word0();
                                        };
                                    }else{
                                        let vetf=localStorage.getItem('pETF');
                                        if(child[u][4]==vetf){
                                            if(localStorage.getItem('star')===null){
                                                localStorage.setItem("star","All");
                                                word0();
                                            }else if(localStorage.getItem('star')=="All"){
                                                word0();
                                            }else if(String(child[u][10])==localStorage.getItem('star')){
                                                word0();
                                            };
                                        };
                                    }
                                }else{
                                    let vfte=localStorage.getItem('pFTE');
                                    if(child[u][5]==vfte){
                                        if(localStorage.getItem('pETF')===null){
                                            localStorage.setItem("pETF","All");
                                            if(localStorage.getItem('star')===null){
                                                localStorage.setItem("star","All");
                                                word0();
                                            }else if(localStorage.getItem('star')=="All"){
                                                word0();
                                            }else if(String(child[u][10])==localStorage.getItem('star')){
                                                word0();
                                            };
                                        }else if(localStorage.getItem('pETF')=="All"){
                                            if(localStorage.getItem('star')===null){
                                                localStorage.setItem("star","All");
                                                word0();
                                            }else if(localStorage.getItem('star')=="All"){
                                                word0();
                                            }else if(String(child[u][10])==localStorage.getItem('star')){
                                                word0();
                                            };
                                        }else{
                                            let vetf=localStorage.getItem('pETF');
                                            if(child[u][4]==vetf){
                                                if(localStorage.getItem('star')===null){
                                                    localStorage.setItem("star","All");
                                                    word0();
                                                }else if(localStorage.getItem('star')=="All"){
                                                    word0();
                                                }else if(String(child[u][10])==localStorage.getItem('star')){
                                                    word0();
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                    };
                    numb.innerHTML="تعداد لغات: "+listword.childNodes.length;                    
                };
            };
            if(document.getElementsByTagName("tr").length==0){
                listword.innerHTML="کلمه‌‌ای وجود ندارد!!!";
            };
        };
        
        function starbotton(a){
            let ligthword = JSON.parse(localStorage.getItem('lightner'));
            let morednazar= a.parentNode.parentNode.childNodes[2].textContent;
            for(let i=0; i<ligthword.length; ++i){
                let children = ligthword[i];
                for(let y=1; y<children.length; ++y){
                    if(morednazar==children[y][0]){
                        if(children[y][10]==true){
                            children[y][10]=false;
                            localStorage.setItem('lightner',JSON.stringify(ligthword));
                            if(localStorage.getItem('color')=="white"){
                                a.childNodes[0].src="./img/sr.b.png";
                            }else{
                                a.childNodes[0].src="./img/sr.w.png";
                            };
                        }else{
                            children[y][10]=true;
                            localStorage.setItem('lightner',JSON.stringify(ligthword));
                            a.childNodes[0].src="./img/sr.y.png";
                        };
                    };
                };
            };
        };

        function clickiocheckbox(t){
            selectwordwork=[];
            var tbl=document.getElementById('tableword');
            let number=0;
            for (let r = 0; r < tbl.getElementsByTagName('tr').length ; ++r) {
                var hasel = tbl.childNodes[r].childNodes[0].childNodes[0].childNodes[0].checked;
                if(hasel==true){
                    ++number;
                };
            };
            if(number==1){
                document.getElementById('bottonscontrollword').style.display="inline-flex";
            }else if(number==0){
                document.getElementById('bottonscontrollword').style.display="none";
            };
        
            for (let r = 0; r < tbl.getElementsByTagName('tr').length ; ++r) {
                var hasel = tbl.childNodes[r].childNodes[0].childNodes[0].childNodes[0].checked;
                if(hasel==true){
                    selectwordwork.push(tbl.childNodes[r].childNodes[2].textContent);
                };
            };
            document.getElementById('numbercheckbox').innerHTML="("+selectwordwork.length+")";
        };
        
        listwordaplly();

        function menu(e,a){
            unselectall();
            let light = JSON.parse(localStorage.getItem('lightner'));
            if(window.innerWidth<700 && window.innerWidth>351){
                document.getElementById('clickreight').style.display="inline-block";
                document.getElementById('clickreightbl').style.display="block";
                document.getElementById('clickreightbl').style.backgroundColor="rgb(0, 0, 0, 0.6)";
                document.getElementById('clickreight').style.transform="translate(-50% , -50%)";
                document.getElementById('clickreight').style.left="50%";
                document.getElementById('clickreight').style.top="50%";
                document.getElementById('clickreight').style.borderRadius="10px";
                document.getElementById('clickreight').style.width="350px";
            }else if(window.innerWidth<350){
                document.getElementById('clickreight').style.display="inline-block";
                document.getElementById('clickreightbl').style.display="block";
                document.getElementById('clickreightbl').style.backgroundColor="rgb(0, 0, 0, 0.6)";
                document.getElementById('clickreight').style.transform="translate(-50% , -50%)";
                document.getElementById('clickreight').style.left="50%";
                document.getElementById('clickreight').style.top="50%";
                document.getElementById('clickreight').style.borderRadius="10px";
                document.getElementById('clickreight').style.width="100%";
            }else{
                document.getElementById('clickreight').style.display="inline-block";
                document.getElementById('clickreightbl').style.display="block";
                document.getElementById('clickreight').style.left=e.clientX+"px";
                document.getElementById('clickreight').style.top=e.clientY+"px";
                document.getElementById('clickreightbl').style.backgroundColor="rgb(0, 0, 0, 0)";
                document.getElementById('clickreight').style.width="350px";
    
                if(window.innerHeight-e.clientY<230){
                    if(window.innerWidth-e.clientX<350){
                        document.getElementById('clickreight').style.transform="translate(-350px , -221px)";
                        document.getElementById('clickreight').style.borderRadius="10px 10px 0px 10px";
                    }else{
                        document.getElementById('clickreight').style.transform="translate(0 , -221px)";
                        document.getElementById('clickreight').style.borderRadius="10px 10px 10px 0px";
                    }
                }else{
                    if(window.innerWidth-e.clientX<350){
                        document.getElementById('clickreight').style.transform="translate(-350px , 0)";
                        document.getElementById('clickreight').style.borderRadius="10px 0px 10px 10px";
                    }else{
                        document.getElementById('clickreight').style.transform="translate(0 , 0)";
                        document.getElementById('clickreight').style.borderRadius="0px 10px 10px 10px";
                    };
                };
            };

            for (var x = 0; x < light.length; x++) {
                let ch = light[x];
                for (var y = 1; y < ch.length; y++) {
                    if(a.parentNode.childNodes[2].textContent==light[x][y][0]){
                        clickR = light[x][y]
                        document.getElementById('clickreight').childNodes[5].innerHTML="تغییر دسته ("+light[x][0]+")";
                        document.getElementById('clickreight').childNodes[7].innerHTML="تغییر وضعیت از انگلیسی به فارسی ("+vazeaten()+")";
                        function vazeaten(){if(light[x][y][4]==0){return('نمی دونم')}else if(light[x][y][4]==1){return('تمرین بیشتر')}else if(light[x][y][4]==2){return('یادگرفتم')}};
                        document.getElementById('clickreight').childNodes[9].innerHTML="تغییر وضعیت از فارسی به انگلیسی ("+vazeatfa()+")";
                        function vazeatfa(){if(light[x][y][5]==0){return('نمی دونم')}else if(light[x][y][5]==1){return('تمرین بیشتر')}else if(light[x][y][5]==2){return('یادگرفتم')}};
                    };           
                };
            };
        };
    };
    setTimeout(unshow,500)
    function unshow(){
        document.getElementById('loadbar').style.display="none";
    }
};

function unclickright(){
    document.getElementById('clickreight').style.display="none";
}

function wordspk3(a){
    let light = JSON.parse(localStorage.getItem('lightner'));
    for (var x = 0; x < light.length; x++) {
        let ch = light[x];
        for (var y = 1; y < ch.length; y++) {
            if(a.parentNode.childNodes[3].textContent==light[x][y][1]){
                var word =light[x][y][1];
            };           
        };
    };

    var msg = new SpeechSynthesisUtterance();
    msg.text = word;
    msg.rate=eval(JSON.parse(localStorage.getItem('speedspeeck')));
    window.speechSynthesis.speak(msg);
};

function wordspk2(){
    var word =clickR[1];
    var msg = new SpeechSynthesisUtterance();
    msg.text = word;
    msg.rate=eval(JSON.parse(localStorage.getItem('speedspeeck')));
    window.speechSynthesis.speak(msg);
};

function delword(){
    let light = JSON.parse(localStorage.getItem('lightner'));        
        var blur0 = document.createElement('div');
        blur0.id="blur2";
        blur0.onclick = function(){
            document.body.removeChild(blur0);
            document.body.removeChild(addwindow3);
        }
        
        var addwindow3 = document.createElement('div');
        addwindow3.className="color";
        addwindow3.id="addwindow1";
        color(addwindow3);

        var p = document.createElement('p');
        p.innerHTML="آیا از پاک‌کردن لغت مطمئن هستید؟";
        p.style.margin="0";
        p.style.marginBottom="10px";

        var bot = document.createElement('botton');
        bot.className="buttons w-50 br-r";
        bot.style.display="inline-block";
        bot.style.textAlign="center";
        bot.innerHTML="خیر";
        bot.onclick=function(){
            document.body.removeChild(blur0);
            document.body.removeChild(addwindow3);
        };
        color(bot);

        var bot1 = document.createElement('botton');
        bot1.className="buttons br-l w-50";
        bot1.style.display="inline-block";
        bot1.style.textAlign="center";
        bot1.innerHTML="بله";
        bot1.onclick=function(){
            document.body.removeChild(blur0);
            document.body.removeChild(addwindow3);
            for(let y=0; y<light.length; ++y){
                let x=light[y];
                for(let u=1; u<x.length; ++u){
                    if(x[u][0]==clickR[0]){
                        document.getElementById('searchsword').value="";
                        let r=light[y];
                        r.splice(u,1);
                        localStorage.setItem('lightner',JSON.stringify(light));
                        alerts("با موفقیت حذف شد.","1");
                        document.body.removeChild(document.getElementById('blur'));
                        document.body.removeChild(document.getElementById('addwindow'));
                        word();
                    };
                };
            };
        };
        color(bot1);
        bot1.style.backgroundColor="red";

        document.body.appendChild(blur0);
        document.body.appendChild(addwindow3);
        document.getElementById('addwindow1').appendChild(p);
        document.getElementById('addwindow1').appendChild(bot);
        document.getElementById('addwindow1').appendChild(bot1);
}

function editword(){
    let light = JSON.parse(localStorage.getItem('lightner'));
    let rrr=0;
    for(let y=0; y<light.length; ++y){
        let x=light[y];
        for(let u=1; u<x.length; ++u){
            ++rrr;
            if(x[u][0]==clickR[0]){
                var blur1 = document.createElement('div');
                blur1.id="blur1";
                blur1.onclick = function(){
                    document.body.removeChild(document.getElementById('blur1'));
                    document.body.removeChild(document.getElementById('addwindow1'));
                };
                
                var title = document.createElement('span');
                title.id="title";
                title.innerHTML="ویرایش";

                var addwindow1 = document.createElement('div');
                addwindow1.className="color";
                addwindow1.id="addwindow1";
                color(addwindow1);

                    var p1 = document.createElement('p');
                    p1.innerHTML="لغت:";
                    p1.style.margin="0";

                var input = document.createElement('input');
                input.className="inputs";
                input.value=x[u][1];

                    var p2 = document.createElement('p');
                    p2.innerHTML="ترجمه:";
                    p2.style.margin="0";

                var input2 = document.createElement('input');
                input2.className="inputs";
                input2.value=x[u][2];

                    var p3 = document.createElement('p');
                    p3.innerHTML="توضیح:";
                    p3.style.margin="0";

                var input3 = document.createElement('input');
                input3.style.marginBottom="10px";
                input3.className="inputs";
                input3.value=x[u][3];

                var bot = document.createElement('botton');
                bot.style.padding="2px 7px";
                bot.style.textAlign="center";
                bot.className="buttons br-r";
                bot.innerHTML="انصراف";
                bot.onclick=function(){
                    document.body.removeChild(document.getElementById('blur1'));
                    document.body.removeChild(document.getElementById('addwindow1'));
                }
                color(bot)

                var bot2 = document.createElement('botton');
                bot2.style.padding="2px 7px";
                bot2.style.textAlign="center";
                bot2.className="buttons br-l";
                bot2.innerHTML="ویرایش";
                bot2.onclick=function(){
                    x[u][1]=input.value;
                    x[u][2]=input2.value;
                    x[u][3]=input3.value;
                    localStorage.setItem('lightner',JSON.stringify(light));
                    document.body.removeChild(document.getElementById('blur1'));
                    document.body.removeChild(document.getElementById('addwindow1'));
                    document.body.removeChild(document.getElementById('blur'));
                    document.body.removeChild(document.getElementById('addwindow'));
                    alerts("ویرایش شد",'1');
                    word();
                };
                color(bot2);

                let div1=document.createElement('div');
                div1.style.width="100%";
                div1.style.justifyContent="left";
                div1.style.display="inline-flex";
                div1.style.marginTop="10px";
                div1.appendChild(bot);
                div1.appendChild(bot2);

                if(localStorage.getItem('font')===null){
                    input.style.fontFamily="iran";
                    input2.style.fontFamily="iran";
                    input3.style.fontFamily="iran";
                }else{
                    switch(eval(localStorage.getItem('font'))){
                        case 1:document.body.style.fontFamily="iran";
                        input.style.fontFamily="iran";
                        input2.style.fontFamily="iran";
                        input3.style.fontFamily="iran";
                        break;
                        case 2:document.body.style.fontFamily="mikh";
                        input.style.fontFamily="mikh";
                        input2.style.fontFamily="mikh";
                        input3.style.fontFamily="mikh";
                        break;
                    };
                };

                document.body.appendChild(blur1);
                document.body.appendChild(addwindow1);
                document.getElementById('addwindow1').appendChild(title);
                document.getElementById('addwindow1').appendChild(p1);
                document.getElementById('addwindow1').appendChild(input);
                document.getElementById('addwindow1').appendChild(p2);
                document.getElementById('addwindow1').appendChild(input2);
                document.getElementById('addwindow1').appendChild(p3);
                document.getElementById('addwindow1').appendChild(input3);
                document.getElementById('addwindow1').appendChild(div1);
                
            };
        };
    };
}

function changecatword(){
    let light=JSON.parse(localStorage.getItem('lightner'));
        for(let y=0; y<light.length; ++y){
            let x=light[y];
            for(let u=1; u<x.length; ++u){
                if(x[u][0]==clickR[0]){
                    var aaa=y;
                    var bbb=u;
                };
            };
        };
        
        var blur0 = document.createElement('div');
        blur0.id="blur2";
        blur0.onclick = function(){
            document.body.removeChild(blur0);
            document.body.removeChild(addwindow3);
        };
        
        var addwindow3 = document.createElement('div');
        addwindow3.className="color";
        addwindow3.id="addwindow1";
        color(addwindow3);

        var p = document.createElement('p');
        p.innerHTML="دسته مورد نظر که می‌خواهید لغت به آن منتقل شود را انتخاب کنید:";
        p.style.margin="0";
        p.style.marginBottom="10px";

        var bot = document.createElement('botton');
        bot.className="buttons br-r w-50";
        bot.style.display="inline-block";
        bot.style.textAlign="center";
        bot.innerHTML="انصراف";
        bot.onclick=function(){
            document.body.removeChild(blur0);
            document.body.removeChild(addwindow3);
        };
        color(bot);
        
        var listgrop1 = document.createElement('select');
        listgrop1.className="";
        listgrop1.style.borderRadius="20px";
        listgrop1.style.width="100%";
        listgrop1.style.marginTop="10px";
        listgrop1.style.marginBottom="15px";
        listgrop1.id="listgrops11";

        let listLength=light.length;
        for(var i = 0; i<listLength; ++i){
            var child = light[i];
            var optLisst = document.createElement('option');
            optLisst.innerHTML=child[0];
            optLisst.value=i;
            optLisst.className="wordOption";
            listgrop1.appendChild(optLisst);
            if(i==aaa){
                optLisst.selected="selected";
            };
        };

        var bot1 = document.createElement('botton');
        bot1.className="buttons w-50 br-l";
        bot1.style.display="inline-block";
        bot1.style.textAlign="center";
        bot1.innerHTML="تغییر";
        bot1.onclick=function(){
            document.getElementById('searchsword').value="";
            var categorynumber= document.getElementById('listgrops11').value; 
            light[categorynumber].push(light[aaa][bbb]);
            let r=light[aaa];
            r.splice(bbb,1);
            localStorage.setItem('lightner',JSON.stringify(light));
            document.body.removeChild(blur0);
            document.body.removeChild(addwindow3);
            alerts("دسته تغییر پیدا کرد.","1");
            document.body.removeChild(document.getElementById('blur'));
            document.body.removeChild(document.getElementById('addwindow'));
            word();
        }
        color(bot1)


        if(localStorage.getItem('font')===null){
            listgrop1.style.fontFamily="iran";
            localStorage.setItem('font','1');
            document.body.style.fontFamily="iran";
        }else{
            switch(eval(localStorage.getItem('font'))){
                case 1:document.body.style.fontFamily="iran";
                listgrop1.style.fontFamily="iran";;
                break;
                case 2:document.body.style.fontFamily="mikh";
                listgrop1.style.fontFamily="mikh";
                break;
            };
        };
        
        document.body.appendChild(blur0);
        document.body.appendChild(addwindow3);
        document.getElementById('addwindow1').appendChild(p);
        document.getElementById('addwindow1').appendChild(listgrop1);
        document.getElementById('addwindow1').appendChild(bot);
        document.getElementById('addwindow1').appendChild(bot1);
}

function changeen(){
    let light=JSON.parse(localStorage.getItem('lightner'));
    for(let y=0; y<light.length; ++y){
        let x=light[y];
        for(let u=1; u<x.length; ++u){
            if(x[u][0]==clickR[0]){
                var aaa=y;
                var bbb=u;
            };
        };
    };
    
    var blur0 = document.createElement('div');
    blur0.id="blur2";
    blur0.onclick = function(){
        document.body.removeChild(blur0);
        document.body.removeChild(addwindow3);
    };
    
    var addwindow3 = document.createElement('div');
    addwindow3.className="color";
    addwindow3.id="addwindow1";
    color(addwindow3);

    var p = document.createElement('p');
    p.innerHTML="وضعیتی که می‌خواهید لغت به آن برود را انتخاب کنید:";
    p.style.margin="0";
    p.style.marginBottom="10px";

    var bot = document.createElement('botton');
    bot.className="buttons br-r w-50";
    bot.style.display="inline-block";
    bot.style.textAlign="center";
    bot.innerHTML="انصراف";
    bot.onclick=function(){
        document.body.removeChild(blur0);
        document.body.removeChild(addwindow3);
    };
    color(bot);
    
    var listgrop1 = document.createElement('select');
    listgrop1.className=" w-100";
    listgrop1.style.marginTop="10px";
    listgrop1.style.marginBottom="15px";
    listgrop1.id="listgrops11";

    let opn1 = document.createElement('option');
    opn1.innerHTML="نمی‌دونم";
    opn1.value=0;
    listgrop1.appendChild(opn1);

    let opn2 = document.createElement('option');
    opn2.innerHTML="تمرین بیشتر";
    opn2.value=1;
    listgrop1.appendChild(opn2);

    let opn3 = document.createElement('option');
    opn3.innerHTML="یادگرفتم";
    opn3.value=2;
    listgrop1.appendChild(opn3);

    if(light[aaa][bbb][4]==0){
        opn1.selected="selected";
    }else if(light[aaa][bbb][4]==1){
        opn2.selected="selected";
    }else if(light[aaa][bbb][4]==2){
        opn3.selected="selected";
    }

    var bot1 = document.createElement('botton');
    bot1.className="buttons w-50 br-l";
    bot1.style.display="inline-block";
    bot1.style.textAlign="center";
    bot1.innerHTML="تغییر";
    bot1.onclick=function(){
        document.getElementById('searchsword').value="";
        var categorynumber= document.getElementById('listgrops11').value;
        light[aaa][bbb][4]=eval(categorynumber);
        localStorage.setItem('lightner',JSON.stringify(light));
        document.body.removeChild(blur0);
        document.body.removeChild(addwindow3);
        document.body.removeChild(document.getElementById('blur'));
        document.body.removeChild(document.getElementById('addwindow'));
        alerts("وضعیت لغت تغییر کرد.","1");
        word();
    }
    color(bot1);


    if(localStorage.getItem('font')===null){
        listgrop1.style.fontFamily="iran";
        localStorage.setItem('font','1');
        document.body.style.fontFamily="iran";
    }else{
        switch(eval(localStorage.getItem('font'))){
            case 1:document.body.style.fontFamily="iran";
            listgrop1.style.fontFamily="iran";
            break;
            case 2:document.body.style.fontFamily="mikh";
            listgrop1.style.fontFamily="mikh";
            break;
        };
    };
    
    document.body.appendChild(blur0);
    document.body.appendChild(addwindow3);
    document.getElementById('addwindow1').appendChild(p);
    document.getElementById('addwindow1').appendChild(listgrop1);
    document.getElementById('addwindow1').appendChild(bot);
    document.getElementById('addwindow1').appendChild(bot1);
};

function changefa(){
    let light=JSON.parse(localStorage.getItem('lightner'));
    for(let y=0; y<light.length; ++y){
        let x=light[y];
        for(let u=1; u<x.length; ++u){
            if(x[u][0]==clickR[0]){
                var aaa=y;
                var bbb=u;
            };
        };
    };
    
    var blur0 = document.createElement('div');
    blur0.id="blur2";
    blur0.onclick = function(){
        document.body.removeChild(blur0);
        document.body.removeChild(addwindow3);
    };
    
    var addwindow3 = document.createElement('div');
    addwindow3.className="color";
    addwindow3.id="addwindow1";
    color(addwindow3);

    var p = document.createElement('p');
    p.innerHTML="وضعیتی که می‌خواهید لغت به آن برود را انتخاب کنید:";
    p.style.margin="0";
    p.style.marginBottom="10px";

    var bot = document.createElement('botton');
    bot.className="buttons br-r w-50";
    bot.style.display="inline-block";
    bot.style.textAlign="center";
    bot.innerHTML="انصراف";
    bot.onclick=function(){
        document.body.removeChild(blur0);
        document.body.removeChild(addwindow3);
    };
    color(bot);
    
    var listgrop1 = document.createElement('select');
    listgrop1.className=" w-100";
    listgrop1.style.marginTop="10px";
    listgrop1.style.marginBottom="15px";
    listgrop1.id="listgrops11";

    let opn1 = document.createElement('option');
    opn1.innerHTML="نمی‌دونم";
    opn1.value=0;
    listgrop1.appendChild(opn1);

    let opn2 = document.createElement('option');
    opn2.innerHTML="تمرین بیشتر";
    opn2.value=1;
    listgrop1.appendChild(opn2);

    let opn3 = document.createElement('option');
    opn3.innerHTML="یادگرفتم";
    opn3.value=2;
    listgrop1.appendChild(opn3);

    if(light[aaa][bbb][5]==0){
        opn1.selected="selected";
    }else if(light[aaa][bbb][5]==1){
        opn2.selected="selected";
    }else if(light[aaa][bbb][5]==2){
        opn3.selected="selected";
    }

    var bot1 = document.createElement('botton');
    bot1.className="buttons w-50 br-l";
    bot1.style.display="inline-block";
    bot1.style.textAlign="center";
    bot1.innerHTML="تغییر";
    bot1.onclick=function(){
        document.getElementById('searchsword').value="";
        var categorynumber= document.getElementById('listgrops11').value;
        light[aaa][bbb][5]=eval(categorynumber);
        localStorage.setItem('lightner',JSON.stringify(light));
        document.body.removeChild(blur0);
        document.body.removeChild(addwindow3);
        document.body.removeChild(document.getElementById('blur'));
        document.body.removeChild(document.getElementById('addwindow'));
        alerts("وضعیت لغت تغییر کرد.","1");
        word();
    }
    color(bot1);


    if(localStorage.getItem('font')===null){
        listgrop1.style.fontFamily="iran";
        localStorage.setItem('font','1');
        document.body.style.fontFamily="iran";
    }else{
        switch(eval(localStorage.getItem('font'))){
            case 1:document.body.style.fontFamily="iran";
            listgrop1.style.fontFamily="iran";
            break;
            case 2:document.body.style.fontFamily="mikh";
            listgrop1.style.fontFamily="mikh";
            break;
        };
    };
    
    document.body.appendChild(blur0);
    document.body.appendChild(addwindow3);
    document.getElementById('addwindow1').appendChild(p);
    document.getElementById('addwindow1').appendChild(listgrop1);
    document.getElementById('addwindow1').appendChild(bot);
    document.getElementById('addwindow1').appendChild(bot1);
};

function selectall(){
    selectwordwork=[];
    var tbl=document.getElementById('tableword');
    for (let r = 0; r < tbl.getElementsByTagName('tr').length ; ++r) {
        tbl.childNodes[r].childNodes[0].childNodes[0].childNodes[0].checked=true;
        selectwordwork.push(tbl.childNodes[r].childNodes[2].textContent);
    };
    document.getElementById('numbercheckbox').innerHTML="("+selectwordwork.length+")";
};

function unselectall(){
    selectwordwork=[];
    var tbl=document.getElementById('tableword');
    for (let r = 0; r < tbl.getElementsByTagName('tr').length ; ++r) {
        tbl.childNodes[r].childNodes[0].childNodes[0].childNodes[0].checked=false;
    };
    document.getElementById('bottonscontrollword').style.display="none";
};

function deletwords(){
    document.getElementById('bottonscontrollword').style.display="none";
    var light=JSON.parse(localStorage.getItem('lightner'));
    var blur0 = document.createElement('div');
    blur0.id="blur2";
    blur0.onclick = function(){
        document.body.removeChild(blur0);
        document.body.removeChild(addwindow3);
        unselectall();
    };
    
    var addwindow3 = document.createElement('div');
    addwindow3.className="color";
    addwindow3.id="addwindow1";
    color(addwindow3);

    var p = document.createElement('p');
    p.innerHTML="آیا از پاک‌کردن لغات انتخاب شده مطمئن هستید؟";
    p.style.margin="0";
    p.style.marginBottom="10px";

    var bot = document.createElement('botton');
    bot.className="buttons w-50 br-r";
    bot.style.display="inline-block";
    bot.style.textAlign="center";
    bot.innerHTML="خیر";
    bot.onclick=function(){
        document.body.removeChild(blur0);
        document.body.removeChild(addwindow3);
        unselectall();
    };
    color(bot);

    var bot1 = document.createElement('botton');
    bot1.className="buttons br-l w-50";
    bot1.style.display="inline-block";
    bot1.style.textAlign="center";
    bot1.innerHTML="بله";
    bot1.onclick=function(){
        for(let r=0; r<selectwordwork.length; ++r){
            for(let x=0; x<light.length; ++x){
                let catg=light[x];
                for(let y=0; y<catg.length; ++y){
                    if(selectwordwork[r]==catg[y][0]){
                        document.getElementById('searchsword').value="";
                        catg.splice(y,1);
                        localStorage.setItem('lightner',JSON.stringify(light));
                    };
                };
            };
        };
        alerts("لغات با موفقیت حذف شد.","1");
        document.body.removeChild(document.getElementById('blur'));
        document.body.removeChild(document.getElementById('addwindow'));
        word();
        document.body.removeChild(blur0);
        document.body.removeChild(addwindow3);
        unselectall();
    };
    color(bot1);
    bot1.style.backgroundColor="red";

    document.body.appendChild(blur0);
    document.body.appendChild(addwindow3);
    document.getElementById('addwindow1').appendChild(p);
    document.getElementById('addwindow1').appendChild(bot);
    document.getElementById('addwindow1').appendChild(bot1);
};

function changecategory(){
    document.getElementById('bottonscontrollword').style.display="none";
    var light=JSON.parse(localStorage.getItem('lightner'));
    var blur0 = document.createElement('div');
    blur0.id="blur2";
    blur0.onclick = function(){
        document.body.removeChild(blur0);
        document.body.removeChild(addwindow3);
        unselectall();
    };
    
    var addwindow3 = document.createElement('div');
    addwindow3.className="color";
    addwindow3.id="addwindow1";
    color(addwindow3);

    var p = document.createElement('p');
    p.innerHTML="دسته مورد نظر که می‌خواهید لغات انتخاب شده به آن منتقل شود را انتخاب کنید:";
    p.style.margin="0";
    p.style.marginBottom="10px";

    var bot = document.createElement('botton');
    bot.className="buttons br-r w-50";
    bot.style.display="inline-block";
    bot.style.textAlign="center";
    bot.innerHTML="انصراف";
    bot.onclick=function(){
        document.body.removeChild(blur0);
        document.body.removeChild(addwindow3);
        unselectall();
    };
    color(bot);
    
    var listgrop1 = document.createElement('select');
    listgrop1.className="";
    listgrop1.style.borderRadius="20px";
    listgrop1.style.width="100%";
    listgrop1.style.marginTop="10px";
    listgrop1.style.marginBottom="15px";
    listgrop1.innerHTML="<option selected disabled value='null'>یک دسته را انتخاب کنید</option>";
    listgrop1.id="listgrops11";

    let listLength=light.length;
    for(var i = 0; i<listLength; ++i){
        var child = light[i];
        var optLisst = document.createElement('option');
        optLisst.innerHTML=child[0];
        optLisst.value=i;
        optLisst.className="wordOption";
        listgrop1.appendChild(optLisst);
    };

    var bot1 = document.createElement('botton');
    bot1.className="buttons w-50 br-l";
    bot1.style.display="inline-block";
    bot1.style.textAlign="center";
    bot1.innerHTML="تغییر";
    bot1.onclick=function(){
        if(document.getElementById('listgrops11').value=="null"){
            alerts("یک دسته را انتخاب کنید.","2");
        }else{
            var categorynumber= document.getElementById('listgrops11').value;
            for(let r=0; r<selectwordwork.length; ++r){
                for(let x=0; x<light.length; ++x){
                    let catg=light[x];
                    for(let y=0; y<catg.length; ++y){
                        if(selectwordwork[r]==catg[y][0]){
                            document.getElementById('searchsword').value="";
                            light[categorynumber].push(catg[y]);
                            catg.splice(y,1);
                        };
                    };
                };
            };
            localStorage.setItem('lightner',JSON.stringify(light));
            alerts("دسته  لغات تغییر پیدا کرد.","1");
            document.body.removeChild(document.getElementById('blur'));
            document.body.removeChild(document.getElementById('addwindow'));
            document.body.removeChild(blur0);
            document.body.removeChild(addwindow3);
            word();
            unselectall();
        };
    };
    color(bot1);


    if(localStorage.getItem('font')===null){
        listgrop1.style.fontFamily="iran";
        localStorage.setItem('font','1');
        document.body.style.fontFamily="iran";
    }else{
        switch(eval(localStorage.getItem('font'))){
            case 1:document.body.style.fontFamily="iran";
            listgrop1.style.fontFamily="iran";
            break;
            case 2:document.body.style.fontFamily="mikh";
            listgrop1.style.fontFamily="mikh";
            break;
        };
    };
    
    document.body.appendChild(blur0);
    document.body.appendChild(addwindow3);
    document.getElementById('addwindow1').appendChild(p);
    document.getElementById('addwindow1').appendChild(listgrop1);
    document.getElementById('addwindow1').appendChild(bot);
    document.getElementById('addwindow1').appendChild(bot1);
};

function changedi(){
    document.getElementById('bottonscontrollword').style.display="none";
    var blur1 = document.createElement('div');
    blur1.id="blur1";
    blur1.onclick = function(){
        document.body.removeChild(document.getElementById('blur1'));
        document.body.removeChild(document.getElementById('addwindow1'));
        unselectall();
    };
    
    var addwindow1 = document.createElement('div');
    addwindow1.className="color";
    addwindow1.id="addwindow1";
    color(addwindow1);

    var bot4 = document.createElement('botton');
    bot4.style.textAlign="center";
    bot4.style.display="inline-block";
    bot4.className="buttons w-50 br-r";
    bot4.innerHTML="تغییر وضعیت<br>en to fa";
    bot4.onclick=function(){
        document.body.removeChild(document.getElementById('blur1'));
        document.body.removeChild(document.getElementById('addwindow1'));
        let light=JSON.parse(localStorage.getItem('lightner'));      
        var blur0 = document.createElement('div');
        blur0.id="blur2";
        blur0.onclick = function(){
            document.body.removeChild(blur0);
            document.body.removeChild(addwindow3);
            unselectall();
        };
        
        var addwindow3 = document.createElement('div');
        addwindow3.className="color";
        addwindow3.id="addwindow1";
        color(addwindow3);

        var p = document.createElement('p');
        p.innerHTML="وضعیتی که می‌خواهید لغات انتخاب شده به آن برود را انتخاب کنید:";
        p.style.margin="0";
        p.style.marginBottom="10px";

        var bot = document.createElement('botton');
        bot.className="buttons w-50 br-r";
        bot.style.display="inline-block";
        bot.style.textAlign="center";
        bot.innerHTML="انصراف";
        bot.onclick=function(){
            document.body.removeChild(blur0);
            document.body.removeChild(addwindow3);
            unselectall();
        };
        color(bot);
        
        var listgrop1 = document.createElement('select');
        listgrop1.className="";
        listgrop1.style.borderRadius="20px";
        listgrop1.style.width="100%";
        listgrop1.style.marginTop="10px";
        listgrop1.style.marginBottom="15px";
        listgrop1.innerHTML="<option selected disabled value='null'>یک وضعیت را انتخاب کنید</option>";
        listgrop1.id="listgrops11";

        let opn1 = document.createElement('option');
        opn1.innerHTML="نمی‌دونم";
        opn1.value=0;
        listgrop1.appendChild(opn1);

        let opn2 = document.createElement('option');
        opn2.innerHTML="تمرین بیشتر";
        opn2.value=1;
        listgrop1.appendChild(opn2);

        let opn3 = document.createElement('option')
        opn3.innerHTML="یادگرفتم";
        opn3.value=2;
        listgrop1.appendChild(opn3);

        var bot1 = document.createElement('botton');
        bot1.className="buttons w-50 br-l";
        bot1.style.display="inline-block";
        bot1.style.textAlign="center";
        bot1.innerHTML="تغییر";
        bot1.onclick=function(){
            if(document.getElementById('listgrops11').value=="null"){
                alerts("یک وضعیت را انتخاب کنید.","2");
            }else{
                var categorynumber= document.getElementById('listgrops11').value ;
                for(let r=0; r<selectwordwork.length; ++r){
                    for(let x=0; x<light.length; ++x){
                        let catg=light[x];
                        for(let y=0; y<catg.length; ++y){
                            if(selectwordwork[r]==catg[y][1]){
                                document.getElementById('searchsword').value="";
                                catg[y][4]=eval(categorynumber);
                            };
                        };
                    };
                };
                localStorage.setItem('lightner',JSON.stringify(light));
                alerts("وضعیت لغات تغییر کرد.","1");
                document.body.removeChild(document.getElementById('blur'));
                document.body.removeChild(document.getElementById('addwindow'));
                document.body.removeChild(blur0);
                document.body.removeChild(addwindow3);
                word();
                unselectall();
            };
        };
        color(bot1);


        if(localStorage.getItem('font')===null){
            listgrop1.style.fontFamily="iran";
            localStorage.setItem('font','1');
            document.body.style.fontFamily="iran";
        }else{
            switch(eval(localStorage.getItem('font'))){
                case 1:document.body.style.fontFamily="iran";
                listgrop1.style.fontFamily="iran";
                break;
                case 2:document.body.style.fontFamily="mikh";
                listgrop1.style.fontFamily="mikh";
                break;
            };
        };
        
        document.body.appendChild(blur0);
        document.body.appendChild(addwindow3);
        document.getElementById('addwindow1').appendChild(p);
        document.getElementById('addwindow1').appendChild(listgrop1);
        document.getElementById('addwindow1').appendChild(bot);
        document.getElementById('addwindow1').appendChild(bot1);
    };
    color(bot4);
    
    var bot5 = document.createElement('botton');
    bot5.style.textAlign="center";
    bot5.style.display="inline-block";
    bot5.className="buttons br-l w-50";
    bot5.innerHTML="تغییر وضعیت<br>fa to en";
    bot5.onclick=function(){
        document.body.removeChild(document.getElementById('blur1'));
        document.body.removeChild(document.getElementById('addwindow1'));
        let light=JSON.parse(localStorage.getItem('lightner')); 
        var blur0 = document.createElement('div');
        blur0.id="blur2";
        blur0.onclick = function(){
            document.body.removeChild(blur0);
            document.body.removeChild(addwindow3);
            unselectall();
        };
        
        var addwindow3 = document.createElement('div');
        addwindow3.className="color";
        addwindow3.id="addwindow1";
        color(addwindow3);

        var p = document.createElement('p');
        p.innerHTML="وضعیتی که می‌خواهید لغات انتخاب شده به آن برود را انتخاب کنید:";
        p.style.margin="0";
        p.style.marginBottom="10px";

        var bot = document.createElement('botton');
        bot.className="buttons br-r w-50";
        bot.style.display="inline-block";
        bot.style.textAlign="center";
        bot.innerHTML="انصراف";
        bot.onclick=function(){
            document.body.removeChild(blur0);
            document.body.removeChild(addwindow3);
            unselectall();
        };
        color(bot);
        
        var listgrop1 = document.createElement('select');
        listgrop1.className="";
        listgrop1.style.borderRadius="20px";
        listgrop1.style.width="100%";
        listgrop1.style.marginTop="10px";
        listgrop1.style.marginBottom="15px";
        listgrop1.innerHTML="<option selected disabled value='null'>یک وضعیت را انتخاب کنید</option>";
        listgrop1.id="listgrops11";

        let opn1 = document.createElement('option');
        opn1.innerHTML="نمی‌دونم";
        opn1.value=0;
        listgrop1.appendChild(opn1);

        let opn2 = document.createElement('option');
        opn2.innerHTML="تمرین بیشتر";
        opn2.value=1;
        listgrop1.appendChild(opn2);

        let opn3 = document.createElement('option');
        opn3.innerHTML="یادگرفتم";
        opn3.value=2;
        listgrop1.appendChild(opn3);

        var bot1 = document.createElement('botton');
        bot1.className="buttons w-50 br-l";
        bot1.style.display="inline-block";
        bot1.style.textAlign="center";
        bot1.innerHTML="تغییر";
        bot1.onclick=function(){
            if(document.getElementById('listgrops11').value=="null"){
                alerts("یک وضعیت را انتخاب کنید.","2");
            }else{
                var categorynumber= document.getElementById('listgrops11').value;
                for(let r=0; r<selectwordwork.length; ++r){
                    for(let x=0; x<light.length; ++x){
                        let catg=light[x];
                        for(let y=0; y<catg.length; ++y){
                            if(selectwordwork[r]==catg[y][0]){
                                document.getElementById('searchsword').value="";
                                catg[y][5]=eval(categorynumber);
                            };
                        };
                    };
                };
                localStorage.setItem('lightner',JSON.stringify(light));
                alerts("وضعیت لغات تغییر کرد.","1");
                document.body.removeChild(document.getElementById('blur'));
                document.body.removeChild(document.getElementById('addwindow'));
                document.body.removeChild(blur0);
                document.body.removeChild(addwindow3);
                word();
                unselectall();
            };
        }
        color(bot1)


        if(localStorage.getItem('font')===null){
            listgrop1.style.fontFamily="iran";
            localStorage.setItem('font','1');
            document.body.style.fontFamily="iran";
        }else{
            switch(eval(localStorage.getItem('font'))){
                case 1:document.body.style.fontFamily="iran";
                listgrop1.style.fontFamily="iran";
                break;
                case 2:document.body.style.fontFamily="mikh";
                listgrop1.style.fontFamily="mikh";
                break;
            };
        };
        
        document.body.appendChild(blur0);
        document.body.appendChild(addwindow3);
        document.getElementById('addwindow1').appendChild(p);
        document.getElementById('addwindow1').appendChild(listgrop1);
        document.getElementById('addwindow1').appendChild(bot);
        document.getElementById('addwindow1').appendChild(bot1);
    };
    color(bot5);

    document.body.appendChild(blur1);
    document.body.appendChild(addwindow1);
    document.getElementById('addwindow1').appendChild(bot4);
    document.getElementById('addwindow1').appendChild(bot5);
};

function starchange(){
    document.getElementById('bottonscontrollword').style.display="none";
    var light=JSON.parse(localStorage.getItem('lightner'));
    var blur0 = document.createElement('div');
    blur0.id="blur2";
    blur0.onclick = function(){
        document.body.removeChild(blur0);
        document.body.removeChild(addwindow3);
        unselectall();
    };
    
    var addwindow3 = document.createElement('div');
    addwindow3.className="color";
    addwindow3.id="addwindow1";
    color(addwindow3);

    var p = document.createElement('p');
    p.innerHTML="وضعیت ستاره بودن لغات را مشخص کنید:";
    p.style.margin="0";
    p.style.marginBottom="10px";

    var bot = document.createElement('botton');
    bot.className="buttons br-r w-50";
    bot.style.display="inline-block";
    bot.style.textAlign="center";
    bot.innerHTML="انصراف";
    bot.onclick=function(){
        document.body.removeChild(blur0);
        document.body.removeChild(addwindow3);
        unselectall();
    };
    color(bot);
    
    var listgrop1 = document.createElement('select');
    listgrop1.className="";
    listgrop1.style.borderRadius="20px";
    listgrop1.style.width="100%";
    listgrop1.style.marginTop="10px";
    listgrop1.style.marginBottom="15px";
    listgrop1.innerHTML="<option selected disabled value='null'>یک دسته را انتخاب کنید</option><option value='true'>ستاره دار</option><option value='false'>بدون ستاره</option>";
    listgrop1.id="listgrops11";

    var bot1 = document.createElement('botton');
    bot1.className="buttons w-50 br-l";
    bot1.style.display="inline-block";
    bot1.style.textAlign="center";
    bot1.innerHTML="تغییر";
    bot1.onclick=function(){
        if(document.getElementById('listgrops11').value=="null"){
            alerts("یک وضعیت را انتخاب کنید","2");
        }else{
            var categorynumber= document.getElementById('listgrops11').value;
            if(categorynumber=="true"){
                for(let r=0; r<selectwordwork.length; ++r){
                    for(let x=0; x<light.length; ++x){
                        let catg=light[x];
                        for(let y=0; y<catg.length; ++y){
                            if(selectwordwork[r]==catg[y][0]){
                            catg[y][10]=true;
                            };
                        };
                    };
                };
                localStorage.setItem('lightner',JSON.stringify(light));
                alerts("دسته  لغات تغییر پیدا کرد.","1");
                document.body.removeChild(document.getElementById('blur'));
                document.body.removeChild(document.getElementById('addwindow'));
                document.body.removeChild(blur0);
                document.body.removeChild(addwindow3);
                word();
                unselectall();
            }else if(categorynumber=="false"){
                for(let r=0; r<selectwordwork.length; ++r){
                    for(let x=0; x<light.length; ++x){
                        let catg=light[x];
                        for(let y=0; y<catg.length; ++y){
                            if(selectwordwork[r]==catg[y][0]){
                            document.getElementById('searchsword').value="";
                                catg[y][10]=false;
                            };
                        };
                    };
                };
                localStorage.setItem('lightner',JSON.stringify(light));
                alerts("دسته  لغات تغییر پیدا کرد.","1");
                document.body.removeChild(document.getElementById('blur'));
                document.body.removeChild(document.getElementById('addwindow'));
                document.body.removeChild(blur0);
                document.body.removeChild(addwindow3);
                word();
                unselectall();
            };
        };
    };
    color(bot1);


    if(localStorage.getItem('font')===null){
        listgrop1.style.fontFamily="iran";
        localStorage.setItem('font','1');
        document.body.style.fontFamily="iran";
    }else{
        switch(eval(localStorage.getItem('font'))){
            case 1:document.body.style.fontFamily="iran";
            listgrop1.style.fontFamily="iran";
            break;
            case 2:document.body.style.fontFamily="mikh";
            listgrop1.style.fontFamily="mikh";
            break;
        };
    };
    
    document.body.appendChild(blur0);
    document.body.appendChild(addwindow3);
    document.getElementById('addwindow1').appendChild(p);
    document.getElementById('addwindow1').appendChild(listgrop1);
    document.getElementById('addwindow1').appendChild(bot);
    document.getElementById('addwindow1').appendChild(bot1);
};

// var wordupdeit=JSON.parse(localStorage.getItem('lightner'));
// var xy=[["درس 1 یازدهم"],["درس 2 یازدهم"]];
// for (let y = 1; y < wordupdeit[0].length; y++){
//     if(y==1){
//         wordupdeit[0][y].unshift(10000)
//         console.log(wordupdeit[0][y]);
//         xy[0].push(wordupdeit[0][y])
//     }else{
//         wordupdeit[0][y].unshift(wordupdeit[0][y-1][0]+1)
//         xy[0].push(wordupdeit[0][y])
//     }
// }
// for (let y = 1; y < wordupdeit[1].length; y++){
//     if(y==1){
//         wordupdeit[1][y].unshift(10189)
//         xy[1].push(wordupdeit[1][y])
//     }else{
//         wordupdeit[1][y].unshift(wordupdeit[1][y-1][0]+1)
//         xy[1].push(wordupdeit[1][y])
//     }
// }
// console.log(xy);
// localStorage.setItem('lightner',JSON.stringify(xy))

//okeydown های تمرین روزانه
//انتخاب شدن خودکار inputها
//اکسل
//لیست های کشویی و ورودی های سایت استایل دهی شود

//کاهش کدها
//خطا یابی