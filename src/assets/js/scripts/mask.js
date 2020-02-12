const mask = function() {
    function setCursorPosition(pos, e) {

        if (e.setSelectionRange) e.setSelectionRange(pos, pos);
        else if (e.createTextRange) {
          let range = e.createTextRange();
          range.collapse(true);
          range.moveEnd("character", pos);
          range.moveStart("character", pos);
          range.select()
        }
      }
    
      function mask(e) {
        let matrix = this.placeholder,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        def.length >= val.length && (val = def);
        matrix = matrix.replace(/[_\d]/g, function(a) {
          return val.charAt(i++) || "_"
        });
        this.value = matrix;
        i = matrix.lastIndexOf(val.substr(-1));
        i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
        setCursorPosition(i, this)
      }
      window.addEventListener("DOMContentLoaded", function() {
        let input = document.querySelector("#phone");
        input.addEventListener("input", mask, false);
        setCursorPosition(3, input);
      });

      window.addEventListener("DOMContentLoaded", function() {
        let inputMod = document.querySelector("#phoneModal");
        inputMod.addEventListener("input", mask, false);
        setCursorPosition(3, inputMod);
      });
}();

module.exports = mask;