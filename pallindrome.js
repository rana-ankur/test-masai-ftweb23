let str="abcba";
let count=0;
for(let i=0;i<str.length;i++)
  {
    if(str[i]===str[str.length-1-i])
    {
      count++;
    }
  }
