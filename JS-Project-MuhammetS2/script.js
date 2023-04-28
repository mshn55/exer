const myArr = [
    new Person("Sümeyra",32,"black","./img/00-PowerCoders_62.jpg","Luzern"),
    new Person("Susanne",21,"black","./img/00-PowerCoders_02.jpg","Bern"),
    {
      name: "Anna",
      age: 40,
      eyeColor: "blue",
      img: "./img.anna.jpg",
      city: "Luzern"
    },
    {
      name: "Melek",
      age: 18,
      eyeColor: "blue",
      img: "./img/melek.jpg",
      city: "Bern"
    },
    {
      name: "Sahin",
      age: 45,
      eyeColor: "black",
      img: "./sahin.jpg",
      city: "blue"
    },
    {
      name: "Kingsley",
      age: 24,
      eyeColor: "black",
      img: "./img/kingsley.jpg",
      city: "Genf"
    },
    {
      name: "Hüseyin",
      age: 89,
      eyeColor: "green",
      img: "./img/huseyin.jpg",
      city: "Lugano"
    },
    {
      name: "Harun",
      age: 17,
      eyeColor: "blue",
      img: "./img/harun.jpg",
      city: "Basel"
    }
  ]
  
  function Person(name,age,eyeColor,img,city){
    this.name = name;
    this.age = age;
    this.eyeColor = eyeColor;
    this.img = img;
    this.city = city;
  }
  
  myArr.forEach(person => {
    console.log(person.name);
    console.log(person.age);
    if (person.name === "Hüseyin") {
      person.age = 29;
      console.log(person.age);
    }
  });
  
  handleClick(myArr);
  
  const luzerner = myArr.filter((person) => person.city === "Luzern");
  const berner = myArr.filter((person) => person.city === "Bern");
  const ageOver30 = myArr.filter((person) => person.age > 30);
  const eyeColorBlue = myArr.filter((person) => person.eyeColor === "blue");
  
  //add Event Listeners for click
  const filterButtons = document.querySelectorAll("button");
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      switch (button.getAttribute("id")) {
        case "btn-Luzern":
          handleClick(luzerner);
          break;
        case "btn-Berner":
          handleClick(berner);
          break;
        case "btn-age-over-30":
          handleClick(ageOver30);
          break;
        case "btn-eye-color-blue":
          handleClick(eyeColorBlue);
          break;
        default:
          handleClick(myArr);
      }
    });
  });
  
  //add Event Listeners for mouseover on img
  const images = document.querySelectorAll("img");
  images.forEach(image => {
    image.addEventListener("mouseover", () => {
      image.classList.add("imgEffect");
    });
    image.addEventListener("mouseout", () => {
      image.classList.remove("imgEffect");
    });
  });
  
  addPerson("Linus", 32, "blue", "", "St. Gallen");
  console.log(myArr);
  
  function addPerson(name, age, eyeColor, img, city) {
    let newObj = new Person(name, age, eyeColor, img, city);
    myArr.push(newObj);
  }
  
  let tiger = {
    claws: true,
    color: "black and yellow",
    feet: 4,
    type: "mammal",
    foodPreference: "meat",
    giveSound: () => { console.log("ROOOAAAAR"); }
  }
  
  let cat = {
    claws: true,
    color: "various",
    feet: 4,
    type: "mammal",
    foodPreference: "meat",
    giveSound: () => { console.log("miau"); }
  }
  
  let duck = new Animal(false,"various",2,"bird","fish","quack");
  
  let fly = {
    claws: false,
    color: "black",
    feet: 6,
    type: "insect",
    foodPreference: "unknown",
    giveSound: () => { console.log("bzzzzz"); }
  }
  
  let spider = new Animal("spider", false, "black", 8, "arachnid", "flies", "tap tap tap");
  console.log(spider);
  console.log(spider.giveSound());
  
  //object constructor
  function Animal(name, claws, color, feet, type, foodPreference, sound) {
    this.name = name;
    this.claws = claws;
    this.color = color;
    this.feet = feet;
    this.type = type;
    this.foodPreference = foodPreference;
    this.giveSound = () => {
      console.log(sound);
    };
    this.whatIsMyName = () => {
      console.log(this.name)
    }
  }
  
  function handleClick(arr) {
    document.getElementById(`content`).innerHTML = "";
    arr.forEach((person) => {
      document.getElementById(`content`).innerHTML += `
             <div>
               <img src="${person.img}" alt="">
               <ul class="information">
                <li>Name:${person.name}</li>
                <li>Age:${person.age}</li>
                <li>Eye Color: ${person.eyeColor}</li>
                <li>City: ${person.city}</li>
              </ul> 
            </div>`;
    });
  }