// ---------------------------------------------------------------------- button selection -------------------------------------------------------

function commonForSelectBtn(idBtn) {
    document.getElementById(idBtn).style.backgroundColor = "#bbedf4";
    document.getElementById(idBtn).style.color = "#0e80a4";
    document.getElementById(idBtn).style.border = "1px solid #BBEDF4";
}

function commonForNoselectedBtn(arrayBtnsId) {
    arrayBtnsId.map((el) => {
        document.getElementById(el).style.backgroundColor = "white";
        document.getElementById(el).style.color = "black";
        document.getElementById(el).style.border = "1px solid black";
    });
}

// ------------------------------------------------------------ ALL DRAG AND DROP -------------------------------------------------------------

// common commands

function allowDrop(e) {
    e.preventDefault();
}

// 3 QUESTION

function drag3(e) {
    localStorage.setItem("idOrigin3question5class", e.target.id);
    localStorage.setItem(
        "textContent3question5class",
        e.target.textContent.trim()
    );
}

function drop3(e) {
    // получаем текст и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin3question5class");
    let textContent = localStorage.getItem("textContent3question5class");

    // получаем id, на который кладём элемент
    let currentId = e.target.id;

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем блоки местами
    currentElement.textContent = textContent;
    currentElement.style.opacity = "1";
    currentElement.style.color = "white";
    currentElement.style.cursor = "grab";

    orignalElement.textContent = "";
    orignalElement.style.opacity = "0.3";
    orignalElement.style.cursor = "default";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;
}

// 4 QUESTION

function drag4(e) {
    localStorage.setItem("idOrigin4question5class", e.target.id);
}

function drop4(e) {
    // получаем id, позицию и класс текущего
    let idOrig = localStorage.getItem("idOrigin4question5class");
    let idCurn = e.target.id;
    let classCurn = e.target.parentElement.className;
    let positionOrig = idOrig.slice(0, -1).slice(-1) - 1;

    // получаем объекты
    let orgnElement = document.getElementById(idOrig);
    let crntElement = document.getElementById(idCurn);

    // копируем переносимый объект в новый
    let copyObj = document.createElement("img");
    copyObj.src = "./pictures/4que/" + idOrig.slice(0, -1) + ".svg";
    copyObj.id = idOrig;
    copyObj.style.cursor = "grab";
    copyObj.style.marginTop = "10px";
    copyObj.style.marginLeft = "10px";

    // очищаем оригинал
    orgnElement.src = "";
    orgnElement.id = "";
    orgnElement.parentElement.style.cursor = "default";

    if (orgnElement.parentElement.id === "") {
        // вставляем переносимый объект в корзину
        crntElement.appendChild(copyObj);
    }

    // теперь делаем перенос обратно
    if (
        orgnElement.parentElement.id === "firstBasket4" ||
        orgnElement.parentElement.id === "secondBasket4" ||
        orgnElement.parentElement.id === "thirdBasket4"
    ) {
        let crnt =
            document.getElementsByClassName(classCurn)[0].children[positionOrig]
                .children[0];
        crnt.id = idOrig;
        crnt.src = "./pictures/4que/" + idOrig.slice(0, -1) + ".svg";
        crnt.style.cursor = "grab";
    }
}

// 12 QUESTION

function drag12(e) {
    localStorage.setItem("idOrigin12question5class", e.target.id);
    localStorage.setItem(
        "textContent12question5class",
        e.target.textContent.trim()
    );
}

function drop12(e) {
    // получаем текст и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin12question5class");
    let textContent = localStorage.getItem("textContent12question5class");

    // получаем id, на который кладём элемент
    let currentId = e.target.id;

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем блоки местами
    currentElement.textContent = textContent;
    currentElement.style.backgroundColor = "#369cb7";
    currentElement.style.border = "1px solid #369cb7";
    currentElement.style.color = "white";
    currentElement.style.cursor = "grab";

    currentElement.style.display = "flex";
    currentElement.style.alignItems = "center";
    currentElement.style.justifyContent = "center";

    orignalElement.style.backgroundColor = "white";
    orignalElement.style.border = "1px solid black";
    orignalElement.textContent = "";
    orignalElement.style.cursor = "default";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;
}

// 17 QUESTION

function drag17(e) {
    localStorage.setItem("idOrigin17question5class", e.target.id);
    localStorage.setItem(
        "textContent17question5class",
        e.target.textContent.trim()
    );
}

function drop17(e) {
    // получаем текст и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin17question5class");
    let textContent = localStorage.getItem("textContent17question5class");

    // получаем id, на который кладём элемент
    let currentId = e.target.id;

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем блоки местами
    currentElement.textContent = textContent;
    currentElement.style.opacity = "1";
    currentElement.style.color = "white";
    currentElement.style.cursor = "grab";
    currentElement.style.backgroundColor = "#369cb7";

    orignalElement.textContent = "";
    orignalElement.style.opacity = "0.3";
    orignalElement.style.cursor = "default";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;
}

// ---------------------------------------------------------------------- SHOWING THE CORRECT ANSWER

function addCorrectAnswer(
    numberCorrectAnswer,
    numberQue,
    numberContent,
    numberContentCorrectAnswer
) {
    let newElement = document.createElement("div");
    newElement.className = numberCorrectAnswer;

    let childNewElement = document.createElement("div"); // сосед 1
    childNewElement.className = "headerCorrectAnswer";
    childNewElement.textContent = "Correct answer";

    let secondChildNewElement = document.createElement("div"); // сосед 2
    secondChildNewElement.className = numberContentCorrectAnswer;

    let contentContent = document.createElement("img");
    contentContent.src = "./pictures/" + numberQue + "/correctAnswer.svg";
    contentContent.alt = "correct answer";

    secondChildNewElement.appendChild(contentContent);

    document.getElementsByClassName(numberContent)[0].appendChild(newElement);

    document
        .getElementsByClassName(numberCorrectAnswer)[0]
        .appendChild(childNewElement);
    document
        .getElementsByClassName(numberCorrectAnswer)[0]
        .appendChild(secondChildNewElement);
}

