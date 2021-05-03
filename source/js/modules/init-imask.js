import IMask from "imask";
let mask = "";
const maskOptions = {
  mask: "+{7}(000)000-00-00",
};

const inputs = document.querySelectorAll("input[type=tel]");
inputs.forEach((item) => {
  mask = IMask(item, maskOptions);
});

export { mask };
