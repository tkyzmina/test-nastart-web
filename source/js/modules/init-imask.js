import IMask from "imask";
var element = document.getElementById("request-tel");
var maskOptions = {
  mask: "+{7}(000)000-00-00",
};
var mask = IMask(element, maskOptions);

export { mask };
