let n=11,flag=0;
for (let index = 2; index <=n; index++) {
  flag=0;
  for (let indexi = 2; indexi <index; indexi++) {
   if((index%indexi===0))
  {
    flag++;
  }
   
  }
  
  
}