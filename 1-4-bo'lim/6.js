// function logResult(a,b,c){
//     const V = findVolume(a*b*c);
//     const S = findSurface(2*(a*b + b*c + a*c))
//     console.log('findVolume: $(V)', 'findSurface: $(S)')
// }
// logResult(2,3,1)


function logResult(a,b,c){
    return a*b*c;

}
console.log(logResult(1,2,3))




function logResult2(a,b,c){
    return 2*(a*b + b*c+ a*c);
}
console.log(logResult2(1,2,3))

