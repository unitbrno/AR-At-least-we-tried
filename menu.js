  function takePhoto(){
  const player = document.getElementById('player');
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const captureButton = document.getElementById('capture');

  const constraints = {
    video: true,
  };
  navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
      const track = stream.getVideoTracks()[0];
      let imageCapture = new ImageCapture(track);
      let image = imageCapture.grabFrame().then((bitmap) =>{

        context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

        var link = document.createElement('a');
        link.download = "test.png";
        link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        link.click();
         });
      });
}


var scene1 = `<!--SCENE1 MENU BUTTON-->
      <a-entity id="scene1" >
        <a-box
          color="grey"
          scale="4 1 0.1"
          onclick="nextScene(this, 'scene2')"
        >
          <a-text
            value="MENU"
            position="-0.5 0 1"
            rotation="0 0 0"
            side="double"
          ></a-text>
        </a-box>
      </a-entity>`

var scene2 = `<!--SCENE2 ACTUAL MENU-->
      <a-entity id="scene2" visible="true" position="2 -1.5 0">
        <a-box
          color="grey"
          position="0 3.2 0"
          scale="4 1 0.1"
          onclick="nextScene(this, 'scene3')"
        >
          <a-text
            value="MANUAL"
            position="-0.5 0 1"
            rotation="0 0 0"
            side="double"
          ></a-text
        ></a-box>
        <a-box color="grey" position="0 2 0" scale="4 1 0.1" onclick="nextScene(this, 'scene6')"
          ><a-text
            value="JOB LIST"
            position="-0.5 0 1"
            rotation="0 0 0"
            side="double"
          ></a-text
        ></a-box>
        <a-box color="grey" position="0 0.8 0" scale="4 1 0.1" onclick="nextScene(this, 'scene8')"
          ><a-text
            value="CHECK"
            position="-0.5 0 1"
            rotation="0 0 0"
            side="double"
          ></a-text
        ></a-box>
        <a-box color="grey" position="0 -0.4 0" scale="4 1 0.1" onclick="nextScene(this, 'scene9')">
          <a-text
            value="MAP"
            position="-0.5 0 1"
            rotation="0 0 0"
            side="double"
          ></a-text
        ></a-box>
        <a-box color="grey" position="0 -1.6 0" scale="4 1 0.1" onclick="takePhoto()">
          <a-text
            value="CAM"
            position="-0.5 0 1"
            rotation="0 0 0"
            side="double"
          ></a-text
        ></a-box>
      </a-entity>`

var scene3 = `<!--SCENE3 MANUAL MENU-->
      <a-entity id="scene3" visible="true" position="0 -1.5 0">
      <a-box
          color="grey"
          position="0 3.4 0"
          scale="1 1 0.1"
          onclick="nextScene(this, 'scene2')"
        >
          <a-text
            value="X"
            position="-0.5 0 1"
            rotation="0 0 0"
            side="double"
          ></a-text
        ></a-box>
        <a-box
          color="blue"
          position="0 2.2 0"
          scale="4 1 0.1"
          onclick="nextScene(this, 'scene4')"
          ><a-text
            value="MAN1"
            position="-0.5 0 1"
            rotation="0 0 0"
            side="double"
          ></a-text
        ></a-box>
        <a-box color="red" position="0 1 0" scale="4 1 0.1">
          <a-text
            value="MAN2"
            position="-0.5 0 1"
            rotation="0 0 0"
            side="double"
          ></a-text
        ></a-box>
        <a-box color="green" position="0 -0.2 0" scale="4 1 0.1"
          ><a-text
            value="MAN3"
            position="-0.5 0 1"
            rotation="0 0 0"
            side="double"
          ></a-text
        ></a-box>
      </a-entity>`

