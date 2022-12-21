page scroll progressbar
<style>
  #progress {
    border-bottom: 2px solid blue;
    width: 0;
    position: fixed;
    top: 0; left: 0;
  }
</style>
<div id="progress"></div>
<script>
  // Create some content
  document.body.appendChild(document.createTextNode(
    "supercalifragilisticexpialidocious ".repeat(1000)));

  let bar = document.querySelector("#progress");
  window.addEventListener("scroll", () => {
    let max = document.body.scrollHeight - innerHeight;
    bar.style.width = `${(pageYOffset / max) * 100}%`;
  });
</script>
-------------------------------------------------------------------------
hostlistener
 @HostListener ('click', ['$event']) hh(e: MouseEvent){
    console.log(e.clientX, e.clientY)
 }
 ------------------------------------------------------------------------
remove duplicate
var arr = ["apple", "mango", "apple", 
            "orange", "mango", "mango"];
      
    function removeDuplicates(arr) {
        return arr.filter((item, 
            index) => arr.indexOf(item) === index);
    }
      
    console.log(removeDuplicates(arr));
    -----------------------------------------------------------------------
    another way to remove duplicate
    let numberStrings = ["one", "two", "one", "two"];
let myset = [...new Set(numberStrings)];
console.log(myset);
----------------------------------------------------------------------------