function addCorrectAnswerQuestion1() {
    document.getElementsByClassName("app1")[0].style.height = "500px";
    addCorrectAnswer("correctAnswer1", "1que", "app1", "contentCorrectAnswer1");
}

function addCorrectAnswerQuestion2() {
    document.getElementsByClassName("app2")[0].style.height = "600px";
    addCorrectAnswer("correctAnswer2", "2que", "app2", "contentCorrectAnswer2");
}

function addCorrectAnswerQuestion3() {
    document.getElementsByClassName("app3")[0].style.height = "900px";
    addCorrectAnswer("correctAnswer3", "3que", "app3", "contentCorrectAnswer3");
}

function addCorrectAnswerQuestion4() {
    document.getElementsByClassName("app4")[0].style.height = "900px";
    addCorrectAnswer("correctAnswer4", "4que", "app4", "contentCorrectAnswer4");
}

function addCorrectAnswerQuestion5() {
    document.getElementsByClassName("app5")[0].style.height = "900px";
    addCorrectAnswer("correctAnswer5", "5que", "app5", "contentCorrectAnswer5");
}

function addCorrectAnswerQuestion6() {
    document.getElementsByClassName("app6")[0].style.height = "600px";
    addCorrectAnswer("correctAnswer6", "6que", "app6", "contentCorrectAnswer6");
}

function addCorrectAnswerQuestion7() {
    document.getElementsByClassName("app7")[0].style.height = "500px";
    addCorrectAnswer("correctAnswer7", "7que", "app7", "contentCorrectAnswer7");
}

function addCorrectAnswerQuestion8() {
    document.getElementsByClassName("app8")[0].style.height = "850px";
    addCorrectAnswer("correctAnswer8", "8que", "app8", "contentCorrectAnswer8");
}

function addCorrectAnswerQuestion9() {
    document.getElementsByClassName("app9")[0].style.height = "550px";
    addCorrectAnswer("correctAnswer9", "9que", "app9", "contentCorrectAnswer9");
}

function addCorrectAnswerQuestion10() {
    document.getElementsByClassName("app10")[0].style.height = "550px";
    addCorrectAnswer(
        "correctAnswer10",
        "10que",
        "app10",
        "contentCorrectAnswer"
    );
}

function addCorrectAnswerQuestion11() {
    document.getElementsByClassName("app11")[0].style.height = "750px";
    addCorrectAnswer(
        "correctAnswer11",
        "11que",
        "app11",
        "contentCorrectAnswer11"
    );
}

function addCorrectAnswerQuestion12() {
    document.getElementsByClassName("app12")[0].style.height = "700px";
    addCorrectAnswer(
        "correctAnswer12",
        "12que",
        "app12",
        "contentCorrectAnswer12"
    );
}

function addCorrectAnswerQuestion13() {
    document.getElementsByClassName("app13")[0].style.height = "750px";
    addCorrectAnswer(
        "correctAnswer13",
        "13que",
        "app13",
        "contentCorrectAnswer13"
    );
}

function addCorrectAnswerQuestion14() {
    document.getElementsByClassName("app14")[0].style.height = "600px";
    addCorrectAnswer(
        "correctAnswer14",
        "14que",
        "app14",
        "contentCorrectAnswer"
    );
}

function addCorrectAnswerQuestion15() {
    document.getElementsByClassName("app15")[0].style.height = "900px";
    addCorrectAnswer(
        "correctAnswer15",
        "15que",
        "app15",
        "contentCorrectAnswer15"
    );
}

function addCorrectAnswerQuestion16() {
    document.getElementsByClassName("app16")[0].style.height = "700px";
    addCorrectAnswer(
        "correctAnswer16",
        "16que",
        "app16",
        "contentCorrectAnswer16"
    );
}

function addCorrectAnswerQuestion17() {
    document.getElementsByClassName("app17")[0].style.height = "500px";
    addCorrectAnswer(
        "correctAnswer17",
        "17que",
        "app17",
        "contentCorrectAnswer"
    );
}

function addCorrectAnswerQuestion18() {
    document.getElementsByClassName("app18")[0].style.height = "500px";
    addCorrectAnswer(
        "correctAnswer18",
        "18que",
        "app18",
        "contentCorrectAnswer18"
    );
}

function addCorrectAnswerQuestion19() {
    document.getElementsByClassName("app19")[0].style.height = "650px";
    addCorrectAnswer(
        "correctAnswer19",
        "19que",
        "app19",
        "contentCorrectAnswer"
    );
}

function addCorrectAnswerQuestion20() {
    document.getElementsByClassName("app20")[0].style.height = "700px";
    addCorrectAnswer(
        "correctAnswer20",
        "20que",
        "app20",
        "contentCorrectAnswer20"
    );
}

// --------------------------------------------------------------------- validation of input fields ----------------------------------------------

// -------------------------------------------------------------common function---------------------------------------------------

function succerror(elem, checkElement) {
    if (checkElement) {
        elem.style.backgroundColor = "#ED7777";
        elem.style.color = "white";
        elem.style.border = "1px solid #ED7777";
    } else {
        elem.style.backgroundColor = "#48B736";
        elem.style.color = "white";
        elem.style.border = "1px solid #48B736";
    }
}

// добавляем иконку статуса после номера вопроса

