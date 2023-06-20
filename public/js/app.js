let attack1 = document.querySelector("#alt1")
let attack2 = document.querySelector("#alt2")
let attack3 = document.querySelector("#alt3")
let ultimate = document.querySelector("#ult")


class Personnage {
    constructor(name, health, init, attack) {
            this.name = name;
            this.health = health;
            this.init = init;
            this.attack = attack;
    }
}
class Attacks {
    constructor(nameAttack, damage, numbre) {
            this.nameAttack = nameAttack;
            this.damage = damage;
            this.numbre = numbre;         
    }
}

let ablt1 = new Attacks("ablt1", 15, 2);
let ablt2 = new Attacks("ablt2", 10, 2);
let ablt3 = new Attacks("ablt3", 10, 2);
let ultim = new Attacks("ultim", 30, 1);

let enmyAblt1 = new Attacks("ablt1", 10, 2);
let enmyAblt2 = new Attacks("ablt2", 10, 2);
let enmyUltim = new Attacks("ablt3", 40, 1);



let heroAttack = [ablt1, ablt2, ablt3, ultim];
let enmyAttack = [enmyAblt1, enmyAblt2, enmyUltim];

let hero = new Personnage("nassim", 100 ,200, heroAttack);
let enemie = new Personnage("moha", 100 ,190, enmyAttack);
// attack hero 

console.log(hero,enemie);

function fight(pok1, pok2) {
    let firstAttacker = pok1;
    let secondAttacker = pok2;

    if (pok1.init < pok2.init) {
        firstAttacker = pok2;
        secondAttacker = pok1;
    }

   

    attack1.addEventListener("click", () => {
        if (pok1.health > 0 && pok2.health > 0) {
            
            attackHero(firstAttacker, secondAttacker);
            attackEnemy(secondAttacker,firstAttacker);
        }
        else {
            alert(`${pok1.health} ${pok2.health}`)
        }
    })

    attack2.addEventListener("click", () => {
        if (pok1.health > 0 && pok2.health > 0) {
            volt_tackle_attack(firstAttacker, secondAttacker);
        }
        else {
            alert(`${pok1.health} ${pok2.health}`)
        }
    })
    attack3.addEventListener("click", () => {
        if (pok1.health > 0 && pok2.health > 0) {
            thunder_wove_attack(firstAttacker)
        }
        else {
            alert(`${pok2.health}`)
        }
    })
}

// function des attack


//let attkc1 = [thunder, volt_tackle, quick_attack, thunder_wove];

const attackHero = (attaquant, victime,) => {
    console.log("Attack: ", {
        attaquant,
        victime
    });

    let attack = attaquant.attack[0];
    const randomAttack = attaquant.attack[Math.round(Math.random() * attaquant.attack.length - 1)]
    if (randomAttack) {
        attack = randomAttack
    }
    setTimeout(() => {
        victime.health = victime.health - attack.damage;
        document.getElementById("ef1").style.display="block"
        
    }, 1000);

    setTimeout(() => {
        document.getElementById("ef1").style.display="none"
  
        
    }, 2000);
    


    console.log("victime health: ", victime.health);
}


// Cet objet attaque
const volt_tackle_attack = (attaquant, victime) => {
    let attack = attaquant.attack[1];

    setTimeout(() => {
        
    victime.health = victime.health - attack.damage;
    attaquant.health = attaquant.health - victime.health * 0.25
        document.getElementById("ef2").style.display="block"
        console.log(victime.health);
        console.log(attaquant.health);
        
    }, 1000);

    setTimeout(() => {
        document.getElementById("ef2").style.display="none"
  
        
    }, 2000);
    
    
    console.log("victime health: ", victime.health, "attaquant health : ", attaquant.health);

}

const quick_attack_hh = (attaquant) => {

    let soin = attaquant.health * 0.25;
    attaquant.health += soin;
}

// Cet objet attaque

// Cet objet attaque
const thunder_wove_attack = (victime) => {
    setTimeout(() => {
        victime.health = 0
        document.getElementById("ef1").style.display="block";
        
    }, 1000);
    

    setTimeout(() => {
        document.getElementById("ef1").style.display="none"
  
        
    }, 2000)

}


//FUNCTION VICTIME 
//let attk2 = [thunder, iron_tail, shock_wove, singnal_beam];
function attackEnemy (attaquant) {
    let enmyAttack = [enmyAblt1, enmyAblt2, enmyUltim];
   
   console.log(enmyAttack);
    setTimeout(() => {
        attaquant.health = attaquant.health - enmyAttack[1].damage;
        document.getElementById("ef2").style.display="block";
        


    }, 3000);

    setTimeout(() => {
        document.getElementById("ef2").style.display="none";

    }, 4000);


    console.log("attaquant health : ", attaquant.health);
}

fight(hero,enemie);