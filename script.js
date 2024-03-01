class Password_generator {
    constructor(len) {
        this.password = ""
        this.len = len;
        this.alphanumeric = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "*", "/", "`", ",", ".", ":", ";", "'"]
        this.num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        this.alphabet1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        this.alphabet2 =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
    strong_Password() {
        this.password = ""
        for (let i = 0; i < this.len;) {
            let ind = 0;
            ind = Math.floor(Math.random() * this.alphanumeric.length);
            if (this.password.length < this.len) {
                this.password += this.alphanumeric[ind]
                i += 1;
            }
            else {
                break
            }
            ind = Math.floor(Math.random() * this.alphabet2.length);
            if (this.password.length < this.len) {
                this.password += this.alphabet2[ind]
                i += 1;
            }
            else {
                break
            }
            ind = Math.floor(Math.random() * this.num.length);
            if (this.password.length < this.len) {
                this.password += this.num[ind]
                i += 1;
            }
            else {
                break
            }

            ind = Math.floor(Math.random() * this.alphabet1.length);
            if (this.password.length < this.len) {
                console.log(this.password.length)
                this.password += this.alphabet1[ind]
                i += 1;
            }
            else {
                break
            }

        }
        return this.password
    }

    weak_Password() {
        this.password = ""
        for (let i = 0; i < this.len;) {
            let ind = 0;
            ind = Math.floor(Math.random() * this.alphabet1.length);
            if (this.password.length <= this.len) {
                this.password += this.alphabet1[ind]
                i += 1;
            }

        }
        return this.password
    }
}


// console.log("Strong one == ",p.strong_Password())
// console.log("Weak one == ",p.weak_Password())

var show = document.getElementById("show");
var generate = document.getElementById("generate");
var strongRadio = document.getElementById("strongRadio");
var funnyRadio = document.getElementById("funnyRadio");
var weakRadio = document.getElementById("weakRadio");
// var funnypass = ["Jaideep","Jaideep","Jaideep","Jaideep","Jaideep","Jaideep","Jaideep","Preetam"]
var funny_passwords = [
    "BananaPeel123",
    "PineapplePizza!",
    "UnicornRainbow42",
    "Password1234!",
    "CoffeeAddict#",
    "FluffyKitten99",
    "SillyGoose$",
    "JellyBeanParty",
    "CupcakeNinja",
    "ToothpasteMonster",
    "ChocoLover2024",
    "SneakySquirrel",
    "BubbleWrapFun",
    "PizzaIsLife!",
    "DancingPotato",
    "NoodleSoup#",
    "MoonwalkGalaxy",
    "SunnySideUpEgg",
    "PenguinSlide123",
    "RainbowUnicorn$",
    "SpaghettiTornado",
    "GiraffeNeck101",
    "MarshmallowDream",
    "SneezingPanda",
    "BaconPancakes!",
    "FluffyCloud9",
    "ZombiePinecone",
    "GigglingOctopus",
    "WaffleWonderland",
    "SillyStringParty",
    "DinosaurDance#",
    "ChocolateFroggy",
    "BubblegumBliss",
    "SquishyTomato!",
    "NinjaTurtlePower",
    "PirateParrot123",
    "JellyfishJam$",
    "SillySockMonkey",
    "RaindropMelody",
    "PancakeGalaxy42",
    "TickleMonster!",
    "BananaSplit123",
    "GummyBearHug$",
    "SneakyShadowCat",
    "MarshmallowJazz",
    "BubbleBathTime",
    "PizzaPlanet2024",
    "FluffyFeather#",
    "MoonlightWhisper",
    "SillyStringTheory",
    "DancingDoughnut",
    "NoodleNinja123",
    "GiraffeGiggles!",
    "SunnySideSmile$",
    "PenguinPajamas42",
    "RainbowRocketship",
    "SpaghettiSafari#",
    "ZigzagZebra123",
    "BubbleWrapBallet",
    "SneezingSunflower",
    "BaconBlanket!",
    "FluffyFairyTale",
    "GigglingGiraffe$",
    "WaffleWizard101",
    "SillySausageParty",
    "DinosaurDisco#",
    "ChocolateChaos123",
    "BubblegumBreeze",
    "SquishySloth!",
    "NinjaNoodleSoup",
    "PiratePenguin123",
    "JellyfishJamboree$",
    "SillySockSafari",
    "RaindropRhapsody",
    "PancakePirate42",
    "TickleTornado!",
    "BananaBoogie123",
    "GummyBearGalaxy",
    "SneakySnowflake$",
    "MarshmallowMystery",
    "BubbleBathBliss",
    "PizzaPartyPlanet",
    "FluffyFroggy#",
    "MoonlightMagic123",
    "SillyStringSerenade",
    "DancingDonutDelight",
    "NoodleNebula!",
    "GiraffeGiggles123",
    "SunnySideSmile$",
    "PenguinPajamaParty",
    "RainbowRocketRide",
    "SpaghettiSpacewalk",
    "ZigzagZebraZest",
    "BubbleWrapBonanza",
    "SneezingSunset!",
    "BaconBlanketBounce",
    "FluffyFairyFantasy",
    "GigglingGalactic$",
    "WaffleWonderWorld",
    "SillySausageSupreme"
]

var pp=Math.floor(Math.random()*100);
generate.addEventListener("click", function () {
    let l = document.getElementById("pass-len")
    let p = new Password_generator(l.value);
    if (strongRadio.checked) {

        show.value = p.strong_Password()
    }
    else if(weakRadio.checked) {
        show.value = p.weak_Password()
    }
    else{
        show.value=funny_passwords[pp%funny_passwords.length];
        pp+=1;
    }
   


})