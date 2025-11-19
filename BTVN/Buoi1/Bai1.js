let arrBool = [];
try {
    // cho phep ng dung so luong phan tu trong mang
    let n = prompt("So luong phan tu trong mang: ");
    // chuyen kieu du lieu
    n = parseInt(n);
    // k be hon 0 
    if (n < 0) {
      throw new Error("Số lượng phần tử không hợp lệ!");
    }
    // chay vong lap de nhap gia tri cho tung phan tu
    for (let index = 0; index < n; index++) {
        const element = confirm(
            `Gia tri phan tu ${index} la true?\n(OK: true, Cancel: false)`
        );
        arrBool.push(element); // them phan tu -> PUSH
    }
    // dem so luong true
    let trueCounterTag = document.getElementById("trueCounter");
    let counter = 0;
    // cach 1: dung vong lap forEach
    arrBool.forEach((value) => {
        if (value === true) {
            counter++;
        }
    });
    trueCounterTag.innerText = counter;
    // Cach 2: dung ham filter ........
    // reduce (callback: xu ly, initiaValue: gtri khoi tao) -> tra ve 1 gia tri
    let trueCount = 0;
    trueCount = arrBool.reduce(function (accumulater, currentValue) {
        if (currentValue === true) {
            return accumulater + 1;
        }
    }, trueCount);
    trueCounterTag.innerText = trueCount;
} catch (error) {
    console.error("Co loi xay ra: ", error);
    alert(error);
}