var scene4 = `<!--SCENE4 MAN1-->
      <a-entity id="scene4" visible="true" position="2 -1.5 0">
      <a-box
          color="grey"
          position="0 5.5 0"
          scale="1 1 0.1"
          onclick="nextScene(this, 'scene2')"
        >
          <a-text
            value="X"
            position="-0.5 0 1"
            rotation="0 0 0"
            side="double"
          ></a-text
        ></a-box>
        <a-box color="grey" position="0 2.2 0" scale="5 5 0.1"></a-box>
        <a-triangle
          color="grey"
          position="-4 2 0"
          scale="1.5 1.7 0.1"
          rotation="0 0 90"
        ></a-triangle>
        <a-triangle
          color="grey"
          position="4 2 0"
          scale="1.5 1.7 0.1"
          rotation="0 -30 -90"
          onclick="nextScene(this, 'scene5')"
        ></a-triangle>
        <a-text
          color="white"
          value="Dneska si ukazeme\n
              jak se opravuje posuvne hradlo fletcher smart\n
              Jede jede masinka\n
              Dneska si ukazeme\n
              jak se opravuje posuvne hradlo fletcher smart\n
              Jede jede masinka\n
              Dneska si ukazeme\n
              jak se opravuje posuvne hradlo fletcher smart\n"
          position="-2.3 2.2 0.3"
          rotation="0 0 0"
          side="double"
        ></a-text>
      </a-entity>`

var scene5 = `<!--SCENE5 MAN1-2-->
      <a-entity id="scene5" visible="true" position="2 -1.5 0">
      <a-box
          color="grey"
          position="0 5.5 0"
          scale="1 1 0.1"
          onclick="nextScene(this, 'scene2')"
        >
          <a-text
            value="X"
            position="-0.5 0 1"
            rotation="0 0 0"
            side="double"
          ></a-text
        ></a-box>
        <a-box color="grey" position="0 2.2 0" scale="5 5 0.1"></a-box>
        <a-triangle
          color="grey"
          position="-4 2 0"
          scale="1.5 1.7 0.1"
          rotation="0 0 90"
        ></a-triangle>
        <a-triangle
          color="grey"
          position="4 2 0"
          scale="1.5 1.7 0.1"
          rotation="0 -30 -90"
        ></a-triangle>
        <a-text
          color="white"
          value="NIKU\n
              neco strasne moc dlouheho\n
              neco strasne moc dlouheho\n
              Dneska si ukazeme\n
              neco strasne moc dlouhehoneco strasne moc dlouheho\n
              neco strasne moc dlouheho\n
              neco strasne moc dlouheho\n
              neco strasne moc dlouhehoneco strasne moc dlouheho\n
              Jede jede masinka\n
              A tak"
          position="-2.3 2.2 0.3"
          rotation="0 0 0"
          side="double"
        ></a-text>
      </a-entity>`

var scene6 = `<!--SCENE6 nceo-->
      <a-entity id="scene6" visible="true" position="0 -1.5 0">
      <a-box
          color="grey"
          position="0 2.4 0"
          scale="1 1 0.1"
          onclick="nextScene(this, 'scene2')"
        >
          <a-text
            value="X"
            position="-0.5 0 1"
            rotation="0 0 0"
            side="double"
          ></a-text
        ></a-box>
        <a-box
          color="blue"
          position="0 1.2 0"
          scale="4 1 0.1"
          onclick="nextScene(this, 'scene7')"
          ><a-text
            value="JOB 1"
            position="-0.5 0 1"
            rotation="0 0 0"
            side="double"
          ></a-text
        ></a-box>
        <a-box color="red" position="0 0 0" scale="4 1 0.1" scale="0.5 0.5 0.5">
          <a-text
            value="JOB 2"
            position="-0.5 0 1"
            rotation="0 0 0"
            side="double"
          ></a-text
        ></a-box>
        </a-entity>`

