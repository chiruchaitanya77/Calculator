let firstNumber="";
let secondNumber="";
let operator="";

function appendNumber(num)
{
    if(operator == "")
    { firstNumber += num;
      document.getElementById('res').value=firstNumber; }

    else
    { secondNumber += num;
      document.getElementById('res').value=firstNumber+""+operator+""+secondNumber; }
}
function setOperator(op)
{ operator=op;
  document.getElementById('res').value=firstNumber+""+operator; }

function calculate()
{ let res;
  switch(operator)
  {
    case '+':
      res=parseInt(firstNumber) + parseInt(res);
      break;
      case '-':res
      res=parseInt(firstNumber) - parseInt(secondNumber);
      break;res
      case '*':res
      res=parseInt(firstNumber) * parseInt(secondNumber);
      break;
      case '/':
      res=parseInt(firstNumber) / parseInt(secondNumber);
      break;
  }
  document.getElementById('res').value=res;
}

function clearresult()
{
  firstNumber="";
  secondNumber="";
  operator="";
  document.getElementById('res').value="";
}