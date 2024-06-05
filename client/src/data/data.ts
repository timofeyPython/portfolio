export const data = [
    {   
        id: 0,
        question: 'В чем разница между null и undefined?',
        solution: '<NULL> - это значение, которое присвоенно переменной явно, а undefined - это значение по умолчанию, переменной который не было присвоенно значение, но объявленной, пример let a - будет undefined'
    },
    {
        id: 1,
        question: 'Для чего используется оператор "&&"?',
        solution: 'Оператор && (логическтое и), находит и возвращает  первое ложное значение, либо последний операнд, когда все значения истинные.'
    },
    { 
        id: 2,
        question: 'Для чего используется оператор "||"?',
        solution: 'Оператор || (логическое или), находит и возвращает первое истинное значение'
    },
    { 
        id: 3,
        question: 'Является ли использование унарного плюса (оператор "+") самым быстрым способом преобразования строки в число?',
        solution: 'Согласно MDN оператор "+" действительно является самым быстрым способом преобразования строки в число, поскольку он не выполняет никаких операций со значением, которое является числом.'
    },
    { 
        id: 4,
        question: 'Что такое DOM?',
        solution: 'DOM, Document Object Model(объектная модель документа) - это прикладной программный интерфейс (API) для работы HTML, при чтении браузера HTML документа в первый , он формирует большой объект, основанный на документе DOM, в JS DOM представлен объектом Document и предлагает множество методов для работы с элементами'
    },
    { 
        id: 5,
        question: 'Что такое распространение события (Event Propogation)?',
        solution: 'Распространения события имеет три фазы 1.Погружения (cобытия возникают с объекта Windows и опускается до цели события через всех ее предков). 2.Целевая фраза (События достигает целевого элемента). 3.Фаза всплытия (событе подниамается от event.target, последовательно затрагивая всех его предков и достигает объекта window). '
    },
    { 
        id: 6,
        question: 'Что такое всплытие события (Event Bubbling)?',
        solution: 'Всплытия события - Когда происходит событие, оно затрагивает не только этот элемент, но его родителей и поднимает до объекта Window.'
    },
    { 
        id: 7,
        question: 'Что такое погружение события (Event Capturing)?',
        solution: 'Погружение события - Когда происходит события в элементе DOM, оно начинает свой пусть с объекта Windows, и опускается до целевого элемента, затрагивая его родителей'
    },
    { 
        id: 8,
        question: 'В чем разница между методами event.preventDefault() и event.stopPropagation()?',
        solution: 'event.preventDefault - отключает действия по умолчанию, метод event.stopPropagation - останавливает распространение события (его высплытия и погружение)'
    },
    { 
        id: 9,
        question: 'Как узнать об использовании метода event.preventDefault()?',
        solution: 'С помощью метода event.defaultPrevented, которое вызывает логическое значение, служающее индикатором применения'
    },
    { 
        id: 10,
        question: 'Почему obj.someprop.x приводит к ошибке?',
        code: `const obj = {}
               console.log(obj.someprop.x)`,
        solution: 'Потому, что мы пытаемся получить доступ к свойству someprop, который имеет свойство undefined, а у undefined нет свойства x'
    },
    { 
        id: 11,
        question: 'Что такое цель события или целевой элемент (event.target)?',
        solution: 'event.target - это элемент, в котором происходит событие, или элемент вызвавший событие'        
    },
    { 
        id: 12,
        question: 'Что такое текущая цель события (event.currentTarget)?',
        solution: 'event.currentTarget - позволяет получить элемент, к которому прикреплён слушатель'        
    },
    { 
        id: 13,
        question: 'В чем разница между операторами "==" и "==="?',
        solution: 'Оператор == (абстрактное или нестрогое неравенство) работает после преобразования к одному типу, в отличие от ===, который этого не делает'        
    },
    { 
        id: 14,
        question: 'Почему результатом сравнения двух похожих объектов является false?',
        code: `let a = { a:1 } let b = { a: 1} 
               let c = a 
               console.log(a===b) 
               false 
               console.log(a===c) true
               `,
        solution: 'В JS Объекты сравниваются по ссылке или адресу в памяти, c = a имеет ссылку на a и поэтому при сравнении a===c получаем true'        
    },
    { 
        id: 15,
        question: 'Для чего используется оператор "!!"?',
        solution: 'Оператор !! (двойное отрицание) провидти значение справа от него к логическому значению, пример !!0 - true, !!1 - true'        
    },
    { 
        id: 16,
        question: `Как записать несколько выражений в одну строку?`,
        solution: `Для этого можно использовать оператор ","(запятая), этот оператор двагается справа направо и возвращает последнее значение.
            let x = 5
            x = (x, x = (()=> x+5)(), x *=2  )
            console.log(x)
        `        
    },
    { 
        id: 17,
        question: 'Что такое поднятие (Hoisting)?',
        solution: `Поднятие - это термин описывает подъем переменной или фукнкцию в глобальную или функциональную видимость, важную роль играет 
        контекст выполнения - это среда, в которой выполняется код (две фазы компиляция и выполнение).
        Пример: Переменная объявлена с помощью слова var поднимается в самый вверх глобальной области видимост или функция созданная function declaraton, они могут использоваться до их объявления.   
        `        
    },
    { 
        id: 18,
        question: 'Что такое область видимости (Scope)?',
        solution: 'Область видимость в JS - это место, где или откуда мы имеем доступ к переменной или фукциям.Есть 3 типа области видимости 1: Блочная, 2:глобальная, 3:функциональная. Примечания: Если переменная не существует в текущей области видимости, ее поиск производится выше и так далее до глобальных перменных',
        s_code: [
            {
                description: '1. Блочная',
                code: `
                function myFavouriteFunc(a) {
                    if (true) {
                        var b = 'Hello ' + a
                    }
                    return b
                }
                myFavouriteFunc('World')
                
                console.log(a) // Uncaught ReferenceError: a is not defined
                console.log(b) // не выполнится
                `
            },
            {
                description: '2. Глобальное пространство имён',
                code: `var g = 'global'

                function globalFunc() {
                    function innerFunc() {
                        console.log(g) // имеет доступ к переменной g, поскольку она является глобальной
                    }
                    innerFunc()
                }`
            },
            {
                description: '3. Функциональная, объявлена внутри фукнции и доступна только внутри этой функции',
                code: `
                function myFavouriteFunc(a) {
                    if (true) {
                        var b = 'Hello ' + a
                    }
                    return b
                }
                myFavouriteFunc('World')
                
                console.log(a) // Uncaught ReferenceError: a is not defined
                console.log(b) // не выполнится
                `
            },
        ]
    },
    // { 
    //     id: 19,
    //     question: 'Что такое замыкание (Closures)?',
    //     solution: 'Замыкание - это способность функции запоминать своё лексическое окружение, находяшиеся в текущей области видимости, в области видимости род. функции и так далее до глобальной видимости и обращаться к ней даже когда, функция вне лексического окружения',   
    //     s_code: [
    //         {
    //             description: 'Примеры — отличный способ объяснить замыкание:',
    //             code: `
    //             // глобальная область видимости
    //             var globalVar = 'abc'

    //             function a() {
    //                 // область видимости функции
    //                 console.log(globalVar)
    //             }

    //             a() // 'abc'
    //             // цепочка областей видимости
    //             // область видимости функции a -> глобальная область видимости
    //             `
    //         },
    //         {
    //             description: 'Второй пример. Примечание: В результате получаем «guess outer inner». Объяснение следующее: когда мы вызываем функцию outerFunc и присваиваем переменной «x» значение, возвращаемое функцией innerFunc, параметр «outerParam» равняется «outer». Несмотря на то, что мы присвоили переменной «outerVar» значение «outer-2», это произошло после вызова функции outerFunc, которая «успела» найти значение переменной «outerVar» в цепочке областей видимости, этим значением было «outer». Когда мы вызываем «x», которая ссылается на innerFunc, значением «innerParam» является «inner», потому что мы передаем это значение в качестве параметра при вызове «x». globalVar имеет значение «guess», потому что мы присвоили ей это значение перед вызовом «x».',
    //             code: `
                
    //             var globalVar = 'global'
    //             var outerVar = 'outer'

    //             function outerFunc(outerParam) {
    //                 function innerFunc(innerParam) {
    //                     console.log(globalVar, outerParam, innerParam)
    //                 }
    //                 return innerFunc
    //             }

    //             const x = outerFunc(outerVar)
    //             outerVar = 'outer-2'
    //             globalVar = 'guess'
    //             x('inner')
                
    //             `
    //         }
    //     ]
    // },
    // { 
    //     id: 20,
    //     question: 'Какие значения в JS являются ложными?',
    //     code: `const falsyValues = ['', 0, null, undefined, NaN, false]`,
    //     solution: '[false, false, false, false, false], Ложными являются значения, результатом преобразования которых в логическое значение является false.'  
    // },
    // { 
    //     question: 'Как проверить, является ли значение ложным?',
    //     solution: 'Следует использовать функцию Boolean или оператор "!!" (двойное отрицание).'        
    // },
    // { 
    //     question: 'Для чего используется директива «use strict»?',
    //     solution: '<use sctrict> это директива ES5, которая заставляет весь наш код выполняться в строгом режиме. Строгий режим вводит ограничения по написанию кода, там самым позволяя избежать ошибок на ранних этапах. 1. нельзя обращаться к необъявленным перменным 2. Запрещено присавивать значения глобальным переменным. 3.Удалять неудаляемые свойства 4.дублировать параметры 4.использования фукцнии eval 5. контекст this по умолчанию является undefined'       
    // },
    // {
    //     question: 'Какое значение имеет this?',
    //     solution: 'Ссылается на значения объекта, в который данный момент выполняет или вызывает функцию, и this меняется в зависимости от контекста выполнения, где мы его используем',
    //     s_code: [
    //         {   
    //             description: 'В данном случае метод getName возвращает this.name, а this ссылается на carDetails, объект, в котором выполняется getName, который является ее «владельцем».',
    //             code: `
    //                 const carDetails = {
    //                     name: 'Ford Mustang',
    //                     yearBought: 2005,
    //                     getName() {
    //                         return this.name
    //                     }
    //                     isRegistered: true
    //                 }
                    
    //                 console.log(carDetails.getName()) // Ford Mustang
    //             `
    //         },
    //         {
    //             description: 'Второй console.log выдает Ford Ranger, и это странно. Причина такого поведения заключается в том, что «владельцем» getCarName является объект window. Переменные, объявленные с помощью ключевого слова «var» в глобальной области видимости, записываются в свойства объекта window. this в глобальной области видимости ссылается на объект window (если речь не идет о строгом режиме).',
    //             code: `
    //                 var name = 'Ford Ranger'
    //                 var getCarName = carDetails.getName
                    
    //                 console.log(getCarName()) // Ford Ranger

    //                 console.log(getCarName === window.getCarName) // true
    //                 console.log(getCarName === this.getCarName) // true
    //             `
    //         }

    //     ]    
    // },
    // { 

    //     question: 'Что такое прототип объекта?',
    //     solution: 'Это план (схема объекта или проект). Он используется, как запасной вариант для свойств и методов, существующих в данном объекте, используются наследования свойств и методов между объектами'        
    // },
    // { 
    //     question: 'Что такое IIFE?',
    //     solution: 'Это функция - которая выполняется сразу после создания или объявления',
    //     s_code: [
    //         {
    //             description: 'Для создания функции неободимо обернуть её в круглые скобки(), превратив её в выражение, и затем вызвать её с помощь круглых скобок ()',
    //             code: `
    //             (function( ) { }( ))
    //             (function( ) { })( )
    //             (function named(params) { })( )

    //             (( ) => { })

    //             (function(global) { })(window)

    //             const utility = (function( ) {
    //                 return {
    //                     // утилиты
    //                 }
    //             })
    //             `
    //         }
    //     ]        
    // },
    // { 
    //     question: 'Для чего используется метод Function.prototype.apply?',
    //     solution: 'Метод apply используется для привзяки определенного контекста this, вызываемой фукнции',
    //     s_code: [
    //         {
    //             description: 'Отличие от метода call в том, что аргументы передаются в массиве',
    //             code: `
    //             const object = {
    //                 a: 'Hello',
    //                 b: 'workd'
    //             }

    //             function sum(...c) {
    //                 return '$ {this.a} $ {this.b} $ {c}'
    //             }

    //             sum.apply(object, ['my', 'friends', '!'])
    //             `
    //         }
    //     ]        
    // },
    // { 
    //     question: 'Для чего используется метод Function.prototype.call?',
    //     solution: 'Метож Call - используется для привзяки контекста this вызываемой фунции',
    //     s_code: [
    //         {
    //             description: 'Этот метод поход на apply, отличие состоит в том, что аргументы передаются через запятую',
    //             code: `
    //                 const object = {
    //                     a: 'Hello',
    //                     b: 'workd'
    //                 }

    //                 function sum(...c) {
    //                     return '$ {this.a} $ {this.b} $ {c}'
    //                 }

    //                 sum.call(object, 'my', 'friends', '!')
    //             `
    //         }
    //     ]        
    // },
    // { 
    //     question: 'В чем разница между методами call и apply?',
    //     solution: 'Разница между этими методами в том, что apply аргументы передаются, через массив, а call, через запятую',        
    //     s_code: [
    //         {
    //             description: `
    //                 const obj1 = {
    //                     result: 0
    //                 }
                    
    //                 const obj2 = {
    //                     result: 0
    //                 }
                    
    //                 function reduceAdd() {
    //                     let result = 0
    //                     for (let i = 0, len = arguments.length; i < len; i++) {
    //                         result += arguments[i]
    //                     }
    //                     this.result = result
    //                 }
                    
    //                 reduceAdd.apply(obj1, [1, 2, 3, 4, 5]) // 15
    //                 reduceAdd.call(obj2, 1, 2, 3, 4, 5) // 15`
    //         }
            
    //     ]
    // },
    // {
    //     question: 'Для чего используется метод Function.prototype.bind?',
    //     solution: 'Метод bind используют для создания новой функции, которая при вызове устанавливает значение this в переданное значение',
    //     s_code: [
    //         {
    //             description: 'создаёт функию, которая привязывает контект this',
    //             code: `
    //                 this.x = 9;
    //                 var module = {
    //                 x: 81,
    //                 getX: function () {
    //                     return this.x;
    //                 },
    //                 };

    //                 module.getX(); // 81

    //                 var getX = module.getX;
    //                 getX(); // 9, поскольку в этом случае this ссылается на глобальный объект

    //                 // создаём новую функцию с this, привязанным к module
    //                 var boundGetX = getX.bind(module);
    //                 boundGetX(); // 81
    //             `
    //         }
    //     ]
    // },
    // { 
    //     question: 'Что такое функциональное программирование и какие особенности JS позволяют говорить о нем как о функциональном языке программирования?',
    //     solution: 'Фукциональное программирование - это декларативная концепция(описывает не конкретные инструкции, а желаемый результат декларативная концепция) или образец того, как строятся выражения, которые вычисляют значения без изменения аргументов, которые им передаются, такой подход достигается через написание 1.чистых функций(функции, которые всегда возвращают одинаковый результат при вызове с одниковыми аргументами, не имеют побочных эффектов не изменяют глобанльное состояние или не взаимодествуют с внешним окружением) 2.Неизменяемость(использование неизменияемых структур данных, что означает невозможность изменения данных после их создания) 3.Функции чистого порядка, которые могут принимать другие функции в качестве аргументов и возвращать их как резульат',
    //     s_code: [
    //         {
    //             description: '',
    //             code: `
    //             function compose(a,b) {
    //                 return function(x) {
    //                     return a(b(x))
    //                 }
    //             }
                
    //             function fn1(a) {
    //                 return a*a
    //             }
                
    //             function fn2(x) {
    //                 return x * x * x
    //             }
                
                
    //             const test = compose(fn1, fn2)
                
    //             console.log(test(5))
    //             `
    //         }
    //     ]
    // },
    // { 
    //     question: 'Что такое функции высшего порядка (Higher Order Functions)?',
    //     solution: 'Это функция, которая принимает функции в виде параметра или возвращает функцию в виде чистого значения.',
    //     s_code: [
    //         {
    //             description: '',
    //             code: `
    //                 function compose(a,b) {
    //                     return function(x) {
    //                         return a(b(x))
    //                     }
    //                 }
                    
    //                 function fn1(a) {
    //                     return a*1
    //                 }
                    
    //                 function fn2(x) {
    //                     return x * x * x
    //                 }
                    
                    
    //                 const test = compose(fn2, fn1)
                    
    //                 console.log(test(5))
                
    //              `
    //         }
    //     ]
    // },
    // { 
    //     question: 'Почему функции в JS называют объектами первого класса (First-class Objects)?',
    //     solution: 'Функции называют объектами первого класса, потому что они обрабатываются также, как и любое другое значение в JS. Они могут присваиваться переменным, быть свойством объекта (методом), элементом массива, аргументом другой функции, значением, возвращаемым функцией. Единственным отличием функции от любого другого значения в JS является то, что функция может быть выполнена или вызвана.'
    // },
    // { 
    //     question: 'Как бы Вы реализовали метод Array.prototype.map?',
    //     solution: '',
    //     s_code: [
    //         {
    //             description: '',
    //             code: `
    //                 let arrMap = [1, 2, 3]

    //                 function map(arr, callBack) {
    //                     if (!Array.isArray(arr) || !arr.length || typeof callBack !== 'function') {
    //                         return []
    //                     } else {
                    
    //                         let result = []
    //                         for (let i = 0; i < arr.length; i++) {
    //                             result.push(callBack(arr[i], i, arr))
    //                         }

    //                         return result
    //                     }
    //                 }

    //                 const fn = ((el, i, arr)=> el+1)
                    
    //                 console.log(map(arrMap, fn))
                
    //             `
    //         }
    //     ]

    // },
    // { 
    //     question: 'Как бы Вы реализовали метод Array.prototype.filter?',
    //     solution: '',
    //     s_code: [
    //         {
    //             description: '',
    //             code: `
         
    //                 let arrFilter = [1, 2, 3]

    //                 function filter(arr, callBack) {
    //                 if (!Array.isArray(arr) || !arr.length || typeof callBack !== 'function') {
    //                     return []
    //                 } else {

    //                     let result = []
    //                     for (let i = 0; i < arr.length; i++) {
    //                         console.log(callBack(arr[i], i, arr))
    //                         if (callBack(arr[i], i, arr))
    //                             result.push(arr[i])
    //                     }

    //                     return result
    //                 }
    //                 }

    //                 const fn = ((el, i, arr)=> el !== 3)

    //                 console.log(filter(arrFilter, fn))
                
    //             `
    //         }
    //     ]
    // },
    // { 
    //     question: 'Как бы Вы реализовали метод Array.prototype.reduce?',
    //     solution: '',
    //     s_code: [
    //         {
    //             description: '',
    //             code: `
    //             let arrReduce = [0, 1, 2, 3]

    //             function reduce(arr, callBack, initValue) {
    //                 if (!Array.isArray(arr) || !arr.length || typeof callBack !== 'function') {
    //                     return []
    //                 } else {

    //                     let value = initValue ? initValue : arr[0]

    //                     for (let i = 0; i < arr.length; i++) {
    //                         value = callBack(value, arr[i] ,i, arr)
    //                     }

    //                     return value
    //                 }
    //             }

    //             const fn = ((item, acc)=> item + acc)
                
    //             console.log(arrReduce.reduce(((item, acc)=> item + acc), 2 ))
    //             console.log(reduce(arrReduce, fn, 2))
    //             `
    //         }
    //     ]
    // },
    // { 
    //     question: 'Что такое объект arguments?',
    //     solution: 'Это коллекция аргументов, передаваемых функциями, Это объект подобный массиву, но у него нет привычных методов массивов ForEach  и т.д.'
    // },
    // { 
    //     question: 'Как создать объект, не имеющий прототипа?',
    //     solution: `чтобы создать объект без прототипа используйте метод Object.create() с параметром null const emptyObject = Object.create(null); `
    // },
    // { 
    //     question: 'Почему в представленном коде переменная b становится глобальной при вызове функции?',
    //     code: `function myFunc(){
    //         let a = b = 0
    //     }
    //     myFunc()`,
    //     solution: [
    //         {
    //             code: `
    //             function myFunc(){
    //                 let a = (b = 0)
    //             }
    //             myFunc()
    //             `,
    //             description: 'Так происходит, потому что оператор присваивания ("=") имеет правостороннюю ассоциативность, т.е. присваивает значения справа налево. Поэтому код принимает следующий вид:, '
    //         },
    //         {
    //             description: `
    //                 Сначала значение 0 присваивается переменной «b», которая не объявлена. Движок JS делает ее глобальной. Возвращаемое выражением b = 0 значение (0) затем присваивается локальной переменной «a».
    //                 Эту проблему можно решить сначала объявив локальные переменные, а затем присвоив им значения: `,
    //             code: `
    //             function myFunc(){
    //                 let a, b
    //                 a = b = 0
    //             }
    //             myFunc()
    //             `
    //         }
    //     ]
    // },
    // { 
    //     question: 'Что такое ECMAScript?',
    //     solution: 'Это спецификация, стандарт скриптов языков программирования он является основой JS, любые изменение в ECMAScript отражаются на JS'
    // },
    // { 
    //     question: 'Что нового привнес в JS стандарт ES6 или ECMAScript2015?',
    //     solution: `
    //         1.Стрелочные функции (Arrow Functions).
    //         2.Классы (Classes).
    //         3.Шаблонные строки (Template Strings).
    //         4.Расширенные объектные литералы (Enhanced Object literals).
    //         5.Деструктуризация (Object Destructuring).
    //         6.Промисы (Promises).
    //         7.Генераторы (Generators).
    //         8.Модули (Modules).
    //         9.Symbol.
    //         10.Прокси (Proxies).
    //         11.Множества (Sets).
    //         12.Параметры по умолчанию.
    //         13.Операторы rest и spread.
    //         14.Блочная область видимости (ключевые слова «let» и «const»).
    //     `
    // },
    // { 
    //     question: 'В чем разница между ключевыми словами «var», «let» и «const»?',
    //     solution: 'VAR - имеет глобальную область видимость(доступны из любого места в коде), переменные LET и CONST имеют блочную область видимости. Это означает , что перменные видны только внутри блока {}',
    //     s_code: [
    //      {
    //         description: '',
    //         code: `
    //            function fn(boolX) {
    //                 if (boolX) {
    //                     let x = true
    //                 }

    //                 return x
    //             }
    //             fn(true) // true
    //             fn() // undefined
    //         `
    //      },
    //      {
    //         description: 'Результатом первого console.log будет undefined, второго — 5. Мы имеем доступ к переменной «x» из-за ее всплытия в глобальную область видимости. Код из примера выше интерпретируется следующим образом:',
    //         code: `
    //             function giveMeX(showX){
    //                 var x // имеет значение undefined
    //                 if(showX){
    //                     x = 5
    //                 }
    //                 return x
    //             }
    //         `
    //      },
    //      {
    //         description: `Переменные, объявленные с помощью ключевых слов «let» и «const» имеют блочную область видимости. Это означает, что они доступны только внутри блока ({ }): Вызов этих функций с параметром false приведет к ошибке ReferenceError, потому что к переменным «x» и «y» нет доступа снаружи блока и их значения не возвращаются (не всплывают).
    //         Разница между «let» и «const» состоит в том, что в первом случае мы может менять значение переменной, а во втором — нет (константа). При этом, мы можем менять значение свойства объекта, объявленного с помощью const, но не само свойство (переменную).`,
    //         code: `
    //             function giveMeX(showX){
    //                 if(showX){
    //                     let x = 5
    //                 }
    //                 return x
    //             }
                
    //             function giveMeY(showY){
    //                 if(showY){
    //                     let y = 5
    //                 }
    //                 return y
    //             }
    //         `
    //      }
    //     ]
    // },
    // { 
    //     question: 'Что такое стрелочные функции (Arrow Functions)?',
    //     solution: 'Стрелочная функция - это способ создания функций ES6, плюсы удобный и более читаемый синтаксис, у arrow functions нет собственного this, он его берет из лексического окружения ',
    //     s_code: [
    //         {
    //             description: 'Пример плюса стрелочной функции, на примере fn addAll() ',
    //             code: `
    //             const data = {
    //                 result: 0
    //                 nums: [1,2,3,4,5]
    //                 computeResult(){
    //                     // this ссылается на объект data
    //                     const addAll = () => {
    //                     // стрелочные функции копируют значение this из лексического окружения
    //                     return this.nums.reduce((total, cur) => total + cur, 0)
    //                     }
    //                 this.result = addAll()
    //                 }
    //             }
    //             `
    //         },
    //         {
    //             description: 'пример с обычной функцией',
    //             code: `
    //                 const data = {
    //                     result: 0,
    //                     nums: [1,2,3,4,5],
    //                     computeResult(){
    //                         // this ссылается на объект data
    //                         const addAll = function()  {
    //                         // стрелочные функции копируют значение this из лексического окружения
    //                             return this.nums.reduce((total, cur) => total + cur, 0)
    //                         }
    //                         return this.result = addAll.call(this)
    //                     }
    //                 }

    //                 const res = data.computeResult()

    //                 console.log(res) 
                                    
    //             `
    //         }
    //     ]
    // },
    // { 
    //     question: 'Что такое классы (Classes)?',
    //     solution: 'Это способ написания функций-конструкторов в JS, это синтаксический сахар для фукнций-конструкторов. В основе лежат те же прототипы и прототипное наследование.',
    //     s_code: [
    //         {
    //             description: 'Пример старого и нового метода использования классов',
    //             code: `
    //                 // ES5
    //                 function Person(firstName, lastName, age, address){
    //                     this.firstName = firstName
    //                     this.lastName = lastName
    //                     this.age = age
    //                     this.address = address
    //                 }

    //                 Person.self = function(){
    //                     return this
    //                 }

    //                 Person.prototype.toString = function(){
    //                     return '[object Person]'
    //                 }

    //                 Person.prototype.getFullName = function(){
    //                     return this.firstName + ' ' + this.lastName
    //                 }

    //                 // ES6
    //                 class Person{
    //                     constructor(firstName, lastName, age, address){
    //                         this.firstName = firstName
    //                         this.lastName = lastName
    //                         this.age = age
    //                         this.address = address
    //                     }

    //                     static self(){
    //                         return this
    //                     }

    //                     toString(){
    //                         return '[object Person]'
    //                     }

    //                     getFullName(){
    //                         return $ {this.firstName} $ {this.lastName}
    //                     }
    //                 }
    //             `
    //         },
    //         {
    //             description: 'Переопределение методов и наследование от другого класса:',
    //             code: `

    //                 // ES5
    //                 Employee.prototype = Object.create(Person.prototype)

    //                 function Employee(firstName, lastName, age, address, jobTitle, yearStarted){
    //                     Person.call(this, firstName, lastName, age, address)
    //                     this.jobTitle = jobTitle
    //                     this.yearStarted = yearStarted
    //                 }

    //                 Employee.prototype.describe = function(){
    //                     return 'I am $ {this.getFullName()} and I have a position of #{this.jobTitle} and I started at $ {this.yearStarted}}' 
    //                 }

    //                 Employee.prototype.toString = function(){
    //                     return '[object Employee]'
    //                 }

    //                 // ES6
    //                 class Employee extends Person{ // наследуемся от Person
    //                     constructor(firstName, lastName, age, address, jobTitle, yearStarted){
    //                         super(firstName, lastName, age, address)
    //                         this.jobTitle = jobTitle
    //                         this.yearStarted = yearStarted
    //                     }

    //                     describe(){
    //                         return 'I am $ {this.getFullName()} and I have a position of $ {this.jobTitle} and I started at $ {this.yearStarted}}'
    //                     }

    //                     toString(){ // переопределяем метод toString класса Person
    //                         return '[object Employee]'
    //                     }
    //                 }
                                
    //             `
    //         },
    //         {
    //             description: 'Как узнать об использовании прототипов?',
    //             code: `
    //                 class Something{ }

    //                 function AnotherSomething(){ }
                    
    //                 const as = new AnotherSomething()
    //                 const s = new Something()
                    
    //                 console.log(typeof Something) // function
    //                 console.log(typeof AnotherSomething) // function
    //                 console.log(as.toString()) // [object Object]
    //                 console.log(a.toString()) // [object Object]
    //                 console.log(as.toString === Object.prototype.toString)
    //                 console.log(a.toString === Object.prototype.toString)
    //                 // в обоих случаях получаем true
    //                 // Object.prototype находится на вершине цепочки прототипов
    //                 // Something и AnotherSomething наследуют от Object.prototype
                                
    //             `
    //         }
    //     ]
    // },
    // { 
    //     question: 'Что такое шаблонные литералы (Template Literals)?',
    //     solution: 'Это способ создания строк c использованием обратных кавычек (``), плюсы: не нужно использовать правляющую последовательность "\n" для перевода строки., В ES6 нам не нужно использовать конкатенацию строк для объединения текста с переменной: мы можем использовать выражение ${expr} для получения значения переменной. ',
    //     s_code: [
    //         {
    //             description: 'Пример создания строки',
    //             s_code: `
    //             const text = 'Привет мир !'
    //             const text1 = '$ {text1} Ты потрясающий !'
                
    //             `
    //         }
    //     ]
        
    // },
    // { 
    //     question: 'Что такое деструктуризация объекта (Object Destructuring)?',
    //     solution: 'Это способ получения объекта(извлечения) значения объекта или массива',
    //     s_code: [
    //         {
    //             description: 'У нас есть объект object, чтобы получить свойства мы создавали переменные для каждого свойства',
    //             code: `
    //                 const object = {
    //                     a: 1,
    //                     b: 2,
    //                     c: 3
    //                 }

    //                 const a = object.a 
    //                 const b = object.b
    //                 const c = object.c
    //             `
    //         },
    //         {
    //             description: 'С использованием деструктуризации объекта',
    //             code: `
    //                 const object = {
    //                     a: 1,
    //                     b: 2,
    //                     c: 3
    //                 }

    //                const {a, b, c} = object
    //             `
    //         },
    //         {
    //             description: 'С использованием деструктуризации массива',
    //             code: `
    //                 const array = [1, 2, 3]
    //                 const [a, b, c] = array
                
    //                 console.log(a, b, c)
    //             `
    //         }
    //     ]
    // },
    // { 
    //     question: 'Что такое модули (Modules)?',
    //     solution: 'Модули позволяют получатб использовать код из разных файлов и избавляет нас от необходимости держать код в большом файле',
    //     s_code: [
    //         {
    //             description: 'Пример экспорта модуля на примере массива',
    //             code: `
    //                 файл index1.js 
    //                 {
    //                     export const arrayNumber = [1,2,3]
    //                 }
    //                 файл index.js
    //                 {
    //                     //es6
    //                     import {arrayNumber} from './index1.js'
    //                     import {arrayNumber as arrNmb} from './index1.js'

    //                     //es5
    //                     const arrayNumber = require('./index1.js)

    //                 }
    //             `
    //         },
    //         {
    //             description: 'На примере класса',
    //             code: `
    //                 // ES5
    //                 файл index1.js 
    //                 {
    //                     class Test {
    //                         static tester() {
    //                             return 'Hello!'
    //                         }
    //                     }

    //                     module.exports = Test
    //                 }
    //                 // ES6
    //                 файл index.js
    //                 {
    //                     class Test {
    //                         static tester() {
    //                             return 'Hello!'
    //                         }
    //                     }

    //                     export default Test

    //                 }

    //                 // импорт ES5
    //                 const Test = require('./index1.js')

    //                 // импорт ES6
    //                 import Test from './index1.js'
    //             `
    //         }
    //     ]
    // },
    // { 
    //     question: 'Что такое объект Set?',
    //     solution: 'Объект Set позволяет хранить коллекцию ключей(уникальных значений, примитивы и ссылки на объект)',
    //     s_code: [
    //         {
    //             description: 'Экземпляр SET создаётся с помощью конструктора SET, ему можно передавать значения при создании',
    //             code: `
    //                 const set1 = new Set()
    //                 const set2 = new Set(['a','b','c','d', 'a']) // Вторая a не добавится
                
    //                 Можем добавлять значения в Set с помощью метода add

    //                 set1.add('e')
    //                 set1.add('e').add('f') // 'у' не добавится

    //                 set1.has('e') // проверка на свойство e

    //                 set1.size // для получени длины
    //                 set1.clear() // очищает 
    //             `
    //         }
    //     ]
    // },
    // { 
    //     question: 'Что такое функция обратного вызова (Callback Function)?',
    //     solution: 'Это функция вызов, которой отложен на будущее(вызывается например при некоторых условиях, например при наступлении события)',
    //     s_code: [
    //         {
    //             description: 'В примере мы ждем события клика по кнопке, когда просходит событие мы вызываем функцию callBackMessage, функция обратного вызова добавляет функционал данным или событиям, пример из жизни мы звоним кому-то он не отвечает, мы оставляем ему сообщение и ждем когда он перезвонит. Звонок(событие)- ожидание звонка (callback)',
    //             code: `
    //                 const btnAdd = document.getElementById('btnAdd')


    //                 btnAdd.addEventListener('click', callBackMessage)
                
    //             `
    //         }
    //     ]
    // },
    // { 
    //     question: 'Что такое промисы (Promises)?',
    //     solution: 'Это один из приемов работы с асинхронным кодом в JS, промис возвращает результат асинхронной функции, промисы были придуманы для решение проблем с callback',
    //     s_code: [
    //         {
    //             description: 'Пример без промиса, мы тут наблюдаем проблему вложенных функций это усложняет чтение кода и упорядочивание кода',
    //             code: `
    //                 fs.readFile('somefile.txt', function(e,data){
    //                     // код
    //                     fs.readFile('directory', function(e, files){
    //                         // код
    //                         fs.mkdir('directory', function(e){
    //                             // код
    //                         })
    //                     })
    //                 })
    //             `,
    //         },
    //         {
    //             description: 'А вот как это выглядит с промисами:',
    //             code: `
    //                 promReadFile('file/path')
    //                     .then(data => {
    //                     return promReaddir('directory')
    //                 })
    //                     .then(data => {
    //                     return promMkdir('directory')
    //                 })
    //                     .catch(e => {
    //                     console.error(e)
    //                 })
    //             `,
    //         }
    //     ]
    // },
    // { 
    //     question: 'Что такое async/await?',
    //     solution: 'Это способ написания асинхронного кода в JS, им оборачивается Promise, его + более читаемый код, чем Promise и функции обратного вызова.',
    //     s_code: [
    //         {
    //             description: 'наглядный пример получение данных по API',
    //             code: `
    //                 // промис
    //                 function callApi(){
    //                     return fetch('url/to/api/endpoint')
    //                     .then(resp => resp.json())
    //                     .then(data => {
    //                         // работаем с данными
    //                     }).catch(err => {
    //                         // работаем с ошибкой
    //                     })
    //                 }

    //                 // async/await
    //                 // для перехвата ошибок используется try/catch
    //                 async function callApi(){
    //                     try{
    //                         const resp = await fetch('url/to/api/endpoint')
    //                         const data = await res.json()
    //                         // работаем с данными
    //                     } catch(e){
    //                         // работаем с ошибкой
    //                     }
    //                 }
    //             `
    //         }
    //     ]
    // },
    // { 
    //     question: 'В чем разница между spread-оператором и rest-оператором?',
    //     solution: 'Разница между двумя этмии операторами состоит в том, что с помощью spread мы передаем или распространяем данные с помощью массива на другие данные, а с помощью REST - получаем все параметры функции и помещаем их в массив',
    //     s_code: [
    //         {
    //             description: 'SPREAD (...)',
    //             code: `
    //                 const spread = (a, b) => a + b
    //                 const arr = [1,2]
    //                 spread(...arr) // используем spread
                    
    //                 const rest = (...rest_) => rest.reduce((item, acc, inV)=> item + acc)
    //                 rest([1,2,3,4,5]) // используем rest
    //             `
    //         }
    //     ]
    // },
    // { 
    //     question: 'Что такое параметры по умолчанию (Default Parameters)?',
    //     solution: 'Определение получение значений по умолчанию',
    //     s_code: [
    //         {
    //             description: 'Два способа',
    //             code: `
    //                 // ES5
    //                 function test(a, b) {
    //                     a = a || 0
    //                     b = b || 0
    //                     return a + b
    //                 }
    //                 // ES6
    //                 function test(a=0, b=0) {
    //                     return a+b
    //                 }
    //             `
    //         },
    //         {
    //             description: 'Можно использовать деструктуризацию:',
    //             code: `
    //                 function getFirst([first, ...rest] = [0, 1]) {
    //                     return first
    //                 }
                    
    //                 getFirst() // 0
    //                 getFirst([10,20,30]) // 10
                    
    //                 function getArr({ nums } = { nums: [1,2,3,4] }) {
    //                     return nums
    //                 }
                    
    //                 getArr // [1,2,3,4]
    //                 getArr({nums:[5,4,3,2,1]}) // [5,4,3,2,1]
    //             `
    //         }
    //     ]
    // },
    // { 
    //     question: 'Что такое объектная обертка (Wrapper Objects)?',
    //     solution: 'Это три основных объекта в JS, соответсвующие числову, строковому и логическому типам данных. Они преобразуются значение примитивных типов в объекты при определнных условиях, эти объекты используются для преобразования значений любого типа в значения, строки и логические значения.',
    //     s_code: [
    //         {
    //             description: 'Name — это строка (примитивный тип), у которого нет свойств и методов, но когда мы вызываем метод toUpperCase(), это приводит не к ошибке, а к «MARKO». Причина такого поведения заключается в том, что name временно преобразуется в объект. У каждого примитива, кроме null и undefined, есть объект-обертка. Такими объектами являются String, Number, Boolean, Symbol и BigInt. В нашем случае код принимает следующий вид:',
    //             code: `
    //             let name = 'marko'

    //             console.log(typeof name) // string
    //             console.log(name.toUpperCase()) // MARKO
    //             `
    //         }
    //     ]
        
    // },
    // { 
    //     question: 'В чем разница между явным и неявным преобразованием или приведением к типу (Implicit and Explicit Coercion)?',
    //     solution: 'Неявное преобразование - это способ приведения значения к другому типу без нашего ведома',
    //     s_code: [
    //         {
    //             description: 'результатом первого будет 16, из-за конкатенации, значение 1 превратилось в строку, Результатом второго console.log будет 1. False было преобразовано в 0, true — в 1. 0 + 1 = 1.,Результатом третьего console.log будет 12. Строка 2 была преобразована в число перед умножением на 6.',
    //             code: `
    //                 console.log(1 + '6')
    //                 console.log(false + true)
    //                 console.log(6 * '2')
    //             `
    //         },
    //         {
    //             description: 'Явное преобразование предполагает наше участие в приведении значения к другому типу: В этом примере мы используем parseInt для приведения строки 6 к числу, затем складываем два числа и получаем 7.',
    //             code: `console.log(1 + parseInt('6'))`
    //         }
    //     ]
    // },
    // { 
    //     question: 'Что такое NaN? Как проверить, является ли значение NaN?',
    //     solution: 'Метод isNaN(Число)',
    //     s_code: [
    //         {
    //             description: 'В JS есть встроенный метод isNaN, позволяющий проверять, является ли значение NaN, но он ведет себя довольно странно: ES6 для проверки, является ли значение NaN, рекомендует использовать метод Number.isNaN.',
    //             code: `
    //                 console.log(isNaN()) // true
    //                 console.log(isNaN(undefined)) // true
    //                 console.log(isNaN({})) // true
    //                 console.log(isNaN(String('a'))) // true
    //                 console.log(isNaN(() => { })) // true
    //             `
    //         }
    //     ]
        
    // },
    // { 
    //     question: 'Как проверить, является ли значение массивом?',
    //     solution: 'Методом Array.isArray()',
    // },
    // { 
    //     question: 'Как проверить, что число является четным, без использования деления по модулю или деления с остатком (оператора "%")?',
    //     solution: 'Для решения данной задачи можно использовать оператор "&" (бинарное и). Оператор "&" сравнивает операнды как бинарные значения.',
    //     s_code: [
    //         {
    //             description: 'Console.log(5 & 1) вернет 1. Сначала оператор "&" конвертирует оба числа в бинарные значения, 5 превращается в 101, 1 — в 001. Затем производится побитовое сравнение:',
    //             code: `
    //                 function isEven(num){
    //                     if(num & 1){
    //                         return false
    //                     } else{
    //                         return true
    //                     }
    //                 }
    //             `
    //         },
    //         {
    //             description: 'мы можем решить поставленную задачу с помощью рекурсивной функции:',
    //             code: `
    //                 function isEven(num){
    //                     if (num < 0 || num === 1) return false
    //                     if (num === 0) return true
    //                     return isEven(num-2)
    //                 }
    //             `
    //         }
    //     ]
    // },
    // { 
    //     question: 'Как определить наличие свойства в объекте?',
    //     solution: 'Существует несколько способов один из них оператор IN, hasOwnProperty, индексная нотация массива:',
    //     s_code: [
    //         {
    //             description: 'IN',
    //             code: `
    //                 const object = {a: 1, b:2, c:3}
    //                 console.log('a' in object) // true
    //             `
    //         },
    //         {
    //             description: 'hasOwnProperty',
    //             code: `
    //                 const object = {a: 1, b:2, c:3}
    //                 console.log(object.hasOwnProperty('a')) // true
    //             `
    //         },
    //         {      
    //             description: 'hasOwnProperty',
    //             code: `
    //                 const object = {a: 1, b:2, c:3}
    //                 console.log(object['a']) // true
    //             `
                
    //         }
    //     ]
    // },
    // { 
    //     question: 'Что такое AJAX?',
    //     solution: `AJAX или Asyncronous JavaScript and XML — это набор взаимосвязанных технологий, которые позволяют работать с данными в асинхронном режиме. Это означает, что мы можем отправлять данные на сервер и получать данные с него без перезагрузки веб-страницы.`,
    //     s_code: [
    //         { 
    //             description: '',
    //             code: `
    //                 AJAX использует следующие технологии:
    //                 HTML — структура веб-страницы.
    //                 CSS — стили веб-страницы.
    //                 JavaScript — поведение страницы и работа с DOM.
    //                 XMLHttpRequest API — отправка и получение данных с сервера.
    //                 PHP, Python, Nodejs — какой-нибудь серверный язык.
    //             `
    //         }

    //     ]
    // },
    // { 
    //     question: 'Как в JS создать объект?',
    //     solution: 'Есть множество способо создать объект 1. объектный литерал 2.функция конструктор 3.Object.create',
    //     s_code: [
    //         {
    //             description: '1. Объектный литерал',
    //             code: `
    //                 const object = {
    //                     a:1,
    //                     b: '2',
    //                     fn: function() {return this.a + this. b}
    //                 }

    //                 console.log(object.fn())
    //             `
    //         },
    //         {
    //             description: '2. Функция конструктор',
    //             code: `
             
    //                 function Person(name) {
    //                     this.name = name
    //                 }
                    
    //                 Person.prototype.getName = function() {
    //                     return 'Привет моё имя $ {this.name}'
    //                 }
                    
    //                 const mark = new Person('Марк')
    //                 console.log(mark.getName())
    //             `
    //         },
    //         {
    //             description: '3. Object.create',
    //             code: `
    //                 const n = {
    //                     greeting() {
    //                         return 'Hi, $ {this.name}'
    //                     }
    //                 }
    //                 const o = Object.create(n)
    //                 o.name = 'Марк'
    //                 console.log(o.greeting())
    //             `
    //         },

 
    //     ]
    // },
    // { 
    //     question: 'В чем разница между методами Object.freeze и Object.seal?',
    //     solution: 'Object.freeze - замораживает объект(мы не можем менять или редактировать св-во объекта), а Object.seal такая возможность имеется',
    // },
    // { 
    //     question: 'В чем разница между оператором «in» и методом hasOwnProperty?',
    //     solution: 'Отличие состоит в том, что оператор «in» проверяет наличие свойства не только в самом объекте, но и в его прототипах, а метод hasOwnProperty — только в объекте.',
    //     s_code: [
    //         {
    //             description: '',
    //             code: `

    //                 const o = {
    //                     prop: 'good'
    //                 }
    //                 console.log('prop' in o) // true
    //                 console.log('toString' in o) // true
                    
    //                 console.log(o.hasOwnProperty('prop')) // true
    //                 console.log(o.hasOwnProperty('toString')) // false
    //             `
    //         }
    //     ]
    // },
    // { 
    //     question: 'Какие приемы работы с асинхронным кодом в JS Вы знаете?',
    //     solution: '1.Async/await 2. Функции обратного вызова 3. Промисы, 4. Различные библиотеки(axios и т.д.)'
    // },
    // { 
    //     question: 'В чем разница между обычной функцией и функциональным выражением?',
    //     solution: `Функциональное выражение (function Expression) - это объялвение функции в контексе какого-либо выражения `,
    //     s_code: [
    //         {
    //             description: 'в данном примере notHoistedFunc не выполнится т.к. это fn expression  и она не попадёт в глобальную видимость',
    //             code: `
    //                 hoistedFunc()
    //                 notHoistedFunc()
                    
    //                 function hoistedFunc(){
    //                     console.log('I am hoisted')
    //                 }
                    
    //                 var notHoistedFunc = function(){
    //                     console.log('I will not be hoisted!')
    //                 }
    //             `
    //         }
    //     ]

    // },
    // { 
    //     question: 'Как в JS вызвать функцию?',
    //     solution: 'Существует несколько способ вызвать функцию',
    //     s_code: [
    //         {
    //             description: 'Стандартный вызов fn',
    //             code: `
    //                 function add(a,b){
    //                     console.log(this)
    //                     return a + b
    //                 }
                    
    //                 add(1,5)
    //             `
    //         },
    //         {
    //             description: 'Вызов как метод',
    //             code: `
    //                 const object = {
    //                     name: 'Mark',
    //                     getName(oldName) {
    //                         return 'Его имя$ {this.name} $ {oldName} '
    //                     }
    //                 }
                    
    //                 object.getName()
    //             `
    //         },
    //         {
    //             description: 'Вызов в качестве конструктора. Когда функция вызывается с использованием ключевого слова «new», мы называем такую функцию конструктором. При этом создается пустой объект, являющийся значением this:',
    //             code: `
    //                 function Employee(name, position, yearHired){
    //                     // создается пустой объект, являющийся значением this
    //                     // this = {}
    //                     this.name = name
    //                     this.position = position
    //                     this.yearHired = yearHired
    //                     // наследование от Employee.prototype неявно возвращает this, если не указано иное
    //                 }
                    
    //                 const emp = new Employee('Marko Polo', 'Software Development', 2017)
    //             `
    //         },
    //         {
    //             description: 'Вызов с помощью методов apply или call. Мы используем эти методы, когда хотим явно определить значение this или владельца функции:',
    //             code: `
    //                 const obj1 = {
    //                     result: 0
    //                 }
                    
    //                 const obj2 = {
    //                     result: 0
    //                 }
                    
    //                 function reduceAdd(){
    //                     let result = 0
    //                     for(let i = 0, len = arguments.length; i < len; i++){
    //                         result += arguments[i]
    //                     }
    //                     this.result = result
    //                 }
                    
    //                 reduceAdd.apply(obj1, [1,2,3,4,5]) // значением this является obj1
    //                 reduceAdd.call(obj2, 1,2,3,4,5) // значением this является obj2
    //             `
    //         }
    //     ]
    // },
    // { 
    //     question: 'Что такое запоминание или мемоизация (Memoization)?',
    //     solution: 'Мемоизация — это прием создания функции, способной запоминать ранее вычисленные результаты или значения. Преимущество мемоизации заключается в том, что мы избегаем повторного выполнения функции с одинаковыми аргументами. Недостатком является то, что мы вынуждены выделять дополнительную память для сохранения результатов.',
    // },
    // { 
    //     question: 'Как бы Вы реализовали вспомогательную функцию запоминания?',
    //     solution: 'Ниже представлен вариант',
    //     s_code: [
    //         {
    //             description: 'Пример сохранения результата в кэш с помощью замыкания и функций высшего порядка ',
    //             code: `
    //                 const memoize = (fn) => {
    //                     const cache = {}
    //                     return function(params) {
    //                         if (cache[params]) {
    //                             console.log('no cache')
    //                             return cache[params]
    //                         } else {
    //                             cache[params] = fn(params)
    //                             console.log('cache')
    //                             return cache[params]
                    
    //                         }
    //                     }
                        
    //                 }
                    
    //                 const toUpper = (str ='') => str.toUpperCase()
    //                 const result = memoize(toUpper)
                    
    //                 result('Tima')
    //                 result('Tima')
    //                 result('Dima')
    //                 result('Tima')
    //                 result('Dima')
    //             `
    //         }
    //     ]
    // },
    // { 
    //     question: 'Почему typeof null возвращает object? Как проверить, является ли значение null?',
    //     solution: `ypeof null == 'object' всегда будет возвращать true по историческим причинам. Поступало предложение исправить эту ошибку, изменив typeof null = 'object' на typeof null = 'null', но оно было отклонено в интересах сохранения обратной совместимости (такое изменение повлекло бы за собой большое количество ошибок).`,
    //     s_code: [
    //         {
    //             description: 'Для проверки, является ли значение null можно использовать оператор строгого равенства (===):',
    //             code: `
    //                 function isNull(value){
    //                     return value === null
    //                 }
    //             `
    //         }
    //     ]
    // },
    // { 
    //     question: 'Для чего используется ключевое слово «new»?',
    //     solution: 'Для создания функциях-конструкторах для создания нового объекта(нового экз. класса)',
    //     s_code: [
    //         {
    //             description: `Ключевое слово «new» делает 4 вещи:

    //             Создает пустой объект.
    //             Привязывает к нему значение this.
    //             Функция наследует от functionName.prototype.
    //             Возвращает значение this, если не указано иное.
    //             `,
    //             code: `
    //             function Employee(name, position, yearHired){
    //                 this.name = name
    //                 this.position = position
    //                 this.yearHired = yearHired
    //             }
                
    //             const emp = new Employee('Marko Polo', 'Software Development', 2017)
    //             `
    //         }
    //     ]
        
    // },

]
 