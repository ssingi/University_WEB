let coupon = parseInt(prompt("쿠폰 개수를 입력하세요"));
document.writeln("쿠폰: "+coupon+"장<hr>");
if(coupon >= 20){
    document.writeln("여행용 가방");
}else if(coupon >= 10){
    document.writeln("다이어리");
}else{
    document.writeln("커피 한 잔");
}