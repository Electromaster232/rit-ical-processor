/**
 * Welcome to ICAL.js fiddle
 */
 var iCalendarData = ""
  $.ajax({
    url:'https://campusgroups.rit.edu/ical/rit/ical_rit.ics',
    success: function (data){
      iCalendarData = data
    }
  });


var jcalData = ICAL.parse(iCalendarData);
var vcalendar = new ICAL.Component(jcalData);
var vevent = vcalendar.getFirstSubcomponent('vevent');
var summary = vevent.getFirstPropertyValue('summary');
console.log('Summary: ' + summary);
