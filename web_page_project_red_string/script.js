<script language =javascript >
var curindex=0;
 //時間間隔 單位毫秒
var timeinterval=1000;
var arr=new array();
arr="sup1.jpg";
arr[1]="sup2.jpg";
arr[2]="sup3.jpg";
arr[3]="sup4.jpg";
arr[4]="sup5.jpg";
arr[5]="sup6.jpg";
arr[6]="sup7.jpg";

setinterval(changeimg,timeinterval);

function changeimg()
15{
16    var obj=document.getelbentbyid("obj");
17    if (curindex==arr.length-1)
18    {
19        curindex=0;
20    }
21    else
22    {
23        curindex+=1;
24    }
25    obj.src=arr[curindex];
26}
27</script>
28
29<img id=obj src ="1.jpg" border =0 />
