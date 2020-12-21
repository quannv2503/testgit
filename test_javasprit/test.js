function nhoNhat(array){
    var min =array[0];
    for (let i = 1; i <array.length ; i++) {
        if (min>array[i]){
            min=array[i];
        }
    }
    return min;
}
let a=[3, 5, 1, 8, -3, 7, 8];
let n=nhoNhat(a);
document.write(n);