var scene7 = `<!--SCENE4 JOB1-->
      <a-entity id="scene7" visible="true" position="2 -1.5 0">
      <a-box
          color="grey"
          position="-2 3.0 0"
          scale="0.5 0.5 0.1"
          onclick="nextScene(this, 'scene2')"
        >
          <a-text
            value="X"
            position="-0.2 0 1"
            rotation="0 0 0"
            side="double"
          ></a-text
        ></a-box>
      <a-triangle color="yellow" position="-1.5 -2 -7" rotation="-90 0 0"></a-triangle>
      <a-triangle color="yellow" position="-1.5 -2 -2" rotation="-90 0 0"></a-triangle>
      <a-triangle color="yellow" position="-1.5 -2 2" rotation="-90 0 0"></a-triangle>
      <a-triangle color="yellow" position="-3 -2 -7" rotation="-90 0 90"></a-triangle>
        <a-box color="grey" position="0 1.5 0" scale="5 2 0.1"></a-box>
        <a-text
          color="white"
          value="Job description\n
              Vymenit olej\n
              Letadlo: A320\n
              Hangár 2\n"
          position="-2 1.4 0.5"
          scale="1 1 0.1"
          rotation="0 0 0"
          side="double"
        ></a-text>
        <a-text
        color="white"
        value="[X] Otevřít panel\n
            [X] Vycerpat olej\n
            [ ] Nacerpat novy olej\n
            [ ] Zavrit kryt\n"
        position="0 1.4 0.5"
        rotation="0 0 0"
        side="double"
      ></a-text>
      </a-entity>`

var scene8 = `<!--Check objektu-->
      <a-entity id="scene8" position="0 -2 3">
      <a-box
      color="grey"
      position="1 2.2 0"
      scale="1 1 0.1"
      onclick="nextScene(this, 'scene2')"
    >
      <a-text
        value="X"
        position="-0.5 0 1"
        rotation="0 0 0"
        side="double"
      ></a-text
    ></a-box>
        <a-sphere
        cursor-listener
        position="0 0 -1"
        ></a-sphere>
        <a-box
        position="-1 0 -1"
        ></a-box>
        <a-box
        position="1 0 -1"
        ></a-box>
        <a-triangle
        position="-1 1 -1"
        ></a-triangle>
        <a-triangle
        position="0 0 0"
        rotation="0 0 -1"
        ></a-triangle>
        <a-triangle
        position="0 0 -2"
        rotation="0 0 0"
        ></a-triangle>
      </a-entity>`

      var scene9 = `<!--Check objektu-->
      <a-entity id="scene9" position="0 -2 2">
      <a-box
      color="grey"
      position="1 3.4 0"
      scale="1 1 0.1"
      onclick="nextScene(this, 'scene2')"
    >
      <a-text
        value="X"
        position="-0.5 0 1"
        rotation="0 0 0"
        side="double"
      ></a-text
    ></a-box>

    <a-image src="SF-Airport-Terminal-Map.jpg" position="0 0 0" scale="4 4 4"></a-image>
      </a-entity>`


function showMenu(){
    if(document.getElementById("menu").innerHTML == ""){
      document.getElementById("menu").innerHTML = scene1;
    }
    else{
      deleteMenu();
    }
    
}


function deleteMenu(){
  document.getElementById("menu").innerHTML = ``;
}



function nextScene(clickedID, id) {
    if(id == 'scene2'){
      document.getElementById("menu").innerHTML = scene2;
    }
    else if(id == 'scene3'){
      document.getElementById("menu").innerHTML = scene3;
    }
    else if(id == 'scene4'){
      document.getElementById("menu").innerHTML = scene4;
    }
    else if(id == 'scene5'){
      document.getElementById("menu").innerHTML = scene5;
    }
    else if(id == 'scene6'){
      document.getElementById("menu").innerHTML = scene6;
    } 
    else if(id == 'scene7'){
      document.getElementById("menu").innerHTML = scene7;
    }else if(id == 'scene8'){
      document.getElementById("menu").innerHTML = scene8;
    }else if(id == 'scene9'){
      document.getElementById("menu").innerHTML = scene9;
    }
    //var sceneID = clickedID.parentElement.setAttribute("visible", "false");
    //document.getElementById(id).setAttribute("visible", "true");
}