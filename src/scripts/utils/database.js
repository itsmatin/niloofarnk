export default {
  researches: [
    {
      id: 1,
      title: "The Infinite Line Pavilion",
      type: "IASS 2019 Competition",
      time: "Fall",
      year: "2019",
      location: "Bracelona, Spain",
      headerDescription:
        "Team Project with Vernelle A.A Noel(Advisor), Karen Tran and Jamieson Pye.",
      infoDescription:
        "The Infinite Line pavilion is a lightweight fiberglass structure, designed and fabricated based on wire bending techniques developed in Trinidad & Tobago.",
      firstSubtitle: "",
      secondSubtitle: "",
      images: {
        header: "/pavilion/pavilion-header.jpg",
        showcase: "/pavilion/pavilion-case.jpg",
        process: ["/pavilion/pavilion-process.jpg"],
      },

      details: [
        {
          image: "/pavilion/pavilion-details1.jpg",
          text: [
            `The Infinite Line pavilion is a lightweight fiberglass structure, designed and fabricated based on wire bending techniques developed
            in Trinidad & Tobago. Wire-bending is a traditional craft that employs wire, fiberglass rods, and other materials to create sculptural
            forms and structures.`,
          ],
        },
        {
          image: "/pavilion/pavilion-details2.jpg",
          text: [
            `The initial design and fabrication explorations were done as a part of course work for a Computational Making class taught by
            Professor Vernelle A. A. Noel. In that course, our class developed the “The Dawn and the Dusk” Pavilion design. “The Infinite Line”
            is a second iteration on the “The Dawn and the Dusk” pavilion, using different structural geometries.`,
          ],
        },
        {
          image: "/pavilion/pavilion-details3.jpg",
          text: [
            `“The Infinite Line” design follows a closed modular geometry and incorporates a fiberglass structure and a fabric skin. The
            module is a single “pringle”, which is an Enneper surface. To form a Pringle, 10’ fiberglass rods are taped into 80’ bundles by
            overlapping pairs of rods at their midpoints. These pairs are doubled and taped together, to form 80’ bundles with a 4-rod
            thickness. Fiberglass tape is used for bundling, These 80’ bundles are joined end-to-end to form 80’ perimeter circles.
            Opposite points of the loop are joined in the middle to form a flat figure-8. Then, the ends are joined to complete the pringle.
            The final structure is composed of 3 of these Pringles, interlocked at 120 degrees.
            `,
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Augmented Reality with Fologram",
      type: "Advanced Productions",
      time: "Fall",
      year: "2019",
      headerDescription:
        "Team Project with Shantanu Kushalappa and Daniel Oddo.",
      infoDescription:
        "The project was an interactive design and fabrication experiment with Fologram, a plugin for Rhino and Grasshopper.",
      firstSubtitle: "",
      secondSubtitle: "",
      images: {
        header: "/fologram/fologram-header.jpg",
        showcase: "/fologram/fologram-case.jpg",
        process: [
          "/fologram/fologram-process-1.jpg",
          "/fologram/fologram-process-2.jpg",
          "/fologram/fologram-process-3.jpg",
        ],
      },
      details: [
        {
          image: "/fologram/fologram-details1.jpg",
          text: [
            `We created a digital base model in grasshopper/Rhino and used the Fologram for Hololense to map and directly fabricate it in space. Our
         platform was a set of poles screwed to a wooden base. We used 1/8” steel rods to fabricate the loop geometries. Using the platform as a base, we
         used Fologram to design on top of our physical model.`,
          ],
        },
        {
          image: "/fologram/fologram-details2.jpg",
          text: [
            `After welding all the connections, the model was removed from the base, painted and put
         back on the base again. Also, we designed multiple digital information layers on top of the physical model which we could interact with through
         the Fologram app for both our phones and the Hololens. `,
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Woven Wall Panels",
      type: "Independent Study",
      time: "Fall",
      year: "2019",
      headerDescription:
        "The project is on bending active systems and torsion as a form driver in plate geometries.",
      infoDescription:
        "The study builds on principles from previous research on plate-bending-active tensile structures. ",
      firstSubtitle: "",
      secondSubtitle: "",
      details: [
        { image: "/woven/woven-details-1.png" },
        { image: "/woven/woven-details-2.png" },
        // { image: "/woven/woven-details-3.png" },
      ],

      images: {
        header: "/woven/woven-header.png",
        showcase: "/woven/woven-case.png",
        process: ["/woven/woven-process.png"],
      },
    },
    {
      id: 4,
      title: "Complex Geometry Foam Cutting",
      type: "Team Study",
      time: "Spring",
      year: "2019",
      headerDescription: "Team Project with Mehmet Sinan Bermek.",
      infoDescription:
        "The project focuses on the feasibility of automated fabrication and assembly of complex geometries using computer vision and a KUKA robotic arm. ",
      firstSubtitle: "",
      secondSubtitle: "",
      images: {
        header: "/foamcutting/foamcutting-header.jpg",
        showcase: "/foamcutting/foamcutting-case.jpg",
        process: [
          "/foamcutting/foamcutting-process-1.jpg",
          "/foamcutting/foamcutting-process-2.jpg",
          "/foamcutting/foamcutting-process-3.jpg",
          "/foamcutting/foamcutting-process-4.jpg",
          "/foamcutting/foamcutting-process-5.jpg",
          "/foamcutting/foamcutting-process-6.jpg",
        ],
      },
      details: [
        {
          image: "/foamcutting/foamcutting-details1.jpg",
          text: [
            `The project focuses on the feasibility of automated fabrication and assembly of complex
              geometries using computer vision and a KUKA robotic arm.
              The process consists of two parts:
              1- Parametric design and hot wire foam cutting of complex geometries using the KUKA.
              2- Probing the environment through a visible spectrum camera to correct or generate
              pick up and placement paths.`,
            `The project was done in a team of two. I was responsible for programming the robotic art
              to cut the geometries in foam with a hot wire. Grasshopper scripting was used to 1) design
              the geometry and shapes to be hotwired by the KUKA and 2) program the KUKA motions.
              The design goal was to achieve complex geometries by the application of simple cuts.
              The shapes were designed by generating parametric planes and trimming a cube against
              them. Each shape was generated by application of up to 3 straight and/or V cuts.`,
          ],
        },
      ],
    },
  ],

  designs: [
    {
      id: 5,
      title: "Urban Female Heterotopia",
      type: "M.Arch. Capstone Project",
      time: "Spring",
      year: "2017",

      headerDescription:
        "This project addresses the experiences of women in public space in Tehran, Iran",
      infoDescription:
        "The segregation-power matrix was developed to analyze and identify methods and devices of spatial segregation through architecture",

      firstSubtitle: "Context Analysis",
      secondSubtitle: "Design Process",

      images: {
        header: "/capstone/heterotopia-header.jpg",
        showcase: "/capstone/heterotopia-case.png",
        process: [
          "/capstone/heterotopia-process-1.jpg",
          "/capstone/heterotopia-process-2.jpg",
          "/capstone/heterotopia-process-3.jpg",
          // "/capstone/heterotopia-process-4.jpg",
          "/capstone/heterotopia-process-5.jpg",
          "/capstone/heterotopia-process-6.jpg",
        ],
      },

      details: [
        {
          image: "/capstone/heterotopia-details1.jpg",
          text: [
            `This project addresses the experiences of women in public space in Tehran, Iran by analyzing and critiquing the spatial power dynamics in society. The segregation-power matrix was developed to analyze and identify methods and devices of spatial segregation through architecture. It was used to find the zones where the separating line is not rigid. The matrix decodes power structures, hierarchy within each space, and the experience of users within them.`,
            `Along College Bridge to Valiasr Square there are several universities and cultural centers. Enghelab street is the book store district in the city. These locations attract a significant population of students and academics. The chosen site is an old theatre --Cinema Enghelab—on Enghelab street. The site is chosen because it holds a memory specific to the area and is surrounded by spaces representing both sides of power: where segregation is intensified and where counter-spaces are developed. The site model demonstrates the concentration of segregated areas (negative space) and counter-spaces (red positive spaces) on the site.`,
          ],
        },
        {
          image: "/capstone/heterotopia-details2.jpg",
          text: [
            `The design emphasizes female experiences that exist in social space. From the outside, the building is a simple box, not revealing the interior scheme. This holds the memory of the theatre’s form, and emphasizes the concept of a heterotopia by hiding in plain sight.`,
            `There is a line running throughout the building, separating spaces and emotions. It’s the extruded line of separation that does not always have physical form. The design takes that line, twists it, breaks and manipulates it. The line is produced in conjunction with the program of each space.`,
          ],
        },
        {
          image: "/capstone/heterotopia-details3.jpg",
          text: [
            `Depending on the space, the separating line takes the form of furniture, openings, corridors, shelves etc. Nowhere does it touch the perimeter of the building. The space creates the feeling of being excluded, watched, or limited.`,
            `Each space is tuned to demonstrate spatial power dynamics in order to make them obvious. Each program demonstrates separation in a different way. The book store divides books by stereotypical gendered readership while breaking the lines between the shelves.`,
          ],
        },
        {
          image: "/capstone/heterotopia-details4.jpg",
          text: [
            ` Similarly, the gallery divides spaces into those dedicated to male and female artists. Cafes and game cafes unify or divide users, and other uses, like the socializing and lobby spaces, make use of sight and vantage to create power dynamics in the space. The space stretches out to the rooftop, where only pieces of the line remain`,
          ],
        },
        {
          image: "/capstone/heterotopia-details5.jpg",
        },
      ],
    },
    {
      id: 6,
      title: "Allusion",
      year: "2016",
      type: "Design Studio IV",
      time: "Spring",
      location: "USA, California",
      headerDescription:
        "This building is an addition to the existing Athenaeum of Philadelphia.",
      infoDescription:
        "The building is designed around the Athenaeum and the Dilworth House. The form envelops the existing buildings and consists of a number of tubes and frames.",
      firstSubtitle: "Framing The City",
      secondSubtitle: "Design Process",
      images: {
        header: "/athaneum/athaneum-header.jpg",
        showcase: "/athaneum/athaneum-framing-the-city.jpg",
        process: [
          "/athaneum/athaneum-process-1.jpg",
          "/athaneum/athaneum-process-2.jpg",
          "/athaneum/athaneum-process-3.jpg",
        ],
      },

      details: [
        {
          image: "/athaneum/athaneum-details1.jpg",
          text: [
            `his building is an addition to the existing Athenaeum of Philadelphia.
            The design creates a dialogue between the old and the new. It reflects on the
            existing architectural language of the Athenaeum and the neighborhood by
            incorporating the horizontal lines used in their facades and decorations while
            abstracting their heights and proportions.`,
            `The building is designed around
            the Athenaeum and the Dilworth House. The form envelops the existing
            buildings and consists of a number of tubes and frames, which create a
            straightforward circulation within the building and frame different views: To
            Washington Square, to the interior, Existing Garden, to the Dilworth House.`,
            `The Dilworth House is integrated into the program.
            On the first level, there is a gift shop and Café at the
            Dilworth House which create a variety of event spaces
            focused on the auditorium and the lobby. Other levels
            of the house are exhibit areas.
            The program is designed in two different zones. The
            eastern side accomamodates administration, reading
            areas, and more private spaces, while the western
            side contains the more public and active spaces.
            The gallery space in the main building is designed
            around a ramp, and thrusts forward to a view to the
            city and the Washington square.
            The roof structure mimics the structure of the ramp.
            The façade material is Brass, which stands out from
            the materials used in adjacent buildings. `,
          ],
        },
        {
          image: "/athaneum/athaneum-details2.jpg",
          text: [
            `The prevailing wind during the summer is from the south-west. During the hot season he operable
            windows will allow the wind in, and when the air is exiting the builing
            through the operable openings on the ceiling, the interior spaces
            will be cooled by natural cross ventilation.`,
            `The warm interior air which rises and collects around the ceiling will exit the operable windows provided at the ceiling and will result a cooling effect. The sloped roof will direct the rain water to the pipes which eventually lead to the tank located at the basement. The rainwater will be collected at the Tank. The glazings allow sunlight in, which will reduce the need to electrical lighting during the day. This will help with heating up the building during the cold seasons. Geothermal system will work with the HVAC system by preheating the supply air before it’s heated again to the desired indoor temperature.`,
            `The HVAC system is used for providing fresh air within the building when natural ventilation is not an option, as well as heating and cooling the building. The operable windows provided at the administration zone will allow for natural ventilation. The windows also will let natural light in during the working hours and will help with cutting down the need for electrical lighting. The sloped roof will help collect water, which will be gathered in a tank located at the basement. The water then will be filtered and used for flushing the toilets, cleaning purposes, and watering the gardens. `,
          ],
        },
      ],
    },
    {
      id: 7,
      title: "Tehran Media Centre",
      images: { header: "/main.jpg" },
      year: "2013",
      time: "Spring",
      type: "Architectural Design III",
      location: "Iran, Tehran",
      headerDescription:
        "I designed a Media Center for Tehran as the project for my Architectural Design Studio III.",
      infoDescription:
        "The building is designed to represent the five continents of the world by dividing it into five cubes.",
      firstSubtitle: "",
      secondSubtitle: "",
      images: {
        header: "/mediaCentre/media-header.jpg",
        showcase: "/mediaCentre/media-case.jpg",
        process: [
          "/mediaCentre/media-process-1.jpg",
          "/mediaCentre/media-process-2.jpg",
          "/mediaCentre/media-process-3.jpg",
        ],
      },
      details: [
        {
          image: "/mediaCentre/media-details1.jpg",
          text: [
            `I designed a Media Center for Tehran as the project for my Architectural
          Design Studio III.
          The building is designed to represent the five continents of the world by
          dividing it into five cubes. The cubes are all joined together symbolizing
          media joining the globe. The building is integrated with the site topography
          to reduce intervention into nature. `,
          ],
        },
        {
          image: "/mediaCentre/media-details2.jpg",
          text: [
            `The structure is divided into three
          parts. Diagrid structure is used to
          suspend the northern end of the
          building, while conventional frame
          structure is used in the middle part.
          Moreover, in the southern part the
          load bearer cylinder conveys the load
          of the building to the foundation.`,
          ],
        },
      ],
    },
  ],

  academics: [
    {
      id: "I",
      title: "Carnegie Mellon University",
      degree: "PhD - Building Performance & Diagnostics",
      year: "2020 - 2023",
      image: "carnegiemellon.png",
    },
    {
      id: "II",
      title: "Georgia Institute of Technology",
      degree: "M.S - School of Architecture",
      year: "2019 - 2020",
      image: "georgiatech.png",
    },
    {
      id: "III",
      title: "Pennsylvania State University",
      degree: "M.Arch - Stuckeman School of Architecture and Landscape",
      year: "2014 - 2017",
      image: "pennstate.png",
    },
    {
      id: "IV",
      title: "Azad University West Tehran Branch",
      degree: "B.Arch - Department of Architecture",
      year: "2009 - 2014",
      image: "azad.png",
    },
  ],
};
