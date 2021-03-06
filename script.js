
// model
let personal_projects = [
   {
      title: 'WeChoose YouEat Taco WebApp',
      link: 'https://mvc-restaurant-only-tacos.appspot.com',
      onlineRepo: 'https://github.com/marianelamin/mvc-restaurant-only-tacos',
      techUsed: ['Python', 'AppEngine', 'DataStore'],
      description: 'A simple web application created to illustrate CSSIX students how different parts of technology are merged into one web application.'
   },
   {
      title: 'Desired Pay Calculator',
      link: 'calculo/index.html',
      onlineRepo: 'https://bitbucket.org/marianela_min/calculo/src/master/',
      techUsed: ['HTML', 'CSS', 'JS'],
      description: 'A tool that spanish-speakers can use in order to figure out how many hours they need to work to cover basic expenses.'
   },
   {
      title: 'Bolivar Conversion (Bs BsF BsS)',
      link: 'bolivar/index.html',
      onlineRepo: 'https://bitbucket.org/marianela_min/bolivar/src/master/',
      techUsed: ['javascript', 'html/css', 'bootstrap'],
      description: 'Within the last 20 years, Venezuela has had 3 changes of currency.  Always eliminating certain amount of zeros.  I created this simple web app in order to help those that have a hard time converting their money.'
   },
   {
      title: 'The Puzzle Game',
      link: 'puzzle/index.htm',
      onlineRepo: '',
      techUsed: ['JS'],
      description: 'Following Youtube tutorials, I was able to create my own Puzzle Game.  Visit the site to win the challenge.'
   },
   {
      title: 'Remote Control Car',
      link: '',
      onlineRepo: '',
      techUsed: ['arduino', 'esp32 microcontroller'],
      description: 'My first and own RC Car.  It is currently power by 12V wire power supply.  It was programmed to moves back and forth, left and right.<br><iframe width="200" height="113" src="https://www.youtube.com/embed/Zov9tOEacC4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <br>TODO: Add wireless features, find a suitable battery to power the arduino, motors and esp32.'
   }
];

