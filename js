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
set css from javascript
css
html{
    box-sizing: border-box;
    --win-height: 0px;
}
.content{
   width: 100%;
   height: calc(var(--win-height) * 1px);
   background-color: aliceblue;
}
----------------
html
<div class="content">
....
</div>
 <script>
        window.onload = () => {
            let height = window.innerHeight;
            document.querySelector('.content').style.setProperty('--win-height', height - 80)
        }
        window.addEventListener('resize', () => {
            let height = window.innerHeight;
            document.querySelector('.content').style.setProperty('--win-height', height - 80)
        })
    </script>
    ---------------------------------------------------------------------------------
center form
.container{
   width: 100%;
   height: calc(100vh - 80px);
   background-color: aliceblue;
   display: grid;
   place-items: center;
}

or

.container{
   width: 100%;
   height: calc(100vh - 80px);
   background-color: aliceblue;
   display: flex;
   justify-content: center;
   align-items: center;
}
----------------------------------------------------------
apply, bind and call on slice
var arr = [1,2,3,4,5]
console.log([].slice.apply(arr,[1,3])) // 2,3
---
console.log([].slice.call(arr,1,3)) // 2,3
---
var x = [].slice.bind(arr,1,3)
console.log(x())
----------------------------------------------------------