function addImage(status, ancestor, appClass, position) {
    let object = document.createElement("img");
    object.style.marginLeft = "10px";

    if (status === "success") {
        object.src = "./pictures/successIcon.svg";
        document.getElementsByClassName(appClass)[0].style.border =
            "1px solid #9DD765";
        document.getElementsByClassName(
            "lineUnderHeading" + position
        )[0].style.borderBottom = "1px solid #9DD765";
    } else {
        object.src = "./pictures/failureIcon.svg";
        document.getElementsByClassName(appClass)[0].style.border =
            "1px solid #FFB47D";
        document.getElementsByClassName(
            "lineUnderHeading" + position
        )[0].style.borderBottom = "1px solid #FFB47D";
    }

    ancestor[0].children[0].appendChild(object);
}

// добавляем крестик или галочку над областью результата

function addMiniIcon(elem, status) {
    // создаём мини-иконку
    let objDiv = document.createElement("div");

    // получаем ширину элемента, чтобы выровнять по горизонтали
    let widthAdjacentElement = elem.getBoundingClientRect().width;

    // получаем отступы элемента, для того же

    let rightIndent = window
        .getComputedStyle(elem, null)
        .getPropertyValue("margin-right");

    objDiv.className = "statusMiniIcon";

    objDiv.style.width = widthAdjacentElement;
    objDiv.style.position = "absolute";

    if (elem.parentElement.parentElement.className === "content2") {
        objDiv.style.marginTop = "-55px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 7 + "px";
    } else if (elem.parentElement.parentElement.className === "content6") {
        objDiv.style.marginTop = "-50px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 7 + "px";
    } else {
        objDiv.style.marginTop = "-63px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 7 + "px";
    }

    if (elem.parentElement.parentElement.className === "content5") {
        objDiv.style.marginTop = "-55px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 7 + "px";
    }

    if (elem.parentElement.parentElement.className === "content10") {
        objDiv.style.width = "70px";

        if (elem.className === "firstInput10") {
            objDiv.style.marginLeft =
                elem.offsetLeft + widthAdjacentElement / 2 - 335 + "px";
        } else if (elem.className === "secondInput10") {
            objDiv.style.marginLeft = "-30px";
        }

        objDiv.style.marginRight = "130px";
    }

    if (
        elem.parentElement.parentElement.parentElement.className === "content13"
    ) {
        objDiv.style.marginTop = "-25px";
    }

    if (
        elem.parentElement.parentElement.parentElement.className === "content11"
    ) {
        objDiv.style.marginTop = "-25px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 23 + "px";
    }

    if (elem.parentElement.parentElement.className === "content14") {
        objDiv.style.marginTop = "-55px";
    }

    if (elem.parentElement.parentElement.className === "content16") {
        objDiv.style.marginTop = "-25px";
    }

    if (
        elem.parentElement.parentElement.parentElement.className === "content18"
    ) {
        objDiv.style.marginTop = "-17px";
    }

    if (elem.parentElement.parentElement.className === "content19") {
        objDiv.style.marginTop = "-43px";
    }

    if (elem.parentElement.parentElement.className === "content20") {
        objDiv.style.marginTop = "-25px";
    }

    if (
        elem.parentElement.parentElement.parentElement.className === "content8"
    ) {
        objDiv.style.marginTop = "-23px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 27 + "px";
    }

    if (
        elem.parentElement.parentElement.parentElement.parentElement
            .className === "content22"
    ) {
        objDiv.style.marginTop = "-23px";
    }

    if (
        elem.parentElement.firstElementChild.id === "secondNumber12" ||
        elem.parentElement.firstElementChild.id === "thirdNumber12" ||
        elem.parentElement.firstElementChild.id === "fourthNumber12"
    ) {
        objDiv.style.marginTop = "90px";
        objDiv.style.marginLeft = elem.offsetLeft - 100 + "px";
    }

    objDiv.style.marginRight = rightIndent;
    objDiv.style.paddingBottom = "10px";
    objDiv.style.display = "flex";
    objDiv.style.justifyContent = "center";
    objDiv.style.alignItems = "center";

    let obj = document.createElement("img");

    if (status === "success") {
        obj.src = "./pictures/successMiniIcon.svg";
    } else {
        obj.src = "./pictures/failureMiniIcon.svg";
    }

    objDiv.appendChild(obj);

    // устанавливаем её в нужное место
    elem.parentElement.insertBefore(objDiv, elem);
}

// делаем появление мини-иконок над областью проверки

function createMiniIcon(property, element) {
    if (property === "right") {
        addMiniIcon(element, "success");
    } else {
        addMiniIcon(element, "failure");
    }
}

function gettingDataFromFields(
    countId,
    correctNumbers,
    numberQuestion,
    number
) {
    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            document.getElementById("firstNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.firstNumber = "right";
                    } else {
                        number.firstNumber = "wrong";
                    }
                };
        }

        if (i === 1) {
            document.getElementById("secondNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.secondNumber = "right";
                    } else {
                        number.secondNumber = "wrong";
                    }
                };
        }

        if (i === 2) {
            document.getElementById("thirdNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.thirdNumber = "right";
                    } else {
                        number.thirdNumber = "wrong";
                    }
                };
        }

        if (i === 3) {
            document.getElementById("fourthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.fourthNumber = "right";
                    } else {
                        number.fourthNumber = "wrong";
                    }
                };
        }

        if (i === 4) {
            document.getElementById("fifthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.fifthNumber = "right";
                    } else {
                        number.fifthNumber = "wrong";
                    }
                };
        }

        if (i === 5) {
            document.getElementById("sixthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.sixthNumber = "right";
                    } else {
                        number.sixthNumber = "wrong";
                    }
                };
        }

        if (i === 6) {
            document.getElementById("seventhNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.seventhNumber = "right";
                    } else {
                        number.seventhNumber = "wrong";
                    }
                };
        }

        if (i === 7) {
            document.getElementById("eighthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.eighthNumber = "right";
                    } else {
                        number.eighthNumber = "wrong";
                    }
                };
        }
    }
}

