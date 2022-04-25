// console.log('test 1...2...1...2'); Étape 1 - Exécuter quelque chose
// Bonus Étape 11 - Objet avancé
const exo = {
  init() {
    exo.title();
    base.fillProfil(exo.Hercule);//Étape 2 - Objet, Place au test
    base.printFriends(exo.Friends);//Étape 3 - Tableau, Et un deuxième test
    base.setBestFriend(exo.Friends[0]);// Étape 3 - Tableau, Et un deuxième test
    exo.work();
    exo.availability();
    exo.profil();//Étape 7 - Fonction, Place à l'execution
    exo.menu();
    exo.submit();
    exo.vote()
    exo.displayActivities()
  },
  //Étape 4 - DOM
  title() {
    let banner__title= document.createElement('h1');
    banner__title.classList.add('banner__title');
    banner__title.textContent = 'Vous consultez le profil de Hercule';
    let header_banner= document.getElementById('header-banner');
    header_banner.appendChild(banner__title);
  },
  // Étape 2 - Objet
  Hercule: {
    name: 'Hercule',
    job: 'Demi-dieu',
    age: 35,
    department: 75,
    arm: 60.5,
    inRelationship: true,
  },
  // Étape 3 - Tableau
  Friends: [
    'Jupiter',
    'Junon',
    'Alcmène',
    'Déjanire',
  ],
  //Étape 5 - Boucle
  work() {
    for(let i = 0; i < 12; i++) {
      base.displayWork(i);
    }
  },
  //Étape 6 - Condition
  availability() {
    const availability= document.getElementById('availability');
    if(base.getHour() > 8 && base.getHour() < 20) {
      availability.textContent= 'disponible';
    } else {
      availability.classList.add('off');
    }
  },
  //Étape 7 - Fonction
  profileValue(name, department) {
    return `${name} du ${department}`
  },
  profil() {    
    document.getElementById('profil-name').textContent= exo.profileValue(exo.Hercule.name, exo.Hercule.department); 
  },

  
  
  //Étape 8 - Event
  menu() { 
    const toggler= document.getElementById('menu-toggler');
    toggler.addEventListener('click', function(){
      const headerBanner= document.getElementById('header-banner');
      if(headerBanner.classList.contains('banner--open')) {
        headerBanner.classList.remove('banner--open');
      }else {
        headerBanner.classList.add('banner--open');
      }
    });
    
  },
  //Étape 9 - Event bis
  submit() {
    let contact= document.getElementById('contact');
    contact.addEventListener('submit', (event) => {  
      event.preventDefault();
      alert('Hercule ne souhaite pas être dérangé');  
      }
    )
  },
  //Bonus Étape 10 - Algo
  vote() {  
    const voteHercule= document.querySelector('#trends-hercule>.people__popularity');
    const voteCesar= document.querySelector('#trends-cesar>.people__popularity');  
    let herculePopularity = Math.round(base.vote.hercule/(base.vote.hercule+base.vote.cesar)*100);
    let cesarPopularity = Math.round(base.vote.cesar/(base.vote.hercule +base.vote.cesar)*100);
    voteHercule.textContent = `${herculePopularity}%`;
    voteCesar.textContent = `${cesarPopularity}%`;
    document.querySelector('#trends-hercule > .people__bar').style.width = `${herculePopularity}%`;
    document.querySelector('#trends-cesar > .people__bar').style.width = `${cesarPopularity}%`;
  },
  // (Bonus) Etape 12
  displayActivities: function(){
    document.getElementById('activities').classList.remove('hidden');
    const activities = document.querySelector('#activities .tasks');
    for(let i=0;i<base.activities.length;i++){
      if(base.activities[i].author === 'Hercule' && base.activities[i].finished === true){
        const activityList = document.createElement('li');
        activityList.textContent = `${base.activities[i].title}`;
        activities.appendChild(activityList);
      }
    }
  },
}


exo.init()