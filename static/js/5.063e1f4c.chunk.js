(this["webpackJsonpmackenzie-website"]=this["webpackJsonpmackenzie-website"]||[]).push([[5],{100:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},104:function(e,t,n){"use strict";function a(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,"a",(function(){return a}))},150:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(17),i=n(40),s=n(4),o=function(e){var t=e.data;return Object(s.jsx)("article",{className:"degree-container",children:Object(s.jsxs)("header",{children:[Object(s.jsx)("h4",{className:"degree",children:t.degree}),Object(s.jsxs)("p",{className:"school",children:[Object(s.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},c=function(e){var t=e.data;return Object(s.jsxs)("div",{className:"education",children:[Object(s.jsx)("div",{className:"link-to",id:"education"}),Object(s.jsx)("div",{className:"title",children:Object(s.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(s.jsx)(o,{data:e},e.school)}))]})};c.defaultProps={data:[]};var l=c,u=function(e){var t=e.data;return Object(s.jsxs)("article",{className:"jobs-container",children:[Object(s.jsxs)("header",{children:[Object(s.jsxs)("h4",{children:[Object(s.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(s.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(s.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(s.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(s.jsxs)("div",{className:"experience",children:[Object(s.jsx)("div",{className:"link-to",id:"experience"}),Object(s.jsx)("div",{className:"title",children:Object(s.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(s.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var m=d,h=n(7),p=n(8),g=n(15),b=n(16),y=n(100),f=n(98),j=function(e){var t=e.handleClick,n=e.active,a=e.label;return Object(s.jsx)("button",{className:"skillbutton ".concat(n[a]?"skillbutton-active":""),type:"button",onClick:function(){return t(a)},children:a})},v=function(e){var t=e.data,n=e.categories,a=t.category,r=t.competency,i=t.title,o={background:n.filter((function(e){return a.includes(e.name)})).map((function(e){return e.color}))[0]},c=Object(f.a)(Object(f.a)({},o),{},{width:"".concat(String(Math.min(100,Math.max(r/5*100,0))),"%")});return Object(s.jsxs)("div",{className:"skillbar clearfix",children:[Object(s.jsx)("div",{className:"skillbar-title",style:o,children:Object(s.jsx)("span",{children:i})}),Object(s.jsx)("div",{className:"skillbar-bar",style:c}),Object(s.jsxs)("div",{className:"skill-bar-percent",children:[r," / 5"]})]})};v.defaultProps={categories:[]};var O=v,E=function(e){Object(g.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleChildClick=function(e){a.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,a){return Object(f.a)(Object(f.a)({},n),{},Object(y.a)({},a,e===a&&!t.buttons[a]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},a.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(f.a)(Object(f.a)({},e),{},Object(y.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),a}return Object(p.a)(n,[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(s.jsx)(O,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(s.jsx)(j,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"skills",children:[Object(s.jsx)("div",{className:"link-to",id:"skills"}),Object(s.jsxs)("div",{className:"title",children:[Object(s.jsx)("h3",{children:"Skills"}),Object(s.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(s.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(s.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}]),n}(a.Component);E.defaultProps={skills:[],categories:[]};var w=E,k=function(e){var t=e.data,n=e.last;return Object(s.jsxs)("li",{className:"course-container",children:[Object(s.jsxs)("a",{href:t.link,children:[Object(s.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(s.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(s.jsx)("div",{className:"course-dot",children:Object(s.jsx)("p",{className:"course-name",children:" \u2022"})})]})};k.defaultProps={last:!1};var x=k,C=function(e){var t,n=e.data;return Object(s.jsxs)("div",{className:"courses",children:[Object(s.jsx)("div",{className:"link-to",id:"courses"}),Object(s.jsx)("div",{className:"title",children:Object(s.jsx)("h3",{children:"Selected Courses"})}),Object(s.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(s.jsx)(x,{data:e,last:n===t.length-1},e.title)})))})]})};C.defaultProps={data:[]};var S=C,N=function(){return Object(s.jsxs)("div",{className:"references",children:[Object(s.jsx)("div",{className:"link-to",id:"references"}),Object(s.jsx)("div",{className:"title",children:Object(s.jsx)(r.b,{to:"/contact",children:Object(s.jsx)("h3",{children:"References are available upon request"})})})]})},R=[{title:"Digital Hardware Systems",number:"ECE 327",link:"https://ucalendar.uwaterloo.ca/2021/COURSE/course-ECE.html",university:"University of Waterloo"},{title:"Multivariable Control Systems",number:"ECE 488",link:"https://ucalendar.uwaterloo.ca/2021/COURSE/course-ECE.html",university:"University of Waterloo"},{title:"Analog Integrated Circuits",number:"ECE 444",link:"https://ucalendar.uwaterloo.ca/2021/COURSE/course-ECE.html",university:"University of Waterloo"},{title:"Machine Learning",number:"CS 229",link:"https://www.coursera.org/learn/machine-learning/home/welcome",university:"Stanford"},{title:"Radio-Wave Systems",number:"ECE 475",link:"https://ucalendar.uwaterloo.ca/2021/COURSE/course-ECE.html",university:"University of Waterloo"},{title:"Integrated Digital Electronics",number:"ECE 445",link:"https://ucalendar.uwaterloo.ca/2021/COURSE/course-ECE.html",university:"University of Waterloo"},{title:"Communication Systems 1",number:"ECE 318",link:"https://ucalendar.uwaterloo.ca/2021/COURSE/course-ECE.html",university:"University of Waterloo"},{title:"Radio Frequency and Microwave Circuits",number:"ECE 373",link:"https://ucalendar.uwaterloo.ca/2021/COURSE/course-ECE.html",university:"University of Waterloo"},{title:"Electromechanical Energy Conversion",number:"ECE 260",link:"https://ucalendar.uwaterloo.ca/2021/COURSE/course-ECE.html",university:"University of Waterloo"},{title:"Probability Theory and Statistics",number:"ECE 316",link:"https://ucalendar.uwaterloo.ca/2021/COURSE/course-ECE.html",university:"University of Waterloo"},{title:"Electronic Devices",number:"ECE 331",link:"https://ucalendar.uwaterloo.ca/2021/COURSE/course-ECE.html",university:"University of Waterloo"},{title:"Electromagnetic Fields and Waves",number:"ECE 375",link:"https://ucalendar.uwaterloo.ca/2021/COURSE/course-ECE.html",university:"University of Waterloo"},{title:"Analog Control Systems",number:"ECE 380",link:"https://ucalendar.uwaterloo.ca/2021/COURSE/course-ECE.html",university:"University of Waterloo"}].reverse(),P=[{school:"University of Waterloo",degree:"B.S. Electrical and Computer Engineering",link:"https://uwaterloo.ca/",year:2022}],D=[{company:"Tesla Inc.",position:"DOJO Hardware Engineering",link:"https://www.tesla.com/",daterange:"July 2022 - Current",points:["Designed, managed, tested and integrated a custom NIC with PCIe, DDR and 100G QSFP for interfacing with out proprietary network protocol","Monitored and enhanced the efficiency of a product production line through the implementation of quality improvements, in addition to constructing automated end-of-line testers to augment throughput significantly","Developed RTL, C++ drivers and nodejs backend to improve hardware tracking and logging across our system","Authored RTL to transform an I2C slave into an AXI master, enabling the onboard microcontroller to access the internal register bus and data bus, thereby expanding system capabilities.","Solely design and wrote automated production scale provisioning and test software for silicon","Successfully brought up and debugged an advanced fabric interfacing card equipped with sophisticated SERDES for ultra-high-speed 50Gb/s per channel communication as well as 200G QSFP-DD"]},{company:"Tesla Inc.",position:"DOJO Hardware Engineering Intern",link:"https://www.tesla.com/",daterange:"August 2021 - January 2022",points:["Redesigned control board for cabinet telemetry and control as well as daughter card for offloading complexity","Engineered a super capacitor hot swap controller, enabling seamless hardware insertion into a live cabinet, thus promoting operational convenience and safety","Effectively tested and integrated a large, complex system comprising intricate harnessing, control systems, and high-power delivery, ensuring overall system coherence and performance"]},{company:"Tesla Inc.",position:"Autopilot Hardware Engineering Intern",link:"https://www.tesla.com/",daterange:"January 2020 - May 2021",points:["Wrote hardware validation testing suites for the team including Ethernet Switch, GPS, VRM bringup in Python to reduce repetitive tasks and build software infrastructure","Identified, investigated, and rectified reliability issues prevalent on the AutoPilot board in temperature-varying environments, enhancing overall system robustness","Performed time-domain reflectometry on SGMII and 1000Base-T1 signal paths to verify signal integrity and performed eye-diagram analysis for intersymbol distortion","Validated multi-phase buck converter load transient step response and open-loop phase response; meeting requirements"]},{company:"University of Waterloo",position:"Undergraduate Research Assistant",link:"https://kazootechnology.com/",daterange:"April 2020 - August 2020",points:["Engineered a 60GHz mmWave radar system specifically for non-contact vital sign detection, pushing the boundaries of health technology","Devised a sophisticated algorithm utilizing Matlab, wavelet transformation, and auto-correlation, proficient in detecting breath rates at distances of up to 10 meters, showcasing innovation in remote vital sign detection","Established a client-server architecture in Python and C++, designed to seamlessly offload processing in real-time, thereby enhancing system performance and efficiency"]},{company:"Kazoo Technology",position:"Electronics Designer and Innovator Intern",link:"https://kazootechnology.com/",daterange:"August 2019 - April 2020",points:["Leveraged fundamental engineering principles and the scientific method to reverse engineer capacitive touchscreen stylus hardware. Successfully devised and validated theories through comprehensive simulations, verified by the construction of a hardware prototype","Reversed engineered capacitive touch screen stylus hardware to adapt technology to special usecase","Designed both discrete and integrated analog amplifiers as well as digitally controlled filters, leveraging LTSpice simulations and progressing to building and testing physical prototypes.","Design and packaged manufacturable products for consumer use","Designed 200MSP/s ADC with FPGA dev-board in Altium including touch screen protocol detection and spoofing for touch screen stylus testing"]},{company:"AR Modular RF",position:"Radio Frequency Hardware Engineering Intern",link:"https://www.arww-modularrf.com/home_modular_rf.cfm",daterange:"January 2019 - April 2019",points:["Developed automated RF amplifier testing suites to improve testing time efficiency using LabView and Python","Implemented systems to flash unique MAC addresses to IP enabled products","Characterized RF products to convey technical specs and information to the marketing department and datasheets"]},{company:"Evertz Microsystems",position:"Systems Engineering Intern",link:"https://evertz.com/",daterange:"May 2018 - August 2018",points:["Executed comprehensive research and deployed strategies for impedance and phase matching of 25G QSFP differential pairs, significantly enhancing signal integrity","Successfully captured schematics for an Ethernet switch encompassing RGMII, 1000BTX, and SGMII, including the incorporation of magnetics and impedance matching for optimal performance","Engineered specialized firmware to identify incoming video encryption streams, further enhancing user interaction through the development of a UI overlay system for seamless user feedback"]},{company:"Evertz Microsystems",position:"Systems Engineering Intern",link:"https://evertz.com/",daterange:"September 2017 - December 2017",points:["Developed FPGA firmware for capturing and replaying 10GB/s fiber optic layer 2 ethernet packets with realtime hardware timestamping","Designed and implemented a DDR3 circular buffering system, implemented pre-fetching and caching, while also supporting DMA to DDR3, allowing generation of Wireshark files from Ethernet captured frames","Troubleshot hardware short-circuits on high-density PCBs and spearheaded the design of a more robust active fusing system to safeguard boards against potential damage"]},{company:"Dozr",position:"Fullstack Software Engineering",link:"https://dozr.com/",daterange:"January 2017 - April 2017",points:["Engineered React components to enhance the functionality of our internal tooling website.","Pioneered the creation of automated web crawlers, designed to extract user data from websites and automatically update the database, thereby enhancing accuracy and efficiency"]}],A=n(99),I=[{title:"Python",competency:5,category:["Languages"]},{title:"TypeScript",competency:4,category:["Languages"]},{title:"JavaScript",competency:4,category:["Languages"]},{title:"C++",competency:3,category:["Languages"]},{title:"C",competency:3,category:["Languages"]},{title:"Verilog",competency:4,category:["Languages"]},{title:"VHDL",competency:4,category:["Languages"]},{title:"Java",competency:3,category:["Languages"]},{title:"Solidity",competency:4,category:["Languages"]},{title:"Bash",competency:3,category:["Languages"]},{title:"LabView",competency:3,category:["Languages","Tools"]},{title:"MatLab",competency:3,category:["Languages","Tools"]},{title:"PHP",competency:2,category:["Languages"]},{title:"Altium Designer",competency:5,category:["Tools"]},{title:"LTSpice",competency:4,category:["Tools"]},{title:"Ansys HFSS",competency:4,category:["Tools"]},{title:"Quartus",competency:3,category:["Tools"]},{title:"Vivado",competency:3,category:["Tools"]}].map((function(e){return Object(f.a)(Object(f.a)({},e),{},{category:e.category.sort()})})),U=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],L=Object(A.a)(new Set(I.reduce((function(e,t){var n=t.category;return e.concat(n)}),[]))).sort().map((function(e,t){return{name:e,color:U[t]}})),M=["Education","Experience","Skills","Courses","References"];t.default=function(){return Object(s.jsx)(i.a,{title:"Resume",description:"Mackenzie Goodwin's Resume. Tesla, Kazoo Technology, Evertz Microsystems, Soon to be Apple ;).",children:Object(s.jsxs)("article",{className:"post",id:"resume",children:[Object(s.jsx)("header",{children:Object(s.jsxs)("div",{className:"title",children:[Object(s.jsx)("h2",{"data-testid":"heading",children:Object(s.jsx)(r.b,{to:"resume",children:"Resume"})}),Object(s.jsx)("div",{className:"link-container",children:M.map((function(e){return Object(s.jsx)("h4",{children:Object(s.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{className:"button",href:"/files/MackenzieGoodwinResume.pdf",children:"PDF Version"})]})}),Object(s.jsx)(l,{data:P}),Object(s.jsx)(m,{data:D}),Object(s.jsx)(w,{skills:I,categories:L}),Object(s.jsx)(S,{data:R}),Object(s.jsx)(N,{})]})})}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(100);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(34);var r=n(104),i=n(41);function s(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||Object(r.a)(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=5.063e1f4c.chunk.js.map