const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { randomInt } = require('crypto');
const { Db } = require('mongodb');

const app = express();
//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://newuser1:maxwell%40145@cluster0.a0agupq.mongodb.net/soulSurveyor');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

//Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public' + '/index.html'))
})

app.get("/appointment", (req, res) => {
    res.sendFile(path.join(__dirname, '/public' + '/appointment.html'));
})

app.get("/addiction", (req, res) => {
    res.sendFile(path.join(__dirname, '/public' + '/addiction.html'));
})

app.get("/team", (req, res) => {
    res.sendFile(path.join(__dirname, '/public' + '/team.html'));
})

app.get("/price", (req, res) => {
    res.sendFile(path.join(__dirname, '/public' + '/price.html'));
})

app.get("/workpressure", (req, res) => {
    res.sendFile(path.join(__dirname, '/public' + '/workpressure.html'));
})

app.get("/events", (req, res) => {
    res.sendFile(path.join(__dirname, '/public' + '/events.html'));
})

app.get("/overthinking", (req, res) => {
    res.sendFile(path.join(__dirname, '/public' + '/overthinking.html'));
})

app.get("/soulsurvey", (req, res) => {
    res.sendFile(path.join(__dirname, '/public' + '/soulsurvey.html'));
})

app.get("/meditation", (req, res) => {
    res.sendFile(path.join(__dirname, '/public' + '/meditation.html'));
})

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, '/public' + '/contact.html'));
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, '/public' + '/about.html'));
})

app.get("/testimonial", (req, res) => {
    res.sendFile(path.join(__dirname, '/public' + '/testimonial.html'));
})

app.get("/successfull", (req, res) => {
    res.sendFile(path.join(__dirname, '/public' + '/submitted.html'));

})

let numberToDisplay = 0;


app.get("/depression", (req, res) => {
    res.sendFile(path.join(__dirname, '/public' + '/depression.html'));
})

app.get("/depressionLevel", (req, res) => {
    res.json({ value: numberToDisplay, })
})

app.get("/ageFilter", (req, res) => {
    res.sendFile(path.join(__dirname, '/public' + '/ageFilter.html'));

})

