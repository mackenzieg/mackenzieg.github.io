# Detecting Microplastics Using Microwave Resonance
![Cavity Resonator](/images/projects/microplastics-resonator/cavityresonator.jpg)

Microplastics are polymer-based fragments with a characteristic size below 5mm. The presence of microplastics has significant impacts on human health, aquatic life, and the quality of soil. 

Microplastics has leaked to every part of our life. Every week, we ingest an average of five grams of plastic, the equivalent of the weight of a credit card. This is dangerous in the long term as studies have found that microplastics can cause damage to human cells, trigger allergic reactions, and lead to inflammatory bowel disease. As a result, the microplastics presence in drinking water and other processed foods has created alarming food safety concerns. In aquatic environments, microplastics have deleterious effects including but not limited to the reduction of predatory performance and neurofunction activities, dysfunction in reproduction, and even mortality. Its threat to the aquatic life consequently results in disturbance in the ecosystem. In agriculture where control is essential for plant growth, the presence of microplastics in the soil can affect soil water dynamics and soil aggregation. For example, microplastics can create channels for water movement and thus accelerate soil water evaporation, which is undesired for controlling and monitoring plant growth. 

Unfortunately, despite the negative impact microplastics can bring to both the environment and people, microplastics are still found in abundance in the natural environment, including marine, wastewater, fresh water, and food. This is largely due to the consumption of plastic products, the rising food delivery culture, and use of laundry machines to wash clothes which makes plastic fibres to break apart easily. From a global study conducted in 2018, microplastics are already found in 93% of the bottled water brands in different countries. Due to the short life span of plastics products, only 29% of the manufactured plastics are recycled, and 71% are released into the environment as waste every year. 


## Motivation
Given the current circumstance, microplastic detection, quantification, and monitoring are the first step to improve the situation faced by the natural environment. By constantly monitoring the microplastic concentration of a system, pollution trends can be developed to analyze areas with an imminent threat. By identifying the type of microplastics, the source of microplastics can be tracked to target the problem and a possible solution is determined for a reduction in microplastic use of the source. Currently, there is no global standardization of sampling methods for counting microplastics in water. This is mainly because the current microplastic detection technologies have different strengths and are non-ideal: some methods provide higher accuracy than other methods, and all methods still all have long testing times (ranging from a few days to weeks depending on the sample size). Hence different groups may prefer different methods depending on their specific interest. Consequently, interlaboratory comparisons cannot be performed for more in-depth analysis and microplastic studies. Therefore, a rapid and accurate microplastic detection method is recommended to be developed and used as a standardized sampling method. Although it is ambitious to make a new method as a standardized method used in the industry, rapid testing is more efficient and preferred than slow testing as long as the accuracy of the test result is ensured. Having a robust microplastic detection system will speed up the analysis of microplastics in many sectors. Hence this is enough motivation for the design team to explore further the need for a new microplastic detection method.

## System Level Design
The system-level overview is depicted below. The design is composed of three main sections: the sample solution, the pump system, and the resonator. The vector network analyzer (VNA) lies outside the system box as it is a peripheral measurement tool.

![System Level Design](/images/projects/microplastics-resonator/systemleveldesign.jpg)

The project box is shown below:

![Design Assembly](/images/projects/microplastics-resonator/designassembly.jpg)

## Cavity Resonator Design
There are lots of good resources that can be found online for designing cavity resonators. I found this article to be particularly helpful: [here](http://www.physics.usu.edu/Wheeler/EM/Notes/EMNotes15Waveguides.pdf). In summary the whole system can be characterized by the resonant frequency equation for the TE101 mode:
![Resonant Rquation](https://wikimedia.org/api/rest_v1/media/math/render/svg/6444444c53951ef6ae840da977f52ecaa9358ecd)

Here are some of the interesting results from the design.
### E Field Concentration
![E Field Concentration](/images/projects/microplastics-resonator/efieldconcentration.gif)
### H Field Concentration
![E Field Concentration](/images/projects/microplastics-resonator/hfieldconcentration.gif)

## Test Results