function succerrorAndCreateMiniIcon(countId, numberQuestion, number) {
    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            succerror(
                document.getElementById("firstNumber" + numberQuestion),
                number.firstNumber === "wrong"
            );

            createMiniIcon(
                number.firstNumber,
                document.getElementById("firstNumber" + numberQuestion)
            );
        }

        if (i === 1) {
            succerror(
                document.getElementById("secondNumber" + numberQuestion),
                number.secondNumber === "wrong"
            );

            createMiniIcon(
                number.secondNumber,
                document.getElementById("secondNumber" + numberQuestion)
            );
        }

        if (i === 2) {
            succerror(
                document.getElementById("thirdNumber" + numberQuestion),
                number.thirdNumber === "wrong"
            );

            createMiniIcon(
                number.thirdNumber,
                document.getElementById("thirdNumber" + numberQuestion)
            );
        }

        if (i === 3) {
            succerror(
                document.getElementById("fourthNumber" + numberQuestion),
                number.fourthNumber === "wrong"
            );

            createMiniIcon(
                number.fourthNumber,
                document.getElementById("fourthNumber" + numberQuestion)
            );
        }

        if (i === 4) {
            succerror(
                document.getElementById("fifthNumber" + numberQuestion),
                number.fifthNumber === "wrong"
            );

            createMiniIcon(
                number.fifthNumber,
                document.getElementById("fifthNumber" + numberQuestion)
            );
        }

        if (i === 5) {
            succerror(
                document.getElementById("sixthNumber" + numberQuestion),
                number.sixthNumber === "wrong"
            );

            createMiniIcon(
                number.sixthNumber,
                document.getElementById("sixthNumber" + numberQuestion)
            );
        }

        if (i === 6) {
            succerror(
                document.getElementById("seventhNumber" + numberQuestion),
                number.seventhNumber === "wrong"
            );

            createMiniIcon(
                number.seventhNumber,
                document.getElementById("seventhNumber" + numberQuestion)
            );
        }

        if (i === 7) {
            succerror(
                document.getElementById("eighthNumber" + numberQuestion),
                number.eighthNumber === "wrong"
            );

            createMiniIcon(
                number.eighthNumber,
                document.getElementById("eighthNumber" + numberQuestion)
            );
        }
    }
}

