var arr=[],array = [],sort=false,length=0,pause=false;


//function to delete array row
framerate=()=>{
    if(arr.length<=20)return 300;
               else if(arr.length<=50)return 200;
               else if(arr.length<=100)return 60;
               else if(arr.length<=160)return 50;
               else if(arr.length>=180)return 50;
    }
function deleterow()
{
   const myNode = document.getElementById("content");
   while (myNode.firstChild) {
   myNode.removeChild(myNode.lastChild);
}
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }


//function to add the randomized array
var slider = document.getElementById("myRange");



document.getElementById("pause").addEventListener("click",()=>{pause=true});
document.getElementById("play").addEventListener("click",()=>{pause=false});

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
pause=false;
var id=null;var j=0,i=0;sort=true;
clearInterval(id);
var maxelem=300;
var frames=framerate();
id=setInterval(frame,frames);
return null;
function frame(){
    if(pause==true);
    else{
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
}


 

function selectionsort()
{
if(sort==true)//to check if array is sorted or not
return;
pause=false;
var color=['pink','orange']
var id=null;var i=0,min=i,j=i+1;sort=true;
var it_count=0;
clearInterval(id);
var frames=framerate();
id=setInterval(frame,frames);
return null;
async function frame(){
    if(pause==true);
    else{
    if(sort==false){clearInterval(id);return;}//to check if array is sorted or not
    document.getElementById("set"+i).style.backgroundColor="red";
    document.getElementById("set"+j).style.backgroundColor="red";
    if(i===(arr.length)-1){
    document.getElementById("set"+(i)).style.backgroundColor="red";
    clearInterval(id);
    }   
    else{
        
        if(j>0 && i!=(arr.length)-2){
            
                if(it_count%2==0)document.getElementById("set"+(j-1)).style.backgroundColor=color[1];
                else
                document.getElementById("set"+(j-1)).style.backgroundColor=color[0];
                
         }
         if(arr[j]<arr[min])min=j;
         if(j===arr.length-1){
            document.getElementById("set"+j).style.backgroundColor="orange";
            
            let temp=arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
            var any=document.getElementById("set"+i).style.height;
            document.getElementById("set"+i).style.height=document.getElementById("set"+min).style.height;
            document.getElementById("set"+min).style.height=any;
            j=i+1;i++,min=i;
            it_count++;
        }
    }
    j++;
}
}
}
function shellSort() {
    if(sort==true)//to check if array is sorted or not
    return;
    pause=false;
    var N = arr.length,id=null;sort=true;
    var h =1,i=h,j=i;
    while (h<Math.floor(N/3)) h=(3*h)+1; // 1, 4, 13, 40, 121, 364, 1093, ...
    frames=framerate();
    id=setInterval(frame,frames);
    return null;
    async function frame(){
        if(pause==true);
        else{
        if(sort==false){clearInterval(id);return;}//to check if array is sorted or not
        if(h>=1){
            if(i<N){
                if(document.getElementById("set"+i).style.backgroundColor!='red'){ document.getElementById("set"+i).style.backgroundColor="orange";
                await sleep(500);}
                  

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
                else{ i++;j=i;}
            }
            else{h=Math.floor(h/3);i=h;j=i;}
        }
        else{document.getElementById("set"+(arr.length-1)).style.backgroundColor="red";clearInterval(id);}
    }
   }
    //bug in shell sort certain elements not sorting using for loop in meantime until bug clarified
    
    }
    function insertionSort() {
        if(sort==true)//to check if array is sorted or not
        return;
        pause=false;
        var N = arr.length,id=null;sort=true;
        var i=1,j=i; var value=arr[i];
        frames=framerate();
        id=setInterval(frame,frames);

         function frame(){
            if(pause==true);
            else{
            if(sort==false){clearInterval(id);return;}
           
            if(i===(arr.length)){document.getElementById("set"+0).style.backgroundColor="red";var time1=performance.now();clearInterval(id);} 
            else{
                document.getElementById("set"+j).style.backgroundColor="orange";
               
                if(j>0 && arr[j-1]<value){
                    
                    arr[j]=arr[j-1];
                    document.getElementById("set"+j).style.backgroundColor="red"
                    document.getElementById("set"+(j-1)).style.backgroundColor="red"
                    document.getElementById("set"+j).style.height=document.getElementById("set"+(j-1)).style.height;
                    j--;
                }
                else{
                   
                   
                    arr[j]=value;
                    document.getElementById("set"+j).style.height=value;
                    document.getElementById("set"+j).style.backgroundColor="red"
                    
                    i++;
                    j=i;
                    value=arr[i];
                    
                }
                
            }
           
           
            
           



        }
     }

    }



    

function quickSort()
 
    {
        var low=0;
        var high=arr.length-1;
        let stack = new Array(high - low + 1);
        stack.fill(0);
   
        // initialize top of stack
        let top = -1;
   
        // push initial values of l and h to
        // stack
        stack[++top] = low;
        stack[++top] = high;
   
        // Keep popping from stack while
        // is not empty
        console.log(top);
        var id,pivot,i,j,p=0,partition_end=false,partition_start=true;
       
        var id=setInterval(()=>{
            if(top<0)clearInterval(id);
              else{
                console.log("in 1")
                if(partition_start===true){
                    console.log("in 2")
                high = stack[top--];
                low = stack[top--];
                j=low;
                pivot=arr[high];
                i=low-1;
                partition_start=false;
                }

                if(partition_end===true){
                    console.log("bye")
                    p=i+1;
                   
                    
                    if (p - 1 > low) {
                        stack[++top] = low;
                        stack[++top] = p - 1;
                    }
           
                    // If there are elements on
                    // right side of pivot, then
                    // push right side to stack
                    if (p + 1 < high) {
                        stack[++top] = p + 1;
                        stack[++top] = high;
                    }
                    partition_end=false;
                    partition_start=true;
                    j=low;
                    pivot=arr[high];
                    i=low-1;
                    
                  }

                if(j>=high){
                    console.log("in 4")
                    partition_end=true;
                    var temp=arr[i];
                    var temp2=document.getElementById("set"+(i+1)).height;
                    document.getElementById("set"+(i+1)).height=document.getElementById("set"+high).height
                    arr[i+1]=arr[high];
                    document.getElementById("set"+high).height=temp2;
                    arr[high]=temp;                 
                    document.getElementById("set"+(i+1)).style.backgroundColor="red"
                    document.getElementById("set"+high).style.backgroundColor="red"
               }
                else{
                   
                   if(arr[j]<=pivot){
                    console.log("in 3")
                          i++;
                          var temp=arr[i];
                          var temp2=document.getElementById("set"+i).height;
                          document.getElementById("set"+i).height=document.getElementById("set"+j).height
                          arr[i]=arr[j];
                          document.getElementById("set"+j).height=temp2;
                          arr[j]=temp;
                          document.getElementById("set"+i).style.backgroundColor="red"
                          document.getElementById("set"+j).style.backgroundColor="red"
                          
                   }
                   j++;
                }
                

               
                }

               
        },100)
       
    }
    
