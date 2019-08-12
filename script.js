function showMore(b,num)
     {
     	showLess(document.getElementById("b1"),1);
     	showLess(document.getElementById("b2"),2);
     	showLess(document.getElementById("b3"),3);
     	showLess(document.getElementById("b4"),4);
		b.setAttribute("class",b.getAttribute("class")+" hov");

     	switch(num){
     	case 1: b.innerHTML = '<p>Projects I created on my free time for fun or learning purposes</p>\
     	                        <a href="bolivar/" target="_blank">Venezuelan Currency Conversion (Bs - BsF - BsS)</a><span> | </span>\
     							<a href="calculo/" target="_blank">Desired Pay Calculator</a><span> | </span>\
     							<a href="rubix/" target="_blank">Rubix Move Visualization</a><span> | </span>\
     							<a href="asg6/" target="_blank">Guessing Game</a><span> | </span>\
     							<a href="asg7" target="_blank">Simple MD5 Cracker</a><span> | </span>\
     							<a href="asg8" target="_blank">Paper Rock Sicssors</a><span> | </span>\
     							<a >RicoRobot (for a youtube class)</a><span> | </span>\
     							<a >in-house RC car</a><span> | </span>\
     							<a href="todolist/" target="_blank">TodoList (Angular)</a>\
     							'; break;
		case 2: b.innerHTML = '<p>These were developed for bussinesses, non-profit organizations or departments of Northeastern Illinois University (NEIU)</p>\
		                        <a href="http://www.cafetapatio.com" target="_blank">Cafe El Tapatio</a><span> | </span>\
     							<a href="http://www.chessanimals.com" target="_blank">Chess Animals</a><span> | </span>\
     							<a href="http://www.hsi-midwest.org" target="_blank">Conference@NEIU May 2018</a><span> | </span>\
     							<a href="https://cahsi-midwest.org/" target="_blank">NEIU Security Group</a><span> | </span>\
     							<a href="https://cahsi-midwest.org/scholarships" target="_blank">NEIU Scholarship Search</a><span> | </span>\
     							<a href="https://pda.org.ve/" target="_blank">Proyecto de Amor</a>\
								'; break;
		case 3: b.innerHTML = '<p>I help students with important topics... a \'lil bit of everything</p>\
		                        <a >Basics of Programming (Java)</a><span> | </span>\
                        		<a >Discrete Mathematics</a><span> | </span>\
		                        <a >Debuging code (.py/.java/.html/.css)</a><span> | </span>\
		                        <a >Object-Oriented Design</a><span> | </span>\
		                        <a >Data Structures</a><span> | </span>\
								<a href="problem-solving">Approaches to Problem Solving</a><span> | </span>\
								<a href="jobseeking/">When looking for a job</a><span> | </span>\
								<a href="learning/">Learning Strategies</a><span> | </span>\
								<a href="tutoring/">Private Tutoring</a>\
								'; break;
		case 4: b.innerHTML = '<a href="https://bitbucket.org/marianela_min/" target="_blank">bitbucket</a><span> | </span>\
								<a href="https://github.com/marianelamin/" target="_blank">gitHub</a><br\>\
                        		<a href="https://www.linkedin.com/in/marianela3101" target="_blank">LinkedIn</a>';
	   }
     }
     function showLess(b,num){
		b.setAttribute("class",b.getAttribute("class").replace(" hov",""));

     	switch(num){
     	case 1: b.innerHTML = '<span>Personal Projects</span>'; break;
		case 2: b.innerHTML = '<span>Work Projects</span>'; break;
		case 3: b.innerHTML = '<span>CS Tutor & Education</span>'; break;
		case 4: b.innerHTML = '<span>Repo & LinkedIn</span></div>';
	   }
     }


