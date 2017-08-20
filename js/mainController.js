(function() {

  var AppCtrl = function($mdPanel, $scope, $mdDialog, ngMaterial) {

    $scope._mdPanel = $mdPanel;


    $scope.imgSource2015 = [{
        thumb: "images/2015/DSC02758/thumb.jpg",
        image: "images/2015/DSC02758/DSC02758.jpg",
        title: "This isn’t a Fairy Tale",
        materials: "acrylic and spray paint on canvas",
        dem: "34 in. x 24 in."
      },
      {
        thumb: "images/2015/DSC02761/thumb.jpg",
        image: "images/2015/DSC02761/DSC02761.jpg",
        title: "FUCK",
        materials: "acrylic, latex, paper, and spray paint on wood",
        dem: "24 in.x 24 in."
      },
      {
        thumb: "images/2015/DSC02762/thumb.jpg",
        image: "images/2015/DSC02762/DSC02762.jpg",
        title: "Nervous",
        materials: "crochet, spray paint, and acrylic on canvas",
        dem: "34 in. x 23x in."
      },
      {
        thumb: "images/2015/DSC02763/thumb.jpg",
        image: "images/2015/DSC02763/DSC02763.jpg",
        title: "Something is Wrong",
        materials: "Crochet, spray paint, and acrylic on canvas",
        dem: "34 in. x 34 in."
      },
      {
        thumb: "images/2015/DSC02764/thumb.jpg",
        image: "images/2015/DSC02764/DSC02764.jpg",
        title: "Something is Wrong (Detail)",
        materials: "Crochet, spray paint, and acrylic on canvas",
        dem: "34 in. x 34 in."
      },
      {
        thumb: "images/2015/DSC03028/thumb.jpg",
        image: "images/2015/DSC03028/DSC03028.jpg",
        title: "I Miss The Old Me",
        materials: "Crochet, acrylic, spray paint, and latex on canvas",
        dem: "31 in. x 29 in."
      },
      {
        thumb: "images/2015/DSC03029/thumb.jpg",
        image: "images/2015/DSC03029/DSC03029.jpg",
        title: "Is This Clever Enough Asshole",
        materials: "Crochet dipped in latex",
        dem: "31 in. x 28 in."
      },
      {
        thumb: "images/2015/DSC03030/thumb.jpg",
        image: "images/2015/DSC03030/DSC03030.jpg",
        title: "Is This Clever Enough Asshole (Detail)",
        materials: "Crochet dipped in latex",
        dem: "31 in. x 28 in."
      },
      {
        thumb: "images/2015/DSC03055/thumb.jpg",
        image: "images/2015/DSC03055/DSC03055.jpg",
        title: "There is I in Team",
        materials: "acrylic and spray paint on wood",
        dem: "24 in. x 24 in."
      },
      {
        thumb: "images/2015/DSC03059/thumb.jpg",
        image: "images/2015/DSC03059/DSC03059.jpg",
        title: "It is Impossible",
        materials: "acrylic and spray paint on wood",
        dem: "48 in. x 48 in."
      },
      {
        thumb: "images/2015/DSC03054/thumb.jpg",
        image: "images/2015/DSC03054/DSC03054.jpg",
        title: "But I’m still Lonley (Detail)",
        materials: "Crochet and spray paint, wood, and plastic",
        dem: "29 in. x 23 in."
      },
      {
        thumb: "images/2015/DSC03719/thumb.jpg",
        image: "images/2015/DSC03719/DSC03719.jpg",
        title: "But I’m still Lonley (Installation)",
        materials: "Crochet and spray paint, wood, and plastic",
        dem: "29 in. x 23 in."
      },
      {
        thumb: "images/2015/DSC03723/thumb.jpg",
        image: "images/2015/DSC03723/DSC03723.jpg",
        title: "Fuck",
        materials: "acrylic and spray paint on canvas",
        dem: "36 in. x 30 in."
      },
      {
        thumb: "images/2015/DSC03725/thumb.jpg",
        image: "images/2015/DSC03725/DSC03725.jpg",
        title: "Soon There Won’t be any of Me Left",
        materials: "latex and thread",
        dem: "24 in. x 31 in."
      },
      {
        thumb: "images/2015/DSC03726/thumb.jpg",
        image: "images/2015/DSC03726/DSC03726.jpg",
        title: "Part of Me is Dead",
        materials: "acrylic and spray paint on canvas",
        dem: "34 in. x 24 in."
      },
      {
        thumb: "images/2015/DSC03729/thumb.jpg",
        image: "images/2015/DSC03729/DSC03729.jpg",
        title: "Part of Me is Dead (Installation)",
        materials: "latex, thread, and cinder block",
        dem: "32 in. x 36 in."
      },
      {
        thumb: "images/2015/DSC03731/thumb.jpg",
        image: "images/2015/DSC03731/DSC03731.jpg",
        title: "This isn’t a Fairy Tale (Detail)",
        materials: "latex, thread, and cinder block",
        dem: "32 in. x 36 in."
      },
      {
        thumb: "images/2015/DSC03732/thumb.jpg",
        image: "images/2015/DSC03732/DSC03732.jpg",
        title: "Therapy Over",
        materials: "collage materials from our life, latex, acrylic, spray paint on wood",
        dem: "48 ft. x 48 ft."
      }

    ];

    $scope.imgSource2016 = [{
        thumb: "images/2016/4/thumb.jpg",
        image: "images/2016/4/4.jpg",
        title: "It’s so hot",
        materials: "Acrylic, thread, spray paint on canvas",
        dem: "12 in. x 12 in."
      },
      {
        thumb: "images/2016/IMG_0761/thumb.jpg",
        image: "images/2016/IMG_0761/IMG_0761.jpg",
        title: "Bye Now",
        materials: "old painting and spray paint",
        dem: "40 in. x 40 in."
      },
      {
        thumb: "images/2016/IMG_1570/thumb.jpg",
        image: "images/2016/IMG_1570/IMG_1570.jpg",
        title: "Let me wipe the vomit from my mouth",
        materials: "screen print on cotton napkin",
        dem: "12 in. x 12 in."
      },
      {
        thumb: "images/2016/IMG_1571/thumb.jpg",
        image: "images/2016/IMG_1571/IMG_1571.jpg",
        title: "Ignorance is Bliss",
        materials: "thread, spray paint, screen print on canvas",
        dem: "36 in. x 36 in."
      },
      {
        thumb: "images/2016/IMG_1575/thumb.jpg",
        image: "images/2016/IMG_1575/IMG_1575.jpg",
        title: "DeJa Vu’",
        materials: "spray paint on old quilt",
        dem: "36 in. x 72 in."
      },
    ];

    $scope.imgSourceCrochet = [{
        thumb: "images/crochet/DSC02035/thumb.jpg",
        image: "images/crochet/DSC02035/DSC02035.jpg",
        title: "Untitled",
        materials: "Crochet, UV sensitive fishing line",
        dem: ""
      },
      {
        thumb: "images/crochet/DSC02032/thumb.jpg",
        image: "images/crochet/DSC02032/DSC02032.jpg",
        title: "Untitled",
        materials: "Crochet, UV sensitive fishing line",
        dem: ""
      },
      {
        thumb: "images/crochet/DSC02039/thumb.jpg",
        image: "images/crochet/DSC02039/DSC02039.jpg",
        title: "Untitled",
        materials: "Crochet, UV sensitive fishing line",
        dem: ""
      },
      {
        thumb: "images/crochet/DSC02040/thumb.jpg",
        image: "images/crochet/DSC02040/DSC02040.jpg",
        title: "Untitled",
        materials: "Crochet, UV sensitive fishing line",
        dem: ""
      },
      {
        thumb: "images/crochet/DSC02424/thumb.jpg",
        image: "images/crochet/DSC02424/DSC02424.jpg",
        title: "No I don’t know",
        materials: "thread, acrylic, spray paint on canvas",
        dem: "30 in. x 24 in."
      },
      {
        thumb: "images/crochet/DSC02425/thumb.jpg",
        image: "images/crochet/DSC02425/DSC02425.jpg",
        title: "No I don’t know (Detail)",
        materials: "thread, acrylic, spray paint on canvas",
        dem: "30 in. x 24 in."
      },
      {
        thumb: "images/crochet/DSC02427/thumb.jpg",
        image: "images/crochet/DSC02427/DSC02427.jpg",
        title: "Sometimes I Miss the Old Me",
        materials: "thread, acrylic, spray paint on canvas",
        dem: "24 in. x 24 in."
      },
      {
        thumb: "images/crochet/DSC02552/thumb.jpg",
        image: "images/crochet/DSC02552/DSC02552.jpg",
        title: "it means everything and nothing",
        materials: "thread, acrylic, spray paint on canva",
        dem: "30 in. x 40 in."
      },
      {
        thumb: "images/crochet/DSC02553/thumb.jpg",
        image: "images/crochet/DSC02553/DSC02553.jpg",
        title: "get over it",
        materials: "thread, acrylic, spray paint on canvas",
        dem: "37 in. x 40 in."
      },
      {
        thumb: "images/crochet/DSC02554/thumb.jpg",
        image: "images/crochet/DSC02554/DSC02554.jpg",
        title: "Yo",
        materials: "thread, acrylic, spray paint on canvas",
        dem: "26 in. x 29 in."
      },
      {
        thumb: "images/crochet/DSC02555/thumb.jpg",
        image: "images/crochet/DSC02555/DSC02555.jpg",
        title: "I moved here for you fucker",
        materials: "thread, acrylic, spray paint on canvas",
        dem: "32 in. x 40 in."
      },
      {
        thumb: "images/crochet/DSC02746/thumb.jpg",
        image: "images/crochet/DSC02746/DSC02746.jpg",
        title: "It’s so hot",
        materials: "Acrylic, thread, spray paint on canvas",
        dem: "12 in. x 12 in."
      },
      {
        thumb: "images/crochet/DSC02749/thumb.jpg",
        image: "images/crochet/DSC02749/DSC02749.jpg",
        title: "Everything can’t be Perfect ",
        materials: "thread, acrylic, spray paint on canvas",
        dem: "30 in. x 30 in."
      },
      {
        thumb: "images/crochet/P5052538/thumb.jpg",
        image: "images/crochet/P5052538/P5052538.jpg",
        title: "Dating Advice (Installation)",
        materials: "Acrylic, thread",
        dem: ""
      },
      {
        thumb: "images/crochet/P5052540/thumb.jpg",
        image: "images/crochet/P5052540/P5052540.jpg",
        title: "Dating Advice (Installation)",
        materials: "Acrylic, thread",
        dem: ""
      },
      {
        thumb: "images/crochet/P5052543/thumb.jpg",
        image: "images/crochet/P5052543/P5052543.jpg",
        title: "Dating Advice (Installation)",
        materials: "Acrylic, thread",
        dem: ""
      }

    ];

    $scope.imgSourceQuilts = [{
        thumb: "images/quilts/blackout/thumb.jpg",
        image: "images/quilts/blackout/blackout.jpg",
        title: "Birds in a Plastic Bag",
        materials: "screen print on fabric",
        dem: "36 in. x 36 in."
      },
      {
        thumb: "images/quilts/birds_in_a_plastic_bag/thumb.jpg",
        image: "images/quilts/birds_in_a_plastic_bag/birds_in_a_plastic_bag.jpg",
        title: "Blackout",
        materials: "screen print on fabric",
        dem: "36 in. x 36 in."
      },
      {
        thumb: "images/quilts/DSC03848/thumb.jpg",
        image: "images/quilts/DSC03848/DSC03848.jpg",
        title: "I feel stuck",
        materials: "screen print on vintage quilt",
        dem: "56 in. x 51 in."
      },
      {
        thumb: "images/quilts/DSC03850/thumb.jpg",
        image: "images/quilts/DSC03850/DSC03850.jpg",
        title: "Moving On",
        materials: "Screen print on vintage quilt",
        dem: "56 in. x 51 in."
      },
      {
        thumb: "images/quilts/DSC03853/thumb.jpg",
        image: "images/quilts/DSC03853/DSC03853.jpg",
        title: "Drowning",
        materials: "screen print on vintage quilt",
        dem: "70 in. x 33 in."
      },
      {
        thumb: "images/quilts/DSC03855/thumb.jpg",
        image: "images/quilts/DSC03855/DSC03855.jpg",
        title: "You are a Real Piece",
        materials: "Acrylic on vintage quilt",
        dem: "54 in. x 68 in."
      },
      {
        thumb: "images/quilts/Moveable_memory/thumb.jpg",
        image: "images/quilts/Moveable_memory/Moveable_memory.jpg",
        title: "Moveable Memories",
        materials: "acrylic, metal, wood, and wheels",
        dem: "36 in. x 36 in."
      },
      {
        thumb: "images/quilts/the_childhood_fib_scandal/thumb.jpg",
        image: "images/quilts/the_childhood_fib_scandal/the_childhood_fib_scandal.jpg",
        title: "The Childhood Fib Scandal",
        materials: "spray paint on fabric",
        dem: "30 in. x 30 in."
      },
      {
        thumb: "images/quilts/tom_boy/thumb.jpg",
        image: "images/quilts/tom_boy/tom-boy.jpg",
        title: "Tom Boy",
        materials: "screen print and latex on fabric",
        dem: "36 in. x 36 in."
      }
    ];

    $scope.imgSourceBC = [{
        thumb: "images/BC_Emb/DSCN0966/thumb.jpg",
        image: "images/BC_Emb/DSCN0966/DSCN0966.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0967/thumb.jpg",
        image: "images/BC_Emb/DSCN0967/DSCN0967.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0968/thumb.jpg",
        image: "images/BC_Emb/DSCN0968/DSCN0968.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0969/thumb.jpg",
        image: "images/BC_Emb/DSCN0969/DSCN0969.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0970/thumb.jpg",
        image: "images/BC_Emb/DSCN0970/DSCN0970.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0971/thumb.jpg",
        image: "images/BC_Emb/DSCN0971/DSCN0971.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0972/thumb.jpg",
        image: "images/BC_Emb/DSCN0972/DSCN0972.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0973/thumb.jpg",
        image: "images/BC_Emb/DSCN0973/DSCN0973.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0974/thumb.jpg",
        image: "images/BC_Emb/DSCN0974/DSCN0974.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0975/thumb.jpg",
        image: "images/BC_Emb/DSCN0975/DSCN0975.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0976/thumb.jpg",
        image: "images/BC_Emb/DSCN0976/DSCN0976.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0977/thumb.jpg",
        image: "images/BC_Emb/DSCN0977/DSCN0977.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0978/thumb.jpg",
        image: "images/BC_Emb/DSCN0978/DSCN0978.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0979/thumb.jpg",
        image: "images/BC_Emb/DSCN0979/DSCN0979.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0980/thumb.jpg",
        image: "images/BC_Emb/DSCN0980/DSCN0980.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0981/thumb.jpg",
        image: "images/BC_Emb/DSCN0981/DSCN0981.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0982/thumb.jpg",
        image: "images/BC_Emb/DSCN0982/DSCN0982.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0983/thumb.jpg",
        image: "images/BC_Emb/DSCN0983/DSCN0983.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0984/thumb.jpg",
        image: "images/BC_Emb/DSCN0984/DSCN0984.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0985/thumb.jpg",
        image: "images/BC_Emb/DSCN0985/DSCN0985.jpg",
      },
      {
        thumb: "images/BC_Emb/DSCN0986/thumb.jpg",
        image: "images/BC_Emb/DSCN0986/DSCN0986.jpg",
      }


    ];

    $scope.imgSourceFibers = [{
        thumb: "images/fibers/HarmeningArizona/thumb.jpg",
        image: "images/fibers/HarmeningArizona/HarmeningArizona.jpg",
        title: "Arizona"
      },
      {
        thumb: "images/fibers/HarmeningEasternTexas/thumb.jpg",
        image: "images/fibers/HarmeningEasternTexas/HarmeningEasternTexas.jpg",
        title: "Texas"
      },
      {
        thumb: "images/fibers/HarmeningIowa/thumb.jpg",
        image: "images/fibers/HarmeningIowa/HarmeningIowa.jpg",
        title: "Iowa"
      },
      {
        thumb: "images/fibers/HarmeningNewMexico/thumb.jpg",
        image: "images/fibers/HarmeningNewMexico/HarmeningNewMexico.jpg",
        title: "New Mexico"
      },
      {
        thumb: "images/fibers/HarmeningSouthernIllinois/thumb.jpg",
        image: "images/fibers/HarmeningSouthernIllinois/HarmeningSouthernIllinois.jpg",
        title: "Southern Illinois"
      },
      {
        thumb: "images/fibers/western-texas/thumb.jpg",
        image: "images/fibers/western-texas/western-texas.jpg",
        title: "Western Texas"
      },
    ];

    $scope.imgSourceMetal = [{
        thumb: "images/metalica/DSCN0068/thumb.jpg",
        image: "images/crochet/DSCN0068/DSCN0068.jpg",
        title: "Metalica(Installation)"
      },
      {
        thumb: "images/metalica/DSCN0923/thumb.jpg",
        image: "images/crochet/DSCN0923/DSCN0923.jpg",
        title: "Battery"
      },
      {
        thumb: "images/metalica/DSCN0924/thumb.jpg",
        image: "images/crochet/DSCN0924/DSCN0924.jpg",
        title: "Motor Breath"
      },
      {
        thumb: "images/metalica/DSCN0926/thumb.jpg",
        image: "images/crochet/DSCN0926/DSCN0926.jpg",
        title: "King Nothing"
      },
      {
        thumb: "images/metalica/DSCN0927/thumb.jpg",
        image: "images/crochet/DSCN0927/DSCN0927.jpg",
        title: "Creeping Death"
      },
      {
        thumb: "images/metalica/DSCN0928/thumb.jpg",
        image: "images/crochet/DSCN0928/DSCN0928.jpg",
        title: "Last Caress"
      },
      {
        thumb: "images/metalica/DSCN0929/thumb.jpg",
        image: "images/crochet/DSCN0929/DSCN0929.jpg",
        title: "Ride the Lightning"
      },
      {
        thumb: "images/metalica/DSCN0930/thumb.jpg",
        image: "images/crochet/DSCN0930/DSCN0930.jpg",
        title: "Fuel"
      },
      {
        thumb: "images/metalica/DSCN0931/thumb.jpg",
        image: "images/crochet/DSCN0931/DSCN0931.jpg",
        title: "Whiplash"
      },
      {
        thumb: "images/metalica/DSCN0932/thumb.jpg",
        image: "images/crochet/DSCN0932/DSCN0932.jpg",
        title: "Anesthesia Pulling Teeth"
      },
      {
        thumb: "images/metalica/DSCN0933/thumb.jpg",
        image: "images/crochet/DSCN0933/DSCN0933.jpg",
        title: "Wherever I May Roam"
      },
      {
        thumb: "images/metalica/DSCN0934/thumb.jpg",
        image: "images/crochet/DSCN0934/DSCN0934.jpg",
        title: "Justice for All"
      },
      {
        thumb: "images/metalica/DSCN0936/thumb.jpg",
        image: "images/crochet/DSCN0936/DSCN0936.jpg",
        title: "Fight Fire with Fire"
      },
      {
        thumb: "images/metalica/DSCN0937/thumb.jpg",
        image: "images/crochet/DSCN0937/DSCN0937.jpg",
        title: "Seek and Destroy"
      },
      {
        thumb: "images/metalica/DSCN0939/thumb.jpg",
        image: "images/crochet/DSCN0939/DSCN0939.jpg",
        title: "Fade to Black"
      },
      {
        thumb: "images/metalica/DSCN0940/thumb.jpg",
        image: "images/crochet/DSCN0940/DSCN0940.jpg",
        title: "Hit the Lights"
      },
      {
        thumb: "images/metalica/DSCN0942/thumb.jpg",
        image: "images/crochet/DSCN0942/DSCN0942.jpg",
        title: "The Thing that should not be"
      },
      {
        thumb: "images/metalica/DSCN0943/thumb.jpg",
        image: "images/crochet/DSCN0943/DSCN0943.jpg",
        title: "For Whom the Bell Tolls"
      },
      {
        thumb: "images/metalica/DSCN0944/thumb.jpg",
        image: "images/crochet/DSCN0944/DSCN0944.jpg",
        title: "The Unforgiven"
      },
      {
        thumb: "images/metalica/DSCN0945/thumb.jpg",
        image: "images/crochet/DSCN0945/DSCN0945.jpg",
        title: "Frayed Ends of Sanity"
      },
      {
        thumb: "images/metalica/DSCN0946/thumb.jpg",
        image: "images/crochet/DSCN0946/DSCN0946.jpg",
        title: "Don’t Tread on Me"
      },
      {
        thumb: "images/metalica/DSCN0947/thumb.jpg",
        image: "images/crochet/DSCN0947/DSCN0947.jpg",
        title: "Holier Than Thou"
      },
      {
        thumb: "images/metalica/DSCN0949/thumb.jpg",
        image: "images/crochet/DSCN0949/DSCN0949.jpg",
        title: "The Four Horsemen"
      },
      {
        thumb: "images/metalica/DSCN0950/thumb.jpg",
        image: "images/crochet/DSCN0950/DSCN0950.jpg",
        title: "Dyers Eve"
      },
      {
        thumb: "images/metalica/DSCN0951/thumb.jpg",
        image: "images/crochet/DSCN0951/DSCN0951.jpg",
        title: "Harvester of Sorrow"
      },
      {
        thumb: "images/metalica/DSCN0952/thumb.jpg",
        image: "images/crochet/DSCN0952/DSCN0952.jpg",
        title: "Shortest Straw"
      },
      {
        thumb: "images/metalica/DSCN0953/thumb.jpg",
        image: "images/crochet/DSCN0953/DSCN0953.jpg",
        title: "Sanitarium"
      },
      {
        thumb: "images/metalica/DSCN0954/thumb.jpg",
        image: "images/crochet/DSCN0954/DSCN0954.jpg",
        title: "Nothing Else Matters"
      },
      {
        thumb: "images/metalica/DSCN0956/thumb.jpg",
        image: "images/crochet/DSCN0956/DSCN0956.jpg",
        title: "Master of Puppets"
      },
      {
        thumb: "images/metalica/DSCN0957/thumb.jpg",
        image: "images/crochet/DSCN0957/DSCN0957.jpg",
        title: "Crash Course in Brain Surgery"
      },
      {
        thumb: "images/metalica/DSCN0958/thumb.jpg",
        image: "images/crochet/DSCN0958/DSCN0958.jpg",
        title: "Eye of the Beholder"
      },
      {
        thumb: "images/metalica/DSCN0959/thumb.jpg",
        image: "images/crochet/DSCN0959/DSCN0959.jpg",
        title: "Ain’t my Bitch"
      },
      {
        thumb: "images/metalica/DSCN0960/thumb.jpg",
        image: "images/crochet/DSCN0960/DSCN0960.jpg",
        title: "Sad But True"
      },
      {
        thumb: "images/metalica/DSCN0961/thumb.jpg",
        image: "images/crochet/DSCN0961/DSCN0961.jpg",
        title: "Enter Sandman"
      },
      {
        thumb: "images/metalica/DSCN0962/thumb.jpg",
        image: "images/crochet/DSCN0962/DSCN0962.jpg",
        title: "Leper Messiah"
      },
      {
        thumb: "images/metalica/DSCN0963/thumb.jpg",
        image: "images/crochet/DSCN0963/DSCN0963.jpg",
        title: "Am I Evil"
      }


    ];

    $scope.imgSourcePainting = [{
        thumb: "images/painting/Alternations/thumb.jpg",
        image: "images/painting/Alternations/Alternations.jpg",
        title: "Alternations",
        materials: "acrylic, paper, oil pastel on canvas",
        dem: "36 in. x 36 in."
      },
      {
        thumb: "images/painting/conversion_pieces/thumb.jpg",
        image: "images/painting/conversion_pieces/conversion_pieces.jpg",
        title: "Conversion Pieces",
        materials: "acrylic, paper, oil pastel on canvas",
        dem: "36 in. x 36 in."
      },
      {
        thumb: "images/painting/DSC00392/thumb.jpg",
        image: "images/painting/DSC00392/DSC00392.jpg",
        title: "Untitled",
        materials: "Acrylic and enamel on canvas",
        dem: "30 in. x 30 in."
      },
      {
        thumb: "images/painting/DSC00393/thumb.jpg",
        image: "images/painting/DSC00393/DSC00393.jpg",
        title: "Map",
        materials: "Acrylic, spray paint, enamel, and newsprint on canvas",
        dem: "30 in. x 30 in."
      },
      {
        thumb: "images/painting/DSC00394/thumb.jpg",
        image: "images/painting/DSC00394/DSC00394.jpg",
        title: "Never Ending",
        materials: "acrylic, spray paint, and enamel on canvas",
        dem: "30 in. x 30 in."
      },
      {
        thumb: "images/painting/DSC00682/thumb.jpg",
        image: "images/painting/DSC00682/DSC00682.jpg",
        title: "Surface",
        materials: "acrylic, spray paint, and enamel on canvas",
        dem: "30 in. x 30 in."
      },
      {
        thumb: "images/painting/DSC00683/thumb.jpg",
        image: "images/painting/DSC00683/DSC00683.jpg",
        title: "Center Line",
        materials: "acrylic, spray paint, and enamel on canvas",
        dem: "30 in. x 34 in."
      },
      {
        thumb: "images/painting/DSC00685/thumb.jpg",
        image: "images/painting/DSC00685/DSC00685.jpg",
        title: "Office",
        materials: "acrylic, tape, spray paint, and newsprint on canvas",
        dem: "30 in. x 30 in."
      },
      {
        thumb: "images/painting/DSC01420/thumb.jpg",
        image: "images/painting/DSC01420/DSC01420.jpg",
        title: "Blind",
        materials: "acrylic, tape, spray paint newsprint on canvas",
        dem: "36 in. x 36 in."
      },
      {
        thumb: "images/painting/DSC01423/thumb.jpg",
        image: "images/painting/DSC01423/DSC01423.jpg",
        title: "Hallway",
        materials: "acrylic, tape, spray paint, newsprint on canvas",
        dem: "30 in. x 40 in."
      },
      {
        thumb: "images/painting/DSC01424/thumb.jpg",
        image: "images/painting/DSC01424/DSC01424.jpg",
        title: "Handicap",
        materials: "tape, plastic ribbon, and sheet rock paper on canvas",
        dem: ""
      },
      {
        thumb: "images/painting/DSC01426/thumb.jpg",
        image: "images/painting/DSC01426/DSC01426.jpg",
        title: "Exterior",
        materials: "acrylic, tape, spray paint, plastic light cover, and newsprint on canvas",
        dem: "30 in. x 30 in."
      },
      {
        thumb: "images/painting/DSC02738/thumb.jpg",
        image: "images/painting/DSC02738/DSC02738.jpg",
        title: "Street View",
        materials: "acrylic, tape, spray paint, and newsprint on canvas",
        dem: "36 in. x 36 in."
      },
      {
        thumb: "images/painting/DSC02741/thumb.jpg",
        image: "images/painting/DSC02741/DSC02741.jpg",
        title: "Untitled",
        materials: "acrylic, spray paint, and newsprint on canvas",
        dem: "36 in. x 36 in."
      },
      {
        thumb: "images/painting/DSC02742/thumb.jpg",
        image: "images/painting/DSC02742/DSC02742.jpg",
        title: "The Backyard",
        materials: "acrylic and spray paint on canvas",
        dem: "30 in. x 30 in."
      },
      {
        thumb: "images/painting/DSC02743/thumb.jpg",
        image: "images/painting/DSC02743/DSC02743.jpg",
        title: "Downtown",
        materials: "acrylic and spray paint on canvas",
        dem: "30 in. x 30 in."
      },
      {
        thumb: "images/painting/IMG_7954/thumb.jpg",
        image: "images/painting/IMG_7954/IMG_7954.jpg",
        title: "Space Cadet",
        materials: "acrylic, spray paint and tape on canvas",
        dem: "30 in. x 40 in."
      },
      {
        thumb: "images/painting/IMG_7961/thumb.jpg",
        image: "images/painting/IMG_7961/IMG_7961.jpg",
        title: "Peeking",
        materials: "acrylic, tape, spray paint, weather stripping, newsprint on canvas",
        dem: "36 in. x 48 in."
      },
      {
        thumb: "images/painting/IMG_7969/thumb.jpg",
        image: "images/painting/IMG_7969/IMG_7969.jpg",
        title: "Roof",
        materials: "acrylic, tape, spray paint, and newsprint on canvas",
        dem: "24 in. x 32 in."
      },
      {
        thumb: "images/painting/IMG_7979/thumb.jpg",
        image: "images/painting/IMG_7979/IMG_7979.jpg",
        title: "Stairs",
        materials: "acrylic, tape, spray paint, and newsprint on canvas",
        dem: "30 in. x 24 in."
      },
      {
        thumb: "images/painting/IMG_7983/thumb.jpg",
        image: "images/painting/IMG_7983/IMG_7983.jpg",
        title: "Parking Lot",
        materials: "acrylic, tape, spray paint newsprint on canvas",
        dem: "24 in. x 30 in."
      },
      {
        thumb: "images/painting/IMG_8005/thumb.jpg",
        image: "images/painting/IMG_8005/IMG_8005.jpg",
        title: "Church / Out the Window",
        materials: "(Installation Layered and Built/Knoxville)",
        dem: ""
      },
      {
        thumb: "images/painting/IMG_8009/thumb.jpg",
        image: "images/painting/IMG_8009/IMG_8009.jpg",
        title: "Church",
        materials: "acrylic, tape, spray paint, plastic lighting, and newsprint on canvas",
        dem: "36 in. x 36 in."
      },
      {
        thumb: "images/painting/IMG_8021/thumb.jpg",
        image: "images/painting/IMG_8021/IMG_8021.jpg",
        title: "Out the Window",
        materials: "acrylic, tape, spray paint, plastic lighting, and newsprint on canvas",
        dem: "48 in. x 60 in."
      },
      {
        thumb: "images/painting/IMG_8023/thumb.jpg",
        image: "images/painting/IMG_8023/IMG_8023.jpg",
        title: "Layered and Built/Knoxville Installation",
        materials: "acrylic, tape, spray paint, plastic lighting, and newsprint on canvas",
        dem: ""
      },
      {
        thumb: "images/painting/IMG_8040/thumb.jpg",
        image: "images/painting/IMG_8040/IMG_8040.jpg",
        title: "Layered and Built/Knoxville Installation",
        materials: "acrylic, tape, spray paint, plastic lighting, and newsprint on canvas",
        dem: ""
      },
      {
        thumb: "images/painting/IMG_8044/thumb.jpg",
        image: "images/painting/IMG_8044/IMG_8044.jpg",
        title: "Carbonite",
        materials: "acrylic, tape, spray paint, and newsprint on canvas",
        dem: ""
      },
      {
        thumb: "images/painting/IMG_8047/thumb.jpg",
        image: "images/painting/IMG_8047/IMG_8047.jpg",
        title: "Looking Down",
        materials: "acrylic, tape, spray paint, and newsprint on canvas",
        dem: ""
      },
      {
        thumb: "images/painting/DSC01467/thumb.jpg",
        image: "images/painting/DSC01467/DSC01467.jpg",
        title: "Layered and Built/Ohio Installation",
        materials: "acrylic, tape, spray paint, plastic lighting, and newsprint on canvas",
        dem: ""
      }



    ];

    $scope.imgSourceMatresses = [{
        thumb: "images/matresses/cant_a_girl_get_some_privacy/thumb.jpg",
        image: "images/matresses/cant_a_girl_get_some_privacy/cant_a_girl_get_some_privacy.jpg",
        title: "Cant a Girl Get Some Privacy"

      },
      {
        thumb: "images/matresses/cant_a_girl_get_some_privacy_detail/thumb.jpg",
        image: "images/matresses/cant_a_girl_get_some_privacy_detail/cant_a_girl_get_some_privacy_detail.jpg",
        title: "Cant a Girl Get Some Privacy (Detail)"

      },
      {
        thumb: "images/matresses/hard_night_of_clubbing/thumb.jpg",
        image: "images/matresses/hard_night_of_clubbing/hard_night_of_clubbing.jpg",
        title: "Hard Night of Clubbing"

      },
      {
        thumb: "images/matresses/mr_big_stuff/thumb.jpg",
        image: "images/matresses/mr_big_stuff/mr_big_stuff.jpg",
        title: "Mr Big Stuff"

      },
      {
        thumb: "images/matresses/mr_big_stuff_detail/thumb.jpg",
        image: "images/matresses/mr_big_stuff_detail/mr_big_stuff_detail.jpg",
        title: "Mr Big Stuff (Detail)"

      },
      {
        thumb: "images/matresses/oh_how_lady_like/thumb.jpg",
        image: "images/matresses/oh_how_lady_like/oh_how_lady_like.jpg",
        title: "Oh How Lady Like"

      },
      {
        thumb: "images/matresses/oh_how_lady_like_detail/thumb.jpg",
        image: "images/matresses/oh_how_lady_like_detail/oh_how_lady_like_detail.jpg",
        title: "Oh How Lady Like (Detail)"

      },


    ];


  $scope.showDialog = function(ev, array, index) {
  $mdDialog.show({
    controller: function Ctrl($scope, $mdDialog) {
      $scope.arr = array;
      $scope.idx = index;

      console.log($scope.arr);

      $scope.hide = function() {
     $mdDialog.hide();
   };

   $scope.cancel = function() {
     $mdDialog.cancel();
   };

   $scope.answer = function(answer) {
     $mdDialog.hide(answer);
      };
    },
    templateUrl: 'popup/slideshow.html',
    parent: angular.element(document.body),
    targetEvent: ev,
    clickOutsideToClose:true
  })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
};

    // $scope.showSlideShow = function(array, index) {
    //
    //   var position = this._mdPanel.newPanelPosition()
    //     .absolute()
    //     .right()
    //     .top();
    //
    //   var animation = $scope._mdPanel.newPanelAnimation();
    //   // animation.duration($scope.duration || $scope.separateDurations);
    //   animation.openFrom({
    //     top: document.documentElement.clientHeight,
    //     left: document.documentElement.clientWidth / 2 - 250
    //   });
    //   animation.closeTo({
    //     top: document.documentElement.clientHeight,
    //     left: document.documentElement.clientWidth / 2 - 250
    //   });
    //
    //   animation.withAnimation($scope._mdPanel.animation.FADE);
    //
    //
    //   var config = {
    //     animation: animation,
    //     attachTo: angular.element(document.body),
        // controller: function Ctrl($scope, mdPanelRef) {
        //   $scope._mdPanelRef = mdPanelRef;
        //
        //   $scope.closeDialog = function() {
        //     $scope._mdPanelRef.close();
        //   };
        // },
    //     templateUrl: 'popup/slideshow.html',
    //     position: position,
    //     trapFocus: true,
    //     zIndex: 150,
    //     clickOutsideToClose: true,
    //     clickEscapeToClose: true,
    //     hasBackdrop: true,
    //   };
    //
    //   $scope._mdPanel.open(config);
    //
    // };


  };
  AppCtrl.$inject = ['$mdPanel', '$scope','$mdDialog'];
  var app = angular.module('App', ['ngMaterial']);
  app.controller('AppCtrl', AppCtrl);


}());