function highlightUnselectedBlocks(countId, numberQuestion, number) {
    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            if (number.firstNumber === "") {
                document.getElementById(
                    "firstNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 1) {
            if (number.secondNumber === "") {
                document.getElementById(
                    "secondNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 2) {
            if (number.thirdNumber === "") {
                document.getElementById(
                    "thirdNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 3) {
            if (number.fourthNumber === "") {
                document.getElementById(
                    "fourthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 4) {
            if (number.fifthNumber === "") {
                document.getElementById(
                    "fifthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 5) {
            if (number.sixthNumber === "") {
                document.getElementById(
                    "sixthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 6) {
            if (number.seventhNumber === "") {
                document.getElementById(
                    "seventhNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 7) {
            if (number.eighthNumber === "") {
                document.getElementById(
                    "eighthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }
    }
}

function highlightingUnfillededBlocks(countId, numberQuestion) {
    let firstEmpty = document.getElementById("firstEmpty" + numberQuestion);
    let secondEmpty = document.getElementById("secondEmpty" + numberQuestion);
    let thirdEmpty = document.getElementById("thirdEmpty" + numberQuestion);
    let fourthEmpty = document.getElementById("fourthEmpty" + numberQuestion);
    let fifthEmpty = document.getElementById("fifthEmpty" + numberQuestion);
    let sixthEmpty = document.getElementById("sixthEmpty" + numberQuestion);
    let seventhEmpty = document.getElementById("seventhEmpty" + numberQuestion);
    let eighthEmpty = document.getElementById("eighthEmpty" + numberQuestion);

    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            if (firstEmpty.textContent === "") {
                firstEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 1) {
            if (secondEmpty.textContent === "") {
                secondEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 2) {
            if (thirdEmpty.textContent === "") {
                thirdEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 3) {
            if (fourthEmpty.textContent === "") {
                fourthEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 4) {
            if (fifthEmpty.textContent === "") {
                fifthEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 5) {
            if (sixthEmpty.textContent === "") {
                sixthEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 6) {
            if (seventhEmpty.textContent === "") {
                seventhEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 7) {
            if (eighthEmpty.textContent === "") {
                eighthEmpty.style.border = "2px solid #FFB47D";
            }
        }
    }
} // for 5, 10, 15 questions

// ----------------------------------------------------------------------------------------------------------------------------

// 1 QUESTION

let numbers1 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

gettingDataFromFields(4, [5054, 7014, 2971, 7716], 1, numbers1);

function question1() {
    if (
        numbers1.firstNumber != "" &&
        numbers1.secondNumber != "" &&
        numbers1.thirdNumber != "" &&
        numbers1.fourthNumber != ""
    ) {
        succerror(
            document.getElementById("firstNumber1"),
            numbers1.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondNumber1"),
            numbers1.secondNumber === "wrong"
        );

        succerror(
            document.getElementById("thirdNumber1"),
            numbers1.thirdNumber === "wrong"
        );

        succerror(
            document.getElementById("fourthNumber1"),
            numbers1.fourthNumber === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers1.firstNumber === "right" &&
            numbers1.secondNumber === "right" &&
            numbers1.thirdNumber === "right" &&
            numbers1.fourthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question1"),
                "app1",
                1
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question1"),
                "app1",
                1
            );

            addCorrectAnswerQuestion1();
        }
    } else {
        highlightUnselectedBlocks(4, 1, numbers1);
    }
}

// 2 QUESTION

let numbers2 = {
    firstNumber: "",
};

gettingDataFromFields(1, [100], 2, numbers2);

function question2() {
    if (numbers2.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 2, numbers2);

        // выносим общий статус к номеру вопроса

        if (numbers2.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question2"),
                "app2",
                2
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question2"),
                "app2",
                2
            );

            addCorrectAnswerQuestion2();
        }
    } else {
        highlightUnselectedBlocks(1, 2, numbers2);
    }
}

// 3 QUESTION

function question3() {
    let firstRow3p1 =
        document.getElementsByClassName("leftColumn3")[0].children[0];
    let secondRow3p1 =
        document.getElementsByClassName("leftColumn3")[0].children[1];
    let thirdRow3p1 =
        document.getElementsByClassName("leftColumn3")[0].children[2];

    let firstRow3p2 =
        document.getElementsByClassName("rightColumn3")[0].children[0];
    let secondRow3p2 =
        document.getElementsByClassName("rightColumn3")[0].children[1];
    let thirdRow3p2 =
        document.getElementsByClassName("rightColumn3")[0].children[2];

    // получаем содежимое блоков
    let firstRow3 = firstRow3p1.children[1].id;
    let secondRow3 = secondRow3p1.children[0].id;
    let thirdRow3 = thirdRow3p1.children[1].id;
    let fourthRow3 = firstRow3p2.children[0].id;
    let fifthRow3 = secondRow3p2.children[1].id;
    let sixthRow3 = thirdRow3p2.children[1].id;

    if (
        firstRow3 !== "firstEmpty3" &&
        secondRow3 !== "secondEmpty3" &&
        thirdRow3 !== "thirdEmpty3" &&
        fourthRow3 !== "fourthEmpty3" &&
        fifthRow3 !== "fifthEmpty3" &&
        sixthRow3 !== "sixthEmpty3"
    ) {
        // проверяем на верность для создания статуса
        if (
            firstRow3 === "firstBtn3" &&
            secondRow3 === "fourthBtn3" &&
            thirdRow3 === "thirdBtn3" &&
            fourthRow3 === "sixthBtn3" &&
            fifthRow3 === "fifthBtn3" &&
            sixthRow3 === "secondBtn3"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question3"),
                "app3",
                3
            );
        } else {
            if (firstRow3 !== "firstBtn3") {
                document.getElementById(firstRow3).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(firstRow3), "failure");
            }

            if (secondRow3 !== "fourthBtn3") {
                document.getElementById(secondRow3).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(secondRow3), "failure");
            }

            if (thirdRow3 !== "thirdBtn3") {
                document.getElementById(thirdRow3).style.border =
                    "2px solid #ED7777";
                addMiniIcon(document.getElementById(thirdRow3), "failure");
            }

            if (fourthRow3 !== "sixthBtn3") {
                document.getElementById(fourthRow3).style.border =
                    "2px solid #ED7777";
                addMiniIcon(document.getElementById(fourthRow3), "failure");
            }

            if (fifthRow3 !== "fifthBtn3") {
                document.getElementById(fifthRow3).style.border =
                    "2px solid #ED7777";
                addMiniIcon(document.getElementById(fifthRow3), "failure");
            }

            if (sixthRow3 !== "secondBtn3") {
                document.getElementById(sixthRow3).style.border =
                    "2px solid #ED7777";
                addMiniIcon(document.getElementById(sixthRow3), "failure");
            }

            addImage(
                "failure",
                document.getElementsByClassName("question3"),
                "app3",
                3
            );

            addCorrectAnswerQuestion3();
        }
    } else {
        highlightingUnfillededBlocks(6, 3);
    }
}

// 4 QUESTION

function question4() {
    // получаем содержимое корзин
    // let contentBasketFirst = document.getElementById("firstBasket4").children;

    let contentBasketTrue = document.getElementById("firstBasket4").children;
    let contentBasketFalse = document.getElementById("secondBasket4").children;
    let contentBasketThird = document.getElementById("thirdBasket4").children;

    // проверяем на пустоту
    if (
        contentBasketTrue.length > 1 &&
        contentBasketFalse.length > 1 &&
        contentBasketThird.length > 1
    ) {
        let correctOrderBasketTrue = [
                "headerBasket4first",
                "firstExpression4",
                "secondExpression4",
            ],
            correctOrderBasketFalse = [
                "headerBasket4second",
                "thirdExpression4",
                "fourthExpression4",
            ],
            correctOrderBasketThird = [
                "headerBasket4third",
                "fifthExpression4",
                "sixthExpression4",
            ],
            theBasketTrueIsFilledCorrectly = "yes",
            theBasketFalseIsFilledCorrectly = "yes",
            theBasketThirdIsFilledCorrectly = "yes";

        // раскрашиваем блоки
        for (let i = 0; i < contentBasketTrue.length; i++) {
            let id = contentBasketTrue[i].id;

            succerror(
                document.getElementById(id),
                correctOrderBasketTrue.includes(id) === false
            );

            document.getElementById(id).style.borderRadius = "5px";

            if (correctOrderBasketTrue.includes(id) === false) {
                theBasketTrueIsFilledCorrectly = "no";
            }
        }

        for (let i = 0; i < contentBasketFalse.length; i++) {
            let id = contentBasketFalse[i].id;

            succerror(
                document.getElementById(id),
                correctOrderBasketFalse.includes(id) === false
            );

            document.getElementById(id).style.borderRadius = "5px";

            if (correctOrderBasketFalse.includes(id) === false) {
                theBasketFalseIsFilledCorrectly = "no";
            }
        }

        for (let i = 0; i < contentBasketThird.length; i++) {
            let id = contentBasketThird[i].id;

            succerror(
                document.getElementById(id),
                correctOrderBasketThird.includes(id) === false
            );

            document.getElementById(id).style.borderRadius = "5px";

            if (correctOrderBasketThird.includes(id) === false) {
                theBasketThirdIsFilledCorrectly = "no";
            }
        }

        // проверяем на верность для создания статуса
        if (
            theBasketTrueIsFilledCorrectly === "yes" &&
            theBasketFalseIsFilledCorrectly === "yes" &&
            theBasketThirdIsFilledCorrectly === "yes"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question4"),
                "app4",
                4
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question4"),
                "app4",
                4
            );

            // addCorrectAnswerQuestion4();
        }
    } else if (
        contentBasketTrue.length === 1 &&
        contentBasketThird.length === 1 &&
        contentBasketFalse.length > 1
    ) {
        document.getElementsByClassName("basket4first")[0].style.border =
            "2px solid #FFB47D";
        document.getElementsByClassName("basket4third")[0].style.border =
            "2px solid #FFB47D";
    } else if (
        contentBasketFalse.length === 1 &&
        contentBasketTrue.length === 1 &&
        contentBasketThird.length > 1
    ) {
        document.getElementsByClassName("basket4second")[0].style.border =
            "2px solid #FFB47D";
        document.getElementsByClassName("basket4true")[0].style.border =
            "2px solid #FFB47D";
    } else if (
        contentBasketFalse.length === 1 &&
        contentBasketThird.length === 1 &&
        contentBasketTrue.length > 1
    ) {
        document.getElementsByClassName("basket4second")[0].style.border =
            "2px solid #FFB47D";
        document.getElementsByClassName("basket4third")[0].style.border =
            "2px solid #FFB47D";
    } else {
        document.getElementsByClassName("basket4first")[0].style.border =
            "2px solid #FFB47D";
        document.getElementsByClassName("basket4second")[0].style.border =
            "2px solid #FFB47D";
        document.getElementsByClassName("basket4third")[0].style.border =
            "2px solid #FFB47D";
    }
}

// 5 QUESTION

let numbers5 = {
    firstNumber: "",
};

gettingDataFromFields(1, [3], 5, numbers5);

function question5() {
    if (numbers5.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 5, numbers5);

        // выносим общий статус к номеру вопроса

        if (numbers5.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question5"),
                "app5",
                5
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question5"),
                "app5",
                5
            );

            // addCorrectAnswerQuestion5();
        }
    } else {
        highlightUnselectedBlocks(1, 5, numbers5);
    }
}

// 6 QUESTION

let numbers6 = {
    firstNumber: "",
};

gettingDataFromFields(1, [8], 6, numbers6);

function question6() {
    if (numbers6.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 6, numbers6);

        // выносим общий статус к номеру вопроса

        if (numbers6.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question6"),
                "app6",
                6
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question6"),
                "app6",
                6
            );

            addCorrectAnswerQuestion6();
        }
    } else {
        highlightUnselectedBlocks(1, 6, numbers6);
    }
}

// 7 QUESTION

let numbers7 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

gettingDataFromFields(4, [0.15, 0.16, 0.42, 0.4], 7, numbers7);

function question7() {
    if (
        numbers7.firstNumber != "" &&
        numbers7.secondNumber != "" &&
        numbers7.thirdNumber != "" &&
        numbers7.fourthNumber != ""
    ) {
        succerror(
            document.getElementById("firstNumber7"),
            numbers7.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondNumber7"),
            numbers7.secondNumber === "wrong"
        );

        succerror(
            document.getElementById("thirdNumber7"),
            numbers7.thirdNumber === "wrong"
        );

        succerror(
            document.getElementById("fourthNumber7"),
            numbers7.fourthNumber === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers7.firstNumber === "right" &&
            numbers7.secondNumber === "right" &&
            numbers7.thirdNumber === "right" &&
            numbers7.fourthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question7"),
                "app7",
                7
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question7"),
                "app7",
                7
            );

            addCorrectAnswerQuestion7();
        }
    } else {
        highlightUnselectedBlocks(4, 7, numbers7);
    }
}

// 8 QUESTION

let numbers8 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
    fifthNumber: "",
    sixthNumber: "",
};

gettingDataFromFields(
    6,
    ["1/6", "1/6", "2/15", "1/8", "1/8", "1/9"],
    8,
    numbers8
);

function question8() {
    if (
        numbers8.firstNumber !== "" &&
        numbers8.secondNumber !== "" &&
        numbers8.thirdNumber !== "" &&
        numbers8.fourthNumber !== "" &&
        numbers8.fifthNumber !== "" &&
        numbers8.sixthNumber !== ""
    ) {
        succerrorAndCreateMiniIcon(6, 8, numbers8);

        // выносим общий статус к номеру вопроса

        if (
            numbers8.firstNumber === "right" &&
            numbers8.secondNumber === "right" &&
            numbers8.thirdNumber === "right" &&
            numbers8.fourthNumber === "right" &&
            numbers8.fifthNumber === "right" &&
            numbers8.sixthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question8"),
                "app8",
                8
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question8"),
                "app8",
                8
            );

            addCorrectAnswerQuestion8();
        }
    } else {
        highlightUnselectedBlocks(6, 8, numbers8);
    }
}

// 9 QUESTION

let numbers9 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

gettingDataFromFields(4, [2, 3, 4, 5], 9, numbers9);

function question9() {
    if (
        numbers9.firstNumber != "" &&
        numbers9.secondNumber != "" &&
        numbers9.thirdNumber != "" &&
        numbers9.fourthNumber != ""
    ) {
        succerrorAndCreateMiniIcon(4, 9, numbers9);

        // выносим общий статус к номеру вопроса

        if (
            numbers9.firstNumber === "right" &&
            numbers9.secondNumber === "right" &&
            numbers9.thirdNumber === "right" &&
            numbers9.fourthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question9"),
                "app9",
                9
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question9"),
                "app9",
                9
            );

            addCorrectAnswerQuestion9();
        }
    } else {
        highlightUnselectedBlocks(4, 9, numbers9);
    }
}

// 10 QUESTION

function question10() {
    // получаем содежимое блоков
    let firstInput10 =
        document.getElementsByClassName("inputs10")[0].children[0].id;
    let secondInput10 =
        document.getElementsByClassName("inputs10")[0].children[1].id;

    if (firstInput10 !== "firstEmpty10" && secondInput10 !== "secondEmpty10") {
        // проверяем на верность для создания статуса
        if (firstInput10 === "secondBtn10" && secondInput10 === "firstBtn10") {
            addImage(
                "success",
                document.getElementsByClassName("question10"),
                "app10",
                10
            );
        } else {
            if (firstInput10 !== "secondBtn10") {
                document.getElementById(firstInput10).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(firstInput10), "failure");
            } else if (firstInput10 === "secondBtn10") {
                document.getElementById(firstInput10).style.border =
                    "2px solid #9DD765";

                addMiniIcon(document.getElementById(firstInput10), "success");
            }

            if (secondInput10 !== "firstBtn10") {
                document.getElementById(secondInput10).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(secondInput10), "failure");
            } else if (secondInput10 === "firstBtn10") {
                document.getElementById(secondInput10).style.border =
                    "2px solid #9DD765";

                addMiniIcon(document.getElementById(secondInput10), "success");
            }

            addImage(
                "failure",
                document.getElementsByClassName("question10"),
                "app10",
                10
            );

            // addCorrectAnswerQuestion10();
        }
    } else {
        highlightingUnfillededBlocks(2, 10);
    }
}

// 11 QUESTION

let numbers11 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
    fifthNumber: "",
    sixthNumber: "",
};

gettingDataFromFields(
    6,
    ["1", "20/21", "3/10", "14/15", "8/5", "5/6"],
    11,
    numbers11
);

function question11() {
    if (
        numbers11.firstNumber !== "" &&
        numbers11.secondNumber !== "" &&
        numbers11.thirdNumber !== "" &&
        numbers11.fourthNumber !== "" &&
        numbers11.fifthNumber !== "" &&
        numbers11.sixthNumber !== ""
    ) {
        succerrorAndCreateMiniIcon(6, 11, numbers11);

        // выносим общий статус к номеру вопроса

        if (
            numbers11.firstNumber === "right" &&
            numbers11.secondNumber === "right" &&
            numbers11.thirdNumber === "right" &&
            numbers11.fourthNumber === "right" &&
            numbers11.fifthNumber === "right" &&
            numbers11.sixthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question11"),
                "app11",
                11
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question11"),
                "app11",
                11
            );

            addCorrectAnswerQuestion11();
        }
    } else {
        highlightUnselectedBlocks(6, 11, numbers11);
    }
}

// 12 QUESTION

function question12() {
    // получаем содежимое блоков
    let firstPlace12 =
        document.getElementsByClassName("places12")[0].children[0].id;
    let secondPlace12 =
        document.getElementsByClassName("places12")[0].children[1].id;
    let thirdPlace12 =
        document.getElementsByClassName("places12")[0].children[2].id;
    let fourthPlace12 =
        document.getElementsByClassName("places12")[0].children[3].id;

    if (
        firstPlace12 !== "firstEmpty12" &&
        secondPlace12 !== "secondEmpty12" &&
        thirdPlace12 !== "thirdEmpty12" &&
        fourthPlace12 !== "fourthEmpty12"
    ) {
        // проверяем на верность для создания статуса
        if (
            firstPlace12 === "secondBtn12" &&
            secondPlace12 === "fourthBtn12" &&
            thirdPlace12 === "firstBtn12" &&
            fourthPlace12 === "thirdBtn12"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question12"),
                "app12",
                12
            );
        } else {
            if (firstPlace12 !== "secondBtn12") {
                document.getElementById(firstPlace12).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(firstPlace12), "failure");
            } else if (firstPlace12 === "secondBtn12") {
                document.getElementById(firstPlace12).style.border =
                    "2px solid #9DD765";

                addMiniIcon(document.getElementById(firstPlace12), "success");
            }

            if (secondPlace12 !== "fourthBtn12") {
                document.getElementById(secondPlace12).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(secondPlace12), "failure");
            } else if (secondPlace12 === "fourthBtn12") {
                document.getElementById(secondPlace12).style.border =
                    "2px solid #9DD765";

                addMiniIcon(document.getElementById(secondPlace12), "success");
            }

            if (thirdPlace12 !== "firstBtn12") {
                document.getElementById(thirdPlace12).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(thirdPlace12), "failure");
            } else if (thirdPlace12 === "firstBtn12") {
                document.getElementById(thirdPlace12).style.border =
                    "2px solid #9DD765";

                addMiniIcon(document.getElementById(thirdPlace12), "success");
            }

            if (fourthPlace12 !== "thirdBtn12") {
                document.getElementById(fourthPlace12).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(fourthPlace12), "failure");
            } else if (fourthPlace12 === "thirdBtn12") {
                document.getElementById(fourthPlace12).style.border =
                    "2px solid #9DD765";

                addMiniIcon(document.getElementById(fourthPlace12), "success");
            }

            addImage(
                "failure",
                document.getElementsByClassName("question12"),
                "app12",
                12
            );

            addCorrectAnswerQuestion12();
        }
    } else {
        highlightingUnfillededBlocks(4, 12);
    }
}