// model
     let personal_projects = [
         {
            title: 'Bolivar Conversion (Bs BsF BsS)',
            link:'bolivar/index.html',
            onlineRepo: 'https://bitbucket.org/marianela_min/bolivar/src/master/',
            techUsed: ['javascript','html/css','bootstrap'],
            description:'Within the last 20 years, Venezuela has had 3 changes of currency.  Always eliminating certain amount of zeros.  I created this simple web app in order to help those that have a hard time converting their money.'
         },
         {
            title: 'Desired Pay Calculator',
            link:'calculo/index.html',
            onlineRepo: 'https://bitbucket.org/marianela_min/calculo/src/master/',
            techUsed: ['javascript','html/css','bootstrap'],
            description:''
         },
         {
            title: '',
            link:'',
            onlineRepo: '',
            techUsed: ['javascript','html/css','bootstrap'],
            description:''
         },
         {
            title: 'RicoRobot (for a youtube class)',
            link:'',
            onlineRepo: '',
            techUsed: ['javascript','html','css','bootstrap'],
            description:''
         },
         {
            title:'Robot Car',
            link:'',
            onlineRepo: '',
            techUsed: ['arduino', 'esp32 microcontroller'],
            description:'This is going to be my first and own RC car.  I started by buying the physical parts (hardware) and puting them together.  It currently has a 12V power supply.  So far it moves back and forth, left and right.  TODO: Add wireless features, find a suitable battery to power the arduino, motors and esp32.'
         },
         {
            title: 'TodoList',
            link:'todolist/',
            onlineRepo: '',
            techUsed: ['Angular','API'],
            description:'I didnot come up with the app.  This was a youtube video tutorial that I followed. My first get-to-know angular.'
         }
     ];

     let coursera_class_projects = [
         {
            title: 'Guessing Game',
            year: '2017',
            link:'coursera/asg6/',
            onlineRepo: '',
            techUsed: ['php'],
            description:'This was the first using a $_GET variable and understanding where it comes from and the risks of not sanitizing.'
         },
         {
            title: 'Simple MD5 Cracker',
            year: '2017',
            link:'coursera/asg7/',
            onlineRepo: '',
            techUsed: ['php'],
            description:'We learned some built-in functions that php has.'
         },
         {
            title: 'Paper Rock Sicssors',
            year: '2017',
            link:'',
            onlineRepo: '',
            techUsed: ['php'],
            description:'We put into practise our knowledge on PHP.'
         },
         {
            title: 'Confusion Restaurant',
            year: '2019',
            link:'',
            onlineRepo: '',
            techUsed: ['angular','node','mongoDB'],
            description:'A restaurant that we created in Coursera course online.  Some of the information is stored in a mongo database.  We used node js to serve our single page angular application.'
         }
     ];
     let neiu_class_projects = [
         {
            title: 'Bomby2 - AI class',
            year: '2017',
            link:'',
            onlineRepo: '',
            techUsed: ['python','arduino'],
            description:''
         },
         {
            title: 'Scholarship Finder',
            year: '2019',
            link:'',
            onlineRepo: '',
            techUsed: [],
            description:''
         },
         {
            title: 'FSharp',
            year: '2019',
            link:'',
            onlineRepo: '',
            techUsed: ['Angular','nodejs','MySQL'],
            description:'A web application intended to recommend concerts to the users, depending on their preferences: genre, artists.  This is a work in progress.'
         }
    ];


     let work_projects = [
     {
        title: '',
        link:'',
        onlineRepo: '',
        techUsed: [],
        description:''
     },
     {
        title: '',
        link:'',
        onlineRepo: '',
        techUsed: [],
        description:''
     },
     {
        title: '',
        link:'',
        onlineRepo: '',
        techUsed: [],
        description:''
     },
     {
        title: '',
        link:'',
        onlineRepo: '',
        techUsed: [],
        description:''
     },
     {
        title: '',
        link:'',
        onlineRepo: '',
        techUsed: [],
        description:''
     },
     ];



// creating the templates

     const projectCard = (card) => {
        let html_string;
        let anchor_add;

        if(card.onlineRepo == ""){
           anchor_add = '';
        }
        else{
           anchor_add = `<a href="${card.onlineRepo}" class="btn btn-black" target="_blank"><span><i class="fab fab fa-${ (card.onlineRepo.includes('bitbucket')) ? 'bitbucket':'github'}"></i></span></a>`;
        }
        // <img class="card-img-top" src="..." alt="Card image cap">
        html_string = `
                              <div class="card-body">
                                <h5 class="card-title"> ${card.title} </h5>
                                <p class="card-text">${card.description}</p>
                                <p class="card-text"><a href="${card.link}" class="card-link " target="_blank">view page</a></p>
                                <p class="card-text">Tech used: `+
                                    card.techUsed.reduce((html,item)=>{
                                    return html+ '<span class="tech-used"> '+ item +' </span>';},' ')+`
                                </p>
                                `+anchor_add+`                                   
                              </div>
                    `;
        return '<li class="card my-card">'+html_string+'</li>';
     };

    let result_b1a = personal_projects.reduce((block,card)=>{
        console.log(card);
        return block + projectCard(card);
    },' ');
    let result_b1b = coursera_class_projects.reduce((block,card)=>{
        console.log(card);
        return block + projectCard(card);
    },' ');
    let result_b1c = neiu_class_projects.reduce((block,card)=>{
        console.log(card);
        return block + projectCard(card);
    },' ');
    let result_b2a = work_projects.reduce((block,card)=>{
        console.log(card);
        return block + projectCard(card);
    },' ');
    
    document.getElementById('b1-a').innerHTML = result_b1a;
    document.getElementById('b1-b').innerHTML = result_b1b;
    document.getElementById('b1-c').innerHTML = result_b1c;
    document.getElementById('b2-a').innerHTML = result_b2a+document.getElementById('b2-a').innerHTML;
