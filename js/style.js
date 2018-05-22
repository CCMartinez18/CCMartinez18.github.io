/* global $ */

function show(event) {
  event.preventDefault();
  console.log('calling show');
  $('#show-this-on-click').slideDown();
  $('.readmore').hide();
  $('.readless').show();
}

$('.readmore').click(show);

function hide(event) {
  event.preventDefault();
  console.log('calling hide');
  $('#show-this-on-click').slideUp();
  $('.readless').hide();
  $('.readmore').show();

}

$('.readless').click(hide);



/******************************************
/* Options Page
/*******************************************/
console.log('Hello World');

function showActive() {

  $('li').removeClass('active');
  $(this).addClass('active');

}

function webex() {
  $('#title').html('WebEx');
  $('#description').html('* Multiple presenters can share presentations, applications, whiteboards, and streaming video files, and annotate shared content in real time * Audio controls and attention monitoring tools. * Record meeting * Meetings for groups of 1 to 25 * Moderated by meeting requester * Interactive presentation with video * screen sharing * notes * view participates * chat * People join easily from any platform *');
}

function bluejeans() {
  $('#title').html('BlueJeans');
  $('#description').html('Simple, Immersive, and Video Conferencing * Connect instantly with colleagues and customers from virtually any mobile device, laptop or conference room system. * Screen Sharing and Collaboration * Instantly share your latest presentations, documents and video clips. Share your entire screen or a single application. * Maximum number of participants allowed in a BlueJeans meeting: 100 participants');

}

function livestream() {
  $('#title').html('Livestream');
  $('#description').html('* Create a webinar and stream your workshops, demonstration, or event to the Engineering Laboratory channel on Livestream (https://livestream.com/nist-el) * Approved events can be limited to an invited audience, or streamed publicly with PAO approval * Events are recorded and can be viewed via online DVR * Moderated by ELDST * One-way streaming with real-time user commenting * High quality 1080p/60 video stream * Stream in multiple bit rates * Customized stream for Windows, Mac, iOS, and Android platforms *');
}

function aboutus() {
  $('#title').html('About Us');
  $('#description').html('The EL Data, Security, and Technology (ELDST) (formerly ELSA). ELDST is not a helpdesk. ITAC is a helpdesk that serves as the face of OISM, the central IT support organization at NIST. Contact ELDST before you write a Statement of Work (SOW), Task Order, Grant, Collaborative agreement for IT operations, data management, or software development services. We can save you some time and grief by helping you specify requirements and consult on IT security that may impact your submission. Visit our ELDST Wiki for more services ELDST provides.');
}

function contactus() {
  $('#title').html('Contact Us');
  $('#description').html('For technical assistance * ELDST Support - Building 224 Room B251 * ELDST@nist.gov * 301-975-8146');
}

function eldstwiki() {
  $('#title').html('Eldst Wiki');
  $('#description').html('ELDST wiki is provided by EL Data, Security, & Technology (ELDST) (formerly ELSA). ELDST is not a helpdesk. ITAC is a helpdesk that serves as the face of OISM, the central IT support organization at NIST.');
}



$('li').click(showActive);
$('.webex').click(webex);
$('.bluejeans').click(bluejeans);
$('.livestream').click(livestream);
$('.aboutus').click(aboutus);
$('.contactus').click(contactus);
$('.eldstwiki').click(eldstwiki);

