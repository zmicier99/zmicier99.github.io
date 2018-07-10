//formattedTime.js
//Реализуйте и экспортируйте 
//по умолчанию функцию, которая принимает на вход 
//количество минут (прошедших с начала суток) и 
//возвращает строку, являющуюся временем в формате чч:мм.

const formattedTime = (num) => {
  let hours;
  let minutes=60;
  let result;
  
  if (num%minutes === 0) {
    hours = num/minutes;
  return result = `В Минске ${hours}:00`;
  }
  else 
  hours=Math.floor(num/minutes);
  minutes=num-hours*60;
  return result = `В Минске ${hours}:${minutes}`;
  
  }
  
  formattedTime(754);
