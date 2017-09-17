(function ($) {
  $.fn.iplocate = function (opt) {
    var def = $.extend({
      service: 0, // 0 : 'freegeoip.net', 1 : 'ip-api.com', 2 : 'geoip.nekudo.com', 3 : 'ipinfo.io', 4 : 'extreme-ip-lookup.com' , 5 : 'ipapi.co'
      ip: '208.80.152.201', // Wikimedia IP
      lang:'fr', // en, de, es, pt-BR, fr, ja, zh-CN, ru
      // iplocate render options
      loader: 'Please wait while loading the information',
      showip: true,
      showtable: false, // true for "table" table>tr>td and false for "list" ul>li>span
      showkey: true,
      keyvalseparator: ': ',
      ipclass: 'ipclass',
      contentclass: 'contentclass',
      keyclass: 'keyclass',
      valclass: 'valclass',
      maplink: true,
      maptitle: 'Google Map'
    }, opt);
    
    
    
    var id = $(this).attr("id"), s = "", loc = "";
    // 0 free
    var url_pattern = [
      'https://freegeoip.net/json/' + def.ip,
      'http://ip-api.com/json/' + def.ip + '?lang=' + def.lang,
      'https://geoip.nekudo.com/api/' + def.ip + '/' + def.lang,
      'https://ipinfo.io/' + def.ip + '/json', // Free usage of this API is limited to 1,000 API requests per day.
      'https://extreme-ip-lookup.com/json/' + def.ip, // Free usage of this API is limited to 200 requests per minute.
      'https://ipapi.co/' + def.ip + '/json',   
    ];
    
    $("#" + id).empty();
    if (def.ip == undefined) return;       
    $("#" + id).append(def.loader);
    
    console.log(url_pattern[def.service]); 
    $.getJSON( url_pattern[def.service], function( result ) {
      var items = [];
      $("#" + id).empty();
      
      if (def.showip) {
        s = '';
        if (def.showtable) {
          s += '<tr class="' + def.ipclass + '">';
          if (def.showkey){
            s +='<td class="' + def.keyclass + '">ip' + def.keyvalseparator + '</td>';    
          }
          s +='<td class="' + def.valclass + '">' + def.ip + '</td></tr>'; 
          } else {
          s += '<li class="' + def.ipclass + '">';
          if (def.showkey){
            s +='<span class="' + def.keyclass + '">ip' + def.keyvalseparator + '</span>';    
          }
          s +='<span class="' + def.valclass + '">' + def.ip + '</span></li>'; 
        }
        items.push(s);
      }
      
      // @see SERVICES.md, geoip.nekudo.com return a multidimensional object
      if ( def.service == 2 )
      data = Object.assign({}, {"city": result.city}, result.country, result.location);
      else {
        data = result;
      }
      
      $.each( data, function( key, val ) {
        s = '';
        if (def.showtable) {
          s += '<tr>';
          if (def.showkey){
            s +='<td class="' + def.keyclass + '">' + key + def.keyvalseparator + '</td>';    
          }
          s +='<td class="' + def.valclass + '">' + val + '</td></tr>'; 
          } else {
          s += '<li>';
          if (def.showkey){
            s +='<span class="' + def.keyclass + '">' + key + def.keyvalseparator + '</span>';    
          }
          s +='<span class="' + def.valclass + '">' + val + '</span></li>'; 
        }
        items.push(s);
      });
      
      if (def.maplink) {
        s = '';
        if (typeof data.latitude !== 'undefined') {
          loc = data.latitude + ',' + data.longitude;
          } else if (typeof data.lat !== 'undefined') {
          loc = data.lat + ',' + data.lon;
          } else {
          loc = data.loc;
        }
        if (def.showtable) {
          s += '<tr>';
          if (def.showkey){
            s +='<td colspan="2">';    
            } else {
            s +='<td>'; 
          }
          s +='<a class="button" target="blank" href="https://www.google.com/maps/@?api=1&map_action=map&center=' + loc + '&zoom=15&basemap=satellite">' + def.maptitle + '</a></td></tr>'; 
          } else {
          s += '<li>';
          s +='<span class="' + def.valclass + '"><a class="button" target="blank" href="https://www.google.com/maps/@?api=1&map_action=map&center=' + loc + '&zoom=15&basemap=satellite">' + def.maptitle + '</a></li>'; 
        }
        items.push(s);
      }
      
      if (def.showtable) {
        $( "<table/>", {
          "class": def.contentclass,
          html: items.join( "" )
        }).appendTo("#" + id);
        } else {
        $( "<ul/>", {
          "class": def.contentclass,
          html: items.join( "" )
        }).appendTo("#" + id);
      }    
    });
    
  };
})(jQuery);