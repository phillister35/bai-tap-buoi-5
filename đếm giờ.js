let time = 20;
let i = time/2
while (time > 0) {
  if (time === i) {
    console.log("Đã quá nửa thời gian");
  } else {
    console.log(`Còn lại ${time} giây`);
  }
  time--;
}
console.log("Đã hết giờ ");