let coursera_class_projects = [
   {
      title: 'Guessing Game',
      year: '2017',
      link: 'coursera/asg6/index.php?guess=1',
      onlineRepo: '',
      techUsed: ['PHP'],
      description: 'Getting to know PHP global variables. $_GET: understanding where it comes from and the risks of not sanitizing.'
   },
   {
      title: 'Simple MD5 Cracker',
      year: '2017',
      link: 'coursera/asg7/',
      onlineRepo: '',
      techUsed: ['PHP'],
      description: 'Using PHP built-in functions we implemented a hash cracker.'
   },
   {
      title: 'Paper Rock Sicssors',
      year: '2017',
      link: 'coursera/asg8/',
      onlineRepo: '',
      techUsed: ['PHP'],
      description: 'A game using basics of PHP.'
   },
   {
      title: 'Confusion Restaurant',
      year: '2019',
      link: '',
      onlineRepo: 'https://github.com/marianelamin/confusion-angular-coursera/tree/development',
      techUsed: ['angular', 'node', 'mongoDB'],
      description: 'A restaurant that we created in Coursera course online.  Some of the information is stored in a mongo database.  We used node js to serve our single page angular application.'
   }
];
let neiu_class_projects = [   
   {
      title: 'A Comparisson: user\'s response vs text book\'s response',
      class: 'Master\'s Project',
      year: 'Spring 2020',
      link: '',
      onlineRepo: 'https://github.com/marianelamin/vector-modeling-lsa',
      techUsed: ['python', 'scikit-learn', 'NLP'],
      description: 'Research that explored LSA technique and generated 18 different term-vectors matrices using combinations between: counting, zero-one, TF-IDF, whether stopwords are removed or not, selection of 100 or 300 dimensions for SVD technique.'
   },
   {
      title: 'Chicago Crime Tracker Map',
      class: 'Object Oriented Design',
      year: 'Fall 2019',
      link: '',
      onlineRepo: 'https://github.com/JohnCrissman/chicago-crime-tracker-map',
      techUsed: ['Java', 'JavaFx', 'Google Geo API', 'Javascript'],
      description: 'Campus safety is a concern for all who attend universities and colleges. Students should have a right to see and understand the data that shows crimes near their campus locations. We pulled data from the “Crimes - 2001 to present” dataset on the Chicago Data Portal website, which contains all reported crimes from 2001 to present, excluding the most recent week. Our application, Chicago Crime Tracker, filters this data in a way where we can see what crimes have happened within a given area. With the application a user can enter an address and select a distance in miles to get a filtered list of crimes within the distance of the chosen Chicago address.'
   },
   {
      title: 'Student Planner Creator',
      class: 'Artificial Intelligence',
      year: 'Fall 2019',
      link: '',
      onlineRepo: 'https://github.com/JohnCrissman/Student-Plan-Creator',
      techUsed: ['python', 'Backtracking Algorithm'],
      description: 'A program modeling a Constraint Satisfaction Problem (CSP) that intents to provide a student plan for classe, based on the next available semester and the classes already taken by the student.  This uses a Backtracking Algorithm. Runs on console.'
   },
   {
      title: 'Chec Crew',
      class: 'Web App Development',
      year: 'Summer 2019',
      link: 'http://cs.neiu.edu/~db_spr19_mmendozamend/index.html',
      onlineRepo: 'https://github.com/marianelamin/chec-crew-green-fee-tac-app',
      techUsed: ['Angular', 'Google API', 'nodejs', 'MongoDB', 'REST API', 'web services'],
      description: 'A SPA that integrates login authentication with Google APIs, CRUD operations, uses a new javascript framework.  The Backend was created using node Express.'
   },
   {
      title: 'FSharp',
      class: 'Software Engineering',
      year: 'Spring 2019',
      link: '',
      onlineRepo: 'https://github.com/db-mw-software/FSharp/',
      techUsed: ['Angular', 'nodejs', 'MySQL'],
      description: 'A web application intended to recommend concerts to the users, depending on their preferences: genre, artists.  This is a work in progress.'
   },
   {
      title: 'Scholarship Finder',
      class: 'Design of Databases',
      year: 'Spring 2019',
      link: 'http://cs.neiu.edu/~db_spr19_mmendozamend/scholarship-finder/login.php',
      onlineRepo: 'https://github.com/JohnCrissman/scholarship-finder/tree/development',
      techUsed: ['Bootstrap', 'PHP', 'MySQL'],
      description: 'Group Final Project that evaluated DB design and implementation of the CRUD operations with the chosen topic.'
   },
   {
      title: 'CRUD Appetizers',
      class: 'Design of Databases',
      year: 'Spring 2019',
      link: 'http://cs.neiu.edu/~db_spr19_mmendozamend/dbhomework/',
      onlineRepo: 'https://github.com/marianelamin/cs415-crud-appetizers',
      techUsed: ['Bootstrap', 'PHP', 'MySQL'],
      description: 'An assignment to demonstrate understanding of CRUD operations using MySQL'
   },
   {
      title: 'Bomby Car 2',
      class: 'Robotics and AI',
      year: 'Fall 2018',
      link: '',
      onlineRepo: 'https://github.com/marianelamin/bomby-car2',
      techUsed: ['python', 'arduino', 'V-rep'],
      description: 'A python application that connects with the Arduino via sockets and request for distance sensor to modify belief using Bayes Filter Algorithm.'
   }
];


