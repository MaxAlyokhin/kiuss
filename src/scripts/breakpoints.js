// Если смартфон или планшет, то добавляем специальные css-стили

if (device.mobile() || device.tablet()) {

  $('head').append('<link rel="stylesheet" href="src/styles/breakpoints.css" type="text/css">');
  $('head').append('<link rel="stylesheet" href="src/libs/css/hamburgers.css" type="text/css">');

}