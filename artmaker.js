window.onload =function () {
    let container = document.createElement('div');
    container.style.height = '200px';
    container.style.width = '200px';
    container.style.backgroundColor = 'purple';
    container.style.margin = 'auto';
    container.style.display = 'grid';
    container.style.gridTemplate = 'repeat(20, 1fr) / repeat(20, 1fr)';
    let currentColor = 'green'

    for(let i = 0; i < 400; i++) {
        let box = document.createElement('span');
        box.style.border = '1px solid black';
        box.style.backgroundColor = 'blue';
        box.style.height = '8px'
        box.style.width = '8px'
      
        box.addEventListener ('click', function(event){
            box.style.backgroundColor = currentColor;
        })
        container.appendChild(box);
    }
    
    let colorPalette = document.querySelector ('#palette')
    colorPalette.style.display = 'grid';
    colorPalette.style.gridTemplate = 'repeat(1, 1fr) / repeat(6, 1fr)';
    let colorChoices = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
    for (let color of colorChoices){
        let palette = document.createElement('span');
        palette.style.border = '1px solid white';
        palette.style.height = '10px';
        palette.style.width = '20px';
        palette.style.background = color;
        colorPalette.appendChild(palette)

        palette.addEventListener ('click', function(event){
            currentColor=palette.style.backgroundColor
        })

    }

      document.body.appendChild(container);
     }


    
  