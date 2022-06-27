let cout = (num , fn)=>{
    fn(num);
    num > 0 ? cout(num -1,fn) : num;
}
cout(5,value=> console.log(value))