// 13 QUESTION

let numbers13 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
    fifthNumber: "",
    sixthNumber: "",
};

gettingDataFromFields(
    6,
    ["17/12", "8/7", "2", "2", "11/8", "11/8"],
    13,
    numbers13
);

function question13() {
    if (
        numbers13.firstNumber !== "" &&
        numbers13.secondNumber !== "" &&
        numbers13.thirdNumber !== "" &&
        numbers13.fourthNumber !== "" &&
        numbers13.fifthNumber !== "" &&
        numbers13.sixthNumber !== ""
    ) {
        succerrorAndCreateMiniIcon(6, 13, numbers13);

        // выносим общий статус к номеру вопроса

        if (
            numbers13.firstNumber === "right" &&
            numbers13.secondNumber === "right" &&
            numbers13.thirdNumber === "right" &&
            numbers13.fourthNumber === "right" &&
            numbers13.fifthNumber === "right" &&
            numbers13.sixthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question13"),
                "app13",
                13
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question13"),
                "app13",
                13
            );

            addCorrectAnswerQuestion13();
        }
    } else {
        highlightUnselectedBlocks(6, 13, numbers13);
    }
}

// 14 QUESTION

let numbers14 = {
    firstNumber: "",
};

gettingDataFromFields(1, [0.52], 14, numbers14);

