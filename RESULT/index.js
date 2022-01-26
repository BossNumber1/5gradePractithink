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
            elem.offsetLeft + widthAdjacentElement / 2 - 197 + "px";
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
        elem.parentElement.parentElement.parentElement.className === "content11"
    ) {
        objDiv.style.marginTop = "-40px";
    }

    if (elem.parentElement.parentElement.className === "content14") {
        objDiv.style.marginTop = "-23px";
    }

    if (elem.parentElement.parentElement.className === "content21") {
        objDiv.style.marginTop = "-23px";
    }

    if (
        elem.parentElement.parentElement.parentElement.parentElement
            .className === "content22"
    ) {
        objDiv.style.marginTop = "-23px";
    }

    if (
        elem.parentElement.firstElementChild.id === "secondNumber9" ||
        elem.parentElement.firstElementChild.id === "thirdNumber9"
    ) {
        objDiv.style.marginTop = "223px";
        objDiv.style.marginLeft = elem.offsetLeft - 100 + "px";
    }

    if (
        elem.parentElement.firstElementChild.id === "secondNumber12" ||
        elem.parentElement.firstElementChild.id === "thirdNumber12" ||
        elem.parentElement.firstElementChild.id === "fourthNumber12"
    ) {
        objDiv.style.marginTop = "90px";
        objDiv.style.marginLeft = elem.offsetLeft - 100 + "px";
    }

    if (
        elem.parentElement.firstElementChild.id === "secondNumber16" ||
        elem.parentElement.firstElementChild.id === "thirdNumber16" ||
        elem.parentElement.firstElementChild.id === "fourthNumber16" ||
        elem.parentElement.firstElementChild.id === "fifthNumber16"
    ) {
        objDiv.style.marginTop = "100px";
        objDiv.style.marginLeft = elem.offsetLeft - 110 + "px";
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
    let elementParent = elem.parentElement;

    if (
        elem.parentElement.parentElement.parentElement.className !==
            "content4" &&
        elem.parentElement.parentElement.parentElement.className !== "content8"
    ) {
        elementParent.insertBefore(objDiv, elem);
    }
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

            // addCorrectAnswerQuestion1();
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

            // addCorrectAnswerQuestion2();
        }
    } else {
        highlightUnselectedBlocks(1, 2, numbers2);
    }
}

// 3 QUESTION

let numbers3 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

// gettingDataFromFields(3, [52, 40, 12], 3, numbers3);

function question3() {
    if (
        numbers3.firstNumber != "" &&
        numbers3.secondNumber != "" &&
        numbers3.thirdNumber != ""
    ) {
        succerrorAndCreateMiniIcon(3, 3, numbers3);

        // выносим общий статус к номеру вопроса

        if (
            numbers3.firstNumber === "right" &&
            numbers3.secondNumber === "right" &&
            numbers3.thirdNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question3"),
                "app3",
                3
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question3"),
                "app3",
                3
            );

            // addCorrectAnswerQuestion3();
        }
    } else {
        highlightUnselectedBlocks(3, 3, numbers3);
    }
}

// 4 QUESTION

let numbers4 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

// gettingDataFromFields(4, [12, 28, 40, 44], 4, numbers4);

