
var bio = {
    "name": "Jack Murphy",
    "role": "Space Web Developer",
    "contacts": {
        "email": "jdoe@gmail.com",
        "mobile": "555-555-1234",
        "github": "github-jdoe",
        "twitter": "@jdoe",
    },
    "location": "Severna Park, MD",
    "biopic": "images/me2.jpg",
    "welcomeMessage": "Dependable engineer performing a course correction.",
    "skills": [
    'critical thinker',
    'resourceful',
    'problem solver',
    'python',
    'java',
    'php',
    'c',
    'integration & test'
    ],
    "display": function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.location);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedWelcome);
        $("#header").prepend(formattedBioPic);

        // Populate topContacts
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedLocation);

        // Populate footerContacts
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedMobile);

        $("#header").append(HTMLskillsStart);

        var numSkills = bio.skills.length;

        for (var i = 0; i < numSkills; i++) {
            var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }
};

var work = {
    "jobs": [
    {
        "employer": "ACME Engineers",
        "title": "Engineer",
        "location": "Annapolis, MD",
        "dates": {
            "start": "1/1/2015",
            "end": "present"
        },
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh."
    },
    {
        "employer": "McClean Engineers",
        "title": "Engineer 2",
        "location": "Washington, DC",
        "dates": {
            "start": "1/1/2010",
            "end": "12/31/2014"
        },
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh."
    }
    ],
    "display": function() {
        // Build work Section
        if (work.jobs.length > 0) {

            var numJobs = work.jobs.length

            for (var i = 0; i < numJobs; i++) {
                $("#workExperience").append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
                var date = work.jobs[i].dates.start + " - " + work.jobs[i].dates.end;
                var formattedDates = HTMLworkDates.replace("%data%", date);
                console.log(formattedDates);
                var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
                var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
                $(".work-entry:last").append(formattedEmployer + formattedTitle);
                $(".work-entry:last").append(formattedWorkLocation);
                $(".work-entry:last").append(formattedDates);
                $(".work-entry:last").append(formattedDescription);
            }
        }
    }
};

var projects = {
    "projects": [
    {
        "title": "Portfolio Project",
        "dates": {
            "start": "7/14/2015",
            "end": "8/17/2015"
        },
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.",
        "images": [],
        "url": "http://genuine-kavalla.github.io/FEND_Project_01/"
    },
    {
        "title": "ATLAS",
        "dates": {
            "start": "12/1/2013",
            "end": "5/18/2015"
        },
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.",
        "images": [],
        "url": "http://icesat.gsfc.nasa.gov/icesat2/instrument.php"
    },
    {
        "title": "Global Precipitation Measurement",
        "dates": {
            "start": "5/1/2010",
            "end": "12/31/2013"
        },
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.",
        "images": [],
        "url": "http://pmm.nasa.gov/GPM"
    },
    {
        "title": "Lunar Reconnaissance Orbiter",
        "dates": {
            "start": "3/1/2006",
            "end": "4/30/2010"
        },
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.",
        "images": ['images/lro7-apollo_1.jpg'],
        "url": "http://lunar.gsfc.nasa.gov/"
    },
    {
        "title": "New Horizons",
        "dates": {
            "start": "6/1/2002",
            "end": "1/19/2006"
        },
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.",
        "images": [],
        "url": "http://pluto.jhuapl.edu/"
    },
    {
        "title": "Contour",
        "dates": {
            "start": "11/1/2001",
            "end": "6/1/2002"
        },
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.",
        "images": []
//            "url": "http://discovery.nasa.gov/contour.cfml"
}
],
"display": function() {
    for (var p in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[p].title).replace("#", projects.projects[p].url));
        var startDate = projects.projects[p].dates.start;
        var endDate = projects.projects[p].dates.end;
        var totalDate = startDate + " - " + endDate;
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%",totalDate));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[p].description));
        for ( var image in projects.projects[p].images) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[p].images[image]));
        }
    }
}

};

var education = {
    "schools": [
    {
        "name": "University Maryland Continuing Education",
        "location": "College Park, MD",
        "degree": "None",
        "dates": {
            "start": 1996,
            "end": 1996
        },
        "major": ["None"],
        "url": "http://example.com"
    },
    {
        "name": "Embry-Riddle Aeronautical University",
        "location": "Daytona Beach, FL",
        "degree": "BS",
        "dates": {
            "start": 1991,
            "end": 1994
        },
        "major": "Aerospace Engineer",
        "url": "http://www.erau.edu"
    }
    ],
    "onlineCourses":[
    {
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "dates": 2015,
        "url": "http://www.udacity.com"
    }
    ],
    "display": function () {
        var numSchools = education.schools.length;

        for (var i = 0; i < numSchools; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedSchool = HTMLschoolName.replace("%data%",education.schools[i].name).replace("#", education.schools[i].url);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates.start + " - " + education.schools[i].dates.end);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

            $(".education-entry:last").append(formattedSchool + formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedMajor);
        }

        var numOnline = education.onlineCourses.length;

        for (var i = 0; i < numOnline; i++) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineClasses);
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

            $(".education-entry:last").append(formattedTitle + formattedSchool);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedUrl);

        }
    }
};

$("#main").append(internationalizeButton);

function inName(name) {
    console.log(name);
    var nameArray = $("#name").text().split(" ");
    console.log(nameArray);

    var firstName = nameArray[0];
    var lastName = nameArray[1];

    lastName = lastName.toUpperCase();
    firstName = firstName.toLowerCase();
    firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1);

    var finalName = firstName.concat(" ", lastName);
    console.log(finalName);
    return finalName;
}

$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();
