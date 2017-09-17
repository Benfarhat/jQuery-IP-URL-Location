# List of free IP location API services used in this script

## 0: freegeopip.net

- [x] HTTPS

> usage: https://freegeoip.net/json/208.80.152.201 // Wikimedia IP

Response:

```
{
"ip": "208.80.152.201",
"country_code": "US",
"country_name": "United States",
"region_code": "CA",
"region_name": "California",
"city": "San Francisco",
"zip_code": "94105",
"time_zone": "America/Los_Angeles",
"latitude": 37.7898,
"longitude": -122.3942,
"metro_code": 807
}
```


## 1: ip-api.com

- [ ] HTTPS

> usage: http://ip-api.com/json/208.80.152.201 // Wikimedia IP

### issue:

Starting with Firefox 23, Firefox blocks active mixed content by default. This follows a practice adopted by Internet Explorer (since version 9) and Chrome.

If your website delivers HTTPS pages, all active mixed content delivered via HTTP on this pages will be blocked by default. Consequently, your website may appear broken to users (if iframes or plugins don't load, etc.). Passive mixed content is displayed by default, but users can set a preference to block this type of content, as well.


Response:

```
{
"as": "AS14907 Wikimedia Foundation, Inc.",
"city": "Cleveland",
"country": "United States",
"countryCode": "US",
"isp": "Wikimedia Foundation, Inc.",
"lat": 41.4995,
"lon": -81.6954,
"org": "Wikimedia Foundation, Inc.",
"query": "208.80.152.201",
"region": "OH",
"regionName": "Ohio",
"status": "success",
"timezone": "America/New_York",
"zip": "44192"
}
```

## 2: geoip.nekudo.com

- [x] HTTPS

> usage: https://geoip.nekudo.com/api/208.80.152.201 // Wikimedia IP

Response:

```
{
"city": "San Francisco",
"country": {
"name": "United States",
"code": "US"
},
"location": {
"accuracy_radius": 1000,
"latitude": 37.7898,
"longitude": -122.3942,
"time_zone": "America\/Los_Angeles"
},
"ip": "208.80.152.201"
}
```

## 3: ipinfo.io

- [x] HTTPS

> usage: https://ipinfo.io/208.80.152.201/json // Wikimedia IP

Response:

```
{
"ip": "208.80.152.201",
"city": "San Francisco",
"region": "California",
"country": "US",
"loc": "37.7898,-122.3942",
"org": "AS14907 Wikimedia Foundation Inc.",
"postal": "94105"
}
```

## 4: extreme-ip-lookup.com

- [x] HTTPS

> usage: https://extreme-ip-lookup.com/json/208.80.152.201 // Wikimedia IP

Response:

```
{
"businessName": "Wikimedia Foundation Inc.",
"businessWebsite": "",
"city": "San Francisco",
"continent": "North America",
"country": "United States",
"countryCode": "US",
"ipName": "",
"ipType": "Business",
"isp": "Wikimedia Foundation, Inc.",
"lat": "37.7898",
"lon": "-122.3942",
"org": "Wikimedia Foundation Inc.",
"query": "208.80.152.201",
"region": "California",
"status": "success"
}
```

## 5: ipapi.co

- [x] HTTPS

> usage: https://ipapi.co/208.80.152.201/json // Wikimedia IP

Response:

```
{
"ip": "208.80.152.201",
"city": "San Francisco",
"region": "California",
"region_code": "CA",
"country": "US",
"country_name": "United States",
"postal": "94105",
"latitude": 37.7898,
"longitude": -122.3942,
"timezone": "America/Los_Angeles",
"asn": "AS14907",
"org": "Wikimedia Foundation, Inc."
}
```
