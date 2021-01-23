"use strict";

var Categories = [
	"Winter",				"snowshad_t",
	"Coast",				"capefence2_t",
	"Texture",				"brnhnge_t",
	"Landscape",				"treeprn_t",
	"Urban",				"timesq_t",
	"Rural",				"tilt_t",
	"People",				"guitarplayer_t",
	"Mountains",				"summitoutcrop_t"
	];

var Photos = [ 
        "Bare Branches",						"treearchrindge",	1,
	"Snow Stalagmites",						"snowstag", 		1,
	"Shy Girl in Traditional Dress, Casco Viejo, Panama",		"shycascogirl",		7,
	"Mountain From Hooker Valley, New Zealand",			"hookervalleymountain",	8,
	"Mission Street, San Francisco",				"missionstreet",	5,
	"Strangler Fig, Cape Tribulation, Australia",			"stranglerfig",		4,
	"Red Fort, Agra, India",					"lightredfort",		3,
	"Footprint Figure, Pfeiffer Beach, CA",				"pfeifferfootsteps",	2,
	"Boundless Energy",						"runningicagirl",	7,
	"Crossing Lonesome Lake, NH",					"crossinglonesome",	8,
	"Lake Matheson, New Zealand",					"mathesonreflection",	4,
	"Fence With Shadows, Cape Cod",					"capefence2",		2,
	"Ghost In The Ice",						"ghostice",		3,
	"Woman and Child With Thatch, Nepal",				"womanchildthatch",	7,
	"Railings, Charlestown, MA",					"charlestownrailings",	5,
	"Tall Grass, Arlington, MA",					"restallgrass",		4,
	"Boy With Cup, China",						"littleboycup",		7,
	"Animal Prints, Arlington Reservoir",				"animalprintres",	1,
	"Signs, Kowloon, China",					"packedkowloonsigns",	5,
	"Tilting Silos",						"tilt",			6,
	"Self Portrait, Miami Airport",					"selfportrait",		7,
	"Drying Nets, Catalonia",                                       "dryingnets",           2,
	"Collecting Scraps, Lower Ninth Ward, New Orleans",		"collectingscraps",	5,
	"Trees Against Foggy Sky, Smoky Mountains",			"fogtreesshelter",	3,
	"Kids Playing Game, Peru",					"kidsgameperu",		7,
	"Hikers Ascending Mt Washington, NH",                           "ascendingjewell",	8,
	"Rebuild Or Leave, Lower Ninth Ward, New Orleans",		"stairremnants",	5,
	"Alaska Highway",						"alaskahighway",	4,
	"Tourists in New Orleans",					"twotouristsnorleans",	5,
	"Fence, Cerro Punto, Panama",					"cerropuntofence",	3,
	"Passing on the Right",						"cyclepuddles",		7,
	"Undercast Near Lakes of the Clouds Hut, NH",			"undercastnearlakes",	8,
	"Sunrise Along Skyline Drive, Virginia",			"deadtreesunrise",	4,
	"Lighthouse with Gulls",					"lighthousewithgulls",	2,
	"Courtyard, Mexico",						"courtyardmexico",	5,
	"Dramatic Sunrise, Shenandoah National Park, VA",		"dramaticsunrise",	8,
	"Split Rock, Australia",					"splitrock",		4,
	"Lighter Than Air, Romania",					"girlwithballoon",	7,
	"House Being Rebuilt, Lower Ninth Ward, New Orleans",		"donotdemo",		5,
	"Guitar Player on Railroad Tracks, NH",				"guitarplayer",		7,
	"Sun Striking Tall Grass",					"orrstallgrass",	4,
	"Crossing Foggy Lake, NH",					"crosslonesomefog",	1,
	"Wildlife Reclaiming Yard, Lower Ninth Ward, New Orleans",	"egretandtrailer",	5,
	"Shepherd and Flock, Romania",                                  "sheperdandflock",	6,
	"Smoking Break, French Quarter, New Orleans",			"characterfrquarter",   7,
	"Face and Fence, Somerville, MA",				"faceandfence",		5,
	"Swamp Reflection",						"branchesswamp",	3,
	"Fallen Birch, White Mountains, NH",				"fallenbirch",		1,
	"Window Reflections, San Fransisco",				"windowreflections",	5,
	"Benches and Shadows, Arlington, MA",				"arlresbenchshadows",	4,
	"Water Fight During Carnivale, Panama",				"bocaswaterfight",	7,
	"Children Working In Rice Paddy, China",			"childrenricepaddy",	6,
	"Herons, Arlington, MA",					"heronsandtracks",	1,
	"Drapes and Cord",						"drapescord",		3,
	"Biltmore Gardens, Asheville, NC",				"biltmoregardens",	6,
	"Mountains Along Alaska Highway, Yukon",			"dramaticbeavercreekmt",4,
	"Rocks and Trees in Fog, Virginia",				"blackhorsegapfog",	4,
	"Puerto Natales, Chile",					"womandoorway",		7,
	"Leaving Ice Cave, Alaska",					"leavingicecave",	4,
	"From Mt Osceola Trail Near East Peak, NH",			"osceolatree",		8,
	"White Sands, NM",                                              "whitesanddunesshadow",	4,
	"Stretching, China",						"manstretching",	7, 
	"Swans, Arlington, MA",						"resswans",		4,
	"Crossing the Charles Bridge Before Sunrise, Prague",		"walkingcharles",	5,
	"Family, Taquile Island, Peru",					"motherandkidsperu",	7,
	"Snow Waves",							"snowwaves",		1,
	"Alligator Rock",						"looklikealligator",	4,
	"Street Corner, Boston",					"lampmural",		5,
	"York Harbor Gravestones at Sunset",				"yorkgraves",		6,
	"Barn In A Snow Storm, Romania",				"fallingsnowbarn",      1,
	"Tree Trunk With Snowy Branches",				"treetrunksnow",	4,
	"Gay Head, Martha's Vineyard",					"lighthousegayhead",	2,
	"Leaves on Park Bench, Arlington, MA",				"leavesonbench",	3,
	"Hiking across Mt Guyot, N.H.",					"crossingguyot",	8,
	"One Too Many",							"drunkonbench",		7,
	"Sunset, Hershey Park, Pennsylvania",				"smallcoaster",		6,
	"Tree protruding through Pond, NH",				"treeprotrudingpond",	1,	
	"Ripples in Pool of Water",					"ripples",		3,	
	"Man and Dog on Bench, Buenos Aires",				"mananddogonbench",	7,
	"Mt Hood, Oregon",						"mthoodflowers",	8,
	"Near Killarney, Ireland",					"gapviewtree",		4,
	"Sun poking through Clouds",					"sunpokingclouds",	3,
	"Fish Shack, York Harbor",					"yorkharborbuoys",	2,
	"Barn Door Hinge",						"brnhnge",		3,
	"Fallen Branch On Ice",						"fallenbranchres",	1,	
	"Gettysburg Diner on Deserted Street",				"gettysburgdiner",	5,	
	"Fishing Boats, New Bedford, MA",				"newbedfordboats",	2,
	"Beduoin Boy, Sinai Peninsula",					"beduoinboy",		7,
	"Shadows in Woods",						"snowshad",		1,
	"Ellis Island",							"ellissky",		4,
	"Approaching Storm, Australia",					"pelicanstorm",		2,
	"Disassembly of Gas Tank, Worcester, MA.",			"gastank",		5,
	"Playing Soccer On Mountainside, Nepal",			"playingmtsoccer",	7,
	"Mt Monroe With Mt Washington Shadows, NH",			"monroeandshadows",	8,
	"Garage Door, Millbrook, NY",					"wingeye",		3,
	"Patio Chairs in Snow Drifts",					"resplacepatiochars",	1,
	"Lobster Trap, Ogunquit, Maine",				"lobboat",		2,
	"Paine National Park, Chile",					"hornspainedawn",	8,	
	"Train Tracks, Brunswick, Maine",				"bruntran",		6,
	"Alley, New Bedford, MA",					"newbedfordalley",	5,
	"Plant in Window",						"windowplant",		3,
	"Coast Guard Station, Martha's Vineyard",			"coastguardstation",	2,
	"French Quarter, New Orleans",					"norleanschurch",	5,	
	"Flower Poking through Barn",					"flowermonbarn",	6,	
	"Remnant of Old Pier, Gloucester",				"pier",			2,	
	"Leaves Before Raking",						"leaves",		3,	
	"Yosemite Valley",						"yoseval",		4,	
	"Family fishing at Sunset, Port Clyde, Maine", 			"ptclydesunfish",	2,
	"Door, Israel",							"isrdoor",		3,
	"Union Station, Worcester, MA.",				"unionstat",		5,	
	"Sky City, NM",                                                 "skycityladder",	6,
	"California Coast near Monterey",				"calcst",		2,
	"Sleeping it Off",						"drunk",		7,	
	"Grafitti on Pittsburgh Bridge",				"grafittibridge",	3,
	"Sinai Desert",							"sinaisunsetpeaks",	8,
	"Times Square, 1973",						"timesq", 		5,
	"Northern California Field",					"calfield",		4,
	"Rock Of Cashel, Ireland",					"cashel",		6,	
	"New Bedford Whaling Museum",					"museumboat",		2,
	"Man Walking Dog",						"mandogrindge",		4,
	"Woods During Blizzard",					"woodblzd",		1,	
	"Barn Door Handle",						"brnhndl",		3,	
	"Trees Encrusted With Ice",					"icesparkletree",	1,	
	"Alley, Israel",						"akkalley",		4,	
	"Still Life of Darkened Room",					"dormroom",		3,	
	"Reid State Park, Maine",					"reidwnt",		1,
	"From Bunnell Rock, Mt Cabot, NH",				"spikytreebunnell",	8,	
	"Peeling Paint",						"paintpl",		3,	
	"Bare Tree, Princeton, MA.",					"treeprn",		4,	
	"Torn Screen",							"tornscrn",		3,	
	"Minaret, Israel",						"akkmosq",		5,	
	"Window, Newport, RI.",						"newportwindow",	3,
	"Country Lane, Sturbridge, MA.",				"stbrgln",		6,
	"The Hand Of Winter, White Mts, NH",				"handwintertree",	8,	
	"Wine Store, Brunswick, Maine",					"brunwine",		5,
	"Midwinter Sun Through the Trees",				"wntsntr",		1,	
	"Mountains Above Clouds, White Mts, NH",			"presidentialsocean",	8,
	"FireHouse Door and Hose",					"monfiredoor",		6,
	"Barges on the Grand Canal, China",				"manybargeschina",	5,
	"Descending Mt. Pierce, N.H.",			        	"mtpierce",		8,
	"Driftwood on Quabbin Reservoir Shore",	        		"quabdrift",		4,
	"Cows, Stowe, Vt.",						"stowecows",		6,
	"San Francisco Corner",						"sanfrancorn",		7,
	"Kids Looking Through Fence, Peru",				"kidswatchpainter",	7,
	"Whaler's Knoll, Point Lobos, CA",				"whalersknoll",		2,
	"Sunset Over Dunes, Cape Cod",	 				"capesunset",		3,
	"Farm Path, Israel",					        "ispath",		6,
	"Mt Washington from Crawford Path, NH",				"icedtreescrawford",	8,
	"Sun Beam, New Zealand",					"sunbeammatheson",	4,
	"Fall in the Woods",						"treeshadleaves",	3,
	"Shadow of Tree on Snowy Rock",		  		        "snowyrocktreeshad", 	1,
	"Shadow at Low Tide",						"lowtideshad",		2,
	"Path in the Fog, North Carolina",				"foggyATNC",		8,
	"Fence and Beach, Cape Cod",			        	"capefence",		2,
	"Grand Central Terminal, NY",   				"grandcent", 		5,
	"Shadows of Tree on Barn",			        	"treeshadowonbarn",	6,
	"Japanese Lantern Festival, Jamaica Plain, MA",			"japanfestival", 	5,
	"Typing For Money, Peru",					"typingformoney",	7,
	"Boats Sheltered From Storm, Panama",				"bocasboats",		2,
	"Abandoned Bus, NH",					        "busnearmotel",		6,
	"Rippled Snow, Maine",						"ripsnow",		1,
	"Fence Reflected in Puddle",					"fencepud",		5,
	"Selling Birds, China",						"motherdaughterbirds",	7,
	"Sunset, Grand Tetons",						"tetonsunset",		8,
	"Lollipop Cloud",						"lollipopclouds",	3,
	"Old Boat, Cape Cod",						"capeboatshell", 	2,
	"Hairpin Turn Sign",						"hairpinsign",		3,
	"Southern Utah",						"southutah",		4,
	"Bum in Church Doorway, Lima, Peru",				"bumchurchdoor",	7,
	"Trains, Maine",						"trains",		6,
	"Footbridge, Wellfleet, MA.",					"footbr",		6,
	"Summit Outcropping on Mt Liberty, NH",				"summitoutcrop",	8,
	"Low Tide, Popham Beach, Maine",				"lowtidepop",		2,
	"Weaving, Nepal",						"weavingloom",		7,
	"Scale, Kennebunk",						"weighken",		2,
	"Great Hall, Ellis Island",					"ellissil",		5,
	"Swiss Alps",							"alpssilouette",	8,
	"Cloud Reflection, Arlington, MA",				"resskyreflection",	4,
	"Old Car in Barn, Tennessee",					"oldcarbarn",		6,
	"Profile of Small Boy, Peru",					"profileyawningboy",	7,
	"Northern Presidentials, NH",					"northernpresisframed",	8,
	"Heaton Creek, Roan Mt., Tennessee",				"roanmtcreek",		4,
	"Old City of Quebec",						"vintoldquebec",	5,
	"Lone Duck Amidst Ice Flows, Arlington, MA",			"loneduckres",		1,
	"Pittsburgh Fountain",						"pittfountain",		5,
	"Rime Ice on Mt Washington, NH",				"rimeicemtwash",	8,
	"Praying, Istanbul",						"prayingmosque",	7, 
	"Rock and Dead Leaves",						"rockdeadleavesrindge",	3,
	"Lone Hiker Near Lakes Hut, NH",				"southernpresiundercast", 8,
	"Light Through Doors, Hue, Vietnam",                            "huedoorreflect",       4,
	"Chair with Shadow",						"chairshadow",		1,
	"Patterns in the Sand",						"patternsbeachsand",	3,
	"Dramatic Sky, New Zealand",					"cloudsteanau",		4,
	"Christian Scientist Church, Boston",				"stairs",		5,
	"On Top of the World, White Mts, NH",				"lookingatmtclouds",	8
	];		
			