app.get('/admin', async (req, res) => {
    // Fetch data from your database using Mongoose queries
    const users = await Survey.find(); // Example: Get all users
    const overthinkers = await Survey.find({ reason: "Overthinking" });
    const sleepDeprived = await Survey.find({ reason: "Lack Of Sleep" });
    const anxious = await Survey.find({ reason: "Anxiety" });
    const phobic = await Survey.find({ reason: "Phobia" });
    console.log(users)
    const numberOfSurveys = users.length;

    let htmlString = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <title>Soul Surveyor - Depression Detection</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="Free HTML Templates" name="keywords">
        <meta content="Free HTML Templates" name="description">
    
        <!-- Favicon -->
        <link href="/img/1661448723night-time-meditation.jpg" rel="icon">
    
        <!-- Google Web Fonts -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap"
            rel="stylesheet">
    
        <!-- Icon Font Stylesheet -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">
    
        <!-- Libraries Stylesheet -->
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
        <link href="lib/animate/animate.min.css" rel="stylesheet">
        <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />
        <link href="lib/twentytwenty/twentytwenty.css" rel="stylesheet" />
    
        <!-- Customized Bootstrap Stylesheet -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
    
        <!-- Template Stylesheet -->
        <link href="css/style.css" rel="stylesheet">
    </head>
    
    <body>
        <!-- Spinner Start -->
        <div id="spinner"
            class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-grow text-primary m-1" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-dark m-1" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-secondary m-1" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <!-- Spinner End -->
    
    
        <!-- Topbar Start -->
        <div class="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
            <div class="row gx-0">
                <div class="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                    <div class="d-inline-flex align-items-center">
                        <small class="py-2"><i class="far fa-clock text-primary me-2"></i>Opening Hours: 24/7</small>
                    </div>
                </div>
                <div class="col-md-6 text-center text-lg-end">
                    <div class="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                        <div class="me-3 pe-3 border-end py-2">
                            <p class="m-0"><i class="fa fa-envelope-open me-2"></i>soulsurveyor@gmail.com</p>
                        </div>
                        <div class="py-2">
                            <p class="m-0"><i class="fa fa-phone-alt me-2"></i>+91 1234567890</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Topbar End -->
    
    
        <!-- Navbar Start -->
        <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
            <a href="index.html" class="navbar-brand p-0">
                <h2 class="m-0 text-primary"><i class="fa fa-brain me-2"></i>Soul Surveyor</h2>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a href="index.html" class="nav-item nav-link active">Home</a>
                    <a href="about.html" class="nav-item nav-link">About Us</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Events</a>
                        <div class="dropdown-menu m-0">
                            <a href="" class="dropdown-item">Meditation</a>
                            <a href="" class="dropdown-item">Routine</a>
                            <a href="" class="dropdown-item">OverThinking</a>
    
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div class="dropdown-menu m-0">
                            <a href="appointment.html" class="dropdown-item">Appointment</a>
                            <a href="team.html" class="dropdown-item">Our Doctor Team</a>
                            <a href="price.html" class="dropdown-item">Pricing Plan</a>
                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                        </div>
                    </div>
                    <a href="contact.html" class="nav-item nav-link">Contact Us</a>
                </div>
                <button type="button" class="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i
                        class="fa fa-search"></i></button>
                <a href="register.html" class="btn btn-primary py-2 px-4 ms-3">Register</a>
            </div>
        </nav>
        <!-- Navbar End -->
    
    
        <!-- Full Screen Search Start -->
        <div class="modal fade" id="searchModal" tabindex="-1">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content" style="background: rgba(9, 30, 62, .7);">
                    <div class="modal-header border-0">
                        <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex align-items-center justify-content-center">
                        <div class="input-group" style="max-width: 600px;">
                            <input type="text" class="form-control bg-transparent border-primary p-3"
                                placeholder="Type search keyword">
                            <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Full Screen Search End -->
    
        <!-- Hero Start -->
        <div class="container-fluid bg-primary py-5 hero-header mb-5">
            <div class="row py-3">
                <div class="col-12 text-center">
                    <h2 class="display-3 text-white animated zoomIn">Admin</h2>
                    <a href="" class="h4 text-white">Home</a>
                    <i class="far fa-circle text-white px-2"></i>
                    <a href="" class="h4 text-white">Admin</a>
                </div>
            </div>
        </div>
        <!-- Hero End -->
        <div class="d-flex flex-column align-items-center">
        <h1>Past Clients</h1>
        <div class="">
        <table class="table">
        <thead>
    <tr>
      <th class="col">Name</th>
      <th class="col">Email</th>
      <th class="col">Depression Level</th>
      <th class="col">Key Reason</th>
    </tr>
  </thead><tbody>
  `;

    users.forEach(user => {
        htmlString += `<tr>
        <td class="">${user.clientName}</td>
        <td class="">${user.clientEmail}</td> 
        <td class="">${user.depressionLevel}</td>
        <td class="">${user.reason}</td>
        </tr>`;
    });

    htmlString += `
    </tbody></table>
    <h3>Number of Surveys: ${numberOfSurveys}</h3>
    <h3>Number of Overthinkers: ${overthinkers.length}</h3>
    <h3>Number of Sleep Deprived People: ${sleepDeprived.length}</h3>
    <h3>Number of Anxious People: ${anxious.length}</h3>
    <h3>Number of Phobic People: ${phobic.length}</h3>
    </div>
        <!-- Newsletter Start -->
        <div class="container-fluid position-relative pt-5 wow fadeInUp" data-wow-delay="0.1s" style="z-index: 1;">
            <div class="container">
                <div class="bg-primary p-5">
                    <form class="mx-auto" style="max-width: 600px;">
                        <div class="input-group">
                            <input type="text" class="form-control border-white p-3" placeholder="Your Email">
                            <button class="btn btn-dark px-4"><a href="register.html">Register Here</a></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Newsletter End -->
    
        <!-- Footer Start -->
        <div class="container-fluid bg-dark text-light py-5 wow fadeInUp" data-wow-delay="0.3s" style="margin-top: -75px;">
            <div class="container pt-5">
                <div class="row g-5 pt-4">
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4">Quick Links</h3>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-light mb-2" href="index.html"><i
                                    class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                            <a class="text-light mb-2" href="about.html"><i
                                    class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                            <a class="text-light mb-2" href="events.html"><i
                                    class="bi bi-arrow-right text-primary me-2"></i>Our Events</a>
    
                            <a class="text-light" href="contact.html"><i
                                    class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4">Popular Links</h3>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-light mb-2" href="appointment.html"><i
                                    class="bi bi-arrow-right text-primary me-2"></i>Appointment</a>
                            <a class="text-light mb-2" href="testimonial.html"><i
                                    class="bi bi-arrow-right text-primary me-2"></i>Testimonial</a>
                            <a class="text-light mb-2" href="team.html"><i
                                    class="bi bi-arrow-right text-primary me-2"></i>Team</a>
    
                            <a class="text-light" href="price.html"><i
                                    class="bi bi-arrow-right text-primary me-2"></i>Pricing</a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4">Get In Touch</h3>
                        <p class="mb-2"><i class="bi bi-geo-alt text-primary me-2"></i>Shyamnarayan Marg,Thakur
                            Village,Kandivali(E),Mumbai-400101</p>
                        <p class="mb-2"><i class="bi bi-envelope-open text-primary me-2"></i>soulsurveyor@gmail.com</p>
                        <p class="mb-0"><i class="bi bi-telephone text-primary me-2"></i>+91 1234567890</p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4">Follow Us</h3>
                        <div class="d-flex">
                            <a class="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i
                                    class="fab fa-twitter fw-normal"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i
                                    class="fab fa-facebook-f fw-normal"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i
                                    class="fab fa-linkedin-in fw-normal"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded" href="#"><i
                                    class="fab fa-instagram fw-normal"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid text-light py-4" style="background: #051225;">
            <div class="container">
                <div class="row g-0">
                    <div class="col-md-6 text-center text-md-start">
                        <p class="mb-md-0">&copy; <a class="text-white border-bottom" href="#">Soul Surveyor</a>. All Rights
                            Reserved.</p>
                    </div>
    
                </div>
            </div>
        </div>
        <!-- Footer End -->
    
    
        <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i class="bi bi-arrow-up"></i></a>
    
    
        <!-- JavaScript Libraries -->
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="lib/wow/wow.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="lib/tempusdominus/js/moment.min.js"></script>
        <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
        <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>
        <script src="lib/twentytwenty/jquery.event.move.js"></script>
        <script src="lib/twentytwenty/jquery.twentytwenty.js"></script>
    
        <!-- Template Javascript -->
        <script>
            document.getElementById('clientAge').addEventListener('change', async () => {
                const response = await fetch('/submit-age', {
                    method: 'POST',
                    body: new URLSearchParams({ age: document.getElementById('clientAge').value })
                });
                // No further action needed, server response will handle redirect (implicit)
            });
        </script>
        <script src="js/maincss.js"></script>
    
    </body>
    
    </html>
    `;

    res.setHeader('Content-Type', 'text/html'); // Set appropriate content type
    res.send(htmlString);
});

const appointmentSchema = new mongoose.Schema({
    appointmentIssue: {
        type: String,
        required: true
    },
    appointmentDoctor: {
        type: String,
        required: true
    },
    appointmentName: {
        type: String,
        required: true
    },
    appointmentEmail: {
        type: String,
        required: true
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    appointmentTime: {
        type: String,
        required: true
    },
});

const eventSchema = new mongoose.Schema({
    depressionCategory: {
        type: String,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    eventClientName: {
        type: String,
        required: true
    },
    eventClientEmail: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    eventTime: {
        type: String,
        required: true
    },
});

const contactSchema = new mongoose.Schema({
    contactName: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    contactSubject: {
        type: String,
        required: true
    },
    contactMessage: {
        type: String
    }
});

const surveySchema = new mongoose.Schema({
    clientEmail: {
        type: String,
    },
    clientName: {
        type: String,
    },
    depressionLevel: {
        type: Number,
    },
    reason: {
        type: String,
    }
})


const Appointment = mongoose.model("Appointment", appointmentSchema);
const Event = mongoose.model("Event", eventSchema);
const Contact = mongoose.model("Contact", contactSchema);
const Survey = mongoose.model("Survey", surveySchema);

app.post('/appointment', async (req, res) => {
    const appointeeDetails = new Appointment(req.body)
    // console.log(appointeeDetails)
    await appointeeDetails.save().then(() => {
        console.log("Appointment Saved")
        res.redirect('/appointment');
    });
})

app.post('/events', async (req, res) => {
    const eventDetails = new Event(req.body)
    // console.log(appointeeDetails)
    await eventDetails.save().then(() => {
        console.log("Event Saved")
        res.redirect('/events');
    });
})

app.post('/contact', async (req, res) => {
    const contactDetails = new Contact(req.body)
    // console.log(appointeeDetails)
    await contactDetails.save().then(() => {
        console.log("Contact Saved")
        res.redirect('/contact');
    });
})

function findMajorityElement(arr) {
    let candidate = null;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            candidate = arr[i];
            count = 1;
        } else if (arr[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Verify if the candidate is indeed the majority element
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === candidate) {
            count++;
        }
    }

    return count > arr.length / 2 ? candidate : null;
}

function sumOfAnswers(arr) {
    return arr.reduce((sum, val) => sum + val, 0);;
}

const childForm = `

<input class="form-control bg-light border-0 fs-5" placeholder="Name" type="text" name="clientName"
id="clientName">
<input class="form-control bg-light border-0 my-3 fs-5  " placeholder="Email" type="email"
name="clientEmail" id="clientEmail">

    <div class="Q1 my-3 w-75">
        <h2 class="">1. Are you experiencing any peer pressure from family, friends or society?
        </h2>
        <div class="input-group d-flex flex-column mt-5">
            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6" name="question1" id="A1Q1" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark w-100" for="A1Q1">Yes</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check " value="4" name="question1" id="A2Q1" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A2Q1">Sometimes</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="3" name="question1" id="A3Q1" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark  w-100" for="A3Q1">Rarely</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="1" name="question1" id="A4Q1" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A4Q1">No</label>
            </div>
        </div>
    </div>






    <div class="Q2 my-3 w-75">
        <h2 class="">2. Are there certain people who strongly influence your opinions or decisions other
            than
            family or
            friends?
        </h2>
        <div class="input-group d-flex flex-column mt-5">
            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="3.33" name="question2" id="A1Q2" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark w-100" for="A1Q2">No one</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check " value="3.33" name="question2" id="A2Q2" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A2Q2">A few people</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question2" id="A3Q2" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark  w-100" for="A3Q2">Several people</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question2" id="A4Q2" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A4Q2">Many people</label>
            </div>
        </div>
    </div>


    <div class="Q3 my-3 w-75">
        <h2 class="">3. Have you been asked to keep secrets or withhold information from others?
        </h2>
        <div class="input-group d-flex flex-column mt-5">
            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="3.33" name="question3" id="A1Q3" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark w-100" for="A1Q3">Never</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check " value="3.33" name="question3" id="A2Q3" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A2Q3">Sometimes</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question3" id="A3Q3" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark  w-100" for="A3Q3">Rarely</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question3" id="A4Q3" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A4Q3">Often</label>
            </div>
        </div>
    </div>


    <div class="Q4 my-3 w-75">
        <h2 class="">4. Do you find it hard to concentrate during school or activities?
        </h2>
        <div class="input-group d-flex flex-column mt-5">
            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="3.33" name="question4" id="A1Q4" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark w-100" for="A1Q4">Never</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check " value="3.33" name="question4" id="A2Q4" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A2Q4">Occasionally</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question4" id="A3Q4" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark  w-100" for="A3Q4">Often</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question4" id="A4Q4" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A4Q4">Always</label>
            </div>
        </div>
    </div>



    <div class="Q5 my-3 w-75">
        <h2 class="">5. Have you had thoughts of hurting yourself or others?
        </h2>
        <div class="input-group d-flex flex-column mt-5">
            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="3.33" name="question5" id="A1Q5" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark w-100" for="A1Q5">Never</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check " value="3.33" name="question5" id="A2Q5" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A2Q5"> Rarely</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question5" id="A3Q5" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark  w-100" for="A3Q5">Sometimes</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question5" id="A4Q5" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A4Q5">Often</label>
            </div>
        </div>
    </div>




    <div class="Q6 my-3 w-75">
        <h2 class="">6. Are you comfortable expressing your feelings to others?
        </h2>
        <div class="input-group d-flex flex-column mt-5">
            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="3.33" name="question6" id="A1Q6" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark w-100" for="A1Q6">Always</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check " value="3.33" name="question6" id="A2Q6" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A2Q6">Often</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question6" id="A3Q6" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark  w-100" for="A3Q6">Rarely</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question6" id="A4Q6" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A4Q6">Never</label>
            </div>
        </div>
    </div>






    <div class="Q7 my-3 w-75">
        <h2 class="">7. How do you handle disappointment or failure?
        </h2>
        <div class="input-group d-flex flex-column mt-5">
            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="3.33" name="question7" id="A1Q7" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark w-100" for="A1Q7">Positively</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check " value="3.33" name="question7" id="A2Q7" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A2Q7">Moderately positively</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question7" id="A3Q7" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark  w-100" for="A3Q7">Negatively</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question7" id="A4Q7" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A4Q7">Very negatively</label>
            </div>
        </div>
    </div>



    <div class="Q8 my-3 w-75">
        <h2 class="">8. How do you spend your free time?
        </h2>
        <div class="input-group d-flex flex-column mt-5">
            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="3.33" name="question8" id="A1Q8" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark w-100" for="A1Q8">Engaging in hobbies and
                    activities</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check " value="3.33" name="question8" id="A2Q8" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A2Q8">Spending time with friends</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question8" id="A3Q8" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark  w-100" for="A3Q8">Mostly alone</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question8" id="A4Q8" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A4Q8">Isolating yourself</label>
            </div>
        </div>
    </div>



    <div class="Q9 my-3 w-75">
        <h2 class="">9. Do you have concerns about the future?
        </h2>
        <div class="input-group d-flex flex-column mt-5">
            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="3.33" name="question9" id="A1Q9" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark w-100" for="A1Q9">No</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check " value="3.33" name="question9" id="A2Q9" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A2Q9">Minor concerns</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question9" id="A3Q9" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark  w-100" for="A3Q9">Moderate concerns</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question9" id="A4Q9" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A4Q9">Major concerns</label>
            </div>
        </div>
    </div>



    <div class="Q10 my-3 w-75">
        <h2 class="">10. How would you describe the balance between sharing positive and negative aspects of
            your daily life
            with your parents or guardians?
        </h2>
        <div class="input-group d-flex flex-column mt-5">
            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="3.33" name="question10" id="A1Q10" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark w-100" for="A1Q10">Balanced</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check " value="3.33" name="question10" id="A2Q10" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A2Q10">More positive</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question10" id="A3Q10" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark  w-100" for="A3Q10">More negative</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question10" id="A4Q10" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A4Q10">Mostly neutral</label>
            </div>
        </div>
    </div>



    <div class="Q11 my-3 w-75">
        <h2 class="">11. Do you have any concerns or worries that you haven't shared with anyone?
        </h2>
        <div class="input-group d-flex flex-column mt-5">
            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="3.33" name="question11" id="A1Q11" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark w-100" for="A1Q11">No concerns</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check " value="3.33" name="question11" id="A2Q11" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A2Q11">Minor concerns</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question11" id="A3Q11" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark  w-100" for="A3Q11">Moderate concerns</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question11" id="A4Q11" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A4Q11">Significant concerns</label>
            </div>
        </div>
    </div>



    <div class="Q12 my-3 w-75">
        <h2 class="">12. Have you experienced any traumatic events recently that affected your thoughts?
        </h2>
        <div class="input-group d-flex flex-column mt-5">
            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="3.33" name="question12" id="A1Q12" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark w-100" for="A1Q12">No</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check " value="3.33" name="question12" id="A2Q12" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A2Q12">Minor events</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question12" id="A3Q12" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark  w-100" for="A3Q12">Moderate events</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question12" id="A4Q12" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A4Q12">Severe events</label>
            </div>
        </div>
    </div>





    <div class="Q13 my-3 w-75">
        <h2 class="">13. Are there any fears or phobias you're dealing with?
        </h2>
        <div class="input-group d-flex flex-column mt-5">
            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="3.33" name="question13" id="A1Q13" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark w-100" for="A1Q13">No fears</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check " value="3.33" name="question13" id="A2Q13" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A2Q13">Minor fears</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question13" id="A3Q13" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark  w-100" for="A3Q13">Moderate fears</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question13" id="A4Q13" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A4Q13">Intense fears</label>
            </div>
        </div>
    </div>





    <div class="Q14 my-3 w-75">
        <h2 class="">14. How do you express your emotions when feeling upset?
        </h2>
        <div class="input-group d-flex flex-column mt-5">
            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="3.33" name="question14" id="A1Q14" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark w-100" for="A1Q14">Openly communicate</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check " value="3.33" name="question14" id="A2Q14" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A2Q14">Share with a few people</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question14" id="A3Q14" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark  w-100" for="A3Q14">Keep to yourself</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question14" id="A4Q14" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A4Q14">Don't express emotions</label>
            </div>
        </div>
    </div>






    <div class="Q15 my-3 w-75">
        <h2 class="">15. Have you been interested in activities you usually enjoy?
        </h2>
        <div class="input-group d-flex flex-column mt-5">
            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="3.33" name="question15" id="A1Q15" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark w-100" for="A1Q15">Yes</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check " value="3.33" name="question15" id="A2Q15" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A2Q15">Sometimes</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question15" id="A3Q15" autocomplete="off"
                    checked>
                <label class="btn btn-outline-dark  w-100" for="A3Q15">Rarely</label>
            </div>

            <div class="m-1 col-12">
                <input type="radio" class="btn-check" value="6.66" name="question15" id="A4Q15" autocomplete="off">
                <label class="btn btn-outline-dark w-100" for="A4Q15">No</label>
            </div>
        </div>
    </div>
</div>
    <div class="Q16 my-3 w-75">
    <h2 class="">16. What do you think is affecting you the most?
    </h2>
    <input type="radio" class="btn-check" value="Overthinking" name="reason" id="overThinking" autocomplete="off" checked>
        <label class="btn btn-outline-dark" for="overThinking">OverThinking</label>
        <input type="radio" class="btn-check" value="Lack Of Sleep" name="reason" id="sleepDeprivation" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark" for="sleepDeprivation">Lack of Sleep</label>
        <input type="radio" class="btn-check" value="Anxiety" name="reason" id="anxiety" autocomplete="off" checked>
        <label class="btn btn-outline-dark" for="anxiety">Anxiety</label>
        <input type="radio" class="btn-check" value="Phobia" name="reason" id="phobia" autocomplete="off" checked>
        <label class="btn btn-outline-dark" for="phobia">Phobia</label>
    

</div>
`;
const midAgeForm = `            <input class="form-control bg-light border-0 fs-5" placeholder="Name" type="text" name="clientName"
id="clientName">
<input class="form-control bg-light border-0 my-3 fs-5  " placeholder="Email" type="email"
name="clientEmail" id="clientEmail">   <div class="Q1 my-3 w-75">
<h2 class="">1. Have you had thoughts of death or suicide?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question1" id="A1Q1" autocomplete="off" checked>
        <label class="btn btn-outline-dark w-100" for="A1Q1">Never</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question1" id="A2Q1" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q1">Rarely</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question1" id="A3Q1" autocomplete="off" checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q1">Sometimes</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question1" id="A4Q1" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q1">Often</label>
    </div>
</div>
</div>






<div class="Q2 my-3 w-75">
<h2 class="">2. How has your sleep been affected recently?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question2" id="A1Q2" autocomplete="off" checked>
        <label class="btn btn-outline-dark w-100" for="A1Q2">No change</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question2" id="A2Q2" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q2">Sleeping more than 8hrs</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question2" id="A3Q2" autocomplete="off" checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q2">Sleeping less than 3 hrs</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question2" id="A4Q2" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q2">Poor quality / No sleep</label>
    </div>
</div>
</div>


<div class="Q3 my-3 w-75">
<h2 class="">3. Do you have any serious health problems as rising age due to which your conscious repeatedly?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question3" id="A1Q3" autocomplete="off" checked>
        <label class="btn btn-outline-dark w-100" for="A1Q3">No health problem</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question3" id="A2Q3" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q3">One of serious problem</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question3" id="A3Q3" autocomplete="off" checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q3">Multiple health problems</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question3" id="A4Q3" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q3">Health problem but not serious one
        </label>
    </div>
</div>
</div>


<div class="Q4 my-3 w-75">
<h2 class="">4. Do you have any high financial debts or have family financial problems which arising as a
    problem?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question4" id="A1Q4" autocomplete="off" checked>
        <label class="btn btn-outline-dark w-100" for="A1Q4">Not at all</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question4" id="A2Q4" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q4">A little</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question4" id="A3Q4" autocomplete="off" checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q4">Very high</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question4" id="A4Q4" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q4">Abundant debt can't be cleared
        </label>
    </div>
</div>
</div>



<div class="Q5 my-3 w-75">
<h2 class="">5. Did you lost your loved ones or specially younger ones in family due to which you arised with
    depression?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question5" id="A1Q5" autocomplete="off" checked>
        <label class="btn btn-outline-dark w-100" for="A1Q5">Not at all</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question5" id="A2Q5" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q5">Yes, younger ones</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question5" id="A3Q5" autocomplete="off" checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q5">Loved one</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question5" id="A4Q5" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q5">Both</label>
    </div>
</div>
</div>




<div class="Q6 my-3 w-75">
<h2 class="">6. Does anyone of your family member talks/meets to you ?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question6" id="A1Q6" autocomplete="off" checked>
        <label class="btn btn-outline-dark w-100" for="A1Q6">Not at all</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question6" id="A2Q6" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q6">Yes daily</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question6" id="A3Q6" autocomplete="off" checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q6">Once in a week/month</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question6" id="A4Q6" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q6">Lives independently</label>
    </div>
</div>
</div>






<div class="Q7 my-3 w-75">
<h2 class="">7. Does your childrens keeps your grandchilds away from you?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question7" id="A1Q7" autocomplete="off" checked>
        <label class="btn btn-outline-dark w-100" for="A1Q7">Not at all</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question7" id="A2Q7" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q7">Yes, everytime</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question7" id="A3Q7" autocomplete="off" checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q7">Sometimes</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question7" id="A4Q7" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q7">Not sure</label>
    </div>
</div>
</div>



<div class="Q8 my-3 w-75">
<h2 class="">8. Are you managing all financial dependencies at this age by yourself ? Do you have no one closed
    like
    family?

</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question8" id="A1Q8" autocomplete="off" checked>
        <label class="btn btn-outline-dark w-100" for="A1Q8">Yes</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question8" id="A2Q8" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q8"> Yes, but live independent</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question8" id="A3Q8" autocomplete="off" checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q8">No but, live with family</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question8" id="A4Q8" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q8">Yes but, love with family</label>
    </div>
</div>
</div>



<div class="Q9 my-3 w-75">
<h2 class="">9. Are there any activities that bring you sense of calm or stress relief?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question9" id="A1Q9" autocomplete="off" checked>
        <label class="btn btn-outline-dark w-100" for="A1Q9">Spending family time</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question9" id="A2Q9" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q9">Travelling</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question9" id="A3Q9" autocomplete="off" checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q9">Entertainment</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question9" id="A4Q9" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q9">Exercising?Walking</label>
    </div>
</div>
</div>



<div class="Q10 my-3 w-75">
<h2 class="">10. Do you recall any of incident/mistakes of life making decisions due to which you have intense
    impact of regret?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question10" id="A1Q10" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q10">Not at all</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question10" id="A2Q10" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q10">Yes, one of intense mistakes</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question10" id="A3Q10" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q10">Yes, with horrifying incident</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question10" id="A4Q10" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q10">Yes, but with many incidents</label>
    </div>
</div>
</div>



<div class="Q11 my-3 w-75">
<h2 class="">11. Have you ever received mental health treatment or had history of mental health issues before?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question11" id="A1Q11" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q11">Never</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question11" id="A2Q11" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q11">Recently</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question11" id="A3Q11" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q11">A year ago</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question11" id="A4Q11" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q11">3 years ago</label>
    </div>
</div>
</div>



<div class="Q12 my-3 w-75">
<h2 class="">12.Have you had a thought about the death or becoming concerning about death as age increasing?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question12" id="A1Q12" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q12">Never</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question12" id="A2Q12" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q12">Sometimes</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question12" id="A3Q12" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q12">Yes, during every instance</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question12" id="A4Q12" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q12">Not sure</label>
    </div>
</div>
</div>





<div class="Q13 my-3 w-75">
<h2 class="">13. If you're having one of serious health problems then are you tensed about the expenses which to
    be
    raised by your family?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question13" id="A1Q13" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q13">Not at all</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question13" id="A2Q13" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q13">Sometimes</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question13" id="A3Q13" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q13">Yes, during every instance</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question13" id="A4Q13" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q13">Not sure</label>
    </div>
</div>
</div>





<div class="Q14 my-3 w-75">
<h2 class="">14. Are there any conflicts within family regarding you due to which horrifying thought process may
    arise?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question14" id="A1Q14" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q14">Never</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question14" id="A2Q14" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q14">Sometimes</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question14" id="A3Q14" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q14">Yes, during every instance</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question14" id="A4Q14" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q14">One of time happened</label>
    </div>
</div>
</div>






<div class="Q15 my-3 w-75">
 <h2 class="">15. Are you in a continous state of conscious visuals rather than actual reality or incomplete
    dreams
    of life?
 </h2>
 <div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question15" id="A1Q15" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q15">Not at all</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question15" id="A2Q15" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q15">Sometimes</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question15" id="A3Q15" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q15">Yes, during every instance</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question15" id="A4Q15" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q15">One of time happened</label>
    </div>
</div>
            </div>

<div class="Q16 my-3 w-75">
                <h2 class="">16. What do you think is affecting you the most?
                </h2>
                <input type="radio" class="btn-check" value="Overthinking" name="reason" id="overThinking" autocomplete="off" checked>
        <label class="btn btn-outline-dark" for="overThinking">OverThinking</label>
        <input type="radio" class="btn-check" value="Lack Of Sleep" name="reason" id="sleepDeprivation" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark" for="sleepDeprivation">Lack of Sleep</label>
        <input type="radio" class="btn-check" value="Anxiety" name="reason" id="anxiety" autocomplete="off" checked>
        <label class="btn btn-outline-dark" for="anxiety">Anxiety</label>
        <input type="radio" class="btn-check" value="Phobia" name="reason" id="phobia" autocomplete="off" checked>
        <label class="btn btn-outline-dark" for="phobia">Phobia</label>
                
</div>`;
const adultForm = `            <input class="form-control bg-light border-0 fs-5" placeholder="Name" type="text" name="clientName"
id="clientName">
<input class="form-control bg-light border-0 my-3 fs-5  " placeholder="Email" type="email"
name="clientEmail" id="clientEmail">
<div class="Q1 my-3 w-75">
<h2 class="">1. Have you had thoughts of death or suicide?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question1" id="A1Q1" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q1">Never</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question1" id="A2Q1" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q1">Rarely</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question1" id="A3Q1" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q1">Sometimes</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question1" id="A4Q1" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q1">Often</label>
    </div>
</div>
</div>






<div class="Q2 my-3 w-75">
<h2 class="">2. How has your sleep been affected recently?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question2" id="A1Q2" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q2">No change</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question2" id="A2Q2" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q2">Sleeping more than 8hrs</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question2" id="A3Q2" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q2">Sleeping less than 3 hrs</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question2" id="A4Q2" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q2">Poor quality / No sleep</label>
    </div>
</div>
</div>


<div class="Q3 my-3 w-75">
<h2 class="">3. Do you have any serious health problems as rising age due to which your conscious repeatedly?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question3" id="A1Q3" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q3">No health problem</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question3" id="A2Q3" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q3">One of serious problem</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question3" id="A3Q3" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q3">Multiple health problems</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question3" id="A4Q3" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q3">Health problem but not serious one
        </label>
    </div>
</div>
</div>


<div class="Q4 my-3 w-75">
<h2 class="">4. Are there specific triggers or situations that tend to lead to conflicts between you and your partner or had previous conflicts?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question4" id="A1Q4" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q4">Yes, frequently</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question4" id="A2Q4" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q4">Yes, occasionally</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question4" id="A3Q4" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q4">No</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question4" id="A4Q4" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q4"> I'm not sure</label>
    </div>
</div>
</div>



<div class="Q5 my-3 w-75">
<h2 class="">5. Do you get stressed about the topic due to not having the child or get concern of not having healthy child?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question5" id="A1Q5" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q5">Yes, frequently</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question5" id="A2Q5" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q5">Yes, occasionally</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question5" id="A3Q5" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q5">No</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question5" id="A4Q5" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q5">I'm not sure</label>
    </div>
</div>
</div>




<div class="Q6 my-3 w-75">
<h2 class="">6. Do you have any high financial debts or have family financial problems which arising as a problem? 
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question6" id="A1Q6" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q6">Not at all</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question6" id="A2Q6" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q6">A little</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question6" id="A3Q6" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q6">Very high</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question6" id="A4Q6" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q6">Abundant debt can't be cleared</label>
    </div>
</div>
</div>






<div class="Q7 my-3 w-75">
<h2 class="">7. Have you experienced a loss, whether it be a person, job, or other significant aspect of your life ?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question7" id="A1Q7" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q7">Never</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question7" id="A2Q7" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q7">Recently</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question7" id="A3Q7" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q7">Months ago</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question7" id="A4Q7" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q7">An year ago</label>
    </div>
</div>
</div>



<div class="Q8 my-3 w-75">
<h2 class="">8. Do you have intense work load at high age working site / risky working sites due to which your mental health or body is degrading?

</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question8" id="A1Q8" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q8">Yes workload not balancing with age</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question8" id="A2Q8" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q8">Yes risky working sites affecting body</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question8" id="A3Q8" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q8">No</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question8" id="A4Q8" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q8">Not sure</label>
    </div>
</div>
</div>



<div class="Q9 my-3 w-75">
<h2 class="">9. Are there any activities that bring you sense of calm or stress relief?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question9" id="A1Q9" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q9">Spending family time</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question9" id="A2Q9" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q9">Travelling</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question9" id="A3Q9" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q9">Entertainment</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question9" id="A4Q9" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q9">Exercising</label>
    </div>
</div>
</div>



<div class="Q10 my-3 w-75">
<h2 class="">10. Are there any family problem like serious health problems, stressed about future of child, or conflict between family members?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question10" id="A1Q10" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q10">Having serious health problem in family</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question10" id="A2Q10" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q10">Conflict with family members</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question10" id="A3Q10" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q10">Stressed about future of child</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question10" id="A4Q10" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q10">No</label>
    </div>
</div>
</div>



<div class="Q11 my-3 w-75">
<h2 class="">11. Are there any specific situations or triggers like accidents that high intensify your feelings of sadness, hopelessness or stress?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question11" id="A1Q11" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q11">No triggers</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question11" id="A2Q11" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q11">Minor triggers</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question11" id="A3Q11" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q11">Moderate triggers</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question11" id="A4Q11" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q11">Significant triggers</label>
    </div>
</div>
</div>



<div class="Q12 my-3 w-75">
<h2 class="">12. Are there any substances, such as alcohol or drugs, that you use to cope with your emotions?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question12" id="A1Q12" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q12">No, but for enjoyment</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question12" id="A2Q12" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q12">Occasionally</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question12" id="A3Q12" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q12">Frequently</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question12" id="A4Q12" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q12">Not at all</label>
    </div>
</div>
</div>





<div class="Q13 my-3 w-75">
<h2 class="">13. How do you see yourself considering the current goals achieved / made by you? 
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question13" id="A1Q13" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q13">Satisfied</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question13" id="A2Q13" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q13">Needs to be worked with complete vision</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question13" id="A3Q13" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q13">Hopeless</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question13" id="A4Q13" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q13">Made one step back</label>
    </div>
</div>
</div>





<div class="Q14 my-3 w-75">
<h2 class="">14. Have you ever received mental health treatment or had history of mental health issues before?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question14" id="A1Q14" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q14">Never</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question14" id="A2Q14" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q14">Recently</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question14" id="A3Q14" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q14">A year ago</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question14" id="A4Q14" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q14">3 years ago</label>
    </div>
</div>
</div>






<div class="Q15 my-3 w-75">
<h2 class="">15. Are you in a continous state of conscious visuals rather than actual reality or incomplete dreams of life? 
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question15" id="A1Q15" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q15">Not at all</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question15" id="A2Q15" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q15">Sometimes</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question15" id="A3Q15" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q15">Yes, during every instance</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question15" id="A4Q15" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q15">One of time happened</label>
    </div>
</div></div>
<div class="Q16 my-3 w-75">
                <h2 class="">16. What do you think is affecting you the most?
                </h2>
                <input type="radio" class="btn-check" value="Overthinking" name="reason" id="overThinking" autocomplete="off" checked>
        <label class="btn btn-outline-dark" for="overThinking">OverThinking</label>
        <input type="radio" class="btn-check" value="Lack Of Sleep" name="reason" id="sleepDeprivation" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark" for="sleepDeprivation">Lack of Sleep</label>
        <input type="radio" class="btn-check" value="Anxiety" name="reason" id="anxiety" autocomplete="off" checked>
        <label class="btn btn-outline-dark" for="anxiety">Anxiety</label>
        <input type="radio" class="btn-check" value="Phobia" name="reason" id="phobia" autocomplete="off" checked>
        <label class="btn btn-outline-dark" for="phobia">Phobia</label>
                
            
</div>`;
const oldAgeForm = `            <input class="form-control bg-light border-0 fs-5" placeholder="Name" type="text" name="clientName"
id="clientName">
<input class="form-control bg-light border-0 my-3 fs-5  " placeholder="Email" type="email"
name="clientEmail" id="clientEmail"><div class="Q1 my-3 w-75">
<h2 class="">1. Have you had thoughts of death or suicide?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question1" id="A1Q1" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q1">Never</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question1" id="A2Q1" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q1">Rarely</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question1" id="A3Q1" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q1">Sometimes</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question1" id="A4Q1" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q1">Often</label>
    </div>
</div>
</div>






<div class="Q2 my-3 w-75">
<h2 class="">2. How has your sleep been affected recently?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question2" id="A1Q2" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q2">No change</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question2" id="A2Q2" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q2">Sleeping more than 8hrs</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question2" id="A3Q2" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q2">Sleeping less than 3 hrs</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question2" id="A4Q2" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q2">Poor quality / No sleep</label>
    </div>
</div>
</div>


<div class="Q3 my-3 w-75">
<h2 class="">3. Do you have any serious health problems as rising age due to which your conscious repeatedly?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question3" id="A1Q3" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q3">No health problem</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question3" id="A2Q3" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q3">One of serious problem</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question3" id="A3Q3" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q3">Multiple health problems</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question3" id="A4Q3" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q3">Health problem but not serious one
        </label>
    </div>
</div>
</div>


<div class="Q4 my-3 w-75">
<h2 class="">4. Do you have any high financial debts or have family financial problems which arising as a problem?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question4" id="A1Q4" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q4">Not at all</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question4" id="A2Q4" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q4">A little</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question4" id="A3Q4" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q4">Very high</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question4" id="A4Q4" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q4">Abundant debt can't be cleared
        </label>
    </div>
</div>
</div>



<div class="Q5 my-3 w-75">
<h2 class="">5. Did you lost your loved ones or specially younger ones in family due to which you arised with depression? 
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question5" id="A1Q5" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q5">Not at all</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question5" id="A2Q5" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q5">Yes, younger ones</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question5" id="A3Q5" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q5">Loved one</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question5" id="A4Q5" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q5">Both</label>
    </div>
</div>
</div>




<div class="Q6 my-3 w-75">
<h2 class="">6. Does anyone of your family member talks/meets to you ? 
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question6" id="A1Q6" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q6">Not at all</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question6" id="A2Q6" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q6">Yes daily</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question6" id="A3Q6" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q6">Once in a week/month</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question6" id="A4Q6" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q6">Lives independently</label>
    </div>
</div>
</div>






<div class="Q7 my-3 w-75">
<h2 class="">7. Does your childrens keeps your grandchilds away from you?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question7" id="A1Q7" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q7">Not at all</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question7" id="A2Q7" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q7">Yes, everytime</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question7" id="A3Q7" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q7">Sometimes</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question7" id="A4Q7" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q7">Not sure</label>
    </div>
</div>
</div>



<div class="Q8 my-3 w-75">
<h2 class="">8. Are you managing all financial dependencies at this age by yourself ? Do you have no one closed like family?

</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question8" id="A1Q8" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q8">Yes</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question8" id="A2Q8" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q8"> Yes, but live independent</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question8" id="A3Q8" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q8">No but, live with family</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question8" id="A4Q8" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q8">Yes but, love with family</label>
    </div>
</div>
</div>



<div class="Q9 my-3 w-75">
<h2 class="">9. Are there any activities that bring you sense of calm or stress relief?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question9" id="A1Q9" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q9">Spending family time</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question9" id="A2Q9" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q9">Travelling</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question9" id="A3Q9" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q9">Entertainment</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question9" id="A4Q9" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q9">Exercising?Walking</label>
    </div>
</div>
</div>



<div class="Q10 my-3 w-75">
<h2 class="">10. Do you recall any of incident/mistakes of life making decisions due to which you have intense impact of regret?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question10" id="A1Q10" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q10">Not at all</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question10" id="A2Q10" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q10">Yes, one of intense mistakes</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question10" id="A3Q10" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q10">Yes, with horrifying incident</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question10" id="A4Q10" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q10">Yes, but with many incidents</label>
    </div>
</div>
</div>



<div class="Q11 my-3 w-75">
<h2 class="">11. Have you ever received mental health treatment or had history of mental health issues before?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question11" id="A1Q11" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q11">Never</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question11" id="A2Q11" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q11">Recently</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question11" id="A3Q11" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q11">A year ago</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question11" id="A4Q11" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q11">3 years ago</label>
    </div>
</div>
</div>



<div class="Q12 my-3 w-75">
<h2 class="">12.Have you had a thought about the death or becoming concerning about death as age increasing?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question12" id="A1Q12" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q12">Never</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question12" id="A2Q12" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q12">Sometimes</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question12" id="A3Q12" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q12">Yes, during every instance</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question12" id="A4Q12" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q12">Not sure</label>
    </div>
</div>
</div>





<div class="Q13 my-3 w-75">
<h2 class="">13. If you're having one of serious health problems then are you tensed about the expenses which to be raised by your family?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question13" id="A1Q13" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q13">Not at all</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question13" id="A2Q13" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q13">Sometimes</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question13" id="A3Q13" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q13">Yes, during every instance</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question13" id="A4Q13" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q13">Not sure</label>
    </div>
</div>
</div>





<div class="Q14 my-3 w-75">
<h2 class="">14. Are there any conflicts within family regarding you due to which horrifying thought process may arise?
</h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question14" id="A1Q14" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q14">Never</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question14" id="A2Q14" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q14">Sometimes</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question14" id="A3Q14" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q14">Yes, during every instance</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question14" id="A4Q14" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q14">One of time happened</label>
    </div>
</div>
</div>






<div class="Q15 my-3 w-75">
    <h2 class="">15. Are you in a continous state of conscious visuals rather than actual reality or incomplete dreams of life? 
    </h2>
<div class="input-group d-flex flex-column mt-5">
    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="3.33" name="question15" id="A1Q15" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark w-100" for="A1Q15">Not at all</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check " value="3.33" name="question15" id="A2Q15" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A2Q15">Sometimes</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question15" id="A3Q15" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark  w-100" for="A3Q15">Yes, during every instance</label>
    </div>

    <div class="m-1 col-12">
        <input type="radio" class="btn-check" value="6.66" name="question15" id="A4Q15" autocomplete="off">
        <label class="btn btn-outline-dark w-100" for="A4Q15">One of time happened</label>
    </div>
</div>
</div>
<div class="Q16 my-3 w-75">
    <h2 class="">16. What do you think is affecting you the most?
    </h2>
    <input type="radio" class="btn-check" value="Overthinking" name="reason" id="overThinking" autocomplete="off" checked>
        <label class="btn btn-outline-dark" for="overThinking">OverThinking</label>
        <input type="radio" class="btn-check" value="Lack Of Sleep" name="reason" id="sleepDeprivation" autocomplete="off"
            checked>
        <label class="btn btn-outline-dark" for="sleepDeprivation">Lack of Sleep</label>
        <input type="radio" class="btn-check" value="Anxiety" name="reason" id="anxiety" autocomplete="off" checked>
        <label class="btn btn-outline-dark" for="anxiety">Anxiety</label>
        <input type="radio" class="btn-check" value="Phobia" name="reason" id="phobia" autocomplete="off" checked>
        <label class="btn btn-outline-dark" for="phobia">Phobia</label>
    
</div>`;

app.post('/ageFilter', (req, res) => {
    const selectedAge = req.body.clientAge;
    var formContent;

    switch (parseInt(selectedAge)) {
        case 1:
            formContent = childForm;
            break;
        case 2:
            formContent = adultForm;
            break;
        case 3:
            formContent = midAgeForm;
            break;
        case 4:
            formContent = oldAgeForm;
            break;
        default:
            formContent = "Invalid Age Selection";
    }

    var responseHtml = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <title>Soul Surveyor - Depression Detection</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="Free HTML Templates" name="keywords">
        <meta content="Free HTML Templates" name="description">
    
        <!-- Favicon -->
        <link href="/img/6.6661448723night-time-meditation.jpg" rel="icon">
    
        <!-- Google Web Fonts -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap"
            rel="stylesheet">
    
        <!-- Icon Font Stylesheet -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">
    
        <!-- Libraries Stylesheet -->
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
        <link href="lib/animate/animate.min.css" rel="stylesheet">
        <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />
        <link href="lib/twentytwenty/twentytwenty.css" rel="stylesheet" />
    
        <!-- Customized Bootstrap Stylesheet -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
    
        <!-- Template Stylesheet -->
        <link href="css/style.css" rel="stylesheet">
    </head>
    
    <body>
        <!-- Spinner Start -->
        <div id="spinner"
            class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-grow text-primary m-1" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-dark m-1" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-secondary m-1" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <!-- Spinner End -->
    
    
        <!-- Topbar Start -->
        <div class="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
            <div class="row gx-0">
                <div class="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                    <div class="d-inline-flex align-items-center">
                        <small class="py-2"><i class="far fa-clock text-primary me-2"></i>Opening Hours: 24/7</small>
                    </div>
                </div>
                <div class="col-md-6 text-center text-lg-end">
                    <div class="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                        <div class="me-3 pe-3 border-end py-2">
                            <p class="m-0"><i class="fa fa-envelope-open me-2"></i>soulsurveyor@gmail.com</p>
                        </div>
                        <div class="py-2">
                            <p class="m-0"><i class="fa fa-phone-alt me-2"></i>+91 1234567890</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Topbar End -->
    
    
        <!-- Navbar Start -->
        <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
            <a href="index.html" class="navbar-brand p-0">
                <h2 class="m-0 text-primary"><i class="fa fa-brain me-2"></i>Soul Surveyor</h2>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a href="index.html" class="nav-item nav-link active">Home</a>
                    <a href="about.html" class="nav-item nav-link">About Us</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Events</a>
                        <div class="dropdown-menu m-0">
                            <a href="" class="dropdown-item">Meditation</a>
                            <a href="" class="dropdown-item">Routine</a>
                            <a href="" class="dropdown-item">OverThinking</a>
    
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div class="dropdown-menu m-0">
                            <a href="appointment.html" class="dropdown-item">Appointment</a>
                            <a href="team.html" class="dropdown-item">Our Doctor Team</a>
                            <a href="price.html" class="dropdown-item">Pricing Plan</a>
                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                        </div>
                    </div>
                    <a href="contact.html" class="nav-item nav-link">Contact Us</a>
                </div>
                <button type="button" class="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i
                        class="fa fa-search"></i></button>
                <a href="register.html" class="btn btn-primary py-2 px-4 ms-3">Register</a>
            </div>
        </nav>
        <!-- Navbar End -->
    
    
        <!-- Full Screen Search Start -->
        <div class="modal fade" id="searchModal" tabindex="-1">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content" style="background: rgba(9, 30, 62, .7);">
                    <div class="modal-header border-0">
                        <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex align-items-center justify-content-center">
                        <div class="input-group" style="max-width: 600px;">
                            <input type="text" class="form-control bg-transparent border-primary p-3"
                                placeholder="Type search keyword">
                            <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Full Screen Search End -->
    
        <!-- Hero Start -->
        <div class="container-fluid bg-primary py-5 hero-header mb-5">
            <div class="row py-3">
                <div class="col-12 text-center">
                    <h2 class="display-3 text-white animated zoomIn">Soulsurvey</h2>
                    <a href="" class="h4 text-white">Home</a>
                    <i class="far fa-circle text-white px-2"></i>
                    <a href="" class="h4 text-white">Soulsurvey</a>
                </div>
            </div>
        </div>
        <!-- Hero End -->
    
        <!-- Soul Surveyor Start -->
        <form action="/soulsurvey" method="post"
            class="shadow-lg p-3 mb-5 bg-white rounded container mx-auto w-50 d-flex flex-column align-items-center ">
            <div id="form-container" class="form-group row justify-content-center">
                ${formContent}
            </div>
            <input class="btn btn-primary w-75 my-5 py-3 shadow" style="border-radius: 5px;" type="submit" value="Submit">
        </form>
        </div>
        <!-- Soul Surveyor End -->
    
        <!-- Newsletter Start -->
        <div class="container-fluid position-relative pt-5 wow fadeInUp" data-wow-delay="0.1s" style="z-index: 1;">
            <div class="container">
                <div class="bg-primary p-5">
                    <form class="mx-auto" style="max-width: 600px;">
                        <div class="input-group">
                            <input type="text" class="form-control border-white p-3" placeholder="Your Email">
                            <button class="btn btn-dark px-4"><a href="register.html">Register Here</a></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Newsletter End -->
    
        <!-- Footer Start -->
        <div class="container-fluid bg-dark text-light py-5 wow fadeInUp" data-wow-delay="0.3s" style="margin-top: -75px;">
            <div class="container pt-5">
                <div class="row g-5 pt-4">
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4">Quick Links</h3>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-light mb-2" href="index.html"><i
                                    class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                            <a class="text-light mb-2" href="about.html"><i
                                    class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                            <a class="text-light mb-2" href="events.html"><i
                                    class="bi bi-arrow-right text-primary me-2"></i>Our Events</a>
    
                            <a class="text-light" href="contact.html"><i
                                    class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4">Popular Links</h3>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-light mb-2" href="appointment.html"><i
                                    class="bi bi-arrow-right text-primary me-2"></i>Appointment</a>
                            <a class="text-light mb-2" href="testimonial.html"><i
                                    class="bi bi-arrow-right text-primary me-2"></i>Testimonial</a>
                            <a class="text-light mb-2" href="team.html"><i
                                    class="bi bi-arrow-right text-primary me-2"></i>Team</a>
    
                            <a class="text-light" href="price.html"><i
                                    class="bi bi-arrow-right text-primary me-2"></i>Pricing</a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4">Get In Touch</h3>
                        <p class="mb-2"><i class="bi bi-geo-alt text-primary me-2"></i>Shyamnarayan Marg,Thakur
                            Village,Kandivali(E),Mumbai-400101</p>
                        <p class="mb-2"><i class="bi bi-envelope-open text-primary me-2"></i>soulsurveyor@gmail.com</p>
                        <p class="mb-0"><i class="bi bi-telephone text-primary me-2"></i>+91 1234567890</p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4">Follow Us</h3>
                        <div class="d-flex">
                            <a class="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i
                                    class="fab fa-twitter fw-normal"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i
                                    class="fab fa-facebook-f fw-normal"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i
                                    class="fab fa-linkedin-in fw-normal"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded" href="#"><i
                                    class="fab fa-instagram fw-normal"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid text-light py-4" style="background: #051225;">
            <div class="container">
                <div class="row g-0">
                    <div class="col-md-6 text-center text-md-start">
                        <p class="mb-md-0">&copy; <a class="text-white border-bottom" href="#">Soul Surveyor</a>. All Rights
                            Reserved.</p>
                    </div>
    
                </div>
            </div>
        </div>
        <!-- Footer End -->
    
    
        <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i class="bi bi-arrow-up"></i></a>
    
    
        <!-- JavaScript Libraries -->
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="lib/wow/wow.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="lib/tempusdominus/js/moment.min.js"></script>
        <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
        <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>
        <script src="lib/twentytwenty/jquery.event.move.js"></script>
        <script src="lib/twentytwenty/jquery.twentytwenty.js"></script>
    
        <!-- Template Javascript -->
        <script>
            document.getElementById('clientAge').addEventListener('change', async () => {
                const response = await fetch('/ageFilter', {
                    method: 'POST',
                    body: new URLSearchParams({ age: document.getElementById('clientAge').value })
                });
                // No further action needed, server response will handle redirect (implicit)
            });
        </script>
        <script src="js/maincss.js"></script>
    
    </body>
    
    </html>`;
    res.send(responseHtml); // Send the complete HTML response
})



