/* eslint-disable import/no-anonymous-default-export */

export default {
  //designs here is actually RESEARCH
  designs: [
    {
      id: 13,
      title: "Exploring Dynamic Lighting Perception",
      year: "2023",
      time: "Summer",
      type: "User Centered Research",
      location: "Pittsburgh, Pennsylvania",
      headerDescription: "",
      infoDescription:
        "This is a research project investigating the influence of indoor lighting compositions on multiple dimensions of human perception.",
      firstSubtitle: "Study Setup",
      secondSubtitle: "Lighting Compositions",
      images: {
        header: "/lighting/forum.jpg",
        showcase: "/lighting/setup.jpg",
        process: ["/lighting/lighting-vars.jpg"],
      },
      details: [
        {
          image: "/lighting/room.png",
          text: [
            `Improving indoor lighting quality has a significant influence on the quality of human life, given that people spend a substantial amount of their time indoors. This study investigates the impact of various lighting compositions that individuals may encounter on a daily basis, affecting multiple dimensions of human perception of indoor lighting.`,
            ` The study was conducted in an office room at Carnegie Mellon University with 25 participants in focus groups. Participants were exposed to 16 different lighting compositions, and their subjective evaluation of indoor lighting was assessed.`,
          ],
        },
        {
          image: "/lighting/lighting-setup.jpg",
          text: [
            `The lighting compositions in the experiment were systematically varied across a full factorial design, encompassing all possible combinations of two sky conditions (sunny and overcast), two blind positions (open and closed), two electric light conditions (on and off), and three color temperature (CCT) values (2700K, 4000K, and 6500K). This comprehensive approach allowed for a thorough exploration of the interactions and effects of these factors on the perceived indoor lighting quality.`,
            `To make various lighting conditions, color-changing LEDs were bundled and securely attached to both the top and bottom of the room's existing lighting fixtures.`,
          ],
        },
        {
          image: "/lighting/question.jpg",
          text: [
            `Twenty-six participants (ages 18 to 60) evaluated the lighting conditions on dimensions of 'Coziness,' 'Liveliness,' 'Tenseness,' 'Calming,' 'Productivity,' 'Exciting,' and 'Likeability,' as well as 'Impersonality,' 'Monotonous,' and 'Vibrant' in 25-minute focus group sessions. During these sessions, researchers changed the lighting conditions, and participants individually responded to questions on an online questionnaire.`,
            `This project has received approval from the Carnegie Mellon University Institutional Review Board (IRB) for studies involving humans. `,
          ],
        },
        {
          image: "/lighting/chart.jpeg",
          text: [
            `Various statistical analysis tests were employed to measure the influence of the independent variables (Sky condition, blinds position, and CCT level) on each evaluated perception. The analysis revealed significant effects of blinds (P<0.001) and CCT (P<0.001) on participants' impressions of light, with the impact of sky condition varying across different perceptions.`,
            `Mixed interactions were identified between blinds and light CCT, blinds and sky conditions, and limited interactions between sky conditions and CCT. The findings mark an important step toward designing dynamic indoor lighting to enhance occupant perception and well-being in a given space.
          `,
          ],
        },
      ],
    },
    {
      id: 12,
      title: "Lighting Perception in VR",
      year: "2023",
      time: "Ongoing",
      type: "User Centered Research",
      location: "Pittsburgh, Pennsylvania",
      headerDescription: "",
      infoDescription:
        "This research project investigates the difference in the perception of light color temperature (CCT) in physical environments versus virtual reality environments.",
      firstSubtitle: "Study Setup",
      secondSubtitle: "VR Space Creation",
      images: {
        header: "/vr/cover.jpg",
        showcase: "/vr/diagram.jpg",
        process: ["/vr/creation.jpg"],
      },
      details: [
        {
          image: "/vr/cover.jpg",
          text: [
            `There has been a growing interest in utilizing Virtual Reality (VR) technologies in lighting design and research to assess people's preferences for various lighting designs and compositions. However, limited research exists to determine the reliability of VR environments in lighting design and research, as individuals may perceive light differently in VR environments compared to physical spaces.
            In this research project, the perception of indoor lighting in physical spaces is compared with identical VR environments. The project is a component of a larger research initiative on indoor lighting and human perception.
            `,
          ],
        },
        {
          image: "/vr/beforum.jpg",
          text: [
            `In the physical space, 16 different lighting compositions with varying CCT levels of 2700K, 4000K, and 6500K were created. The spaces were also recreated in VR using Matterport technology, which generates VR spaces through 360-degree photography of a room captured with the Matterport 360 professional camera.`,
          ],
        },
        {
          image: "/vr/combined.png",
          text: [
            `The first phase of the experiment took place in the physical space, where participants were exposed to all 16 lighting compositions. They were then asked to assess their subjective evaluation of indoor lighting on multiple dimensions, including the perception of Correlated Color Temperature (CCT) and brightness, using semantic differential scales.`,
            `Results from the first phase were analyzed, revealing variations in the perception of CCT in each composition, with CCT values of 2700K, 4000K, and 6500K. Subsequently, five different spaces exhibiting diverse perceptions of CCT were selected for testing in the VR environment.
            Currently, we are in the process of analyzing the results from the two phases using statistical analysis tests to determine the differences in the perception of light CCT between physical and VR environments.`,
          ],
        },
      ],
    },
    {
      id: 11,
      title: "Smart Loading Zones X UberEats",
      year: "2023",
      time: "Fall",
      type: "UX Research",
      location: "Pittsburgh, USA",
      headerDescription:
        "Team project with Ting-Hsuan (Jasmine) Su, Claire Cheong and Tianyang (Tina) Chen",
      infoDescription:
        "This is a UX research and design proposal to optimize the Smart Loading Zones (SLZs) in Pittsburgh for efficient and trustworthy urban mobility.",
      firstSubtitle: "Features",
      secondSubtitle: "Research Methods",
      images: {
        header: "/smart/cover.png",
        showcase: "/smart/features.png",
        process: ["/smart/methodology.jpg"],
      },
      details: [
        {
          image: "/smart/streetview-1.jpg",
          text: [
            `The City of Pittsburgh and Pittsburgh Parking Authority has introduced a pilot project "Smart Loading Zones" (SLZs) to manage curb space, with the goals of  reducing emissions, improving traffic flow and enhancing delivery efficiency. 
            The Smart Loading Zones (SLZs), distinguished by the color purple, are pay-by-the-minute short-term parking spots regulated by smart cameras. Drivers can use these zones by registering their vehicle through an app accessible by scanning a QR code on the SLZ info boards installed next to the zones.
            This research/design project aims to assess the impact of SLZs on the residents of the City of Pittsburgh, especially contract delivery drivers working with food delivery services. It also explores alternative methods of registration and interaction with these zones for a sustainable and long-lasting project effect and success.
            `,
          ],
        },
        {
          image: "/smart/hifi.png",
          text: [
            `To find an understanding of the current state of knowledge and public opinion about SLZs, we conducted comprehensive background and contextual research. This involved analyzing social media comments about SLZs and interviewing Pittsburgh delivery drivers recruited through social media for directed storytelling sessions conducted via Zoom. Additionally, we conducted guerrilla research sessions in Pittsburgh's Squirrel Hill neighborhood, where multiple purple zones are installed. We synthesized our findings through interpretation notes and affinity diagramming to gain insights into how the public in Pittsburgh currently perceives SLZs.`,
          ],
        },
        {
          image: "/smart/storyboards.jpg",
          text: [
            `From our background and contextual research we found that: `,
            `
            1- Ineffective information conveyance contributes to the lack of public awareness of SLZs, which results in people's distrust in the system.
            2- Delivery drivers want more available parking dedicated to delivery. 
            3- Delivery drivers need to ensure they are not paying an unreasonable price.
            3- Time and financial aspects heavily influence delivery drivers' parking behaviors, with less emphasis on overarching project goals like sustainability and traffic flow.`,
            `
            To address these issues, we generated multiple storyboards as alterations to the current SLZ system, with the question of "How might we bring about more direct benefits to build trust and optimize user engagement with SLZ?"
            `,
          ],
        },
        {
          image: "/smart/prototyping.png",
          text: [
            `We tested 12 different storyboards through speed dating with multiple participants familiar with SLZs to assess how each idea is perceived. By synthesizing the data, we found that:`,
            `People would like to know about parking availability, have a clear estimate of how much they are paying for parking, would prefer a more user-friendly medium to learn about and register for SLZs and would be more incentivized to use a service if there are actual monetary returns.`,
            `Based on these findings, we created first low-fidelity (screen-size paper prototype), followed by 2 high-fidelity prototypes created in Figma (onboarding vs popup) in which we embedded SLZ service and information accessible through a commonly used delivery app (UberEats). `,
          ],
        },
        {
          image: "/smart/on.gif",
          text: [
            `The prototypes captured the overall user flow of entering a delivery app, seeing SLZ-related information, being able to register for SLZ through their delivery app, interacting with the map to see SLZ availabilities close to their destination, as well as their SLZ-related account info such as balance, collected points, parking history, etc. After testing the low-fidelity prototype, we generated two high-fidelity prototypes (onboarding vs popup) to test the level of engagement with the app.`,
          ],
        },
        {
          image: "/smart/popup.gif",
          text: [
            `We tested each prototype through a think-aloud protocol in which our research participants interacted with the prototypes, gave us feedback, and shared their suggestions. We found that the popup version was more successful in conveying SLZ info to the user, and that overall, a combination of benefits, including rewards and an interactive map, incentivizes SLZ usage.`,
          ],
        },
      ],
    },

    {
      id: 9,
      title: "Origami Solar Shade",
      year: "2022",
      time: "Ongoing",
      type: "Daylight Optimization",
      location: "Pittsburgh, Pennsylvania",
      headerDescription:
        "Human quality of life and experience within buildings is significantly impacted, positively and negatively, by daylight.",
      infoDescription:
        "This project optimizes an interior blind to block glare and other negative aspects of light while permitting daylight and views to enter.",
      firstSubtitle: "Sample Solar Shades",
      secondSubtitle: "Design Process",
      images: {
        header: "/origami/0-cover.png",
        showcase: "/origami/1-bar.png",
        process: ["/origami/2-workflow.jpg"],
      },
      details: [
        {
          image: "/origami/4-shading-gif.gif",
          text: [
            `Human quality of life and experience within buildings is 
            significantly impacted, positively and negatively, by daylight. 
            Studies on the design and implementation of shades have been performed, 
            but most focus on shades on the exterior of buildings. 
            Exterior shading removes individual preference and occupant control,
            which limits their impact and application. Implementing interior blinds 
            solves the problem of individual preference, but involves trade-offs – 
            the positive aspects of daylight are lost alongside the negative. 
            This project optimizes an interior blind to block glare and 
            other negative aspects of light while permitting daylight and views to enter.`,
          ],
        },
        {
          image: "/origami/3-results.png",
          text: [
            `These goals were achieved through the design of an origami-inspired interior shade structure. 
            The shade was designed in Grasshopper and Rhino based on the Miura origami style, 
            and incorporates mirror-folded panels with openings to allow light. 
            It was then optimized to maximize daylight autonomy while minimizing solar exposure 
            and maintaining outdoor views. Simulations were created using Climate Studio and 
            Ladybug for Grasshopper, and optimization was accomplished using Octopus for Grasshopper.`,
          ],
        },
        {
          image: "/origami/5-rendering.jpg",
          text: [
            `The resulting shade concepts can find application as a product or design feature, 
                and the method developed by this study can be used by other designers studying optimization 
                or daylighting.`,
          ],
        },
      ],
    },
    {
      id: 1,
      title: "The Infinite Line Pavilion",
      type: "IASS 2019 Competition",
      time: "Fall",
      year: "2019",
      location: "Bracelona, Spain",
      headerDescription:
        "Team Project with Vernelle A.A Noel (Advisor), Karen Tran and Jamieson Pye.",
      infoDescription:
        "The Infinite Line pavilion is a lightweight fiberglass structure, designed and fabricated based on wire bending techniques developed in Trinidad & Tobago.",
      firstSubtitle: "Prototype",
      secondSubtitle: "Making the Pringle",
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
  ],

  // researches is actually DESIGN & COMPUTATION
  researches: [
    {
      id: 10,
      title: "Small Office Energy Simulation",
      year: "2020",
      time: "Fall",
      type: "Building Performance Analysis",
      location: "Los Angeles, California",
      headerDescription:
        "This project investigates the energy and daylight performance of a small office building in Los Angeles, California",
      infoDescription:
        "The analysis is performed on the building's solar, lighting, and thermal performance.",
      secondSubtitle: "Design Process",
      images: {
        header: "/energy/Cover-image.jpg",
        showcase: "/energy/0-Top image.jpg",
        process: [],
      },

      details: [
        {
          image: "/energy/1.jpg",
          text: [
            `This project investigates the energy and daylight performance of a small office building in Los Angeles, California. 
            The analysis is performed on the building's solar, lighting, and thermal performance. Based on the analysis results of the baseline model, 
            multiple iterations are proposed and discussed in order to improve the performance of the building in each metric. 
            The included images are example simulation results for the baseline scenario. 
            The software used in this project are ClimateStudio, DIVA, Archsim and LadyBug for grasshopper.`,
          ],
        },
        {
          image: "/energy/2.jpg",
          text: [
            `The analysis is performed for the day of the Winter Solstice, December 21st between 9 AM to 3 PM in order to identify 
            areas suitable for planting. A suitable area needs at least 6 hours of sunlight during this day. 
            Based on the analysis only 4.66% (392 (m2) of the selected area of 8426.88 (m2) receives less than 6 hours of direct sunlight 
            and 95.34% of the area is suitable for planting. The unsuitable area is marked by gray and dark blue.`,
          ],
        },
        {
          image: "/energy/visual.jpg",
          text: [
            `The visual comfort simulation is performed to understand the relationship between the physical conditions of the space 
                (materials, glazing size, building geometry etc.) and daylight performance in space. 
                The analysis is conducted in multiple areas: Daylight Factor (DF), Spatial Daylight Autonomy(sDA), 
                Annual Sunlight Exposure (ASE), Unified Glare Rating (UGR) and Daylight Glare Probability (DGP). 
                Per the simulation the conference room is over-lit while the majority of the work area does not get enough daylight. 
                These issues were addressed by implementing multiple daylight control strategies like adding skylight, adding overhangs, 
                changing the glazing material etc. 
                `,
          ],
        },
        {
          image: "/energy/4.jpg",
          text: [
            `Thermal simulation is performed in order to determine the impact of environmental factors on the building’s thermal comfort, 
                  zone energy load, Energy Use Intensity (EUI) etc.`,
          ],
        },
        {
          image: "/energy/5.jpg",
          text: [
            `A variety of design iterations like high-performance envelope, daylight harvesting strategies, mixed mode ventilation, 
                  implementing shading devices etc are tested in order to improve the thermal performance `,
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
      location: "Atlanta, USA",
      headerDescription:
        "Team Project with Shantanu Kushalappa, Daniel Oddo and Zach Brown.",
      infoDescription:
        "The project was an interactive design and fabrication experiment with Fologram, a plugin for Rhino and Grasshopper.",
      firstSubtitle: "Design Loop",
      secondSubtitle: "Fabrication",
      images: {
        header: "/fologram/fologram-header.jpg",
        showcase: "/fologram/fologram-case-study.jpg",
        process: [
          "/fologram/fologram-process-1.jpg",
          // "/fologram/fologram-process-2.jpg",
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
      location: "Atlanta, USA",
      headerDescription:
        "This project examines the structural and architectural potential of bending active plate materials when torsion is introduced.",
      infoDescription:
        " This study builds on research done by Slabbinck, Knippers and Körner on torsion as a form giver in plate-bending active tensile structures.",
      firstSubtitle: "Panel Type I",
      secondSubtitle: "Making a Unit",
      images: {
        header: "/woven/woven-header.jpg",
        showcase: "/woven/woven-case.jpg",
        process: ["/woven/woven-process.jpg"],
      },
      details: [
        {
          image: "/woven/woven-details1.png",
          text: [
            `The study is carried out in three parts: 1) the types of plate bends are defined as both open and closed geometries 2) multiple bends are applied to each plate to create a modular unit 3) modules are combined to propose two patterns for architectural panels. Paper strips and hand-bending were selected as material and method because of its flexibility and affordability. `,
            `The experiment utilizes single and stacked strips. The forms are achieved by alternating between the A and B sides of the strips to create arch-like forms. In the second step, the geometries are closed by bringing and taping the ends together and make self-supporting forms. The results of the first part of the study are a prototype of a self-supporting bending-active module. `,
          ],
        },
        {
          image: "/woven/woven-details2.png",
          text: [
            `Two types of bend are defined through applying torsion to a plate. Those types are categorized as an A-A Bend and an A-B Bend. These bends are classified based on the orientation of the plate’s faces at the ends of the plate. The use of plates in a bending active system allows different bent plates to be stacked. After classifying A-A and A-B bends, bent plates were stacked to explore the aesthetic and structural implications of the different combinations.`,
          ],
        },
        {
          image: "/woven/woven-details3.png",
          text: [
            `Two different modular wall panels were created by arranging the bending-active units. The wall panels are constructed with a repeating modular unit created through the application of a series of bends in paper strips, which demonstrates a way torsion can be used to develop complex forms.`,
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Robotic Hotwire Cutting",
      type: "Team Study",
      time: "Spring",
      year: "2019",
      headerDescription: "Team Project with Mehmet Sinan Bermek.",
      infoDescription:
        "The project focuses on the feasibility of automated fabrication and assembly of complex geometries using computer vision and a KUKA robotic arm. ",
      firstSubtitle: "Fabrication Workflow",
      secondSubtitle: "Geometry Design",
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

    {
      id: 5,
      title: "Urban Female Heterotopia",
      type: "Design Studio",
      time: "Spring",
      year: "2017",
      location: "Tehran, Iran",
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
      type: "Design Studio",
      time: "Spring",
      location: "Philadelphia, USA",
      headerDescription:
        "This building is an addition to the existing Athenaeum of Philadelphia.",
      infoDescription:
        "The building is designed around the Athenaeum and the Dilworth House. The form envelops the existing buildings and consists of a number of tubes and frames.",
      firstSubtitle: "The Old and The New",
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
            `This building is an addition to the existing Athenaeum of Philadelphia.
            The design creates a dialogue between the old and the new. It reflects on the
            existing architectural language of the Athenaeum and the neighborhood by
            incorporating the horizontal lines used in their facades and decorations while
            abstracting their heights and proportions. The building is designed around
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
      id: 8,
      title: "Terrace Apartment",
      year: "2011",
      time: "Fall",
      type: "Design Studio",
      location: "Tehran, Iran",
      headerDescription:
        "Space limitations in urban Tehran have led to an emphasis on maximizing indoor space.",
      infoDescription:
        "The objective in this project was to design a luxurious apartment with adequate indoor and outdoor spaces for both private and communal gathering in each of the three units.",
      firstSubtitle: "Floor Plans",
      secondSubtitle: "Design Process",
      images: {
        header: "/apartment/apartment-header.jpg",
        showcase: "/apartment/apartment-case.jpg",
        process: ["/apartment/apartment-process.jpg"],
      },
      details: [
        {
          image: "/apartment/apartment-details1.jpg",
          text: [
            `Space limitations in urban Tehran have led to an emphasis on maximizing indoor
            space when designing residential buildings. Because of this, most residences
            lack sufficient green space and, in turn, lack potential for outdoor activities.
            The objective in this project was to design a luxurious apartment with adequate
            indoor and outdoor spaces for both private and communal gathering in each of
            the three units. This was achieved by providing large terraces and balconies.`,
          ],
        },
        {
          image: "/apartment/apartment-header.jpg",
          text: [
            `Special attention was paid to create a variety of
            indoor spaces suitable for different activities.
            In the first floor apartment the entire building
            footprint is dedicated to indoor space. In the
            second floor apartment the shift in volume
            provides balconies. The third apartment takes
            up the third and fourth floors and provides five
            bedroom apartment. All 3 apartments have
            an office room located on the north-west of
            the building for client meetings. A staircase
            provides access to these office spaces from
            the ground level which removes the necessity
            of crossing clients through residential
            spaces. This aids the resident’s safety and
            professionalism.`,
            `Wood and concrete were chosen as
            the materials to adorn the façade. They
            are chosen based on their availability in
            Tehran as well as their harmony with each
            other, matching with adjacent buildings
            (which are mostly grey stone) and the
            landscape close to the site. In order to
            moderate thermal condition and light
            penetration, shades are integrated into
            the facade and installed on southern and
            western windows.`,
          ],
        },
      ],
    },

    {
      id: 7,
      title: "Tehran Media Centre",
      year: "2013",
      time: "Spring",
      type: "Design Studio",
      location: "Tehran, Iran",
      headerDescription:
        "The building is designed around the concept of a global village.",
      infoDescription:
        "The cubes are all joined together symbolizing media joining the globe.",
      firstSubtitle: "Site Plan",
      secondSubtitle: "Components",
      images: {
        header: "/mediaCentre/media-header.jpg",
        showcase: "/mediaCentre/media-case.jpg",
        process: [
          "/mediaCentre/media-process.jpg",
          // "/mediaCentre/media-process-1.jpg",
          // "/mediaCentre/media-process-2.jpg",
          // "/mediaCentre/media-process-3.jpg",
        ],
      },
      details: [
        {
          image: "/mediaCentre/media-details1.jpg",
          text: [
            `The building is designed around the concept of a global village. The cubes are all joined together symbolizing
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
  work: [
    {
      id: 1,
      title: "Somaesthetic Architecture - Carnegie Mellon University",
      position: "PhD Researcher",
      time: "Fall 2020 - Present",
      description:
        "Somaesthetic Architecture is a collaborative research project under the supervision of Dr. Azadeh Omidfar Sawyer and Dr. Daragh Byrne. Somaesthetic Architecture is a responsive educational installation is focused on collective interactive experiences, dialogue between humans and their built environment and ambient information in the context of a children museum. I have been a part of the team since the project initiation and have worked on literature research, story and concept development and design of the installation. ",
    },
    {
      id: 2,
      title: "The Infinite Line - Georgia Institute of Technology  ",
      position: "Researcher/Team member",
      time: "Summer 2019 - Summer2020",
      description:
        "I worked on the Infinite Line Pavilion under the supervision of Dr. Vernelle A. A. Noel in summer and fall 2019 at Georgia Tech. The Infinite Line Pavilion is a light weight freestanding bending active structure inspired by Wire-bending techniques native to Trinidad and Tobago. In this project I was involved in different areas from literature research, design, documentation and fabrication all the way to the presentation of the Pavilion in Barcelona in October 2019.",
    },
    {
      id: 3,
      title: "DLR Group - Los Angeles",
      position: "Architectural Designer",
      time: "May 2017 - December 2018",
      description:
        "I worked at DLR Group, Los Angeles with the Justice+ Civic and the K-12 sectors. At Justice+ Civic I was a part of the competition team for the 1.2-billion-dollar project of the Consolidated Correctional Treatment Facility (CCTF) in Los Angeles County where I worked on realizing site design, floor plan layouts, physical and digital modeling. Also, I worked on the Nebraska DCS Reception and Treatment Center project where I was involved in marketing, program development, spatial configuration, and digital modeling all the way through the end of schematic phase. In K-12 I was involved in a variety of projects ranging from marketing to design development. Also, in K-12, I created a library of educational spaces with a focus on flexibility, improving productivity and learning of students based on former projects within the firm. The purpose of the library was to facilitate design decision making and digital model making.",
    },
    {
      id: 4,
      title: "The Pennsylvania State University",
      position: "Graduate Research and Teaching Assistant",
      time: "Fall 2014- Spring 2017",
      description:
        "Between 2014-2017 I was involved on multiple research projects under the supervision of faculty members including Dr. Felecia Davis (the Felt and Woven Light), Professor Shadi Nazarian (Seamless Architecture) and professor Daniel Willis (The Green Metropolis of Tomorrow). I assisted Dr. Felecia Davis on her research projects on Felt, a set of 4 responsive textile panels that communicate and convey emotions through movement. I also assisted Dr. Davis with the Woven light pavilion, a light solar collecting tensile structure. In these projects I worked on background research, fabrication, prototyping and program realization. Also, at Penn State I assisted faculty members including professor James Cooper (Visual Communication I) and professor Peter Aeschbacher (Design Thinking and Creativity) on their courses where I assisted the class …",
    },
  ],
};
