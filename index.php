<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8">
<meta name="viewport" content = "width=device-width, initial-scale=1">
<title>Leanne Friedrich</title>
<style>

body {
	font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
	color:#2f3f4d;
	background-color:#ebecf0;
	line-height:1.7
	margin:0
}


.paper {
	background-color:#ffffff
	padding:10%;
	margin-top:100px;
	display:block;
	float:left;
	overflow:hidden;
}

.papergraphics{
	min-width:200px;
	width:20%;
	padding-right:10px;
	margin:10px;
	float:left;
	margin:0;
	text-align:center;
	display:inline-block;
}

.paperimg {
	width:100px;
}

.papertext {
	margin:0;
	max-width:65%;
	min-width:180px;
	padding:5px;
	float:left;
	display:inline-block;
}

h1 {
	color:#333333;
	font-size:40pt;
}

h3 {
	font-weight:normal;
	font-size:18pt;
	color:#333333;
	margin-top:0
}

p {
	font-size:14pt;
}


a {
	text-decoration:none;
/*	font-weight:bold; */
}

a:hover{
	background-color:#eae98f;
}

.linkdiv{
	color: #2f3f4d;
	background-color:#a9dde8;
	font-size:14pt;
	text-align:center;
	min-width:180px;
	padding:5px;
	margin:10px;
	float:left;
/*	font-weight:bold; */
}

.linkdiv:hover{
	background-color:#eae98f;
}

.nakeddark{
 /* this is for naked links on dark backgrounds */
	font-size:14pt;
	color: #ffffff;
	padding: 5px;
}

.nakeddark:hover{
	color:#2f3f4d
}


</style>
</head>


<body>

<div style="min-height:50vh; height:100%; padding:10%; background:#2f3f4d">
		<h1 style="line-height:1; color:#ffffff">Leanne Friedrich</h1>
		<h3 style="color:#ffffff">Postdoc at the National Institute of Standards and Technology</h3>
		<div style="color:#ffffff">
			3D printing researcher currently exploring the physics of fluid movement in embedded direct ink writing
			
		</div>
		<div style="padding-top:20px">
			<a class="nakeddark" href="mailto:leanne.friedrich@nist.gov">Leanne.Friedrich@nist.gov</a>
		</div>	
		<div style="text-align:center; overflow:auto; padding-top:50px">
			<a href="https://scholar.google.com/citations?user=maWdc_4AAAAJ&hl=en" class="linkdiv">Google scholar</a>
			<a href="https://orcid.org/0000-0002-0382-3980" class="linkdiv">ORCiD</a>
			<a href="https://www.linkedin.com/in/leanne-friedrich-969b8947/" class="linkdiv">LinkedIn</a>
			<a href="https://github.com/leanfried" class="linkdiv">Github</a>
		</div>
		
	</div>
	
