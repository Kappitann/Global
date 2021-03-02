//1
{
    console.log('task 1:');
    function seconds(total) {
        return total%60;
    }
    console.log(seconds(100));
}
//2
{
    console.log('task 2:');
    function perimeter(side, count){
        return side*count;
    }
    console.log(perimeter(3,5));
}
//3
{
    console.log('task 3:');
    function task3(n){
        for (let i = 1; i < n; i++) {
            if(i%5==0&&i%3==0){
                console.log('fizzbuzz');
            }
            else if(i%3==0){
                console.log(`fizz`);
            }
            else if(i%5==0){
                console.log('buzz');
            }
            else{
                console.log(i);
            }
        }
    }
    task3(16);
}
//4
{
    console.log('task 4:');
    function calculate(a=0, b=0, c=0){
        return (a+b+c)/3;
    };
    console.log(calculate(4,5,3));
}
//5
console.log('task 5:');
function isDivisible(n,x,y){
    let bool = false;
    if(n%x==0&& n%y==0){
        bool = true;
    }
    else{
        bool = false;
    }

    n%x==0&& n%y==0? bool2=true: bool2=false;

    return bool;

}
console.log(isDivisible(3,4,5));
//6
{
    console.log('task 6:');
    function task6(elementsCount){
        function random(min, max) {
            return Math.round(min + Math.random() * (max - min));
        }
        let arrodd = [];
        let arr = [];
        for (let i = 0; i < elementsCount; i++) {
            arr.push(random(1,100));
        }
        console.log(arr);
        let maxValue = 0;
        let minValue = 1000;
        let elementsSum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maxValue) {
                maxValue = arr[i];
            }
            if (arr[i] < minValue) {
                minValue = arr[i];
            }
            if (arr[i] % 2 == 1) {
                arrodd.push(arr[i]);
            }
            elementsSum += arr[i];
        }
        console.log("max " + maxValue);
        console.log("min " + minValue);
        console.log("sum " + elementsSum);
        console.log("average " + elementsSum / arr.length);
        console.log("odd " + arrodd);
    }
    task6(10);
}
//7
{
    console.log('task 7:');
    function task7() {
        let arr = [[],[],[],[],[]];
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                arr[i][j] = Math.round(-50 + Math.random() * (100));
            }
        }
        console.log(arr);
        let mas = arr.slice();
        for (let i = 0; i < 5; i++) {
            if (mas[i][i] < 0) {
                mas[i][i] = 0;
            }
            if (mas[i][i] > 0) {
                mas[i][i] = 1;
            }
        }
        console.log(mas);
    }
    task7();
}