let work_projects = [
   {
      title: 'Monitor Ciudad Dashboard',
      class: "Code For Venezuela (C4V)",
      year: "In progress, 2020",
      link: 'https://datastudio.google.com/s/iqlVxRb2I6c',
      onlineRepo: 'https://gitlab.com/codeforvenezuela/angostura/airflow-jobs/-/blob/master/dags/bq_sql/monitor_ciudad_agua.sql',
      techUsed: ['SQL', 'BigQuery', 'DataStudio', 'GitLab'],
      description: 'Collaborating with the Monitor Ciudad Team in cleaning and structuring data, normalizing and analyzing results to make them available for visualizations via Google Data Studio.'
   },
   {
      title: 'Student Advising and Management System',
      class: "Graduate Assistantship",
      year: "May 2020",
      link: 'https://www.loom.com/share/a7767d1fa0334688bf2f607dc1bb23ab',
      onlineRepo: '',
      techUsed: ['Angular', 'NodeJS', 'MySQL', 'Google APIs'],
      description: 'Designed and developed a web application for the CS Department at NEIU, the purpose is to manage 300+ students and help with the advising process.'
   },
   {
      title: 'Proyecto de Amor',
      class: "",
      year: "Dec 2019",
      link: '', //'https://pda.org.ve/',
      onlineRepo: 'https://bitbucket.org/marianela_min/proyectodeamor/src/master/',
      techUsed: ['JS', 'PHP', 'MySQL', 'Wordpress'],
      description: 'A portal so 700+ catholic members of the organization can meet, read the lastest posts and register for events.'
   },   {
      title: 'NEIU Scholarship Search',
      class: "",
      year: "Sep 2018",
      link: '', //https://cahsi-midwest.org/scholarships',
      onlineRepo: '',
      techUsed: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
      description: 'A prototype to be implemented at NEIU - El Centro campus, so students have easier access to scholarships.'
   },
   {
      title: 'STEM Conference @ NEIU',
      class: "",
      year: "May 2018",
      link: 'https://marianelacrissman.com/demo/demo-hsi-2018', //http://www.hsi-midwest.org',
      onlineRepo: 'https://bitbucket.org/marianela_min/conference_hsi_midwest/src/master/',
      techUsed: ['HTML', 'CSS', 'Bootstrap'],
      description: 'Static page that shows information related to the conference'
   },
   {
      title: 'NEIU Security Group',
      class: "",
      year: "Jan 2018",
      link: '', //https://cahsi-midwest.org/',
      onlineRepo: '',
      techUsed: ['HTML', 'CSS', 'Bootstrap'],
      description: 'Static page that provides readers with what the NEIU Security group does and has achieved.'
   },
   {
      title: 'Chess Animals',
      class: "",
      year: "May 2017",
      link: 'http://www.chessanimals.com',
      onlineRepo: '',
      techUsed: ['HTML', 'CSS', 'Bootstrap'],
      description: 'Business webpage that advertise Chess Classes and provides clients with more inforamtion'
   },
   {
      title: 'Cafe El Tapatio',
      class: "",
      year: "March 2017",
      link: '', //'http://www.cafetapatio.com',
      onlineRepo: 'https://bitbucket.org/marianela_min/cafeeltapatio/src/master/',
      techUsed: ['HTML', 'CSS', 'PHP'],
      description: 'Developed a business website, featuring the story about the business, menues and an embedded contact form.'
   }
];



// creating the templates
const select_repo_icon = (url) => {

   if (url.includes('bitbucket')){
      return `<i class="fab fab fa-bitbucket"></i>`;
   }
   if (url.includes('github')){
      return `<i class="fab fab fa-github"></i>`;
   }
   if (url.includes('gitlab')){
      return `<i class="fab fab fa-gitlab"></i>`;
   }
}

const projectCard = (card) => {
   let html_string;
   let anchor_add = '';
   let externalLink = '';
   if (card.onlineRepo != "") {
      anchor_add = `<a href="${card.onlineRepo}" class="btn btn-black" target="_blank"><span>${select_repo_icon(card.onlineRepo)}</span></a>`;
   }
   if (card.link != "") {
      externalLink = `<h5><a title="follow the link" href="${card.link}" class="card-link " target="_blank">Live <i class="fas fa-external-link-square-alt"></i></a></h5>`;
   }
   // <img class="card-img-top" src="..." alt="Card image cap">
   html_string = `
                           <div class="card-body">
                              <div class="my-card-header">
                                 <h5 class="card-title"> ${card.title} </h5>`
      + externalLink +
      `</div>`
      + ((card.class != undefined && card.year != undefined) ? `<h6>${card.class} (${card.year})</h6>` : ``) +
      `<p class="card-text card-text-description">${card.description}</p>
                              <p class="card-text">Tech used: `
      + card.techUsed.reduce((html, item) => {
         return html + '<span class="tech-used"> ' + item + ' </span>';
      }, ' ') +
      `</p>
                              `+ anchor_add + `                                   
                           </div>
                    `;
   return '<li class="card my-card">' + html_string + '</li>';
};

let result_b1a = personal_projects.reduce((block, card) => {
   //   console.log(card);
   return block + projectCard(card);
}, ' ');
let result_b1b = coursera_class_projects.reduce((block, card) => {
   //   console.log(card);
   return block + projectCard(card);
}, ' ');
let result_b1c = neiu_class_projects.reduce((block, card) => {
   //   console.log(card);
   return block + projectCard(card);
}, ' ');
let result_b2a = work_projects.reduce((block, card) => {
   //   console.log(card);
   return block + projectCard(card);
}, ' ');

document.getElementById('b1-a').innerHTML = result_b1a;
document.getElementById('b1-b').innerHTML = result_b1b;
document.getElementById('b1-c').innerHTML = result_b1c;
document.getElementById('b2-a').innerHTML = result_b2a;
