# Translator (переводчик)

Приложение устанавливается на телефоны с ios и android. Предназначено для людей, которые хотят быстро узнать как пишется и звучит слово на английском с русского аналога. Либо увидеть примерно как выглядет сказанная фраза на английском. Примерно: т.к. существующие программные переводчики не могут составить идеальный перевод.
Существует много переводчиков, когда вводишь чаще слово, иногда фразу, и тебе выдается ее перевод из словаря. В данном приложении, вам нужно сказать слово, фразу, несколько предложений. И приложение представит перевод + дополнительно можно озвутить его. Сказать гораздо быстрее, чем ввести. ;)

**Важные замечания:**

* На андроиде отключение микрофона происходит автоматички, после завершения озвучивания фразы.
* На ios необходимо нажать `Остановить`, после завершения озвучивания.
* Когда необходимо говорить, микрофон начинает мигать.

## Реализация

Для реализации приложения использовались следующие плагины:

* cordova-plugin-speechrecognition (https://github.com/pbakondy/cordova-plugin-speechrecognition). Распознает сказанное выражение.
* Cordova Text-to-Speech (https://github.com/vilic/cordova-plugin-tts). Для воспроизведения перевода.

Для перевода текста использовалась API Переводчика от Яндекс (https://tech.yandex.ru/translate/doc/dg/reference/translate-docpage/)
