const band={
bandname:"onedirection",
famoussong:"steal my girl",
year:1999
};
// const bandname=band.bandname;
// const famoussong=band.famoussong;
// console.log(bandname,famoussong);

const{bandname:var1,famoussong:var2,...rest}=band;
console.log(var1);
console.log(rest);