function getTitle(imageNumber)
{
  return(Photos[3*(imageNumber-1)]);
}

function getImageFilename(imageNumber)
{
  return(Photos[(3*(imageNumber-1))+1]);
}

function getImageFullFilename(imageNumber)
{
    return("photos\\images\\" + getImageFilename(imageNumber) + ".jpg");
}

function getCategory(imageNumber)
{
  return(Photos[(3*(imageNumber-1))+2]);
}

function getNumberOfPhotos()
{
  return(Photos.length/3);
}

function getNumberOfPhotosPerCategory()
{
  var numberPhotos = new Array();
  for (i = 0; i < getNumberOfCategories(); i++)
  {
    numberPhotos[i] = 0;
  }
  for (i = 1; i <= getNumberOfPhotos(); i++)
  {
    numberPhotos[getCategory(i)-1]++;
  }
  
  return(numberPhotos);
}

function getCategoryName(categoryNumber)
{
  return(Categories[2*(categoryNumber-1)]);
}

function getCategoryFilename(categoryNumber)
{
  return(Categories[(2*(categoryNumber-1))+1]);
}

function getNumberOfCategories()
{
  return(Categories.length/2);
}

function getNextImageNumber(categoryNumber, imageNumber)
{
  // Return next image for category.  0 if there is none. Next image if category is 0
  // or invalid.
  var numPhotos = getNumberOfPhotos();
  var newImageNumber = imageNumber + 1;
  
  if (categoryNumber > 0 && categoryNumber <= getNumberOfCategories())
  {
    while (newImageNumber <= numPhotos && categoryNumber !== getCategory(newImageNumber))
      newImageNumber++;
  }
  if (newImageNumber > numPhotos)
    return(0);
  else
    return(newImageNumber);
}

function getPreviousImageNumber(categoryNumber, imageNumber)
{
  // Return previous image for category.  0 if there is none. Previous image if category
  // is 0 or invalid.
  var newImageNumber = imageNumber - 1;
  
  if (categoryNumber > 0 && categoryNumber <= getNumberOfCategories())
  {
    while (newImageNumber > 0 && categoryNumber !== getCategory(newImageNumber))
      newImageNumber--;
  }
  if (newImageNumber < 1)
    return(0);
  else
    return(newImageNumber);
}

