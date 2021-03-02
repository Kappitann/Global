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

