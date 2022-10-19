let n=11,flag=0;

for (let index = 1; index <=n; index++) {

   if((n%index===0)){

    flag++;

  }

}

if(flag>2){

  console.log(" not prime");

}else{

  console.log("prime");
}