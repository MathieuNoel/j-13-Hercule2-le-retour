// console.log('test 1...2...1...2');
const exo = {
  title() {
    banner__title= document.createElement('h1'),
    banner__title.classList.add('banner__title'),
    banner__title.textContent = 'Vous consultez le profil de Hercule',
    header_banner= document.getElementById('header-banner'),
    header_banner.appendChild(banner__title)
  },
  Hercule: {
    name: 'Hercule',
    job: 'Demis-dieu',
    age: 35,
    department: 75,
    arm: 60.5,
    inRelationship: true,
  },
  Friends: [
    'Jupiter',
    'Junon',
    'Alcmène',
    'Déjanire'
  ],
  work() {
    for(let i = 0; i < 11; i++) {
      base.displayWork(i)
    }
  },
  availability() {
    availability= document.getElementById('availability')
    if(base.getHour < 8 || base.getHour > 20) {
      availability.classList.add('off')
    } else {
      availability.classList.remove('off')
    }
  },
  newPseudo: {
    prenom:'Hercule',    
    NuméroDeDépartement: 75,
  },
  profil() {
    
    let profil= document.getElementById('profil-name');
    profil.textContent= `${exo.newPseudo.prenom} du ${exo.newPseudo.NuméroDeDépartement}`  
  },

  toggler: document.getElementById('menu-toggler'),
  headerBanner: document.getElementById('header-banner'),
  
  menu() { 
    exo.toggler.addEventListener('click', function(event){
      if(event = 'click') {
        exo.headerBanner.classList.add('banner--open')
      }else if(event = 'click') {
        exo.headerBanner.classList.remove('banner--open')
      }
    })
    
  },
  contact: document.getElementById('contact'),
  submit() {
  exo.contact.addEventListener('submit', (event) => {
    
      event.preventDefault()
      alert('Hercule ne souhaite pas être dérangé')
    
  }
  )
  },
  votehercule: document.getElementById('trends-hercule'),
  voteCesar: document.getElementById('trends-cesar'),
  vote() {
    exo.votehercule = `${base.vote.hercule} / 173 * 100 `
    exo.voteCesar = `${base.vote.cesar} / 173 * 100 `
  }
}
exo.title()
base.fillProfil(exo.Hercule)
base.printFriends(exo.Friends)
base.setBestFriend(exo.Friends[0])
exo.work()
exo.availability()
exo.profil()
exo.menu()
exo.submit()