<div style="margin:40px; padding-bottom:100px; overflow:hidden">
	<h1> Graduate work </h1>
	<h3> (2020) Ph.D., Materials, University of California Santa Barbara </h3>
	<img src="rupturingdroplet.gif" class="paperimg" style="width:90%; max-width:800px"></img>
	<div class="paper">
		<div class="papergraphics">
			
			<a href="LF_dissertation.pdf" class="linkdiv">Dissertation</a>
		</div>
		<div class="papertext">
			My graduate research centered on direct ink writing (DIW) with acoustophoresis (DIWA), a 3D printing technique that enables fabrication of composite materials with tailorable properties. In DIW, ink flows through a nozzle, is written onto the print bed, and is solidified after deposition using methods such as light, heat, solvent evaporation, or change in chemical environment. DIWA modifies conventional DIW by using sound waves inside the nozzle to move around particles in the ink. By moving particles in the nozzle, we can create gradients in properties like stiffness, strength, and electrical conductivity in the printed part.
		</div>
	</div>
	
	<div class="paper">
		<div class="papergraphics">
			<img src="prim1.png" class="paperimg"></img>
			<a href="https://doi.org/10.1016/j.sna.2017.06.016" class="linkdiv">Paper</a>
			<a href="https://doi.org/10.1007/978-3-319-51493-2_14" class="linkdiv">Proceedings</a>
			<a href="https://github.com/leanfried/acoustic_control" class="linkdiv">Code and data</a>
			<a href="ASME-poster.pdf" class="linkdiv">Poster</a>
		</div>
		<div class="papertext">
			<h3> How should we choose materials for direct ink writing with acoustophoresis? </h3>
			This paper explores the material properties and printing parameters one needs to consider when choosing materials for DIWA. We use digital image analysis of particles within single filaments to assess how well we can acoustically focus particles.
		</div>
	</div>
	
	<div class="paper">
		<div class="papergraphics">
			<img src="prim2.png" class="paperimg"></img>
			<a href="https://doi.org/10.1016/j.jcis.2018.05.110" class="linkdiv">Paper</a>
			<a href="http://doi.org/10.1021/bk-2019-1315.ch008" class="linkdiv">Book chapter</a>
			<a href="http://dx.doi.org/10.17632/2236m9683h.1" class="linkdiv">Code and data</a>
			<a href="soft-matter-2019.pdf" class="linkdiv">Poster</a>
		</div>
		<div class="papertext">
			<h3> How do we keep low-viscosity filaments from breaking up? </h3>
			DIWA requires lower-viscosity inks than conventional DIW inks. At these lower viscosities, surface tension can cause filaments to break into droplets right after they leave the print nozzle. Using digital image analysis, we monitor filament stability and nozzle wetting on the fly and anticipate when the filament is about to rupture. Using fluid dynamics models from slot die coating, we can select combinations of printing parameters which should result in a stable filament.
		</div>
	</div>
	
	<div class="paper">
		<div class="papergraphics">
			<img src="prim3.png" class="paperimg"></img>
			<a href="https://doi.org/10.1021/acsapm.0c00126" class="linkdiv">Paper</a>
			<a href="http://dx.doi.org/10.17632/b6ybb9ytb5.1" class="linkdiv">Code and data</a>
		</div>
		<div class="papertext">
			<h3> How do printed structures change after they leave the nozzle? </h3>
			We can use viscoelastic liquid-like solids to support low-viscosity inks during direct ink writing. However, these support materials can deform the printed filament, leading to changes in the printed structure at various steps in the printing process.
		</div>
	</div>
	
	<div class="paper">
		<div class="papergraphics">
			<img src="prim4.png" class="paperimg"></img>
			<a href="https://doi.org/10.1016/j.addma.2020.101192" class="linkdiv">Paper</a>
			<a href="https://absuploads.aps.org/presentation.cfm?pid=15704" class="linkdiv">Talk (video)</a>
			<a href="http://dx.doi.org/10.17632/b6ybb9ytb5.1" class="linkdiv">Code and data</a>
		</div>
		<div class="papertext">
			<h3> Why do printed structures depend on writing direction? </h3>
			Direct ink writing methods which tailor the internal structure of the filament can lead to inconsistent printed material properties depending on the nozzle’s writing direction. We construct a model that can be used to identify sources of these direction dependencies, including shifts due to nozzle misalignment, miscalibration of the printer motors, fluid flowing around the nozzle, and reshaping and rotation of the filament after it leaves the nozzle.
		</div>
	</div>
	
	<div class="paper">
		<div class="papergraphics">
			<img src="prim5.png" class="paperimg"></img>
			<a href="https://doi.org/10.1016/j.bprint.2020.e00086" class="linkdiv">Paper</a>
			<a href="https://arxiv.org/abs/2003.05046" class="linkdiv">Preprint</a>
			<a href="http://dx.doi.org/10.17632/b6ybb9ytb5.1" class="linkdiv">Code and data</a>
		</div>
		<div class="papertext">
			<h3> Do printed structures change at corners? </h3>
			The properties of a printed part can change at corners due to surface tension, retracing of the print path at corners, and insufficient deceleration. We can mitigate those inconsistencies using the design of the print path and print speed.
		</div>
	</div>
	
</div>

</body>
</html>
