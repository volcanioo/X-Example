// Container
const campaignsContainer = document.getElementById('campaigns');

// All Items
const items = document.querySelectorAll('.item');

// Get Last Index
function getLastIndex() {
    var domElements = document.body.querySelectorAll('.item');
    let _index = 0;
    for(var i=0;i<domElements.length;i++){
       if(domElements[i].className==="item active"){
          _index = i
       }
    }
    return _index;
}

// Get Items By Size
function getItemsBySize(showingItemCount) {
    
    // Showing Item Add Active Class
    for (i = 0; i < items.length; ++i) {
        items[i].classList.remove('active');
    }
    for (i = 0; i < showingItemCount; ++i) {
        items[i].classList.add('active');
    }

}

// Next
function nextSlides(_showingItemCount) {
    
    let _hideElementCount = items.length - _showingItemCount;
    let _lastActiveIndex = getLastIndex();
    if (_lastActiveIndex < items.length-1) {
        for (i = 0; i < _hideElementCount; i++) items[i].classList.remove('active');
        if(_showingItemCount != 1 && _showingItemCount != 2) {
            for (i = _lastActiveIndex-1; i <= _lastActiveIndex+1; i++) items[i].classList.add('active');
        } else if (_showingItemCount == 2) {
            for (i = _lastActiveIndex; i <= _lastActiveIndex+1; i++) items[i].classList.add('active');
        } else {
            items[_lastActiveIndex+1].classList.add('active');
        }
    } else {
        for (i = 0; i < items.length; i++) items[i].classList.remove('active');
        for (i = 0; i < _showingItemCount; i++) items[i].classList.add('active');
    }

}

// Prev
function prevSlides(_showingItemCount) {

    // Showing Item Counter
    const showingItemCount = Math.floor(campaignsContainer.clientWidth/(220+10));
    let _hideElementCount = items.length - _showingItemCount;
    let _lastActiveIndex = getLastIndex();
    //alert(_lastActiveIndex)
    if (_lastActiveIndex > items.length-1) {
        for (i = 0; i < _hideElementCount; i++) items[i].classList.remove('active');
        if(_showingItemCount != 1) {
            for (i = _lastActiveIndex; i < _lastActiveIndex+_showingItemCount; i++) items[i].classList.add('active');
        } else {
            items[_lastActiveIndex-1].classList.add('active');
        }
    } else if(_lastActiveIndex==0) {
        for (i = 0; i < items.length; i++) items[i].classList.remove('active');
        items[items.length-1].classList.add('active');
    } else if (document.body.querySelectorAll('.item')[0].className === "item active") {
        for (i = 0; i < items.length; i++) items[i].classList.remove('active');
        for (i = items.length-1; i > items.length-_showingItemCount-1; i--) items[i].classList.add('active');
    } else {
        for (i = 0; i < items.length; i++) items[i].classList.remove('active');
        for (i = _lastActiveIndex-1; i > (_lastActiveIndex-1)-showingItemCount; i--) items[i].classList.add('active');
    }

}

// Resize
window.onresize = function() {

    // Showing Item Counter
    let showingItemCount = Math.floor(campaignsContainer.clientWidth/(220+10));
    getItemsBySize(showingItemCount);

    document.getElementById('next').onclick = function() {
        nextSlides(showingItemCount);
    }
    document.getElementById('prev').onclick = function() {
        prevSlides(showingItemCount);
    }

    // Swipe
    var myElement = document.getElementById('campaigns');
    var mc = new Hammer(myElement);
    
    mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    
    mc.on("panend", function(ev) {
        
        // Showing Item Counter
        let showingItemCount = Math.floor(campaignsContainer.clientWidth/(220+10));
        getItemsBySize(showingItemCount);

        if(ev.direction == 4) prevSlides(showingItemCount);
        if(ev.direction == 2) nextSlides(showingItemCount);
        
    });
    
}

// Load
window.onload = function() {
    
    // Showing Item Counter
    let showingItemCount = Math.floor(campaignsContainer.clientWidth/(220+10));
    getItemsBySize(showingItemCount);

    document.getElementById('next').onclick = function() {
        nextSlides(showingItemCount);
    }
    document.getElementById('prev').onclick = function() {
        prevSlides(showingItemCount);
    }

    // Swipe
    var myElement = document.getElementById('campaigns');
    var mc = new Hammer(myElement);
    
    mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    
    mc.on("panend", function(ev) {
        if(ev.direction == 4) prevSlides(showingItemCount);
        if(ev.direction == 2) nextSlides(showingItemCount);
    });
    
};



// get index methodu yazilmasi gerekiyor.
// indexten sonraki 2 tane acilacak, onceki 2 tane kapanacak.