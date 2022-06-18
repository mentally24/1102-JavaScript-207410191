  const city=[
    {
      "data": {
          
          "timezone": {
              "id": "America\/New_York",
              "current_time": "2022-06-18T02:26:05-04:00",
              "code": "EDT",
              "is_daylight_saving": true,
              "gmt_offset": -14400
          },
          "img": "../image/01.jfif",
          "ip": "149.22.252.215",
          "type": "v4",
          "connection": {
              "asn": 201838,
              "organization": "Community Fibre Limited",
              "isp": "Cogent Communications"
          },
          "location": {
              "geonames_id": 5125771,
              "latitude": 40.7589111328125,
              "longitude": -73.97901916503906,
              "zip": "10020",
              "continent": {
                  "code": "NA",
                  "name": "North America",
                  "name_translated": "North America"
              },
              "country": {
                  "alpha2": "US",
                  "alpha3": "USA",
                  "calling_codes": [
                      "+1"
                  ],
                  "currencies": [
                      {
                          "symbol": "$",
                          "name": "US Dollar",
                          "symbol_native": "$",
                          "decimal_digits": 2,
                          "rounding": 0,
                          "code": "USD",
                          "name_plural": "US dollars"
                      }
                  ],
                  "emoji": "🇺🇸",
                  "ioc": "USA",
                  "languages": [
                      {
                          "name": "English",
                          "name_native": "English"
                      }
                  ],
                  "name": "United States",
                  "name_translated": "United States",
                  "timezones": [
                      "America\/New_York",
                      "America\/Detroit",
                      "America\/Kentucky\/Louisville",
                      "America\/Kentucky\/Monticello",
                      "America\/Indiana\/Indianapolis",
                      "America\/Indiana\/Vincennes",
                      "America\/Indiana\/Winamac",
                      "America\/Indiana\/Marengo",
                      "America\/Indiana\/Petersburg",
                      "America\/Indiana\/Vevay",
                      "America\/Chicago",
                      "America\/Indiana\/Tell_City",
                      "America\/Indiana\/Knox",
                      "America\/Menominee",
                      "America\/North_Dakota\/Center",
                      "America\/North_Dakota\/New_Salem",
                      "America\/North_Dakota\/Beulah",
                      "America\/Denver",
                      "America\/Boise",
                      "America\/Phoenix",
                      "America\/Los_Angeles",
                      "America\/Anchorage",
                      "America\/Juneau",
                      "America\/Sitka",
                      "America\/Metlakatla",
                      "America\/Yakutat",
                      "America\/Nome",
                      "America\/Adak",
                      "Pacific\/Honolulu"
                  ],
                  "is_in_european_union": false
              },
              "city": {
                  "name": "Manhattan",
                  "name_translated": "Manhattan"
              },
              "region": {
                  "fips": "",
                  "alpha2": "",
                  "name": "New York",
                  "name_translated": "New York"
              }
          }
      }
  },
  {
    "data": {
        "timezone": {
            "id": "Asia\/Shanghai",
            "current_time": "2022-06-18T14:48:04+08:00",
            "code": "CST",
            "is_daylight_saving": false,
            "gmt_offset": 28800
        },
        "ip": "115.45.29.150",
        "type": "v4",
        "connection": {
            "asn": 17962,
            "organization": "ShenZhen Topway Video Communication Co. Ltd",
            "isp": "Shenzhen Topway Video Communication Co. Ltd"
        },
        "location": {
            "geonames_id": 1795565,
            "latitude": 22.547500610351562,
            "longitude": 114.10166931152344,
            "zip": "518000",
            "continent": {
                "code": "AS",
                "name": "Asia",
                "name_translated": "Asia"
            },
            "country": {
                "alpha2": "CN",
                "alpha3": "CHN",
                "calling_codes": [
                    "+86"
                ],
                "currencies": [
                    {
                        "symbol": "CN¥",
                        "name": "Chinese Yuan",
                        "symbol_native": "CN¥",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "CNY",
                        "name_plural": "Chinese yuan"
                    }
                ],
                "emoji": "🇨🇳",
                "ioc": "CHN",
                "languages": [
                    {
                        "name": "Chinese",
                        "name_native": "中文 (Zhōngwén)"
                    }
                ],
                "name": "China",
                "name_translated": "China",
                "timezones": [
                    "Asia\/Shanghai",
                    "Asia\/Urumqi"
                ],
                "is_in_european_union": false
            },
            "city": {
                "name": "Shenzhen",
                "name_translated": "Shenzhen"
            },
            "region": {
                "fips": "CH-30",
                "alpha2": "CN-GD",
                "name": "Guangdong",
                "name_translated": "Guangdong"
            }
        }
    }
}
  ]  
  
  const sectionCenter = document.querySelector('.section-center');

  window.addEventListener("DOMContentLoaded", () => {
    displayCity(city);
    
  });
  
  const displayCity = (citys) => {
    let displayCT = citys.map((item) => {
  
      return `
      <article class="menu-item">
      <img src=${item.data.img} alt="menu item" class="photo"/>
      <div class="item-info">
        <header>
          <h4>${item.data.location.region.name}</h4>
          <h4 class="price">💰${item.data.location.country.currencies[0].name}</h4>
        </header>
        <p class="item item-text">
          IP:${item.data.ip}
        </p>
      </div>
    </article>
      
      `
  
    })
    displayCT = displayCT.join("");
  
    console.log('displayCT', displayCT);
  
    sectionCenter.innerHTML = displayCT;
  }
  
