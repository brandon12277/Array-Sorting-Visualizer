var arr=[],array = [],sort=false,length=0;
//function to delete array row
framerate=()=>{if(arr.length<=55)return 50;
               else if(arr.length<=20)return 100;
               else if(arr.length<=100)return 13;
               else if(arr.length<=160)return 3;
               else if(arr.length>=180)return 0.01;
    }
function deleterow()
{
   const myNode = document.getElementById("content");
   while (myNode.firstChild) {
   myNode.removeChild(myNode.lastChild);
}
}
//function to add the randomized array
var slider = document.getElementById("myRange");


function addRow() {
var slider = document.getElementById("myRange");
length=slider.value;
if(sort==false)//to check if array is sorted or not
return;
else
deleterow();
arr=[];sort=false;array=[];
maxelem=200,minelem=10;  
var arrsize=length,copysize=arrsize;
for(let i=0;i<arrsize;i++)
{
var div = document.createElement('div');
div.className = 'row';
div.id="set"+i;
arr.push(Math.floor(Math.floor(Math.random()*(maxelem-minelem+1)+minelem)));
div.style.height=arr[i]+"px";
document.getElementById('content').appendChild(div);
}
}     

//to check if array is sorted or not
function ascendsort(arr)
{
if(sort==true)//to check if array is sorted or not
return;
var id=null;var j=0,i=0;sort=true;
clearInterval(id);
var maxelem=300;
var frames=framerate();
id=setInterval(frame,frames);
return null;
function frame(){
    if(sort==false){clearInterval(id);return;}//to check if array is sorted or not
    document.getElementById("set"+j).style.backgroundColor="red";
    if(i===(arr.length)-1){document.getElementById("set"+0).style.backgroundColor="red";var time1=performance.now();document.getElementById("arraysize").innerHTML="ARRAY SORTING TOOK "+(time1-time0)+" Ms";clearInterval(id);}   
    else{
        
        if(j>0){
                document.getElementById("set"+(j-1)).style.backgroundColor="orange";
         }
         if(j===(arr.length-i-1)){j=0;i++;}
         
        if(arr[j]>arr[j+1])
         {
       let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
        var any=document.getElementById("set"+j).style.height;
        document.getElementById("set"+j).style.height=document.getElementById("set"+(j+1)).style.height;
        document.getElementById("set"+(j+1)).style.height=any;
        
        
       }
       
    }
    j++;
}
}


 

function selectionsort()
{
if(sort==true)//to check if array is sorted or not
return;
var id=null;var i=0,min=i,j=i+1;sort=true;
clearInterval(id);
var frames=framerate();
id=setInterval(frame,frames);
return null;
function frame(){
    if(sort==false){clearInterval(id);return;}//to check if array is sorted or not
    document.getElementById("set"+i).style.backgroundColor="red";
    document.getElementById("set"+j).style.backgroundColor="red";
    if(i===(arr.length)-1){
    document.getElementById("set"+(i)).style.backgroundColor="red";
    clearInterval(id);
    }   
    else{
        
        if(j>0 && i!=(arr.length)-2){
                document.getElementById("set"+(j-1)).style.backgroundColor="orange";
         }
         if(arr[j]>arr[min])min=j;
         if(j===arr.length-1){
            document.getElementById("set"+j).style.backgroundColor="orange";
            let temp=arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
            var any=document.getElementById("set"+i).style.height;
            document.getElementById("set"+i).style.height=document.getElementById("set"+min).style.height;
            document.getElementById("set"+min).style.height=any;
            j=i+1;i++,min=i;
        }
    }
    j++;
}
}
function shellSort() {
    if(sort==true)//to check if array is sorted or not
    return;
    var N = arr.length,id=null;sort=true;
    var h =1,i=h,j=i;
    while (h<Math.floor(N/3)) h=(3*h)+1; // 1, 4, 13, 40, 121, 364, 1093, ...
    frames=framerate();
    id=setInterval(frame,frames);
    return null;
    function frame(){
        if(sort==false){clearInterval(id);return;}//to check if array is sorted or not
        if(h>=1){
            if(i<N){
                if(j>=h && arr[j]>arr[j-h]){
                document.getElementById("set"+j).style.backgroundColor="red";
                document.getElementById("set"+(j-h)).style.backgroundColor="red";
                let temp=arr[j];
                arr[j]=arr[j-h];
                arr[j-h]=temp;
                var any=document.getElementById("set"+j).style.height;
                document.getElementById("set"+j).style.height=document.getElementById("set"+(j-h)).style.height;
                document.getElementById("set"+(j-h)).style.height=any;
                j-=h;
                }
                else{i++;j=i;}
            }
            else{h=Math.floor(h/3);i=h;j=i;}
        }
        else{document.getElementById("set"+(arr.length-1)).style.backgroundColor="red";clearInterval(id);}
    }
    //bug in shell sort certain elements not sorting using for loop in meantime until bug clarified
    
    }
    
