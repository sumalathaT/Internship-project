function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
alert("Valid Mail Id");
document.form1.text1.focus();
return true;
}
else
{
alert("Invalid Mail Id, Please Try Again");
document.form1.text1.focus();
return false;
}
}
