fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
        .then(resp => {
            return resp.json()
        })
        .then(all => {
           // console.log(all[45].images.md)
            const bane = all[45]
           // console.log(bane)
            const randomHero = all[Math.round(Math.random()*all.length)]
            //console.log(randomHero)
            //console.log(randomHero.images.md)
           // console.log(baneImage)
            const imageBane = document.getElementById('display')
            imageBane.setAttribute("src",all[45].images.md)
           // console.log(all[45].images.md)
           
            const randomImage = document.getElementById('display_random')
            randomImage.setAttribute("src",randomHero.images.md)

            //dis bonjour

            const sayHello = () => {
                const output = document.getElementById("output")
                //console.log(output)
                output.innerHTML = `Vous infligez ${bane.powerstats.strenght} à ${randomHero.name}`
                //document represente le document affiché par le navigateur   
            }
            
            //console.log('display stats')
            //Affichage des stats
            const displayList = document.getElementById('displayStats')
            //console.log(displayStats)
            displayList.innerHTML = `<li> Health Points : ${bane.powerstats.combat} </li>
                                <li> Strength : ${bane.powerstats.strength} </li>
                                <li> Speed : ${bane.powerstats.speed} </li>
                                <li> Power : ${bane.powerstats.power} </li>`
              
            const button = document.getElementById("button")
            button.addEventListener('click', sayHello)

            const fuite = () => {
                const output3 = document.getElementById("escape")
                console.log(escape)
                output.innerHTML = `Vous avez pris la fuite comme un vilain`
            }

            const buttonBlue = document.getElementById("buttonBlue")
            buttonBlue.addEventListener('click', fuite)

            // afficher les stats dans un tableau
            
            let list = ""
            console.log(bane.powerstats)

            const htmlList = document.getElementById('display')
            htmlList.innerHTML = list
        
        // afficher les stats adverses

        const displayListDeux = document.getElementById('display2')
        console.log('displayStats2')
        displayListDeux.innerHTML = `<li> Health Points : ${randomHero.powerstats.combat}</li>
                                    <li> Strength : ${randomHero.powerstats.strenght} </li>
                                    <li> Speed : ${randomHero.powerstats.speed} </li>
                                    <li> Power : ${randomHero.powerstats.power} </li>`

        // Combat

            const combat = (p1, p2) => {
                console.log("fight 1")
                randomHero.combat = randomHero.combat - bane.powerstats.strength
                console.log(randomHero.combat)
            }
        
        // affichage des stats adverses
    })      

            //afficher les images

            // for (let hero of all) {
            //     console.log(hero.images.md)
            // }
        

        // fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/70.json')
        // .then(resp => {
        //     return resp.json()
        // })
        // .then(batman => {
        //  console.log(batman)
        //  }),

        //  fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/450.json')
        // .then(resp => {
        //     return resp.json()
        // })
        // .then(michaelangelo => {
        //  console.log(michaelangelo)
        //  }),

        //   fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/152.json')
        // .then(resp => {
        //     return resp.json()
        // })
        // .then(captaincold => {
        //  console.log(captaincold)
        //  })
        //  fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/499.json')
        // .then(resp => {
        //     return resp.json() 
        //     console.log(499-offspring.images.md)
        // })
        // .then (offspring => {
        //     console.log(offspring)
        // })
        

