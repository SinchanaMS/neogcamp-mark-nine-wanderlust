import "./styles.css";
import { useState } from "react";

var places = {
  Asia: [
    {
      site: "Mount Fuji, Japan",
      rating: "4.5/5",
      image:
        "https://media.istockphoto.com/photos/fuji-mountain-and-cherry-blossoms-in-spring-japan-picture-id1137578281?k=20&m=1137578281&s=612x612&w=0&h=xUs8Td53ZJihlXjf_6TrFAC2NJ8a6R25RTo3I69gN3k="
    },
    {
      site: "Dead Sea, Israel",
      rating: "4.4/5",
      image:
        "https://www.planetware.com/wpimages/2021/02/israel-dead-sea-region-top-attractions-ein-kedim-hot-springs.jpg"
    },
    {
      site: "Phuket, Thailand",
      rating: "4.4/5",
      image:
        "https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGh1a2V0JTJDJTIwdGhhaWxhbmR8ZW58MHx8MHx8&w=1000&q=80"
    },
    {
      site: "Jaipur, India",
      rating: "4.3/5",
      image:
        "https://media.istockphoto.com/photos/amber-fort-and-maota-lake-jaipur-rajasthan-india-picture-id1135820309?k=20&m=1135820309&s=612x612&w=0&h=HTvXNokiDKSuL_D_jcEX8nwVMy5hs0zXBJ0E_zI5lxg="
    },
    {
      site: "Luang Prabang, Laos",
      rating: "4.3/5",
      image:
        "https://images.ctfassets.net/wqkd101r9z5s/6OHRsBIDSbUFE2lFfuJpX1/e3535babc740ccc789bf015067a7cc0b/LPB_1.jpg?w=1365&q=95"
    }
  ],
  America: [
    {
      site: "Yosemite National Park, California",
      rating: "4.4/5",
      image:
        "https://media.cntraveler.com/photos/53e2f09edddaa35c30f658e5/4:3/w_935,h_701,c_limit/yosemite-mountains.jpg"
    },
    {
      site: "Everglades National Park, Florida",
      rating: "4.3/5",
      image:
        "https://wsvn.com/wp-content/uploads/sites/2/2020/01/hypatia-h_dd3d8887c5671f7b500ab5d5203ac313-h_065c3f24605d94382250ada874827c79.jpg?quality=60&strip=color&w=1024"
    },
    {
      site: "Yellowstone National Park, Wyoming",
      rating: "4.3/5",
      image:
        "https://www.planetware.com/photos-large/USWY/usa-wyoming-yellowstone-grand-prismatic-spring.jpg"
    },
    {
      site: "Times Square, New York",
      rating: "4.2/5",
      image: "http://www.airpano.ru/files/images_for_articles/image1.jpg"
    },
    {
      site: "Kauai , Hawaii",
      rating: "4.4/5",
      image:
        "https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/Napali_0_1.jpg?itok=S0scQXWt"
    }
  ],
  Europe: [
    {
      site: "Lisbon, Portugal",
      rating: "4.5/5",
      image:
        "https://media.istockphoto.com/photos/lisbon-portugal-skyline-picture-id467824014?k=20&m=467824014&s=612x612&w=0&h=MPle1lcdcaHc4kmkIp_mHDyJmbq1RUD0Vf3kD6EaH8c="
    },
    {
      site: "Dubrovnik, Croatia",
      rating: "4.5/5",
      image:
        "https://www.washingtonpost.com/resizer/6kplfgw3GDLBHMDPcUMvKJnGlPs=/arc-anglerfish-washpost-prod-washpost/public/RSFSGKH7TMI6XB7APYD33HHCOA.jpg"
    },
    {
      site: "Budapest, Hungary",
      rating: "4.6/5",
      image:
        "https://media.architecturaldigest.com/photos/573b45e1e374e9494022bdb4/master/pass/budapest-travel-guide-01.jpg"
    },
    {
      site: "London, England",
      rating: "4.6/5",
      image: "https://images.hertz.com/rentacar/misc/London-Hero.jpg"
    },
    {
      site: "Amsterdam, Netherlands",
      rating: "4.5/5",
      image:
        "https://www.holland.com/upload_mm/2/3/6/75601_fullimage_aerial%20view%20of%20downtown%20amsterdam%2C%20the%20netherlands%20during%20a%20dramatic%20beautiful%20sunset%20foto%20repistu%20via%20istock.jpg"
    }
  ],
  Australia: [
    {
      site: "Sydney Opera House, New South Wales",
      rating: "4.4/5",
      image:
        "https://c1.wallpaperflare.com/preview/468/54/559/architecture-australia-photo-lights.jpg"
    },
    {
      site: "Great Barrier Reef Marine Park, Queensland",
      rating: "4.5/5",
      image:
        "https://images.squarespace-cdn.com/content/v1/584a143a9de4bb0a92fdf9b9/1554780799840-CXV4VINGQJHZA2CTL4PW/breef.jpg"
    },
    {
      site: "Sydney Harbour Bridge, New South Wales",
      rating: "4.6/5",
      image:
        "https://traveldigg.com/wp-content/uploads/2016/06/Sydney-Harbour-Bridge-720x404.jpg"
    },
    {
      site: "Blue Mountains National Park, New South Wales",
      rating: "4.4/5",
      image:
        "https://www.lastminutedaytours.com.au/wp-content/uploads/2019/10/Blue-mountains-2000.jpg"
    },
    {
      site: "Kakadu National Park, Northern Territory",
      rating: "4.4/5",
      image:
        "https://www.hemamaps.com/-/media/images/website/content/explore/location-profiles-images/kakadu-np/twin-falls-kakadu-national-park.ashx?la=en&hash=5F1425E78FDD055331D3F9E79489401D80CB9CA4"
    }
  ]
};

var listOfPlaces = Object.keys(places);

export default function App() {
  var [placesToVisit, setPlacesToVisit] = useState("Asia");
  console.log(placesToVisit);

  function selectContinent(place) {
    setPlacesToVisit(place);
  }

  var siteName = "Wanderlusts";

  return (
    <div className="App">
      <header>
        <section class="section">
          <h1 class="opaque">Welcome {siteName}!!!</h1>
          <small class="opaque">
            “I am not the same, having seen the moon shine on the other side of
            the world” – Mary Anne Radmacher
          </small>
          <p class="opaque">
            Feeling adventurous? How about our top picks for your consideration?
          </p>
          <div class="opaque">
            {listOfPlaces.map(function (place) {
              return (
                <button onClick={() => selectContinent(place)}>{place}</button>
              );
            })}
          </div>
        </section>
      </header>
      <hr />

      <div>
        <ul>
          {places[placesToVisit].map((place) => {
            return (
              <li className="places-list non-bullet-list">
                <div className="place">{place.site}</div>
                <div className="place">{place.rating}</div>
                <div className="place">
                  <img className="site-pics" src={place.image} alt="" />{" "}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
