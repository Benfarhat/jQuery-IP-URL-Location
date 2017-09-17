### IP URL Location

IP URL Location is a simple jquery script based on ip-api.com that give you location data for:
- an IP adresse (IPV4 or IPV6)
- a URL

The location datas are:
 if successful query:
 
 <table class="inline">

<tbody>

<tr>

<th>name</th>

<th>description</th>

<th>example</th>

<th>type</th>

</tr>

<tr>

<td>**status**</td>

<td>always **success**</td>

<td>_success_</td>

<td>string</td>

</tr>

<tr>

<td>**country**</td>

<td>country</td>

<td>_United States_</td>

<td>string</td>

</tr>

<tr>

<td>**countryCode**</td>

<td>country short</td>

<td>_US_</td>

<td>string</td>

</tr>

<tr>

<td>**region**</td>

<td>region/state short</td>

<td>_CA_ or _10_</td>

<td>string</td>

</tr>

<tr>

<td>**regionName**</td>

<td>region/state</td>

<td>_California_</td>

<td>string</td>

</tr>

<tr>

<td>**city**</td>

<td>city</td>

<td>_Mountain View_</td>

<td>string</td>

</tr>

<tr>

<td>**zip**</td>

<td>zip code</td>

<td>_94043_</td>

<td>string</td>

</tr>

<tr>

<td>**lat**</td>

<td>latitude</td>

<td>_37.4192_</td>

<td>float</td>

</tr>

<tr>

<td>**lon**</td>

<td>longitude</td>

<td>_-122.0574_</td>

<td>float</td>

</tr>

<tr>

<td>**timezone**</td>

<td>city timezone</td>

<td>_America/Los_Angeles_</td>

<td>string</td>

</tr>

<tr>

<td>**isp**</td>

<td>ISP name</td>

<td>_Google_</td>

<td>string</td>

</tr>

<tr>

<td>**org**</td>

<td>Organization name</td>

<td>_Google_</td>

<td>string</td>

</tr>

<tr>

<td>**as**</td>

<td>AS number and name, separated by space</td>

<td>_AS15169 Google Inc._</td>

<td>string</td>

</tr>

<tr>

<td>**reverse**</td>

<td>Reverse DNS of the IP</td>

<td>_wi-in-f94.1e100.net_</td>

<td>string</td>

</tr>

<tr>

<td>**mobile**</td>

<td>mobile (cellular) connection</td>

<td>_true_</td>

<td>bool</td>

</tr>

<tr>

<td>**proxy**</td>

<td>proxy (anonymous)</td>

<td>_true_</td>

<td>bool</td>

</tr>

<tr>

<td>**query**</td>

<td>IP used for the query</td>

<td>_173.194.67.94_</td>

<td>string</td>

</tr>

</tbody>

</table>

on error query it return:

<table>

<tbody>

<tr>

<th>name</th>

<th>description</th>

<th>example</th>

<th>type</th>

</tr>

<tr>

<td>**status**</td>

<td>always **success**</td>

<td>_success_</td>

<td>string</td>

</tr>

<tr>

<td>**country**</td>

<td>country</td>

<td>_United States_</td>

<td>string</td>

</tr>

<tr>

<td>**countryCode**</td>

<td>country short</td>

<td>_US_</td>

<td>string</td>

</tr>

<tr>

<td>**region**</td>

<td>region/state short</td>

<td>_CA_ or _10_</td>

<td>string</td>

</tr>

<tr>

<td>**regionName**</td>

<td>region/state</td>

<td>_California_</td>

<td>string</td>

</tr>

<tr>

<td>**city**</td>

<td>city</td>

<td>_Mountain View_</td>

<td>string</td>

</tr>

<tr>

<td>**zip**</td>

<td>zip code</td>

<td>_94043_</td>

<td>string</td>

</tr>

<tr>

<td>**lat**</td>

<td>latitude</td>

<td>_37.4192_</td>

<td>float</td>

</tr>

<tr>

<td>**lon**</td>

<td>longitude</td>

<td>_-122.0574_</td>

<td>float</td>

</tr>

<tr>

<td>**timezone**</td>

<td>city timezone</td>

<td>_America/Los_Angeles_</td>

<td>string</td>

</tr>

<tr>

<td>**isp**</td>

<td>ISP name</td>

<td>_Google_</td>

<td>string</td>

</tr>

<tr>

<td>**org**</td>

<td>Organization name</td>

<td>_Google_</td>

<td>string</td>

</tr>

<tr>

<td>**as**</td>

<td>AS number and name, separated by space</td>

<td>_AS15169 Google Inc._</td>

<td>string</td>

</tr>

<tr>

<td>**reverse**</td>

<td>Reverse DNS of the IP</td>

<td>_wi-in-f94.1e100.net_</td>

<td>string</td>

</tr>

<tr>

<td>**mobile**</td>

<td>mobile (cellular) connection</td>

<td>_true_</td>

<td>bool</td>

</tr>

<tr>

<td>**proxy**</td>

<td>proxy (anonymous)</td>

<td>_true_</td>

<td>bool</td>

</tr>

<tr>

<td>**query**</td>

<td>IP used for the query</td>

<td>_173.194.67.94_</td>

<td>string</td>

</tr>

</tbody>

</table>

More information can be found [here](http://ip-api.com/docs/api:returned_values)

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
        // ip-api options
        ip: '208.80.152.201', // Wikimedia IP
        fields: 'country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query,status,message',
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
        maplink: true // add a link to the latitude and longitude location in google map
      });
    });
</script>
</body>
</html>

```