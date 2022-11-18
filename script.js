
  /*Дано:

Три товара с категории vegetables:
cabbage = 8;
avocado = 30;
tomato = 10;

Три товара с категории fruits:
grapes = 20;
raspberry = 25;
coconut = 50;

Задача: в зависимости от выбранного пользователем периода (winter или summer), категории (vegetables или fruits), товара с выбранной категории (vegetables: cabbage, avocado, tomato или fruits: grapes, raspberry, coconut), и количества единиц выбранного товара – посчитать финальную стоимость покупки и вывести всю информацию о выбранном товаре в html.

Порядок действий:
Запрашиваем у пользователя период, в которой он совершает покупку: winter или summer.
Если пользователь вводит winter, то финальное значение стоимости покупки будет умножаться на 2
Если пользователь вводит summer, то финальное значение стоимости покупки будет умножаться на 0.8
Важно: 
Продолжаем запрашивать у пользователя название периода до тех пор, пока не будет введено слово ‘winter’ либо ‘summer’.
Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова. 
Запрашиваем у пользователя категорию, с которой он будет далeе выбирать товар: vegetables или fruits.
Важно: 
Продолжаем запрашивать у пользователя название категории до тех пор, пока не будет введено слово ‘vegetables’ либо ‘fruits’.
Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова. 
Запрашиваем у пользователя товар в зависимости от выбранной ранее категории.
Для категории vegetables пользователь может ввести название товара cabbage или avocado или tomato.
Для категории fruits пользователь может ввести название товара grapes или raspberry или coconut.
Важно: 
Продолжаем запрашивать у пользователя название товара до тех пор, пока не будет введено название одного из трех допустимых товаров.
Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова.
Запрашиваем у пользователя количество единиц ранее выбранного товара.
Важно:
Введенное значение должно быть числом и не меньше 1.
Выводим в html информацию о выбранном товаре с финальной стоимостью покупки. Вариант вывода:
*/
//Робимо масиви
vegCateg = ['cabbage','avocado','tomato'];
fruitCateg = ['grapes','raspberry','coconut'];
vegPriceList = [8, 30, 10]; 
fruitPriceList = [20, 25, 50];
//Робимо запити у користувача 
do {
   season = prompt(`Winter or summer period?`).trim().replaceAll(` `, ``).toLowerCase();
   } while(!(season == 'winter' || season == 'summer'))
  console.log(season);
   category = prompt(`Choose category in which you want to buy products: vegetables or fruit?`).trim().replaceAll(` `, ``).toLowerCase();
if (season == 'winter'){
    sum = 2;
   } else sum = 0.8;
//Умова
switch (category) {
    case 'fruit':
    do {
    fruit = prompt(`Choose products from category fruit: grapes, raspberry or coconut`).trim().replaceAll(` `, ``).toLowerCase();
    prodPrice = fruitPriceList[fruitCateg.indexOf(fruit)];
    } while(fruitCateg.indexOf(fruit)===-1)
  console.log(fruit);
    break;
    case 'vegetables':
do {
    vegetables = prompt(`Choose products from category vegetables: cabbage, avocado or tomato`).trim().replaceAll(` `, ``).toLowerCase();
    vegType = vegCateg.indexOf(vegetables)
    prodPrice = vegPriceList[vegType];
    } while(vegCateg.indexOf(vegetables)<0)
     console.log(vegetables);
    break;   
    }
do {
    price = prompt(`Enter quantity`);
    if(price !== null){
    price = parseInt(price.replaceAll(` `, ``));
    }
    } while(isNaN(price) || price == null || price <= 1);
    totalSum = prodPrice * sum * price;
  console.log(`Your total is: ${totalSum} uah`);
if (category == 'fruit'){
  document.write(`
  <div class="product" align="center">
  <img src="images/fruit/${fruit}.svg" alt="${fruit}" width="100" height="100">
  <p>Selected product: <b>${fruit}</b></p>
  <p>Count of ${fruit}: <b>${price}</b></p>
  <p>Selected period: <b>${season}</b></p>
  <p>Selected category: <b>${category}</b></p>
  <p>Final sum: <b>${totalSum} UAH</b></p>
  </div>`);
} else 
  document.write(`
  <div class="product" align="center">
  <img src="images/vegetables/${vegetables}.svg" alt="${vegetables}" width="100" height="100">
  <p>Selected product: <b>${vegetables}</b></p>
  <p>Count of ${vegetables}: <b>${price}</b></p>
  <p>Selected period: <b>${season}</b></p>
  <p>Selected category: <b>${category}</b></p>
  <p>Final sum: <b>${totalSum} UAH</b></p>
  </div>`);


