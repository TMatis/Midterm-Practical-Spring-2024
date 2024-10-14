const Dogs = [
    {
        name: "Domino",
        breed: "Mix",
        age: 8
    },
    {
        name: "Mac",
        breed: "Pit Bull",
        age: 4
    },
    {
        name: "Cheese",
        breed: "poodle",
        age: .5
    }];

    const findDog = () => {
        let inquiredDog = prompt("Which dog are you looking for?");
      
        for (let i = 0; i < Dogs.length; i++) {
          if (Dogs[i].name === inquiredDog) {
            return Dogs[i];
          }
        }
      
        alert(`Dog named "${inquiredDog}" not found.`);
      };

    const AddDog = () => {
        let name = prompt("Dog's Name: ");
        let breed = prompt("Dog's Breed: ");
        let age = prompt("Dog's age: ");
        Dogs.push({
            name: name,
            breed: breed,
            age: parseFloat(age),
        });
        listDogs();
        console.log(Dogs);
    }

    const listDogs = () => {
        let DogsListed = document.querySelector(".DogsListed");
        
        let Listed_Dogs = `<ol>`;
        Dogs.forEach(name => {
            Listed_Dogs += `<li>${name.name}</li>`;
        });
        Listed_Dogs += `</ol>`;

        DogsListed.innerHTML = Listed_Dogs;

    }

    const readDogs = () => {
        let inquiredDog = prompt("Which Dog: ")

        let foundDog = Dogs.find(dog => dog.name === inquiredDog); // Find dog by name
        console.log(foundDog);

        let DogInfo = document.querySelector(".DogInfo")
        if (foundDog) {
            DogInfo.innerHTML = `Name: ${foundDog.name} Breed: ${foundDog.breed} Age: ${foundDog.age} years old`;
        }
        return foundDog

    };

    const updateDog = () => {
        let inquiredDog = prompt("Which dog do you want to update: ");
      
        let foundDog = Dogs.find(dog => dog.name === inquiredDog);
      
        if (foundDog) {
          let newBreed = prompt(`Enter the new breed for ${foundDog.name}:`);
          let newAge = prompt(`Enter the new age for ${foundDog.name}:`);
      
          foundDog.breed = newBreed;
          foundDog.age = parseFloat(newAge);

          let DogInfo = document.querySelector(".DogInfo")
          if (foundDog) {
              DogInfo.innerHTML = `Name: ${foundDog.name} Breed: ${foundDog.breed} Age: ${foundDog.age} years old`;
          }
          listDogs();
        }
      };

    const deleteDog = () => {

        let inquiredDog = prompt("Which dog do you want to delete: ");

        Dogs.forEach((dog, index) => {
          if (dog.name === inquiredDog) {
            Dogs.splice(index, 1);
            alert(`${dog.name} has been deleted.`);
            listDogs();
          }
        });

    }


    const CRUD_Dogs = () => {
    
        let CRUD_action = document.querySelector("#CRUD_Dogs_ID").value;
        let DoginQuestion = "";

        if (CRUD_action == "C") {
            console.log("C");
            AddDog();
        }
        else if (CRUD_action == "R") {
            readDogs();
        }
        else if (CRUD_action == "U") {
            updateDog();
        }
        else if (CRUD_action == "D") {
            deleteDog();
        }
        else {
            alert(CRUD_action)
            alert("Not valid entry");
            console.log("Invalid CRUD");
        }
    }
    
    listDogs();