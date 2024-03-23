btn = document.querySelectorAll('button');
input = document.getElementById('input');

let num1 = null;
let num2 = null;
let operator = null;


btn.forEach(element => {
    element.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        if (e.target.textContent == 'C') {
            input.textContent = ' ';
            num1 = null;
            operator = null;
        }
        else if (e.target.textContent == '<') {
            input.textContent = input.textContent.slice(0, -1);
        }
        else if (['+', '-', '*', '/'].includes(e.target.textContent)) {
            num1 = parseFloat(input.textContent);
            operator = e.target.textContent;
            input.textContent = ' ';
        }
        else if (e.target.textContent == '=') {
            num2 = parseFloat(input.textContent);
            switch (operator) {
                case '+' :
                    input.textContent = num1 + num2;
                    break;  
                case '-' :
                    input.textContent = num1 - num2;
                    break;
                case '/' :
                    input.textContent = num1 / num2;
                    break;  
                case '*' :
                    input.textContent = num1 * num2;
                    break;  
            }
            num1 = null;
            operator = null;
        }   
        else {
            input.textContent += e.target.textContent;
        }
    });
    
});