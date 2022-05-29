
    let currentDroppable = null;

    objectPlane.onmousedown = function(event) {

      let shiftX = event.clientX - objectPlane.getBoundingClientRect().left;
      let shiftY = event.clientY - objectPlane.getBoundingClientRect().top;

      objectPlane.style.position = 'absolute';
      objectPlane.style.zIndex = 1000;

      document.body.append(objectPlane);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        objectPlane.style.left = pageX - shiftX + 'px';
        objectPlane.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        objectPlane.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        objectPlane.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { 
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { 
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      objectPlane.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        objectPlane.onmouseup = null;
      };

    };

    objectPlane.ondragstart = function() {
      return false;
    };
  

    objectPin1.onmousedown = function(event) {

      let shiftX = event.clientX - objectPin1.getBoundingClientRect().left;
      let shiftY = event.clientY - objectPin1.getBoundingClientRect().top;

      objectPin1.style.position = 'absolute';
      objectPin1.style.zIndex = 1000;

      document.body.append(objectPin1);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        objectPin1.style.left = pageX - shiftX + 'px';
        objectPin1.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        objectPin1.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        objectPin1.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) {
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) {
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      objectPin1.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        objectPin1.onmouseup = null;
      };

    };


    objectPin1.ondragstart = function() {
      return false;
    };
  
    
    objectPin2.onmousedown = function(event) {

      let shiftX = event.clientX - objectPin2.getBoundingClientRect().left;
      let shiftY = event.clientY - objectPin2.getBoundingClientRect().top;

      objectPin2.style.position = 'absolute';
      objectPin2.style.zIndex = 10000;

      document.body.append(objectPin2);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        objectPin2.style.left = pageX - shiftX + 'px';
        objectPin2.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        objectPin2.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        objectPin2.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { 
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { 
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      objectPin2.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        objectPin2.onmouseup = null;
      };

    };


    objectPin2.ondragstart = function() {
      return false;
    };
  