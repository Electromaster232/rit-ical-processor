/**
 * Welcome to ICAL.js fiddle
 */
  $.ajax({
    url:'http://megaoof.djelectro.me/rit/ical_rit.ics',
    success: function (data){
      var iCalendarData = data
     
      var jcalData = ICAL.parse(iCalendarData);
      var vcalendar = new ICAL.Component(jcalData);
      var vevent = vcalendar.getFirstSubcomponent('vevent');
      var summary = vevent.getFirstPropertyValue('summary');
      console.log('Summary: ' + summary);
    }
  });

