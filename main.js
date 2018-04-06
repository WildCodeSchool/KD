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
            output.innerHTML = `Vous infligez ${bane.powerstats.strength} à ${randomHero.name}`//document represente le document affiché par le navigateur 
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
        //console.log('displayStats2')
        displayListDeux.innerHTML = `<li> Health Points : ${randomHero.powerstats.combat}</li>
                                    <li> Strength : ${randomHero.powerstats.strength} </li>
                                    <li> Speed : ${randomHero.powerstats.speed} </li>
                                    <li> Power : ${randomHero.powerstats.power} </li>`
        
        const defense = () => {
            const output4 = document.getElementById("button2")
            console.log(button2)
            output.innerHTML = `Vous etes protégé de 10 points d'armure`
        }

        


        // Combat

        const combat = (p1, p2) => {
            let tour = 0
            console.log("fight 1")
            output.innerHTML = ""
            while ((p1.powerstats.combat > 0) && (p2.powerstats.combat > 0)) {
                const reponse = "attaque/defense"
                if (reponse === "attaque"){
                    p2.powerstats.combat -= p1.powerstats.strength
                    output.innerHTML += `il reste ${p2.powerstats.combat} pv a ${p2.name}<br>`
                }
                if (p2.powerstats.combat > 0) {
                    p1.powerstats.combat -= p2.powerstats.strength
                    output.innerHTML += `il reste ${p1.powerstats.combat} pv a ${p1.name}<br>`
                } else if (reponse === "defense") {
                    p1.powerstats.combat -= (p2.powerstats.strength / 2)
                    output.innerHTML += `il reste ${p1.powerstats.combat} pv a ${p1.name}<br>`
                    output.innerHTML += `${p2.name} attaque !<br>`
                    p1.powerstats.combat -= p2.powerstats.strength
                    output.innerHTML += `il reste ${p1.powerstats.combat} pv a ${p1.name}<br>`
                } else {
                    output.innerHTML += `${p1.name} passe son tour !<br>`
                    output.innerHTML += `${p2.name} attaque !<br>`
                    p1.powerstats.combat -= p2.powerstats.strength
                    output.innerHTML += `il reste ${p1.powerstats.combat} pv a ${p1.name}<br>`
                }
            } 

            if (p1.powerstats.combat < 1) {
                output.innerHTML += `${p1.name} est mort !\n${p2.name} a gagné !\n`
            } else {
                output.innerHTML += `${p2.name} est mort !\n${p1.name} a gagné !\n`
            }
        }
        // combat(bane, randomHero)
        const buttonDeux = document.getElementById("button2")
        buttonDeux.addEventListener('click', () => {
            combat(bane, randomHero)
        })

    })
    
    
                /* while ((p1.pv > 0) && (p2.pv > 0)) {
                if (reponse === "attaque")
                p2.pv -= p1.attaque
                console.log(`il reste ${p2.pv} pv a ${p2.name}`)
                if (p2.pv > 0) {
                    p1.pv -= p2.attaque
                    console.log(`il reste ${p1.pv} pv a ${p1.name}`)
                }
            } else if (reponse === "defense") {
                p1.pv -= (p2.attaque / 2)
                console.log(`il reste ${p1.pv} pv a ${p1.name}`)
                console.log(`${p2.prenom} attaque !`)
                p1.pv -= p2.attaque
                console.log(`il reste ${p1.pv} pv a ${p1.prenom}`)
            } else {
                console.log(`${p1.prenom} passe son tour !`)
                console.log(`${p2.prenom} attaque !`)
                p1.pv -= p2.attaque
                console.log(`il reste ${p1.pv} pv a ${p1.prenom}`)
            }

            if (p1.pv < 1) {
                console.log(`${p1.prenom} est mort !\n${p2.prenom} a gagné !\n`)
            } else {
                console.log(`${p2.prenom} est mort !\n${p1.prenom} a gagné !\n`)
            }
            */