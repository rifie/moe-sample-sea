<script>
    import { onMount } from 'svelte';
    let carlen = 0;
    let interval;
    let intervalnew;
  
    onMount(() => {
      interval = setInterval(function() {
        console.log('Interval Running');
        if (Moengage.cards === undefined) {
          console.log("waiting")
        } else {
          console.log('Interval Stopped');
          clearInterval(interval);
          document.getElementById("heroimage").style.display = "none";
          let x = Moengage.cards.getCardsForCategory('Explore').then(function(cards) {
            let len = cards.length;
            let n = 0;
            for (let i = 0; i < len; i++) {
                if (cards[i] && 
    cards[i]['templateData'] && 
    cards[i]['templateData']['containers'] && 
    cards[i]['templateData']['containers'][0] && 
    cards[i]['templateData']['containers'][0]['widgets'] && 
    cards[i]['templateData']['containers'][0]['widgets'][0]) {
                const img = cards[i]['templateData']['containers'][0]['widgets'][0]['content'];
                const tit = (cards[i]['templateData']['containers'][0]['widgets'][1]['content']).replace(/<div>/, "");
                const des = (cards[i]['templateData']['containers'][0]['widgets'][2]['content']).replace(/<div>/, "");
                const dive = document.createElement("div");
                const imge = document.createElement("img");
                const title = document.createElement("h2");
                const desc = document.createElement("h3");
                const selcon = document.createElement("button");
                document.getElementById('container').appendChild(dive);
                dive.appendChild(imge);
                dive.appendChild(title);
                dive.appendChild(desc);
  
                document.getElementById('select-container').appendChild(selcon);
                console.log(img)
                imge.src = img;
                title.innerHTML = tit;
                desc.innerHTML = des;
                n++;
                dive.classList.add(n);
                s = "s"+String(n);
                selcon.classList.add(s);
                if (n === 1) {
                  dive.classList.add("carousel_item-selected");
                  selcon.classList.add("select-highlight");
                } else {
                  dive.classList.add("carousel_item");
                  selcon.classList.add("select");
                };
  
                console.log(cards);
                carlen++;
              }
            };
          })
          intervalnew = setInterval(function() {next();}, 3000);
        }
      }, 1000);
    });
  
    function next() {
      // your next function code here
    };
  
    function previous() {
      // your previous function code here
    };
  </script>
  
  <style>
    #cardicon {
            position: relative;
            z-index: 9999;
          }

          body {
          text-align: center;
          
        }

        #container {
            display: flex;
            justify-content: center;
            margin: 10px;
            flex-direction: row;
            position: relative;
            align-items: center;
            width:100%;
        }

        .carousel_item {
            display: none;
            flex-direction: column;

        }

        .carousel_item_selected {
            display: flex;
            justify-content: center;
            margin-left: auto;
            margin-right: auto;
            flex-direction: column;
        }

        img {
            border-radius: 10px;
        }

        #buttons-next {
            display: flex;
            justify-content: center;
            margin: 10px;
            position: absolute;
            right:23%;
            cursor:pointer;
        }

        #buttons-prev {
            display: flex;
            justify-content: center;
            margin: 10px;
            position: absolute;
            left: 23%;
            cursor:pointer;
        }
        
        #previous,#next{
            border-radius: 50%;
            border:none;
            background: white;
            
        }

        #title {
            display: flex;
            justify-content: center;
            margin: 10px;
        }
        
        .select{
            border-radius:20px;
            border:none;
            background: red;
            padding:5px;
            margin:3px;
            cursor:pointer;
            width : 20px;
        }
        
        .select-highlight{
            border-radius:20px;
            border:none;
            background: gray;
            padding:5px;
            margin:3px;
            cursor:pointer;
            width : 20px;
        }
        .select-container{
            display: flex;
            justify-content: center;
            margin: 30px;
            flex-direction: row;
            position: absolute;
            align-items: flex-end;
            bottom:-100px;
            width : 20px;

            
        }

  .w800 { max-width: 800px; margin-top:100px; padding : 0 auto;}
  </style>
  
  <div class="container w800 mt-6">
 
  
    <div id="container">
      <img id="heroimage" src="spin.gif" width="100">
      <div id="buttons-prev">
          <button id="previous" on:click={previous}>&lt;</button>
      </div>
      <div id="buttons-next">
          <button id="next" on:click={next}>&gt;</button>
      </div>
      <div id="select-container" class="select-container"></div>
    </div>
  </div>
  
  <div id="cardicon"></div>