app.post('/soulsurvey', async (req, res) => {
    const clientName = req.body.clientName;
    const clientEmail = req.body.clientEmail;
    const reason = req.body.reason;
    const getFormDetails = req.body;
    // console.log(getFormDetails);
    var surveyAnswers = [getFormDetails.question1, getFormDetails.question2, getFormDetails.question3
        , getFormDetails.question4, getFormDetails.question5, getFormDetails.question6, getFormDetails.question7, getFormDetails.question8, getFormDetails.question9, getFormDetails.question10, getFormDetails.question11, getFormDetails.question12, getFormDetails.question13, getFormDetails.question14, getFormDetails.question15]

    const intSurveyAnswers = surveyAnswers.map(str => parseInt(str));
    // console.log(surveyAnswers);
    // getFormDetails.inputEmail, getFormDetails.inputFullName, 
    // const majorityElement = findMajorityElement(surveyAnswers)
    const depressionLevel = sumOfAnswers(intSurveyAnswers)
    // console.log(depressionLevel);
    numberToDisplay = depressionLevel;
    getFormDetails.numberToDisplay = depressionLevel;

    // getFormDetails.save();
    const newSurvey = new Survey({ clientEmail, clientName, depressionLevel, reason });
    newSurvey.save();
    res.redirect('/depression');
})

// Connect to MongoDB
connectDB().then(() => {
    app.listen(3000, () => {
        console.log('Server listening on port 3000');
    });
})