function question14() {
    if (numbers14.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 14, numbers14);

        // выносим общий статус к номеру вопроса

        if (numbers14.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question14"),
                "app14",
                14
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question14"),
                "app14",
                14
            );

            addCorrectAnswerQuestion14();
        }
    } else {
        highlightUnselectedBlocks(1, 14, numbers14);
    }
}

// 15 QUESTION

let numbers15 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

gettingDataFromFields(4, [5, 6, 7, 11], 15, numbers15);

function question15() {
    if (
        numbers15.firstNumber != "" &&
        numbers15.secondNumber != "" &&
        numbers15.thirdNumber != "" &&
        numbers15.fourthNumber != ""
    ) {
        succerror(
            document.getElementById("firstNumber15"),
            numbers15.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondNumber15"),
            numbers15.secondNumber === "wrong"
        );

        succerror(
            document.getElementById("thirdNumber15"),
            numbers15.thirdNumber === "wrong"
        );

        succerror(
            document.getElementById("fourthNumber15"),
            numbers15.fourthNumber === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers15.firstNumber === "right" &&
            numbers15.secondNumber === "right" &&
            numbers15.thirdNumber === "right" &&
            numbers15.fourthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question15"),
                "app15",
                15
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question15"),
                "app15",
                15
            );

            addCorrectAnswerQuestion15();
        }
    } else {
        highlightUnselectedBlocks(4, 15, numbers15);
    }
}

