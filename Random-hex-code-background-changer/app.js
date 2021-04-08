 const body = document.querySelector('body')
 const button = document.querySelector('button')
 const hexValue = document.querySelector('#hexValue')
 const hexcode = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
//   body.style.backgroundColor = "#222"

 button.addEventListener('click',function(){
    let hex = "#"
        for(let i = 0;i<6;i++){

            const index = parseInt(Math.random()*hexcode.length)
            hex += hexcode[index]
       console.log(hex)
       body.style.backgroundColor = hex
	   hexValue.innerHTML = hex
        }


 })

