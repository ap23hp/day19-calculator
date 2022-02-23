const container=document.createElement("div")
container.innerHTML=`<div class="main" >


<div class="container">
<input  type="text" class="screen" id="screen"   />
<table class="table table-borderless" > 
    <tr>
        <td ><button class="btn btn-light aa">C</button> </td>
        <td> <button  class="btn btn-light arrow">0</button></td>
        <td> <button class="btn btn-light first dot">.</button></td>
        <td class="first"><button  class="btn btn-light first">X</button> </td>
    </tr>
    <tr>
        <td> <button   class="btn btn-light seven"> 7</button></td>
        <td>  <button  class="btn btn-light eight"> 8</button></td>
        <td> <button  class="btn btn-light nine"> 9</button> </td>
        <td > <button  class="btn btn-light first slash"> /</button> </td>
    </tr>
    <tr>
        <td>  <button  class="btn btn-light four"> 4</button></td>
        <td>  <button class="btn btn-light five"> 5</button></td>
        <td> <button  class="btn btn-light six"> 6</button> </td>
        <td > <button  class="btn btn-light first sub"> -</button> </td>
    </tr>
    <tr>
        <td>  <button  class="btn btn-light one"> 1</button></td>
        <td> <button  class="btn btn-light two"> 2</button> </td>
        <td>  <button  class="btn btn-light three"> 3</button></td>
        <td > <button  class="btn btn-light first add"> +</button> </td>
    </tr>
    <tr>
        <td> <button  class="btn btn-light zerr"> 00</button> </td>
        <td> <button class="btn btn-light zerro"> 000</button> </td>
        <td colspan="2"> <button  class=" btn last">=</button></td>
       
    </tr>
</table>
</div>
</div>
`
document.body.appendChild(container);


let screen=document.getElementById("screen");
buttons=document.querySelectorAll("button");
let screenValue="";
for(item of buttons){
    item.addEventListener("click",(e)=>{
       
        buttonText=e.target.innerText;
       screen.value=buttonText;
      console.log("button text is : ",buttonText)
        
    //  console.log("hello",e)
    if(buttonText=="X"){
        buttonText="*";
        screenValue+=buttonText;
        screen.value=screenValue;
    }
    else if(buttonText=="C"){
    screenValue="0";
    screen.value=screenValue;
    }
    else if(buttonText=="="){
        screen.value=eval(screenValue)
    }
    else if(buttonText=="<--"){
        screenValue=scree.value.splice(-1,1);
        screen.value=screenValue;
        }
        else if(buttonText == '<--'){
            buttonText -= '';
      let number = screenvalue;
      let len = number.length-1;
      let newnumber = number.slice(0,len);
      screenvalue = newnumber ;
      screen.value = screenvalue ;
        }
    else{
        screenValue+=buttonText;
        screen.value=screenValue;
    }
        
    })

}




                   




