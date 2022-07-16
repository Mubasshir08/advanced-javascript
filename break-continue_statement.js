const array = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // if(element > 5){
    //     break;   
    // }
    // if(element < 7){
    //     continue;
    // }
    console.log(element); // by using continue it will return (7,8,9)::: by using break it will return (1,2,3,4,5)
}