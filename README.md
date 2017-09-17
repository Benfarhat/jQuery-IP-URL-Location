### IP URL Location

IP URL Location is a simple jquery script based on 5 IP API location:

- https://freegeoip.net/json/
- http://ip-api.com/json/
- https://geoip.nekudo.com/api/
- https://ipinfo.io/
- https://extreme-ip-lookup.com/json/
- https://ipapi.co/

[Demo](https://benfarhat.github.io/jQuery-IP-URL-Location/)

### Usage

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>ip-Url-Locate</title>
    <!-- iplocate stylesheet -->
    <link href="css/iplocate.css" rel="stylesheet">
  </head>
  <body> 
     <div id="ipinformation"></div>
    <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script></script>
  <!-- iplocate script -->
  <script src="js/iplocate.js"></script>
  <!-- Call to the script -->
  <script type="text/javascript">
    $(document).ready(function () {
      $('#ipinformation').iplocate({
        service: 0, // 0 : 'freegeoip.net', 1 : 'ip-api.com', 2 : 'geoip.nekudo.com', 3 : 'ipinfo.io', 4 : 'extreme-ip-lookup.com' , 5 : 'ipapi.co'
        ip: '208.80.152.201', // Wikimedia IP
        lang:'en', // en, de, es, pt-BR, fr, ja, zh-CN, ru
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
        maptitle: 'Google Map' // The map link button title
      });
    });
</script>
</body>
</html>

```
