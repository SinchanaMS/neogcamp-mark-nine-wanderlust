import "./styles.css";
import { useState } from "react";

var places = {
  Asia: [
    {
      site: "Mount Fuji, Japan",
      rating: "4.5/5",
      image:
        "https://media.istockphoto.com/photos/fuji-mountain-and-cherry-blossoms-in-spring-japan-picture-id1137578281?k=20&m=1137578281&s=612x612&w=0&h=xUs8Td53ZJihlXjf_6TrFAC2NJ8a6R25RTo3I69gN3k=",
      description:
        "Mount Fuji, Japanese Fuji-san, also spelled Fujisan, also called Fujiyama or Fuji no Yama, is the highest mountain in Japan. It is a volcano that has been dormant since its last eruption, in 1707, but is still generally classified as active by geologists. The mountain is the major feature of Fuji-Hakone-Izu National Park (1936), and it is at the centre of a UNESCO World Heritage site designated in 2013."
    },
    {
      site: "Dead Sea, Israel",
      rating: "4.4/5",
      image:
        "https://www.planetware.com/wpimages/2021/02/israel-dead-sea-region-top-attractions-ein-kedim-hot-springs.jpg",
      description:
        "Dead Sea, also called Salt Sea, is a salt lake between Israel and Jordan in southwestern Asia. The Dead Sea's high salt levels mean that people can easily float on its surface due to its natural buoyancy. Alongside being incredibly salty, the Dead Sea is famous for being the lowest point on Earth."
    },
    {
      site: "Phuket, Thailand",
      rating: "4.4/5",
      image:
        "https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGh1a2V0JTJDJTIwdGhhaWxhbmR8ZW58MHx8MHx8&w=1000&q=80",
      description:
        "Phuket is Thailand's largest island, and arguably the most famous. Blue waters, sandy beaches, spicy Thai cuisine, and excellent snorkeling and diving are all part of the appeal. This place is also famous for its vibrant nightlife, colorful night markets, delicious seafood and the white marble Big Buddha."
    },
    {
      site: "Jaipur, India",
      rating: "4.3/5",
      image:
        "https://media.istockphoto.com/photos/amber-fort-and-maota-lake-jaipur-rajasthan-india-picture-id1135820309?k=20&m=1135820309&s=612x612&w=0&h=HTvXNokiDKSuL_D_jcEX8nwVMy5hs0zXBJ0E_zI5lxg=",
      description:
        "Jaipur is famous as the Pink City of India and is also the Capital City of Rajasthan. The city is famous for Rajasthani traditional Jewelry, traditional fabrics and handicrafts and of course, the traditional Rajasthani cuisine."
    },
    {
      site: "Luang Prabang, Laos",
      rating: "4.3/5",
      image:
        "https://images.ctfassets.net/wqkd101r9z5s/6OHRsBIDSbUFE2lFfuJpX1/e3535babc740ccc789bf015067a7cc0b/LPB_1.jpg?w=1365&q=95",
      description:
        "Luang Prabang, the ancient capital of Luang Prabang Province in northern Laos, lies in a valley at the confluence of the Mekong and Nam Khan rivers. Luang Prabang is well known for its numerous Buddhist temples and monasteries."
    }
  ],
  America: [
    {
      site: "Yosemite National Park, California",
      rating: "4.4/5",
      image:
        "https://media.cntraveler.com/photos/53e2f09edddaa35c30f658e5/4:3/w_935,h_701,c_limit/yosemite-mountains.jpg",
      description:
        "Yosemite National Park is in California’s Sierra Nevada mountains. It is best known for its waterfalls, towering granite monoliths, deep valleys and ancient giant sequoia trees."
    },
    {
      site: "Everglades National Park, Florida",
      rating: "4.3/5",
      image:
        "https://wsvn.com/wp-content/uploads/sites/2/2020/01/hypatia-h_dd3d8887c5671f7b500ab5d5203ac313-h_065c3f24605d94382250ada874827c79.jpg?quality=60&strip=color&w=1024",
      description:
        "Everglades National Park is a 1.5-million-acre wetlands preserve on the southern tip of the U.S. state of Florida. The Everglades is made up of coastal mangroves, sawgrass marshes and pine flatwoods that are home to hundreds of rare and endangered species like the Manatee, American crocodile, and the elusive Florida panther.."
    },
    {
      site: "Yellowstone National Park, Wyoming",
      rating: "4.3/5",
      image:
        "https://www.planetware.com/photos-large/USWY/usa-wyoming-yellowstone-grand-prismatic-spring.jpg",
      description:
        "Yellowstone National Park preserves more than 10,000 hydrothermal features -- an extraordinary collection of hot springs, mudpots, fumaroles, travertine terraces and geysers. Microorganisms called thermophiles -- meaning “heat loving” -- live in these features and give the park its brilliant colors."
    },
    {
      site: "Times Square, New York",
      rating: "4.2/5",
      image: "http://www.airpano.ru/files/images_for_articles/image1.jpg",
      description:
        "One of the world's busiest pedestrian areas, it is also the hub of the Broadway Theater District and a major center of the world's entertainment industry. Times Square is one of the world's most visited tourist attractions."
    },
    {
      site: "Kauai , Hawaii",
      rating: "4.4/5",
      image:
        "https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/Napali_0_1.jpg?itok=S0scQXWt",
      description:
        "Kauai is an island in the Central Pacific, part of the Hawaiian archipelago. It's officially nicknamed “The Garden Isle” due to its verdant and lush landscapes. It is also known for its many waterfalls including Waipoo Falls tumbling 800 feet into Waimea Canyon."
    }
  ],
  Europe: [
    {
      site: "Lisbon, Portugal",
      rating: "4.5/5",
      image:
        "https://media.istockphoto.com/photos/lisbon-portugal-skyline-picture-id467824014?k=20&m=467824014&s=612x612&w=0&h=MPle1lcdcaHc4kmkIp_mHDyJmbq1RUD0Vf3kD6EaH8c=",
      description:
        "Lisbon is Portugal’s hilly, coastal capital city. famous for its sunny weather, great nightlife, colorful buildings, Fado music, and friendly locals. It's also home to famous landmarks like the Belem Tower and Jerónimos Monastery. As for food, Lisbon is famous for its seafood and Pastéis de Belém, a type of custard tart."
    },
    {
      site: "Dubrovnik, Croatia",
      rating: "4.5/5",
      image:
        "https://www.washingtonpost.com/resizer/6kplfgw3GDLBHMDPcUMvKJnGlPs=/arc-anglerfish-washpost-prod-washpost/public/RSFSGKH7TMI6XB7APYD33HHCOA.jpg",
      description:
        "Dubrovnik is a city in southern Croatia. Popular for its spectacular seafront location on the Dalmatian Coast, coupled with its evocative and historic Old Town district, Dubrovnik is home to Croatia's artistic and intellectual elite and offers numerous cultural activities and festivals."
    },
    {
      site: "Budapest, Hungary",
      rating: "4.6/5",
      image:
        "https://media.architecturaldigest.com/photos/573b45e1e374e9494022bdb4/master/pass/budapest-travel-guide-01.jpg",
      description:
        "Budapest is the capital and the most populous city of Hungary. It is mostly famous for its historical sites like the Chain Bridge which has become the symbol of the city. It is one of the most photogenic cities in Europe. It is also known for its hospitality and spas."
    },
    {
      site: "London, England",
      rating: "4.6/5",
      image: "https://images.hertz.com/rentacar/misc/London-Hero.jpg",
      description:
        "London is the capital and largest city of England and the United Kingdom. From history and culture to fine food and exceedingly good times London has everything. London's vibrant culture is this melting pot of cultures, nationalities, and languages – which makes London so attractive to travelers worldwide."
    },
    {
      site: "Amsterdam, Netherlands",
      rating: "4.5/5",
      image:
        "https://www.holland.com/upload_mm/2/3/6/75601_fullimage_aerial%20view%20of%20downtown%20amsterdam%2C%20the%20netherlands%20during%20a%20dramatic%20beautiful%20sunset%20foto%20repistu%20via%20istock.jpg",
      description:
        "Amsterdam is known as the city of canals. It is famous for the beautiful historic buildings, the Rijksmuseum, the canals, the Anne Frank house, the Red Light district."
    }
  ],
  Australia: [
    {
      site: "Sydney Opera House, New South Wales",
      rating: "4.4/5",
      image:
        "https://c1.wallpaperflare.com/preview/468/54/559/architecture-australia-photo-lights.jpg",
      description:
        "The Sydney Opera House is a multi-venue performing arts centre in Sydney. It constitutes a masterpiece of 20th century architecture. Its significance is based on its unparalleled design and construction; its exceptional engineering achievements and technological innovation and its position as a world-famous icon of architecture"
    },
    {
      site: "Great Barrier Reef Marine Park, Queensland",
      rating: "4.5/5",
      image:
        "https://images.squarespace-cdn.com/content/v1/584a143a9de4bb0a92fdf9b9/1554780799840-CXV4VINGQJHZA2CTL4PW/breef.jpg",
      description:
        "The Great Barrier Reef Marine Park protects the world's largest coral reef.The park protects the coral and wildlife species living amongst the reef whcih accounts for 10% of the world's coral reefs. The protected area covers the 1,500 species of fish, 5,000 species of mollusks, and the abundant other marine life."
    },
    {
      site: "Sydney Harbour Bridge, New South Wales",
      rating: "4.6/5",
      image:
        "https://traveldigg.com/wp-content/uploads/2016/06/Sydney-Harbour-Bridge-720x404.jpg",
      description:
        "The Sydney Harbour Bridge is a heritage-listed steel through arch bridge in Sydney, spanning Sydney Harbour from the central business district to the North Shore. It spans about 500 metres (1,650 feet), making it one of the longest steel-arch bridges in the world."
    },
    {
      site: "Blue Mountains National Park, New South Wales",
      rating: "4.4/5",
      image:
        "https://www.lastminutedaytours.com.au/wp-content/uploads/2019/10/Blue-mountains-2000.jpg",
      description:
        "Blue Mountains National Park is a vast region west of Sydney, Australia, and part of the Great Dividing Range. It is the home of the famous Three Sisters in Katoomba. Discover iconic lookouts and waterfalls, historic walking tracks, mountain biking, Aboriginal culture, adventure sports, and camping - right on Sydney's doorstep."
    },
    {
      site: "Kakadu National Park, Northern Territory",
      rating: "4.4/5",
      image:
        "https://www.hemamaps.com/-/media/images/website/content/explore/location-profiles-images/kakadu-np/twin-falls-kakadu-national-park.ashx?la=en&hash=5F1425E78FDD055331D3F9E79489401D80CB9CA4",
      description:
        "Kakadu National Park is an enormous, biodiverse nature reserve in Australia’s Northern Territory. With terrain encompassing wetlands, rivers and sandstone escarpments, it’s home to some 2,000 plant species and wildlife from saltwater crocodiles and flatback turtles to birds. Aboriginal rock paintings, dating to prehistoric times, can be viewed at sites such as Nourlangie, Nanguluwur and Ubirr."
    }
  ]
};

var listOfPlaces = Object.keys(places);

export default function App() {
  var [placesToVisit, setPlacesToVisit] = useState("Asia");

  function selectContinent(place) {
    setPlacesToVisit(place);
  }

  var siteName = "Wanderlusts";

  return (
    <div className="App">
      <header>
        <section className="section">
          <h1 className="opaque">Welcome {siteName}!!!</h1>
          <small className="opaque">
            “I am not the same, having seen the moon shine on the other side of
            the world” – Mary Anne Radmacher
          </small>
          <p className="opaque">
            Feeling adventurous? How about our top picks for your consideration?
          </p>
          <div className="opaque">
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
              <li key={place.site} className="places-list non-bullet-list">
                <div className="place">{place.site}</div>
                <div className="place">{place.rating}</div>
                <div className="place">
                  <img className="site-pics" src={place.image} alt="" />{" "}
                </div>
                <div
                  className="place"
                  style={{
                    textAlign: "left",
                    fontSize: "small",
                    maxWidth: "50%",
                    margin: "auto"
                  }}
                >
                  {place.description}{" "}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