// 16 QUESTION

let numbers16 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

gettingDataFromFields(3, [6.6, 292, 122.7], 16, numbers16);

function question16() {
    if (
        numbers16.firstNumber != "" &&
        numbers16.secondNumber != "" &&
        numbers16.thirdNumber != ""
    ) {
        succerrorAndCreateMiniIcon(3, 16, numbers16);

        // выносим общий статус к номеру вопроса

        if (
            numbers16.firstNumber === "right" &&
            numbers16.secondNumber === "right" &&
            numbers16.thirdNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question16"),
                "app16",
                16
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question16"),
                "app16",
                16
            );

            addCorrectAnswerQuestion16();
        }
    } else {
        highlightUnselectedBlocks(3, 16, numbers16);
    }
}

// 17 QUESTION

function question17() {
    // получаем содежимое блоков
    let topRow17 =
        document.getElementsByClassName("topRow17")[0].children[1].id;

    if (topRow17 !== "firstEmpty17") {
        // проверяем на верность для создания статуса
        if (topRow17 === "firstBtn17") {
            addImage(
                "success",
                document.getElementsByClassName("question17"),
                "app17",
                17
            );
        } else {
            document.getElementsByClassName(
                "topRow17"
            )[0].children[1].style.border = "2px solid #ED7777";

            addImage(
                "failure",
                document.getElementsByClassName("question17"),
                "app17",
                17
            );

            addCorrectAnswerQuestion17();
        }
    } else {
        highlightingUnfillededBlocks(1, 17);
    }
}

// 18 QUESTION

let numbers18 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

gettingDataFromFields(4, [7, 6, 3, 7], 18, numbers18);

function question18() {
    if (
        numbers18.firstNumber != "" &&
        numbers18.secondNumber != "" &&
        numbers18.thirdNumber != "" &&
        numbers18.fourthNumber != ""
    ) {
        succerrorAndCreateMiniIcon(4, 18, numbers18);

        // выносим общий статус к номеру вопроса

        if (
            numbers18.firstNumber === "right" &&
            numbers18.secondNumber === "right" &&
            numbers18.thirdNumber === "right" &&
            numbers18.fourthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question18"),
                "app18",
                18
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question18"),
                "app18",
                18
            );

            addCorrectAnswerQuestion18();
        }
    } else {
        highlightUnselectedBlocks(4, 18, numbers18);
    }
}

// 19 QUESTION

let numbers19 = {
    firstNumber: "",
};

gettingDataFromFields(1, [42.1], 19, numbers19);

function question19() {
    if (numbers19.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 19, numbers19);

        // выносим общий статус к номеру вопроса

        if (numbers19.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question19"),
                "app19",
                19
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question19"),
                "app19",
                19
            );

            addCorrectAnswerQuestion19();
        }
    } else {
        highlightUnselectedBlocks(1, 19, numbers19);
    }
}

// 20 QUESTION

let numbers20 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

gettingDataFromFields(3, [262, 7701, 115], 20, numbers20);

function question20() {
    if (
        numbers20.firstNumber != "" &&
        numbers20.secondNumber != "" &&
        numbers20.thirdNumber != ""
    ) {
        succerrorAndCreateMiniIcon(3, 20, numbers20);

        // выносим общий статус к номеру вопроса

        if (
            numbers20.firstNumber === "right" &&
            numbers20.secondNumber === "right" &&
            numbers20.thirdNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question20"),
                "app20",
                20
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question20"),
                "app20",
                20
            );

            addCorrectAnswerQuestion20();
        }
    } else {
        highlightUnselectedBlocks(3, 20, numbers20);
    }
}

// RESULT

document.getElementById("submit").onclick = function () {
    question1();
    question2();
    question3();
    question4();
    question5();
    question6();
    question7();
    question8();
    question9();
    // question10();
    question11();
    question12();
    question13();
    question14();
    question15();
    question16();
    question17();
    question18();
    question19();
    question20();
};