function question4() {
    if (
        numbers4.firstNumber != "" &&
        numbers4.secondNumber != "" &&
        numbers4.thirdNumber != "" &&
        numbers4.fourthNumber != ""
    ) {
        succerrorAndCreateMiniIcon(4, 4, numbers4);

        // выносим общий статус к номеру вопроса

        if (
            numbers4.firstNumber === "right" &&
            numbers4.secondNumber === "right" &&
            numbers4.thirdNumber === "right" &&
            numbers4.fourthNumber === "right"
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
    } else {
        highlightUnselectedBlocks(4, 4, numbers4);
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

            // addCorrectAnswerQuestion6();
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

// gettingDataFromFields(4, [4, 8, 3, 6], 7, numbers7);

function question7() {
    let firstEmpty = document.getElementsByClassName("firstEmpty7")[0];

    if (
        numbers7.firstNumber !== "" &&
        numbers7.secondNumber !== "" &&
        numbers7.thirdNumber !== "" &&
        numbers7.fourthNumber !== "" &&
        firstEmpty.textContent !== ""
    ) {
        // выносим общий статус к номеру вопроса

        if (
            numbers7.firstNumber === "right" &&
            numbers7.secondNumber === "right" &&
            numbers7.thirdNumber === "right" &&
            numbers7.fourthNumber === "right" &&
            firstEmpty.textContent === "="
        ) {
            firstEmpty.style.backgroundColor = "#9DD765";

            addImage(
                "success",
                document.getElementsByClassName("question7"),
                "app7",
                7
            );
        } else {
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

            succerror(firstEmpty, firstEmpty.textContent !== "=");

            addImage(
                "failure",
                document.getElementsByClassName("question7"),
                "app7",
                7
            );

            // addCorrectAnswerQuestion7();
        }
    } else {
        highlightUnselectedBlocks(4, 7, numbers7);

        firstEmpty.style.border = "2px solid #FFB47D";
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
    seventhNumber: "",
    eighthNumber: "",
};

// gettingDataFromFields(8, [2, 8, 1, 8, 2, 8, 5, 8], 8, numbers8);

function question8() {
    if (
        numbers8.firstNumber !== "" &&
        numbers8.secondNumber !== "" &&
        numbers8.thirdNumber !== "" &&
        numbers8.fourthNumber !== "" &&
        numbers8.fifthNumber !== "" &&
        numbers8.sixthNumber !== "" &&
        numbers8.seventhNumber !== "" &&
        numbers8.eighthNumber !== ""
    ) {
        succerrorAndCreateMiniIcon(8, 8, numbers8);

        // выносим общий статус к номеру вопроса

        if (
            numbers8.firstNumber === "right" &&
            numbers8.secondNumber === "right" &&
            numbers8.thirdNumber === "right" &&
            numbers8.fourthNumber === "right" &&
            numbers8.fifthNumber === "right" &&
            numbers8.sixthNumber === "right" &&
            numbers8.seventhNumber === "right" &&
            numbers8.eighthNumber === "right"
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

            // addCorrectAnswerQuestion8();
        }
    } else {
        highlightUnselectedBlocks(8, 8, numbers8);
    }
}

// 9 QUESTION

let numbers9 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

// gettingDataFromFields(3, [109, 100, 9], 9, numbers9);

function question9() {
    if (
        numbers9.firstNumber != "" &&
        numbers9.secondNumber != "" &&
        numbers9.thirdNumber != ""
    ) {
        succerrorAndCreateMiniIcon(3, 9, numbers9);

        // выносим общий статус к номеру вопроса

        if (
            numbers9.firstNumber === "right" &&
            numbers9.secondNumber === "right" &&
            numbers9.thirdNumber === "right"
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

            // addCorrectAnswerQuestion9();
        }
    } else {
        highlightUnselectedBlocks(3, 9, numbers9);
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

function question11() {
    let firstEmpty = document.getElementById("block1part1firstNumber11");
    let secondEmpty = document.getElementById("block1part2firstNumber11");
    let thirdEmpty = document.getElementById("block1part1secondNumber11");
    let fourthEmpty = document.getElementById("block1part2secondNumber11");
    let fifthEmpty = document.getElementById("block1part1thirdNumber11");
    let sixthEmpty = document.getElementById("block1part2thirdNumber11");
    let seventhEmpty = document.getElementById("block2part1firstNumber11");
    let eighthEmpty = document.getElementById("block2part2firstNumber11");
    let ninthEmpty = document.getElementById("block2part1secondNumber11");
    let tenthEmpty = document.getElementById("block2part2secondNumber11");
    let eleventhEmpty = document.getElementById("block2part1thirdNumber11");
    let twelfthEmpty = document.getElementById("block2part2thirdNumber11");

    if (
        firstEmpty.value !== "" &&
        thirdEmpty.value !== "" &&
        fourthEmpty.value !== "" &&
        fifthEmpty.value !== "" &&
        sixthEmpty.value !== "" &&
        seventhEmpty.value !== "" &&
        eighthEmpty.value !== "" &&
        ninthEmpty.value !== "" &&
        tenthEmpty.value !== "" &&
        eleventhEmpty.value !== "" &&
        twelfthEmpty.value !== ""
    ) {
        if (
            firstEmpty.value === "3" &&
            thirdEmpty.value === "2" &&
            fourthEmpty.value === "6" &&
            fifthEmpty.value === "4" &&
            sixthEmpty.value === "2" &&
            seventhEmpty.value === "3" &&
            eighthEmpty.value === "3" &&
            ninthEmpty.value === "4" &&
            tenthEmpty.value === "3" &&
            eleventhEmpty.value === "2" &&
            twelfthEmpty.value === "2"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question11"),
                "app11",
                11
            );
        } else {
            if (firstEmpty.value !== "3") {
                firstEmpty.style.border = "2px solid #ED7777";
                firstEmpty.style.backgroundColor = "#ED7777";
                firstEmpty.style.color = "white";

                addMiniIcon(firstEmpty, "failure");
            }

            if (secondEmpty.value !== "") {
                secondEmpty.style.border = "2px solid #ED7777";
                secondEmpty.style.backgroundColor = "#ED7777";
                secondEmpty.style.color = "white";

                addMiniIcon(secondEmpty, "failure");
            }

            if (thirdEmpty.value !== "2") {
                thirdEmpty.style.border = "2px solid #ED7777";
                thirdEmpty.style.backgroundColor = "#ED7777";
                thirdEmpty.style.color = "white";

                addMiniIcon(thirdEmpty, "failure");
            }

            if (fourthEmpty.value !== "6") {
                fourthEmpty.style.border = "2px solid #ED7777";
                fourthEmpty.style.backgroundColor = "#ED7777";
                fourthEmpty.style.color = "white";

                addMiniIcon(fourthEmpty, "failure");
            }

            if (fifthEmpty.value !== "4") {
                fifthEmpty.style.border = "2px solid #ED7777";
                fifthEmpty.style.backgroundColor = "#ED7777";
                fifthEmpty.style.color = "white";

                addMiniIcon(fifthEmpty, "failure");
            }

            if (sixthEmpty.value !== "2") {
                sixthEmpty.style.border = "2px solid #ED7777";
                sixthEmpty.style.backgroundColor = "#ED7777";
                sixthEmpty.style.color = "white";

                addMiniIcon(sixthEmpty, "failure");
            }

            if (seventhEmpty.value !== "3") {
                seventhEmpty.style.border = "2px solid #ED7777";
                seventhEmpty.style.backgroundColor = "#ED7777";
                seventhEmpty.style.color = "white";

                addMiniIcon(seventhEmpty, "failure");
            }

            if (eighthEmpty.value !== "3") {
                eighthEmpty.style.border = "2px solid #ED7777";
                eighthEmpty.style.backgroundColor = "#ED7777";
                eighthEmpty.style.color = "white";

                addMiniIcon(eighthEmpty, "failure");
            }

            if (ninthEmpty.value !== "4") {
                ninthEmpty.style.border = "2px solid #ED7777";
                ninthEmpty.style.backgroundColor = "#ED7777";
                ninthEmpty.style.color = "white";

                addMiniIcon(ninthEmpty, "failure");
            }

            if (tenthEmpty.value !== "3") {
                tenthEmpty.style.border = "2px solid #ED7777";
                tenthEmpty.style.backgroundColor = "#ED7777";
                tenthEmpty.style.color = "white";

                addMiniIcon(tenthEmpty, "failure");
            }

            if (eleventhEmpty.value !== "2") {
                eleventhEmpty.style.border = "2px solid #ED7777";
                eleventhEmpty.style.backgroundColor = "#ED7777";
                eleventhEmpty.style.color = "white";

                addMiniIcon(eleventhEmpty, "failure");
            }

            if (twelfthEmpty.value !== "2") {
                twelfthEmpty.style.border = "2px solid #ED7777";
                twelfthEmpty.style.backgroundColor = "#ED7777";
                twelfthEmpty.style.color = "white";

                addMiniIcon(twelfthEmpty, "failure");
            }

            addImage(
                "failure",
                document.getElementsByClassName("question11"),
                "app11",
                11
            );

            // addCorrectAnswerQuestion11();
        }
    } else {
        if (firstEmpty.value === "") {
            firstEmpty.style.border = "2px solid #FFB47D";
        }

        if (secondEmpty.value === "") {
            secondEmpty.style.border = "2px solid #FFB47D";
        }

        if (thirdEmpty.value === "") {
            thirdEmpty.style.border = "2px solid #FFB47D";
        }

        if (fourthEmpty.value === "") {
            fourthEmpty.style.border = "2px solid #FFB47D";
        }

        if (fifthEmpty.value === "") {
            fifthEmpty.style.border = "2px solid #FFB47D";
        }

        if (sixthEmpty.value === "") {
            sixthEmpty.style.border = "2px solid #FFB47D";
        }

        if (seventhEmpty.value === "") {
            seventhEmpty.style.border = "2px solid #FFB47D";
        }

        if (eighthEmpty.value === "") {
            eighthEmpty.style.border = "2px solid #FFB47D";
        }

        if (ninthEmpty.value === "") {
            ninthEmpty.style.border = "2px solid #FFB47D";
        }

        if (tenthEmpty.value === "") {
            tenthEmpty.style.border = "2px solid #FFB47D";
        }

        if (eleventhEmpty.value === "") {
            eleventhEmpty.style.border = "2px solid #FFB47D";
        }

        if (twelfthEmpty.value === "") {
            twelfthEmpty.style.border = "2px solid #FFB47D";
        }
    }
}

// 12 QUESTION

let numbers12 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

// gettingDataFromFields(4, [1215, 1000, 200, 15], 12, numbers12);

function question12() {
    if (
        numbers12.firstNumber != "" &&
        numbers12.secondNumber != "" &&
        numbers12.thirdNumber != "" &&
        numbers12.fourthNumber != ""
    ) {
        succerrorAndCreateMiniIcon(4, 12, numbers12);

        // выносим общий статус к номеру вопроса

        if (
            numbers12.firstNumber === "right" &&
            numbers12.secondNumber === "right" &&
            numbers12.thirdNumber === "right" &&
            numbers12.fourthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question12"),
                "app12",
                12
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question12"),
                "app12",
                12
            );

            // addCorrectAnswerQuestion12();
        }
    } else {
        highlightUnselectedBlocks(4, 12, numbers12);
    }
}

// 13 QUESTION

let numbers13 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

// gettingDataFromFields(
//     4,
//     ["10 1/2", "16 2/3", "18 1/5", "24 3/8"],
//     13,
//     numbers13
// );

function question13() {
    if (
        numbers13.firstNumber != "" &&
        numbers13.secondNumber != "" &&
        numbers13.thirdNumber != "" &&
        numbers13.fourthNumber != ""
    ) {
        succerrorAndCreateMiniIcon(4, 13, numbers13);

        // выносим общий статус к номеру вопроса

        if (
            numbers13.firstNumber === "right" &&
            numbers13.secondNumber === "right" &&
            numbers13.thirdNumber === "right" &&
            numbers13.fourthNumber === "right"
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

            // addCorrectAnswerQuestion13();
        }
    } else {
        highlightUnselectedBlocks(4, 13, numbers13);
    }
}

// 14 QUESTION

let numbers14 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

// gettingDataFromFields(4, ["2/5", "30", "60/5", "12"], 14, numbers14);

function question14() {
    if (
        numbers14.firstNumber !== "" &&
        numbers14.secondNumber !== "" &&
        numbers14.thirdNumber !== "" &&
        numbers14.fourthNumber !== ""
    ) {
        succerrorAndCreateMiniIcon(4, 14, numbers14);

        // выносим общий статус к номеру вопроса

        if (
            numbers14.firstNumber === "right" &&
            numbers14.secondNumber === "right" &&
            numbers14.thirdNumber === "right" &&
            numbers14.fourthNumber === "right"
        ) {
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

            // addCorrectAnswerQuestion14();
        }
    } else {
        highlightUnselectedBlocks(4, 14, numbers14);
    }
}

// 15 QUESTION

function question15() {
    // получаем содежимое блоков
    let firstPlace = document.getElementsByClassName("firstPlace15")[0];
    let secondPlace = document.getElementsByClassName("secondPlace15")[0];
    let thirdPlace = document.getElementsByClassName("thirdPlace15")[0];
    let fourthPlace = document.getElementsByClassName("fourthPlace15")[0];
    let fifthPlace = document.getElementsByClassName("fifthPlace15")[0];

    let firstPlaceText = firstPlace.textContent;
    let secondPlaceText = secondPlace.textContent;
    let thirdPlaceText = thirdPlace.textContent;
    let fourthPlaceText = fourthPlace.textContent;
    let fifthPlaceText = fifthPlace.textContent;

    if (
        firstPlaceText !== "" &&
        secondPlaceText !== "" &&
        thirdPlaceText !== "" &&
        fourthPlaceText !== "" &&
        fifthPlaceText !== ""
    ) {
        // проверяем на верность для создания статуса
        if (
            firstPlaceText === "straight" &&
            secondPlaceText === "right" &&
            thirdPlaceText === "obtuse" &&
            fourthPlaceText === "acute" &&
            fifthPlaceText === "obtuse"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question15"),
                "app15",
                15
            );
        } else {
            if (firstPlaceText !== "straight") {
                firstPlace.style.border = "2px solid #ED7777";
                addMiniIcon(firstPlace, "failure");
            } else if (firstPlaceText === "straight") {
                firstPlace.style.border = "2px solid #9DD765";
                addMiniIcon(firstPlace, "success");
            }

            if (secondPlaceText !== "right") {
                secondPlace.style.border = "2px solid #ED7777";
                addMiniIcon(secondPlace, "failure");
            } else if (secondPlaceText === "right") {
                secondPlace.style.border = "2px solid #9DD765";
                addMiniIcon(secondPlace, "success");
            }

            if (thirdPlaceText !== "obtuse") {
                thirdPlace.style.border = "2px solid #ED7777";
                addMiniIcon(thirdPlace, "failure");
            } else if (thirdPlaceText === "obtuse") {
                thirdPlace.style.border = "2px solid #9DD765";
                addMiniIcon(thirdPlace, "success");
            }

            if (fourthPlaceText !== "acute") {
                fourthPlace.style.border = "2px solid #ED7777";
                addMiniIcon(fourthPlace, "failure");
            } else if (fourthPlaceText === "acute") {
                fourthPlace.style.border = "2px solid #9DD765";
                addMiniIcon(fourthPlace, "success");
            }

            if (fifthPlaceText !== "obtuse") {
                fifthPlace.style.border = "2px solid #ED7777";
                addMiniIcon(fifthPlace, "failure");
            } else if (fifthPlaceText === "obtuse") {
                fifthPlace.style.border = "2px solid #9DD765";
                addMiniIcon(fifthPlace, "success");
            }

            addImage(
                "failure",
                document.getElementsByClassName("question15"),
                "app15",
                15
            );

            // addCorrectAnswerQuestion15();
        }
    } else {
        highlightingUnfillededBlocks(5, 15);
    }
}

// 16 QUESTION

let numbers16 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
    fifthNumber: "",
};

// gettingDataFromFields(5, [828, 600, 90, 120, 18], 16, numbers16);

function question16() {
    if (
        numbers16.firstNumber != "" &&
        numbers16.secondNumber != "" &&
        numbers16.thirdNumber != "" &&
        numbers16.fourthNumber != "" &&
        numbers16.fifthNumber != ""
    ) {
        succerrorAndCreateMiniIcon(5, 16, numbers16);

        // выносим общий статус к номеру вопроса

        if (
            numbers16.firstNumber === "right" &&
            numbers16.secondNumber === "right" &&
            numbers16.thirdNumber === "right" &&
            numbers16.fourthNumber === "right" &&
            numbers16.fifthNumber === "right"
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

            // addCorrectAnswerQuestion16();
        }
    } else {
        highlightUnselectedBlocks(5, 16, numbers16);
    }
}

// 17 QUESTION

let numbers17 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

// gettingDataFromFields(4, [8, 12, 3, 4], 17, numbers17);

function question17() {
    let firstEmpty = document.getElementsByClassName("firstEmpty17")[0];

    if (
        numbers17.firstNumber !== "" &&
        numbers17.secondNumber !== "" &&
        numbers17.thirdNumber !== "" &&
        numbers17.fourthNumber !== "" &&
        firstEmpty.textContent !== ""
    ) {
        // выносим общий статус к номеру вопроса

        if (
            numbers17.firstNumber === "right" &&
            numbers17.secondNumber === "right" &&
            numbers17.thirdNumber === "right" &&
            numbers17.fourthNumber === "right" &&
            firstEmpty.textContent === "<"
        ) {
            firstEmpty.style.backgroundColor = "#9DD765";

            addImage(
                "success",
                document.getElementsByClassName("question17"),
                "app17",
                17
            );
        } else {
            succerror(
                document.getElementById("firstNumber17"),
                numbers17.firstNumber === "wrong"
            );

            succerror(
                document.getElementById("secondNumber17"),
                numbers17.secondNumber === "wrong"
            );

            succerror(
                document.getElementById("thirdNumber17"),
                numbers17.thirdNumber === "wrong"
            );

            succerror(
                document.getElementById("fourthNumber17"),
                numbers17.fourthNumber === "wrong"
            );

            succerror(firstEmpty, firstEmpty.textContent !== "<");

            addImage(
                "failure",
                document.getElementsByClassName("question17"),
                "app17",
                17
            );

            // addCorrectAnswerQuestion17();
        }
    } else {
        highlightUnselectedBlocks(4, 17, numbers17);

        firstEmpty.style.border = "2px solid #FFB47D";
    }
}

// 18 QUESTION

let numbers18 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

// gettingDataFromFields(3, [40, 90, 50], 18, numbers18);

function question18() {
    if (
        numbers18.firstNumber != "" &&
        numbers18.secondNumber != "" &&
        numbers18.thirdNumber != ""
    ) {
        succerrorAndCreateMiniIcon(3, 18, numbers18);

        // выносим общий статус к номеру вопроса

        if (
            numbers18.firstNumber === "right" &&
            numbers18.secondNumber === "right" &&
            numbers18.thirdNumber === "right"
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

            // addCorrectAnswerQuestion18();
        }
    } else {
        highlightUnselectedBlocks(3, 18, numbers18);
    }
}

// 19 QUESTION

let numbers19 = {
    firstNumber: "",
};

// gettingDataFromFields(1, [14], 19, numbers19);

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

            // addCorrectAnswerQuestion19();
        }
    } else {
        highlightUnselectedBlocks(1, 19, numbers19);
    }
}

// 20 QUESTION

let numbers20 = {
    firstNumber: "",
};

// gettingDataFromFields(1, [2], 20, numbers20);

function question20() {
    if (numbers20.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 20, numbers20);

        // выносим общий статус к номеру вопроса

        if (numbers20.firstNumber === "right") {
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

            // addCorrectAnswerQuestion20();
        }
    } else {
        highlightUnselectedBlocks(1, 20, numbers20);
    }
}

// RESULT

document.getElementById("submit").onclick = function () {
    question1();
    question2();
    // question3();
    // question4();
    question5();
    question6();
    // question7();
    // question8();
    // question9();
    // question10();
    // question11();
    // question12();
    // question13();
    // question14();
    // question15();
    // question16();
    // question17();
    // question18();
    // question19();
    // question20();
};
