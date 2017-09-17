
(function ($) {
    $.fn.iplocate = function (opt) {
        var def = $.extend({
            // ip-api options
            ip: '208.80.152.201', // Wikimedia IP
            fields: 'country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query,status,message',
            lang:'fr', // en, de, es, pt-BR, fr, ja, zh-CN, ru
            // iplocate render options
            loader: 'Please wait while loading the information',
            showip: true,
            showtable: true, // true for "table" table>tr>td and false for "list" ul>li>span
            showkey: true,
            keyvalseparator: ': ',
            ipclass: 'ipclass',
            contentclass: 'contentclass',
            keyclass: 'keyclass',
            valclass: 'valclass',
            maplink: true,
            maptitle: 'Google Map'
        }, opt);
        
        var id = $(this).attr("id"), s = "";
        $("#" + id).empty();
        if (def.ip == undefined) return;       
        $("#" + id).append(def.loader);
        /*
        https://www.google.com/maps/@?api=1&map_action=map&center=37.7992940,-122.3976113&zoom=15&basemap=satellite
        */
        $.getJSON( "http://ip-api.com/json/" + def.ip + "?fields=" + def.fields + "&lang=" + def.lang, function( data ) {
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
            if (def.showtable) {
                s += '<tr>';
                if (def.showkey){
                  s +='<td colspan="2">';    
                } else {
                  s +='<td>'; 
                }
                s +='<a class="button" target="blank" href="https://www.google.com/maps/@?api=1&map_action=map&center=' + data.lat + ',' + data.lon + '&zoom=15&basemap=satellite">' + def.maptitle + '</a></td></tr>'; 
            } else {
                s += '<li>';
                s +='<span class="' + def.valclass + '"><a class="button" target="blank" href="https://www.google.com/maps/@?api=1&map_action=map&center=' + data.lat + ',' + data.lon + '&zoom=15&basemap=satellite">' + def.maptitle + '</a></li>'; 
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